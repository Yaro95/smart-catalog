document.addEventListener('DOMContentLoaded', function() {
    // Пример данных с Google Таблиц (замени на данные с API)
    const apartmentsData = {
        "Этаж 1": [
            { "номер": 101, "площадь": "45м²", "цена": "4 млн", "статус": "Свободна" },
            { "номер": 102, "площадь": "55м²", "цена": "5 млн", "статус": "Продана" }
        ],
        "Этаж 2": [
            { "номер": 201, "площадь": "40м²", "цена": "3.5 млн", "статус": "Свободна" },
            { "номер": 202, "площадь": "60м²", "цена": "6 млн", "статус": "Свободна" }
        ]
    };

    const floorsDiv = document.getElementById('floors');
    const apartmentList = document.getElementById('apartment-list');
    const apartmentsSection = document.getElementById('apartments');

    // Создаем кнопки этажей
    Object.keys(apartmentsData).forEach(floor => {
        const button = document.createElement('button');
        button.textContent = floor;
        button.addEventListener('click', () => loadApartments(floor));
        floorsDiv.appendChild(button);
    });

    // Функция для загрузки квартир по выбранному этажу
    function loadApartments(floor) {
        apartmentsSection.style.display = 'block';
        apartmentList.innerHTML = ''; // Очищаем список

        apartmentsData[floor].forEach(apartment => {
            const div = document.createElement('div');
            div.textContent = `Квартира №${apartment.номер}: ${apartment.площадь}, Цена: ${apartment.цена}, Статус: ${apartment.статус}`;
            apartmentList.appendChild(div);
        });
    }
});
