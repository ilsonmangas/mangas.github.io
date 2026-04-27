// Base de datos de capítulos de Blue Lock
const chaptersData = [
    { id: 1, number: 1, title: "Sueño", pages: 52, volume: 1 },
    { id: 2, number: 2, title: "El Monstruo", pages: 48, volume: 1 },
    { id: 3, number: 3, title: "El Comienzo", pages: 55, volume: 1 },
    { id: 4, number: 4, title: "La Jaula", pages: 50, volume: 1 },
    { id: 5, number: 5, title: "La Selección", pages: 52, volume: 1 },
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
