// Define the services data as an array of objects with all services and subservices
const servicesData = [
    {
      id: "powerOfAttorney",
      name: "მინდობილობა",
      subservices: [
        {
          id: "declaredPowerOfAttorney",
          name: "განბაჟებული ავტომობილის ან მოტოციკლის მინდობილობა",
          description: `<h2>განბაჟებული ავტომობილის მინდობილობა</h2>
            <h3>ხელშეკრულებისთვის საჭირო დოკუმენტები:</h3>
            <ol>
                <li>მინდობილობის გამცემის პირადობის მოწმობა ან მართვის მოწმობა ან პასპორტი (არ უნდა ქონდეს ვადა გასული, ასევე სურათში გამოსახული პიროვნება უნდა გავდეს)</li>
                <li>ავტომობილის ტექპასპორტი (არ უნდა ქონდეს ვადა გასული)</li> 
                <li>მინდობილობის მიმღები პირის ყოფნა არაა საჭირო</li>  
            </ol>
            <h3>ხელშეკრულების ღირებულება: 25 ლარი</h3>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "ვინ გასცემს მინდობილობას? (მიმნდობი)" },
            { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
            { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი", type: "text", value: "" },
            { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
            { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
            { elementType: "h4", label: "ვის აძლევთ მინდობილობას? (მინდობილი პირი)" },
            { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
            { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
            { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
            { elementType: "h4", label: "ინფორმაცია ავტომობილის ან მოტოციკლის შესახებ" },
            { elementType: "input", label: "მარკა", type: "text", value: "" },
            { elementType: "input", label: "მოდელი", type: "text", value: "" },
            { elementType: "input", label: "გამოშვების წელი", type: "number", value: "" },
            { elementType: "input", label: "საიდენტიფიკაციო ნომერი(ვინ კოდი)", type: "text", value: "" },
            { elementType: "input", label: "რეგისტრაციის მოწმობის ნომერი(წერია ტექპასპორტში მაგალითად(AM8020140)", type: "text", value: "" },
            { elementType: "input", label: "რადენი ხნით გასცემთ მინდობილობას( მაგალითად: 5 დღით/1 თვით/ერთი წლით/უვადოდ", type: "text", value: "" }
          ]
        }
        },
        {
          id: "undeclaredPowerOfAttorney",
          name: "განუბაჟებელი ავტომობილის ან მოტოციკლის მინდობილობა",
          description: `<h2>განუბაჟებელი ავტომობილის მინდობილობა</h2>
            <h3>ხელშეკრულებისთვის საჭირო დოკუმენტები:</h3>
            <ol>
                <li>მინდობილობის გამცემის პირადობის მოწმობა ან მართვის მოწმობა ან პასპორტი (არ უნდა ქონდეს ვადა გასული, ასევე სურათში გამოსახული პიროვნება უნდა გავდეს)</li>
                <li>ხელშეკრულება ან სხვა ტიპის დოკუმენტი, რომელიც ადასტურებს ავტომობილის მფლობელობას</li> 
                <li>მიმღები პირის ყოფნა არაა საჭირო</li>  
            </ol>
            <h3>ხელშეკრულების ღირებულება: 25 ლარი</h3>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "ვინ გასცემს მინდობილობას? (მიმნდობი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ვის აძლევთ მინდობილობას? (მინდობილი პირი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია ავტომობილის ან მოტოციკლის შესახებ" },
                { elementType: "input", label: "მარკა", type: "text", value: "" },
                { elementType: "input", label: "მოდელი", type: "text", value: "" },
                { elementType: "input", label: "გამოშვების წელი", type: "number", value: "" },
                { elementType: "input", label: "საიდენტიფიკაციო ნომერი(ვინ კოდი)", type: "text", value: "" },
                { elementType: "input", label: "რადენი ხნით გასცემთ მინდობილობას( მაგალითად: 5 დღით/1 თვით/ერთი წლით/უვადოდ", type: "text", value: "" }
              ]
            }
        },
        {
          id: "realEstatePowerOfAttorney",
          name: "უძრავი ქონების მინდობილობა",
          description: `<h2>უძრავი ქონების მინდობილობა</h2>
            <h3>ხელშეკრულებისთვის საჭირო დოკუმენტები:</h3>
            <ol>
                <li>მინდობილობის გამცემის პირადობის მოწმობა ან მართვის მოწმობა ან პასპორტი</li>
                <li>უძრავი ქონების საკადასტრო კოდი, სადაც მინდობილობის გამცემი მითითებულია მესაკუთრედ</li> 
                <li>მიმღები პირის ყოფნა არაა საჭირო</li>  
            </ol>
            <h3>ხელშეკრულების ღირებულება: 25 ლარი</h3>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "ვინ გასცემს მინდობილობას? (მიმნდობი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ვის აძლევთ მინდობილობას? (მინდობილი პირი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია უძრავი ქონების შესახებ" },
                { elementType: "input", label: "მისამართი", type: "text", value: "" },
                { elementType: "input", label: "ფართის ზომა", type: "number", value: "" },
                { elementType: "input", label: "საკადასტრო კოდი", type: "text", value: "" },
                { elementType: "input", label: "რადენი ხნით გასცემთ მინდობილობას( მაგალითად: 5 დღით/1 თვით/ერთი წლით/უვადოდ", type: "text", value: "" }
              ]
            }
        },
        {
          id: "lawyerPowerOfAttorney",
          name: "მინდობილობა ადვოკატს",
          description: `<h2>მინდობილობა ადვოკატს</h2>
            <h3>ხელშეკრულებისთვის საჭირო დოკუმენტები:</h3>
            <ol>
                <li>მინდობილობის გამცემის პირადობის მოწმობა ან მართვის მოწმობა ან პასპორტი</li>
                <li>მინდობილობის გამცემმა უნდა იცოდეს ადვოკატის მონაცემები: პირადი ნომერი, სახელი, გვარი</li> 
                <li>ადვოკატის ყოფნა არაა საჭირო</li>  
            </ol>
            <h3>ხელშეკრულების ღირებულება: 25 ლარი</h3>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "ვინ გასცემს მინდობილობას? (მიმნდობი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ვის აძლევთ მინდობილობას? (ადვოკატის მონაცემები)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "input", label: "რადენი ხნით გასცემთ მინდობილობას( მაგალითად: 5 დღით/1 თვით/ერთი წლით/უვადოდ", type: "text", value: "" }
              ]
            }
        },
      ]
    },
    {
      id: "onlinePowerOfAttorney",
      name: "ელ-მინდობილობა (მინდობილობა ონლაინ სკაიპით, მესენჯერით, ვოთსაპით და ა.შ)",
      subservices: [
        {
          id: "declaredPowerOfElectronicAttorney",
          name: "ონლაინ განბაჟებული ავტომობილის ან მოტოციკლის მინდობილობა",
          description: `<h2>ონლაინ განბაჟებული ავტომობილის მინდობილობა</h2>
            <h3>ხელშეკრულებისთვის საჭირო დოკუმენტები:</h3>
            <ol> 
                <li>მინდობილობის გამცემის პირადობის მოწმობა ან მართვის მოწმობა ან პასპორტი უნდა გააჩნდეს თან როდესაც განახორციელებს ზარს (არ უნდა ქონდეს ვადა გასული)</li>
                <li>ავტომობილის ტექპასპორტი</li> 
                <li>ორი მოწმე უნდა მოვიდეს სანოტარი ბიუროში, რომლებიც გარგად იცნობენ მინდობილობის გამცემს და ამ ორი მოწმიდან ერთი არ უნდა იყოს მინდობილობის გამცემის ნათესავი</li>
                <li>ორივე მოწმეს თან უნდა გააჩნდეს მოქმედი პირადობის მოწმობა</li>                 
                <li>ონლაინ მინდობილობის ჩაწერისას მინდობილობის უნდა შეძლოს მოწმეების სახელით და გვარით სახელით და გვარებით.წინააღმდეგ შემთხვევაში აკრზძალულია მინდობილობის გაკეთება</li>
            </ol>
            <h3>ხელშეკრულების ღირებულება: 65 ლარი</h3>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "ვინ გასცემს მინდობილობას? (მიმნდობი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ვის აძლევს მინდობილობას? (მინდობილი პირი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია პირველი მოწმის შესახებ"},
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია მეორე მოწმის შესახებ"},
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია ავტომობილის ან მოტოციკლის შესახებ" },
                { elementType: "input", label: "მარკა", type: "text", value: "" },
                { elementType: "input", label: "მოდელი", type: "text", value: "" },
                { elementType: "input", label: "გამოშვების წელი", type: "number", value: "" },
                { elementType: "input", label: "საიდენტიფიკაციო ნომერი(ვინ კოდი)", type: "text", value: "" },
                { elementType: "input", label: "რეგისტრაციის მოწმობის ნომერი(წერია ტექპასპორტში მაგალითად(AM8020140)", type: "text", value: "" },
                { elementType: "input", label: "რადენი ხნით გასცემთ მინდობილობას( მაგალითად: 5 დღით/1 თვით/ერთი წლით/უვადოდ", type: "text", value: "" }
              ]
            }
        },
        {
          id: "undeclaredPowerOfElectronicAttorney",
          name: "ონლაინ განუბაჟებელი ავტომობილის ან მოტოციკლის მინდობილობა",
          description: `<h2>ონლაინ განუბაჟებელი ავტომობილის ან მოტოციკლის მინდობილობა</h2>
            <h3>ხელშეკრულებისთვის საჭირო დოკუმენტები:</h3>
            <ol> 
                <li>მინდობილობის გამცემის პირადობის მოწმობა ან მართვის მოწმობა ან პასპორტი</li>
                <li>ხელშეკრულება ან სხვა ტიპის დოკუმენტი</li> 
                <li>მინიმუმ ორი მოწმე უნდა მოვიდეს სანოტარი ბიუროში</li>  
            </ol>
            <h3>ხელშეკრულების ღირებულება: 65 ლარი</h3>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "ვინ გასცემს მინდობილობას? (მიმნდობი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ვის აძლევს მინდობილობას? (მინდობილი პირი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია პირველი მოწმის შესახებ"},
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია მეორე მოწმის შესახებ"},
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია ავტომობილის ან მოტოციკლის შესახებ" },
                { elementType: "input", label: "მარკა", type: "text", value: "" },
                { elementType: "input", label: "მოდელი", type: "text", value: "" },
                { elementType: "input", label: "გამოშვების წელი", type: "number", value: "" },
                { elementType: "input", label: "საიდენტიფიკაციო ნომერი(ვინ კოდი)", type: "text", value: "" },
                { elementType: "input", label: "რადენი ხნით გასცემთ მინდობილობას( მაგალითად: 5 დღით/1 თვით/ერთი წლით/უვადოდ", type: "text", value: "" }
              ]
            }
        },
        {
          id: "realEstatePowerOfElectronicAttorney",
          name: "ონლაინ უძრავი ქონების მინდობილობა",
          description: `<h2>ონლაინ უძრავი ქონების მინდობილობა</h2>
            <h3>ხელშეკრულებისთვის საჭირო დოკუმენტები:</h3>
            <ol> 
                <li>მინდობილობის გამცემის პირადობის მოწმობა ან მართვის მოწმობა ან პასპორტი</li>
                <li>უძრავი ქონების საკადასტრო კოდი</li> 
                <li>მინიმუმ ორი მოწმე უნდა მოვიდეს სანოტარი ბიუროში</li>  
            </ol>
            <h3>ხელშეკრულების ღირებულება: 65 ლარი</h3>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "ვინ გასცემს მინდობილობას? (მიმნდობი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ვის აძლევს მინდობილობას? (მინდობილი პირი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია პირველი მოწმის შესახებ"},
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია მეორე მოწმის შესახებ"},
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია უძრავი ქონების შესახებ" },
                { elementType: "input", label: "მისამართი", type: "text", value: "" },
                { elementType: "input", label: "ფართის ზომა", type: "number", value: "" },
                { elementType: "input", label: "საკადასტრო კოდი", type: "text", value: "" },
                { elementType: "input", label: "რადენი ხნით გასცემთ მინდობილობას( მაგალითად: 5 დღით/1 თვით/ერთი წლით/უვადოდ", type: "text", value: "" }
              ]
            }
        },
        {
          id: "lawyerPowerOfElectronicAttorney",
          name: "ონლაინ მინდობილობა ადვოკატს",
          description: `<h2>ონლაინ მინდობილობა ადვოკატს</h2>
            <h3>ხელშეკრულებისთვის საჭირო დოკუმენტები:</h3>
            <ol> 
                <li>მინდობილობის გამცემის პირადობის მოწმობა ან მართვის მოწმობა ან პასპორტი</li>
                <li>ადვოკატის მონაცემები: პირადი ნომერი, სახელი, გვარი</li> 
                <li>მინიმუმ ორი მოწმე უნდა მოვიდეს სანოტარი ბიუროში</li>  
            </ol>
            <h3>ხელშეკრულების ღირებულება: 65 ლარი</h3>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "ვინ გასცემს მინდობილობას? (მიმნდობი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია პირველი მოწმის შესახებ"},
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია მეორე მოწმის შესახებ"},
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },                
                { elementType: "h4", label: "ვის აძლევთ მინდობილობას? (ადვოკატის მონაცემები)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "input", label: "რადენი ხნით გასცემთ მინდობილობას( მაგალითად: 5 დღით/1 თვით/ერთი წლით/უვადოდ", type: "text", value: "" }
              ]
            }
        },
        {
          id: "bankPowerOfElectronicAttorney",
          name: "ონლაინ მინდობილობა ბანკისთვის",
          description: `<h2>ონლაინ მინდობილობა ბანკისთვის</h2>
            <h3>ხელშეკრულებისთვის საჭირო დოკუმენტები:</h3>
            <ol> 
                <li>მინდობილობის გამცემის პირადობის მოწმობა ან მართვის მოწმობა ან პასპორტი</li>
                <li>ბანკის მონაცემები</li> 
                <li>მინიმუმ ორი მოწმე უნდა მოვიდეს სანოტარი ბიუროში</li>  
            </ol>
            <h3>ხელშეკრულების ღირებულება: 65 ლარი</h3>`,
            registration: {
              formFields: [
                { elementType: "h4", label: "ვინ გასცემს მინდობილობას? (მიმნდობი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ვის აძლევს მინდობილობას? (მინდობილი პირი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია პირველი მოწმის შესახებ"},
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია მეორე მოწმის შესახებ"},
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი(თუ საზღვარგარეთ იმყოფება საზღვარგარეთ მისამართი)", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" }, 
                { elementType: "input", label: "რადენი ხნით გასცემთ მინდობილობას( მაგალითად: 5 დღით/1 თვით/ერთი წლით/უვადოდ", type: "text", value: "" }
              ]
            }
        }
      ]
    },
    {
      id: "rent",
      name: "ქირავნობა",
      subservices: [
        {
          id: "houseRent",
          name: "უძრავი ქონების ქირავნობა",
          description: `<h2>უძრავი ქონების ქირავნობა</h2>
            <h3>ხელშეკრულებისთვის საჭირო დოკუმენტები:</h3>
            <ol> 
                <li>გამქირავებელი და დამქირავებელი უნდა გამოცხადდნენ თავიანთი მოქმედი პირადობით ან პასპორტით</li>
                <li>გამქირავებელმა უნდა იცოდეს უძრავი ქონების საკადასტრო კოდი და ქონება უნდა აღირიცხებოდეს გამქირავებლის სახელზე</li>
            </ol>
            <h3>ფასი: დამოკიდებულია კონკრეტულ ხელშეკრულებაზე, უძრავი ქონების საშუალო ფასი 150 ლარი</h3>
            <h3>თარჯიმნის ჩართულობის შემთხვევაში, საშუალოდ დამატებით 120 ლარი</h3>`,
          registration: {
              formFields: [
                { elementType: "h4", label: "ვინ აქირავებს ქონებას(გამქირავებელი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ვინ ქირაობს ქონებას?(დამქირავებელი)" },
                { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
                { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
                { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
                { elementType: "h4", label: "ინფორმაცია უძრავი ქონების შესახებ" },
                { elementType: "input", label: "მისამართი", type: "text", value: "" },
                { elementType: "input", label: "ფართის ზომა", type: "number", value: "" },
                { elementType: "input", label: "საკადასტრო კოდი", type: "text", value: "" },
                { elementType: "input", label: "რადენი ხნით ქირავდება უძრავი ქონება( მაგალითად: 5 დღით/1 თვით/ერთი წლით/უვადოდ", type: "text", value: "" },
                { elementType: "input", label: "თვის რომელ რიცხვში უნდა მოხდეს თანხის გადახდა", type: "text", value: "" },
                { elementType: "input", label: "აქვს თუ არა დამქირავებელს უფლება თავად კვლავ  გააქირავოს უძრავი ქონება(ქვექირავნობის უფლება)", type: "checkbox", value: "" }
              ]
          }
        },
        {
          id: "carRent",
          name: "მანქანის ქირავნობა",
          description: `<h2>მანქანის ქირავნობა</h2>
            <h3>ხელშეკრულებისთვის საჭირო დოკუმენტები:</h3>
            <ol> 
                <li>გამქირავებელი და დამქირავებელი უნდა გამოცხადდნენ თავიანთი მოქმედი პირადობით ან პასპორტით</li>
                <li>გამქირავებელს ასევე უნდა გააჩნდეს ავტომობილის ვალიდური ტექპასპორტი</li>
            </ol>
            <h3>ფასი: დამოკიდებულია კონკრეტულ ხელშეკრულებაზე, უძრავი ქონების საშუალო ფასი 150 ლარი</h3>
            <h3>თარჯიმნის ჩართულობის შემთხვევაში, საშუალოდ დამატებით 120 ლარი</h3>`,
          registration: {
            formFields: [
              { elementType: "h4", label: "ვინ აქირავებს ქონებას(გამქირავებელი)" },
              { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
              { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი", type: "text", value: "" },
              { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
              { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
              { elementType: "h4", label: "ვინ ქირაობს ქონებას?(დამქირავებელი)" },
              { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
              { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
              { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
              { elementType: "h4", label: "ინფორმაცია ავტომობილის ან მოტოციკლის შესახებ" },
              { elementType: "input", label: "მარკა", type: "text", value: "" },
              { elementType: "input", label: "მოდელი", type: "text", value: "" },
              { elementType: "input", label: "გამოშვების წელი", type: "number", value: "" },
              { elementType: "input", label: "საიდენტიფიკაციო ნომერი(ვინ კოდი)", type: "text", value: "" },
              { elementType: "input", label: "რეგისტრაციის მოწმობის ნომერი(წერია ტექპასპორტში მაგალითად(AM8020140)", type: "text", value: "" },
              { elementType: "h4", label: "ხელშეკრულების დამატებითი პირობები" },
              { elementType: "input", label: "რადენი ხნით ქირავდება ავტომობილი( მაგალითად: 5 დღით/1 თვით/ერთი წლით/უვადოდ", type: "text", value: "" },
              { elementType: "input", label: "თვის რომელ რიცხვში უნდა მოხდეს თანხის გადახდა", type: "text", value: "" },
              { elementType: "input", label: "აქვს თუ არა დამქირავებელს უფლება თავად კვლავ  გააქირავოს ავტომობილი(ქვექირავნობის უფლება)", type: "checkbox", value: "" }

            ]
          }
        }

      ]
    },
    {
      id: "translation",
      name: "თარგმნა",
      subservices: [
        {
          id: "passportTranslation",
          name: "პასპორტის თარგმნა",
          description: `<h2>პასპორტის თარგმნა</h2>
            <h3>საჭირო ინფორმაცია:</h3>
            <p>ღირებულება დამოკიდებულია თარჯიმნის საფასურზე და დაახლოებით შეადგენს 25 ლარს.</p>`,
          registration: {
            formFields: [
              { elementType: "input", label: "ატვირთეთ დოკუმენტი", type: "file", value: "" },
              { elementType: "h4", label: "შენიშვნა: გატანისას უნდა წარმოადგინოთ ნამდვილი პასპორტი, რათა მოხდეს მისი ვალიდურობის გადამოწმება" }
            ]
          }
        },
        {
          id: "birthCertificateTranslation",
          name: "დაბადების მოწმობის თარგმნა",
          description: `<h2>დაბადების მოწმობის თარგმნა</h2>
            <h3>საჭირო ინფორმაცია:</h3>
            <p>ღირებულება დამოკიდებულია თარჯიმნის საფასურზე და დაახლოებით შეადგენს 25 ლარს.</p>`,
          registration: {
            formFields: [
              { elementType: "input", label: "ატვირთეთ დოკუმენტი", type: "file", value: "" },
              { elementType: "h4", label: "შენიშვნა: გატანისას უნდა წარმოადგინოთ დოკუმენტის დედანი, რათა მოხდეს მისი ვალიდურობის გადამოწმება" }
            ]
          }
        },
        {
          id: "rentTranslation",
          name: "ქირავნობის თარგმნა",
          description: `<h2>დაბადების მოწმობის თარგმნა</h2>
            <h3>საჭირო ინფორმაცია:</h3>
            <p>ღირებულება დამოკიდებულია თარჯიმნის საფასურზე.</p>`,
          registration: {
            formFields: [
              { elementType: "input", label: "ატვირთეთ დოკუმენტი", type: "file", value: "" },             
              { elementType: "h4", label: "ღირებულება დამოკიდებულია თარჯიმნის საფასურზე, ღირებულებას შეიტყობთ მას შემდეგ რაც დოკუმენტი თარჯიმანს გადაეგზავნება და ის შეაფასებს" }
            ]
          }
        },
        {
          id: "attorneyTranslation",
          name: "მინდობილობა თარჯიმნის მონაწილეობით",
          description: `<h2>მინდობილობა თარჯიმნის მონაწილეობით</h2>
               <h3>საჭირო ინფორმაცია:</h3>
            <p>ღირებულება დამოკიდებულია თარჯიმნის საფასურზე.</p>`,
          registration: {
            formFields: [
              { elementType: "h4", label: "ვინ გასცემს მინდობილობას? (მიმნდობი)" },
              { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
              { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი", type: "text", value: "" },
              { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
              { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
              { elementType: "h4", label: "ვის აძლევთ მინდობილობას? (მინდობილი პირი)" },
              { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
              { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
              { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },
              { elementType: "h4", label: "ინოფრმაცია იმასთან დაკავშირებით თუ რაზე აძლევთ მინდობილობას" },              
              { elementType: "input", label: "რადენი ხნით გასცემთ მინდობილობას( მაგალითად: 5 დღით/1 თვით/ერთი წლით/უვადოდ", type: "text", value: "" },
              { elementType: "textarea", label: "რასთან დაკავშირებით მზადდება მინდობილობა?", type: "text", value: "" }
            ]
          }
        }
      ]
    },
    {
      id: "signatureAuthentication",
      name: "ხელმოწერის ნამდვილობა",
      subservices: [
        {
          id: "documentAuthentication",
          name: "ხელმოწერის ნამდვილობა",
          description: `<h2> ხელმოწერის ნამდვილობა</h2>
           <h3>საჭირო ინფორმაცია:</h3>
            <p>ხელმოწმერი პირი უნდა გამოცხადდეს მოქმედი პირადობით, რომელიც არაა ვადაგასული ან შეჩერებული.</p>  
             <p>ფასი: დოკუმენტის თითოეულ გვერდზე თითო ხელმოწერის საფასურია:              
             <ol>
              <li>1 გვერდზე დამოწმებისას: 6 ლარი</li>
              <li>2-10 გვერდზე დამოწმებისას: 4 ლარი</li>
              <li>10-30 გვერდზე დამოწმებისას: 3 ლარი</li>
            </ol> 
            </p>`,
          registration: {
            formFields: [
              { elementType: "h4", label: "ხელმომწერი პირის მონაცემები" },
              { elementType: "input", label: "სახელი, გვარი", type: "text", value: "" },
              { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი", type: "text", value: "" },
              { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text", value: "" },
              { elementType: "input", label: "დაბადების თარიღი", type: "date", value: "" },           
            ]
          }
        }
      ]
    },
    {
      id: "inheritance",
      name: "მემკვიდრეობა",
      subservices: [
        {
          id: "inheritanceDocuments",
          name: "მემკვიდრეობის გაცემა პირის გარდაცვალებიდან 6 თვის ვადაში",
          description: `<h2>მემკვიდრეობის გაცემა პირის გარდაცვალებიდან 6 თვის ვადაში</h2>
                      <h3>ხელშეკრულებისთვის საჭირო დოკუმენტები:</h3>
            <ol>
                <li>გარდაცვალების მოწმობა - გაიცემა იუსტიციის სახლში</li>
                <li>ნათესაობის დამდგენი დოკუმენტი: ( მაგ, მამკვიდრებლის ქორწინების მოწმობა, დაბადების მოწმობა სადაც მშობლებია მითითებული - გაიცემა იუსტიციის სახლში</li>
                <li>საინფორმაციო ბარათი (რომელიც ადასტურებს მამკვიდრებელის საქართველოში არსებულ ქონებას)  - გაიცემა იუსტიციის სახლში</li>
                <li>ცნობა ანდერძის არსებობის ან არარსებობის შესახებ - გაიცემა იუსტიციის სახლში</li>                
            </ol>
            <h3>პირის გარდაცვალებიდან 6 თვის შემდეგ ნოტარიუსი გასცემს სამკვიდრო მოწმობას, რომლისგამოყენებითაც შესაძლებელია მამკვიდრებლის ქონების გადაფორმება<h3>
            <h3>ხელშეკრულების ღირებულება: დამოკიდებულია ქონების ღირებულებაზე </h3>,  
          <table border="1" cellspacing="0" cellpadding="5">
            <thead>
              <tr>
                <th>№</th>
                <th>როცა გარიგების ღირებულებაა</th>
                <th>საზღაურის ოდენობა ლარებით არის გარიგების ღირებულების</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>500 ლარის ჩათვლით</td><td>3%</td></tr>
              <tr><td>2</td><td>501 ლარიდან 1000 ლარის ჩათვლით</td><td>15 ლარი + 500 ლარის ზევით თანხის 2,5%</td></tr>
              <tr><td>3</td><td>1001 ლარიდან 2000 ლარის ჩათვლით</td><td>27,5 ლარი + 1000 ლარის ზევით თანხის 1,5%</td></tr>
              <tr><td>4</td><td>2001 ლარიდან 3000 ლარის ჩათვლით</td><td>42,5 ლარი + 2000 ლარის ზევით თანხის 1%</td></tr>
              <tr><td>5</td><td>3001 ლარიდან 5000 ლარის ჩათვლით</td><td>52,5 ლარი + 3000 ლარის ზევით თანხის 0,5%</td></tr>
              <tr><td>6</td><td>5001 ლარიდან 20000 ლარის ჩათვლით</td><td>62,5 ლარი + 5000 ლარის ზევით თანხის 0,4%</td></tr>
              <tr><td>7</td><td>20001 ლარიდან 100000 ლარის ჩათვლით</td><td>122,5 ლარი + 20000 ლარის ზევით თანხის 0,3%</td></tr>
              <tr><td>8</td><td>100001 ლარიდან 500000 ლარის ჩათვლით</td><td>362,5 ლარი + 100000 ლარის ზევით თანხის 0,2%</td></tr>
              <tr><td>9</td><td>500001 ლარიდან 1000000 ლარის ჩათვლით</td><td>1162,5 ლარი + 500000 ლარის ზევით თანხის 0,1%</td></tr>
              <tr><td>10</td><td>1000000 ლარის ზევით</td><td>1662,5 ლარი + 1000000 ლარის ზევით თანხის 0,05%</td></tr>
            </tbody>
          </table>`,
          registration: {
            formFields: [
              { elementType: "h4", label: "რეგისტრაცია მემკვიდრეობის შემთხვევაში შესაძლებელი არ არის გთხოვთ პირადად მიბრძანდეთ სანოტარო ბიუროში" },         
            ]            
          }
        },
        {
          id: "inheritanceDocuments",
          name: "მემკვიდრეობის გაცემა პირის გარდაცვალებიდან 6 თვეზე მეტი ვადის გასვლის შემთხვევაში (გადაცილებული ვადა)",
          description: `<h2>მემკვიდრეობის გაცემა პირის გარდაცვალებიდან 6 თვეზე მეტი ვადის გასვლის შემთხვევაში (გადაცილებული ვადა)</h2>
            <p>რადგან გასულია კანონით განსაზღვრული ვადა მემკვიდრეობის მისაღებად 6 თვე. მემკვიდრეობის ნოტარიუსთან მიღებ შესაძლებელია მხოლოდ იმ შემთხვევაში თუ უკვე დაეუფლეთ ქონებას(უკვე სარგებლობთ ცხოვრობთ იმ ბინაში რომელიც მამკვიდრებელის სახელზეა ან ხართ ქონების თანამესაკუთრე ან  გაგაჩნიათ ტექპასპორტი იმ ავტომობილის რომელიც მამკვიდრებელს ეკუთნოდა.
            ზემოაღნიშნული გარემოებების არარსებობის შემთხვევაში, ნოტარიუსი იძლევა სამკვიდროს გაცემის შესახებ უარის ცნობას, რომლითაც უნდა მიმართოთ სასამართლოს და აღიდგინოთ მემკვიდრეობის მიღების ვადა.<p> 
            <h3>ვადის განახლების შემდეგ საჭიროა შემდეგი დოკუმენტების წარმოდგენა:</h3>          
            <ol>
                <li>გარდაცვალების მოწმობა - გაიცემა იუსტიციის სახლში</li>
                <li>ნათესაობის დამდგენი დოკუმენტი: ( მაგ, მამკვიდრებლის ქორწინების მოწმობა, დაბადების მოწმობა სადაც მშობლებია მითითებული - გაიცემა იუსტიციის სახლში</li>
                <li>საინფორმაციო ბარათი (რომელიც ადასტურებს მამკვიდრებელის საქართველოში არსებულ ქონებას)  - გაიცემა იუსტიციის სახლში</li>
                <li>ცნობა ანდერძის არსებობის ან არარსებობის შესახებ - გაიცემა იუსტიციის სახლში</li>
            </ol>
            <h3>პირის გარდაცვალებიდან 6 თვის შემდეგ ნოტარიუსი გასცემს სამკვიდრო მოწმობას, რომლისგამოყენებითაც შესაძლებელია მამკვიდრებლის ქონების გადაფორმება<h3>
            <h3>ხელშეკრულების ღირებულება: დამოკიდებულია ქონების ღირებულებაზე </h3>,  
           <table border="1" cellspacing="0" cellpadding="5">
            <thead>
              <tr>
                <th>№</th>
                <th>როცა გარიგების ღირებულებაა</th>
                <th>საზღაურის ოდენობა ლარებით არის გარიგების ღირებულების</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>500 ლარის ჩათვლით</td><td>3%</td></tr>
              <tr><td>2</td><td>501 ლარიდან 1000 ლარის ჩათვლით</td><td>15 ლარი + 500 ლარის ზევით თანხის 2,5%</td></tr>
              <tr><td>3</td><td>1001 ლარიდან 2000 ლარის ჩათვლით</td><td>27,5 ლარი + 1000 ლარის ზევით თანხის 1,5%</td></tr>
              <tr><td>4</td><td>2001 ლარიდან 3000 ლარის ჩათვლით</td><td>42,5 ლარი + 2000 ლარის ზევით თანხის 1%</td></tr>
              <tr><td>5</td><td>3001 ლარიდან 5000 ლარის ჩათვლით</td><td>52,5 ლარი + 3000 ლარის ზევით თანხის 0,5%</td></tr>
              <tr><td>6</td><td>5001 ლარიდან 20000 ლარის ჩათვლით</td><td>62,5 ლარი + 5000 ლარის ზევით თანხის 0,4%</td></tr>
              <tr><td>7</td><td>20001 ლარიდან 100000 ლარის ჩათვლით</td><td>122,5 ლარი + 20000 ლარის ზევით თანხის 0,3%</td></tr>
              <tr><td>8</td><td>100001 ლარიდან 500000 ლარის ჩათვლით</td><td>362,5 ლარი + 100000 ლარის ზევით თანხის 0,2%</td></tr>
              <tr><td>9</td><td>500001 ლარიდან 1000000 ლარის ჩათვლით</td><td>1162,5 ლარი + 500000 ლარის ზევით თანხის 0,1%</td></tr>
              <tr><td>10</td><td>1000000 ლარის ზევით</td><td>1662,5 ლარი + 1000000 ლარის ზევით თანხის 0,05%</td></tr>
            </tbody>
          </table>`,
          registration: {
            formFields: [
              { elementType: "h4", label: "რეგისტრაცია მემკვიდრეობის შემთხვევაში შესაძლებელი არ არის გთხოვთ პირადად მიბრძანდეთ სანოტარო ბიუროში" },         
            ]            
          }
        }
      ]
    },
    {
    id: "debtRecognition",
    name: "ვალის აღიარება და/ან სააღსრულებლო ფურცლის აღება",
    subservices: [
      {
        id: "debtAgreement",
        name: "ვალის აღიარების ხელშეკრულება",
        description: `<h2>ვალის აღიარების ხელშეკრულება</h2>
          <p>თუ პირს გააჩნია თქვენს მიმართ ვალი შეგიძლიათ გააფორმოთ ნოტარიუსთან ვალის აღიარების ხელშეკრულება.</p>   
          <p>ვალის აღიარების ხელშეკრულების უპირატესობა:</p>   
          <p>თუ მოვალე თანხას არ გადაიხდის განსაზღვრულ პერიოდში, თქვენ არ გესაჭიროებათ სასამართლოში წასვლა. ნოტარიუსი გასცემს სააღსრულებლო ფურცელს და მის საფუძველზე მოვალის ქონებას ყადაღა დაედება და დაიწყება მისი უძრავ მოძრავი ქონების რეალიზაცია:</p> 
          <h3>საჭირო დოკუმენტები ხელშეკრულების დასადებად:</h3>
          <ol>
            <li>კრედიტორი და მოვალე ორივე ფიზიკურად უნდა გამოცხადნენ ნოტარიუსთან მოქმედი პირადობით</li>
            <li>ფასი განისაზღვრება ვალის ოდენობიდან გამომდინარე კანონით</li>
          </ol>
          <table border="1" cellspacing="0" cellpadding="5">
            <thead>
              <tr>
                <th>№</th>
                <th>როცა გარიგების ღირებულებაა</th>
                <th>საზღაურის ოდენობა ლარებით არის გარიგების ღირებულების</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>500 ლარის ჩათვლით</td><td>3%</td></tr>
              <tr><td>2</td><td>501 ლარიდან 1000 ლარის ჩათვლით</td><td>15 ლარი + 500 ლარის ზევით თანხის 2,5%</td></tr>
              <tr><td>3</td><td>1001 ლარიდან 2000 ლარის ჩათვლით</td><td>27,5 ლარი + 1000 ლარის ზევით თანხის 1,5%</td></tr>
              <tr><td>4</td><td>2001 ლარიდან 3000 ლარის ჩათვლით</td><td>42,5 ლარი + 2000 ლარის ზევით თანხის 1%</td></tr>
              <tr><td>5</td><td>3001 ლარიდან 5000 ლარის ჩათვლით</td><td>52,5 ლარი + 3000 ლარის ზევით თანხის 0,5%</td></tr>
              <tr><td>6</td><td>5001 ლარიდან 20000 ლარის ჩათვლით</td><td>62,5 ლარი + 5000 ლარის ზევით თანხის 0,4%</td></tr>
              <tr><td>7</td><td>20001 ლარიდან 100000 ლარის ჩათვლით</td><td>122,5 ლარი + 20000 ლარის ზევით თანხის 0,3%</td></tr>
              <tr><td>8</td><td>100001 ლარიდან 500000 ლარის ჩათვლით</td><td>362,5 ლარი + 100000 ლარის ზევით თანხის 0,2%</td></tr>
              <tr><td>9</td><td>500001 ლარიდან 1000000 ლარის ჩათვლით</td><td>1162,5 ლარი + 500000 ლარის ზევით თანხის 0,1%</td></tr>
              <tr><td>10</td><td>1000000 ლარის ზევით</td><td>1662,5 ლარი + 1000000 ლარის ზევით თანხის 0,05%</td></tr>
            </tbody>
          </table>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "კრედიტორის მონაცემები" },
            { elementType: "input", label: "სახელი, გვარი", type: "text" },
            { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი", type: "text" },
            { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text" },
            { elementType: "input", label: "დაბადების თარიღი", type: "date" },
            { elementType: "h4", label: "მოვალის მონაცემები" },
            { elementType: "input", label: "სახელი, გვარი", type: "text" },
            { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text" },
            { elementType: "input", label: "დაბადების თარიღი", type: "date" },
            { elementType: "h4", label: "ინოფრმაცია ვალის ოდენობასთან დაკავშირებით?" },
            { elementType: "input", label: "ინფორმაცია ვალის გადახდასთან დაკავშირებით", type: "text" },
          ]
        }
      },
      {
        id: "executoryDocumentIssuance",
        name: "სააღსრულებლო ფურცელის გაცემა",
        description: `<h2>სააღსრულებლო ფურცელის გაცემა</h2>
          <p>თუ უკვე გაქვთ ვალის აღიარების ხელშეკრულება და მოვალემ დაარღვია პირობები, შეგიძლიათ აიღოთ სააღსრულებლო ფურცელი.</p>
          <p>ფასი: სააღსრულებლო ფურცლის გაცემა: 140 ლარი. სააღსრულებლო ფურცლის ცვლილება/გაუქმება/დუბლიკატის გაცემა 50 ლარი.</p>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "კრედიტორის მონაცემები" },
            { elementType: "input", label: "სახელი, გვარი", type: "text" },
            { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი", type: "text" },
            { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text" },
            { elementType: "input", label: "დაბადების თარიღი", type: "date" },
          ]
        }
      }
    ]
  },
  {
    id: "copyCertification",
    name: "ასლის დამოწმება",
    subservices: [
      {
        id: "certifyCopy",
        name: "დოკუმენტის ასლის დამოწმება",
        description: `<h2>დოკუმენტის ასლის დამოწმება</h2>
          <p>ფასი: ნოტარიუსი არ ამოწმებს, და პასუხს არ აგებს დოკუმენტის სისწორესზე ის მხოლოდ ამოწმებს რომ ასლი შეესაბამება წარდგენილ დედანს.</p>
          <p>ფასი: ყოველი გვერდის დამოწმება 4 ლარი</p>`,
        registration: {
          formFields: [
            { elementType: "h4", label: "ასლის დამოწმების მომთხოვნის პირადი მონაცემები" },
            { elementType: "input", label: "სახელი, გვარი", type: "text" },
            { elementType: "input", label: "ამჟამინდელი ფაქტიური მისამართი", type: "text" },
            { elementType: "input", label: "პირადი ნომერი ან პასპორტის ნომერი", type: "text" },
            { elementType: "input", label: "დაბადების თარიღი", type: "date" },
            { elementType: "h4", label: "ინფორმაცია დოკუმენტზე" },
            { elementType: "input", label: "რამდენ ასლად გსურთ დოკუმენტის დამოწმება", type: "text" },
            { elementType: "input", label: "ატვირთეთ დოკუმენტი", type: "file" }
          ]
        }
      }
    ]
  }
];

export default servicesData;