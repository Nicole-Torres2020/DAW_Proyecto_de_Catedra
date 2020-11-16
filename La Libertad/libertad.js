//console.log('correcto');
document.querySelector('#boton').addEventListener('click', traerdatos);

function traerdatos(){
    //console.log('dentro de la funcion');

    const uno = new XMLHttpRequest();

    uno.open('GET', 'libertad.json', true);

    uno.send();

    uno.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                //console.log(item);
                res.innerHTML += `
                <tr>
                    <td>${item.Cabecera_Departamental}</td>
                    <td>${item.Extencion_Territorial}</td>
                    <td>${item.Fiestas_Patronales}</td>
                    <td>${item.Numero_Habitantes}</td>
                    <td>${item.Datos_Historicos}</td>
                    <td>${item.Municipios}</td>
                    <td>${item.Centros_Turisticos}</td>
                    <td>${item.Rios}</td>
                    <td>${item.Volcanes}</td>
                    <td>${item.Cerros}</td>
                    <td>${item.Personajes_Celebres}</td>
                </tr>
            
          `
            }
        }
    }
}