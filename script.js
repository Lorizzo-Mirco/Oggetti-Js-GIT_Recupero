// DICHIARAZIONE ARRAY ARTISTA
let Artisti = []

// DICHIARAZIONE E RIEMPIMENTO ARRAY PLAYLIST 1
let Artista1Playlist = [];
Song = {
    titolo: "Uprising",
    immagine: "Uprising - Muse.webp",
    informazioni: "Uprising è un singolo del gruppo musicale britannico Muse, pubblicato il 4 agosto 2009 come primo estratto dal quinto album in studio The Resistance.",
    audio: "Uprising - Muse.mp3",
    link: "https://www.youtube.com/watch?v=w8KQmps-Sog&ab_channel=Muse"
}
Artista1Playlist[0] = Song;
Song = {
    titolo: "Supermassive Black Hole",
    immagine: "Supermassive Black Hole - Muse.webp",
    informazioni: "Supermassive Black Hole is a song by English rock band Muse. Written by Muse lead singer and principal songwriter Matt Bellamy, it was released as the lead single from the band's fourth studio album, Black Holes and Revelations (2006), on 19 June 2006, backed with Crying Shame",
    audio: "Supermassive Black Hole - Muse.mp3",
    link: "https://www.youtube.com/watch?v=Xsp3_a-PMTw&ab_channel=Muse"
}
Artista1Playlist[1] = Song;

// DICHIARAZIONE E RIEMPIMENTO ARRAY PLAYLIST 2
let Artista2Playlist = [];
Song = {
    titolo: "Heartbreak Hotel",
    immagine: "Heartbreak Hotel - Elvis Presley.webp",
    informazioni: "Heartbreak Hotel è un brano musicale del cantante rock statunitense Elvis Presley, pubblicato il 27 gennaio 1956 dall'etichetta discografica RCA Records nel singolo Heartbreak Hotel/I Was the One.",
    audio: "Heartbreak Hotel - Elvis Presley.mp3",
    link: "https://www.youtube.com/watch?v=e9BLw4W5KU8"
}
Artista2Playlist[0] = Song;
Song = {
    titolo: "Jailhouse Rock",
    immagine: "Jailhouse Rock - Elvis Presley.webp",
    informazioni: "Jailhouse Rock è un brano musicale composto da Jerry Leiber e Mike Stoller, portato al successo da Elvis Presley nel 1957 che la incise nel singolo Jailhouse Rock/Treat Me Nice e nell'EP Jailhouse Rock.",
    audio: "Jailhouse Rock - Elvis Presley.mp3",
    link: "https://www.youtube.com/watch?v=PpsUOOfb-vE&ab_channel=ElvisPresleyVEVO"
}
Artista2Playlist[1] = Song;

// DICHIARAZIONE E RIEMPIMENTO ARRAY PLAYLIST 3
let Artista3Playlist = [];
Song = {
    titolo: "Imagine",
    immagine: "Imagine - Jonn Lennon.webp",
    informazioni: "Imagine è un singolo del cantante britannico John Lennon, pubblicato l'11 ottobre 1971 come estratto dall'album omonimo.",
    audio: "Imagine - Jonn Lennon.mp3",
    link: "https://www.youtube.com/watch?v=YkgkThdzX-8&ab_channel=johnlennon"
}
Artista3Playlist[0] = Song;
Song = {
    titolo: "#9 Dream",
    immagine: "#9 Dream - Jonn Lennon.webp",
    informazioni: "#9 Dream/What You Got è un singolo discografico di John Lennon pubblicato nel 1975.",
    audio: "#9 Dream - Jonn Lennon.mp3",
    link: "https://www.youtube.com/watch?v=7zZsKOvXiFo&ab_channel=johnlennon"
}
Artista3Playlist[1] = Song;

// DICHIARAZIONE CLASSI ARTISTI
const Artista1 = {
    nome: "Muse",
    cognome: "N/A",
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