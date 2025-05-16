// Ejercicio 1 - Listado del Zoo a la Inversa
const zoo = ['Elefante', 'Jirafa', 'León', 'Tigre', 'Cebra', 'Mono', 'Panda', 'Pingüino'];
console.log('Listado del Zoo a la Inversa:');
for (let i = zoo.length - 1; i >= 0; i--) {
    console.log(zoo[i]);
}

// Ejercicio 2 - Catálogo de Música
let musicBands = ['Queen', 'The Beatles', 'Pink Floyd', 'Led Zeppelin', 'Nirvana', 'The Rolling Stones'];

function showMenu() {
    let option = '';
    while (option !== '6') {
        option = prompt(`Menú de Opciones:\n1. Borrar el primero\n2. Borrar el último\n3. Borrar o cambiar un índice\n4. Buscar un grupo\n5. Mostrar grupo por índice\n6. Mostrar todos\n7. Añadir grupo\n8. Salir`);
        switch (option) {
            case '1':
                console.log(`Grupo eliminado: ${musicBands.shift()}`);
                break;
            case '2':
                console.log(`Grupo eliminado: ${musicBands.pop()}`);
                break;
            case '3':
                const indexToEdit = parseInt(prompt('Ingresa el índice a borrar o cambiar:'));
                if (indexToEdit >= 0 && indexToEdit < musicBands.length) {
                    const newGroup = prompt(`Ingresa el nuevo grupo para reemplazar '${musicBands[indexToEdit]}' o deja vacío para borrar:`);
                    if (newGroup) {
                        console.log(`Grupo reemplazado: ${musicBands.splice(indexToEdit, 1, newGroup)}`);
                    } else {
                        console.log(`Grupo eliminado: ${musicBands.splice(indexToEdit, 1)}`);
                    }
                } else {
                    console.log('Índice fuera de rango.');
                }
                break;
            case '4':
                const groupToFind = prompt('Ingresa el nombre del grupo a buscar:');
                const index = musicBands.indexOf(groupToFind);
                if (index !== -1) {
                    console.log(`El grupo '${groupToFind}' se encuentra en el índice ${index}.`);
                } else {
                    console.log('Grupo no encontrado.');
                }
                break;
            case '5':
                const indexToShow = parseInt(prompt('Ingresa el índice del grupo a mostrar:'));
                if (indexToShow >= 0 && indexToShow < musicBands.length) {
                    console.log(`Grupo en el índice ${indexToShow}: ${musicBands[indexToShow]}`);
                } else {
                    console.log('Índice fuera de rango.');
                }
                break;
            case '6':
                console.log('Listado completo de grupos:');
                musicBands.forEach((band, i) => console.log(`${i}: ${band}`));
                break;
            case '7':
                const newBand = prompt('Ingresa el nombre del nuevo grupo para añadir:');
                if (newBand) {
                    musicBands.push(newBand);
                    console.log(`Grupo añadido: ${newBand}`);
                }
                break;
            case '8':
                console.log('Saliendo del programa...');
                return;
            default:
                console.log('Opción no válida.');
        }
    }
}

// Iniciar el menú de opciones
showMenu();
