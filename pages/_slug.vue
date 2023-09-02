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

  kbd {
    margin: 0px 0.1em;
    padding: 0.1em 0.6em;
    border-radius: 3px;
    border: 1px solid rgb(204, 204, 204);
    color: rgb(51, 51, 51);
    line-height: 1.4;
    font-family: Arial,Helvetica,sans-serif;
    font-size: 10px;
    display: inline-block;
    box-shadow: 0px 1px 0px rgba(0,0,0,0.2), inset 0px 0px 0px 2px #ffffff;
    background-color: rgb(247, 247, 247);
    -moz-box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff inset;
    -webkit-box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff inset;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    text-shadow: 0 1px 0 #fff;
  }

</style>