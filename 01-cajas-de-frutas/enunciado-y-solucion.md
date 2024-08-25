# Descripción del reto
> Tengo 3 cajas, cada una contiene un tipo de fruta diferente (peras, manzanas y naranjas). El problema es que todas las cajas tienen las etiquetas de las frutas incorrectas. ¿Cuántas cajas necesito abrir para saber colocar todas las etiquetas correctamente?

- 🍐 Peras
- 🍎 Manzanas
- 🍊 Naranjas

## ¿Qué esperamos de ti?
Se requiere dar solución al desafío de más arriba, toma en cuenta que este es un tipo de ejercicio **<u>totalmente lógico</u>, razón por la que nos olvidaremos del código en este desafío.**

Para completarlo aplica los siguientes pasos:

1. *Identifica posibles soluciones:* piensa en como solucionarías este problema, en ocasiones puedes tener más de una solución, por lo que te invito a que no te limites y desarrolles todas las soluciones que identifiques.

2. *Socializa tus hallazgos con la comunidad:* te invito a que compartas en la zona de comentario todas las soluciones identificadas.

3. *Toma el Quiz:* en el quiz encontrarás las posibles respuestas a este problema, entre ellas la respuesta correcta, recuerda que después del quiz encontrarás una nueva clase con la explicación del problema y su solución.

### Cursos para reforzar
- Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo
- Curso de Pensamiento Lógico: Lenguajes de Programación
- Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones

<br>

---

<br>

## **<u>Solución:</u>**

¡La repuesta correcta es que solo debemos abrir UNA caja!

Dado a que se tiene el enunciado:

>_"...El problema es que **todas las cajas** tienen las etiquetas de las frutas incorrectas..."_

lo que quiere decir que cada caja tiene la etiqueta incorrecta por ello si en la de **Peras** tenemos manzanas  quiere decir que en la caja de **manzanas** puede haber naranjas y en la caja con etiqueta **naranjas** debe haber peras.

otra posibilidad es que si en la de **Peras** tenemos naranjas quiere decir que en la caja de **naranjas** puede haber manzanas y en la caja con etiqueta **manzanas** debe haber peras.

-  Peras      => 🍎
-  Manzanas   => 🍊
-  Naranjas   => 🍐 


-  Peras      => 🍊
-  Manzanas   => 🍐
-  Naranjas   => 🍎
