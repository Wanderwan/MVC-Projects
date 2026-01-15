const darkColorsArr = ["#2C3E50", "#34495E", "#2C2C2C", "#616A6B", "#4A235A", "#2F4F4F", "#0E4B5A", "#36454F", "#2C3E50", "#800020",];

const getElements = () => {
  const button = document.getElementById('btn');
  const text = document.getElementById('bg-hex-code');
  const body = document.querySelector('body');


  return {
    button,
    text,
    body,
  }
}

function randomBck() {
  const { button, text, body } = getElements();

  const arrLong = darkColorsArr.length - 1;
  const num = Math.floor(Math.random() * arrLong)
  body.style.background = darkColorsArr[num]
}