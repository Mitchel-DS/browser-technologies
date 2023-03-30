const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const formData = {
		email: document.getElementById('student-email').value
	}

	const formDataString = JSON.stringify(formData);

	localStorage.setItem('formData', formDataString);
	alert('Form data saved to local storage');
	console.log(formDataString);
});


