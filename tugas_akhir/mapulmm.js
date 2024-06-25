var map = L.map('map').setView([-3.2972911, 114.5856057], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var markers = [
    { coords: [-3.2988904, 114.5869155], popup: 'Fakultas Ilmu Social ilmu polik', image: 'fisip.png' },
    { coords: [-3.2988937, 114.5854557], popup: 'Fakultas Keguruan dan Ilmu Pendidikan 1', image: 'fkip1.png' },
    { coords: [-3.2968149, 114.5850060], popup: 'Fakultas Ekonomi Dan Bisnis', image: 'feb.png' },
    { coords: [-3.2979454, 114.5892776], popup: 'Gerbang 1 Universitas Lambung Mangkurat', image: 'GerbangULM.png' },
    { coords: [-3.2984779, 114.5889151], popup: 'KLINIK LMMC', image: 'klinikLMMC.png' },
    { coords: [-3.2989335, 114.5887967], popup: 'Perpustakaan Baru PGSD & PG-PAUD', image: 'perpusatkaanPGSD.png' },
    { coords: [-3.2994069, 114.5889267], popup: 'RUMAH DINAS REKTOR ULM', image: 'rumahdinasrektor.png' },
    { coords: [-3.2973923, 114.5892562], popup: 'Hutan Percontohan Lahan Basah ULM', image: 'hutanULM.png' },
    { coords: [-3.2974144, 114.5887707], popup: 'Gedung Serba Guna (GSG) Universitas Lambung Mangkurat Banjarmasin', image: 'gedungserbaguna.png' },
    { coords: [-3.2966155, 114.5887875], popup: 'Lapangan Tenis ULM', image: 'lapangantenis.png' },
    { coords: [-3.2968678, 114.5882277], popup: 'Lembaga Penjaminan Mutu dan Pengembangan Pembelajaran (LPMPP) Universitas Lambung Mangkurat', image: 'LPMPP.jpg' },
    { coords: [-3.2981189, 114.5882264], popup: 'Indomaret Point ULM', image: 'indomaretulm.png' },
    { coords: [-3.2981061, 114.5880927], popup: 'Koperasi Mahasiswa', image: 'kopma.png' },
    { coords: [-3.2978525, 114.5879297], popup: 'Bank BRI ATM', image: 'bri.png' },
    { coords: [-3.2977053, 114.587758], popup: 'BNI UNLAM', image: 'bni.png' },
    { coords: [-3.2976976, 114.5881311], popup: 'Sekretariat Kampoeng Seni Boedaja Universitas Lambung Mangkurat (KSB ULM)', image: 'KSBULM.png' },
    { coords: [-3.2973496, 114.5868797], popup: 'Open Space Universitas Lambung Mangkurat', image: 'openspace.png' },
    { coords: [-3.2981115, 114.5876905], popup: 'PIK-Ma "BRM" ULM', image: 'PIK.png' },
    { coords: [-3.2982837, 114.587667], popup: 'Kantin ULM', image: 'kantin.png' },
    { coords: [-3.2987101, 114.5878161], popup: 'Kampus II FKIP Universitas Lambung Mangkurat', image: 'fkip2.png' },
    { coords: [-3.2987427, 114.5879684], popup: 'BK UNLAM', image: 'bk.png' },
    { coords: [-3.2987459,114.5859539,21], popup: 'Gedung Micro Teaching FKIP ULM', image: 'microteaching.png' },
    { coords: [-3.2987104,114.5858171,21], popup: 'Lapangan Tumpang Lima FKIP Universitas Lambung Mangkurat', image: 'lapangantumpanglima.png' },
    { coords: [-3.298947,114.5853383,21], popup: 'Sakadomas FKIP ULM', image: 'sakadomas.png' },
    { coords: [-3.2986323,114.5846128,21], popup: 'Sekretariat HIMKI FKIP Universitas Lambung Mangkurat', image: 'HIMKI.png' },
    { coords: [-3.2982576,114.5862544,21], popup: 'Masjid Baitul Hikmah', image: 'masjid.png' },
    { coords: [-3.2980705,114.5845347,21], popup: 'Perpustakaan Pusat ULM', image: 'perpustakaan.png' },
    { coords: [-3.2977621,114.5845697,21], popup: 'UPT Bahasa - ULM', image: 'upt.png' },
    { coords: [-3.2973251,114.5861018,21], popup: 'Kedai Open Space ULM', image: 'kantinos.png' },
    { coords: [-3.2963497,114.5840874,21], popup: 'Lembaga Konsultasi dan Bantuan Hukum (LKBH) Universitas Lambung Mangkurat', image: 'LKH.png' },
    { coords: [-3.2971003,114.5835046,21], popup: 'Gedung Fakultas Hukum ULM / Gedung Baru', image: 'gedunghukum.png' },
    { coords: [-3.2949785,114.58414,21], popup: 'Faculty of Social and Politic -Lecture Building-', image: 'gedungfisip.png' },
    { coords: [-3.2936883,114.5850715,21], popup: 'General Building ULM', image: 'generalbuilding.png' },
    { coords: [-3.2995565,114.585321,21], popup: 'Prodi Pendidikan Komputer FKIP ULM', image: 'pilkom.png' },
    { coords: [-3.2993183,114.5851755,21], popup: 'Bauntung FKIP ULM', image: 'bauntung.png' },
    { coords: [-3.2965767,114.5877466,21], popup: 'Pascasarjana Universitas Lambung Mangkurat', image: 'pascasarjana.jpg ' }
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
