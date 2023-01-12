



// function removeVowels() {
//     let inputString = $('#input').val();
//     let modifiedString = "";
//  for (let i = 0; i < string.length; i++) {
//     if (vowels.indexOf(string[i]) === -1) {
//       modifiedString += string[i];
//     }
//   }
//   $("#ret").text(modifiedString);

// }


// document.getElementById('string').value;

function removeVowels() {
    let inputString = $("#input").val();
    let modifiedString = inputString.replace(/[aeiou]/gi, '');
    $("#ret").text(modifiedString);
  }