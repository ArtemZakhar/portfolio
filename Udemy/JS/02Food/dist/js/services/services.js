const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: data 
  });

  return await res.json();
};

  /* const div = new MenuCard();
  div.render(); */

  const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };


  
  /* getResource('http://localhost:3000/menu')
    .then(data => createCard(data));
  
  function createCard(data) {
    data.forEach(({img, altimg, title, descr, price}) => {
      const element = document.createElement('div');

      element.classList.add('menu__item');
      element.innerHTML = `
      <img src=${img} alt=${altimg}>
      <h3 class="menu__item-subtitle">${title}"</h3>
      <div class="menu__item-descr">${descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${price}</span> грн/день</div>
      </div>
    `;
    document.querySelector('.menu .container').append(element);
    });
  }
  new MenuCard(
    "img/tabs/vegy.jpg", 
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container'
    ).render();
  
  new MenuCard(
    "img/tabs/elite.jpg", 
    "elite",
    'Меню “Премиум”"',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    14,
    '.menu .container'
    ).render();

  new MenuCard(
    "img/tabs/post.jpg", 
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    21,
    '.menu .container'
    ).render(); */


export {postData};
export {getResource};