

const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

    // убирает перезагрузку старницы при отправке формы
    event.preventDefault(); 
    

    // Если в форме есть незаполненные поля, выводи alert с предупреждением о
    // том, что все поля должны быть заполнены.

    if (event.currentTarget.elements.email.value == ''
        || event.currentTarget.elements.password.value == '') {
        alert('Все поля должны быть заполнены');
    } else {
                //собираем данные формы в объект
        const formEl = event.currentTarget.elements;
        
        const email = formEl.email.value;
        const password = formEl.password.value;

        const formData = {
            email,
            password,
        };


        // Выведи обьект с введенными данными в консоль и очисти значения полей формы 
        // методом reset.

        console.log(formData);
        event.target.reset(); 

    }
};
    




