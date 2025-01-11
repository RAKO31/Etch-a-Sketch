let container = document.querySelector('div');
let btn = document.createElement('button');
btn.textContent = "Set Grid Size";
btn.style= "margin:3px" ;
btn.addEventListener('click',()=>{
    let size =prompt("what size you want");
    if(size>100 || isNaN(size)){
        alert("invalid ")
    }
    else{
        container.innerHTML='';
        container.appendChild(btn);
        for(let i=0;i<=size;i++){
            let row = document.createElement('div');
            row.className="row";
            container.appendChild(row);
            row.style = "display:flex;border:0.5px solid black ; width:520px";
            for(let j=0;j<=size;j++){
                let column = document.createElement('div');
                column.className = `column${i+1}${j+1}`;
                column.style=" border:1px solid black;width:10px;height:10px;flex:1";
                column.addEventListener('mouseenter',()=>{
                    let num = Math.random()*100;
                    if(num<33){
                        column.style.backgroundColor = 'blue';
                    }
                    else if(num<66){
                        column.style.backgroundColor = 'red';
                    }
                    else{
                        column.style.backgroundColor = 'green';
                    }
                });
                row.appendChild(column);
            }
        }
    }
});
container.appendChild(btn);
