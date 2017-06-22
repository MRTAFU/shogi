function reborn(e){
    // alert("クリックしたよ");
    alert(e.id + "クリックしたよ");
    let id = e.id;
    alert(cell[id]["koma_type"]);
    let onoff=0;
    function rebornhighlight(){
          if(onoff==0){
              onoff++;
              for(let i=0;i<=80;i++){
                  if(cell[i]["koma_flg"]==0){
                      var t = document.getElementById('kiban');
                      var c = t.rows[cell[i]["x"]].cells[cell[i]["y"]];
                      c.className="red";
                  };
              };
          }else if(onoff==1){
              for(let i=0;i<=80;i++){
                  if(cell[i]["koma_flg"]==0){
                      var t = document.getElementById('kiban');
                      var c = t.rows[cell[i]["x"]].cells[cell[i]["y"]];
                      c.className="";
                  };
              };
          };
    };
    rebornhighlight();

};