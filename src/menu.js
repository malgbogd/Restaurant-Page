export function showMenu() {
    infoTab.innerHTML = "";

    const menu = document.createElement("div");
    menu.id = "menuCard";

    const main = document.createElement("div");
    main.className = "menuPosition";
    main.innerHTML = "Your favorite dinner"
    
    const mainInfo = document.createElement("div");
    mainInfo.className = "menuInfo";
    mainInfo.innerHTML = "Any cuisine you want!";

    const soup = document.createElement("div");
    soup.className = "menuPosition";
    soup.innerHTML = "Your favorite soup"
    
    const soupInfo = document.createElement("div");
    soupInfo.className = "menuInfo";
    soupInfo.innerHTML = "Clear or cream?"
 

    const dessert = document.createElement("div");
    dessert.className = "menuPosition";
    dessert.innerHTML = "Your favorite dessert";

    const dessertInfo = document.createElement("div");
    dessertInfo.className = "menuInfo";
    dessertInfo.innerHTML = "Every taste you dream on...";

    const drink = document.createElement("div");
    drink.className = "menuPosition";
    drink.innerHTML = "Your favorite drink";
    
    const drinkInfo = document.createElement("div");
    drinkInfo.className = "menuInfo";
    drinkInfo.innerHTML = "With or without alcohol?";

    menu.appendChild(main);
    menu.appendChild(mainInfo);
    menu.appendChild(soup);
    menu.appendChild(soupInfo);
    menu.appendChild(dessert);
    menu.appendChild(dessertInfo);
    menu.appendChild(drink);
    menu.appendChild(drinkInfo);
    infoTab.appendChild(menu);

}