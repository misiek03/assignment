# Task 2 – Be opinionated

Poniżej krótko opiszę dwa projekty, nad którymi pracowałem. Jeden uważam za dobrze dopracowany, drugi daje sporo przestrzeni do dalszego rozwoju i ulepszeń.

---

## Projekt 1 – [teyli.eu](https://teyli.eu) – „Ten dopracowany”

### Kontekst
Komercyjny sklep internetowy z bielizną oparty na PrestaShop 8.1 i motywie Panda. Moim głównym zadaniem była najpierw migracja z przestarzałej wersji 1.6 a później liczne zmiany wizualne i funkcyjne, w skrócie dostosowanie działania sklepu pod konkretne potrzeby biznesowe. Praca wyglądała tak, że dostawałem czasem mniej, czasem bardziej konkretne zadania, często też samemu wpadając na różne pomysły.

### Co działa dobrze?
- **Zoptymalizowana struktura produktów** – każda wersja kolorystyczna jako osobny produkt zwiększa widoczność SEO i poprawia UX w kategoriach.
- **Customowy system kompletów oraz prezentacji wariantów** – stworzyłem mechanizm, który wyświetla 2 powiązane produkty na jednej stronie i kolejny który łączy produkty w różnych kolorach jako "warianty" i wyświetla je w formie kolorowych znaczników (takie opcje nie były do "wyklikania")
- **Dobre decyzje SEO i techniczne** – Friendly URL-e, lazy loading w kategoriach, meta tagi, hreflangi, wymagania WCAG 2.1 i inne.
- **Wydajność i stabilność** – zadbałem o regularne backupy, cacheowanie bazy danych oraz jej regularne czyszczenie (za pomocą cron jobs).

### Dlaczego jestem z tego dumny?
- Przedewszystkim poświęciłem na niego sporo czasu oraz nauczyłem się wielu nowych rzeczy
- Sklep działa stabilnie, przyciągnął więcej klientów i jest szybki mimo ograniczeń PrestaShop.
- Udało mi się wdrożyć niestandardowe rozwiązania bez łamania kompatybilności platformy.
- Przy tym projekcie nie raz napotykały mnie jakieś "ograniczenia CMS'a", gdzie musiałem wpadać na niestandardowe rozwiązania i wykazać się cierpliwością.

---

## Projekt 2 – [korepetycje-swb.com](https://korepetycje-swb.com) – „Ten, który ciągle się rozwija”

### Kontekst
Platforma korepetycyjna rozwijana we dwie osoby – zbudowana przy użyciu **Next.js (React)**, **Tailwind CSS**, **TypeScript** i **Supabase**.  
Celem było stworzenie nowoczesnej, lekkiej i łatwej w rozwoju platformy do umawiania lekcji z korepetytorami.

### Obecnie dostępne funkcje:
- Strona główna z formularzem umawiania lekcji.
- Statyczny blog (CMS oparty o Supabase).

### Co już zostało zrobione (czeka na wdrożenie):
- **Dashboard ucznia i korepetytora** – pokazuje umówione lekcje, profil, historię.
- **System dostępności i rezerwacji**:
  - Korepetytor może ustawić dostępne dni i godziny.
  - Uczeń umawia się przez **kalendarz**, wybierając jeden z wolnych terminów.
- **Logika backendowa rezerwacji i obsługa konfliktów czasowych.**

### Planowane funkcje:
- **System płatności** (np. Stripe) z poziomu dashboardu.
- Powiadomienia e-mail i SMS (np. rezerwacja, odwołanie, przypomnienie).

- ## Co można by poprawić

- **Większe rozdzielenie logiki od UI** – obecnie część logiki (np. dotycząca formularzy, rezerwacji czy interakcji z Supabase) znajduje się bezpośrednio w komponentach React. W przyszłości warto przenieść tę logikę do osobnych hooków, helperów czy modułów, aby ułatwić rozwój i testowanie.
- **Modularne API** – część funkcjonalności (np. zarządzanie rezerwacjami, dostępnością) mogłaby być zaimplementowana jako zestaw osobnych endpointów.
- **Brak testów automatycznych** – wszystkie testy są obecnie manualne. Wprowadzenie testów jednostkowych i e2e zwiększyłoby niezawodność projektu, co przy wprowadzeniu płatności będzie niezbędne.

---

## Wnioski

Każdy z projektów dał mi inne doświadczenie.

W **Teyli** rozwijałem sklep oparty na PrestaShop, pracując w złożonym ekosystemie modułów, motywów i danych. Skupiłem się na dopracowaniu UI i optymalizacji frontendu czy samej bazy danych

Z kolei projekt **Korepetycje SWB** pozwolił mi od zera zaplanować architekturę aplikacji, przetestować nowoczesny stack i przemyśleć, jak projektować funkcje z myślą o przyszłym rozwoju. Dobrze było zobaczyć, jak nawet prosta aplikacja może z czasem stać się bardziej złożonym systemem.
