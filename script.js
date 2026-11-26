function toggleCollapse(btnId, contentId) {
    document.getElementById(btnId).addEventListener('click', function() {
        var content = document.getElementById(contentId);
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
}

toggleCollapse('btnHabilidades', 'listaHabilidades');
toggleCollapse('btnFormacao', 'listaFormacao');
