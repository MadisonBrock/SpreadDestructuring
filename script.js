const mcuShows = [`Loki`,`Moon Knight`]

const starWarShows = [`The Mandalorian`,`The Book of Boba Fett`]

const disneyPlusShows =  [mcuShows, starWarShows, `The Beatles: Get Back`]
console.log(disneyPlusShows);
// [
//     [ 'Loki', 'Moon Knight' ],
//     [ 'The Mandalorian', 'The Book of Boba Fett' ],
//     'The Beatles: Get Back'
//   ]

const netflixMovies = {
    action: `Extraction`,
    crime : `The Irishman`
}
const amazonPrime = {
    action :`The Tomorrow War`,
    drama :`One Night In Miami`
}
const streamingMovies = {
    ...netflixMovies,
    ...amazonPrime,
    musical : `Hamilton`
}
console.log(streamingMovies);
// action: 'The Tomorrow War',
// crime: 'The Irishman',
// drama: 'One Night In Miami',
// musical: 'Hamilton'

const disneyJunior = [`Mickey Mouse Clubhouse`,`Spidey and His Amazing Friends`]
const [mickey, spidey] = disneyJunior
console.log(mickey);// Mickey Mouse Clubhouse
console.log(spidey); //Spidey and His Amazing Friends
console.log(disneyJunior);// [ 'Mickey Mouse Clubhouse', 'Spidey and His Amazing Friends' ]

const avengers = {
    warMachine: `James Rhodes`,
    theHulk:`Bruce Banner`
}
const {warMachine, theHulk} = avengers
console.log(warMachine);//Bruce Banner
console.log(theHulk);// James Rhodes

const moreAvengers = {
    blackWidow:`Natasha Romanoff`,
    hawkeye:`Clint Barton`,
    ironMan:`Tony Stark`
}
const {blackWidow:Nat,hawkeye:Clint,ironMan:Tony } = moreAvengers
console.log(Nat); //Natasha Romanoff
console.log(Clint);// Clint Barton
console.log(Tony);// Tony Stark