const d = document,
  w = window,
  de = d.documentElement,
  storage = w.localStorage;

export default function switchTheme(btn = "themeBtn") {
  const $btn = d.getElementById(btn);

  d.addEventListener("click", (e) => {
    if (e.target === $btn) {
      if (de.classList.contains("dark")) {
        $btn.textContent = "Activar modo oscuro";
        storage.setItem("theme", "light");
        de.classList.replace("dark", "light");
      } else {
        $btn.textContent = "Activar modo claro";
        storage.setItem("theme", "dark");
        de.classList.replace("light", "dark");
      }
    }
  });

  if (storage.getItem("theme") === null) {
    const mediaQueryList = w.matchMedia("(prefers-color-scheme: light)");

    mediaQueryList.addListener(() => {
      if (storage.getItem("theme") === null) {
        if (mediaQueryList.matches) {
          $btn.textContent = "Activar modo oscuro";
          de.classList.remove("dark");
          de.classList.add("light");
        } else {
          $btn.textContent = "Activar modo claro";
          de.classList.remove("light");
          de.classList.add("dark");
        }
      }
    });
  }
  if (!de.classList.contains("dark")) {
    $btn.textContent = "Activar modo oscuro";
  }
}
