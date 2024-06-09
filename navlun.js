function calculateFreight() {
    const transportType = document.getElementById('transportType').value;
    const numPalettes = parseFloat(document.getElementById('numPalettes').value);
    const dimensions = document.getElementById('dimensions').value.split('x').map(Number);
    const grossWeight = parseFloat(document.getElementById('grossWeight').value);
    const pricePerKg = parseFloat(document.getElementById('pricePerKg').value);

    const volumePerPalette = (dimensions[0] * dimensions[1] * dimensions[2]) / 1000000; // cm³'ten m³'e çevir
    const totalVolume = volumePerPalette * numPalettes;
    const totalGrossWeight = grossWeight * numPalettes;

    let volumeWeight;
    switch (transportType) {
        case 'road':
            volumeWeight = totalVolume * 333;
            break;
        case 'air':
            volumeWeight = totalVolume * 167;
            break;
        case 'sea':
            volumeWeight = totalVolume * 1000;
            break;
        default:
            volumeWeight = 0;
    }

    const chargeableWeight = Math.max(volumeWeight, totalGrossWeight);
    const totalCost = chargeableWeight * pricePerKg;

    document.getElementById('result').innerHTML = `
        <p>Taşıma Şekli: ${transportType.charAt(0).toUpperCase() + transportType.slice(1)}</p>
        <p>Gönderilecek Palet Sayısı: ${numPalettes}</p>
        <p>Toplam Hacim: ${totalVolume.toFixed(2)} m³</p>
        <p>Toplam Brüt Ağırlık: ${totalGrossWeight.toFixed(2)} kg</p>
        <p>Ücretlendirilebilir Ağırlık: ${chargeableWeight.toFixed(2)} kg</p>
        <p>Toplam Maliyet: $${totalCost.toFixed(2)}</p>
    `;
}
