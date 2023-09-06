<template>
      <div class="big-container">
          <div class="background-slug"></div>
          <article>
            <h1 class="article_title">{{article.title}}</h1>
            <nuxt-content :document="article" />
          </article>
      </div>
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

  article {
    display: block;
    direction: rtl;
    margin: 0 auto;
    padding: 50px 25px;
    max-width: 940px;
    display: flex; /* Use flexbox for centering vertically and horizontally */
    flex-direction: column; /* Stack children vertically */
    align-items: center; /* Center-align children horizontally */
    background: linear-gradient(135deg, #e6e6e6, #ffffff);
    border-radius: 1.5%;
  }

  .big-container {
    z-index: 0;
    position: relative;
  }

  .background-slug {
    background-image: url('../design/a.png');
    background-repeat: repeat;
    background-color: antiquewhite; 
    height: 100%;

    opacity: 0.05;

    position: absolute; /* Add position: absolute */
    top: 0;
    left: 0;
    z-index: -1;
  } 

  .article_title {
    font-size: 38px;
    font-weight: 1200;
  }

  pre[class*="language-"] {
    direction: ltr;
    text-shadow: none;
    background: #dbd3d9;
    border-radius: 15px;
  }

  pre code {
    font-family: JetBrains Mono;
    font-size: 25px;
    text-decoration: none;
    color: #000;
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
    margin: 0.1em;
    padding: 0.3em 0.8em; /* Increase padding to make it bigger */
    border-radius: 3px;
    border: 1px solid rgb(204, 204, 204);
    color: rgb(51, 51, 51);
    line-height: 1.6; /* Increase line-height to vertically center text */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px; /* Increase font-size to make it bigger */
    display: inline;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2), inset 0px 0px 0px 2px #ffffff;
    background-color: rgb(247, 247, 247);
    -moz-box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff inset;
    -webkit-box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff inset;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    text-shadow: 0 1px 0 #fff;
  }


</style>