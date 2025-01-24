(async () => {
  const button = document.querySelector(".js-copy-button");
  button.addEventListener("click", () => {
    const input = document.querySelector("#favorite_url");
    const value = input.value;
    navigator.clipboard.writeText(value);
  });

  const container = document.querySelector(".c-map-container");
  const p = container.getAttribute("data-p");
  const map = `/svg?p=${p}`;

  const isEmpty = (code) => {
    let currentP = container.getAttribute("data-p").split(",");
    return !currentP.includes(code);
  };

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
        const code = target.getAttribute("data-code");

        let currentP = container.getAttribute("data-p").split(",");
        if (currentP.includes(code)) {
          currentP = currentP.filter((e) => e !== code);
        } else {
          currentP.push(code);
          currentP = currentP.sort((a, b) => Number(a) - Number(b));
        }
        container.setAttribute("data-p", currentP.join(","));

        const input = document.querySelector("#favorite_url");
        input.value = input.value.replaceAll(/\?p=[0-9,]*/g, `?p=${currentP}`);

        if (isEmpty(code)) {
          target.style.fill = "#EEEEEE";
        } else {
          target.style.fill = "#ff8a9d";
        }
      });
    });
  }
})();
