<script setup lang="ts">
export interface SidebarLinkProps {
  active?: boolean
  title: string
  link?: string
  icon?: string
}

withDefaults(defineProps<SidebarLinkProps>(), {
  active: false,
  link: '',
  icon: '',
})
</script>

<template>
  <router-link :to="link || '/'">
    <q-item clickable :active="active" v-ripple>
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>
      <q-item-section>
        {{ title }}
      </q-item-section>
    </q-item>
  </router-link>
</template>

<style>
a {
  text-decoration: none;
}
</style>
