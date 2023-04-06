console.log('script loaded');

const form = document.querySelector('form');
const sections = document.querySelectorAll('section');
const infoButton = document.querySelector('#info-button');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const formData = {
		email: document.getElementById('student-email').value
	}

	const formDataString = JSON.stringify(formData);

	localStorage.setItem('formData', formDataString);
	console.log(formDataString + ' saved to local storage');

	var student_name = document.getElementById("student-name").value;
	var message = "<p>Results: " + student_name + "</p>";
	document.getElementById("results-container").innerHTML = message;
});

for (let i = 1; i < sections.length; i++) {
	sections[i].classList.add("js-active");
  }

infoButton.addEventListener('click', (e) => {
	e.preventDefault();
	sections[4].classList.remove("js-active");
});

