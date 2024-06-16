document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('lpiChart').getContext('2d');
    const lpiData = {
        labels: ['2007', '2010', '2012', '2014', '2016', '2018', '2023'],
        datasets: [
            {
                label: 'LPI Puanı',
                data: [3.15, 3.22, 3.51, 3.50, 3.42, 3.15, 3.4],
                borderColor: '#ff6384',
                fill: false
            },
            {
                label: 'Gümrük Puanı',
                data: [3, 2.82, 3.22, 3.23, 3.18, 2.71, 3],
                borderColor: '#36a2eb',
                fill: false
            },
            {
                label: 'Altyapı Puanı',
                data: [2.94, 3.08, 3.62, 3.53, 3.49, 3.21, 3.40],
                borderColor: '#cc65fe',
                fill: false
            },
            {
                label: 'Uluslararası Gönderiler Puanı',
                data: [3.07, 3.15, 3.38, 3.18, 3.41, 3.06, 3.40],
                borderColor: '#ffce56',
                fill: false
            },
            {
                label: 'Lojistik Yeterlilik Puanı',
                data: [3.29, 3.23, 3.52, 3.64, 3.31, 3.05, 3.50],
                borderColor: '#4bc0c0',
                fill: false
            },
            {
                label: 'Skoru Takip ve İzleme Puanı',
                data: [3.27, 3.09, 3.54, 3.77, 3.39, 3.23, 3.50],
                borderColor: '#9966ff',
                fill: false
            },
            {
                label: 'Zamanındalık Puanı',
                data: [3.38, 3.94, 3.87, 3.68, 3.75, 3.63, 3.60],
                borderColor: '#ff9f40',
                fill: false
            }
			
        ]
    };

    new Chart(ctx, {
        type: 'line',
        data: lpiData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Türkiye LPI Skorları (2007-2023)'
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    suggestedMin: 2,
                    suggestedMax: 5
                }
            }
        }
    });
});
