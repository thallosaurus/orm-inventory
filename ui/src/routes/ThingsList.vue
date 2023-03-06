<script setup lang="ts">
import axios from 'axios';
</script>

<script lang="ts">
interface ItemRequestBody {
  name: string,
  id: number,
  ean: string
}
export default {
  data() {
    return {
      info: [] as unknown as [ItemRequestBody]
    }
  },
  mounted() {
    axios
      .get('http://localhost:8080/things')
      .then(response => {
        //console.log(response.data);
        let parsed = response.data as unknown as [ItemRequestBody];
        this.info = parsed;
      });
  }
}
</script>

<template>
  <h1>Things</h1>
  <pre>
        {{ info }}
      </pre>

  <ol id="#thingList">
    <li v-for="item of info" :key="item.id!">
      
      <RouterLink :to="{path: `/things/${item.id}`}" append>{{ item.name }}</RouterLink>
    </li>
  </ol>
</template>
