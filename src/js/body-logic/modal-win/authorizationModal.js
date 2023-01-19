import {
  btnOpenAutorization,
  autorizationForm,
  backdropAutorization,
} from '../../refs';

const KEY_USER = 'user';

btnOpenAutorization.addEventListener('click', openModalAutorization);
autorizationForm.addEventListener('click', onSubmitForm);

function openModalAutorization(e) {
  backdropAutorization.classList.remove('is-hidden');
  document.body.classList.add('open-modal');
  closeModalAutorization();
}

function closeModalAutorization() {
  document.querySelector('body').addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      document.body.classList.remove('open-modal');
      backdropAutorization.classList.add('is-hidden');
    }
  });

  backdropAutorization.addEventListener('click', event => {
    if (
      event.target.classList.contains('modal__close') ||
      event.target.nodeName === 'svg' ||
      event.target.nodeName === 'use' ||
      event.target.classList.contains('backdrop')
    ) {
      document.body.classList.remove('open-modal');
      backdropAutorization.classList.add('is-hidden');
    }
  });
}

function onSubmitForm(event) {
  event.preventDefault();

  const target = event.target.dataset.push;
  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();
  const user = {
    email,
    password,
  };

  if (!event.target.classList.contains('form__btn')) {
    return;
  }

  if (password.length <= 8) {
    Notiflix.Notify.warning('Passwords should be at least 8 characters');
    return event.currentTarget.reset();
  }

  switch (target) {
    case 'Log in': {
      LogIn({
        ...user,
        method: 'Log-in',
      });
      Notiflix.Notify.success('You are logged in');
      break;
    }
    case 'Sign up': {
      SignUp({
        ...user,
        method: 'Sign up',
      });
      Notiflix.Notify.success('You are signed');
      break;
    }
  }

  backdropAutorization.classList.add('is-hidden');
  event.currentTarget.reset();
}
function SignUp(data) {
  console.log(data);
  localStorage.setItem(KEY_USER, JSON.stringify(data));
}

function LogIn(data) {
  console.log(data);
  localStorage.setItem(KEY_USER, JSON.stringify(data));
}
