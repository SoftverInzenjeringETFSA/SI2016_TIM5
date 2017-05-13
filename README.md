# Konferencija - chair programme

Za korištenje Embera, potrebno je izvršiti sljedeće korake:
- instalirati node.js, npm, i ember cli
- projekat se pokreće sa ember server

<br><br>
Za korištenje Springa i baze, potrebno je izvršiti sljedeće korake:
- instalirati Eclipse Neon.3, te putem Eclipse Marketplace-a instalirati: Spring IDE i Spring Tools Suite
- instalirati MySql
- za bazu podataka, potrebno je importovati init.sql skriptu i keirati usera sa podacima - username:EtfSI2016 i password:2016SIEtf kojem je potrebno dodijeliti sve privilegije


<br><br>
Potrebna dokumentacija se nalazi u folderu <i>Dokumentacija</i>
<br><br>
Trenutno je završen modul za informisanje i čitav frontend je smješten u folderu Implementacija/chair-programme. Postavljene su rute, a potrebno je omogućiti login na sistem za različite korisnike.
<br><br>
Što se tiče backenda, smješten je u folderu Implementacija/chair-programme-be. Kreirani su svi modeli i DocumentsController kojem je namjena da omogući prikaz svih dokumenata dostupnih za pregledanje od strane recenzenta. (Registrovani user treba da izvrši upload dokumenta za koji želi da se pregleda). Također, sa rutom {id} potrebno je da se izvrši download dokumenta unesenog id-a.
Za pokretanje aplikacije u Eclipse, odabrati Spring Boot App.
