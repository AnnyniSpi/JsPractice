"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    sctors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?","");

        while(this.count == '' || this.count == null || isNaN(this.count)){
            this.count = +prompt("Сколько фильмов вы уже посмотрели?","");
        }
    },
    detectPersonalLevel: function(){
        if(this.count < 10){
            console.log("Просмотрено довольно мало фильмов!");
        } else if(this.count > 10 && this.count < 30){
            console.log("Вы классический зритель!");
        }else if(this.count >= 30){
            console.log("Вы - киноман!");
        }else{
            console.log("Произошла ошибка!");
        }
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const a = prompt("Один из последних просмотренных фильмов?","").trim(),
                  b = +prompt("На сколько оцените его?","");
        
            if(a != null && b != null && a != '' && b != '' && a.length < 50){
                this.movies[a] = b;
                console.log('Done!');
            } else{
                console.log('Error!');
                i--;
            }
        }
    },
    showMyDB: function(hidden){
        console.log(personalMovieDB);
    },
    toggleVisibleMyDB: function(){
        if(this.privat){
            this.privat = false;
        }else{
            this.privat = true;
        }
    },
    writeYourGenres: function(){
        for(let i = 0; i < 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером №${i+1}`,"").toLowerCase();
            if(genre == null || genre === ''){
                console.log('Error!');
                i--;
            } else{
                this.genres[i] = genre;
            }
        }
    
        this.genres.forEach((item, i) => {
            console.log(`Мой любимый жанр №${i+1} - это ${item}!`)
        });
    }
};