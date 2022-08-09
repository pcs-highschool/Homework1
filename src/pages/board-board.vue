<template>
  <div class="main">
    <hr>
    <h1 class="pageTitle">Today List</h1>
    <ul class="board">
      <li v-for="(data,i) in this.$musicList" :key="i">
        <router-link class="boardLinks" :to="{ name : 'detailPage', params:{
         pageId : i,
        }}">
          <img :src="data.img" alt="">
          <div>
            <span>{{data.title}}</span>
            <span>{{data.singer}}</span>
          </div>
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