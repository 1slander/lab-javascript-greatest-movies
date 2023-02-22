// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
 const allDirectors = moviesArray.map((movie)=>
   movie.director);
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



const test= [ {
    title: 'Raiders of the Lost Ark',
    year: 1981,
    director: 'Steven Spielberg',
    duration: '1h 55min',
    genre: ['Action', 'Adventure'],
    score: 8.5
  },
  {
    title: 'The Pianist',
    year: 2002,
    director: 'Roman Polanski',
    duration: '2h 30min',
    genre: ['Biography', 'Drama', 'Music', 'War'],
    score: 8.5
  },
  {
    title: 'Saving Private Ryan',
    year: 1998,
    director: 'Steven Spielberg',
    duration: '2h 49min',
    genre: ['Drama', 'War'],
    score: 8.6
  }
 ];
 console.log(howManyMovies(test));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
 const scores = moviesArray
      .map(movie => movie.score);

      if (scores.length === 0) {
      return 0;
    }else{

    const totalScore = scores.reduce((accumulator, currentValue) => { 
     if(typeof currentValue === 'string' || currentValue === undefined ){
      currentValue = 0
      return accumulator + currentValue;
     } else {
     console.log(typeof accumulator, typeof currentValue);
     return accumulator + currentValue;
    }
   });
   
    console.log('This is total Score', totalScore)

    const averageScore = totalScore / scores.length;
     console.log('This is avg Score', averageScore)
    const averageScoreRounded = Math.round(averageScore * 100) / 100;
     console.log('This is round Score', averageScoreRounded)
    return averageScoreRounded;
    }
 
}
console.log(scoresAverage(test));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
