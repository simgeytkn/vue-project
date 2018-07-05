<template src="./submit.html">
</template>


<script>

import axios from 'axios'


export const HTTP = axios.create({
  baseURL: 'https://api.github.com/users/'
})

export default {
  name: 'Submit',
  data () {
    return {
      msg:'Please enter your username and username you want to call',
      your_username: '',
      search: '',
      title: '',
      isim: '',
      blog: '',
      company: '',
      location: '',
      picture: '',
      info: '',
      vik: '',
      followings: [],
      following: '',
      followers: [],
      follower: '',
      stars: [],
      star_number: '',
      repo: '',
      repo_number: '',
      depos: [],
      tick: false,
      image: false

    }
  },

//app.search = username !!!!

  methods: {
    buttonClick: function(){
      var app = this
      app.depos = []
      app.followings = []

      //INFORMAIONS

      HTTP.get(app.search)
      .then(function(response){
        console.log(response.data)
        app.title = "INFORMATION ABOUT USER"
        app.picture = response.data.avatar_url
        app.search = response.data.login
        app.isim = "Name : "+ response.data.name
        app.blog = "Blog : " + response.data.blog
        app.company = "Company : " + response.data.company
        app.location = "Location : " + response.data.location

        app.image = true
      }).catch(function(error){
        app.info =  alert("Invalid Username")
      })


       //FOLLOWINGS
        HTTP.get(app.search+'/following')
        .then(function(response){
          console.log("Followings")

          for(var i=0; i<response.data.length; i++){
            if(app.your_username == response.data[i].login){
              app.tick = true
            }
            else if(app.your_username != response.data[i].login){
              app.tick = false
            }
          }

          for(var i=0; i<response.data.length; i++){
          }

          console.log(i)

          if(i<4){
            for(var j=0; j<i; j++){
              app.followings[j] = response.data[j].login
            }
          }else if(i>5){

          for(var i=0; i<5; i++){
          app.followings[i] =response.data[i].login
          }
          }

          app.following="FOLLOWING"
          console.log(app.followings)
        })

        //FOLLOWERS


        HTTP.get(app.search+'/followers')
        .then(function(response){
          console.log("Followers")
            for(var i=0; i<5; i++){
            app.followers[i] =response.data[i].login
            }

            app.follower="FOLLOWERS"
            console.log(app.follower)
        })

        //REPOS

        HTTP.get(app.search+'/repos')
        .then(function(response){
          console.log("repos")
          app.repo = "Repos : "

          for(var i=0; i<response.data.length; i++){
          }

          app.repo_number = i

          for(var i=app.repo_number-5; i<app.repo_number; i++){
            app.depos[i] =response.data[i].name
          }
            console.log(app.depos)
        })


        //STARS

        HTTP.get(app.search+'/starred')
        .then(function(response){

          for(var i=0; i<response.data.length; i++){
          }

          app.star_number = "Star Number = " + i

          for(var i=app.repo_number-5; i<app.repo_number; i++){
            app.stars[i] =response.data[i].name
          }
            console.log(app.stars)
        })
    },

    infoClick: function(){
      var app = this
      for(var i=0; i<5; i++){
        app.search = app.followings[i]

      }
    }
  }

}
</script>
