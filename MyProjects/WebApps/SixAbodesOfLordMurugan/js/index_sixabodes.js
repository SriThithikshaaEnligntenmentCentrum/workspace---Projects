// Ref: 02.0_AutoText_Effect_Animation.html

const header = document.querySelector('h1');

let text = header.innerHTML ;

let characterIndex = 0;

animateText();

function animateText(){
  characterIndex++;
 
 if(characterIndex <= text.length){    
      header.innerHTML = `${text.slice(0, characterIndex)}`;    
      header.style.textShadow = '5px 5px 10px white';
      // header.style.fontSize = '45px';
  }  
  setTimeout(animateText, 200);
}

