<template>
  <div class="amuz-card">
    <h1>
        MY MUSIC
    </h1>
    <ul class="menu">
        <li>
            <router-link class="links" :to="{name : 'home'}">HOME</router-link>
        </li>
        <li>
            <router-link class="links" :to="{name : 'about'}">ABOUT</router-link>
        </li>   
        <li>
            <router-link class="links" :to="{name : 'board'}">PLAY LIST</router-link>
        </li>
        <li>
            <router-link class="links" :to="{name : 'show'}">SHOW</router-link>
        </li>
        <li>
            <router-link class="links" :to="{name : 'contact'}">CONTACT</router-link>
        </li>
        <li>
            <router-link class="links" :to="{name : 'detailPage'}">DETAIL</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.amuz-card {
    text-align: center;
}
.menu{
    margin-top: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
}
.menu > li {
    margin: 0 20px;
}
.menu > li > .links{
    text-decoration: none;
    font-size: 18px;
    color: black;
}
.links:hover{
    font-weight: bold;
}
</style>