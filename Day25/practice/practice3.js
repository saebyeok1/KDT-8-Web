function changeColor(color) {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = color;
      res();
    }, 1000);
  });
}

// promise .then 으로도 짠 코드
async function exec() {
  await changeColor("red");
  await changeColor("orange");
  await changeColor("yellow");
  await changeColor("green");
}

exec();
