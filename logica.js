const translations = {
    en: {
        title: "FreshCan Fruits",
        subtitle: "Experience the taste of freshly picked fruits, anytime, anywhere.",
        learnMore: "Learn More",
        peaches: "Fruits in Syrup",
        peachesIngredients: "Ingredients: Pineapple, grapes, apple, peach, cherry, syrup",
        pineapples: "Fruits in Syrup",
        pineapplesIngredients: "Ingredients: Pineapple, grapes, apple, peach, cherry, syrup",
        mixedFruits: "Fruits in Natural Juice",
        mixedFruitsIngredients: "Ingredients: Pineapple, apple, peach, cherry, orange juice",
        berries: "Peaches in Syrup",
        berriesIngredients: "Ingredients: Peach, water, added sugars",
        whyChoose: "Why Choose FreshCan Fruits?",
        taste: "Unmatched Taste",
        tasteDescription: "Our fruits are picked at peak ripeness and canned within hours to lock in flavor.",
        freshness: "Year-Round Freshness",
        freshnessDescription: "Enjoy your favorite fruits any time of the year, regardless of the season.",
        quality: "Premium Quality",
        qualityDescription: "We use only the finest fruits and maintain strict quality control standards.",
        title_contac: "Contact us through our social networks"
    },
    es: {
        title: "Frutas en Almíbar",
        subtitle: "Experimenta el sabor de frutas recién cosechadas, en cualquier momento y lugar.",
        learnMore: "Más Información",
        peaches: "Frutas en Almíbar",
        peachesIngredients: "Ingredientes: Piña, uvas, manzana, durazno, cereza y jarabe",
        pineapples: "Frutas en Almíbar",
        pineapplesIngredients: "Ingredientes: Piña, uvas, manzana, durazno, cereza y jarabe",
        mixedFruits: "Frutas en Jugo Natural",
        mixedFruitsIngredients: "Ingredientes: Piña, manzana, durazno, cereza, jugo de naranja",
        berries: "Duraznos en Almíbar",
        berriesIngredients: "Ingredientes: Durazno, agua, azúcar añadida",
        whyChoose: "¿Por qué elegir FreshCan Fruits?",
        taste: "Sabor Inigualable",
        tasteDescription: "Nuestras frutas son recogidas en su punto de madurez y enlatadas en pocas horas para conservar su sabor.",
        freshness: "Frescura Todo el Año",
        freshnessDescription: "Disfruta de tus frutas favoritas en cualquier época del año, sin importar la temporada.",
        quality: "Calidad Premium",
        qualityDescription: "Usamos solo las mejores frutas y mantenemos estrictos estándares de control de calidad.",
        title_contac: "Contactanos por nuestras Redes Sociales"
    }
};


let currentLanguage = 'en';

function translatePage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;
    currentLanguage = lang;
    updateToggleButton();
}

function updateToggleButton() {
    const toggleButton = document.getElementById('languageToggle');
    toggleButton.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('languageToggle');
    toggleButton.addEventListener('click', () => {
        const newLang = currentLanguage === 'en' ? 'es' : 'en';
        translatePage(newLang);
    });

    // Initialize the page with the default language (English)
    translatePage('en');
});

