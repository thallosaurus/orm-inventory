<script lang="ts">
import axios from 'axios';

interface ItemRequestBody {
  name: string,
  id: number,
  ean: string
}
export default {
  data() {
    return {
      info: [] as unknown as ItemRequestBody
    }
  },
  mounted() {
    axios
      .get(`http://localhost:8080/things/${this.$route.params.id}`)
      .then(response => {
        //console.log(response.data);
        let parsed = response.data as unknown as ItemRequestBody;
        this.info = parsed;
      });
  }
}
</script>

<template>
    <h1>Hello</h1>
    <pre>
        {{ info }}
      </pre>
</template>