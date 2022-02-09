<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <div v-if="articles && articles.length">
	    <div class="articles" v-for="article in articles" :key="article.id">
	      <p>{{ article.title }} by {{ article.body }}</p>
	    </div>
    </div>
    <div v-else>
      <p>No articles found</p>
    </div>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
import { mapGetters } from 'vuex';
import SdkClient from '@/sdk/client.ts';


export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
    return {
      loading: true,
      articles: null,
      error: null
    }
  },
  computed: {
    ...mapGetters('auth', {
      getUser: "getUser", 
      isUserAuth: "isUserAuth"    
    })
  },

  watch: {
    getUser: {
        handler(user) {
          if (user) {
              this.fetchData(user);
          }
        },
        immediate: true
    }
  },
  methods: {
    async fetchData(user) {
      this.error = this.articles = null
      this.loading = true
      try {
        const sdk = new SdkClient(process.env.GRIDSOME_HASURA_URL, user).getSdk();
        const { article } = await sdk.getArticles() // This is fully typed, based on the query
        this.articles = article;
      } catch (e) {
        this.error = e.getMessage();
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
