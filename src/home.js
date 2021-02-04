export const showHome = (()=> {
    const page = document.getElementById("content");

    const home = document.createElement("div");
    home.id = "homeInfo";
    home.innerHTML= "Our restaurant is a brand new concept where you can eat all your favourite dishes!!!"

    page.appendChild(home);
})();