$(document).ready(function () {
	const bodyEl = document.body;
	bodyEl.style.opacity = '1';
	// MENU
	const menuToggle = document.querySelector('.menu-toggle');
	const mobMenu = document.querySelector('.header-menu');
	const overlayBlock = document.querySelector('#overlay');
	const backTopButton = document.querySelector('#back-top');
	const mobMenuItem = mobMenu.querySelectorAll('li');
	const menuCatLink = document.querySelector('#catPanelItem');
	const catPanel = document.querySelector('#catPanel');


	if (menuToggle) {
		menuToggle.addEventListener('click', function () {
			if (this.classList.contains('active')) {
				menuFoldAll();
				this.classList.remove('active');
				mobMenu.classList.remove('active');
				for (let item of mobMenuItem) {
					item.classList.remove('animate')
				}

				overlayBlock.classList.remove('active');
				bodyEl.classList.remove('noscroll');

			} else {
				this.classList.add('active');
				mobMenu.classList.add('active');
				overlayBlock.classList.add('active');
				bodyEl.classList.add('noscroll');
				let delay = 0;
				for (let item of mobMenuItem) {
					setTimeout(function () {
						item.classList.add('animate');
					}, 50 + delay)
					delay += 100;
				}

			}
		});
		window.addEventListener('resize', function () {
			menuToggle.classList.remove('active');
			menuFoldAll();
			overlayBlock.classList.remove('active');
			bodyEl.classList.remove('noscroll');
			mobMenu.classList.remove('active');
			if (catPanel) {
				catPanel.classList.remove('active');
			}

		});
		mobMenu.addEventListener('click', function () {
			this.classList.remove('active');
			menuToggle.classList.remove('active');
			overlayBlock.classList.remove('active');
			bodyEl.classList.remove('noscroll');

		})
	}
	// 	при скролле скрыть часть шапки со строкой поиска
	const headerTop = document.querySelector('.header-top');
	const headerTopRow = document.querySelector('.header-row__top');
	const headerBottomRow = document.querySelector('.header-row__bottom');



	window.addEventListener('scroll', function () {
		if (window.pageYOffset > 0) {
			headerTopRow.classList.add('hidden');
			headerBottomRow.classList.add('mb-scroll');
			if (window.innerWidth >= 1200) {
				headerTop.classList.add('scroll');
			}
		} else {
			headerTopRow.classList.remove('hidden');
			headerBottomRow.classList.remove('mb-scroll');
			if (window.innerWidth >= 1200) {
				headerTop.classList.remove('scroll');
			}
		}
	})



	// слайдер Новые предложения на главной
	let productSlider = $('.product-slider');
	productSlider.owlCarousel({
		items: 3,

		// navText: ["<span class='ar-left'><i class='fas fa-angle-left'></i></span>", "<span class='ar-right'><i class='fas fa-angle-right'></i></span>"],
		navSpeed: 1000,
		smartSpeed: 1000,
		loop: true,
		stagePadding: 20,
		margin: 10,
		dots: false,
		slideBy: 2,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
				stagePadding: 50,

			},
			1000: {
				items: 3,
				// stagePadding: 0,

			},
			1200: {
				items: 4,
				stagePadding: 0,

			}
		}

	});
	//Назначаем наши кнопки слайдеру новые предложения
	$('#newProduct-next').click(function () {
		productSlider.trigger("next.owl.carousel");
	});
	$("#newProduct-prev").click(function () {
		productSlider.trigger("prev.owl.carousel");
	});

	// слайдер Популярные предложения на главной
	let popularSlider = $('.popular-slider');

	popularSlider.owlCarousel({
		items: 1,
		navSpeed: 1000,
		smartSpeed: 1000,
		loop: true,
		stagePadding: 20,
		margin: 10,
		dots: false,
		slideBy: 2,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
				stagePadding: 50,

			},
			1000: {
				items: 3,
				// stagePadding: 0,

			},
			1200: {
				items: 4,
				stagePadding: 0,

			}
		}

	});
	//Назначаем наши кнопки слайдеру Популярные предложения
	$('#popular-next').click(function () {
		popularSlider.trigger("next.owl.carousel");
	});
	$("#popular-prev").click(function () {
		popularSlider.trigger("prev.owl.carousel");
	});


	// слайдер Выгодные предложения
	let offerSlider = $('.offer-slider');
	offerSlider.owlCarousel({
		items: 1,
		navSpeed: 1000,
		smartSpeed: 1000,
		loop: true,
		margin: 10,
		dots: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		mouseDrag: false,
		autoplay: true,
		autoplayHoverPause: true,
		autoplaySpeed: 2000

	});
	//Назначаем наши кнопки слайдеру новые предложения
	$('#offer-next').click(function () {
		offerSlider.trigger("next.owl.carousel");
	});
	$("#offer-prev").click(function () {
		offerSlider.trigger("prev.owl.carousel");
	});

	//слайдер  похожие статьи
	let similarSlider = $('.similar-slider');
	similarSlider.owlCarousel({
		items: 1,
		navSpeed: 1000,
		smartSpeed: 1000,
		loop: true,
		stagePadding: 20,
		margin: 10,
		dots: false,
		slideBy: 2,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
				stagePadding: 50,

			},
			1000: {
				items: 3,
				stagePadding: 0,

			}
		}

	});
	//Назначаем наши кнопки слайдеру новые предложения
	$('#similar-next').click(function () {
		similarSlider.trigger("next.owl.carousel");
	});
	$("similar-prev").click(function () {
		similarSlider.trigger("prev.owl.carousel");
	});
	// слайдер с отзывами
	let reviewSlider = $('.review-slider-wrapper');
	reviewSlider.owlCarousel({
		items: 1,
		navSpeed: 1200,
		smartSpeed: 1200,
		loop: true,
		autoplayHoverPause: true

	});
	//Назначаем наши кнопки слайдеру продуктов
	$('#rev-next').click(function () {
		reviewSlider.trigger("next.owl.carousel");
	});
	$("#rev-prev").click(function () {
		reviewSlider.trigger("prev.owl.carousel");
	});

	//Слайдер в шапке
	$('.banner-slider').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		// autoplay: true,
		autoplayHoverPause: true,
		// autoplaySpeed: 3000,
		mouseDrag: false,
		smartSpeed: 800,
		dots: true,
		navSpeed: 800,
		dotsSpeed: 800,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		navText: ['<span class="arrow-left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7501 9.99963L7.50008 16.2496L6.61633 15.3659L11.9826 9.99963L6.61633 4.63338L7.50008 3.74963L13.7501 9.99963Z" fill="#E21736"/> <mask id="masksl" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="3" width="8" height="14"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7501 9.99963L7.50008 16.2496L6.61633 15.3659L11.9826 9.99963L6.61633 4.63338L7.50008 3.74963L13.7501 9.99963Z" fill="white"/></mask>	<g mask="url(#masksl)">	</g></svg></span>', '<span class="arrow-left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7501 9.99963L7.50008 16.2496L6.61633 15.3659L11.9826 9.99963L6.61633 4.63338L7.50008 3.74963L13.7501 9.99963Z" fill="#E21736"/> <mask id="masksl" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="3" width="8" height="14"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7501 9.99963L7.50008 16.2496L6.61633 15.3659L11.9826 9.99963L6.61633 4.63338L7.50008 3.74963L13.7501 9.99963Z" fill="white"/></mask>	<g mask="url(#masksl)">	</g></svg></span>'],

	});

	/** Счетчик количества **/

	let plusBtn = $('.product-counter--plus');
	let minusBtn = $('.product-counter--minus');


	plusBtn.on('click', function (e) {
		e.preventDefault()
		startCount = $(this).siblings('.product-counter--num').html();
		if (startCount < 20) {
			startCount = ++startCount;
			$(this).siblings('.product-counter--num').html(startCount);
			$(this).closest('.product-counter').children('input').val(startCount)
		}

	});

	minusBtn.on('click', function (e) {
		e.preventDefault()
		startCount = $(this).siblings('.product-counter--num').html();
		if (startCount > 1) {
			startCount = --startCount;
			$(this).siblings('.product-counter--num').html(startCount);
			$(this).closest('.product-counter').children('input').val(startCount)

		}
	});


	// маска для телефона
	$(".phone").mask("+7(999)999-99-99");
	$.fn.setCursorPosition = function (pos) {
		if ($(this).get(0).setSelectionRange) {
			$(this).get(0).setSelectionRange(pos, pos);
		} else if ($(this).get(0).createTextRange) {
			var range = $(this).get(0).createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};
	$('input.phone').click(function () {
		$(this).setCursorPosition(3); // set position number
	});


	const checkboxGroup = document.querySelectorAll('label.form-label');
	const requiredInputs = document.querySelectorAll('.form-group  input[type="text"]');
	const textareaElement = document.querySelector('.form-group textarea');


	/*---ПОКАЗАТЬ ВОСКЛИЦАТЕЛЬНЫЙ ЗНАК В ИНПУТЕ */
	for (let item of requiredInputs) {
		//по клику в текстовый инпут убираем восклиц знак и активируем плейсхолдер
		const thisParent = item.closest('.form-group');
		item.addEventListener('focus', function () {
			thisParent.classList.remove('error');

			if (thisParent.querySelector('.fake-placeholder')) {
				thisParent.querySelector('.fake-placeholder').classList.add('active');
			}


		});
		//по блюру у пустого инпута деактивируем плейсхолдер
		item.addEventListener('blur', function () {
			if (this.value.length == 0) {
				if (thisParent.querySelector('.fake-placeholder')) {
					thisParent.querySelector('.fake-placeholder').classList.remove('active');
				}

			}
		})
	}
	// для текстареа активируем и деактивируем кастомный плейсхолдер при фокусе и блюре
	if (textareaElement) {
		textareaElement.addEventListener('focus', function () {
			const thisParent = this.closest('.form-group');
			thisParent.querySelector('.fake-placeholder').classList.add('active');
		});


		textareaElement.addEventListener('blur', function () {
			const thisParent = this.closest('.form-group');
			if (this.value.length == '0') {
				thisParent.querySelector('.fake-placeholder').classList.remove('active');

			}
		});

	}

	/*ВАЛИДАЦИЯ ФОРМЫ */
	$("#contact-form").on('submit', function (event) {
		event.preventDefault();

		let success = false;

		for (let item of requiredInputs) {
			const thisParent = item.closest('.form-group');

			if (item.value.length == 0) {
				thisParent.classList.add('error');
				success = false;

			} else {
				success = true;
			}
		}

		if (success) {
			var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку.

			// Формируем ajax запрос
			$.ajax({
				type: "POST", // Тип запроса - POST
				url: "php/mail.php", // Куда отправляем запрос
				data: string, // Какие даные отправляем, в данном случае отправляем переменную string

				// Функция если все прошло успешно
				success: function (html) {
					$("#contact-form").slideUp(800);
					$('#answer').html(html);
				}
			});

			// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
			return false;
		}

	});
	/*кнопка вверх */
	$("#back-top").hide();


	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
				$('.header-top').removeClass('fixed');
			}
		});

	});

	//MENU
	$(".menu--action-fold").click(function (e) {
		e.stopImmediatePropagation();
		let foldableElement = $(e.target).closest(".menu--contains-foldable").children(".menu--foldable");
		if (foldableElement.hasClass("menu--folded")) {
			foldableElement.removeClass("menu--folded");
			menuUnfolded($(e.target).closest(".menu--contains-foldable"), $(e.target), foldableElement);
			let foldableSiblings = foldableElement.closest(".menu--contains-foldable").siblings(".menu--contains-foldable");
			for (let i = 0; i < foldableSiblings.length; i++) {
				goDeepAndFold(foldableSiblings[i]);
			}
		} else {
			foldableElement.addClass("menu--folded");
			goDeepAndFold(foldableElement.closest(".menu--contains-foldable"));
			menuFolded($(e.target).closest(".menu--contains-foldable"), $(e.target), foldableElement);
		}
	});

	function menuFolded(block, button, foldable) { //когда меню закрыли
		$(button).text("+");
	}

	function menuUnfolded(block, button, foldable) {
		$(button).text("-");
	}

	function goDeepAndFold(element) {
		let foldableChild = $(element).children(".menu--foldable");
		if (!foldableChild.hasClass("menu--default-visible")) {
			foldableChild.addClass("menu--folded");
			menuFolded(element, $(element).find(".menu--action-fold")[0], foldableChild);
		}
		let diveList = foldableChild.find(".menu--contains-foldable");
		for (let i = 0; i < diveList.length; i++) {
			goDeepAndFold(diveList[i]);
		}
	}

	function menuFoldAll() {
		goDeepAndFold($(".header-menu").children(".menu--contains-foldable"));
	}

	/*ЗАКРЫВАТЬ ОТКРЫТУЮ ПЛАШКУ АККОРДЕОНА В ИСТОРИИ ЗАКАЗОВ*/
	$('#user-history .panel-collapse').on('show.bs.collapse', function () {
		let tabIcon = $("#" + $(this).attr("aria-labelledby")).children().children('.accordion-item__icon').children("i");
		let tabIconText = $("#" + $(this).attr("aria-labelledby")).children().children('.accordion-item__icon').children("span");
		tabIcon.addClass("up");
		tabIconText.text("Свернуть");
	});

	$('#user-history .panel-collapse').on('hide.bs.collapse', function () {
		let tabIcon = $("#" + $(this).attr("aria-labelledby")).children().children('.accordion-item__icon').children("i");
		let tabIconText = $("#" + $(this).attr("aria-labelledby")).children().children('.accordion-item__icon').children("span");
		tabIcon.removeClass("up");
		tabIconText.text("Развернуть");
	});

	// разворачивать иконку стрелку в аккордеоне -Отвечаем на вопросы 
	//аккордеон развернуть стрелку
	const faqAcordion = document.querySelector('#answers');
	if (faqAcordion) {
		$('.collapsable').on('show.bs.collapse', function () {
			let tabIcon = $("#" + $(this).attr("aria-labelledby")).find(".arrow");
			tabIcon.addClass("rotate");
		});
		$('.collapsable').on('hide.bs.collapse', function () {
			let tabIcon = $("#" + $(this).attr("aria-labelledby")).find(".arrow");
			tabIcon.removeClass("rotate");
		});
	}

	/*----ВСПЛЫВАЮЩАЯ ПОДСКАЗКА TOOLTIP СТРАНИЦА ОФОРМЛЕНИЯ ЗАКАЗА----*/
	const tooltip = document.querySelector('.tooltip-div');
	const tooltipShowIcon = document.querySelector('.tooltip-icon');

	if (tooltip) {
		const tooltipCloseIcon = tooltip.querySelector('.close-toooltip');
		tooltipShowIcon.addEventListener('click', function (e) {
			e.preventDefault();
			tooltip.classList.add('active');
		});
		tooltipCloseIcon.addEventListener('click', function (e) {
			e.preventDefault();
			tooltip.classList.remove('active');
		});
	}


	/*---------ЛИЧНЫЕ ДАННЫЕ   ПОКАЗАТЬ ПАРОЛЬ------- */
	const showPasswIcon = document.querySelector('#toggle-passw');
	if (showPasswIcon) {

		showPasswIcon.addEventListener('click', function () {
			if (this.classList.contains('active')) {
				this.classList.remove('active');
				this.nextElementSibling.setAttribute('type', 'password')
			} else {
				this.classList.add('active');
				this.nextElementSibling.setAttribute('type', 'text')
			}
		})
	}

	/*-------СТРАНИЦА ОДНОЙ АКЦИИ  ПОДБОР ВЫСОТЫ КАРТИНКИ------*/
	let articleBlock = document.querySelector('.flex-height');
	if (articleBlock) {
		let articleBlockText = document.querySelectorAll('.flex-height p');

		if (window.innerWidth >= 1200) {
			let articleBlockHeight = articleBlock.clientHeight;
			const articleImgWrapper = articleBlock.querySelector('.text-block__img');
			articleImgWrapper.style.height = articleBlockHeight + 'px'

			if (articleImgWrapper.style.height == 210 + 'px') {
				articleImgWrapper.style.marginBottom = 30 + 'px';
			}

		}

	}
	/* КАСТОМНЫЙ ВЫБОР ФАЙЛА АВАТАР ЮЗЕРА*/
	;
	(function (document, window, index) {
		var inputs = document.querySelectorAll('.inputfile');
		Array.prototype.forEach.call(inputs, function (input) {
			var label = input.nextElementSibling,
				labelVal = label.innerHTML;

			input.addEventListener('change', function (e) {
				var fileName = '';
				if (this.files && this.files.length > 1)
					fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
				else
					fileName = e.target.value.split('\\').pop();

				if (fileName) {

					if (label.firstChild.nodeType === Node.ELEMENT_NODE) {
						label.querySelector('span').innerHTML = fileName;
					} else {
						label.nextElementSibling.innerHTML = fileName;
					}


				} else
					label.innerHTML = labelVal;
			});

			// Firefox bug fix
			input.addEventListener('focus', function () {
				input.classList.add('has-focus');
			});
			input.addEventListener('blur', function () {
				input.classList.remove('has-focus');
			});
		});
	}(document, window, 0));

	// ДИАПАЗОН ВЫБОРА ЦЕНЫ
	$(function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 10000,
			values: [2000, 8000],
			slide: function (event, ui) {
				$("#amount").val(ui.values[0]);
				$("#amount_1").val(ui.values[1]);
			}
		});
		$("#amount").val($("#slider-range").slider("values", 0));
		$("#amount_1").val($("#slider-range").slider("values", 1));

		//-изменение местоположения ползунка при вводе данных в 1 инпут
		$('input#amount').change(function () {
			var value1 = $('input#amount').val();
			var value2 = $('input#amount_1').val();

			if (parseInt(value1) > parseInt(value2)) {
				value1 = value2;
				$('input#amount').val(value1);
			}
			$('#slider-range').slider("values", 0, value1);
		});

		//-при вводе данных в 2 инпут
		$('input#amount_1').change(function () {
			var value1 = $('input#amount').val();
			var value2 = $('input#amount_1').val();

			if (parseInt(value1) > parseInt(value2)) {
				value2 = value2;
				$('input#amount_1').val(value2);
			}
			$('#slider-range').slider("values", 1, value2);
		});

		//-фильтрация ввода в инпут
		jQuery('#amount, #amount_1').keypress(function (event) {
			var key, keyChar;
			if (!event) var event = window.event;

			if (event.keyCode) key = event.keyCode;
			else if (event.which) key = event.which;

			if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
			keyChar = String.fromCharCode(key);

			if (!/\d/.test(keyChar)) return false;
		});

	});

	// CUSTOM SELECT
	const selectElement = document.querySelector('.form-select');
	if (selectElement) {
		const selectInput = selectElement.querySelector('input');
		const selectOptions = selectElement.querySelector('.form-select__options');
		const selectArrow = selectElement.querySelector('.form-select__icon');



		selectArrow.addEventListener('click', function () {

			if (selectOptions.classList.contains('active')) {
				this.classList.remove('rotate');
				selectOptions.classList.remove('active');
			} else {
				this.classList.add('rotate');
				selectOptions.classList.add('active');
			}

		});

		//клик по выпадающему списку селекта
		selectOptions.addEventListener('click', function (e) {
			if (e.target.tagName == 'LI') {
				selectInput.value = e.target.textContent;
				this.classList.remove('active');
				selectArrow.classList.remove('rotate');
				// console.log(e.target.textContent)
			}

		});
	}
	// Показать подменю каталога на сайдбаре  стр Каталог
	const dropLi = document.querySelectorAll('li.drop-list');

	for (let item of dropLi) {
		item.addEventListener('click', function () {

			const itemDrop = item.querySelector('.menu-drop');

			itemDrop.classList.toggle('active');
			this.classList.toggle('active');
		})
	}

	// ПЕРЕКЛЮЧЕНИЕ ОТОБРАЖЕНИЯ КАРТОЧЕК
	const viewListBtn = document.querySelector('.view-list');
	const viewTableBtn = document.querySelector('.view-table');
	const cardColumn = document.querySelectorAll('.content-cards .col-xl-4');
	if (viewListBtn) {
		viewListBtn.addEventListener('click', function () {
			viewTableBtn.classList.remove('active');
			this.classList.add('active')
			for (let item of cardColumn) {
				item.classList.add('card-horizontal')
			}
		});

		viewTableBtn.addEventListener('click', function () {
			viewListBtn.classList.remove('active');
			this.classList.add('active')
			for (let item of cardColumn) {
				item.classList.remove('card-horizontal')
			}
		});
		// Клик по количеству отображения карточек
		const countBtn = document.querySelectorAll('.count-buttons button');
		for (item of countBtn) {
			item.addEventListener('click', function () {
				for (item of countBtn) {
					item.classList.remove('active')
				}
				this.classList.add('active');
			})
		}
	}
	// клик по иконке сердечко
	const iconFavor = document.querySelectorAll('.favorite-icon');
	if (iconFavor) {
		for (let item of iconFavor) {
			item.addEventListener('click', function () {
				console.log('555');
				this.querySelector('i').classList.toggle('fas')
			})
		}
	}
	// футер, показать мпню на мобилках
	const foldMenuTitle = document.querySelectorAll('.fold-menu-title');
	for (let item of foldMenuTitle) {
		const itemArrowIcon = item.querySelector('.fold-menu-icon');
		const foldMenuList = item.nextElementSibling;
		item.addEventListener('click', function () {
			console.log('555');
			itemArrowIcon.classList.toggle('active');
			foldMenuList.classList.toggle('active');
		})
	}


})