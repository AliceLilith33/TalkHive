<template>
    <div class="main">
      <div class="contact-header">
         黑名单
        <button style="float: right;">批量管理</button>
      </div>
      <div v-for="person in blackList" :key="person.account_id" class="item">
        <img :src="person.avatar" alt="avatar" width="50" height="50" />
        <div class="left">
            <p class="name">{{ person.name }}</p>
        </div>
        <div class="right">
            <button @click="Remove(person.account_id)">移出</button>
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
  import { removeFromBlackList, getBlackList } from '@/services/contactList';
  
  export default {
    data() {
      return {
        // blackList: [
        //   {
        //     avatar: '',
        //     name: 'John Doe',
        //     account_id: '1',   // id
        //     signature:"爱拼才会赢",
        //   },
        //   {
        //     avatar: '',
        //     name: 'Jane Doe',
        //     account_id: '2',
        //     signature:"hi",
        //   },
        // ],
        blackList: [],
      };
    },
    methods: {
      async fetchBlackList() {
        const response = await getBlackList();
        this.blackList = response.data;
      },
      async Remove(id) {
        const response = await removeFromBlackList(id);
        this.blackList = this.blackList.filter(person => person.account_id !== id);
      },
    },
    created() {
      this.fetchBlackList();
    },
  };
  </script>
  
  <style scoped src="@/assets/css/contactList.css"></style>
  <style scoped>
  button {
    margin-right: 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:first-of-type {
    background-color: #28a745;
    color: white;
  }
  button:last-of-type {
    background-color: #dc3545;
    color: white;
  }
  </style>