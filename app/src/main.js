const setDate = () => {
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  !seconds ? secondHand.style.transition = 'none' : secondHand.style.transition = 'all .05s';
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  !mins ? minuteHand.style.transition = 'none' : minuteHand.style.transition = 'all .05s';
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  !hours ? hourHand.style.transition = 'none' : hourHand.style.transition = 'all .05s';
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setDate, 1000);