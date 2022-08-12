<template>
  <div class="main">
    <h5>user profile page</h5>
    <hr>
    <template v-if="list !== null">
      <h4>{{list.name}} </h4>
    </template>
  </div>
</template>


<script>
export default {
    data() {
        return {
            list: null,
            userId: this.$route.params.userId,

        }
    },
    
    methods: {
        fetchData: function() {
            let self = this;

            this.$axios.get('https://jsonplaceholder.typicode.com/users/' + this.userId)
            .then(response => {
                // response
                if(response.status !== 200){
                    alert('통신에러!');
                    self.list = [];
                }else{
                    self.list = response.data;
                }
            })
        }
    },
    
    mounted() {
        this.fetchData();
    },
}
</script>

<style>
</style>

