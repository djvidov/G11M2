var listaNumere = [
    20,
    17,
    35,
    2,
    9,
    24,
    5



    // 1. Afisati suma numerelor dintr-o lista




   function suma(lista) {

        var adunare = 0

        for (let index = 0; index < lista.length; index++) {

            adunare = adunare + lista[index]

        }
        console.log(adunare)
    }




    // 2. Returnati difeferenta numerelor dintr-o lista


    function scadere(lista) {

        var rezultat = 0
        for (let index = 0; index < lista.length; index++) {

            rezultat = rezultat - lista[index]

        }
        return rezultat
    }

    console.log(function scadere(listaNumere))


    // 3. Returnati inmultirea numerelor dintr-o lista


    function inmultire(lista) {

        var rezultat = 1
        for (let index = 0; index < lista.length; index++) {

            rezultat = rezultat * lista[index]

        }
        return rezultat
    }

    console.log(function scadere(listaNumere))