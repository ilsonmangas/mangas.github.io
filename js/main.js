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
        // Crear modal o redirigir a página de lectura
        showReaderModal(chapter);
    }
}

function showReaderModal(chapter) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.95);
        z-index: 1000;
        overflow-y: auto;
    `;
    
    let currentPage = 1;
    
    modal.innerHTML = `
        <div style="position: sticky; top: 0; background: #000; padding: 10px; text-align: center; z-index: 1001;">
            <button onclick="this.closest('div').remove()" style="position: absolute; left: 10px; padding: 5px 10px;">✖ Cerrar</button>
            <h3 style="margin: 0; color: #00d4ff;">Capítulo ${chapter.number}: ${chapter.title}</h3>
            <div style="margin-top: 5px;">
                <button onclick="changePage(-1)">◀ Anterior</button>
                <span id="pageCounter" style="margin: 0 20px;">Página 1 / ${chapter.pages}</span>
                <button onclick="changePage(1)">Siguiente ▶</button>
            </div>
        </div>
        <div id="imageContainer" style="display: flex; justify-content: center; padding: 20px;">
            <img id="mangaPage" src="${baseImageUrl}${chapter.id}/1.jpg" 
                 style="max-width: 100%; height: auto;"
                 onerror="this.src='https://via.placeholder.com/800x1200?text=Página+no+disponible'">
        </div>
    `;
    
    document.body.appendChild(modal);
    
    window.changePage = (delta) => {
        const newPage = currentPage + delta;
        if (newPage >= 1 && newPage <= chapter.pages) {
            currentPage = newPage;
            const img = document.getElementById('mangaPage');
            img.src = `${baseImageUrl}${chapter.id}/${currentPage}.jpg`;
            document.getElementById('pageCounter').innerText = `Página ${currentPage} / ${chapter.pages}`;
        }
    };
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