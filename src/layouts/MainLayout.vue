<script setup lang="ts">
import type { SidebarLinkProps } from 'src/shared/components/SidebarLink.vue'
import SidebarLink from 'src/shared/components/SidebarLink.vue'
import { ref } from 'vue'

const linksList: SidebarLinkProps[] = [
  {
    title: 'Issues',
    icon: 'bug_report',
    link: '/issues',
  },
]

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <q-layout view="hHh Lpr lFf" class="text-white bg-dark">
    <q-header elevated class="text-white bg-dark">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> App </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" :width="250" bordered>
      <q-list>
        <SidebarLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
