let currentChapters = [...chaptersData];

function renderChapters(chapters) {
    const container = document.getElementById('chaptersList');
    if (!container) return;
    
    if (chapters.length === 0) {
        container.innerHTML = '<div class="no-results">No se encontraron capítulos</div>';
        return;
    }
    
    container.innerHTML = chapters.map(chapter => `
        <div class="chapter-card" onclick="viewChapter(${chapter.id})">
            <div class="chapter-cover">
                📖
            </div>
            <div class="chapter-info">
                <div class="chapter-number">Capítulo ${chapter.number}</div>
                <div class="chapter-title">${chapter.title}</div>
                <small>Vol. ${chapter.volume} | ${chapter.releaseDate}</small>
            </div>
        </div>
    `).join('');
}

function viewChapter(id) {
    const chapter = chaptersData.find(c => c.id === id);
    if (chapter) {
        alert(`Abriendo Capítulo ${chapter.number}: ${chapter.title}\n\nEn la app móvil, aquí se cargarían las páginas del manga.`);
        // Aquí redirigirías a una página de lectura o abrirías el visor
    }
}

function searchChapters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (!searchTerm) {
        currentChapters = [...chaptersData];
    } else {
        currentChapters = chaptersData.filter(chapter => 
            chapter.title.toLowerCase().includes(searchTerm) || 
            chapter.number.toString().includes(searchTerm)
        );
    }
    
    renderChapters(currentChapters);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderChapters(chaptersData);
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', searchChapters);
    }
});

// Exponer la API para la app móvil (CORS amigable)
console.log('Blue Lock Manga Web cargado');
console.log('API disponible en: /api/chapters.json');