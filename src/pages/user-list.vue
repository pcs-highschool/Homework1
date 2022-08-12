<template>
    <div>
        <div>UserList</div>
        <div>
            <ul>
                <li v-for="(user,idx) in userList" :key="idx">
                    <router-link :to="{ name: 'userProfile', params: {
                        userId : idx+1,   
                    }}"><h4>{{ user.name }}</h4></router-link>
                    <hr />
                    <p>
                        ({{ user.address.zipcode }}) {{ user.address.street }}
                    </p>
                    <hr />
                    <a :href="'mailto:' + user.email">{{user.email}}</a>
                    <a :href="'tel:+' + user.phone">+ {{user.phone}}</a>
                </li>
            </ul>
        </div>
        <button @onclick="fetchData()">새로고침</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userList : null,
        }
    },
    
    methods: {
        fetchData: function() {
            let self = this;

            this.$axios.get('https://jsonplaceholder.typicode.com/users/')
            .then(function(response) {
                // response
                if(response.status !== 200){
                    alert('통신에러!');
                    self.userList = [];
                }else{
                    self.userList = response.data;
                }
            })
            // .catch(function(error) {
            // console.log(error);
            // });
        }
    },
    
    mounted() {
        this.fetchData();
    },
}
</script>

<style>
.loader{
    text-align:center;
    padding:40px 0;
    border:1px solid #eee;
    border-radius:10px;
    margin:40px;
}
</style>