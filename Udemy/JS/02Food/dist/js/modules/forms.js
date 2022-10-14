import {closeModal, openModal} from './modal.js';
import {postData} from '../services/services.js';

function forms(formSelector, modalTimerId) {
  
  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: 'img/forms/spinner.svg',
    success: 'Merci! We will call you back soon',
    failure: 'Fuckup Fuckup4'
  };

  forms.forEach(item => {
    bindPostData(item);
  });



  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto; 
      `;
      // form.append(statusMessage);
      form.insertAdjacentElement('afterend', statusMessage);

/*         const request = new XMLHttpRequest();
      request.open('POST', 'server.php'); */
      
/*         request.setRequestHeader('Content-type', 'undefined'); */    
/*         request.setRequestHeader('Content-type', 'application/json'); */
      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // const object = {};

      // formData.forEach(function(value, key) {
      //   object[key] = value;
      // });

      // const json = JSON.stringify(object);

      // request.send(json);
      
      // fetch('server.php', {
      //   method: "POST",
      //   headers: {
      //     'Content-type': 'application/json'
      //   },
      //   body: JSON.stringify(object) /* formData */
      // })

      postData('http://localhost:3000/requests', json/* JSON.stringify(object) */)
      // .then(data => data.text())
      .then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      });

      // request.addEventListener('load', () => {
      //   if (request.status === 200) {
      //     console.log(request.response);
      //     showThanksModal(message.success);
      //     form.reset();
      //     statusMessage.remove();
      //   } else {
      //     showThanksModal(message.failure);
      //   }
      // });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.remove('show');
    prevModalDialog.classList.add('hide');
    openModal('.modal', modalTimerId);

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>×</div>
        <div class="modal__title">${message}</div>
      </div>
    `;
  

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => { 
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal('.modal');
    }, 4000);
  }

/*     fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({name: 'Alex'}),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(json => console.log(json)); */

// fetch('http://localhost:3000/menu')
//   .then(data => data.json())
//   .then(res => console.log(res));

}

export default forms;