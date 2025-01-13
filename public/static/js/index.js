(async () => {

  const isEmpty = (pref) => pref.style.fill === "rgb(4, 4, 4)";
  const map = "/svg?p=40,41";
  const container = document.querySelector(".c-map-container");

  const res = await fetch(map);

  if (res.ok) {
    const svg = await res.text();
    container.innerHTML = svg;
    const prefs = document.querySelectorAll(".geolonia-svg-map .prefecture");

    prefs.forEach((pref) => {
      pref.addEventListener("mouseover", (event) => {
        event.currentTarget.style.stroke = "#ff0000";
      });

      pref.addEventListener("mouseleave", (event) => {
        event.currentTarget.style.stroke = "";
      });

      pref.addEventListener("click", (event) => {
        const target = event.currentTarget;
        if(isEmpty(target)) {
          target.style.fill = "#EEEEEE";
        } else {
          target.style.fill = "#ff8a9d";
        }
      });
    });
  }
})();
