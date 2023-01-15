
import { dynRefs } from '../../constants/dynamicRefs';
import { refs } from '../../constants/refs';


export function showAuthorisedFields() {
  refs.autorizationChecked.style.display = 'block';
  const { loggedIn, notLoggedIn, userEmail } = dynRefs();
  if (notLoggedIn) {
    notLoggedIn.style.display = 'none';
    loggedIn.style.display = 'block';

    userEmail.innerHTML = auth.currentUser.email;
  }
}

export function showUnauthorisedFields() {
  refs.autorizationChecked.style.display = 'none';
  const { loggedIn, notLoggedIn, userEmail } = dynRefs();
  if (notLoggedIn) {
    notLoggedIn.style.display = 'block';
    loggedIn.style.display = 'none';
    userEmail.innerHTML = '';
  }
}

const modal = refs.dataBackdrop;

refs.authBtn.addEventListener('click', e => {
  e.preventDefault();
  document.body.classList.add('show-modal-card');
  const html = modalAuthTpl({ closeSvg: closeSvg });
  modal.innerHTML = html;

  const {
    switchSignUpBtn,
    switchSignInBtn,
    authContainer,
    btnLogOut,
    formLogIn,
    formSignUp,
    closeModalBtnEl,
  } = dynRefs();

  if (auth.currentUser) {
    // from /api/firebase/api
    showAuthorisedFields();
  } else {
    showUnauthorisedFields();
  }

  document.body.style.overflow = 'hidden';
  const backdropEl = refs.dataBackdrop;
  if (closeModalBtnEl) {
    closeModalBtnEl.addEventListener('click', onCloseModalAuth);
  }
  backdropEl.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPressExitAuth);

  switchSignUpBtn.addEventListener('click', () => {
    authContainer.classList.add('right-panel-active');
  });

  switchSignInBtn.addEventListener('click', () => {
    authContainer.classList.remove('right-panel-active');
  });

  formSignUp.addEventListener('submit', async e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    singUp(email.value, password.value);
  });

  formLogIn.addEventListener('submit', async e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    singIn(email.value, password.value);
  });

  btnLogOut.addEventListener('click', () => {
    logOut();
  });
});

function onCloseModalAuth() {
  const { closeModalBtnEl, backdropEl } = dynRefs();
  // додає в session storege копію localstorege
  document.body.style.overflow = null;
  document.body.classList.remove('show-modal-card');
  window.addEventListener('keydown', onEscKeyPressExitAuth);

  backdropEl.removeEventListener('click', onBackdropClick);
  closeModalBtnEl.removeEventListener('click', onCloseModalAuth);
  window.removeEventListener('keydown', onEscKeyPressExitAuth);
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModalAuth();
  }
}

function onEscKeyPressExitAuth(event) {
  if (event.code === 'Escape') {
    onCloseModalAuth();
  }
}
