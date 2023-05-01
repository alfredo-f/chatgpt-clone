import { atom } from 'recoil';

const submission = atom({
  key: 'submission',
  default: null
});

const isSubmitting = atom({
  key: 'isSubmitting',
  default: false
});

export default {
  submission,
  isSubmitting
};
