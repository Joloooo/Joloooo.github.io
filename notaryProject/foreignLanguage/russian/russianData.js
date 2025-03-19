const servicesDataRussian = [
  {
    id: "powerOfAttorney",
    name: "Доверенность",
    subservices: [
      {
        id: "declaredPowerOfAttorney",
        name: "Доверенность на задекларированный автомобиль или мотоцикл",
        description: `<h2>Доверенность на задекларированный автомобиль или мотоцикл</h2>
          <h3>Документы, необходимые для оформления:</h3>
          <ol>
              <li>Удостоверение личности, водительское удостоверение или паспорт доверителя (должны быть действительными, и лицо на фото должно соответствовать)</li>
              <li>Технический паспорт транспортного средства (должен быть действительным)</li>
              <li>Присутствие доверенного лица не требуется</li>
          </ol>
          <h3>Стоимость оформления: 25 лари</h3>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Кто выдает доверенность? (Доверитель)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Кому вы выдаете доверенность? (Доверенное лицо)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация об автомобиле или мотоцикле" },
            { elementType: "input", label: "Марка", type: "text", value: "" },
            { elementType: "input", label: "Модель", type: "text", value: "" },
            { elementType: "input", label: "Год выпуска", type: "number", value: "" },
            { elementType: "input", label: "Идентификационный номер (VIN код)", type: "text", value: "" },
            { elementType: "input", label: "Номер свидетельства о регистрации (как указано в техническом паспорте, напр., AM8020140)", type: "text", value: "" },
            { elementType: "input", label: "На какой срок выдается доверенность? (напр., на 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" }
          ]
        }
      },
      {
        id: "undeclaredPowerOfAttorney",
        name: "Доверенность на незадекларированный автомобиль или мотоцикл",
        description: `<h2>Доверенность на незадекларированный автомобиль или мотоцикл</h2>
          <h3>Документы, необходимые для оформления:</h3>
          <ol>
              <li>Удостоверение личности, водительское удостоверение или паспорт доверителя (должны быть действительными, и лицо на фото должно соответствовать)</li>
              <li>Договор или другой документ, подтверждающий право собственности на транспортное средство</li>
              <li>Присутствие доверенного лица не требуется</li>
          </ol>
          <h3>Стоимость оформления: 25 лари</h3>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Кто выдает доверенность? (Доверитель)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Кому вы выдаете доверенность? (Доверенное лицо)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация об автомобиле или мотоцикле" },
            { elementType: "input", label: "Марка", type: "text", value: "" },
            { elementType: "input", label: "Модель", type: "text", value: "" },
            { elementType: "input", label: "Год выпуска", type: "number", value: "" },
            { elementType: "input", label: "Идентификационный номер (VIN код)", type: "text", value: "" },
            { elementType: "input", label: "На какой срок выдается доверенность? (напр., на 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" }
          ]
        }
      },
      {
        id: "realEstatePowerOfAttorney",
        name: "Доверенность на недвижимость",
        description: `<h2>Доверенность на недвижимость</h2>
          <h3>Документы, необходимые для оформления:</h3>
          <ol>
              <li>Удостоверение личности, водительское удостоверение или паспорт доверителя</li>
              <li>Кадастровый код недвижимости, в котором доверитель указан как владелец</li>
              <li>Присутствие доверенного лица не требуется</li>
          </ol>
          <h3>Стоимость оформления: 25 лари</h3>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Кто выдает доверенность? (Доверитель)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Кому вы выдаете доверенность? (Доверенное лицо)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о недвижимости" },
            { elementType: "input", label: "Адрес", type: "text", value: "" },
            { elementType: "input", label: "Площадь (в кв. метрах)", type: "number", value: "" },
            { elementType: "input", label: "Кадастровый код", type: "text", value: "" },
            { elementType: "input", label: "На какой срок выдается доверенность? (напр., на 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" }
          ]
        }
      },
      {
        id: "lawyerPowerOfAttorney",
        name: "Доверенность на адвоката",
        description: `<h2>Доверенность на адвоката</h2>
          <h3>Документы, необходимые для оформления:</h3>
          <ol>
              <li>Удостоверение личности, водительское удостоверение или паспорт доверителя</li>
              <li>Доверитель должен знать личные данные адвоката: номер удостоверения личности, имя, фамилию</li>
              <li>Присутствие адвоката не требуется</li>
          </ol>
          <h3>Стоимость оформления: 25 лари</h3>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Кто выдает доверенность? (Доверитель)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация об адвокате" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "input", label: "На какой срок выдается доверенность? (напр., на 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" }
          ]
        }
      }
    ]
  },
  {
    id: "onlinePowerOfAttorney",
    name: "Онлайн доверенность (через Skype, Messenger, WhatsApp и др.)",
    subservices: [
      {
        id: "declaredPowerOfElectronicAttorney",
        name: "Онлайн доверенность на задекларированный автомобиль или мотоцикл",
        description: `<h2>Онлайн доверенность на задекларированный автомобиль или мотоцикл</h2>
          <h3>Документы, необходимые для оформления:</h3>
          <ol> 
              <li>Доверитель должен иметь при себе удостоверение личности, водительское удостоверение или паспорт во время звонка (должны быть действительными)</li>
              <li>Технический паспорт транспортного средства</li> 
              <li>Два свидетеля должны прийти в нотариальную контору, один из которых не должен быть родственником доверителя</li>
              <li>Оба свидетеля должны предоставить действительное удостоверение личности</li>                 
              <li>Доверитель должен предоставить имена свидетелей во время звонка. В противном случае доверенность не может быть оформлена.</li>
          </ol>
          <h3>Стоимость оформления: 65 лари</h3>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Кто выдает доверенность? (Доверитель)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Кому вы даете доверенность? (Доверенное лицо)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о первом свидетеле" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о втором свидетеле" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация об автомобиле или мотоцикле" },
            { elementType: "input", label: "Марка", type: "text", value: "" },
            { elementType: "input", label: "Модель", type: "text", value: "" },
            { elementType: "input", label: "Год выпуска", type: "number", value: "" },
            { elementType: "input", label: "Идентификационный номер (VIN код)", type: "text", value: "" },
            { elementType: "input", label: "Номер свидетельства о регистрации (как указано в техническом паспорте, напр., AM8020140)", type: "text", value: "" },
            { elementType: "input", label: "На какой срок выдается доверенность? (напр., на 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" }
          ]
        }
      },
      {
        id: "undeclaredPowerOfElectronicAttorney",
        name: "Онлайн доверенность на незадекларированный автомобиль или мотоцикл",
        description: `<h2>Онлайн доверенность на незадекларированный автомобиль или мотоцикл</h2>
            <h3>Документы, необходимые для оформления:</h3>
            <ol> 
                <li>Доверитель должен иметь при себе удостоверение личности, водительское удостоверение или паспорт (должны быть действительными)</li>
                <li>Договор или другой документ, подтверждающий право собственности на транспортное средство</li> 
                <li>Два свидетеля должны прийти в нотариальную контору</li>  
            </ol>
            <h3>Стоимость оформления: 65 лари</h3>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Кто выдает доверенность? (Доверитель)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Кому вы даете доверенность? (Доверенное лицо)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о первом свидетеле" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о втором свидетеле" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация об автомобиле или мотоцикле" },
            { elementType: "input", label: "Марка", type: "text", value: "" },
            { elementType: "input", label: "Модель", type: "text", value: "" },
            { elementType: "input", label: "Год выпуска", type: "number", value: "" },
            { elementType: "input", label: "Идентификационный номер (VIN код)", type: "text", value: "" },
            { elementType: "input", label: "На какой срок выдается доверенность? (напр., на 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" }
          ]
        }
      },
      {
        id: "realEstatePowerOfElectronicAttorney",
        name: "Онлайн доверенность на недвижимость",
        description: `<h2>Онлайн доверенность на недвижимость</h2>
            <h3>Документы, необходимые для оформления:</h3>
            <ol> 
                <li>Удостоверение личности, водительское удостоверение или паспорт доверителя</li>
                <li>Кадастровый код недвижимости</li> 
                <li>Минимум два свидетеля должны прийти в нотариальную контору</li>  
            </ol>
            <h3>Стоимость оформления: 65 лари</h3>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Кто выдает доверенность? (Доверитель)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Кому вы даете доверенность? (Доверенное лицо)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о первом свидетеле" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о втором свидетеле" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о недвижимости" },
            { elementType: "input", label: "Адрес", type: "text", value: "" },
            { elementType: "input", label: "Размер (в кв. метрах)", type: "number", value: "" },
            { elementType: "input", label: "Кадастровый код", type: "text", value: "" },
            { elementType: "input", label: "На какой срок выдается доверенность? (напр., на 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" }
          ]
        }
      },
      {
        id: "lawyerPowerOfElectronicAttorney",
        name: "Онлайн доверенность на адвоката",
        description: `<h2>Онлайн доверенность на адвоката</h2>
            <h3>Документы, необходимые для оформления:</h3>
            <ol> 
                <li>Удостоверение личности, водительское удостоверение или паспорт доверителя</li>
                <li>Личные данные адвоката: номер удостоверения личности, имя, фамилия</li> 
                <li>Минимум два свидетеля должны прийти в нотариальную контору</li>  
            </ol>
            <h3>Стоимость оформления: 65 лари</h3>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Кто выдает доверенность? (Доверитель)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Кому вы даете доверенность? (Информация об адвокате)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о первом свидетеле" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о втором свидетеле" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "input", label: "На какой срок выдается доверенность? (напр., на 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" }
          ]
        }
      },
      {
        id: "bankPowerOfElectronicAttorney",
        name: "Онлайн доверенность на банк",
        description: `<h2>Онлайн доверенность на банк</h2>
            <h3>Документы, необходимые для оформления:</h3>
            <ol> 
                <li>Удостоверение личности, водительское удостоверение или паспорт доверителя</li>
                <li>Детали банка</li> 
                <li>Минимум два свидетеля должны прийти в нотариальную контору</li>  
            </ol>
            <h3>Стоимость оформления: 65 лари</h3>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Кто выдает доверенность? (Доверитель)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о банке" },
            { elementType: "input", label: "Название банка", type: "text", value: "" },
            { elementType: "input", label: "Номер счета", type: "text", value: "" },
            { elementType: "input", label: "SWIFT/BIC код", type: "text", value: "" },
            { elementType: "input", label: "Адрес банка", type: "text", value: "" },
            { elementType: "h4", label: "Информация о первом свидетеле" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о втором свидетеле" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "input", label: "На какой срок выдается доверенность? (напр., на 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" }
          ]
        }
      }
    ]
  },
  {
    id: "rent",
    name: "Аренда",
    subservices: [
      {
        id: "houseRent",
        name: "Аренда недвижимости",
        description: `<h2>Аренда недвижимости</h2>
          <h3>Документы, необходимые для оформления:</h3>
          <ol> 
              <li>Арендодатель и арендатор должны быть лично присутствовать с действующим удостоверением личности или паспортом</li>
              <li>Арендодатель должен знать кадастровый код имущества, и оно должно быть зарегистрировано на имя арендодателя</li>
          </ol>
          <h3>Стоимость: Зависит от конкретного договора, средняя стоимость аренды недвижимости составляет 150 лари</h3>
          <h3>Если привлекается переводчик, взимается дополнительная плата в размере 120 лари</h3>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Кто сдает недвижимость в аренду? (Арендодатель)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Кто арендует недвижимость? (Арендатор)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о недвижимости" },
            { elementType: "input", label: "Адрес", type: "text", value: "" },
            { elementType: "input", label: "Площадь (в кв. метрах)", type: "number", value: "" },
            { elementType: "input", label: "Кадастровый код", type: "text", value: "" },
            { elementType: "input", label: "На какой срок сдается недвижимость? (напр., 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" },
            { elementType: "input", label: "Какого числа каждого месяца должна производиться оплата?", type: "text", value: "" },
            { elementType: "input", label: "Есть ли у арендатора разрешение на субаренду недвижимости?", type: "checkbox", value: "" }
          ]
        }
      },
      {
        id: "carRent",
        name: "Аренда автомобиля",
        description: `<h2>Аренда автомобиля</h2>
          <h3>Документы, необходимые для оформления:</h3>
          <ol> 
              <li>Арендодатель и арендатор должны быть лично присутствовать с действующим удостоверением личности или паспортом</li>
              <li>У арендодателя также должен быть действующий технический паспорт транспортного средства</li>
          </ol>
          <h3>Стоимость: Зависит от конкретного договора, средняя стоимость составляет 150 лари</h3>
          <h3>Если привлекается переводчик, взимается дополнительная плата в размере 120 лари</h3>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Кто сдает автомобиль в аренду? (Арендодатель)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Кто арендует автомобиль? (Арендатор)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о транспортном средстве" },
            { elementType: "input", label: "Марка", type: "text", value: "" },
            { elementType: "input", label: "Модель", type: "text", value: "" },
            { elementType: "input", label: "Год выпуска", type: "number", value: "" },
            { elementType: "input", label: "Идентификационный номер (VIN код)", type: "text", value: "" },
            { elementType: "input", label: "Номер свидетельства о регистрации (как указано в техническом паспорте, напр., AM8020140)", type: "text", value: "" },
            { elementType: "h4", label: "Дополнительные условия договора" },
            { elementType: "input", label: "На какой срок арендуется автомобиль? (напр., 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" },
            { elementType: "input", label: "Какого числа каждого месяца должна производиться оплата?", type: "text", value: "" },
            { elementType: "input", label: "Есть ли у арендатора разрешение на субаренду автомобиля?", type: "checkbox", value: "" }
          ]
        }
      }
    ]
  },
  {
    id: "translation",
    name: "Перевод",
    subservices: [
      {
        id: "passportTranslation",
        name: "Перевод паспорта",
        description: `<h2>Перевод паспорта</h2>
          <h3>Необходимая информация:</h3>
          <p>Стоимость зависит от платы переводчика, приблизительно 25 лари.</p>`,
        registration: {
          formFields: [
            { elementType: "input", label: "Загрузите документ", type: "file", value: "" },
            { elementType: "h4", label: "Примечание: Оригинал паспорта должен быть предъявлен при получении переведенного документа для подтверждения его подлинности." }
          ]
        }
      },
      {
        id: "birthCertificateTranslation",
        name: "Перевод свидетельства о рождении",
        description: `<h2>Перевод свидетельства о рождении</h2>
          <h3>Необходимая информация:</h3>
          <p>Стоимость зависит от платы переводчика, приблизительно 25 лари.</p>`,
        registration: {
          formFields: [
            { elementType: "input", label: "Загрузите документ", type: "file", value: "" },
            { elementType: "h4", label: "Примечание: Оригинал свидетельства о рождении должен быть предъявлен при получении переведенного документа для подтверждения его подлинности." }
          ]
        }
      },
      {
        id: "rentTranslation",
        name: "Перевод договора аренды",
        description: `<h2>Перевод договора аренды</h2>
          <h3>Необходимая информация:</h3>
          <p>Стоимость зависит от платы переводчика.</p>`,
        registration: {
          formFields: [
            { elementType: "input", label: "Загрузите документ", type: "file", value: "" },             
            { elementType: "h4", label: "Стоимость будет определена после оценки документа переводчиком." }
          ]
        }
      },
      {
        id: "attorneyTranslation",
        name: "Доверенность с участием переводчика",
        description: `<h2>Доверенность с участием переводчика</h2>
             <h3>Необходимая информация:</h3>
          <p>Стоимость зависит от платы переводчика.</p>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Кто выдает доверенность? (Доверитель)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Кому вы даете доверенность? (Доверенное лицо)" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" },
            { elementType: "h4", label: "Информация о доверенности" },              
            { elementType: "input", label: "На какой срок выдается доверенность? (напр., на 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" },
            { elementType: "textarea", label: "Подробности относительно цели доверенности", type: "text", value: "" }
          ]
        }
      }
    ]
  },
  {
    id: "signatureAuthentication",
    name: "Удостоверение подписи",
    subservices: [
      {
        id: "documentAuthentication",
        name: "Удостоверение подписи на документе",
        description: `<h2>Удостоверение подписи на документе</h2>
         <h3>Требуемая информация:</h3>
          <p>Лицо, подписывающее документ, должно явиться лично с действительным удостоверением личности, которое не просрочено и не аннулировано.</p>  
           <p>Стоимость: Плата за подпись определяется в зависимости от количества страниц:
           <ol>
            <li>1 страница: 6 лари</li>
            <li>2-10 страниц: 4 лари за страницу</li>
            <li>10-30 страниц: 3 лари за страницу</li>
          </ol> 
          </p>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Информация о лице, подписывающем документ" },
            { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
            { elementType: "input", label: "Текущий адрес", type: "text", value: "" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text", value: "" },
            { elementType: "input", label: "Дата рождения", type: "date", value: "" }
          ]
        }
      }
    ]
  },
  {
    id: "inheritance",
    name: "Наследство",
    subservices: [
      {
        id: "inheritanceDocuments",
        name: "Оформление наследства в течение 6 месяцев после смерти",
        description: `<h2>Оформление наследства в течение 6 месяцев после смерти</h2>
                    <h3>Документы, необходимые для оформления наследства:</h3>
          <ol>
              <li>Свидетельство о смерти - выдано Домом Юстиции</li>
              <li>Документ, подтверждающий родство (например, свидетельство о браке умершего, свидетельство о рождении, указывающее родителей) – выдано Домом Юстиции</li>
              <li>Информационная карточка (подтверждающая имущество умершего в Грузии) - выдана Домом Юстиции</li>
              <li>Справка о наличии или отсутствии завещания - выдана Домом Юстиции</li>
          </ol>
          <h3>Через 6 месяцев после смерти нотариус выдаст свидетельство о праве на наследство, что позволит передать имущество умершего.</h3>
          <h3>Стоимость оформления зависит от стоимости имущества:</h3>
          <table border="1" cellspacing="0" cellpadding="5">
            <thead>
              <tr>
                <th>№</th>
                <th>Стоимость сделки</th>
                <th>Размер комиссии в лари (процент от стоимости сделки)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>До 500 лари</td><td>3%</td></tr>
              <tr><td>2</td><td>501 до 1,000 лари</td><td>15 лари + 2.5% за сумму свыше 500 лари</td></tr>
              <tr><td>3</td><td>1,001 до 2,000 лари</td><td>27.5 лари + 1.5% за сумму свыше 1,000 лари</td></tr>
              <tr><td>4</td><td>2,001 до 3,000 лари</td><td>42.5 лари + 1% за сумму свыше 2,000 лари</td></tr>
              <tr><td>5</td><td>3,001 до 5,000 лари</td><td>52.5 лари + 0.5% за сумму свыше 3,000 лари</td></tr>
              <tr><td>6</td><td>5,001 до 20,000 лари</td><td>62.5 лари + 0.4% за сумму свыше 5,000 лари</td></tr>
              <tr><td>7</td><td>20,001 до 100,000 лари</td><td>122.5 лари + 0.3% за сумму свыше 20,000 лари</td></tr>
              <tr><td>8</td><td>100,001 до 500,000 лари</td><td>362.5 лари + 0.2% за сумму свыше 100,000 лари</td></tr>
              <tr><td>9</td><td>500,001 до 1,000,000 лари</td><td>1,162.5 лари + 0.1% за сумму свыше 500,000 лари</td></tr>
              <tr><td>10</td><td>Свыше 1,000,000 лари</td><td>1,662.5 лари + 0.05% за сумму свыше 1,000,000 лари</td></tr>
            </tbody>
          </table>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Регистрация для оформления наследства невозможна онлайн; посетите нотариальную контору лично." }
          ]
        }
      },
      {
        id: "inheritanceAfter6Months",
        name: "Оформление наследства после 6 месяцев с момента смерти (просроченное наследство)",
        description: `<h2>Оформление наследства после 6 месяцев с момента смерти (просроченное наследство)</h2>
          <p>Поскольку законный срок в 6 месяцев истек, оформление наследства у нотариуса возможно только в случае, если вы уже вступили во владение имуществом (например, вы уже проживаете в зарегистрированной на умершего недвижимости или владеете транспортным средством, зарегистрированным на умершего).</p> 
          <p>При отсутствии этих обстоятельств нотариус выдает свидетельство об отказе в оформлении наследства, которое необходимо предоставить в суд для восстановления срока наследования.</p>
          <h3>После восстановления срока необходимо предоставить следующие документы:</h3>          
          <ol>
              <li>Свидетельство о смерти – выдано Домом Юстиции</li>
              <li>Документ, подтверждающий родство (например, свидетельство о браке умершего, свидетельство о рождении, указывающее родителей) – выдано Домом Юстиции</li>
              <li>Информационная карточка (подтверждающая имущество умершего в Грузии) – выдана Домом Юстиции</li>
              <li>Справка о наличии или отсутствии завещания – выдана Домом Юстиции</li>
          </ol>
          <h3>Через 6 месяцев после смерти нотариус выдаст свидетельство о праве на наследство, что позволит передать имущество умершего.</h3>
          <h3>Стоимость оформления зависит от стоимости имущества:</h3>
          <table border="1" cellspacing="0" cellpadding="5">
            <thead>
              <tr>
                <th>№</th>
                <th>Стоимость сделки</th>
                <th>Размер комиссии в лари (процент от стоимости сделки)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>До 500 лари</td><td>3%</td></tr>
              <tr><td>2</td><td>501 до 1,000 лари</td><td>15 лари + 2.5% за сумму свыше 500 лари</td></tr>
              <tr><td>3</td><td>1,001 до 2,000 лари</td><td>27.5 лари + 1.5% за сумму свыше 1,000 лари</td></tr>
              <tr><td>4</td><td>2,001 до 3,000 лари</td><td>42.5 лари + 1% за сумму свыше 2,000 лари</td></tr>
              <tr><td>5</td><td>3,001 до 5,000 лари</td><td>52.5 лари + 0.5% за сумму свыше 3,000 лари</td></tr>
              <tr><td>6</td><td>5,001 до 20,000 лари</td><td>62.5 лари + 0.4% за сумму свыше 5,000 лари</td></tr>
              <tr><td>7</td><td>20,001 до 100,000 лари</td><td>122.5 лари + 0.3% за сумму свыше 20,000 лари</td></tr>
              <tr><td>8</td><td>100,001 до 500,000 лари</td><td>362.5 лари + 0.2% за сумму свыше 100,000 лари</td></tr>
              <tr><td>9</td><td>500,001 до 1,000,000 лари</td><td>1,162.5 лари + 0.1% за сумму свыше 500,000 лари</td></tr>
              <tr><td>10</td><td>Свыше 1,000,000 лари</td><td>1,662.5 лари + 0.05% за сумму свыше 1,000,000 лари</td></tr>
            </tbody>
          </table>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Регистрация для оформления наследства невозможна онлайн; посетите нотариальную контору лично." }
          ]
        }
      }
    ]
  },
  {
    id: "debtRecognition",
    name: "Признание долга и выдача исполнительного документа",
    subservices: [
      {
        id: "debtAgreement",
        name: "Договор признания долга",
        description: `<h2>Договор признания долга</h2>
          <p>Если кто-то вам должен деньги, вы можете оформить договор признания долга у нотариуса.</p>   
          <p>Преимущества договора признания долга:</p>   
          <p>Если должник не вернет долг в установленный срок, вам не потребуется обращаться в суд. Нотариус может выдать исполнительный документ, позволяющий осуществить взыскание с имущества должника.</p> 
          <h3>Документы, необходимые для заключения договора:</h3>
          <ol>
            <li>Кредитор и должник должны явиться лично с действительным удостоверением личности</li>
            <li>Комиссия определяется в зависимости от суммы долга в соответствии с требованиями законодательства</li>
          </ol>
          <table border="1" cellspacing="0" cellpadding="5">
            <thead>
              <tr>
                <th>№</th>
                <th>Когда сумма сделки</th>
                <th>Сумма комиссии в лари на основе стоимости сделки</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>До 500 лари</td><td>3%</td></tr>
              <tr><td>2</td><td>501 до 1,000 лари</td><td>15 лари + 2.5% за сумму свыше 500 лари</td></tr>
              <tr><td>3</td><td>1,001 до 2,000 лари</td><td>27.5 лари + 1.5% за сумму свыше 1,000 лари</td></tr>
              <tr><td>4</td><td>2,001 до 3,000 лари</td><td>42.5 лари + 1% за сумму свыше 2,000 лари</td></tr>
              <tr><td>5</td><td>3,001 до 5,000 лари</td><td>52.5 лари + 0.5% за сумму свыше 3,000 лари</td></tr>
              <tr><td>6</td><td>5,001 до 20,000 лари</td><td>62.5 лари + 0.4% за сумму свыше 5,000 лари</td></tr>
              <tr><td>7</td><td>20,001 до 100,000 лари</td><td>122.5 лари + 0.3% за сумму свыше 20,000 лари</td></tr>
              <tr><td>8</td><td>100,001 до 500,000 лари</td><td>362.5 лари + 0.2% за сумму свыше 100,000 лари</td></tr>
              <tr><td>9</td><td>500,001 до 1,000,000 лари</td><td>1,162.5 лари + 0.1% за сумму свыше 500,000 лари</td></tr>
              <tr><td>10</td><td>Свыше 1,000,000 лари</td><td>1,662.5 лари + 0.05% за сумму свыше 1,000,000 лари</td></tr>
            </tbody>
          </table>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Информация о кредиторе" },
            { elementType: "input", label: "Имя, Фамилия", type: "text" },
            { elementType: "input", label: "Текущий адрес", type: "text" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text" },
            { elementType: "input", label: "Дата рождения", type: "date" },
            { elementType: "h4", label: "Информация о должнике" },
            { elementType: "input", label: "Имя, Фамилия", type: "text" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text" },
            { elementType: "input", label: "Дата рождения", type: "date" },
            { elementType: "h4", label: "Информация о сумме долга" },
            { elementType: "input", label: "Подробности о сроках погашения долга", type: "text" }
          ]
        }
      },
      {
        id: "executoryDocumentIssuance",
        name: "Выдача исполнительного документа",
        description: `<h2>Выдача исполнительного документа</h2>
          <p>Если у вас уже есть договор признания долга и должник нарушил условия, вы можете получить исполнительный документ.</p>
          <p>Стоимость: выдача исполнительного документа составляет 140 лари. Изменения, отмена или выдача дубликата исполнительного документа стоят 50 лари.</p>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Информация о кредиторе" },
            { elementType: "input", label: "Имя, Фамилия", type: "text" },
            { elementType: "input", label: "Текущий адрес", type: "text" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text" },
            { elementType: "input", label: "Дата рождения", type: "date" }
          ]
        }
      }
    ]
  },
  {
    id: "copyCertification",
    name: "Заверение копий",
    subservices: [
      {
        id: "certifyCopy",
        name: "Заверение копии документа",
        description: `<h2>Заверение копии документа</h2>
          <p>Нотариус не проверяет подлинность документа, а только удостоверяет, что копия соответствует предъявленному оригиналу.</p>
          <p>Стоимость: 4 лари за заверенную страницу</p>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "Информация о лице, запрашивающем заверенную копию" },
            { elementType: "input", label: "Имя, Фамилия", type: "text" },
            { elementType: "input", label: "Текущий адрес", type: "text" },
            { elementType: "input", label: "Номер удостоверения личности или паспорта", type: "text" },
            { elementType: "input", label: "Дата рождения", type: "date" },
            { elementType: "h4", label: "Информация о документе" },
            { elementType: "input", label: "Сколько копий документа вы хотите заверить?", type: "text" },
            { elementType: "input", label: "Загрузите документ", type: "file" }
          ]
        }
      }
    ]
  }
  
];

export default servicesDataRussian;
