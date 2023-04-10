<template>
  <main>
    <h1>Contact Us</h1>
  </main>
  <div class="form-area card border p-2">
    <div class="mb-3">
      <label for="subject" class="form-label">Subject</label>
      <input type="text" v-model="mailRequest.subject" class="form-control" id="subject" placeholder="Subject..">
    </div>
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" v-model="mailRequest.name" class="form-control" id="name" placeholder="Your Name..">
    </div>
    <!-- <div class="mb-3">
      <label for="email" class="form-label">from Email address</label>
      <input type="email" v-model="mailRequest.from" class="form-control" id="email" placeholder="name@example.com">
    </div> -->
    <div class="mb-3">
      <label for="email" class="form-label">to Email address</label>
      <input type="email" v-model="mailRequest.to" class="form-control" id="email" placeholder="name@example.com">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Message</label>
      <textarea class="form-control" v-model="mailRequest.body" id="description" placeholder="...."></textarea>
    </div>
    <button class="btn btn-sm btn-secondary" @click="$router.push({ name: 'home' })">Exit</button>
    <button class="btn btn-sm btn-primary" @click="sendMail">Send</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'about',
  data() {
    return {
      mailRequest: {
        subject: '',
       // from: '',
        to: '',
        body: '',
        name:''
      }
    }
  },
  methods: {
    sendMail() {
      axios.post('https://localhost:44355/api/sendmail', this.mailRequest).then(
       this.$router.push({ name: 'home' })
      )
    }
  }
}
</script>

