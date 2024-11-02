
const wrapperElement = document.querySelector('.wrapper');
// alert(wrapperElement);

const careers = ['You Tuber', 'Web Developer', 'Software Developer', 'Freelancer', 'Instructor'];

let arrIndex = 0;

// To Print the Career one by one
let characterIndex = 0;

let fruits = ['Orange', 'Pomegranate', 'Guava', 'Apple', 'Grapes'];

updateText();


function updateText(){
    characterIndex++;
    wrapperElement.innerHTML = `<h1>I am a <span style='color: crimson'>${careers[arrIndex].slice(0, characterIndex)}</span> </h1> <h2  style='color: blue'>Buy the below Fruits</h2>
    <h3 style='color: red'>${fruits[arrIndex].slice(0, characterIndex)}</h3>`;
        
    if(characterIndex === careers[arrIndex].length){
         arrIndex++;
         characterIndex = 0;        
    }

    if(arrIndex === careers.length){
        arrIndex = 0;
    }
    setTimeout(updateText, 400);
}



