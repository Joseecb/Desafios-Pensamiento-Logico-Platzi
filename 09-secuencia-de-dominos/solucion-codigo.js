const inicial = [4, 5]

function solucion(inicial, cantidad) {
    let serie = [inicial];
    for (let i = 0; i < cantidad; i++) {
        let preNumInferior = serie[i][1];
        let newNumSuperior = preNumInferior;
        let newNumInferior;

        let sumador;
        if ((i + 1) % 2) sumador = 2
        else sumador = 1
        if (preNumInferior + sumador > 6) newNumInferior = preNumInferior + sumador - 7
        else newNumInferior = preNumInferior + sumador

        const nuevaFicha = [];
        nuevaFicha.push(newNumSuperior, newNumInferior);
        serie.push(nuevaFicha);
    }

    console.log(serie)
}

solucion(inicial, 10)

/* 
Imprime:
[   
  [ 4, 5 ],
  [ 5, 0 ],
  [ 0, 1 ],
  [ 1, 3 ],
  [ 3, 4 ],
  [ 4, 6 ],
  [ 6, 0 ],
  [ 0, 2 ],
  [ 2, 3 ],
  [ 3, 5 ],
  [ 5, 6 ]
]
*/
