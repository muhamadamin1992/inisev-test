<script>
import { mapState } from 'pinia'
import { useEmailsStore } from '@/stores/emails.js'
import EmailList from '@/components/EmailList.vue'

export default {
  components: {
    EmailList
  },
  computed: {
    ...mapState(useEmailsStore, ['archive'])
  }
}
</script>

<template>
  <h1>Archive</h1>
  <EmailList :emails="archive" />
</template>
