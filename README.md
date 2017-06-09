# Konferencija - chair programme

Za korištenje Embera, potrebno je izvršiti sljedeće korake:
- instalirati node.js, npm, i ember cli
- Frontend se pokreće sa komandom 'ember server' u command prompt-u
- Backend se pokreće sa komandom 'mvn clean spring-boot:run' u command prompt-u

<br><br>
Za korištenje Springa i baze, potrebno je izvršiti sljedeće korake:
- instalirati Eclipse Neon.3, te putem Eclipse Marketplace-a instalirati: Spring IDE i Spring Tools Suite
- instalirati MySql
- za bazu podataka, potrebno je importovati tim55.sql skriptu i kreirati korisnika sa podacima:<br />
  * username:EtfSI2016
  * password:2016SIEtf <br />
Kreiranom korisniku potrebno je dodijeliti sve privilegije nad navedenom bazom.
- Za sql bazu tim55.sql korišten je port <b>3307</b>. Konfigurati port baze i servera na vašem računaru da primjenjuje port 3307.

<br><br>
Potrebna dokumentacija se nalazi u folderu <i>Dokumentacija</i>
<br><br>
Završen je kompletan frontend aplikacije i smješten je u folderu </i>Implementacija/chair-programme</i>.
<br><br>
Backend aplikacije je smješten je u folderu <i>Implementacija/chair-programme-be</i>. Kreirani su svi modeli, repozitoriji, kontroleri i potrebni servisi za ispravno implementiranje funkcionalnosti ove aplikacije.

Za pokretanje aplikacije u Eclipse, odabrati Spring Boot App.

Baza podataka je ažurirana u odnosu na model baze podataka prikazane u SRS-u. Dodani su potrebni podaci zahtijevani kao ulazu funkcionalnosti aplikacije. Struktura baze podataka je ostala ista.

Speaker ne spada niti u jednu funkcionalnost koja se trebala implementirati. Nije se morao čuvati u bazi. Kreirane su stranice za dodavanje speakera, ali nisu urađene do kraja, jer to nije bilo potrebno. Zbog toga nije urađena ni sgurnost na stranicu kreiranje speaker-a.

## <b> Funkcionalnost koja nije implementirana (<i>ISSUES</i>)</b>
* Generisanje mailova potvrde/odbijenice dokumenta;

* Slanje korisničkog rada je implementirano, ali prema ERD-u kreiranom u SRS-u. Moguće je slanje rada uz link, te su iz tog razloga obezbijeđena input polja. Na ovaj način je implementirano zbog zahtjevanih atributa unutar tabele <i>Document</i> u bazi podataka. <i>Nije moguć upload fajla sa računara korisnika, iako postoji dugme za to.</i>
