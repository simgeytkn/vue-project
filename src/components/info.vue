<template src="./info.html">
</template>



<script>
import axios from 'axios'
export const HTTP = axios.create({
  baseURL: 'https://api.github.com/users/'
})

export default {
  name: 'Info',
  data(){
    return {
      photo: '',
      total_follow: '',
      followings: []
    }
  },

  mounted() {
      this.lookUp()
    },

  methods: {
    lookUp: function(){

      var app = this
      console.log(app.$route.params.username)

      HTTP.get(app.$route.params.username).then(function(response){
        app.photo = response.data.avatar_url
      })

      HTTP.get(app.$route.params.username+'/followers').then(function(response){
        console.log("followers")

        for(var j=0; j<response.data.length;j++){
        }
        app.total_follow ="Total follower = "+j
        console.log(j)
      }).catch(function(error){
        app.total_follow= "Error in total followers"
      })
    }
  }
}
</script>

