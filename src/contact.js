export const showContact = (()=> {
    const page = document.getElementById("content");

    const contact = document.createElement("div");
    contact.id = "contactInfo";
    contact.innerHTML= "Restaurant\nSesame Street 1\nNew York\nNY 10023 United States\n+1 211-111-1111\ncontact@restaurant.to"

    page.appendChild(contact);
})();