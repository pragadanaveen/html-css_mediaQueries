const options = document.querySelectorAll('.option input[type="radio"]');
const sizeColorSections = document.querySelectorAll('.size-color-selection');
const mostPopularTag = document.querySelector('.most-popular-tag');
const totalPrice = document.querySelector('.total-price');
sizeColorSections[0].classList.remove('hidden');
function updateBorderColor(selectedIndex) {
    document.querySelectorAll('.option').forEach((option, index) => {
        if (index === selectedIndex) {
            option.classList.add('active'); 
        } else {
            option.classList.remove('active'); 
        }
    });
}

options.forEach((option, index) => {
    option.addEventListener('change', () => {
        sizeColorSections.forEach(section => section.classList.add('hidden'));
        updateBorderColor(index);

        if (option.id === "unit2") {
            mostPopularTag.classList.add('visible'); 
            totalPrice.textContent = "Total: $18.00 USD"; 
            sizeColorSections[1].classList.remove('hidden'); 
        } else {
            mostPopularTag.classList.remove('visible'); 
            if (option.id === "unit1") {
                totalPrice.textContent = "Total: $10.00 USD"; 
                sizeColorSections[0].classList.remove('hidden'); 
            } else if (option.id === "unit3") {
                totalPrice.textContent = "Total: $24.00 USD"; 
                sizeColorSections[2].classList.remove('hidden'); 
            }
        }
    });
});
