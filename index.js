// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Handle contact form submission
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form handling logic here
    console.log('Form submitted');
});

// Yıldızları oluştur
function createStars() {
    // Tüm sayfa için yıldız container'ı
    const backgroundStars = document.createElement('div');
    const leftSide = document.createElement('div');
    const rightSide = document.createElement('div');
    
    // Ana arka plan container'ı
    backgroundStars.style.cssText = `
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
        overflow: hidden;
    `;
    
    // Kenar containerları
    leftSide.style.cssText = 'position: fixed; left: 0; top: 0; width: 15%; height: 100%; z-index: 0;';
    rightSide.style.cssText = 'position: fixed; right: 0; top: 0; width: 15%; height: 100%; z-index: 0;';
    
    document.body.appendChild(backgroundStars);
    document.body.appendChild(leftSide);
    document.body.appendChild(rightSide);

    // Tüm arka plan için 500 yıldız ekle
    for (let i = 0; i < 500; i++) {
        const star = createStar();
        backgroundStars.appendChild(star);
    }

    // Kenarlara ekstra yıldızlar ekle (her kenara 120)
    for (let i = 0; i < 120; i++) {
        const leftStar = createStar();
        const rightStar = createStar();
        
        leftSide.appendChild(leftStar);
        rightSide.appendChild(rightStar);
    }
}

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Rastgele boyut
    const sizes = ['small', 'medium', 'large'];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    star.classList.add(randomSize);
    
    // Rastgele stil (dolu veya çerçeve)
    const isOutlined = Math.random() > 0.6;
    star.classList.add(isOutlined ? 'outlined' : 'filled');
    
    // Rastgele pozisyon
    const randomCluster = Math.random() > 0.7;
    let xPos, yPos;
    
    if (randomCluster) {
        const clusterCenter = Math.random() * 100;
        xPos = clusterCenter + (Math.random() - 0.5) * 20;
        yPos = Math.random() * 100;
    } else {
        xPos = Math.random() * 100;
        yPos = Math.random() * 100;
    }
    
    star.style.left = `${xPos}%`;
    star.style.top = `${yPos}%`;
    
    // Rastgele animasyon
    star.style.animation = `starGlow ${2 + Math.random() * 3}s infinite alternate`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    
    return star;
}

// Sayfa yüklendiğinde yıldızları oluştur
document.addEventListener('DOMContentLoaded', createStars);

// Pencere yeniden boyutlandırıldığında yıldızları yeniden oluştur
window.addEventListener('resize', () => {
    document.querySelectorAll('.star').forEach(star => star.remove());
    createStars();
});