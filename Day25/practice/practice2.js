// 실습2. Promise - async/awiat

function call(name) {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      console.log(name);
      res(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      console.log("back");
      res("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      res("callback hell");
    }, 1000);
  });
}

async function exec() {
  let name = await call("보영");
  console.log(name, "반가워");
  let txt = await back();
  console.log(txt, "을 실행했구나");
  let message = await hell();
  console.log("여기는", message);
}

exec();
