console.log('script loaded');

// form variables
const form = document.querySelector('form');
const sections = document.querySelectorAll('section');
const submitButton = document.querySelector('#submit');
const resultsContainer = document.querySelector('#results-container');
const results = document.querySelector('#results');
const error = document.querySelector('.error');

// current form section
let currentSection = 0;
console.log(currentSection);

// hides results section
resultsContainer.style.display = 'none';

// adds buttons when js is enabled
const navigation = `
<div class="navigation">
    <button type="button" id="previous">Previous</button>
    <button type="button" id="next">Next</button>
</div>
`;
form.insertAdjacentHTML('beforeend', navigation);
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

// hides all sections except the first
for (let i = 1; i < sections.length; i++) {
	sections[i].classList.add("js-active");
}

// listens to next button and adds 1 to current section 
nextButton.addEventListener('click', () => {
	const section = document.querySelector('.active');
	const inputs = section.querySelectorAll('input');
	let validation = true;

	// checks if inputs are empty
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].value === '') {
			validation = false;
			error.style.display = 'flex';
		}
	}

	const nextSection = section.nextElementSibling;
	if (validation && nextSection && currentSection < sections.length - 1) {
		section.classList.remove('active');
		section.classList.add('js-active');
		nextSection.classList.add('active');
		nextSection.classList.remove('js-active');
		console.log(currentSection);
		console.log(sections.length);
		currentSection++;
	}

	if (currentSection !== 0) {
		previousButton.style.display = 'block';
	}

	if (currentSection === sections.length - 1) {
		nextButton.style.display = 'none';
	}

	const student_name = document.querySelector("#student-name").value;
	const student_number = document.querySelector("#student-number").value;
	const student_email = document.querySelector("#student-email").value;

	localStorage.setItem('name', student_name);
	localStorage.setItem('number', student_number);
	localStorage.setItem('email', student_email);

	console.log('saved to local storage');
});

// listens to pre button and adds 1 to current section 
previousButton.addEventListener('click', () => {
	const section = document.querySelector('.active');
	const previousSection = section.previousElementSibling;

	if (previousSection) {
		section.classList.remove('active');
		section.classList.add('js-active');
		previousSection.classList.add('active');
		previousSection.classList.remove('js-active');
		console.log(currentSection);
		console.log(section);
		currentSection--;
	}

	if (currentSection === 0) {
		previousButton.style.display = 'none';
	}

	if (currentSection < sections.length - 1) {
		nextButton.style.display = 'block';
	}
});

// get required data values and stores in local storage
form.addEventListener('submit', (e) => {
	e.preventDefault();

	resultsContainer.style.display = 'block';

	const student_name = document.querySelector("#student-name").value;
	const student_number = document.querySelector("#student-number").value;
	const student_email = document.querySelector("#student-email").value;

	var message = '<p>Name: ' + student_name + '</p>' + '<p>' + 'Number:' + student_number + '</p>' + '<p>' + ' Email: ' + student_email + '</p>';
	results.innerHTML = message;
})

window.onload = function () {
	if (currentSection === 0) {
		previousButton.style.display = 'none';
	}

	const student_name = localStorage.getItem('name');
	const student_number = localStorage.getItem('number');
	const student_email = localStorage.getItem('email');

	document.querySelector('#student-name').value = student_name;
	document.querySelector('#student-number').value = student_number;
	document.querySelector('#student-email').value = student_email;
}


