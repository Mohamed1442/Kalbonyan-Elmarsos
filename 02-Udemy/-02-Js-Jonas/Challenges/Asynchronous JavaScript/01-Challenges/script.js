const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=205367412183086218561x109437`
  )
    .then((response) => {
      if (!response.ok) throw new Error(`request error (${response.status})`);

      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);
      getCountry(data.country);
    })
    .catch((e) => console.error(`${e.message} :( `));
};

whereAmI(19.037, 72.873);
