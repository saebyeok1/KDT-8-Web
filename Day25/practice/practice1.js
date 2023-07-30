// 실습1. Callback -> Promise

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

// call("보영").then(function (result) {
//   console.log(result, "반가워");
// });
// back().then(function (result) {
//   console.log(result, "을 실행했구나");
// });
// hell().then(function (result) {
//   console.log("여기는", result);
// });

call("보영")
  .then(function (result) {
    console.log(result, "반가워");
    return back();
  })
  .then(function (result) {
    console.log(result, "을 실행했구나");
    return hell();
  })
  .then(function (result) {
    console.log("여기는", result);
  });
