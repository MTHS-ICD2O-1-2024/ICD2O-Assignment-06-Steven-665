// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
  
"use strict"

// This function calls the public API to randomly obtain an animation and display its name and introduction
function showAnime() {
  var resultDiv = document.getElementById('result')
  resultDiv.innerHTML = 'Loading...'

  fetch('https://api.jikan.moe/v4/random/anime')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      var anime = data.data
      var title = anime.title
      var synopsis = anime.synopsis || 'No synopsis available.'

      resultDiv.innerHTML =
        '<h3>' + title + '</h3>' +
        '<p>' + synopsis + '</p>'
    })
    .catch(function(error) {
      resultDiv.innerHTML = 'Error fetching anime: ' + error.message
      console.error(error)
    })
}
