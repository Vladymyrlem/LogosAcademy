function links_color() {


var links = document.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {

    var a = links[i];

    var href = a.getAttribute('href');

    if (!href) continue; // нет атрибута

    if (href.indexOf('://') === -1) continue; // без протокола

    if (href.indexOf('http://internal.com') === 0) continue; // внутренняя

    a.classList.add('external-red');
}
}