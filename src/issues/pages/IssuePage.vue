<script lang="ts" setup>
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue'
import useComments from '../composables/useComments'
import { useRoute } from 'vue-router'
import IssueCard from '../components/issue-list/IssueCard.vue'
import useIssue from '../composables/useIssue'
import IssueComment from '../components/issue-list/IssueComment.vue'

const route = useRoute()
const issueNumber = Number(route.params.number)

const { isLoading: isIssueLoading, issue } = useIssue(issueNumber)
const { isLoading: isCommentsLoading, comments } = useComments(issueNumber)
</script>

<template>
  <!-- BREADCRUMB -->
  <router-link class="text-white" to="/issues"> Go to back </router-link>

  <!-- ISSUE -->
  <LoaderSpinner v-if="isIssueLoading" color="white" />
  <div v-else-if="issue">
    <div class="q-my-md">
      <span class="text-h4"> Issue {{ issue.number }} </span>
    </div>
    <IssueCard :issue="issue" />
  </div>

  <!-- COMMENTS -->
  <LoaderSpinner
    v-if="isCommentsLoading"
    :thickness="1"
    size="2rem"
    color="white"
    :show-text="false"
  />
  <div v-else-if="comments" class="column">
    <span class="text-h6 q-mb-md"> Comments ({{ comments.length }})</span>
    <div v-for="comment in comments" :key="comment.id" class="row q-mb-md">
      <IssueComment :comment="comment" />
      <!-- <q-card flat bordered>
        <q-card-section>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img :src="comment.user.avatar_url" alt="avatar" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label caption> {{ comment.user.login }} </q-item-label>
              <q-item-label caption> {{ comment.created_at }} </q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section>
          <q-markdown :content="comment.body" />
        </q-card-section>
      </q-card> -->
    </div>
  </div>
</template>
