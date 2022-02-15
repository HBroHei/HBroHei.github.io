var stalist = {
    //Orange Bell Line
    "773,536":"Yoshi Valley",
    "999,532":"Water Park",
    "1242,530":"Toad Harbor",
    "1810,1110":"Golden Bell",
    "2038,1110":"Ribbon Road",
    "2335,1110":"Baby Park",
    "2541,1081":"Rainbow Road",
    "2686,1080":"Cheese Land",
    "2840,1080":"Yoshi Circuit",
    "2998,1080":"Music Park",

    //Red Bell Line, WIP
    "2926,464":"Mario Kart Stadium",

    //Blue Bell Line, WIP
    "849,1396":"Sweet Sweet Canyon"
}

const ORANGE = ["Orange Bell Line","#EFC511"]

const stationInfos = {
    "Yoshi Valley":{
        "Line": [ORANGE],
        "ID_Img":   "<svg style='background-color: yellow; width:15%; height:15%;' >" +
                    "    <circle cx='25' cy='25' r='20' fill='#EFC511'></circle>" +
                    "    <text x='25' y='25' fill='black'>" +
                    "    <tspan x='25' y='22'>O</tspan>" +
                    "    <tspan x='25' y='27'>1</tspan></text>" +
                    "</svg>",
        "Fare": 0,
        "Note": ""
    },
    "Water Park":{
        "Line": [ORANGE],
        "ID": "O<br>1",
        "Fare": 0,
        "Note": ""
    }
}