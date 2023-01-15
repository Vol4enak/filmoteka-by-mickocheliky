import {refs} from './constants/refs';

export default function loader() {
  refs.loader.classList.toggle('backdrop__is-hidden');
}
