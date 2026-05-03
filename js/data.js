// Base de datos de capítulos de Blue Lock
const chaptersData = [
    { id: 345, number: 345, title: "El Despertar del Depredador", pages: 45, volume: 14 },
    { id: 344, number: 344, title: "El Nuevo Mundo", pages: 48, volume: 14 },
    { id: 343, number: 343, title: "La Evolución", pages: 52, volume: 14 },
    { id: 342, number: 342, title: "El Duelo Final", pages: 50, volume: 14 },
    { id: 341, number: 341, title: "Elección para el futuro", pages: 21, volume: 38 },
    { id: 340, number: 340, title: "La Estrategia", pages: 49, volume: 14 },
    { id: 339, number: 339, title: "El Contraataque", pages: 51, volume: 13 },
    { id: 338, number: 338, title: "La Defensa", pages: 46, volume: 13 },
    { id: 337, number: 337, title: "El Gol de la Victoria", pages: 53, volume: 13 },
    { id: 336, number: 336, title: "La Presión", pages: 48, volume: 13 },
    { id: 335, number: 335, title: "El Límite", pages: 50, volume: 13 },
    { id: 1, number: 1, title: "Sueño", pages: 78, volume: 1 },
    { id: 2, number: 2, title: "Mudanza", pages: 76, volume: 1 },
    { id: 3, number: 3, title: "Monstruo", pages: 27, volume: 1 },
    { id: 4, number: 4, title: "Ahora", pages: 22, volume: 1 },
    { id: 5, number: 5, title: "Fútbol desde cero", pages: 26, volume: 2 },
];

// Generar capítulos del 4 al 334 automáticamente
for (let i = 4; i <= 334; i++) {
    const volume = Math.ceil(i / 25);
    chaptersData.push({
        id: i,
        number: i,
        title: `Capítulo ${i}`,
        pages: 48 + Math.floor(Math.random() * 10),
        volume: volume
    });
}
