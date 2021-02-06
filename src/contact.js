export function showContact() {
    infoTab.innerHTML = "";
    const contactLine = document.createElement("div");
    const contact = document.createElement("div");
    contactLine.className = "contactInfo";
    contact.className = "contactInfo";
    contactLine.innerHTML = "<b>CONTACT US!</b>"
    const line1 = "Restaurant";
    const line2 = "Sesame Street 1";
    const line3 = "New York";
    const line4 = "NY 10023 United States";
    const line5 = "+1 211-111-1111"
    const line6 = "contact@restaurant.to"
    contact.innerHTML = `${line1}<br>${line2}<br>${line3}<br>${line4}<br>${line5}<br>${line6}`;

    infoTab.appendChild(contactLine);
    infoTab.appendChild(contact);
}