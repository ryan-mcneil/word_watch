import $ from 'jquery'

$(document).ready(() => {
  getTopUser();
  $('button').click( () => breakdown() );


})

const getTopUser = () => {
  let url = 'https://wordwatch-api.herokuapp.com/api/v1/top_word';
  fetch(url)
  .then( response => response.json() )
  .then( data => {
    let word = Object.keys(data["word"])[0];
    let count = data["word"][word];
    $(".top-word h3").text(`Top word from Word Watch API: ${word}`);
    $("#word-count").text(`Count: ${count}`)
  })
}

const breakdown= () => {
  let text = $('#input-text').val();
  let words = text.split(" ")

  words.forEach( word => postWord(word) );

  $('#input-text').val("")
}

const postWord= (word) => {
  let url = 'https://wordwatch-api.herokuapp.com/api/v1/words';
  fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      word: {
        value: word
      }
    })
  })
  .then( getTopUser() )
  .catch( error => console.log(error));
}
