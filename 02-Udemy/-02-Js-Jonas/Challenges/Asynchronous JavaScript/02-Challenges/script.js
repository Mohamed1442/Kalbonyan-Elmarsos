const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement("img");
    currentImg = imgEl;
    imgEl.src = imgPath;
    imgEl.addEventListener("load", function () {
      document.querySelector(".images").append(imgEl);
      resolve(imgEl);
    });
    imgEl.addEventListener("error", reject);
  });
};

createImg("img/img-1.jpg")
  .then(() => wait(2))
  .then(() => {
    currentImg.style.display = "none";
    return createImg("img/img-2.jpg");
  })
  .then((res) => {
    currentImg.style.display = "flex";
    console.log(res);
  })
  .then(() => wait(2))
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));
