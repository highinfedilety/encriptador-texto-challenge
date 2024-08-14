// Script to apply dark/bright mode based on system preference.

function applyTheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

applyTheme();