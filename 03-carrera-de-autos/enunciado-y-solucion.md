# Descripción del reto
> Tenemos información de que el conductor José ha llegado justo detrás de Pedro, además de que Miguel llegó en medio de Francisco y José.
>
> _**¿Cuál es el orden de llegada de los conductores?**_

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

>Cantidad de participantes en la carrera: 
>- **4** *(José, Pedro, Miguel y Francisco)*.

>_"José llegó justo detrás de Pedro"_
>- Si Pedro llegó **1°**, José **2°**
>- Si Pedro llegó **2°**, José **3°**
>- y así sucesivamente...

>_"Miguel llegó en medio de Francisco y José."_
>- Como José llegó **justo detrás** de Pedro, José no pudo haber llegado detrás de Miguel (quien hubiera llegado detrás de Francisco), entonces el órden de estos tres conductores tiene que ser:
>   - José
>   - Miguel
>   - Francisco

Por lo tanto, juntando toda la información que tenemos, podemos afirmar que el órden de llegada de los conductores fue:
- **🏎️ Pedro**
- **🚘José**
- **🚗 Miguel**
- **🚍 Francisco** 