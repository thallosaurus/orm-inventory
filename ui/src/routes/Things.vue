<script setup lang="ts">
import axios from 'axios';
</script>

<script lang="ts">
export default {
  data() {
    return {
      info: {}
    }
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (
        this.info = response
      ));
  }
}
</script>

<template>
  <h1>Things</h1>
  <pre>
    {{ info }}
  </pre>
</template>
