import $ from 'jquery'

$(document).ready(() => {
  getTopUser();
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
