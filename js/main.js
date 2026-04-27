let currentChapters = [...chaptersData];
const baseImageUrl = 'https://ilsonmangas.github.io/mangas.github.io/caps/';

function renderChapters(chapters) {
    const container = document.getElementById('chaptersList');
    if (!container) return;
    
    if (chapters.length === 0) {
        container.innerHTML = '<div class="no-results">❌ No se encontraron capítulos</div>';
        return;
    }
    
    container.innerHTML = chapters.map(chapter => `
        <div class="chapter-card" onclick="viewChapter(${chapter.id})">
            <div class="chapter-cover">
                <img src="${baseImageUrl}${chapter.id}/1.jpg" 
                     onerror="this.src='https://via.placeholder.com/280x180?text=Blue+Lock+Ch.+${chapter.number}'"
                     alt="Capítulo ${chapter.number}">
            </div>
            <div class="chapter-info">
                <div class="chapter-number">📖 Capítulo ${chapter.number}</div>
                <div class="chapter-title">${chapter.title}</div>
                <small>📄 ${chapter.pages} páginas | Vol. ${chapter.volume}</small>
            </div>
        </div>
    `).join('');
}

function viewChapter(id) {
    const chapter = chaptersData.find(c => c.id === id);
    if (chapter) {
        // REDIRIGIR AL LECTOR WEB
        window.location.href = `lector.html?chapter=${chapter.number}`;
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

console.log('✅ Blue Lock Manga Web cargado correctamente');
console.log('📖 API disponible en: api/chapters.json');
console.log('🖼️ Imágenes en: caps/{capítulo}/{página}.jpg');
console.log('📚 Lector disponible en: lector.html?chapter=345');
