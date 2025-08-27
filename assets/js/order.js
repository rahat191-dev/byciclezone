function openPopup() {
    var productName = document.querySelector('.product-name').textContent;
    document.getElementById('productName').value = productName;
    document.getElementById('popupForm').classList.add('active');
}

function closePopup() {
    document.getElementById('popupForm').classList.remove('active');
}
