const loadNPause = async function () {
  let img = await createImg("img/img-1.jpg");
  await wait(2);
  img.style.display = "none";
  img = await createImg("img/img-2.jpg");
  await wait(2);
  img.style.display = "none";
};
loadNPause();

const loadAll = async function (imgArr) {
  const imgs = imgArr.map(async function (imgPath) {
    return await createImg(imgPath);
  });
  console.log(imgs); // arr of promises
  const realImgs = await Promise.all(imgs);
  console.log(realImgs);
  realImgs.forEach((img) => {
    img.classList.add("parallel");
  });
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);

(async function () {
  createImg("img/img-1.jpg");
})();
(async function () {
  createImg("img/img-2.jpg");
})();
