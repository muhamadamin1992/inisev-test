import { defineStore } from 'pinia'

export const useEmailsStore = defineStore('emails', {
  state() {
    return {
      items: [
        {
          id: 1,
          title: 'Your 7-figure plan goes bye-bye at midnight',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, alias corporis quasi tempora asperiores officiis dolor beatae? Quis ex pariatur quod architecto tenetur dolorum aliquam fugit corporis enim? Quis, dolorum!',
          isRead: false,
          isArchive: false
        },
        {
          id: 2,
          title: '[WEEKEND ONLY] Get this before',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, alias corporis quasi tempora asperiores officiis dolor beatae? Quis ex pariatur quod architecto tenetur dolorum aliquam fugit corporis enim? Quis, dolorum!',
          isRead: false,
          isArchive: false
        },
        {
          id: 3,
          title: 'Uh-oh, your prescription expiring',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, alias corporis quasi tempora asperiores officiis dolor beatae? Quis ex pariatur quod architecto tenetur dolorum aliquam fugit corporis enim? Quis, dolorum!',
          isRead: false,
          isArchive: false
        }
      ]
    }
  },
  getters: {
    inbox: (state) => state.items.filter(({ isArchive }) => !isArchive),
    archive: (state) => state.items.filter(({ isArchive }) => isArchive),
    byId: (state) =>
      state.items.reduce((acc, email) => {
        acc[email.id] = email
        return acc
      }, {})
  },
  actions: {
    archiveEmails(ids) {
      ids.forEach((id) => {
        this.byId[id].isArchive = true
      })
    },
    readEmails(ids) {
      ids.forEach((id) => {
        this.byId[id].isRead = true
      })
    }
  }
})
