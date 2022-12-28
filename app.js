const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const dataToday = document.querySelector(".data");
const dayWeek = document.querySelector(".weekday");

function updateClock() {
  const curretDate = new Date();
  //  calendar day
  dataToday.innerText = curretDate.toLocaleDateString();
  // day week
  const options = { weekday: "long" };
  const weekDay = new Intl.DateTimeFormat("pt-BR", options).format(curretDate);
  dayWeek.innerText = ` -${weekDay}`;

  // analog clock
  const hour = curretDate.getHours();
  const minute = curretDate.getMinutes();
  const second = curretDate.getSeconds();
  const hourDeg = (hour / 12) * 360;
  const minuteDeg = (minute / 60) * 360;
  const secondDeg = (second / 60) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
  setTimeout(updateClock, 1000);
}
updateClock();
