window.addEventListener("load", () => {
  setTimeout(() => {
    const splash = document.getElementById("pwa-splash");
    const app = document.getElementById("app");

    if (splash) splash.style.display = "none";
    if (app) app.style.display = "block";
  }, 1500);
});