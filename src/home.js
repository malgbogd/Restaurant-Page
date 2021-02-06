export function showHome() {
    infoTab.innerHTML = "";

    const home = document.createElement("div");
    home.id = "homeInfo";
    home.innerHTML= "Our restaurant is a brand new concept<br>where you can eat all your favourite dishes!!!"

    infoTab.appendChild(home);
}