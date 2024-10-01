const servicesDataRussian = [
    {
      id: "powerOfAttorney",
      name: "Доверенность",
      subservices: [
        {
          id: "declaredPowerOfAttorney",
          name: "Доверенность на оформленный автомобиль или мотоцикл",
          description: `<h2>Доверенность на оформленный автомобиль или мотоцикл</h2>
            <h3>Документы, необходимые для заключения договора:</h3>
            <ol>
                <li>Удостоверение личности, водительское удостоверение или паспорт доверителя (должны быть действительными, и человек на фотографии должен совпадать)</li>
                <li>Технический паспорт автомобиля (должен быть действительным)</li> 
                <li>Присутствие получателя доверенности не требуется</li>  
            </ol>
            <h3>Стоимость договора: 25 лари</h3>`,
          registration: {
            formFields: [
              { elementType: "h4", label: "Кто выдает доверенность? (Доверитель)" },
              { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
              { elementType: "input", label: "Текущий адрес", type: "text", value: "" },
              { elementType: "input", label: "Личный номер или номер паспорта", type: "text", value: "" },
              { elementType: "input", label: "Дата рождения", type: "date", value: "" },
              { elementType: "h4", label: "Кому вы даете доверенность? (Доверенное лицо)" },
              { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
              { elementType: "input", label: "Личный номер или номер паспорта", type: "text", value: "" },
              { elementType: "input", label: "Дата рождения", type: "date", value: "" },
              { elementType: "h4", label: "Информация об автомобиле или мотоцикле" },
              { elementType: "input", label: "Марка", type: "text", value: "" },
              { elementType: "input", label: "Модель", type: "text", value: "" },
              { elementType: "input", label: "Год выпуска", type: "number", value: "" },
              { elementType: "input", label: "Идентификационный номер (VIN код)", type: "text", value: "" },
              { elementType: "input", label: "Номер регистрационного свидетельства (как указано в техпаспорте, например, AM8020140)", type: "text", value: "" },
              { elementType: "input", label: "На какой срок выдается доверенность? (например: на 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" }
            ]
          }
        },
        {
          id: "undeclaredPowerOfAttorney",
          name: "Доверенность на неоформленный автомобиль или мотоцикл",
          description: `<h2>Доверенность на неоформленный автомобиль или мотоцикл</h2>
            <h3>Документы, необходимые для заключения договора:</h3>
            <ol>
                <li>Удостоверение личности, водительское удостоверение или паспорт доверителя (должны быть действительными, и человек на фотографии должен совпадать)</li>
                <li>Договор или другой документ, подтверждающий право собственности на автомобиль</li> 
                <li>Присутствие получателя доверенности не требуется</li>  
            </ol>
            <h3>Стоимость договора: 25 лари</h3>`,
          registration: {
            formFields: [
              { elementType: "h4", label: "Кто выдает доверенность? (Доверитель)" },
              { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
              { elementType: "input", label: "Текущий адрес", type: "text", value: "" },
              { elementType: "input", label: "Личный номер или номер паспорта", type: "text", value: "" },
              { elementType: "input", label: "Дата рождения", type: "date", value: "" },
              { elementType: "h4", label: "Кому вы даете доверенность? (Доверенное лицо)" },
              { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
              { elementType: "input", label: "Личный номер или номер паспорта", type: "text", value: "" },
              { elementType: "input", label: "Дата рождения", type: "date", value: "" },
              { elementType: "h4", label: "Информация об автомобиле или мотоцикле" },
              { elementType: "input", label: "Марка", type: "text", value: "" },
              { elementType: "input", label: "Модель", type: "text", value: "" },
              { elementType: "input", label: "Год выпуска", type: "number", value: "" },
              { elementType: "input", label: "Идентификационный номер (VIN код)", type: "text", value: "" },
              { elementType: "input", label: "На какой срок выдается доверенность? (например: на 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" }
            ]
          }
        }
        // Continue with the rest of the subservices under "powerOfAttorney"
      ]
    },
    {
      id: "onlinePowerOfAttorney",
      name: "Онлайн-доверенность (через Skype, Messenger, WhatsApp и т.д.)",
      subservices: [
        {
          id: "declaredPowerOfElectronicAttorney",
          name: "Онлайн-доверенность на оформленный автомобиль или мотоцикл",
          description: `<h2>Онлайн-доверенность на оформленный автомобиль или мотоцикл</h2>
            <h3>Документы, необходимые для заключения договора:</h3>
            <ol> 
                <li>Удостоверение личности, водительское удостоверение или паспорт доверителя (должны быть действительными, и должны быть при совершении звонка)</li>
                <li>Технический паспорт автомобиля</li> 
                <li>Два свидетеля должны прийти в нотариальную контору, один из которых не должен быть родственником доверителя</li>
                <li>Оба свидетеля должны иметь действительное удостоверение личности</li>                 
                <li>Доверитель должен предоставить имена свидетелей во время звонка, иначе доверенность не может быть оформлена.</li>
            </ol>
            <h3>Стоимость договора: 65 лари</h3>`,
          registration: {
            formFields: [
              { elementType: "h4", label: "Кто выдает доверенность? (Доверитель)" },
              { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
              { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
              { elementType: "input", label: "Личный номер или номер паспорта", type: "text", value: "" },
              { elementType: "input", label: "Дата рождения", type: "date", value: "" },
              { elementType: "h4", label: "Кому вы даете доверенность? (Доверенное лицо)" },
              { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
              { elementType: "input", label: "Личный номер или номер паспорта", type: "text", value: "" },
              { elementType: "input", label: "Дата рождения", type: "date", value: "" },
              { elementType: "h4", label: "Информация о первом свидетеле" },
              { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
              { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
              { elementType: "input", label: "Личный номер или номер паспорта", type: "text", value: "" },
              { elementType: "input", label: "Дата рождения", type: "date", value: "" },
              { elementType: "h4", label: "Информация о втором свидетеле" },
              { elementType: "input", label: "Имя, Фамилия", type: "text", value: "" },
              { elementType: "input", label: "Текущий адрес (если за границей, укажите иностранный адрес)", type: "text", value: "" },
              { elementType: "input", label: "Личный номер или номер паспорта", type: "text", value: "" },
              { elementType: "input", label: "Дата рождения", type: "date", value: "" },
              { elementType: "h4", label: "Информация об автомобиле или мотоцикле" },
              { elementType: "input", label: "Марка", type: "text", value: "" },
              { elementType: "input", label: "Модель", type: "text", value: "" },
              { elementType: "input", label: "Год выпуска", type: "number", value: "" },
              { elementType: "input", label: "Идентификационный номер (VIN код)", type: "text", value: "" },
              { elementType: "input", label: "Номер регистрационного свидетельства (как указано в техпаспорте, например, AM8020140)", type: "text", value: "" },
              { elementType: "input", label: "На какой срок выдается доверенность? (например: на 5 дней/1 месяц/1 год/бессрочно)", type: "text", value: "" }
            ]
          }
        }
        // Continue with the rest of the subservices under "onlinePowerOfAttorney"
      ]
    }
    // Continue translating the rest of the main services in a similar manner
  ];
  
  export default servicesDataRussian;
  