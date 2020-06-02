leapYear = (x) => {
  if (x % 4 === 0 && (x % 100 !== 0 || x % 400 === 0)) {
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
};

leapYear(1997);
