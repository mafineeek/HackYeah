import React from "react"
import { PageNavigator } from "../components/PageNavigator"
import {
    Box, 
    Text,  
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Heading,
    Accordion,
    AccordionItem,} from "@chakra-ui/react"
export const Disability = () => {
    return (
        <>
        <PageNavigator/>
            <Box>
            <Heading as='h1' marginBottom={5}>Dysfunkcje zdrowotne ograniczające wybór zawodu</Heading>
            <Text textAlign='left' marginBottom={5}>W ocenie przydatności zawodowej ucznia z niepełnosprawnością kluczowe znaczenie ma 
            DIAGNOZA (ocena aktualnego stanu zdrowia) oraz PROGNOZA (przewidywanie ewentualnych 
            pozytywnych lub negatywnych zmian w funkcjonowaniu organizmu).</Text>
            <Text textAlign='left' marginBottom='5'>Najczęściej występujące schorzenia:</Text>
            <Text textAlign='left' marginBottom='5'>
            <Heading as='h3' marginBottom={5} textAlign='left' color='red.400'>Układ Ruchowy:</Heading>
                UKŁAD RUCHOWY – najbardziej wskazane zawody to takie, które nie wymagają chodzenia 
                czy stania, dużego wysiłku fizycznego, ponadto zawody wykonywane w temperaturze 
                pokojowej, wewnątrz pomieszczenia, bez pyłu i wilgoci.
                <UnorderedList>
                <ListItem>
                    WADY POSTAWY – jeśli zostały zniwelowane za pomocą gimnastyki korekcyjnej, 
                    wówczas nie determinują w sposób znaczący wyboru zawodu;
                </ListItem>
                <ListItem>
                    SKRZYWIENIA KRĘGOSŁUPA – skrzywienia II stopnia są przeciwwskazaniem do prac stojących, 
                    chodzących i połączonych z dźwiganiem; skrzywienie III i IV stopnia jest kalectwem i 
                    stanowi przeciwwskazanie do każdej pracy fizycznej – wymaga leczenia szpitalnego i 
                    sanatoryjnego;
                </ListItem>
                <ListItem>
                    PŁASKOSTOPIE – płaskostopie II stopnia stanowi przeciwwskazanie do prac stojących, 
                    chodzących i połączonych z dźwiganiem; III stopień płaskostopia stanowi przeciwwskazanie 
                    do ciężkiej pracy fizycznej lub z elementami stania czy chodzenia;
                </ListItem>
                <ListItem>
                    OGRANICZENIA MOŻLIWOŚCI MANIPULACYJNYCH ZWIĄZANE Z USZKODZENIAMI PALCÓW I DŁONI 
                    ORAZ RUCHOMOŚCI STAWÓW – ograniczenie sprawności rąk i dłoni utrudnia/uniemożliwia 
                    naprawy, montaże, pomiary, sterowanie ręczne; ograniczenie sprawności kończyn dolnych 
                    stanowi przeciwwskazanie do prac związanych z przemieszczaniem się w terenie i w polu 
                    ograniczonym (sterowanie niektórymi zespołami maszyn), naprawą i montażem dużych obiektów.
                </ListItem>
            </UnorderedList>
            </Text>
            <Heading as='h3' marginBottom={5} textAlign='left' color='red.400'>Układ Wzrokowy:</Heading>
            <Text textAlign='left' marginBottom='5'>
                UKŁAD WZROKOWY – w przypadku niektórych zawodów samo noszenie szkieł może 
                stanowić przeciwwskazanie do ich wykonywania (np. praca na rusztowaniach, w dużym zapyleniu, 
                w wysokiej temperaturze).
                <UnorderedList>
                    <ListItem>
                        UCZNIOWIE NIEWIDOMI – w wykonywaniu różnych zadań czynności wzrokowe są rekompensowane przez zmysł słuchu i/lub dotyku, stąd najbardziej wskazanymi zawodami są: muzyk, prawnik, instruktor rehabilitacji, masażysta, filolog, psycholog, informatyk;
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE NIEDOWIDZĄCY (SŁABOWIDZĄCY) – niemożliwe jest pełne skorygowanie wady za pomocą okularów, wzrok jest jednak wykorzystywany do orientacji, kierowania i kontrolowania przebiegu pracy: w przypadku wyboru zawodu ważne jest ustalenie stopnia stabilizacji wady i ewentualnej możliwości jej progresji;
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z KRÓTKOWZROCZNOŚCIĄ (czyli nieostrym widzeniem przedmiotów dalej położonych – korygowanym szkłami minusowymi) – przy dużej krótkowzroczności (powyżej 8 dioptrii) przeciwwskazane są wszelkie zawody wymagające wysiłku fizycznego, prace na wysokości, rusztowaniach; średnia krótkowzroczność (3-6 dioptrii) nie jest przeszkodą w wykonywaniu zawodu elektromechanika, krawca, chemika; zaś w zawodach, w których wymagana jest bardzo duża precyzja, rozróżnianie szczegółów i detali – przeciwwskazana jest nawet mała krótkowzroczność (1-3 dioptrii),
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z NADWZROCZNOŚCIĄ (nieostrym widzeniem przedmiotów z bliska, korygowaną szkłami plusowymi) – przeciwskazane są zawody wymagające dużej precyzji, drobiazgowości, przywiązywania uwagi do detali,
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z ASTYGMATYZMEM (niezbornością widzenia: zniekształconym i nieostrym obrazem w części pola widzenia, korygowaną za pomocą tzw. szkieł cylindrycznych); przeciwwskazane są wszelkie zawody wymagające precyzji, prawidłowej oceny odległości, zawody wymagające pracy na wysokości, obsługi maszyn w ruchu,
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE ZE ŚLEPOTĄ JEDNEGO OKA (jednoocze faktyczne) lub z NIEDOWIDZENIEM JEDNOOCZNYM (jednoocze praktyczne: zaburzona jest ostrość widzenia tylko jednego oka), UCZNIOWIE Z ZEZEM (nieskojarzonymi ruchami gałek ocznych, w efekcie których każde oko odbiera inny obraz), UCZNIOWIE Z ZABURZENIAMI POLA WIDZENIA (ubytkami i ograniczeniami w polu widzenia): przeciwwskazane są zawody wymagające widzenia przestrzennego, pracy na wysokości, przy obsłudze maszyn w ruchu; w pracy konieczna jest także ochrona sprawnego oka (przed urazami mechanicznymi, termicznymi, chemicznymi, przeciążeniem),
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z OCZOPLĄSEM (niemożnością utrzymania nieruchomo gałek ocznych): nie mogą wykonywać zawodów przemysłowych, wymagających precyzji, ponadto prac na wysokości czy pod ziemią, w niedostatecznym oświetleniu,
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z ZABURZENIAMI WIDZENIA BARW (zależnie od typu zaburzenia: daltonizm – brak rozróżnienia barwy czerwonej i zielonej; protanopia – brak rozróżnienia barwy czerwonej; deuteranopia – brak rozróżniania barwy zielonej; tritanopia – brak rozróżniania barwy niebieskiej), stanowią przeciwskazanie do wykonywania zawodów, w których barwy i ich odcienie odgrywają ważną rolę, np. kucharz, fryzjer, krawiec, elektronik, informatyk,
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z ZAĆMĄ (zmętnienie soczewki oka, które ogranicza do niego dopływ światła i utrudnia widzenie) stanowi ona przeciwwskazanie do wykonywania zawodów wymagających precyzji, prawidłowej percepcji kształtów, liter i cyfr, widzenia obuocznego,
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z JASKRĄ (wzrost ciśnienia w gałce ocznej, często uwarunkowana genetycznie): uczniowie ci nie mogą wykonywać ciężkich prac fizycznych, w ruchu i na wysokościach, w warunkach promieniowania, w zmiennym oświetleniu, wymagających dużej precyzji i koncentracji na szczegółach,
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z ZAPALENIEM SPOJÓWEK – przeciwwskazane są zawody, w których mogą występować czynniki uczulające: praca w pyle, kurzu, dymie, gazach drażniących, zmiennych warunkach termicznych, przy obsłudze maszyn i urządzeń w ruchu
                    </ListItem>
                </UnorderedList>
            </Text>
            <Heading as='h3' marginBottom={5} textAlign='left' color='red.400'>Układ Słuchowy:</Heading>
            <Text textAlign='left' marginBottom='5'>
                <UnorderedList>
                    <ListItem>
                        UCZNIOWIE Z WADAMI SŁUCHU (głuchota – całkowity zanik słuchu lub tak ograniczony, 
                        że niemożliwe jest pełne skorygowanie go aparatem słuchowym co utrudnia orientację 
                        w otoczeniu i porozumiewanie się z innymi); przeciwskazane są zawody wymagające pracy 
                        z klientem, przy obsłudze i kontroli maszyn o sygnalizacji dźwiękowej, pracy w ruchu 
                        ulicznym, a także przy słabym oświetleniu
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z NIEDOSŁUCHEM (uszkodzenie słuchu poddające się korekcji aparatem 
                        słuchowym): uczeń nie może wykonywać zawodów wymagających stałych kontaktów z 
                        klientami, pracy w hałasie (zawody przemysłowe), pracy na wysokości, rusztowaniach
                        UCZNIOWIE Z ZABURZENIAMI RÓWNOWAGI (skutkują one zwykle upadkami, urazami): 
                        uczeń nie może wykonywać zawodów przemysłowych, wymagających obsługi maszyn, 
                        używania ostrych narzędzi, stałego przemieszczania się, ponadto pracy na wysokości, 
                        w terenie, na nierównym podłożu
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z WADAMI WYMOWY (bełkotanie – dyslalia, mowa nosowa, mowa niewyraźna, 
                        jąkanie): wady te stanowią przeciwwskazanie do wykonywania zawodów wymagających 
                        częstych zawodowych kontaktów z innymi ludźmi, a zwłaszcza publicznych wystąpień,
                        UCZNIOWIE Z PRZEWLEKŁYM NIEŻYTOWYM I ROPNYM ZAPALENIEM UCHA ŚRODKOWEGO: przeciwwskazane 
                        są zawody wymagające wysiłku fizycznego, związane z częstymi zmianami ciśnienia, w 
                        trudnych warunkach atmosferycznych, w zmiennej temperaturze, w hałasie
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE ZE STANAMI ZAPALNYMI NOSA (przeciwwskazane są zawody narażające na 
                        kontakt z potencjalnymi alergenami – ważna jest ich wcześniejsza, dokładna diagnoza)
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z ZABURZENIAMI SMAKU I WĘCHU stanowią przeciwwskazanie do pracy w zawodach 
                        gastronomicznych, związanych z piekarstwem, cukiernictwem, przetwórstwem spożywczym; 
                        w przypadku zaburzeń węchu zabronione jest także wykonywanie zawodów bazujących np. 
                        na ocenie zagrożeń dla środowiska za pomocą węchu
                    </ListItem>
                </UnorderedList>
            </Text>
            <Heading as='h3' marginBottom={5} textAlign='left' color='red.400'>Układ Nerwowy:</Heading>
            <Text textAlign='left' marginBottom='5'>
                <UnorderedList>
                    <ListItem>
                        UCZNIOWIE Z ZABURZENIAMI CZYNNOŚCIOWYMI UKŁADU NERWOWEGO (NERWICE I CHOROBY PSYCHICZNE) 
                        przeciwwskazane są zawody związane z napięciem emocjonalnym, wymagające dużej koncentracji 
                        uwagi, szybkiego tempa pracy, związane ze stresem, dużą odpowiedzialnością, stałym 
                        komunikowaniem się z innymi ludźmi, kierowaniem ludźmi; ponadto zawody wymagające 
                        prowadzenia pojazdów, obsługi skomplikowanej aparatury, pracy na wysokości, ale też 
                        zawody związane z ekspozycją na czynniki neurotoksyczne, promieniowanie i hałas,
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z EPILEPSJĄ: przeciwskazaniem są zawody przemysłowe, wymagające obsługi 
                        maszyn i urządzeń, prowadzenia pojazdów, pracy na wysokościach, szybkiego tempa 
                        działań, ponadto wszędzie tam, gdzie występuje ryzyko porażenia prądem, ekspozycji 
                        na promieniowanie, czynniki toksyczne, hałas, przy nagłych zmianach temperatury,
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z MÓZGOWYM PORAŻENIEM DZIECIĘCYM (MPD): zwykle objawia się niedowładami, 
                        wzmożonym napięciem mięśniowym, niesprawnością ruchową, zaburzeniami równowagi, 
                        wadami wzroku, słuchu i mowy oraz często także niepełnosprawnością intelektualną – 
                        przeciwskazania zatem analogicznie jak do w/w schorzeń,
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE ZE STWARDNIENIEM ROZSIANYM (SM) – zmiany w rdzeniu kręgowym powodują
                        stopniowo zaburzenia w przewodzeniu impulsów nerwowych, a w efekcie drętwienie i d
                        rżenie kończyn, niedowłady, zaburzenia koordynacji wzrokowo-ruchowej, osłabienie wzroku 
                        i słuchu, a także mowy, zaburzenia pamięci – przeciwwskazania są zatem takie same jak 
                        w przypadku mózgowego porażenia dziecięcego,
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE ZE STANAMI POURAZOWYMI OUN (urazach głowy ze wstrząśnieniem mózgu): 
                        zwykle zograniczenia utrzymują się do około roku po urazie; jeśli uraz jest silny 
                        i towarzyszy mu encefalopatia pourazowa przeciwskazane są zawody wymagające stałej 
                        koncentracji i podzielności uwagi, podejmowania ryzyka.
                    </ListItem>
                </UnorderedList>
            </Text>
            <Heading as='h3' marginBottom={5} textAlign='left' color='red.400'>Układ Oddechowy:</Heading>
            <Text textAlign='left' marginBottom='5'>
                UKŁAD ODDECHOWY – przeciwwskazane są zawody wymagające pracy w niekorzystnym środowisku, 
                np. zapyleniu, wymagającym kontaktu z odczynnikami, związkami chemicznymi, tworzywami 
                sztucznymi.
                <UnorderedList>
                    <ListItem>
                        UCZNIOWIE Z PRZEWLEKŁYM ZAPALENIEM OSKRZELI – głównym przeciwskazaniem są zawody 
                        wymagające pracy w zanieczyszczonym środowisku, narażające na kontakt z gazami 
                        drażniącymi, odczynnikami chemicznymi, pyłami.
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z ASTMĄ OSKRZELOWĄ – ciężkie postacie uniemożliwiają pracę wymagającą 
                        jakiegokolwiek wysiłku fizycznego, również związane ze stresem czy napięciem; 
                        jeśli astma ma zdiagnozowane podłoże alergiczne – przeciwwskazane są zawody 
                        narażające na kontakt z określonym alergenem,
                    </ListItem>
                    <ListItem>
                        UCZNIOWIE Z GRUŹLICĄ PŁUC – przeciwskazana jest praca fizyczna, w trudnych 
                        warunkach klimatycznych, narażająca na kontakt z czynnikami chemicznymi, 
                        pyłami, ale też wymagająca stałych kontaktów z innymi ludźmi, ponadto przy produkcji 
                        żywności.
                    </ListItem>
                </UnorderedList>
            </Text>
            <Heading as='h3' marginBottom={5} textAlign='left' color='red.400'>Układ Krążenia:</Heading>
            <Text textAlign='left' marginBottom='5'>
                <UnorderedList>
                    <ListItem>
                        UCZEŃ Z NADCIŚNIENIEM TĘTNICZYM – często ma skłonności do 
                        omdleń, zawroty głowy, bóle w klatce piersiowej, czuje zmęczenie: 
                        przeciwskazane są zatem zawody wymagające pracy fizycznej, ciągłego 
                        przemieszczania się, również w kontakcie z prądem elektrycznym, w 
                        trudnych warunkach klimatycznych, w wysokiej temperaturze, w stresie,
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z TZW. SZMERAMI – jeśli szmery towarzyszą rozwojowi i wraz z nim 
                        ustępują – nie determinują wyboru zawodu; jeśli jednak są to tzw. szmery 
                        skurczowe – po dokonaniu pełnej diagnostyki kardiologicznej należy ocenić 
                        możliwości i zagrożenia związane z wyborem określonego zawodu,
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z HEMOFILIĄ (skazą krwotoczną) – nie może wykonywać wszelkich 
                        zawodów wymagających pracy fizycznej, zwłaszcza tej narażającej na różnego typu urazy,
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z ŻYLAKAMI KOŃCZYN DOLNYCH – przeciwskazane są zawody wymagające długotrwałej 
                        pozycji stojącej lub siedzącej bez możliwości jej zmiany, ponadto zawody wymagające 
                        chodzenia po nierównej powierzchni i schodach oraz wymagające dźwigania.
                    </ListItem>
                </UnorderedList>
            </Text>
            <Heading as='h3' marginBottom={5} textAlign='left' color='red.400'>Układ Moczowy:</Heading>
            <Text textAlign='left' marginBottom='5'>
                <UnorderedList>
                    <ListItem>
                        UCZEŃ Z PRZEWLEKŁYMI STANAMI ZAPALNYMI NEREK I PĘCHERZA MOCZOWEGO
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z REFLUKSEM (ODPŁYWEM WSTECZNYM PĘCHERZOWO-MOCZOWYM)
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z KAMICĄ NERKOWĄ
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z ZESPOŁEM NERCZYCOWYM
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z NIEWYDOLNOŚCIĄ NEREK:
                    </ListItem>
                </UnorderedList>
                w/w schorzenia uniemożliwiają wykonywanie pracy fizycznej, 
                zwłaszcza wymagającej dźwigania, pracy tylko w pozycji stojącej, 
                pracy w terenie, w zmiennych warunkach atmosferycznych, w stale 
                niskich temperaturach, a także w kontakcie z substancjami toksycznymi czy drażniącymi.
            </Text>
            <Heading as='h3' marginBottom={5} textAlign='left' color='red.400'>Układ Tkanki Łącznej:</Heading>
            <Text textAlign='left' marginBottom='5'>
                <UnorderedList>
                    <ListItem>
                        UCZEŃ Z CHOROBĄ REUMATYCZNĄ (bóle i obrzęki stawów, zaburzenia pracy mięśnia 
                        sercowego, zmiany w układzie nerwowym pod postacią mimowolnych ruchów głowy, rąk), 
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z MŁODZIEŃCZYM REUMATOIDALNYM ZAPALENIEM STAWÓW (sztywność stawów, 
                        gorączka, często wysypka na klatce piersiowej i udach):
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z CHOROBĄ REUMATYCZNĄ (bóle i obrzęki stawów, zaburzenia pracy mięśnia 
                        sercowego, zmiany w układzie nerwowym pod postacią mimowolnych ruchów głowy, rąk), 
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z MŁODZIEŃCZYM REUMATOIDALNYM ZAPALENIEM STAWÓW (sztywność stawów, 
                        gorączka, często wysypka na klatce piersiowej i udach):
                    </ListItem>
                </UnorderedList>
                uczeń nie może wykonywać zawodów wymagających pracy fizycznej, podnoszenia, 
                dźwigania, pracy w zmiennych warunkach atmosferycznych, na wysokości, 
                pod ziemią, w kontakcie z substancjami drażniącymi czy toksycznymi, a 
                także pracy wymagającej dużej precyzji i koncentracji na szczegółach.
            </Text>
            <Heading as='h3' marginBottom={5} textAlign='left' color='red.400'>Układ Endokrynologiczny:</Heading>
            <Text textAlign='left' marginBottom='5'>
                <UnorderedList>
                    <ListItem>
                        UCZEŃ Z NIEDOBORAMI WZROSTOWYMI (NISKOROSŁOŚCIĄ) – przeciwwskazane są zawody wymagające 
                        pracy fizycznej,
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z NADMIERNYM WZROSTEM (GIGANTYZMEM) – przeciwwskazane są zawody wymagające 
                        obsługi maszyn i urządzeń, pracy na wysokości, na rusztowaniach,
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z NIEDOBOREM WAGI – nie może wykonywać pracy wymagającej dużej wydolności 
                        fizycznej, dużej odporności psychicznej, w zmiennych warunkach klimatycznych; 
                        jeśli niedobór wagi jest efektem choroby – przeciwwskazania zależą od jej rodzaju,
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z NADWAGĄ – nie może wykonywać pracy na wysokości, ponadto pracy 
                        wymagającej szybkiego tempa i precyzji, a także pracy w przemyśle spożywczym: 
                        przetwórstwie, cukiernictwie, piekarstwie,
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z CUKRZYCĄ – przeciwskazane są zawody wymagające wysiłku fizycznego, pracy na 
                        wysokości, pracy pod ziemią, w zmiennych i trudnych warunkach klimatycznych, ponadto 
                        w środowisku stresogennym.
                    </ListItem>
                </UnorderedList>
            </Text>
            <Heading as='h3' marginBottom={5} textAlign='left' color='red.400'>Układ Pokarmowy:</Heading>
            <Text textAlign='left' marginBottom='5'>
                <UnorderedList>
                    <ListItem>
                        UCZEŃ Z CHOROBAMI WĄTROBY – m.in. wirusowe zapalenie wątroby (typu B, C, D) stanowi 
                        przeciwwskazanie do zawodów wymagających wysiłku fizycznego, kontaktów z materiałem 
                        biologicznym (zawody medyczne), zawodów gastronomicznych, ponadto kontaktu z czynnikami 
                        chemicznymi, toksycznymi,
                    </ListItem>
                    <ListItem>
                        UCZEŃ Z CHOROBĄ WRZODOWĄ ŻOŁĄDKA – nie może wykonywać zawodów wymagających ciężkiej 
                        pracy fizycznej, kontaktu z substancjami toksycznymi, zawodów gastronomicznych, a 
                        także narażających na stres.
                    </ListItem>
                </UnorderedList>
            </Text>
            </Box>
        </>
    )
}