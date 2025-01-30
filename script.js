document.addEventListener('DOMContentLoaded', function() {
    // Generate random discount between 10% and 50%
    const discount = Math.floor(Math.random() * 41) + 10; // 41 possible numbers (10-50)
    
    // Generate random promo code
    const promoCode = generatePromoCode();
    
    // Calculate expiry time (24 hours from now)
    const expiryDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    
    // Update DOM elements
    document.getElementById('discountAmount').textContent = `${discount}% OFF`;
    document.getElementById('promoCode').textContent = promoCode;
    document.getElementById('expiryTime').textContent = `Valid until: ${expiryDate.toLocaleDateString()} ${expiryDate.toLocaleTimeString()}`;
});

function generatePromoCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}