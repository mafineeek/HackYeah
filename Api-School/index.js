const fs = require('fs');
const faker = require('faker');
const express = require('express');
const app = express();
const port = 8080;
// Function to generate a random comment
function generateComment() {
  const comments = [
    'Technikum to miejsce, gdzie zdobyłem wiele cennych umiejętności technicznych, które teraz wykorzystuję w swojej pracy.',
    'Bardzo podoba mi się atmosfera w technikum - wszyscy są tutaj bardzo pomocni i przyjaźni.',
    'Jestem zadowolony z wyboru technikum, ponieważ pozwoliło mi to lepiej zrozumieć moje przyszłe zainteresowania zawodowe.',
    'Bardzo cenię sobie praktyczne zajęcia, które odbywają się w technikum - to świetna nauka na konkretnych projektach.',
    'Jednym z plusów technikum jest możliwość zdobycia certyfikatów branżowych, które są przydatne na rynku pracy.',
    'Nauczyciele w technikum są bardzo zaangażowani i kompetentni.',
    'Często organizowane są interesujące wyjścia edukacyjne, które poszerzają naszą wiedzę poza salą lekcyjną.',
    'Jednak czasami ilość pracy domowej może być przytłaczająca, szczególnie w okresach sesji.',
    'Bycie w technikum wymaga zaangażowania i samodyscypliny, ale warto to poświęcenie.',
    'Technikum to doskonałe miejsce dla tych, którzy chcą specjalizować się w określonej branży technicznej.'
  ];
  return comments[Math.floor(Math.random() * comments.length)];
}

function Patron(){
 const available = [
  "Jana Pawła II",
  "gen. Władysława Sikorskiego",
  "Józefa Piłsudskiego",
  "Kazimierza Wielkiego",
  "Henryka Sienkiewicza",
  "Mikołaja Kopernika",
  "Stefana Wyszyńskiego",
  "Jana III Sobieskiego",
  "Adama Mickiewicza",
  "Władysława Broniszewskiego",
  "Orła Białego",
  "Władysława Reymonta",
  "Wojska Polskiego",
  "Królowej Jadwigi",
  "Jana Kochanowskiego"
 ]

 return available[Math.floor(Math.random() * available.length)];
}

function geratedawards() {
    const comments = [
  'Pierwsze miejsce w konkursie programistycznym na szczeblu krajowym.',
  'Nagroda za innowacyjny projekt z dziedziny robotyki na międzynarodowej wystawie naukowej.',
  'Reprezentacja szkoły w zawodach sportowych i zdobycie złotego medalu w piłce nożnej.',
  'Otrzymanie certyfikatu branżowego potwierdzającego wysokie umiejętności w dziedzinie elektroniki.',
  'Udział w projekcie społecznościowym, który przyniósł korzyści lokalnej społeczności.',
  'Ogłoszenie zwycięzcą konkursu literackiego organizowanego przez literackie stowarzyszenie.',
  'Uczestnictwo w międzynarodowej wymianie uczniowskiej, co przyczyniło się do rozwoju międzykulturowej świadomości.',
  'Nagroda za wybitny wkład w pracę szkolnej drużyny naukowej, która zdobyła pierwsze miejsce na ogólnokrajowej olimpiadzie naukowej.',
  'Organizacja udanej akcji charytatywnej na rzecz potrzebujących, zbierając fundusze na lokalny szpital dziecięcy.',
  'Zdobywanie stażu w renomowanej firmie technicznej i zdobycie praktycznego doświadczenia w dziedzinie informatyki.',
            ];
    return comments[Math.floor(Math.random() * comments.length)];
  }

  function Street() {
    const comments = [
        'ulica Kwiatowa',
        'aleja Słoneczna',
        'plac Wolności',
        'ulica Leśna',
        'ulica Jagodowa',
        'ulica Wiosenna',
        'aleja Chopina',
        'ulica Zielona',
        'ulica Miodowa',
        'ulica Polna',
        'ulica Łąkowa',
        'aleja Gdańska',
        'ulica Wawelska',
        'ulica Staromiejska',
        'plac Ratuszowy',
        'ulica Nadmorska',
        'ulica Lipowa',
        'ulica Sienkiewicza',
        'ulica Orzeszkowa',
        'aleja Piłsudskiego'
            ];
    return comments[Math.floor(Math.random() * comments.length)];
  }

  function City() {
    const comments = [
        'Warszawa',
        'Kraków',
        'Gdańsk',
        'Wrocław',
        'Poznań',
        'Łódź',
        'Szczecin',
        'Katowice',
        'Gdynia',
        'Bydgoszcz',
        'Białystok',
        'Lublin',
        'Częstochowa',
        'Kielce',
        'Toruń',
        'Radom',
        'Sopot',
        'Zakopane',
        'Opole',
        'Rzeszów'
            ];
    return comments[Math.floor(Math.random() * comments.length)];
  }
  
// Generate data for 100 schools
const schools = [];
for (let i = 0; i < 100; i++) {
  const highSchoolType = Math.floor(Math.random() * 10) + 1;
  const school = {
    school_name: Math.floor(Math.random() * 15) + 1 + ' ' +(highSchoolType > 5 ? 'Liceum ogólnokształcące' : 'Technikum ') + ' im. ' + Patron(),
    location: {
      city: City(),
      street_address: Street() + ' ' + Math.floor(Math.random() * 100),
    },
    phone_number: "+48 " + Math.floor(Math.random() * (999999999 - 100000000 + 1)),
    studentCount: Math.floor(Math.random() * 1000) + 199,
    awards: Array.from({ length: Math.floor(Math.random() * 6) }, geratedawards),
    comments: Array.from({ length: Math.floor(Math.random() * 11) + 5 }, generateComment)
  };
  schools.push(school);
}

app.get('/', (req, res) => {    
    res.json({ high_schools: schools });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

// Create a JSON file with the school data
function writetofile() {
    fs.writeFile('high_schools.json', JSON.stringify({ high_schools: schools }, null, 2), (err) => {
        if (err) {
          console.error('Error writing JSON file:', err);
        } else {
          console.log('JSON file "high_schools.json" with 100 schools and comments generated.');
        }
      });
}

//writetofile();