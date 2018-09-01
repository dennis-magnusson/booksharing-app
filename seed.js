const mongoose = require('mongoose'),
      Book     = require('./models/book');


const data = [
    {
        title: "Otavan Matematiikka MAY1",
        subtitle: "Luvut ja lukujonot",
        image: "https://kauppa.jamera.net/tuotekuvat/suuri_3148.jpg",
        series: "",
        course: "MAY1",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Yhteinen Matematiikka",
            category: "Matematiikka"
        }
    },
    {
        title: "Juuri 2",
        subtitle: "Polynomifunktiot ja -yhtälöt",
        image: "https://kauppa.jamera.net/tuotekuvat/suuri_3168.jpg",
        series: "Juuri",
        course: "MAA2",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Pitkä Matematiikka",
            category: "Matematiikka"
        }
    },
    {
        title: "Juuri 3",
        subtitle: "Geometria",
        image: "https://kauppa.jamera.net/tuotekuvat/suuri_3414.jpg",
        series: "Juuri",
        course: "MAA3",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Pitkä Matematiikka",
            category: "Matematiikka"
        }
    },
    {
        title: "Juuri 4",
        subtitle: "Vektorit",
        image: "https://kauppa.jamera.net/tuotekuvat/suuri_3431.jpg",
        series: "Juuri",
        course: "MAA4",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Pitkä Matematiikka",
            category: "Matematiikka"
        }
    },
    {
        title: "Juuri 5",
        subtitle: "Analyyttinen geometria",
        image: "https://kauppa.jamera.net/tuotekuvat/suuri_3494.jpg",
        series: "Juuri",
        course: "MAA5",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Pitkä Matematiikka",
            category: "Matematiikka"
        }
    },
    {
        title: "Juuri 6",
        subtitle: "Derivaatta",
        image: "https://kauppa.jamera.net/tuotekuvat/suuri_2998.jpg",
        series: "Juuri",
        course: "MAA6",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Pitkä Matematiikka",
            category: "Matematiikka"
        }
    },
    {
        title: "Juuri 7",
        subtitle: "Trigonometriset funktiot",
        image: "https://kauppa.jamera.net/tuotekuvat/suuri_3556.jpg",
        series: "Juuri",
        course: "MAA7",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Pitkä Matematiikka",
            category: "Matematiikka"
        }
    },
    {
        title: "Juuri 8",
        subtitle: "Juuri- ja logaritmifunktiot",
        image: "",
        series: "Juuri",
        course: "MAA8",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Pitkä Matematiikka",
            category: "Matematiikka"
        }
    },
    {
        title: "Juuri 9",
        subtitle: "Integraalilaskenta",
        image: "",
        series: "Juuri",
        course: "MAA9",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Pitkä Matematiikka",
            category: "Matematiikka"
        }
    },
    {
        title: "Juuri 10",
        subtitle: "Todennäköisyys ja tilastot",
        image: "",
        series: "Juuri",
        course: "MAA10",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Pitkä Matematiikka",
            category: "Matematiikka"
        }
    },
    {
        title: "Juuri 11",
        subtitle: "Lukuteoria ja todistaminen",
        image: "",
        series: "Juuri",
        course: "MAA11",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Pitkä Matematiikka",
            category: "Matematiikka"
        }
    },
    {
        title: "Juuri 12",
        subtitle: "Algoritmit matematiikassa",
        image: "",
        series: "Juuri",
        course: "MAA12",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Pitkä Matematiikka",
            category: "Matematiikka"
        }
    },
    {
        title: "Juuri 13",
        subtitle: "Differentiaali- ja integraalilaskennan jatkokurssi",
        image: "",
        series: "Juuri",
        course: "MAA13",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Pitkä Matematiikka",
            category: "Matematiikka"
        }
    },
    {
        title: "Juuri Kertaus",
        subtitle: "",
        image: "",
        series: "Juuri",
        course: "",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Pitkä Matematiikka",
            category: "Matematiikka"
        }
    },
    {
        title: "Bios 1",
        subtitle: "Elämä ja evoluutio",
        image: "",
        series: "Bios",
        course: "BI1",
        lops16: true,
        publisher: "Sanoma Pro",
        subject: {
            name: "Biologia",
            category: "Biologia"
        }
    },
    {
        title: "Bios 2",
        subtitle: "Ekologia ja ympäristö",
        image: "",
        series: "Bios",
        course: "BI2",
        lops16: true,
        publisher: "Sanoma Pro",
        subject: {
            name: "Biologia",
            category: "Biologia"
        }
    },
    {
        title: "Bios 3",
        subtitle: "Solu ja perinnöllisyys",
        image: "",
        series: "Bios",
        course: "BI3",
        lops16: true,
        publisher: "Sanoma Pro",
        subject: {
            name: "Biologia",
            category: "Biologia"
        }
    },
    {
        title: "Bios 4",
        subtitle: "Ihmisen biologia",
        image: "",
        series: "Bios",
        course: "BI4",
        lops16: true,
        publisher: "Sanoma Pro",
        subject: {
            name: "Biologia",
            category: "Biologia"
        }
    },
    {
        title: "Bios 5",
        subtitle: "Biologian sovellutukset",
        image: "",
        series: "Bios",
        course: "BI4",
        lops16: true,
        publisher: "Sanoma Pro",
        subject: {
            name: "Biologia",
            category: "Biologia"
        }
    },
    {
        title: "Geos 1",
        subtitle: "Maailma muutoksessa",
        image: "",
        series: "Geos",
        course: "GE1",
        lops16: true,
        publisher: "Sanoma Pro",
        subject: {
            name: "Maantieto",
            category: "Maantieto"
        }
    },
    {
        title: "Geos 2",
        subtitle: "Sininen planeetta",
        image: "https://kauppa.jamera.net/tuotekuvat/suuri_3250.jpg",
        series: "Geos",
        course: "GE2",
        lops16: true,
        publisher: "Sanoma Pro",
        subject: {
            name: "Maantieto",
            category: "Maantieto"
        }
    },
    {
        title: "Geos 3",
        subtitle: "Yhteinen maailma",
        image: "",
        series: "Geos",
        course: "GE3",
        lops16: true,
        publisher: "Sanoma Pro",
        subject: {
            name: "Maantieto",
            category: "Maantieto"
        }
    },
    {
        title: "Geos 4",
        subtitle: "Geomedia - tutki, osallistu ja vaikuta",
        image: "",
        series: "Geos",
        course: "GE4",
        lops16: true,
        publisher: "Sanoma Pro",
        subject: {
            name: "Maantieto",
            category: "Maantieto"
        }
    },
    {
        title: "Insights Course 1",
        subtitle: "",
        image: "",
        series: "Insights",
        course: "ENA1",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "A-Englanti",
            category: "Englanti"
        }
    },
    {
        title: "Insights Course 2",
        subtitle: "",
        image: "",
        series: "Insights",
        course: "ENA2",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "A-Englanti",
            category: "Englanti"
        }
    },
    {
        title: "Insights Course 3",
        subtitle: "",
        image: "",
        series: "Insights",
        course: "ENA3",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "A-Englanti",
            category: "Englanti"
        }
    },
    {
        title: "Insights Course 4",
        subtitle: "",
        image: "",
        series: "Insights",
        course: "ENA4",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "A-Englanti",
            category: "Englanti"
        }
    },
    {
        title: "Insights Course 5",
        subtitle: "",
        image: "",
        series: "Insights",
        course: "ENA5",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "A-Englanti",
            category: "Englanti"
        }
    },
    {
        title: "Insights Course 6",
        subtitle: "",
        image: "",
        series: "Insights",
        course: "ENA6",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "A-Englanti",
            category: "Englanti"
        }
    },
    {
        title: "Insights Course 7",
        subtitle: "",
        image: "",
        series: "Insights",
        course: "ENA7",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "A-Englanti",
            category: "Englanti"
        }
    },
    {
        title: "Insights Course 8",
        subtitle: "",
        image: "",
        series: "Insights",
        course: "ENA8",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "A-Englanti",
            category: "Englanti"
        }
    },
    {
        title: "Idea 1",
        subtitle: "Johdatus filosofiaan",
        image: "https://kauppa.jamera.net/tuotekuvat/suuri_2999.jpg",
        series: "Idea",
        course: "FI1",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Filosofia",
            category: "Filosofia"
        }
    },
    {
        title: "Idea 2",
        subtitle: "Etiikka",
        image: "",
        series: "Idea",
        course: "FI2",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Filosofia",
            category: "Filosofia"
        }
    },
    {
        title: "Idea 3",
        subtitle: "Yhteiskuntafilosofia",
        image: "",
        series: "Idea",
        course: "FI3",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Filosofia",
            category: "Filosofia"
        }
    },
    {
        title: "Idea 4",
        subtitle: "Tieto, tiede ja todellisuus",
        image: "",
        series: "Idea",
        course: "FI4",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Filosofia",
            category: "Filosofia"
        }
    },
    {
        title: "MAOL-Taulukot",
        subtitle: "Matematiikka, Fysiikka, Kemia",
        image: "https://kauppa.jamera.net/tuotekuvat/suuri_2450.jpg",
        series: "",
        course: "",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "",
            category: ""
        }
    },
    {
        title: "Särmä",
        subtitle: "Suomen kieli ja kirjallisuus",
        image: "https://kauppa.jamera.net/tuotekuvat/suuri_3134.jpg",
        series: "Särmä",
        course: "ÄI",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Äidinkieli",
            category: "Äidinkieli"
        }
    },
    {
        title: "Särmä Kielenhuolto",
        subtitle: "",
        image: "",
        series: "Särmä",
        course: "ÄI",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Äidinkieli",
            category: "Äidinkieli"
        }
    },
    {
        title: "Särmä Tehtäviä 1",
        subtitle: "",
        image: "",
        series: "Särmä",
        course: "ÄI",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Äidinkieli",
            category: "Äidinkieli"
        }
    },
    {
        title: "Särmä Tehtäviä 2",
        subtitle: "",
        image: "",
        series: "Särmä",
        course: "ÄI",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Äidinkieli",
            category: "Äidinkieli"
        }
    },
    {
        title: "Särmä Tehtäviä 3",
        subtitle: "",
        image: "",
        series: "Särmä",
        course: "ÄI",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Äidinkieli",
            category: "Äidinkieli"
        }
    },
    {
        title: "Särmä Tehtäviä 4",
        subtitle: "",
        image: "",
        series: "Särmä",
        course: "ÄI",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Äidinkieli",
            category: "Äidinkieli"
        }
    },
    {
        title: "Särmä Tehtäviä 5",
        subtitle: "",
        image: "",
        series: "Särmä",
        course: "ÄI",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Äidinkieli",
            category: "Äidinkieli"
        }
    },
    {
        title: "Särmä Tehtäviä 6",
        subtitle: "",
        image: "",
        series: "Särmä",
        course: "ÄI",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Äidinkieli",
            category: "Äidinkieli"
        }
    },
    {
        title: "Särmä Tehtäviä 7",
        subtitle: "",
        image: "",
        series: "Särmä",
        course: "ÄI",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Äidinkieli",
            category: "Äidinkieli"
        }
    },
    {
        title: "Särmä Tehtäviä 8",
        subtitle: "",
        image: "",
        series: "Särmä",
        course: "ÄI",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Äidinkieli",
            category: "Äidinkieli"
        }
    },
    {
        title: "Särmä Tehtäviä 9",
        subtitle: "",
        image: "",
        series: "Särmä",
        course: "ÄI",
        lops16: true,
        publisher: "Otava",
        subject: {
            name: "Äidinkieli",
            category: "Äidinkieli"
        }
    },
    {
        title: "Kanta 1",
        subtitle: "Suomalainen yhteiskunta",
        image: "",
        series: "Kanta",
        course: "YH1",
        lops16: true,
        publisher: "Edita",
        subject: {
            name: "Yhteiskuntaoppi",
            category: "Yhteiskuntaoppi"
        }
    },
    {
        title: "Kanta 2",
        subtitle: "Taloustieto",
        image: "",
        series: "Kanta",
        course: "YH2",
        lops16: true,
        publisher: "Edita",
        subject: {
            name: "Yhteiskuntaoppi",
            category: "Yhteiskuntaoppi"
        }
    },
    {
        title: "Kanta 3",
        subtitle: "Suomi, Eurooppa ja muuttuva maailma",
        image: "",
        series: "Kanta",
        course: "YH3",
        lops16: true,
        publisher: "Edita",
        subject: {
            name: "Yhteiskuntaoppi",
            category: "Yhteiskuntaoppi"
        }
    },
    {
        title: "Kanta 4",
        subtitle: "Kansalaisen lakitieto",
        image: "",
        series: "Kanta",
        course: "YH4",
        lops16: true,
        publisher: "Edita",
        subject: {
            name: "Yhteiskuntaoppi",
            category: "Yhteiskuntaoppi"
        }
    },
    {
        title: "Kanta Kertaus",
        subtitle: "Yhteiskuntaopin kertauskirja",
        image: "",
        series: "Kanta",
        course: "",
        lops16: true,
        publisher: "Edita",
        subject: {
            name: "Yhteiskuntaoppi",
            category: "Yhteiskuntaoppi"
        }
    },
    {
        title: "Kaikkien aikojen historia 1",
        subtitle: "Ihminen ympäristön ja yhteiskuntien muutoksessa",
        image: "",
        series: "Kaikkien aikojen historia",
        course: "HI1",
        lops16: true,
        publisher: "Edita",
        subject: {
            name: "Historia",
            category: "Historia"
        }
    },
    {
        title: "Kaikkien aikojen historia 2",
        subtitle: "Kansainväliset suhteet",
        image: "",
        series: "Kaikkien aikojen historia",
        course: "HI2",
        lops16: true,
        publisher: "Edita",
        subject: {
            name: "Historia",
            category: "Historia"
        }
    },
    {
        title: "Kaikkien aikojen historia 3",
        subtitle: "Itsenäisen Suomen historia",
        image: "",
        series: "Kaikkien aikojen historia",
        course: "HI3",
        lops16: true,
        publisher: "Edita",
        subject: {
            name: "Historia",
            category: "Historia"
        }
    },
    {
        title: "Kaikkien aikojen historia 4",
        subtitle: "Eurooppalaisen maailmankuvan kehitys",
        image: "",
        series: "Kaikkien aikojen historia",
        course: "HI4",
        lops16: true,
        publisher: "Edita",
        subject: {
            name: "Historia",
            category: "Historia"
        }
    },
    {
        title: "Kaikkien aikojen historia 6",
        subtitle: "Maailman kulttuurit kohtaavat",
        image: "",
        series: "Kaikkien aikojen historia",
        course: "HI6",
        lops16: true,
        publisher: "Edita",
        subject: {
            name: "Historia",
            category: "Historia"
        }
    },
    
    

    
]

function seedDB(){
  // Remove all campgrounds
  Book.remove({}, function(err){
    if (err) {
      console.log(err);
    }
    console.log("removed books!");
    // Add in new campgrounds
    data.forEach(function(seed){
      Book.create(seed, function(err, book){
        if (err) {
          console.log(err);
        } else {
          console.log("added a book");
          console.log(book);
        }
      });
    });
  });
}

module.exports = seedDB;
