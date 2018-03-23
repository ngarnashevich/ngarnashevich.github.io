<script type="text/javascript">
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
        // Центр карты, указываем коордианты
        center: [55.74951156899046, 37.53708349999991],
    // Масштаб, тут все просто
    zoom: 16,
    // Отключаем все элементы управления
    controls: []
});

var myGeoObjects = [];

// Наша метка, указываем коордианты
        myGeoObjects = new ymaps.Placemark([55.74951156899046, 37.53708349999991], {
        balloonContentBody: 'Пресненская набережная 12',
        }, {
        iconLayout: 'default#image',
    // Путь до нашей картинки
    iconImageHref: 'img/map.png',
    // Размер по ширине и высоте
    iconImageSize: [70, 103],
    // Смещение левого верхнего угла иконки относительно
    // её «ножки» (точки привязки).
    iconImageOffset: [-4, -125]
});

        var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
    clusterOpenBalloonOnClick: false,
});

clusterer.add(myGeoObjects);
myMap.geoObjects.add(clusterer);
// Отлючаем возможность изменения масштаба
myMap.behaviors.disable('scrollZoom');

}
</script>