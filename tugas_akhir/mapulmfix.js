var map = L.map('map').setView([-3.2972911, 114.5856057], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var markers = [
    { coords: [-3.2988904, 114.5869155], popup: 'Fakultas Ilmu Sosial Ilmu Politik', image: 'fisip.png' },
    { coords: [-3.2988937, 114.5854557], popup: 'Fakultas Keguruan dan Ilmu Pendidikan 1', image: '' },
    { coords: [-3.2968149, 114.5850060], popup: 'Fakultas Ekonomi Dan Bisnis', image: 'road3.jpg' },
    { coords: [-3.2979454, 114.5892776], popup: 'Gerbang 1 Universitas Lambung Mangkurat', image: 'road3.jpg' },
    { coords: [-3.2984779, 114.5889151], popup: 'KLINIK LMMC', image: 'road3.jpg' },
    { coords: [-3.2989335, 114.5887967], popup: 'Perpustakaan Baru PGSD & PG-PAUD', image: 'road3.jpg' },
    { coords: [-3.2994069, 114.5889267], popup: 'RUMAH DINAS REKTOR ULM', image: 'road3.jpg' },
    { coords: [-3.2973923, 114.5892562], popup: 'Hutan Percontohan Lahan Basah ULM', image: 'road3.jpg' },
    { coords: [-3.2974144, 114.5887707], popup: 'Gedung Serba Guna (GSG) Universitas Lambung Mangkurat Banjarmasin', image: 'road3.jpg' },
    { coords: [-3.2966155, 114.5887875], popup: 'Lapangan Tenis ULM', image: 'road3.jpg' },
    { coords: [-3.2968678, 114.5882277], popup: 'Lembaga Penjaminan Mutu dan Pengembangan Pembelajaran (LPMPP) Universitas Lambung Mangkurat', image: 'road3.jpg' },
    { coords: [-3.2981189, 114.5882264], popup: 'Indomaret Point ULM', image: 'road3.jpg' },
    { coords: [-3.2981061, 114.5880927], popup: 'Koperasi Mahasiswa', image: 'road3.jpg' },
    { coords: [-3.2978525, 114.5879297], popup: 'Bank BRI ATM', image: 'road3.jpg' },
    { coords: [-3.2977053, 114.587758], popup: 'BNI UNLAM', image: 'road3.jpg' },
    { coords: [-3.2976976, 114.5881311], popup: 'MAKOSAT MENWA ULM', image: '' },
    { coords: [-3.2973496, 114.5868797], popup: 'Open Space Universitas Lambung Mangkurat', image: '' },
    { coords: [-3.2981115, 114.5876905], popup: 'PIK-Ma "BRM" ULM', image: '' },
    { coords: [-3.2982837, 114.587667], popup: 'Kantin ULM', image: '' },
    { coords: [-3.2987101, 114.5878161], popup: 'Kampus II FKIP Universitas Lambung Mangkurat', image: '' },
    { coords: [-3.2987427, 114.5879684], popup: 'BK UNLAM', image: '' },
    { coords: [-3.2988233,114.5862866,19.75], popup: 'Program Studi Geografi', image: '' },
    { coords: [-3.2987459,114.5859539,21], popup: 'Gedung Micro Teaching FKIP ULM', image: '' },
    { coords: [-3.2987104,114.5858171,21], popup: 'Lapangan Tumpang Lima FKIP Universitas Lambung Mangkurat', image: '' },
    { coords: [-3.298947,114.5853383,21], popup: 'Sakadomas FKIP ULM', image: '' },
    { coords: [-3.2986323,114.5846128,21], popup: 'Sekretariat HIMKI FKIP Universitas Lambung Mangkurat', image: '' },
    { coords: [-3.2982576,114.5862544,21], popup: 'Masjid Baitul Hikmah', image: '' },
    { coords: [-3.2980705,114.5845347,21], popup: 'Perpustakaan Pusat ULM', image: '' },
    { coords: [-3.2977621,114.5845697,21], popup: 'UPT Bahasa - ULM', image: '' },
    { coords: [-3.2975822,114.5852435,21], popup: 'Lembaga Penjamin Mutu Universitas Lambung Mangkurat', image: '' },
    { coords: [-3.2973251,114.5861018,21], popup: 'Kedai Open Space ULM', image: '' },
    { coords: [-3.2963497,114.5840874,21], popup: 'Lembaga Konsultasi dan Bantuan Hukum (LKBH) Universiatas Lambung Mangkurat', image: '' },
    { coords: [-3.2971003,114.5835046,21], popup: 'Gedung Fakultas Hukum ULM / Gedung Baru', image: '' },
    { coords: [-3.2977543,114.5827696,21], popup: 'Gedung Utama Fakultas Hukum ULM / Gedung A', image: '' },
    { coords: [-3.2949785,114.58414,21], popup: 'Faculty of Social and Politic -Lecture Building-', image: '' },
    { coords: [-3.2936883,114.5850715,21], popup: 'General Building ULM', image: '' },
    { coords: [-3.2995565,114.585321,21], popup: 'Prodi Pendidikan Komputer FKIP ULM', image: '' },
    { coords: [-3.2995076,114.5852486,21], popup: 'Labkom PILKOM', image: '' },
    { coords: [-3.2993183,114.5851755,21], popup: 'Bauntung FKIP ULM', image: '' },
    { coords: [-3.2965767,114.5877466,21], popup: 'Pascasarjana Universitas Lambung Mangkurat', image: '' },
];

markers.forEach(function(marker) {
    var popupContent = `<b>${marker.popup}</b><br>`;
    if (marker.image) {
        popupContent += `<img src="${marker.image}" class="popup-image" style="cursor:pointer;" onclick="showFullScreen('${marker.image}')">`;
    }
    L.marker(marker.coords).addTo(map).bindPopup(popupContent);
});

var circle = L.circle([-3.2972911, 114.5856057], {
    color: 'white',
    fillColor: '#FFFFFF',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map); 
