<template>
	<header>
	  <nav class="navbar">
		<nuxt-link to="/">
		  <img class="header_img" src="~/static/i9ra.png" alt="Logo" />
		</nuxt-link>
	  </nav>
	</header>
  </template>
  
  <style>
	
	header {
		padding: 15px 30px;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
	}
	
	.navbar {
		align-items: center;
		justify-content: center;
	}
	
	.header_img {
		width: 200px;
		height: auto;
		display: block;
		margin: 0 auto; /* Horizontally center the image */
	}
	
	header .title {
		color: #212121;
		font-size: 24px;
		font-weight: 900;
		text-transform: uppercase;
	}
	
	nav {
		display: flex;
		align-items: center;
		margin: 0 -15px;
		width: 100%;
	}
	
	nav a {
		display: block;
		margin: 0 15px;
		color: #9f25cf;
	}
  </style>
  