<template>
  <div class="home-page">
	  
    <h2>المنشورات</h2>
	  
    <div dir="rtl" class="articles">
		  
      <div class="article" v-for="article of articles" :key="article">
        <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">

				  <div class="article-inner">
					
            <img style="border-radius: 11%; overflow: hidden;" :src="require(`~/assets/resources/${article.img}`)" alt="" />
					
            <div class="detail">
							<p style="color: yellowgreen; margin-bottom: 2px;">{{ article.createdAt.split('T')[0] }}</p>
              <h3>{{ article.title }}</h3>
							<p class="desc">{{ article.description }}</p>
						</div>
				  
          </div>
			  </nuxt-link>
		  </div>
	  
    </div>
  
  </div>

</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const articles = await $content('blog', params.slug)
			.only(['author', 'title', 'description', 'img', 'slug', 'createdAt', 'difficulty'])
			.sortBy('createdAt', 'asc')
			.fetch();

		return {
			articles
		}
	}
}
</script>

<style scoped>


  @media (max-width: 500px) {
    .article-inner {
      flex-direction: column; /* Stack elements on mobile */
      align-items: center;
    }

    .article-inner img {
      width: 100%;
      max-width: 440px; /* Adjust image width to fit mobile screen */
      margin-bottom: 15px; /* Add margin to separate image and text */
    }

    .article-inner .detail {
      text-align: center; /* Center-align text on mobile */
    }
  }

  .home-page {
    padding: 50px 30px;
  }

  h2 {
    margin-bottom: 30px;
    text-align: center;
  }

  .articles {
    margin: 0 auto;
    max-width: 600px;
  }

  .article {
    margin-bottom: 15px;
  }

  .article-inner {
    padding: 15px;
    background: #FFF;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    display: flex;
  }

  .article-inner img {
    display: block;
    width: 100%;
    max-width: 220px;
  }
  .article-inner .detail {
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 1px;
  }

  .article-inner .desc {
    margin-top: 10px;
  }

  h3 {
    color: #212121;
    font-size: 24px;
    text-decoration: none;
  }

  p {
    color: #888;
    font-size: 18px;
    text-decoration: none;
  }
</style>
