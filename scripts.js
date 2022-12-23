
  let imgArray = ["https://media.discordapp.net/attachments/942450786217119784/1055744058011688990/bg-2.png?width=1730&height=1730", "https://media.discordapp.net/attachments/942450786217119784/1055744108515299378/bg-1.png?width=1730&height=1730", "images/backgrounds/bg-3.png"];
  let index = 0;

  function changeBackground() {
    document.body.style.backgroundImage = "url(" + imgArray[index] + ")";

    index++;

    if (index == imgArray.length) {
      index = 0;
    }
  }

  setInterval(changeBackground, 3000);
