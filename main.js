$(document).ready(function() {
    let envelopeOpened = false;
    
    // Función para crear confeti de corazones
    function createHeartConfetti() {
        const colors = ['❤️', '💕', '💖', '💗', '💓', '💝'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const heart = $('<div class="confetti-heart"></div>');
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                const randomLeft = Math.random() * 100;
                const randomDuration = Math.random() * 2 + 3;
                const randomOffset = (Math.random() - 0.5) * 20;
                
                heart.text(randomColor);
                heart.css({
                    left: randomLeft + 'vw',
                    animationDuration: randomDuration + 's',
                    '--x-offset': randomOffset + 'vw'
                });
                
                $('body').append(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, randomDuration * 1000);
            }, i * 100);
        }
    }
    
    // Abrir sobre
    $('.valentines-day').click(function() {
        if (!envelopeOpened) {
            $(this).addClass('open');
            envelopeOpened = true;
            
            // Crear confeti al abrir
            createHeartConfetti();
            
            // Mostrar la tarjeta después de 1 segundo
            setTimeout(() => {
                $('#card').addClass('show');
            }, 1000);
        }
    });
    
    // Voltear tarjeta
    $('#card').click(function() {
        $(this).toggleClass('flip');
    });
    
    // Personalización del texto (opcional)
    // Puedes modificar estos valores
    const nombreDestinatario = "mi Mundo Eres Tu";
    const nombreRemitente = "De tu Niño";
    
    // Reemplazar [nombre] en el HTML
    $('.two p').each(function() {
        let text = $(this).html();
        text = text.replace('[nombre]', nombreDestinatario);
        text = text.replace('[nombre]', nombreRemitente);
        $(this).html(text);
    });
});
