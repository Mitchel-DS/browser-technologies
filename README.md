# browser-technologies 2.0

## Description

During Browser Technologies we will be learning about Progressive Enhancement and how to implement it into our website and make it as accessible as possible. The web is for everybody, and during this course we will be learning how to do this.

 We will be applying this to make a survey about the Web Development minor. The survey will be filled out by students who are currently doing the minor, and will be used to improve the minor. See User Story below:

> I want to be able to fill out a survey about the Web Development minor, with various answer options. I want to clearly see where I am and how much I still have to do. I want to be able to review previously filled in questions. If I can't finish the survey, I want to be able to continue later from where I left off.

## Demo

Link naar de live [demo.](https://mitchel-ds.github.io/browser-technologies-2223/)

## Core features

Some of the core features that needed to be implemented:

- Student needs to be able to fill in information about themselves (name, number and email are required).
- Fill in information per course.
- The survey needs to be validated.
- Return to survey if not completed yet.
- Clear interface, with progress.
- No visible radio buttons.
- Light and Dark mode. 

## Progressive Enhancement

For progressive enhancement I implemented form validation using Javascript. This means that normally, if the user leaves out any of the input field, they will get a notification telling them they need to fill in the required fields. If javascipt is disabled, the required tag will give them the standard notification.

![form validation](/images/Screenshot%202023-05-26%20at%203.32.43%20AM.png)

```js
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
```

![required validation](/images/Screenshot%202023-05-26%20at%203.40.33%20AM.png)

Also as you can see in the picture above, when javascipt is disabled, the form will apear under each other, instead of having them split up. If javascript is enabled, the form will be split up into different pages, so the user can easily navigate through the form without being overwhelmed.

## Feature Detection

For feature detection, I made the light and dark mode and the responsiveness. I did this by using the `@media` query. This way, if the browser does not support the `@media` query, it will just show the default styling.

```css
/* light/dark mode */
@media (prefers-color-scheme: light) {
	:root {
		color: #213547;
		background-color: #f5f5f5;
	}
}

/* responsive */
@media screen and (max-width: 500px) {
	form {
		padding: 20px;
		min-width: 380px;
		margin: 0 auto;
	}
}
```

## Testing

### CSS disabled

Without CSS, the website is still usable. The user can still fill in the form and submit it. The only thing that is missing is the styling. Even the validation is still there.

Obviously, the radio buttons are now visible and the dark mode won't be detected.

![css disabled](/images/Screenshot%202023-05-26%20at%203.59.13%20AM.png)
![css disabled](/images/Screenshot%202023-05-26%20at%203.59.20%20AM.png)

### Javascript disabled

Without Javascript, the website is still usable. The user can still fill in the form and submit it. The only thing that is missing is the validation. This still works with the required tag, but the user won't get a notification for anything specific.

![required validation](/images/Screenshot%202023-05-26%20at%203.40.33%20AM.png)


### Color contrast

I tested the color contrast as well. I'm not using a lot of crazy colors, so it wasn't that difficult. Here's the results:

![color contrast](/images/contrast.png)

### Screenreader

The built in screenreader for Mac works fine. It reads out the form and the questions. Because everything has semantic HTML, it reads out the form in the correct order.

Although some fields are already filled in with a default value, the screenreader still reads the title and the value it currently contains.


### Chrome

Obviously, Chrome works fine. It supports all the features I used, because I made it based on the chrome browser. I tried using new features, such as the :valid and :invalid pseudo classes, but it didn't work in chrome, because it is not supported yet.

```css
input:user-invalid {
	border-color: #f00;
}
```

If it is supported it will show additional validation.


![chrome](/images/uservalid.png)

I also used the :has pseudo class, which is only supported in chrome, safari for now. That works fine.

![chrome](/images/Screenshot%202023-05-26%20at%204.14.10%20AM.png)

### Firefox

:valid and :invalid pseudo classes work in Firefox. The website works fine in Firefox.
I also used the :has pseudo class, which isn't supported by firefox yet. That doesn't work.
### Safari

:valid and :invalid pseudo classes work in Safari. The website works fine in Safari.
I also used the :has pseudo class, which is only supported in chrome, safari for now. That works fine.

Only trying to control it with keyboard can be a bit tricky cause it has different controls than chrome.
Also it skips a lot of things. For example, if you press tab, it will skip the radio buttons and go straight to the next button. Also submit doesn't work without a screenreader.

### Mobile

I made the website responsive, so it looks fine and works fine on mobile devices. I tested this on chrome mobile.

![mobile](/images/IMG_1523.PNG)
![mobile](/images/IMG_1524.PNG)
![mobile](/images/IMG_1525.PNG)

### Flow

Flow, is garbage. It does not support a lot of features. The javascript works partially and the responsiveness completely breaks. 

![flow](/images/flow.png)
![flow](/images/flowresponsive.png)