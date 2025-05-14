const form = document.getElementById('Artwork-Form');

if(form){
  	form.addEventListener('submit', (event) => {
		event.preventDefault();

		const email = form.elements['email'].value.trim();
		const title = form.elements['title'].value.trim();
		const description = form.elements['description'].value.trim();
		const tags = form.elements['tags'].value.trim();
		const fileInput = form.elements['file-upload'];
		const aiRadios = form.elements['ai-generated'];

		const messageEl = document.getElementById('Form-Message');
		messageEl.textContent = '';

		function validateEmail(email){
			const at = email.indexOf('@');
			const dot = email.lastIndexOf('.');
			return at > 0 && dot > at + 1 && dot < email.length -1;
		}

		if(!validateEmail(email)) {
			messageEl.textContent = 'Please enter a valid email address.';
			return;
		}
		if(title.length < 3){
			messageEl.textContent = 'Title must be at least 3 characters.';
			return;
		}
		if(description.length === 0){
			messageEl.textContent = 'Description is required.';
			return;
		}
		if(tags.length === 0){
			messageEl.textContent = 'Please add at least one tag.';
			return;
		}
		if(fileInput.files.length === 0){
			messageEl.textContent = 'Please upload an image file.';
			return;
		}

		if(!fileInput.files[0].type.startsWith('image/')){
			messageEl.textContent = 'Uploaded file must be an image.';
			return;
		}

		let aiSelected = false;
		for(let i=0; i<aiRadios.length; i++){
			if(aiRadios[i].checked){
				aiSelected = true;
				break;
			}
		}
		if(!aiSelected){
			messageEl.textContent = 'Please confirm AI-generated status.';
			return;
		}

		messageEl.style.color = 'green';
		messageEl.textContent = 'Artwork submitted successfully! Thank you.';
		form.reset();
  	});
}