<script>
import { mapState } from 'pinia'
import { useEmailsStore } from '@/stores/emails.js'

export default {
  computed: {
    ...mapState(useEmailsStore, ['inbox', 'archive'])
  }
};
</script>

<template>
  <aside class="sidebar">
    <nav class="nav">
      <ul class="list-unstyled">
        <li class="nav__item">
          <RouterLink :to="{ name: 'inbox' }" class="btn btn--block">Inbox ({{ inbox.length }})</RouterLink>
        </li>
        <li class="nav__item">
          <RouterLink :to="{ name: 'archive' }" class="btn btn--block">Archive ({{ archive.length }})</RouterLink>
        </li>
      </ul>
    </nav>
    <button class="btn btn--block">lorem</button>
  </aside>
</template>

<style>
.sidebar {
  display: flex;
  padding: 10px 15px;
  width: 200px;
  background-color: #373636;
  color: #fff;
  flex-direction: column;
}

.nav {
  margin-bottom: auto;
}

.nav__item {
  margin-bottom: 10px;
}
</style>
