const animeData = [
    {
        title: "Attack on Titan",
        studio: "by Wit Studio / MAPPA",
        description:
            "Humanity fights for survival in walled cities against man-eating giants known as Titans.",
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
        imdbUrl: "https://www.imdb.com/title/tt2560140/",
        type: "series",
        rating: 5,
        status: "completed"
    },
    {
        title: "Death Note",
        studio: "by Madhouse",
        description:
            "A high school student discovers a supernatural notebook that allows him to kill anyone by writing their name.",
        image: "https://cdn.myanimelist.net/images/anime/1079/138100.jpg",
        imdbUrl: "https://www.imdb.com/title/tt0877057/",
        type: "series",
        rating: 5,
        status: "completed"
    },
    {
        title: "Demon Slayer",
        studio: "by ufotable",
        description:
            "After his family is slaughtered and his sister turned into a demon, a young man becomes a demon slayer.",
        image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
        imdbUrl: "https://www.imdb.com/title/tt9335498/",
        type: "series",
        rating: 2,
        status: "completed"
    },
    {
        title: "Jujutsu Kaisen",
        studio: "by MAPPA",
        description:
            "A high schooler swallows a cursed talisman and joins a secret school to fight malevolent cursed spirits.",
        image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
        imdbUrl: "https://www.imdb.com/title/tt12343534/",
        type: "series",
        rating: 4,
        status: "completed"
    },
    {
        title: "Solo Leveling",
        studio: "by A-1 Pictures",
        description:
            "In a world of Hunters and monster-filled Gates, the weakest hunter gains the unique power to level up and becomes a formidable force.",
        image: "https://cdn.myanimelist.net/images/anime/1801/142390.jpg",
        imdbUrl: "https://www.imdb.com/title/tt21209876/",
        type: "series",
        rating: 3,
        status: "completed"
    },
    {
        title: "Elfen Lied",
        studio: "by Arms",
        description:
            "A genetically mutated girl with telekinetic vectors escapes a lab and struggles with violence, identity, and discrimination.",
        image: "https://cdn.myanimelist.net/images/anime/1780/121555.jpg",
        imdbUrl: "https://www.imdb.com/title/tt0380136/",
        type: "series",
        rating: 2,
        status: "completed"
    },
    {
        title: "Your Name",
        studio: "by CoMix Wave Films",
        description:
            "A boy and girl mysteriously swap bodies and form a deep connection while seeking each other across time and space.",
        image: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
        imdbUrl: "https://www.imdb.com/title/tt5311514/",
        type: "movie",
        rating: 5,
        status: "completed"
    },
    {
        title: "I Want to Eat Your Pancreas",
        studio: "by Studio VOLN",
        description:
            "A high school boy bonds with a terminally ill girl who wants to live life to the fullest.",
        image: "https://cdn.myanimelist.net/images/anime/1768/93291.jpg",
        imdbUrl: "https://www.imdb.com/title/tt7815470/",
        type: "movie",
        rating: 3,
        status: "completed"
    },
    {
        title: "Naruto",
        studio: "by Studio Pierrot",
        description:
            "A young ninja seeks recognition and dreams of becoming his village's greatest leader.",
        image: "https://cdn.myanimelist.net/images/anime/1141/142503.jpg",
        imdbUrl: "https://www.imdb.com/title/tt0409591/",
        type: "series",
        rating: 4,
        status: "completed"
    },
    {
        title: "Tokyo Revengers",
        studio: "by LIDENFILMS",
        description:
            "A man travels back in time to his middle school years to save his girlfriend-and change the fate of his friends in a violent gang.",
        image: "https://cdn.myanimelist.net/images/anime/1839/122012.jpg",
        imdbUrl: "https://www.imdb.com/title/tt13036154/",
        type: "series",
        rating: 2,
        status: "completed"
    },
    {
        title: "Parasyte",
        studio: "by Madhouse",
        description:
            "A teen's right hand is infected by a parasite, forcing him into an uneasy partnership as alien parasites attack humanity.",
        image: "https://cdn.myanimelist.net/images/anime/3/73178.jpg",
        imdbUrl: "https://www.imdb.com/title/tt1568346/",
        type: "series",
        rating: 2,
        status: "completed"
    },
    {
        title: "One Piece",
        studio: "by Toei Animation",
        description:
            "A boy with rubber powers sails the Grand Line in search of the legendary treasure known as One Piece.",
        image: "https://cdn.myanimelist.net/images/anime/1770/97704.jpg",
        imdbUrl: "https://www.imdb.com/title/tt0388629/",
        type: "series",
        rating: 4,
        status: "watching"
    },
    {
        title: "Monster",
        studio: "by Madhouse",
        description:
            "A brilliant doctor's life unravels after he saves a child who grows up to become a dangerous serial killer.",
        image: "https://cdn.myanimelist.net/images/anime/1648/152231.jpg",
        imdbUrl: "https://www.imdb.com/title/tt0380269/",
        type: "series",
        rating: 4,
        status: "completed"
    },
    {
        title: "Vinland Saga",
        studio: "by Wit Studio / MAPPA",
        description:
            "A young Viking warrior seeks revenge and meaning in a brutal age of conquest and bloodshed.",
        image: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg",
        imdbUrl: "https://www.imdb.com/title/tt7972104/",
        type: "series",
        rating: 2,
        status: "completed"
    },
    {
        title: "Cowboy Bebop",
        studio: "by Sunrise",
        description:
            "Bounty hunters journey through space, tackling jobs and their pasts aboard the spaceship Bebop.",
        image: "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
        imdbUrl: "https://www.imdb.com/title/tt0213338/",
        type: "series",
        rating: 3,
        status: "watching"
    },
    {
        title: "Violet Evergarden",
        studio: "by Kyoto Animation",
        description:
            "An ex-soldier learns to understand emotions and re-integrate into society by writing letters that connect people.",
        image: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg",
        imdbUrl: "https://www.imdb.com/title/tt8628734/",
        type: "series",
        rating: 2,
        status: "completed"
    },
    {
        title: "Howl's Moving Castle",
        studio: "by Studio Ghibli",
        description:
            "A young woman cursed with aging seeks refuge in a moving castle owned by a mysterious wizard.",
        image: "https://cdn.myanimelist.net/images/anime/1470/138723.jpg",
        imdbUrl: "https://www.imdb.com/title/tt0347149/",
        type: "movie",
        rating: 3,
        status: "completed"
    },
    {
        title: "The Garden of Words",
        studio: "by CoMix Wave Films",
        description:
            "A chance meeting between a mourning student and older woman forges an unlikely connection in a Japanese rainy-season park.",
        image: "https://cdn.myanimelist.net/images/anime/1597/112995.jpg",
        imdbUrl: "https://www.imdb.com/title/tt4034354/",
        type: "movie",
        rating: 4,
        status: "completed"
    },
    {
        title: "Spirited Away",
        studio: "by Studio Ghibli",
        description:
            "A young girl enters a mysterious spirit world and must save her parents after they are turned into pigs.",
        image: "https://cdn.myanimelist.net/images/anime/6/79597.jpg",
        imdbUrl: "https://www.imdb.com/title/tt0245429/",
        type: "movie",
        rating: 4,
        status: "completed"
    },
    {
        title: "Lost in Starlight",
        studio: "by Studio Mir",
        description: "Two star-crossed lovers separated by a cosmic phenomenon fight to reunite across space and time.",
        image: "https://cdn.myanimelist.net/images/anime/1371/149504.jpg",
        imdbUrl: "https://www.imdb.com/",
        type: "movie",
        rating: 3,
        status: "completed"
    },
    {
        title: "Sakamoto Days",
        studio: "TBD",
        description: "A former legendary hitman lives a peaceful life running a convenience store-but danger finds him anyway.",
        image: "https://cdn.myanimelist.net/images/anime/1026/146459.jpg",
        imdbUrl: "https://www.imdb.com/",
        type: "series",
        rating: 3,
        status: "completed"
    },
    {
        title: "Perfect Blue",
        studio: "by Madhouse",
        description:
            "A pop idol's life unravels in a dangerous spiral when she begins to descend into madness and stalking after retiring.",
        image: "https://cdn.myanimelist.net/images/anime/1254/134212.jpg",
        imdbUrl: "https://www.imdb.com/title/tt0156887/",
        type: "movie",
        rating: 4,
        status: "completed"
    },
    {
        title: "A Silent Voice",
        studio: "by Kyoto Animation",
        description:
            "A former bully reconnects with the deaf girl he tormented as a child, seeking redemption and forgiveness.",
        image: "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
        imdbUrl: "https://www.imdb.com/title/tt5323662/",
        type: "movie",
        rating: 3,
        status: "completed"
    },
    {
        title: "Chainsaw Man",
        studio: "by MAPPA",
        description:
            "A boy merges with a Chainsaw Devil and joins a government agency hunting devils for money.",
        image: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
        imdbUrl: "https://www.imdb.com/title/tt9128412/",
        type: "series",
        rating: 4,
        status: "completed"
    },
    {
        title: "Tokyo Ghoul",
        studio: "by Studio Pierrot",
        description:
            "A college student becomes part-ghoul after a deadly encounter and struggles with his new identity in ghoul society.",
        image: "https://cdn.myanimelist.net/images/anime/1498/134443.jpg",
        imdbUrl: "https://www.imdb.com/title/tt2024473/",
        type: "series",
        rating: 3,
        status: "completed"
    },
    {
        title: "Erased",
        studio: "by A-1 Pictures",
        description:
            "A man with time-travel ability goes back to his childhood to prevent a series of kidnappings and murders.",
        image: "https://cdn.myanimelist.net/images/anime/10/77957.jpg",
        imdbUrl: "https://www.imdb.com/title/tt4675174/",
        type: "series",
        rating: 2,
        status: "completed"
    },
    {
        title: "Paprika",
        studio: "by Madhouse",
        description:
            "A therapist enters patients' dreams using a device but faces chaos when the boundary between dream and reality collapses.",
        image: "https://cdn.myanimelist.net/images/anime/1929/93629.jpg",
        imdbUrl: "https://www.imdb.com/title/tt0851578/",
        type: "movie",
        rating: 3,
        status: "completed"
    },
    {
        title: "Weathering with You",
        studio: "by CoMix Wave Films",
        description:
            "A runaway boy meets a girl who can manipulate weather, and they set out to change Tokyo's endless rain.",
        image: "https://cdn.myanimelist.net/images/anime/1880/101146.jpg",
        imdbUrl: "https://www.imdb.com/title/tt5841274/",
        type: "movie",
        rating: 3,
        status: "completed"
    },
    {
        title: "5 Centimeters per Second",
        studio: "by CoMix Wave Films",
        description:
            "Three interconnected tales explore the bittersweet passage of time and young love.",
        image: "https://cdn.myanimelist.net/images/anime/1410/112994.jpg",
        imdbUrl: "https://www.imdb.com/title/tt0983213/",
        type: "movie",
        rating: 5,
        status: "completed"
    },
    {
        title: "The Girl Who Leapt Through Time",
        studio: "by Madhouse",
        description:
            "A high school girl discovers she can leap through time and uses her power to fix mistakes-until consequences arise.",
        image: "https://cdn.myanimelist.net/images/anime/1/2432.jpg",
        imdbUrl: "https://www.imdb.com/title/tt0437086/",
        type: "movie",
        rating: 3,
        status: "completed"
    },
    {
        title: "The Fragrant Flower Blooms with Dignity",
        studio: "TBD",
        description:
            "A quiet boy from a rough school befriends a girl from a nearby elite school, and their bond blossoms despite social expectations.",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Kaoru_Hana_wa_Rin_to_Saku_volume_1_cover.jpg",
        imdbUrl: "https://www.imdb.com/",
        type: "series",
        rating: 3,
        status: "watching"
    }
];

export default animeData;
