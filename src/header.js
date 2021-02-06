export function createHeader() {
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

  home = document.createElement("div");
  home.id ="home";
  home.innerHTML = "HOME";

  menu = document.createElement("div");
  menu.id="menu";
  menu.innerHTML = "MENU"

  contact = document.createElement("div");
  contact.id = "contact"
  contact.innerHTML = "CONTACT"

  infoTab = document.createElement("div");
  infoTab.id= "infoTab"

  page.appendChild(toolbar);
  toolbar.appendChild(logo);
  logo.appendChild(mainLogo);
  logo.appendChild(underLogo)
  toolbar.appendChild(home);
  toolbar.appendChild(menu);
  toolbar.appendChild(contact);
  page.appendChild(infoTab);

return {home, menu, contact, infoTab};
};