import { browser } from "$app/environment";
export const prerender = true;
export async function load() {
  if (!browser) {
    return;
  }
  let updateDarkMode = (enabled) => {
    if (enabled) {
      document.documentElement.classList.add("sl-theme-dark");
    } else {
      document.documentElement.classList.remove("sl-theme-dark");
    }
  };
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  updateDarkMode(darkModeQuery.matches);
  darkModeQuery.addEventListener("change", (e) => updateDarkMode(e));
  let { registerIconLibrary } = await import(
    "@shoelace-style/shoelace/dist/utilities/icon-library"
  );
  registerIconLibrary("default", {
    resolver: (name) => `assets/icons/default/${name}.svg`,
  });
}
