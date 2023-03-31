const form = document.querySelector('form');
		const convertBtn = document.querySelector('#convertBtn');
		const resultDiv = document.querySelector('#result');

		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const binaryInput = document.querySelector('#binaryInput').value;

			const decimal = parseInt(binaryInput, 2);

			resultDiv.innerHTML = decimal;
		});