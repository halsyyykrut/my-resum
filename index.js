 const themeToggleBtn = document.getElementById('theme-toggle');
        const bodyNode = document.body;

        themeToggleBtn.addEventListener('click', () => {
            // Переключаем класс на узле body
            bodyNode.classList.toggle('dark-theme');
            
            // Меняем текст кнопки
            if (bodyNode.classList.contains('dark-theme')) {
                themeToggleBtn.textContent = '☀️ Светлая тема';
            } else {
                themeToggleBtn.textContent = '🌙 Темная тема';
            }
        });
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('visible');
});