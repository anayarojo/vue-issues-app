<script setup lang="ts">
import { timeSince } from 'src/shared/helpers/timeSince'
import VueMarkdown from 'vue-markdown-render'
import type { Comment } from 'src/issues/interfaces/comment.interface'

interface Props {
  comment: Comment
}

defineProps<Props>()
</script>

<template>
  <q-card class="text-black col-12 q-mb-xxs" flat bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img :src="comment.user.avatar_url" alt="avatar" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>
          {{ comment.user.login }}
        </q-item-label>
        <q-item-label caption> {{ timeSince(comment.created_at.toString()) }} ago </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section class="q-pa-md">
      <div class="markdown-wrapper">
        <vue-markdown :source="comment.body || ''"></vue-markdown>
      </div>
    </q-card-section>
  </q-card>
</template>
