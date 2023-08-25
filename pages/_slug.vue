<template>
  <article>
    <h1 class="article_title">{{article.title}}</h1>
	  <nuxt-content :document="article" />
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
    font-size: 38px;
    font-weight: 1200;
  }

  pre {
    border-radius: 15px;
    font-family: 'JetBrains Mono';
  }

  code {
    color: #6d0000;
  }

  pre code {
    font-family: 'JetBrains Mono';
    font-size: 25px;
    text-decoration: none;
    color: #fff;
  }

  article {
    display: block;
    direction: rtl;
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
    font-family: Cairo;
  }

  p, ul, li {
    font-size: 22px;
    font-family: Cairo;
  }

  h2 {
    font-size: 26px;
    font-family: Cairo;
  }

  h3 {
    font-family: Cairo;
  }

</style>