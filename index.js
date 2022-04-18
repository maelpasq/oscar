window.onscroll = function () {
  if(document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").className = "scroll-active";
    document.getElementById("hero-banner").className = "scroll-active";
  } else {
    document.getElementById("navbar").className = "";
    document.getElementById("hero-banner").className = "";
  }
}

let date1 = new Date();

let dateLocale = date1.toLocaleString('fr-FR',{
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

document.getElementById('date').innerHTML = 'on est le ' + dateLocale;

let hour = new Date();

let hourLocale = hour.toLocaleString('fr-FR',{
  hour: 'numeric',
  minute: 'numeric'
});

document.getElementById('hours').innerHTML = 'il est ' + hourLocale;