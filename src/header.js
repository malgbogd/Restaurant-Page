export const createHeader = (()=> {
  const page = document.getElementById("content");

  const toolbar = document.createElement("div");
    toolbar.id = "toolbar";

  const logo = document.createElement("div");
  logo.id = "logo";
  const mainLogo = document.createElement("div");
  mainLogo.id = "mainLogo";
  mainLogo.innerHTML = "RESTAURANT"

  const underLogo = document.createElement("div");
  underLogo.id= "underLogo";
  underLogo.innerHTML = "Your favorite!"

  const home = document.createElement("div");
  home.id ="home";
  home.innerHTML = "HOME";

  const menu = document.createElement("div");
  menu.id="menu";
  menu.innerHTML = "MENU"

  const contact = document.createElement("div");
  contact.id = "contact"
  contact.innerHTML = "CONTACT"

  page.appendChild(toolbar);
  toolbar.appendChild(logo);
  logo.appendChild(mainLogo);
  logo.appendChild(underLogo)
  toolbar.appendChild(home);
  toolbar.appendChild(menu);
  toolbar.appendChild(contact);

return {home, menu, contact};
})();