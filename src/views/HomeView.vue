<script>
import { mapState } from 'pinia'
import { useEmailsStore } from '@/stores/emails.js'
import EmailList from '@/components/EmailList.vue'

export default {
  components: {
    EmailList
  },
  computed: {
    ...mapState(useEmailsStore, ['inbox'])
  }
}
</script>

<template>
  <h1>Inbox</h1>
  <EmailList :emails="inbox" />
</template>
