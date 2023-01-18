import { toggleThemeBtn, mainEl } from '../refs';
const KEY_STORAGE_THEME = 'Theme';

initialTheme();

toggleThemeBtn.addEventListener('click', toggleTheme);

function toggleTheme(event) {
  if (!localStorage.getItem(KEY_STORAGE_THEME)) {
    event.currentTarget.classList.toggle('sun');
    event.currentTarget.classList.toggle('moon');

    localStorage.setItem(KEY_STORAGE_THEME, 'Dark');

    mainEl.classList.toggle('dark-theme');
  } else {
    event.currentTarget.classList.toggle('sun');
    event.currentTarget.classList.toggle('moon');
    mainEl.classList.toggle('dark-theme');
    localStorage.removeItem(KEY_STORAGE_THEME);
  }
}

function initialTheme() {
  if (localStorage.getItem(KEY_STORAGE_THEME)) {
    toggleThemeBtn.classList.add(`moon`);
    mainEl.classList.toggle('dark-theme');
  } else {
    toggleThemeBtn.classList.add('sun');
    localStorage.removeItem(KEY_STORAGE_THEME);
  }
}
