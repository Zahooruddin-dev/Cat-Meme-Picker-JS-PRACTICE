import { catsData } from './data.js';
const emotionRadio = document.getElementById('emotion-radios');
const getImageBtn = document.getElementById('get-image-btn')
/*
Challenge:
1. Set up an eventlistener which calls a new
   function called "getMatchingCatsArray" when
   the "Get Image" button is clicked.
2. getMatchingCatsArray should save the value
   of the checked radio input to a const and 
   log out that const.
*/
getImageBtn.addEventListener('click',getMatchingCatsArray)
function getMatchingCatsArray(e){
    const input= document.querySelector('input[type="radio"]:checked').value
    console.log(input);
    
}

emotionRadio.addEventListener('change', highlightCheckedOption);
function highlightCheckedOption(e) {
	const radios = document.getElementsByClassName('radio');
	for (let radio of radios) {
		radio.classList.remove('highlight');
	}
	document.getElementById(e.target.id).parentElement.classList.add('highlight');
}

function getEmotionsArray(cats) {
	const emotionsArray = [];
	for (let cat of cats) {
		for (let emotion of cat.emotionTags) {
			if (!emotionsArray.includes(emotion)) {
				emotionsArray.push(emotion);
			}
		}
	}
	return emotionsArray;
}
function renderEmotionsRadio(cats) {
	let radioItems = '';
	const emotions = getEmotionsArray(cats);
	for (let emotion of emotions) {
		radioItems += `     
      <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
                >
        </div>`;
	}
	emotionRadio.innerHTML = radioItems;
}
renderEmotionsRadio(catsData);
