
const intSta = ["Royal Raceway","Mario Circuit","Baby Park"]
var staPaths = []

/**
 * 
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} type 1- Normal \
 *                      2- Interchange \
 *                      3- Golden Bell
 */
function drawSta(x,y,type){
    let staPath = new Path2D()
    var r = 8
    if(type==1){
        r = 26/ratio
    }
    else if(type==2){
        r = 55/ratio
    }
    else if(type==3){
        r = 75/ratio
    }
    //canmap_c.beginPath()
    staPath.arc(x,y,r,0,2*Math.PI)
    canmap_c.fillStyle = "#ffff00ff"
    canmap_c.fill(staPath)/*
    canmap_c.beginPath()
    canmap_c.arc(x,y,r,0,2*Math.PI)
    canmap_c.fillStyle = "#ffff00ff"
    canmap_c.fill()/* */
    //console.log(r)
    return staPath
}
function loadStations(){
    for(const iobj in stalist){
        //console.log(iobj)
        const cords = iobj.split(",")
        var rPath
        if(stalist[iobj]=="Golden Bell"){
            rPath = drawSta(cords[0]/ratio,cords[1]/ratio,3)
        }
        else if(intSta.indexOf(stalist[iobj])!=-1){
            rPath = drawSta(cords[0]/ratio,cords[1]/ratio,2)
        }
        else{
            rPath = drawSta(cords[0]/ratio,cords[1]/ratio,1)
        }
        staPaths.push({"Path":rPath, "Name":stalist[iobj]})
        
    }
}


