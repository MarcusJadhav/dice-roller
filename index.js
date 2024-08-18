function rollDice() {
  const mainImage = document.getElementById("main-img");
  const titleName = document.getElementById("title");

  const random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  switch (random) {
    case 1:
      mainImage.src = "./images/1.png";
      titleName.style.color = "red";
      break;
    case 2:
      mainImage.src = "./images/2.png";
      titleName.style.color = "tomato";
      break;
    case 3:
      mainImage.src = "./images/3.png";
      titleName.style.color = "green";
      break;
    case 4:
      mainImage.src = "./images/4.png";
      titleName.style.color = "cyan";
      break;
    case 5:
      mainImage.src = "./images/5.png";
      titleName.style.color = "blue";
      break;
    case 6:
      mainImage.src = "./images/6.png";
      titleName.style.color = "chartreuse";
      break;
    default:
      mainImage.src = "./images/dice.png";
  }
}
