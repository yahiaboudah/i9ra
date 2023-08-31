<template>
    <div class="md-img">
      <img :src="getImg()" :alt="alt" class="md-inner-img"/>
      <!--  <span class="md-img-caption">{{alt}}</span>   -->
    </div>
</template>

<script>
  export default {
      //declare props for the 'src' and 'alt' of the image
      props: {
          imagesrc: {
              type: String,
              required: true
          },
          alt: {
              type: String,
              required: true
          }
      },
      methods: {
          /* function to get and return the final url to our processed image
          using the require function */
          getImg(){
              try{
                  // place the '~/' before 'assets/'
                  return require(`~/content/blog/${this.imagesrc}`)
              } catch(err){
                  console.warn(err);
                  return null
              }
          }
      }
  }
</script>