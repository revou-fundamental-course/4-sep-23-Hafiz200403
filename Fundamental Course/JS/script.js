const form = document.getElementById('form');
const sisiInput = document.getElementById('sisi');
const luas = document.getElementById('luas');
const keliling = document.getElementById('keliling');

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    // Ambil panjang sisi dari input
    const sisi = parseFloat(sisiInput.value);

    // Validasi input
    if (isNaN(sisi) || sisi <= 0) {
        alert('Masukkan panjang sisi yang valid.');
        return;
    }

    // Hitung luas dan keliling persegi
    const area = sisi * sisi;
    const perimeter = 4 * sisi;

    // Tampilkan hasil pada halaman
    luas.textContent = area.toFixed(2);
    keliling.textContent = perimeter.toFixed(2);
});

document.querySelector('.reset').addEventListener('click', function () {
    // Hapus hasil perhitungan
    areaResult.textContent = '-';
    perimeterResult.textContent = '';
});
