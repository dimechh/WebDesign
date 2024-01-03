function showTab(tabId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(tabId).style.display = 'block';
}