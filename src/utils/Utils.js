function isValidEmail(value) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

function validateEmail(value, setEmailError) {
  if (value == '') {
    setEmailError('');
  } else if (isValidEmail(value)) {
    setEmailError('');
  } else {
    setEmailError('Invalid Email');
  }
}

function validatePhone(value, setPhoneError) {
  if (value.length < 10) {
    setPhoneError('Phone number must be 10 digits');
  } else {
    setPhoneError('');
  }
}

const utils = {
  isValidEmail,
  validateEmail,
  validatePhone,
};

export default utils;
