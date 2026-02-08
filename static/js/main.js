document.addEventListener('DOMContentLoaded', function() {
    // Обработка кнопок заказа
    const orderButtons = document.querySelectorAll('.btn-order');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            
            alert(`Заказ: ${productName}\n\nСвяжитесь с нами:\n📞 +7 920 135-00-41\n✉️ matvey.s1307@gmail.com`);
            
            // Обновляем счетчик корзины
            const cartCount = document.querySelector('.cart-count');
            let count = parseInt(cartCount.textContent) || 0;
            cartCount.textContent = count + 1;
        });
    });
    
    // Плавная прокрутка для меню
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});