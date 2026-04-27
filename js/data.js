// Base de datos de capítulos de Blue Lock
const chaptersData = [
    { id: 1, number: 1, title: "Sueño", pages: 52, volume: 1 },
    { id: 2, number: 2, title: "El Monstruo", pages: 48, volume: 1 },
    { id: 342, number: 342, title: "Arrebatando la corona", pages: 19, volume: 38 },
    { id: 343, number: 343, title: "Vivien Hugo", pages: 20, volume: 38 },
    { id: 344, number: 344, title: "Rebelde", pages: 20, volume: 38 },
    { id: 345, number: 345, title: "Verdadero final", pages: 22, volume: 39 }
];

// Generar capítulos del 6 al 344 automáticamente
for (let i = 6; i <= 344; i++) {
    const volume = Math.ceil(i / 25);
    chaptersData.push({
        id: i,
        number: i,
        title: `Capítulo ${i}`,
        pages: 48 + Math.floor(Math.random() * 10),
        volume: volume
    });
}

// Ordenar por número de capítulo (descendente para mostrar nuevos primero)
chaptersData.sort((a, b) => b.number - a.number);
