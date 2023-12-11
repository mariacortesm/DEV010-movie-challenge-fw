export const dataBase = (page = 1) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjAxMWUwNmM0NTA4ZDRkMTA1ZGMyNTk4MzE5MmM4ZCIsInN1YiI6IjY1NWNkNjE1N2YwNTQwMThkMzQ0ZWNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A30JBSAJu2w3UDMkGA22RXiwU6PfbC2HF2BKRqr8P-8'
        }
      };

    return fetch(`https://api.themoviedb.org/3/search/movie?query=animation&include_adult=false&language=en-US&page=${page}&api_key=b2011e06c4508d4d105dc25983192c8d`, options)
   .then(response => response.json())
     .then((data) => {
         console.log(data);
         if(Array.isArray(data.results) && data.results.length > 0) {
             return data.results;
         }
     })
     .catch(err => console.error(err))
};