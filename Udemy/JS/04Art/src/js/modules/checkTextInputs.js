const checTextInputs = (selector) => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key.match(/[^а-яєії 0-9 .,!?-]/ig)) {
        e.preventDefault();
      }
    });
    // вимкнення автозаповнення 
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[a-z]/gim, '');
    });
  });

};

export default checTextInputs;