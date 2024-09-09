import { catsData } from './data.js';
const emotionRadio = document.getElementById('emotion-radios');
emotionRadio.addEventListener('change',highlightCheckedOption)

/*
Challenge:
1. highlightCheckedOption should take control 
   of the selected radio input and add the CSS
   class of "highlight" to its classlist
*/ 
function highlightCheckedOption(e){
/*
Challenge:
1. highlightCheckedOption should take control 
   of the selected radio input and add the CSS
   class of "highlight" to its classlist
*/
    console.log(e.target.id);}

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
