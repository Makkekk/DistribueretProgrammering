# JavaScript Exercises – Opgaver 2

## Opgave 2.1
Programmer nedenstående funktioner, hvor array indeholder nogle tal:

- **max(array)**: returnerer det største element i arrayet.  
- **contains(array, element)**: returnerer `true` hvis elementet findes i arrayet, ellers `false`.  
- **sum(array)**: returnerer summen af elementerne i arrayet.  

---

## Opgave 2.2
Modificer løsningen til opgave 1.3, så algoritmerne nu pakkes ind i funktioner med signaturerne:

- **bubbleSort(array)**  
- **binarySearch(array, element)**  

Gør desuden *swap-delen* af `bubbleSort` til en lokal funktion `swap(i, j)`.

---

## Opgave 2.3
Svarende til Java’s `Comparator#compare(...)` metode, skal der her laves nogle compare-funktioner, der
tager to parametre, og returnerer `-1`, `0` eller `1` alt efter om den første parameter er mindre end, lig med
eller større end den anden parameter.

Der skal laves følgende compare-funktioner:

- **compare(s1, s2)**: Sammenligner de to tekststrenge leksikografisk.  
- **compareLen(s1, s2)**: Sammenligner de to tekststrenge på deres længde.  
- **compareIgnoreCase(s1, s2)**: Sammenligner to tekststrenge leksikografisk uden at tage hensyn til store og små bogstaver.  

Modificer dernæst `bubbleSort` funktionen fra opgave 2.2, så den nu får en compare-funktion som ekstra
parameter. Sammenligningen i `bubbleSort` funktionen skal nu ske med denne compare-funktion.

---

## Opgave 2.4
    Lav en string variabel med en længere tekst.  
    Anvend dernæst et objekt som en *map* til at beregne antallet af de forskellige ord i teksten.  

    Brug metoden `split()` til at opdele teksten i ord.  
👉 [MDN: String.prototype.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

---

## Opgave 2.5
Lav et array med en række person-objekter.  
Hver person skal have et **navn**, en **e-mail** og et **mobilnummer**.  

Afprøv **CRUD** på dette array som vist på siden *CRUD på arrays i arrays.pdf*.

---

## Opgave 2.6
Lav en string variabel der indeholder noget kode med nogle parenteser – `()`, `{}` og `[]`.  

Lav dernæst en funktion, der skal afgøre, om parenteserne i koden er **balancerede**.  

Som datastruktur anvendes en **stak** (et array).  
Når der mødes en venstre parentes i koden, skal den sættes på stakken – og når der mødes en højre parentes, skal det kontrolleres, om den tilsvarende venstre parentes er øverst på stakken.  

Brug metoderne `push()` og `pop()`.  
👉 [MDN: Array](https://developer.)
