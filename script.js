// DICHIARAZIONE ARRAY ARTISTA
let Artisti = []

// DICHIARAZIONE E RIEMPIMENTO ARRAY PLAYLIST 1
let Artista1Playlist = [];
Song = {
    titolo: "Uprising",
    immagine: "Muse/Uprising - Muse.webp",
    informazioni: "Uprising è un singolo del gruppo musicale britannico Muse, pubblicato il 4 agosto 2009 come primo estratto dal quinto album in studio The Resistance.",
    audio: "Muse/Uprising - Muse.mp3",
    link: "https://www.youtube.com/embed/w8KQmps-Sog?enablejsapi=1&ab_channel=Muse"
}
Artista1Playlist[0] = Song;
Song = {
    titolo: "Supermassive Black Hole",
    immagine: "Muse/Supermassive Black Hole - Muse.webp",
    informazioni: "Supermassive Black Hole is a song by English rock band Muse. Written by Muse lead singer and principal songwriter Matt Bellamy, it was released as the lead single from the band's fourth studio album, Black Holes and Revelations (2006), on 19 June 2006, backed with Crying Shame",
    audio: "Muse/Supermassive Black Hole - Muse.mp3",
    link: "https://www.youtube.com/embed/Xsp3_a-PMTw?enablejsapi=1&ab_channel=Muse"
}
Artista1Playlist[1] = Song;

// DICHIARAZIONE E RIEMPIMENTO ARRAY PLAYLIST 2
let Artista2Playlist = [];
Song = {
    titolo: "Heartbreak Hotel",
    immagine: "Elvis Presley/Heartbreak Hotel - Elvis Presley.webp",
    informazioni: "Heartbreak Hotel è un brano musicale del cantante rock statunitense Elvis Presley, pubblicato il 27 gennaio 1956 dall'etichetta discografica RCA Records nel singolo Heartbreak Hotel/I Was the One.",
    audio: "Elvis Presley/Heartbreak Hotel - Elvis Presley.mp3",
    link: "https://www.youtube.com/embed/e9BLw4W5KU8?enablejsapi=1"
}
Artista2Playlist[0] = Song;
Song = {
    titolo: "Jailhouse Rock",
    immagine: "Elvis Presley/Jailhouse Rock - Elvis Presley.webp",
    informazioni: "Jailhouse Rock è un brano musicale composto da Jerry Leiber e Mike Stoller, portato al successo da Elvis Presley nel 1957 che la incise nel singolo Jailhouse Rock/Treat Me Nice e nell'EP Jailhouse Rock.",
    audio: "Elvis Presley/Jailhouse Rock - Elvis Presley.mp3",
    link: "https://www.youtube.com/embed/PpsUOOfb-vE?enablejsapi=1&ab_channel=ElvisPresleyVEVO"
}
Artista2Playlist[1] = Song;

// DICHIARAZIONE E RIEMPIMENTO ARRAY PLAYLIST 3
let Artista3Playlist = [];
Song = {
    titolo: "Imagine",
    immagine: "John Lennon/Imagine - Jonn Lennon.webp",
    informazioni: "Imagine è un singolo del cantante britannico John Lennon, pubblicato l'11 ottobre 1971 come estratto dall'album omonimo.",
    audio: "John Lennon/Imagine - Jonn Lennon.mp3",
    link: "https://www.youtube.com/embed/YkgkThdzX-8?enablejsapi=1&ab_channel=johnlennon"
}
Artista3Playlist[0] = Song;
Song = {
    titolo: "#9 Dream",
    immagine: "John Lennon/9 Dream - Jonn Lennon.webp",
    informazioni: "#9 Dream/What You Got è un singolo discografico di John Lennon pubblicato nel 1975.",
    audio: "John Lennon/9 Dream - Jonn Lennon.mp3",
    link: "https://www.youtube.com/embed/7zZsKOvXiFo?enablejsapi=1&ab_channel=johnlennon"
}
Artista3Playlist[1] = Song;

// DICHIARAZIONE CLASSI ARTISTI
const Artista1 = {
    nome: "Muse",
    cognome: "",
    biografia: "I Muse sono un gruppo musicale rock alternativo britannico formatosi nel 1992 a Teignmouth. Sono riconosciuti per uno stile musicale molto eclettico che raccoglie influenze di più generi come elettronica, pop e rock, spesso segnati da una vena sinfonica e orchestrale. La maggior parte dei testi delle loro canzoni, composte principalmente dal frontman Matthew Bellamy, trattano temi riguardanti apocalisse, UFO, guerra, vita, universo, politica, religione, amore e odio. Le loro esibizioni dal vivo sono state definite estremamente energiche e stravaganti.",
    playlist: Artista1Playlist
};
const Artista2 = {
    nome: "Elvis",
    cognome: "Presley",
    biografia: "Elvis Aaron Presley (Tupelo, 8 gennaio 1935 – Memphis, 16 agosto 1977) è stato un cantante e attore statunitense.Considerato uno dei più celebri artisti della storia della musica popolare, Elvis è ritenuto dai critici come una delle più grandi voci del XX secolo. Egli fu fonte di ispirazione per molti musicisti e interpreti di rock and roll e rockabilly, tanto da ottenere l'appellativo di re del rock and roll.",
    playlist: Artista2Playlist
};
const Artista3 = {
    nome: "John",
    cognome: "Lennon",
    biografia: "John Winston Ono Lennon, nato John Winston Lennon (Liverpool, 9 ottobre 1940 – New York, 8 dicembre 1980), è stato un cantautore, polistrumentista, artista e attivista britannico. Dal 1960 al 1970 fu compositore e cantante del gruppo musicale dei Beatles, dei quali compose anche la maggior parte delle canzoni in coppia con Paul McCartney. Con quest'ultimo formò uno dei più rilevanti e acclamati sodalizi musicali della storia della musica del ventesimo secolo. È il cantautore di maggior successo nella storia delle classifiche inglesi, seguito da McCartney. Nel 2002, in un sondaggio della BBC sulle 100 personalità britanniche più importanti di tutti i tempi, si è classificato settimo.",
    playlist: Artista3Playlist
};

//RIEMPIMENTO ARRAY ARTISTI CON LE CLASSI CORRISPONDENTI
Artisti[0] = Artista1;
Artisti[1] = Artista2;
Artisti[2] = Artista3;

function CaricaPagina() {
    const Pagina = document.getElementById("Main");

    for (let i = 0; i < Artisti.length; i++) {
        var Artista = Artisti[i]

        // CREAZIONE DI UN DIV IN CUI INSERIRE L'ARTISTA CON LE CANZONI
        let divArtista = document.createDocumentFragment(); //CREA IL FRAMMENTO
        let div = document.createElement("div"); //CREA L'ELEMENTO DIV
        div.id = "Artista" + i; //AGGIUNGE L'ID ARTISTA PIù IL NUMERO
        div.classList.add("Artista"); //AGGIUNGE LA CLASSE ARTISTA
        divArtista.appendChild(div); //APPENDE IL DIV AL FRAMMENTO
        Pagina.appendChild(divArtista); //AGGIUNGE ALLA PAGINA(DIV MAIN) IL FRAMMENTO

        // RIPRENDE IL DIV SOPRA MA TRAMITE ID SULLA PAGINA
        divArtista = document.getElementById("Artista" + i)

        const HTMLArtista = document.createDocumentFragment();

        const txtArtista = document.createElement("h2");
        txtArtista.textContent = Artista.nome + " " + Artista.cognome;
        HTMLArtista.appendChild(txtArtista);

        divArtista.appendChild(HTMLArtista)

        for (let j = 0; j < Artista.playlist.length; j++) {
            const HTMLInfo = document.createDocumentFragment();
            var Canzone = Artista.playlist[j]

            // CREAZIONE DI UN DIV IN CUI INSERIRE LE CANZONI DELL'ARTISTA
            let divCanzone = document.createDocumentFragment(); //CREA IL FRAMMENTO
            div = document.createElement("div"); //CREA L'ELEMENTO DIV
            div.id = "Canzone" + i + j
            div.classList.add("Canzone"); //AGGIUNGE LA CLASSE CANZONE
            divArtista.appendChild(div); //APPENDE IL DIV AL FRAMMENTO
            Pagina.appendChild(divArtista); //AGGIUNGE ALLA PAGINA(DIV MAIN) IL FRAMMENTO

            divCanzone = document.getElementById("Canzone" + i + j)

            // CREAZIONE DI UN DIV IN CUI INSERIRE L'ARTISTA CON LE CANZONI
            let divInfo = document.createDocumentFragment(); //CREA IL FRAMMENTO
            div = document.createElement("div"); //CREA L'ELEMENTO DIV
            div.id = "Info" + i + j
            div.classList.add("Info"); //AGGIUNGE LA CLASSE INFO
            divInfo.appendChild(div); //APPENDE IL DIV AL FRAMMENTO
            divCanzone.appendChild(divInfo); //AGGIUNGE ALLA PAGINA(DIV MAIN) IL FRAMMENTO

            divInfo = document.getElementById("Info" + i + j)

            const txtTitolo = document.createElement("h3");
            txtTitolo.textContent = Canzone.titolo;
            txtTitolo.classList.add("Text")
            HTMLInfo.appendChild(txtTitolo);

            const img = document.createElement("img");
            img.src = "Images/" + Canzone.immagine
            img.classList.add("Img")
            img.id = "img" +  + i + j
            HTMLInfo.appendChild(img);

            const btnPlay = document.createElement("button");
            btnPlay.textContent = "PLAY";
            btnPlay.classList.add("Button");
            btnPlay.id = "btnPlay" + i + j;
            btnPlay.onclick = () => PlaySong(btnPlay.id);
            HTMLInfo.appendChild(btnPlay);

            const btnInfo = document.createElement("button");
            btnInfo.textContent = "INFO";
            btnInfo.classList.add("Button");
            btnInfo.id = "btnInfo" + i + j;
            btnInfo.onclick = () => MostraInfo(btnInfo.id);
            HTMLInfo.appendChild(btnInfo);

            const iframeYoutube = document.createElement("iframe");
            iframeYoutube.src = Canzone.link;
            iframeYoutube.classList.add("Video")
            iframeYoutube.title = "Video di" + Canzone.titolo;
            iframeYoutube.frameBorder = 0
            iframeYoutube.allow ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            iframeYoutube.referrerPolicy = "strict-origin-when-cross-origin"
            divCanzone.appendChild(iframeYoutube);

            divInfo.appendChild(HTMLInfo)
        }

        Pagina.appendChild(divArtista)
    }
}

let Canzone = null;
let idCanzone = null;

function PlaySong(id) {
    const nArtista = Math.floor(id.replace("btnPlay", "") / 10);
    const nSong = id.replace("btnPlay", "") % 10;

    // Se è la stessa canzone in uso, alterna play/pause mantenendo il punto attuale
    if (Canzone && idCanzone === id) {
        if (Canzone.paused) {
            Canzone.play();
            document.getElementById(id).textContent = "STOP";
        } else {
            Canzone.pause();
            document.getElementById(id).textContent = "PLAY";
        }
        return;
    }

    // Se è in uso un'altra canzone, fermala e riavviala da capo
    if (Canzone) {
        Canzone.pause();
        Canzone.currentTime = 0;
    }

    idCanzone = id;
    Canzone = new Audio("Songs/" + Artisti[nArtista].playlist[nSong].audio);
    Canzone.play();
    document.getElementById(id).textContent = "STOP";
}


function MostraInfo(id) {
    var nArtista = Math.floor(id.replace("btnInfo", "") / 10);
    var nSong = id.replace("btnInfo", "") % 10;

    alert(Artisti[nArtista].playlist[nSong].informazioni);
}