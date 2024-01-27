$(()=>{
    /*----Questa funzione si occupa del reset dei campi---------*/
    reset=()=>{ $('#risultatoT').html(''); $('#errore').html('');  $('#area').html(''); 
    $('#perimetro').html('');}
    
    /*--Funzione utilizzata dal triangolo e dal rettangolo per ottenere i value---*/
    getValue=(parA,parB)=>{a=Number(parA.val()); b=Number(parB.val())}	    
	
    /*----Al click la funzione calcola l'area del triangolo e il suo perimetro-------*/
    $('#dimensioniTriangolo').on('click', ()=>{
        reset();
        area=0;
        perimetro=0;
        ipotenusa=0;
        figura='Triangolo';
        getValue($('#catetoUno'), $('#catetoDue') );
        if(verifica(a,b, $('#catetoUno'), $('#catetoDue'))===1){
            area=((a * b)/2);
            ipotenusa= Math.sqrt((a*a)+(b*b));
            perimetro = (a + b + ipotenusa).toFixed(2);
            stampa(area, perimetro, figura);
            $('#catetoUno').val('')
            $('#catetoDue').val('')
        }
    });
    
    /*----Al click la funzione calcola l'area del rettangolo e il suo perimetro-------*/
    $('#dimensioniRettangolo').on('click', ()=>{
        reset();
        area=0;
        perimetro=0;
        figura='Rettangolo';
        getValue($('#base'), $('#altezza') );
        if(verifica(a,b, $('#base'), $('#altezza'))===1){
            area=(a * b);
            perimetro = (a+b)*2;
            stampa(area,perimetro,figura);
            $('#base').val('');
            $('#altezza').val('');
        }
    });

    /*----Al click la funzione calcola l'area del quadrato e il suo perimetro-------*/
    $('#dimensioniQuadrato').on('click', ()=>{
        reset();
        tot=0;
        perimetro=0;
        figura='Quadrato';
        a=Number($('#lato').val());
        b=1; 
        if(verificaDue(a, $('#lato'))===1){
            area=(a * a);
            perimetro=(a * 4);
            stampa(area,perimetro,figura);
        }
        $('#lato').val('');
    });

    /*----Al click la funzione calcola l'area del cerchio e il suo perimetro-------*/
    $('#dimensioniCerchio').on('click', ()=>{
        reset();
        area=0;
        perimetro=0;
        figura='Cerchio';
        b=1;
        a=Number($('#raggio').val());
        if(verificaDue(a, $('#raggio'))===1){
            area=Math.round(((a * a) * 3.14));
            perimetro = ((2 * a) * 3.14).toFixed(2);
            stampa(area,perimetro,figura);
        }
        $('#raggio').val('');
        $('#raggio').focus();
    });

    /*----La funzione verifica e verificaDue prendono in ingresso 4 argomenti, numero1 e numero2, parametro1 e parametro2, la prima 
    e due argomenti la seconda. Sono utilizzati per la verifica in input, e se i due value sono diversi/maggiori di zero
    la funzione restituisce true alla funzione chiamante permettendole di arrrivare al calcolo. In caso contrario, 
    restituisce un errore spostando il focus nel campo input dove lo stesso si è verificato per cui i parametri servono
    appunto a questo scopo-------*/
    verifica=(numero1,numero2,parametro1, parametro2)=>{
       return numero1<=0 ? $('#errore').html('Primo numero maggiore di zero!!') + parametro1.focus() 
            : numero2<=0 ? $('#errore').html('Secondo numero maggiore di zero!!')+ parametro2.focus() : 1;
    }
    verificaDue=(numero,parametro)=>{
        return numero<=0 ? $('#errore').html('Numero maggiore di zero!!') + parametro.focus() : 1
    }

    /*---Questa funzione mi consente di stampare a video il risultato dei singoli calcoli 
    svolti all'interno delle singole funzioni---*/
    stampa=(area, perimetro, figura)=>{
        reset();
        $('#area').html('L\'area del '+ figura+ ' è : ' + area + " mq");
        $('#perimetro').html('Il perimetro del : ' + figura + ' è : ' + perimetro + ' m');
    }
        
});