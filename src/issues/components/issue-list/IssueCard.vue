<script setup lang="ts">
import { State, type Issue } from 'src/issues/interfaces/issue.interface'
import IssueLabel from 'src/issues/components/IssueLabel.vue'
import useLabels from 'src/issues/composables/useLabels'
import { timeSince } from 'src/shared/helpers/timeSince'
import VueMarkdown from 'vue-markdown-render'
import useIssue from 'src/issues/composables/useIssue'

interface Props {
  issue: Issue
}

const { issue } = defineProps<Props>()
const { prefetchIssue } = useIssue(issue.number, { autoload: false })
const { toggleLabel, isSelectedLabel } = useLabels()
</script>

<template>
  <q-card @mouseenter="prefetchIssue(issue.number)" class="text-black col-12 q-mb-md" flat bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img :src="issue.user.avatar_url" alt="avatar" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>
          <router-link :to="`issue/${issue.number}`"> {{ issue.title }} </router-link>
        </q-item-label>
        <q-item-label caption> {{ timeSince(issue.created_at.toString()) }} ago </q-item-label>
      </q-item-section>

      <q-item-section>
        <q-item-label class="row items-center justify-end">
          <q-item-label class="q-mr-md">
            <q-icon name="question_answer" />
            {{ issue.comments }}
          </q-item-label>
          <q-chip
            v-if="issue.state == State.Closed"
            color="positive"
            text-color="white"
            icon="check"
          >
            Closed
          </q-chip>
          <q-chip
            v-if="issue.state == State.Open"
            color="negative"
            text-color="white"
            icon="bug_report"
          >
            Open
          </q-chip>
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section class="q-pa-md">
      <div class="markdown-wrapper">
        <vue-markdown :source="issue.body || ''"></vue-markdown>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section class="q-pa-xs q-gutter-xs">
      <div>
        <IssueLabel
          v-for="label in issue.labels"
          :key="label.id"
          :label="label"
          :dark-mode="false"
          :is-selected="isSelectedLabel(label.name)"
          @toggle-label="(labelName: string) => toggleLabel(labelName)"
        ></IssueLabel>
      </div>
    </q-card-section>
  </q-card>
</template>
