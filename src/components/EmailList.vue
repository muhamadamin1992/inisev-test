<script>
import { mapActions } from 'pinia'
import { useEmailsStore } from '@/stores/emails.js'
import BaseModal from './BaseModal.vue'

export default {
  components: {
    BaseModal
  },
  props: {
    emails: Array
  },
  data() {
    return {
      selectedEmails: [],
      modalOpened: false,
      openedEmail: {}
    }
  },
  mounted() {
    window.addEventListener('keypress', this.handeKeyPress)
  },
  unmounted() {
    window.removeEventListener('keypress', this.handeKeyPress)
  },
  methods: {
    ...mapActions(useEmailsStore, ['readEmails', 'archiveEmails']),
    openEmail(email) {
      this.modalOpened = true
      this.openedEmail = email
      this.readEmails([email.id])
    },
    closeModal() {
      this.modalOpened = false
    },
    selectAll(e) {
      if (!e.target.checked) {
        this.selectedEmails = [];
        return;
      }
      this.selectedEmails = this.emails.map(({ id }) => id)
    },
    readSelected() {
      this.readEmails(this.selectedEmails)
    },
    archiveSelected() {
      this.archiveEmails(this.selectedEmails)
    },
    readOpened() {
      this.readEmails([this.openedEmail.id])
    },
    archiveOpened() {
      this.archiveEmails([this.openedEmail.id])
    },
    handeKeyPress(e) {
      if (e.code !== 'KeyR' && e.code !== 'KeyA') {
        return
      }
      const ids = []
      if (this.modalOpened) {
        ids.push(this.openedEmail.id)
      } else if (this.selectedEmails.length) {
        ids.push(...this.selectedEmails)
      } else {
        return
      }
      if (e.code === 'KeyR') {
        this.readEmails(ids)
        return
      }
      if (e.code === 'KeyA') {
        this.archiveEmails(ids)
        return
      }
    }
  }
}
</script>

<template>
  <h2>Emails Selected ({{ selectedEmails.length }})</h2>
  <div class="email-actions">
    <input class="checkbox" type="checkbox" @change="selectAll" />
    <button class="btn mr-10" @click="readSelected">Mark as read (r)</button>
    <button class="btn" @click="archiveSelected">Archive (a)</button>
  </div>
  <ul class="list-unstyled">
    <li
      v-for="email in emails"
      :key="email.id"
      class="email-item"
      :class="{ 'email-item--read': email.isRead }"
    >
      <input v-model="selectedEmails" :value="email.id" class="checkbox" type="checkbox" />
      <button class="btn-text" @click="openEmail(email)">{{ email.title }}</button>
    </li>
  </ul>
  <BaseModal v-model="modalOpened">
    <button class="btn-text mb-10">Close (ESC)</button>
    <div>
      <button class="btn mr-10" @click="readOpened">Mark as read (r)</button>
      <button class="btn" @click="archiveOpened">Archive (a)</button>
    </div>
    <h3>{{ openedEmail.title }}</h3>
    <p>{{ openedEmail.content }}</p>
  </BaseModal>
</template>

<style>
.email-actions {
  margin-bottom: 10px;
  padding: 10px;
}

.email-item {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.email-item--read {
  opacity: 0.5;
}

.checkbox {
  margin: 0 10px 0 0;
  width: 15px;
  height: 15px;
  vertical-align: middle;
}
</style>
