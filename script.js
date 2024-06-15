const translations = {
    id: {
        siteTitle: "Rekomendasi Produk Perawatan Kulit",
        aboutTitle: "Tentang Kami",
        aboutDescription: "Kami membantu Anda menemukan bahan perawatan kulit yang paling sesuai dengan jenis dan masalah kulit Anda.",
        quizTitle: "Kuis Perawatan Kulit",
        labelName: "Nama:",
        labelWhatsapp: "Nomor WhatsApp:",
        labelAge: "Usia:",
        labelSkinType: "Jenis Kulit:",
        labelSkinConcerns: "Masalah Kulit:",
        submitButton: "Kirim",
        recommendationsTitle: "Rekomendasi Produk"
    },
    en: {
        siteTitle: "Skincare Product Recommendations",
        aboutTitle: "About Us",
        aboutDescription: "We help you find the most suitable skincare ingredients according to your skin type and concerns.",
        quizTitle: "Skincare Quiz",
        labelName: "Name:",
        labelWhatsapp: "WhatsApp Number:",
        labelAge: "Age:",
        labelSkinType: "Skin Type:",
        labelSkinConcerns: "Skin Concerns:",
        submitButton: "Submit",
        recommendationsTitle: "Product Recommendations"
    }
};

function changeLanguage(language) {
    document.getElementById('site-title').textContent = translations[language].siteTitle;
    document.getElementById('about-title').textContent = translations[language].aboutTitle;
    document.getElementById('about-description').textContent = translations[language].aboutDescription;
    document.getElementById('quiz-title').textContent = translations[language].quizTitle;
    document.getElementById('label-name').textContent = translations[language].labelName;
    document.getElementById('label-whatsapp').textContent = translations[language].labelWhatsapp;
    document.getElementById('label-age').textContent = translations[language].labelAge;
    document.getElementById('label-skin-type').textContent = translations[language].labelSkinType;
    document.getElementById('label-skin-concerns').textContent = translations[language].labelSkinConcerns;
    document.getElementById('submit-button').textContent = translations[language].submitButton;
    document.getElementById('recommendations-title').textContent = translations[language].recommendationsTitle;
}

document.getElementById('skincare-quiz').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const whatsapp = formData.get('whatsapp');
    const age = formData.get('age');
    const skinType = formData.get('skin-type');
    const skinConcerns = formData.getAll('skin-concerns');
    
    const products = recommendProducts(skinType, skinConcerns);
    displayRecommendations(products);
});

function recommendProducts(skinType, skinConcerns) {
    // For simplicity, returning static products. In a real application, this would involve more complex logic and possibly an API call.
    return [
        { step: 'Cleanse', name: 'Cleanser A', description: 'A gentle cleanser for all skin types.' },
        { step: 'Treat', name: 'Serum B', description: 'A serum to treat acne and dark spots.' },
        { step: 'Protect', name: 'Sunscreen C', description: 'A sunscreen to protect your skin from UV rays.' }
    ];
}

function displayRecommendations(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.step}</h3>
            <p><strong>${product.name}</strong></p>
            <p>${product.description}</p>
        `;
        productList.appendChild(productDiv);
    });
}
