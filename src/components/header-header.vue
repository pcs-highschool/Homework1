<template>
  <div class="amuz-card">
    <h1>
        User List
    </h1>
    <ul class="menu">
        <li>
            <router-link class="links" :to="{name : 'home'}">HOME</router-link>
        </li>
        <li>
            <router-link class="links" :to="{name : 'user-list'}">USER LIST</router-link>
        </li>
        <li>
            <router-link class="links" :to="{name : 'userProfile'}">USER PROFILE</router-link>
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