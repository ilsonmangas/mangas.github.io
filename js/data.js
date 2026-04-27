// Base de datos de capítulos de Blue Lock
const chaptersData = [
    { id: 1, number: 1, title: "Sueño", volume: 1, releaseDate: "2018-08-01" },
    { id: 2, number: 2, title: "El Monstruo", volume: 1, releaseDate: "2018-08-15" },
    { id: 3, number: 3, title: "El Comienzo", volume: 1, releaseDate: "2018-09-01" },
    { id: 4, number: 4, title: "La Jaula", volume: 1, releaseDate: "2018-09-15" },
    { id: 5, number: 5, title: "La Selección", volume: 1, releaseDate: "2018-10-01" },
    { id: 6, number: 6, title: "Vs Team Z", volume: 2, releaseDate: "2018-10-15" },
    { id: 7, number: 7, title: "El Goleador", volume: 2, releaseDate: "2018-11-01" },
    { id: 8, number: 8, title: "Despertar", volume: 2, releaseDate: "2018-11-15" },
    { id: 9, number: 9, title: "El Duelo", volume: 2, releaseDate: "2018-12-01" },
    { id: 10, number: 10, title: "Desesperación", volume: 2, releaseDate: "2018-12-15" },
    { id: 11, number: 11, title: "Contraataque", volume: 3, releaseDate: "2019-01-01" },
    { id: 12, number: 12, title: "Evolución", volume: 3, releaseDate: "2019-01-15" },
    { id: 13, number: 13, title: "El Mejor", volume: 3, releaseDate: "2019-02-01" },
    { id: 14, number: 14, title: "Ante el Muro", volume: 3, releaseDate: "2019-02-15" },
    { id: 15, number: 15, title: "Fórmula 1", volume: 3, releaseDate: "2019-03-01" },
    { id: 16, number: 16, title: "Sistema", volume: 4, releaseDate: "2019-03-15" },
    { id: 17, number: 17, title: "Dios del Fútbol", volume: 4, releaseDate: "2019-04-01" },
    { id: 18, number: 18, title: "El Plan", volume: 4, releaseDate: "2019-04-15" },
    { id: 19, number: 19, title: "Isagi", volume: 4, releaseDate: "2019-05-01" },
    { id: 20, number: 20, title: "Bachira", volume: 4, releaseDate: "2019-05-15" },
    { id: 21, number: 21, title: "El Nuevo Mundo", volume: 5, releaseDate: "2019-06-01" },
    { id: 22, number: 22, title: "Segunda Selección", volume: 5, releaseDate: "2019-06-15" },
    { id: 23, number: 23, title: "Rin Itoshi", volume: 5, releaseDate: "2019-07-01" },
    { id: 24, number: 24, title: "Monstruo vs Monstruo", volume: 5, releaseDate: "2019-07-15" },
    { id: 25, number: 25, title: "100 Goles", volume: 5, releaseDate: "2019-08-01" }
];

// Simular más capítulos hasta el 300+
for (let i = 26; i <= 310; i++) {
    const volume = Math.ceil(i / 25); // ~25 capítulos por volumen
    chaptersData.push({
        id: i,
        number: i,
        title: `Capítulo ${i} - Blue Lock`,
        volume: volume,
        releaseDate: `202${Math.floor(i/50)}-${(i % 12) + 1}-01`
    });
}