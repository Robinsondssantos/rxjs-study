
// source https://www.youtube.com/watch?v=peAfVe03T1E

const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function getTime() {
  const time = new Date();

  const getHourRotation = (360 / 12) * time.getHours();
  const getMinRotation = (360 / 60) * time.getMinutes();
  const getSecRotation = (360 / 60) * time.getSeconds();

  hour.style.transform = `rotate(${getHourRotation}deg)`;
  min.style.transform = `rotate(${getMinRotation}deg)`;
  sec.style.transform = `rotate(${getSecRotation}deg)`;
}


setInterval(() => {
  getTime();
}, 1000);

getTime();
