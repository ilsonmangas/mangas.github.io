let currentChapters = [...chaptersData];
let isGridView = true;
let isAscending = false;
const baseImageUrl = 'https://ilsonmangas.github.io/mangas.github.io/caps/';

function renderChapters(chapters) {
    const container = document.getElementById('chaptersList');
    if (!container) return;
    
    if (chapters.length === 0) {
        container.innerHTML = '<div class="no-results">❌ No se encontraron capítulos</div>';
        return;
    }
    
    if (isGridView) {
        container.className = 'chapters-grid';
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
    } else {
        container.className = 'list-view';
        container.innerHTML = chapters.map(chapter => `
            <div class="chapter-card" onclick="viewChapter(${chapter.id})" style="display:flex; margin-bottom:8px;">
                <div class="chapter-cover" style="width:80px; height:100px;">
                    <img src="${baseImageUrl}${chapter.id}/1.jpg" 
                         onerror="this.src='https://via.placeholder.com/80x100?text=Ch.${chapter.number}'"
                         alt="Capítulo ${chapter.number}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div class="chapter-info" style="flex:1; padding:8px;">
                    <div class="chapter-number">📖 Capítulo ${chapter.number}</div>
                    <div class="chapter-title">${chapter.title}</div>
                    <small>📄 ${chapter.pages} páginas | Vol. ${chapter.volume}</small>
                </div>
                <div style="display:flex; align-items:center; padding-right:16px;">
                    <span style="color:#00d4ff;">▶</span>
                </div>
            </div>
        `).join('');
    }
}

function sortChapters() {
    if (isAscending) {
        currentChapters.sort((a, b) => a.number - b.number);
    } else {
        currentChapters.sort((a, b) => b.number - a.number);
    }
}

function viewChapter(id) {
    const chapter = chaptersData.find(c => c.id === id);
    if (chapter) {
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
    sortChapters();
    renderChapters(currentChapters);
}

function setView(gridView) {
    isGridView = gridView;
    document.getElementById('gridViewBtn').classList.toggle('active', gridView);
    document.getElementById('listViewBtn').classList.toggle('active', !gridView);
    renderChapters(currentChapters);
}

function setOrder(ascending) {
    isAscending = ascending;
    sortChapters();
    renderChapters(currentChapters);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    sortChapters();
    renderChapters(currentChapters);
    
    document.getElementById('searchInput').addEventListener('input', searchChapters);
    document.getElementById('gridViewBtn').onclick = () => setView(true);
    document.getElementById('listViewBtn').onclick = () => setView(false);
    document.getElementById('sortSelect').onchange = (e) => setOrder(e.target.value === 'asc');
});

console.log('✅ Blue Lock Manga Web - Modo mosaico/lista activado');
