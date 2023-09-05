const apiUrl = 'https://api.chucknorris.io/jokes/random';


fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const joke = data.value;
    console.log('Chiste de Chuck Norris:', joke);
  })
  .catch(function (error) {
    console.error('Error al obtener el chiste:', error);
  });
