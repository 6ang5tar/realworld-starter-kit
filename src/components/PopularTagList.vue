<script setup lang="ts">
import { ref } from "vue";
import { api } from "../api";

const tags = ref<String[]>([]);

tags.value = await api.tags.getTags().then((res) => res.data.tags);
</script>

<template>
  <div class="col-md-3">
    <div class="sidebar">
      <p>Popular Tags</p>

      <div class="tag-list">
        <a v-for="tag in tags" href="" class="tag-pill tag-default" >{{ tag }}</a>
      </div>
    </div>
  </div>
</template>
