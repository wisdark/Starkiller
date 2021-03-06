<template>
  <div>
    <div
      style="display: flex; justify-content: space-between;"
    >
      <v-breadcrumbs :items="breads" />
      <div class="pt-2">
        <agent-name-dialog
          v-model="nameDialog"
          :loading="nameLoading"
          @submit="renameAgent"
        />
        <agent-upload-dialog
          v-model="uploadDialog"
          :language="agent.language"
          :loading="uploadLoading"
          @submit="doUpload"
        />
        <agent-download-dialog
          v-model="downloadDialog"
          :loading="downloadLoading"
          @submit="doDownload"
        />
        <agent-tooltip-button
          icon="fa-user-edit"
          text="Rename Agent"
          color="primary"
          :pad-left="4"
          @click="nameDialog = true"
        />
        <agent-tooltip-button
          icon="fa-calendar-times"
          text="Clear Queued Tasks"
          color="primary"
          @click="clearQueue"
        />
        <agent-tooltip-button
          icon="fa-upload"
          text="Upload"
          @click="uploadDialog = true"
        />
        <agent-tooltip-button
          icon="fa-download"
          text="Download"
          @click="downloadDialog = true"
        />
        <agent-tooltip-button
          icon="fa-external-link-alt"
          text="New Window"
          @click="popout"
        />
        <agent-tooltip-button
          icon="fa-trash-alt"
          text="Kill Agent"
          color="error"
          @click="killAgent"
        />
      </div>
    </div>
    <div :style="splitPaneHeight()">
      <split-pane
        :min-percent="20"
        :default-percent="60"
        split="vertical"
      >
        <template slot="paneL">
          <v-tabs
            v-model="activeTab"
            class="scrollable-pane"
            fixed-tabs
          >
            <v-tab
              key="interact"
              href="#tab-interact"
            >
              Interact
            </v-tab>
            <v-tab
              key="tasks"
              href="#tab-tasks"
            >
              Tasks
            </v-tab>
            <v-tab
              key="view"
              href="#tab-view"
            >
              View
            </v-tab>
            <v-tab-item
              key="interact"
              :value="'tab-interact'"
            >
              <v-card
                class="scrollable-pane"
                flat
              >
                <agent-interact :agent="agent" />
                <v-divider />
                <h4 class="pl-4">
                  Execute Module
                </h4>
                <agent-execute-module :agents="[agent.name]" />
              </v-card>
            </v-tab-item>
            <v-tab-item
              key="tasks"
              :value="'tab-tasks'"
            >
              <v-card
                class="scrollable-pane"
                flat
              >
                <agent-command-history
                  :agent-name="agent.name"
                  :task-results="taskResults"
                />
              </v-card>
            </v-tab-item>
            <v-tab-item
              key="view"
              :value="'tab-view'"
            >
              <v-card
                class="scrollable-pane"
                flat
              >
                <agent-form :agent="agent" />
              </v-card>
            </v-tab-item>
          </v-tabs>
        </template>
        <template slot="paneR">
          <div
            ref="bottomScrollable"
            class="right-pane"
          >
            <agent-command-viewer
              :name="this.$route.params.id"
              :task-results="taskResults"
              :initialized="initialized"
              @new-results="scrollResults"
            />
          </div>
        </template>
      </split-pane>
    </div>
  </div>
</template>

<script>
import AgentForm from '@/components/agents/AgentForm.vue';
import AgentInteract from '@/components/agents/AgentInteract.vue';
import AgentCommandHistory from '@/components/agents/AgentCommandHistory.vue';
import AgentExecuteModule from '@/components/agents/AgentExecuteModule.vue';
import AgentCommandViewer from '@/components/agents/AgentCommandViewer.vue';
import AgentNameDialog from '@/components/agents/AgentNameDialog.vue';
import AgentUploadDialog from '@/components/agents/AgentUploadDialog.vue';
import AgentDownloadDialog from '@/components/agents/AgentDownloadDialog.vue';
import AgentTooltipButton from '@/components/agents/AgentTooltipButton.vue';
import SplitPane from 'vue-splitpane';
import * as agentApi from '@/api/agent-api';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ipcRenderer } from 'electron';

export default {
  name: 'AgentEdit',
  components: {
    AgentForm,
    AgentInteract,
    AgentExecuteModule,
    AgentCommandViewer,
    AgentCommandHistory,
    AgentNameDialog,
    AgentUploadDialog,
    AgentDownloadDialog,
    AgentTooltipButton,
    SplitPane,
  },
  data() {
    return {
      agent: {},
      nameLoading: false,
      uploadLoading: false,
      downloadLoading: false,
      activeTab: 'View',
      nameDialog: false,
      uploadDialog: false,
      downloadDialog: false,
      interval: null,
      taskResults: [],
      initialized: false,
    };
  },
  computed: {
    breads() {
      return [
        {
          text: 'Agents',
          disabled: this.isChild,
          to: '/agents',
          exact: true,
        },
        {
          text: `${this.id}`,
          disabled: true,
          to: '/agent-edit',
        },
      ];
    },
    id() {
      return this.$route.params.id;
    },
    isChild() {
      return !!this.$route.query.hideSideBar;
    },
  },
  watch: {
    id(val) {
      if (val) {
        this.getAgent(val);
      }
    },
  },
  mounted() {
    this.getAgent(this.$route.params.id);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    splitPaneHeight() {
      /* Not the prettiest thing, but seems to cover most window sizes to avoid page scroll.
     That's 96vh - height of breadcrumbs (57) - height of footer (36px) */
      return `height: calc(96vh - 57px ${this.isChild ? '' : '- 36px'})`;
    },
    popout() {
      ipcRenderer.send('agentWindowOpen', { id: this.$route.params.id });
      this.$router.push({ name: 'agents' });
    },
    getAgent(id) {
      agentApi.getAgent(id)
        .then((data) => {
          this.agent = data;
          if (this.interval !== null) {
            clearInterval(this.interval);
            this.interval = null;
          }
          this.interval = setInterval(async () => {
            this.taskResults = await agentApi.getResults(this.agent.name);
            this.initialized = true;
          }, 5000);
        });
    },
    async killAgent() {
      if (await this.$root.$confirm('Kill Agent', `Do you want to kill agent ${this.agent.name}?`, { color: 'red' })) {
        this.$store.dispatch('agent/killAgent', { name: this.agent.name });
        this.$toast.success(`Agent ${this.agent.name} tasked to run TASK_EXIT.`);
        this.$router.push({ name: 'agents' });
      }
    },
    async clearQueue() {
      if (await this.$root.$confirm('', 'Do you want to clear queue?', { color: 'red' })) {
        this.$store.dispatch('agent/clearQueue', { name: this.agent.name });
        this.$toast.success(`Clearing queued tasks for Agent ${this.agent.name}.`);
      }
    },
    async renameAgent({ name }) {
      if (this.nameLoading || name == null || name.length < 5) { return; }

      this.nameLoading = true;
      try {
        await this.$store.dispatch('agent/rename', { oldName: this.agent.name, newName: name });
        this.$toast.success(`Agent ${this.agent.name} tasked to change name.`);
        this.$router.push({ name: 'agents' });
      } catch (err) {
        this.$toast.error(`Error: ${err}`);
      }

      this.nameLoading = false;
      this.nameDialog = false;
    },
    async doUpload({ file, pathToFile }) {
      if (this.uploadLoading || file == null || pathToFile == null || pathToFile.length < 1) return;

      this.uploadLoading = true;
      try {
        await agentApi.uploadFile(this.agent.name, file, pathToFile);
      } catch (err) {
        this.$toast.error(`Error: ${err}`);
      }

      this.uploadLoading = false;
      this.uploadDialog = false;
    },
    async doDownload({ pathToFile }) {
      if (this.downloadLoading || pathToFile == null || pathToFile.length < 1) return;

      this.downloadLoading = true;
      try {
        await agentApi.downloadFile(this.agent.name, pathToFile);
      } catch (err) {
        this.$toast.error(`Error: ${err}`);
      }

      this.downloadLoading = false;
      this.downloadDialog = false;
    },
    /**
     * When new results appear in the AgentCommandViewer, scroll it down to the bottom.
     */
    scrollResults() {
      this.$refs.bottomScrollable.scrollTop = this.$refs.bottomScrollable.scrollHeight;
    },
  },
};
</script>

<style>
.scrollable-pane {
  max-height: 100%;
  overflow: auto;
}

.right-pane {
  background-color: white;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
