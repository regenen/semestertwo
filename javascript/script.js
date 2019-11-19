document.addEventListener("keydown", banaan);

function banaan(evt)
{
    var projectiel = document.getElementById("projectiel");
    var hoogte = parseInt(projectiel.style.top, 10);

    if(event.KeyCode == 32);
    {
        projectiel.style.backgroundColor = "blue";
        projectiel.style.top = "100px";
        
    }

    
    if(hoogte >= 100)
    {
        nhoogte = hoogte + 30;
        hoogte = nhoogte + 'px';
        projectiel.style.top = hoogte;
    } 
    
    
}







