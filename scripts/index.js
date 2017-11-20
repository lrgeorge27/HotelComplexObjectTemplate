var hotel = {
    rooms: [{
            name: "Double Bed",
            price: "$75.00",
            available: 40
        },
        {
            name: "King Bed",
            price: "$120.00",
            available: 20
        },
        {
            name: "Luxury Suite",
            price: "$250.00",
            available: 5
        }
    ],
    name: "CareerDevs Innt"
};

//console.log(document.getElementById("label").nodeName); //How to find the nodeName of createElement item

for (var i = 0; i < hotel.rooms.length; i++) {
    console.log("start");
    var radioBtn = document.createElement("INPUT");
    var radioLbl = document.createElement("LABEL");
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name", "rooms");
    radioBtn.setAttribute("value", i);
    radioBtn.setAttribute("id", "room" + i);
    radioLbl.innerHTML = hotel.rooms[i].name;
    console.log("stop");

    document.getElementById("radialSection").appendChild(radioBtn);
    document.getElementById("radialSection").appendChild(radioLbl);
}

//display rooms as radio options
//on form submission confirm radio was selected
//make reservation
