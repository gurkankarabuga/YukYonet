function onClickMenu() {
    // Menü animasyonları
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");

    // RSS beslemelerini yükleme
    $.ajax({
        url: 'https://api.rss2json.com/v1/api.json',
        method: 'GET',
        dataType: 'json',
        data: {
            rss_url: 'https://https://www.ntv.com.tr/ekonomi.rss',
            api_key: 'YOUR_API_KEY', // Burada geçici bir API anahtarı kullanabilirsiniz
            count: 5
        },
        success: function(response) {
            if (response.status === 'ok') {
                var output = '<ul>';
                $.each(response.items, function(index, item) {
                    output += `<li><a href="${item.link}" target="_blank">${item.title}</a><br><small>${item.description}</small></li>`;
                });
                output += '</ul>';
                $('#rss-feeds').html(output);
            }
        },
        error: function() {
            $('#rss-feeds').html('<p>Haberler yüklenemedi. Lütfen daha sonra tekrar deneyiniz.</p>');
        }
    });
}
