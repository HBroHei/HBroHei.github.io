var canmap_e = document.getElementById("map")
var canmap_c = canmap_e.getContext("2d")
var canmap_p = document.getElementById("main")
var sysmap = new Image;
var ratio = 1

sysmap.onload = function(){/*
    canmap_e.style.width = this.width + "px"
    canmap_e.style.height = this.height + "px"
    canmap_c.canvas.height = this.height
    canmap_c.canvas.width = this.width
     */

    canmap_c.canvas.height = Number(canmap_e.offsetHeight)
    canmap_c.canvas.width = Number(canmap_e.offsetWidth)
    ratio = this.width/canmap_e.offsetWidth*1.009
    loadStations()
}
sysmap.src = "../systemMap/MK8_SBS_Map_L.png"
/* */

//Offset setting
var offsetC = [canmap_e.offsetLeft-window.scrollX,canmap_e.offsetTop-window.scrollY]
//offsetC = [0,0]
function getOffsettedX(val){
    return val - offsetC[0]
    return val
}

function getOffsettedY(val){
    return val - offsetC[1]
    return val
}

canmap_e.onmousedown = function(e){
    let clickedPt = [getOffsettedX(e.pageX),getOffsettedY(e.pageY)]
    /*
    canmap_c.beginPath()
    canmap_c.arc(clickedPt[0],clickedPt[1],8,0,2*Math.PI)
    canmap_c.fillStyle = "#000000"
    canmap_c.fill()/* */
    console.log(clickedPt)


    //if(canmap_c.isPointInPath(clickedPt[0],clickedPt[1])){   --Does not work with defined Path2D
        for(const ipath of staPaths){
            console.log(ipath)
            if(canmap_c.isPointInPath(ipath.Path,clickedPt[0],clickedPt[1])){
                let cName = ipath.Name
                document.getElementById("staName").innerHTML = ipath.Name + stationInfos[cName].ID_Img
                console.log(stationInfos[cName])
            }
        }
    //}
}

