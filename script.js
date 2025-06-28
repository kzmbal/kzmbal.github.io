document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
        window.open(img.src, '_blank');
    });
});

console.log("Sayfa yüklendi ve galeri aktif!");
