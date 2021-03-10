const selectAllWrapper = document.querySelectorAll('.c-select_wrapper');

window.addEventListener('click', (e) => {
	// eslint-disable-next-line no-restricted-syntax
	for (const select of selectAllWrapper) {
		if (!select.contains(e.target)) {
			select.querySelector('.c-select_ul').classList.remove('c-select_ul__open');
		}
	}
});

// event listeners to open dropdown, select the choice.
selectAllWrapper.forEach((element) => {
	const selectLabel = element.querySelector('.c-select_label');
	const selectUl = element.querySelector('.c-select_ul');
	const selectAllLi = element.querySelectorAll('.c-select_li');
	let varTimeout;
	let searchWord = '';

	function selectLi(li) {
		if (li) {
			const selected = li.textContent;
			li.closest('div').querySelector('span').textContent = selected;
			li.parentNode.querySelector('.c-select_li__selected')?.classList.remove('c-select_li__selected');
			li.classList.add('c-select_li__selected');
		}
	}

	element.addEventListener('click', () => {
		selectUl.classList.contains('c-select_ul__open') && element.blur();
		selectUl.classList.toggle('c-select_ul__open');
	});

	selectUl.addEventListener('click', (e) => {
		if (e.target.classList.contains('c-select_li')) {
			selectLi(e.target);
		}
	});

	element.addEventListener('keydown', (e) => {
		const selected = selectUl.querySelector('.c-select_li__selected');
		switch (e.code) {
		case 'Space':
			selectUl.classList.toggle('c-select_ul__open');
			break;
		case 'ArrowUp':
			selectLi(selected?.previousElementSibling);
			break;
		case 'ArrowDown':
			selectUl.querySelector('.c-select_li__selected') === null
				? selectLi(selectUl.firstElementChild)
				: selectLi(selected.nextElementSibling);
			break;
		case 'Enter':
		case 'Escape':
			element.blur();
			selectUl.classList.remove('c-select_ul__open');
			break;
		default:
			clearTimeout(varTimeout);
			searchWord += e.key;
			console.log(searchWord);
			varTimeout = setTimeout(() => {
				searchWord = '';
			},
			500);

			for (const li of selectAllLi) {
				if (li.textContent.toLowerCase().startsWith(searchWord)) {
					selectLi(li);
				}
			}
		}
	});
});
