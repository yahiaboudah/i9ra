<template>
    <div class="card">
      <div class="cardy">
        <div class="card-img">
          <img :src="require(`~/assets/resources/${image}`)">
        </div>
  
        <div class="card-content">
          <div class="card-body">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
          </div>
  
          <hr class="divider" />
  
          <div class="card-footer">
            <p>{{ date }}</p>
            <p>{{ author }}</p>
            <div class="difficulty-all">
              <p> الصعوبة: </p>
              <div class="difficulty">
                <span v-for="i in 5" :key="i" :class="{ 'filled': i <= difficulty }">&#9733;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      author: String,
      image: String,
      title: String,
      description: String,
      date: String,
      difficulty: Number,
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    margin: 20px;
    padding: 15px;
    background: #FFF;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .cardy {
    display: flex;
    flex-direction: row; /* Display image and content side by side */
  }
  
  .card-img {
    display: block;
    width: 100%;
    border-radius: 10px;
    width: 220px;
    overflow: hidden;
  }

  .card-img img {
    width: 100%;
  }
  
  .card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .card-body {
    text-align: right;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 10px;
  }
  
  .divider {
    border: none;
    border-top: 1px solid red;
    width: 80%;
    margin: 10px auto;
  }
  
  .card-footer {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 10px;
    color: #777;
  }
  
  .difficulty-all {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  
  .difficulty-all p {
    font-size: 14px;
  }
  
  .difficulty {
    font-size: 17px;
  }
  
  .difficulty span {
    margin-right: 5px;
    color: #ccc;
  }
  
  .difficulty .filled {
    color: #f1c40f;
  }
  
  @media (max-width: 500px) {
    .card-footer p,
    .difficulty {
      font-size: 12px;
    }
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
  