function nifu(id){
    if(cell[id]["koma_type"]==0){
        let nifuy=100;
        for(let j=0;j<=80;j++){
            if( cell[j]["koma_flg"]==1                    &&
                cell[id]["koma_own"]==cell[j]["koma_own"]  &&
                cell[j]["koma_type"]==0
            ){
                // console.log("2歩　(x,y): " + cell[j]["x"] + "," + cell[j]["y"]);
                nifuy = cell[j]["y"];
            };
            // console.log("nifuy: " + nifuy);
            for(let k=0;k<=80;k++){
                if(cell[k]["y"]==nifuy){
                    cell[k]["cand_flg"]=0;
                    var t = document.getElementById('kiban');
                    var c = t.rows[cell[k]["x"]].cells[cell[k]["y"]];
                    c.className="";
                };
            };
        };
    };
};

function banarea(id){
    if(cell[id]["koma_type"]==0 || cell[id]["koma_type"]==3){
        if(cell[id]["koma_own"]==1){  
            for(let k=0; k<=8; k++){
                cell[k]["cand_flg"]=0;
                var t = document.getElementById('kiban');
                var c = t.rows[cell[k]["x"]].cells[cell[k]["y"]];
                c.className="";
            };
        }else if(cell[id]["koma_own"]==2){
            for(let k=72; k<=80; k++){
                cell[k]["cand_flg"]=0;
                var t = document.getElementById('kiban');
                var c = t.rows[cell[k]["x"]].cells[cell[k]["y"]];
                c.className="";
            };
        };
    }else if(cell[id]["koma_type"]==4){
        if(cell[id]["koma_own"]==1){  
            for(let k=0; k<=17; k++){
                cell[k]["cand_flg"]=0;
                var t = document.getElementById('kiban');
                var c = t.rows[cell[k]["x"]].cells[cell[k]["y"]];
                c.className="";
            };
        }else if(cell[id]["koma_own"]==2){
            for(let k=63; k<=80; k++){
                cell[k]["cand_flg"]=0;
                var t = document.getElementById('kiban');
                var c = t.rows[cell[k]["x"]].cells[cell[k]["y"]];
                c.className="";
            };
        };
    };
};


function reborn(e){
    let id = e.id;
    function rebornhighlight(){
        turncheck();
        console.log("whoseturn: " + whoseturn);
        if(cell[id]["koma_own"]==whoseturn){
            if(cell[id]["pre_flg"]==0){
                shiftdeactivate(id);
                cell[id]["pre_flg"]=1;
                // console.log("reborn: " + cell[id]["koma_type"]);
                for(let i=0;i<=80;i++){
                    if(cell[i]["koma_flg"]==0){
                        cell[i]["cand_flg"]=1;
                        var t = document.getElementById('kiban');
                        var c = t.rows[cell[i]["x"]].cells[cell[i]["y"]];
                        c.className="red";
                    };
                };
                nifu(id);
                banarea(id);
  
            }else if(cell[id]["pre_flg"]==1){
                shiftdeactivate(id);
                cell[id]["pre_flg"]=0;
                for(let i=0;i<=80;i++){
                    if(cell[i]["koma_flg"]==0){
                        cell[i]["cand_flg"]=0;
                        var t = document.getElementById('kiban');
                        var c = t.rows[cell[i]["x"]].cells[cell[i]["y"]];
                        c.className="";
                    };
                };
            };
        };
    };
    rebornhighlight();

};