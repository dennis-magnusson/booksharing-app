const mongoose = require('mongoose'),
      Book     = require('./models/book');


const data = [
    {
        title: "Otavan Matematiikka MAY1",
        subtitle: "Luvut ja lukujonot",
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
