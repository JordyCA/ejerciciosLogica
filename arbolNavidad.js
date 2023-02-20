/**
 * 
 *  La estrella del árbol es un asterisco (*) y el cuerpo del árbol está hecho de 0 
    El árbol debe tener 10 filas de altura. 
    Cada fila debe estar correctamente identada de manera que la fila anterior quede centrada sobre la nueva. 
    Cualquier fila dada debe tener dos 0s más que la anterior, excepto la primera que es la estrella y la segunda, con solamente un 0. 
 */

function createTree() {
    let base = 2;
    let tree = ['*'];
    for (let i = 0; i <= 10; i++) {
        let temp = base * i;
        let baseZero = '0';
        for (let y = 0; y < temp; y++) {
            baseZero += '0';
        }
        tree.push(baseZero);
    }

    for (let i = (tree.length - 2); i >= 0; i--) {
        let numberSpaces = (tree[tree.length - 2].length - tree[i].length) / 2;
        let spaces = '';
        for (let y = 0; y <= numberSpaces; y++) {
            spaces += ' ';
        }
        tree[i] = spaces + tree[i];
    }

    for (let i = 0; i < tree.length; i++) {
        console.log(tree[i]);
    }
}
createTree();