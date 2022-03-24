const formBtn = document.querySelector('.form-btn');
const formText = document.querySelector('.form-text');
const boxColumnLeftRu = document.querySelector('.box-column-left-ru');
const boxColumnRightEn = document.querySelector('.box-column-right-en');

formBtn.addEventListener('click', function() {
  const inputValue = formText.value;

  function inputValueSlice() {
    let newCroppedValue;

    if(inputValue.length > 7) {
      newCroppedValue = inputValue.slice(0, 7) + '...';
    } else {
      newCroppedValue = inputValue;
    }
    return newCroppedValue;
  }

  //Транслитерация текста
  function translate(word) {
	  let converter = {
		  'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		  'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		  'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		  'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		  'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		  'ш': 'sh',   'щ': 'sch',  'ъ': '\'',   'ы': 'y',    'ь': '\'',
		  'э': 'e',    'ю': 'yu',   'я': 'ya',
 
		  'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		  'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		  'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		  'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		  'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		  'Ш': 'Sh',   'Щ': 'Sch',  'Ъ': '\'',   'Ы': 'Y',    'Ь': '\'',
		  'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
	  };
    let result = word.split('').map((char) => converter[char] || char).join('');
    return result;
  }
  
  let newTextLeftRu = document.createElement('p');
  newTextLeftRu.setAttribute('class', 'new-text-left-ru');
  newTextLeftRu.innerText = inputValueSlice();

  let newTextRightEn = document.createElement('p');
  newTextRightEn.setAttribute('class', 'new-text-right-en');
  newTextRightEn.innerText = translate(inputValueSlice());

  if(inputValue.length > 7) {
    newTextLeftRu.setAttribute('title', inputValue);
    newTextRightEn.setAttribute('title', translate(inputValue));
  }

  boxColumnLeftRu.appendChild(newTextLeftRu);
  boxColumnRightEn.appendChild(newTextRightEn);

  formText.value = '';
})

const resetValueBtn = document.querySelector('.reset-value-btn');

resetValueBtn.addEventListener('click', () => {
  boxColumnLeftRu.innerHTML = '';
  boxColumnRightEn.innerText = '';
})
