<template>
  <div class="main">
    <hr>
    <h1 class="pageTitle">User List</h1>
    <ul class="board">
      <li v-for="(data,i) in this.$userList" :key="i">
        <router-link class="boardLinks" :to="{ name : 'userProfile', params:{
         userId : i,
        }}">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.board{
  list-style: none;
  width: 1000px;
  margin: 50px auto;
}
.board > li{
  height: 150px;
  border-bottom: 1px solid #dedede;
  padding: 30px;
  box-sizing: border-box;

}
.board > li > .boardLinks{
  text-decoration: none;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.boardLinks img{
  width: 100px;
  height: 100px;
}
.boardLinks span {
  padding: 0 20px;
}
</style>