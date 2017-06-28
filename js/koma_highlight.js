function highlight(i){
    redhighlight(i);
    greenhighlight(i);
};


function redhighlight(i){
    for(let j=0; j<=80; j++){
        if(cell[j]["koma_flg"]==0){
            if(cell[j]["cand_flg"]==1){
                var t = document.getElementById('kiban');
                var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                // console.log("cell turns red x:" + cell[j]["x"] + ",y:" + cell[j]["y"]);
                c.className="red"
            }else if(cell[j]["cand_flg"]==0){
                var t = document.getElementById('kiban');
                var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                // console.log("cell turns default");
                c.className="";
            };
        }else if(cell[j]["koma_flg"]==1){
            if(cell[j]["koma_own"]==cell[i]["koma_own"]){
                var t = document.getElementById('kiban');
                var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                // console.log("cell turns default");
                c.className="";
            };
        };
    };
};


function greenhighlight(i){
    for(let j=0; j<=80; j++){
        if(cell[j]["koma_flg"]==1){
            if(cell[j]["koma_own"]!=cell[i]["koma_own"]){
                if(cell[j]["cand_flg"]==1){
                    // console.log("movement candidate:" + "x:" + cell[j]["x"] + ", y:" + cell[j]["y"]);
                    var t = document.getElementById('kiban');
                    var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                    // console.log("cell turns red x:" + cell[j]["x"] + ",y:" + cell[j]["y"]);
                    // c.innerHTML = '<div class="red"></div>';
                    c.className="green"
                }else if(cell[j]["cand_flg"]==0){
                    // console.log("erase candidate:" + "x:" + cell[j]["x"] + ", y:" + cell[j]["y"]);
                    var t = document.getElementById('kiban');
                    var c = t.rows[cell[j]["x"]].cells[cell[j]["y"]];
                    // console.log("cell turns default");
                    // c.innerHTML = '';
                    c.className="";
                };
            };
        };
    };
};


