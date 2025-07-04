// main.js
function copyIP() {
    const ip = "omega.mclan.ru";
    navigator.clipboard.writeText(ip)
        .then(() => {
            // Создаем кастомное уведомление вместо alert
            const notification = document.createElement('div');
            notification.innerHTML = `
                <div class="notification">
                    <i class="fas fa-check-circle me-2"></i>
                    IP сервера скопирован: <strong>${ip}</strong>
                </div>
            `;
            notification.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #4e9a3a;
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                z-index: 10000;
                animation: fadeIn 0.3s, fadeOut 0.3s 2.7s forwards;
            `;
            document.body.appendChild(notification);
            
            // Удаляем уведомление через 3 секунды
            setTimeout(() => {
                notification.remove();
            }, 3000);
        })
        .catch(err => console.error("Ошибка копирования IP:", err));
}

// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Добавляем стили для анимации уведомления
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
    }
`;
document.head.appendChild(style);