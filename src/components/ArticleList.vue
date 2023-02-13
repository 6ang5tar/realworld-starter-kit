<template>
  <div v-for="article in articles" class="article-preview">
    <div class="article-meta">
      <!-- TODO route -->
      <a href="/profile/{{ article.author.username }}"
        ><img :src="article.author.image" />
      </a>
      <div class="info">
        <!-- TODO route -->
        <a href="/profile/{{ article.author.username }}" class="author">
          {{ article.author.username }}
          <!-- TODO date format -->
        </a>
        <span class="date">{{ article.createdAt }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <!-- TODO article route -->
    <router-link
      :to="{ name: 'article', params: { slug: article.slug } }"
      class="preview-link"
    >
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { Article } from "../api/api";
import { ref } from "vue";
import { api } from "../api";

const articles = ref<Article[]>([]);
articles.value = (await api.articles.getArticles()).data.articles;
</script>
