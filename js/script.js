function validateForm(event) {
  event.preventDefault();
  
  if (!nameInput.value) {
    alert('Please enter your name!');
    return;
  }
  
  if (!animalSelect.value) {
    alert('Please select an animal!');
    return;
  }
  
  if (!sleepInput.value || sleepInput.value < 0) {
    alert('Please enter a valid number of hours of sleep!');
    return;
  }
  
  const result = {
    name: nameInput.value,
    animal: animalSelect.value,
    sleep: sleepInput.value
  };
  
  alert(`Thank you for taking the survey!\nName: ${result.name}\nAnimal: ${result.animal}\nSleep: ${result.sleep}`);
}

form.addEventListener('submit', validateForm);
