

<template>
  <div>
    <Header />
    <div class="background-stuff"></div>
    <Nuxt />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
}

body {
  background-color: rgb(245, 245, 245);
}

nuxt-content {
  position: relative;
  z-index: 0;
}

.background-stuff {
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

pre[class*="language-"] {
  direction: ltr;
  text-shadow: none;
  background: #14141b;
}

code {
    color: #3f3f3f;
}

a {
  text-decoration: none;
}

p {
  margin-bottom: 15px;
}
p:last-of-type {
  margin-bottom: 0px;
}
</style>
