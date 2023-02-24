const moviesData = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
 const allDirectors = moviesArray.map((movie)=>
   movie.director);
   
   const removeDuplicate = allDirectors.filter((director,index)=>allDirectors.indexOf(director)===index)
   
 return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
 let countDrama = 0;
 const spielbergMovies = moviesArray.filter(movie=>{
  if(movie.director==='Steven Spielberg'){
   return movie;
  }
 });

  const spielbergDramas = spielbergMovies.filter((movie) => movie.genre.includes("Drama"));
  
  
  return spielbergDramas.length

 };


 //console.log(howManyMovies(test));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
 const scores = moviesArray
      .map(movie => movie.score);

      if (scores.length === 0) return 0;
    
    const totalScore = scores.reduce((accumulator, currentValue) => { 
     if(typeof currentValue === 'string' || currentValue === undefined ){
      currentValue = 0
      return accumulator + currentValue;
     } else {
     return accumulator + currentValue;
    }
   });
   
    const averageScore = totalScore / scores.length;
    
    const averageScoreRounded = Math.round(averageScore * 100) / 100;
     
    return averageScoreRounded;
    }
 

//console.log(scoresAverage(test));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
 const dramaMovies = moviesArray.filter(movie =>movie.genre.includes("Drama"));
 
 if(!dramaMovies.length)return 0;

 const dramaScore = dramaMovies.map(movie => movie.score)
 const dramaScoreTotal = dramaScore.reduce((acc,curr) => acc + curr);
 const avgDramaScore = dramaScoreTotal / dramaMovies.length;
 const avgDramaRound = Math.round(avgDramaScore*100)/100;
 
 return avgDramaRound;
}
//console.log(dramaMoviesScore(test))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArr = [...moviesArray];
  console.log(newArr);
  const sortArr = newArr.sort((a,b)=>{
  
    if(a.year === b.year){
      if(a.title < b.title){
        return -1;
      } else if (a.title>b.title){
        return 1;
      } else {
        return 0
      }
    } else {
  return  a.year - b.year;
    }
  }
  )
  return sortArr;
}
console.log(orderByYear(moviesData))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArr = JSON.parse(JSON.stringify(moviesArray));
  const titleArr = newArr.map(movie=>movie.title);
  const sortTitle = titleArr.sort((a,b)=>{
    if(a < b){
        return -1;
      } else if (a>b){
        return 1;
      } else {
        return 0
      }
  }).slice(0,20);
  
  return sortTitle;
}

console.log(orderAlphabetically(moviesData))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newArr = JSON.parse(JSON.stringify(moviesArray));
  const calcDuration = function (time){
    // save paramater in variable
  let hoursToMin;
  const duration = time;
  // remove letters
  const removeLetters=duration.replace(/[a-z]/gi, "");
  //transform into an array
  const durationArr = removeLetters.split(" ");
  // operation and transform to number
  if(durationArr.length === 1){
    hoursToMin = Number(durationArr[0]*60);
  } else {
    hoursToMin = Number(durationArr[0]*60) + +durationArr[1];}

  return hoursToMin;
  }

  return newArr.map((movies)=>{
    return {
      title: movies.title,
      year: movies.year,
      director:movies.director,
      duration:calcDuration(movies.duration),
      genre:movies.genre,
      score:movies.score
    }
  })
  
}
console.log(turnHoursToMinutes(moviesData));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
