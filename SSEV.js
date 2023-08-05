var k= document.getElementById("input_k");
var n= document.getElementById("input_n");
var z1= document.getElementById("input_z1");
var z2= document.getElementById("input_z2");
var z3= document.getElementById("input_z3");
var z4= document.getElementById("input_z4");
var p1= document.getElementById("input_p1");
var p2= document.getElementById("input_p2");
var p3= document.getElementById("input_p3");
var p4= document.getElementById("input_p4");
var sel=document.getElementById("selector");

var boton=document.getElementById("boton");
var botonayuda=document.getElementById("botonayuda");

var r=document.getElementById("resultado");
var r2=document.getElementById("ayuda");

var kp=0;
var Kv=0.0;
var Ka=0;
var aux=0
var error=0
var ayudav=0

var z11= 0;
var z22= 0;
var z33= 0;
var z44= 0;
var p11= 0;
var p22= 0;
var p33= 0;
var p44= 0;


function ayuda()
{
    if(ayudav==1)
    {
        ayudav=0;
        r2.innerHTML="";

    }
    else
    {
        ayudav=ayudav+1;
        r2.innerHTML="Este programa permite calcular el error en estado estacionario de una funcion de transferencia, a una entrada escalon, rampa o parabola, es necesario ingresar la funcion de transferencia como se muestra en la imagen.";
    }
}

  function draw() {
    try {
      k.value=parseFloat(k.value);
      z1.value=parseFloat(z1.value);
      z2.value=parseFloat(z2.value);
      z3.value=parseFloat(z3.value);
      z4.value=parseFloat(z4.value);
      p1.value=parseFloat(p1.value);
      p2.value=parseFloat(p2.value);
      p3.value=parseFloat(p3.value);
      p4.value=parseFloat(p4.value);
      
      z11= z1.value;
      z22= z2.value;
      z33= z3.value;
      z44= z4.value;
      p11= p1.value;
      p22= p2.value;
      p33= p3.value;
      p44= p4.value;

    

        if(z11==0)
        {
          z11=1.0;
        }
        if(z22==0)
        {
          z22=1.0;
        }
        if(z33==0)
        {
          z33=1.0;
        }
        if(z44==0)
        {
          z44=1.0;
        }
        if(p11==0)
        {
          p11=1.0;
        }
        if(p22==0)
        {
          p22=1.0;
        }
        if(p33==0)
        {
          p33=1.0;
        }
        if(p44==0)
        {
          p44=1.0;
        }


     if(sel.value=="step")
     {
        if(n.value<0)
        {
          r.innerHTML="Error n debe ser mayor a cero ";
        }

        if(n.value==0)
        {
          kp=(z11*z22*z33*z44*k.value)/(p11*p22*p33*p44);
          error=1/(1+kp)
          r.innerHTML="Error en estado estacionario="+error.toFixed(4);
        }

        if(n.value==1)
        {
          r.innerHTML="Kp=infinito, error en estado estacionario = 0 ";
        }

        if(n.value==2)
        {
          r.innerHTML="Kp=infinito, error en estado estacionario = 0 ";
        }
     } 
     if(sel.value=="ramp")
     {
        if(n.value<0)
        {
          r.innerHTML="Error n debe ser mayor a cero ";
        }

        if(n.value==0)
        {
          r.innerHTML="Kv= 0 ,error en estado estacionario = infinito";       
        }

        if(n.value==1)
        {
          kp=(z11*z22*z33*z44*k.value)/(p11*p22*p33*p44);
          error=1/(kp)      
          r.innerHTML="Error en estado estacionario="+error.toFixed(4);   
        }

        if(n.value==2)
        {
          r.innerHTML="Kv=infinito, error en estado estacionario cero ";
        }
     }
     if(sel.value=="parabola")
     {
        if(n.value<0)
        {
          r.innerHTML="Error n debe ser mayor a cero ";
        }

        if(n.value==0)
        {
          r.innerHTML="Ka= 0, error en estado estacionario infinito";
        }

        if(n.value==1)
        {
          r.innerHTML="Ka= 0, error en estado estacionario infinito";
        }

        if(n.value==2)
        {
          kp=(z11*z22*z33*z44*k.value)/(p11*p22*p33*p44);
          error=1/(kp)      
          r.innerHTML="Error en estado estacionario="+error.toFixed(4);   
        }
     }
      
    }
    catch (err) {
      console.error(err)
      alert(err)
    }
  }
botonayuda.addEventListener("click",ayuda);
boton.addEventListener("click",draw);