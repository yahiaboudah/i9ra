<template>
  <article>
    <h1 class="article_title">{{article.title}}</h1>
	  <nuxt-content dir="rtl" :document="article" />
  </article>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const article = await $content('blog', params.slug).fetch();

		return { article }
	}
}
</script>

<style>

.article_title {
  font-size: 28px;
  font-weight: 900;
}

pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 19px;
  overflow: auto;
}

code {
  font-family: 'Monaco', monospace;
  font-size: 20px;
  color: #333;
}

article {
  display: block;
  margin: 0 auto;
  padding: 50px 25px;
  max-width: 800px;
  display: flex; /* Use flexbox for centering vertically and horizontally */
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center-align children horizontally */
}

h1 {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 30px;
}
</style>