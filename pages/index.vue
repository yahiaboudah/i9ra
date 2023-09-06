<template>
  <div class="home-page">
	  
    <div class="background-stuff"></div>

    <div class="manshoorat">
      <h2>المنشورات</h2>
    </div>

    <div dir="rtl" class="articles">
		  
      <div class="article" v-for="article of articles" :key="article">
        <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">

				  <div class="article-inner">
					
            <img style="border-radius: 11%; overflow: hidden;" :src="require(`~/static/${article.img}`)" alt="" />
					
            <div class="detail">
							<p style="color: yellowgreen; margin-bottom: 2px;">{{ article.date }}</p>
              <h3>{{ article.title }}</h3>
							<p class="desc">{{ article.description }}</p>
              
              <div class="rating">
                <img class="ratingImg" v-for="index in 5" :key="index"
                  :src="getRatingImage(index, article.level)"
                  alt="ratingimage"
                />
              </div>
            
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
      .only(['title', 'description', 'img', 'slug', 'date', 'level'])
      .fetch();

    // Custom comparator function to sort articles by date
    function compareDates(article1, article2) {
      const date1 = article1.date;
      const date2 = article2.date;

      const [day1, month1, year1] = date1.split('-').map(Number);
      const [day2, month2, year2] = date2.split('-').map(Number);

      if (year1 !== year2) return year2 - year1;
      if (month1 !== month2) return month2 - month1;
      return day2 - day1;
    }

    const sortedArticles = articles.sort(compareDates);

    return {
      articles: sortedArticles
    };
  },
  
  methods: {
    // Define a method to determine the star image based on the "level"
    getRatingImage(index, level) {
      if (index <= level) return require(`~/static/a.png`);
      else return require(`~/static/a_off.png`);
    },
  }
  
};
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


  .ratingImg {
    width: 10px;
    height: 100%;
  }

  .rating {
    display: flex;
    flex-direction: row;
    width: 120px;
    margin-top: 20px;
  }

  .home-page {
    padding: 50px 30px;
    z-index: 0;
    position: relative;
  }

  .background-stuff {
    background-image: url('../design/a.png');
    background-repeat: repeat;
    background-color: antiquewhite; 
    background-size: 200px;
    height: 100%;

    opacity: 0.03;

    position: absolute; /* Add position: absolute */
    top: 0;
    left: 0;
    z-index: -1;
  } 

  h2 {
    margin-bottom: 30px;
    text-align: center;
  }

  .manshoorat {
    
    width: 150px;
    margin: 0 auto; 
    
    padding-top: 5px;
    padding-bottom: 0px;
    margin-bottom: 10px;
    
    text-align: center; 
    background-color: #ffffff;
    border-radius: 2px;
  }

  .articles {
    margin: 0 auto;
    max-width: 600px;
    padding: 50px 30px 50px 30px;

    background-color: rgb(250, 250, 250);
    border-radius: 2%;
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

  .article-inner:hover {
    img {
        transform: scale(1.09) rotate(-3deg); 
        transition: transform 0.3s ease;
    }
  }
  
  .article-inner h3 {
    position: relative;
    transition: color 0.3s ease;
  }

  .article-inner h3::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px; /* Adjust the height of the underline as needed */
    bottom: 0;
    right: 0;
    background-color: #047a00; /* Adjust the color of the underline as needed */
    transform: scaleX(0); /* Initially, the underline is hidden */
    transform-origin: bottom right;
    transition: transform 0.3s ease; /* Add a smooth transition effect */
  }

  .article-inner:hover h3::after {
    transform: scaleX(1); /* Show the underline on hover */
    transform-origin: bottom right;
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
