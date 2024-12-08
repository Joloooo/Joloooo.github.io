import servicesData from './russianData.js';

// Функция для обновления URL
function updateURL(queryString) {
  const newURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${queryString}`;
  history.pushState({ path: newURL }, '', newURL);
}

// Функция для обработки параметров запроса URL
function handleQueryParameters() {
  const params = new URLSearchParams(window.location.search);
  const serviceId = params.get('service');
  const subserviceId = params.get('subservice');
  const action = params.get('action');

  if (serviceId) {
    const selectedService = servicesData.find(service => service.id === serviceId);
    if (selectedService) {
      if (subserviceId) {
        const selectedSubservice = selectedService.subservices.find(subservice => subservice.id === subserviceId);
        if (selectedSubservice) {
          if (action === 'registration') {
            renderRegistrationForm(selectedSubservice);
          } else {
            renderDescription(selectedSubservice);
          }
        }
      } else {
        renderSubservices(selectedService);
      }
    }
  } else {
    renderMainServices();
  }
}

// Прослушивание события 'popstate' для обработки навигации назад/вперед в браузере
window.addEventListener('popstate', () => {
  handleQueryParameters();
});

// Инициализация страницы с основными услугами или обработка параметров URL для поддержания состояния
handleQueryParameters();

// Функция для отображения основных услуг
function renderMainServices() {
  const main = document.querySelector("main");
  main.innerHTML = ""; 

  servicesData.forEach((service) => {
    const serviceElement = document.createElement("p");
    serviceElement.classList.add("service", "roundbox", "selector");
    serviceElement.textContent = service.name;
    serviceElement.addEventListener("click", () => {
      updateURL(`service=${service.id}`);
      renderSubservices(service);
    });
    main.appendChild(serviceElement);
  });
}

// Функция для отображения подуслуг
function renderSubservices(service) {
  const main = document.querySelector("main");
  main.innerHTML = "";

  service.subservices.forEach((subservice) => {
    const subserviceElement = document.createElement("p");
    subserviceElement.classList.add("subservice", "roundbox", "selector");
    subserviceElement.textContent = subservice.name;
    subserviceElement.addEventListener("click", () => {
      updateURL(`service=${service.id}&subservice=${subservice.id}`);
      renderDescription(subservice);
    });
    main.appendChild(subserviceElement);
  });
}

// Функция для отображения описания с кнопкой "Онлайн регистрация"
function renderDescription(subservice) {
  const main = document.querySelector("main");
  main.innerHTML = `
    <div class="textbox">
      ${subservice.description}
      <button id="onlineRegistration">Онлайн регистрация</button>
    </div>
  `;

  // Добавить обработчик событий для кнопки "Онлайн регистрация"
  document.querySelector("#onlineRegistration").addEventListener("click", () => {
    updateURL(`service=${subservice.serviceId}&subservice=${subservice.id}&action=registration`);
    renderRegistrationForm(subservice);
  });
}

// Функция для отображения формы регистрации
function renderRegistrationForm(subservice) {
  const main = document.querySelector("main");

  // Обернуть содержимое формы в один div
  let formHTML = `
    <div id="registrationContainer">
      <h2>Онлайн регистрация</h2>
      <h3>${subservice.name}</h3>
      <form id="registrationForm">
        <ol>
  `;

  // Добавить элементы списка с полями ввода из данных формы регистрации
  subservice.registration.formFields.forEach((field, index) => {
    if (field.elementType === "input") {
      console.log(`Rendering input field with ID: input-${index}`); // Debug statement
      formHTML += `<li>${field.label}: <input type="${field.type}" id="input-${index}" name="input-${index}" required></li>`;
    } else if (field.elementType === "h3") {
      formHTML += `<h3>${field.label}</h3>`;
    } else if (field.elementType === "h4") {
      formHTML += `<h4>${field.label}</h4>`;
    }
  });

  formHTML += `
        </ol>
        <button id="finalSubmit" type="submit">Завершить онлайн регистрацию</button>
      </form>
    </div>
  `;

  main.innerHTML = formHTML;

  // Привязать обработчик событий для кнопки "finalSubmit"
  document.querySelector("#registrationForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Предотвратить стандартное поведение отправки формы
    sendEmail(subservice.name, subservice.registration.formFields);    
  });
}

// Обновленная функция sendEmail для обработки неинтерактивных элементов
function sendEmail(subserviceName, formFields) {
  console.log("Form Fields Data:", formFields); // Log formFields for debugging
  let message = ""; // Инициализировать пустую строку сообщения
  let missingField = false; // Флаг для отслеживания отсутствующих полей

  // Собрать данные из всех полей ввода в форме
  formFields.forEach((field, index) => {
    // Пропустить неинтерактивные элементы (h3, h4 и т.д.)
    if (field.elementType !== "input") {
      return; // Переход к следующему элементу
    }

    const userInputElement = document.querySelector(`#input-${index}`);

    // Проверить, существует ли элемент ввода
    if (userInputElement) {
      const userInput = userInputElement.value;
      message += `${field.label}: ${userInput}\n`; // Сформировать строку сообщения
    } else {
      console.error(`Input element with ID #input-${index} not found. Expected label: ${field.label}`);
      missingField = true; // Установить флаг, если элемент ввода отсутствует
    }
  });

  // Если отсутствует какое-либо поле, уведомить пользователя и прекратить выполнение функции
  if (missingField) {
    alert("Одно или несколько полей отсутствуют или неправильно отображены. Пожалуйста, попробуйте снова.");
    return;
  }

  // Проверить, есть ли содержимое в сообщении
  if (message.trim() === "") {
    alert("Форма неполная. Пожалуйста, заполните все обязательные поля.");
    return;
  }

  // Log the message to ensure it is constructed correctly
  console.log("Message to be sent:", message);

  // Отправить электронное письмо с использованием EmailJS
  emailjs.send("service_mqrn02q", "template_ho8b34i", {
    message: message, // Передать все сообщение
    to_name: subserviceName // Настроить это, если у вас больше переменных шаблона
  })
  .then((response) => {
    alert("Регистрация успешно завершена");
    console.log("Email sent:", response.status, response.text);
  })
  .catch((error) => {
    console.error("Системная ошибка, извините за неудобства", error);
    alert("Не удалось отправить регистрацию. Пожалуйста, попробуйте позже.");
  });
}

// Обработчики событий для навигации в меню
const contactNav = document.querySelector("#contactNav");
contactNav.addEventListener("click", () => {
    updateURL("section=contact");
    showContactInfo();
});

// Сброс к основным услугам при нажатии на "Услуги"
const servicesNav = document.querySelector("#servicesNav");
servicesNav.addEventListener("click", () => {
    updateURL(""); // Очищает URL по умолчанию
    renderMainServices();
});

// Функция для отображения контактной информации
function showContactInfo() {
    const main = document.querySelector("main");
    main.innerHTML = `
        <div id="contact">
            <div id="textContactDiv">
                <h2>Свяжитесь с нами в рабочие часы</h2>
                <i class="fa fa-phone" aria-hidden="true"><span>+995-551-178-118</span></i>
                <i class="fa fa-envelope" aria-hidden="true"><span>mziaanaarsenashvili@gmail.com</span></i>
                <i class="fa fa-location-arrow" aria-hidden="true"><span>Важа Пшавела N90 (между станциями метро Важа Пшавела и Университет. Рядом с рестораном "Шуа-Калаки")</span></i> 
            </div>
            <a href='https://www.google.com/maps/place/...'><img id="contactImage" src="../../images/contact_screen.png"" alt="location"></a>
        </div>`;
}

////////////// Импортированный поисковый бар
import * as searchBarModule from '../../jsFiles/searchBar.js';
searchBarModule.setupSearchBarListener(searchBar, servicesData, renderMainServices, renderSubservices, renderDescription);
