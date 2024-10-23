function initMap() {
    const myMap = new ymaps.Map("map", {
        center: [41.467977, 69.570510],
        zoom: 16
    });

    const myPlacemark = new ymaps.Placemark([41.467977, 69.570510], {
        hintContent: 'Местоположение комплекса',
        balloonContent: 'ЖК Рассвет'
    }, {
        // Настройки иконки метки
        iconLayout: 'default#image',
        iconImageHref: 'https://example.com/my-custom-icon.png', // URL вашей иконки
        iconImageSize: [30, 42], // Размеры иконки
        iconImageOffset: [-15, -42] // Смещение иконки
    });

    myMap.geoObjects.add(myPlacemark);
}
