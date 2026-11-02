const langData = {
    korean: {
        title: "Korece (Hangeul) Tarihçesi",
        history: "Hangeul, 1443 yılında Joseon Hanedanlığı'nın 4. kralı olan Kral Sejong tarafından tasarlanmıştır. Okuma-yazmayı kolaylaştırmak amacıyla icat edilen bilimsel ve mantıksal bir alfabedir.",
        letters: [
            { char: "ㄱ", pronoun: "G / K", example: "가 (Ga - Git)" },
            { char: "ㄴ", pronoun: "N", example: "나 (Na - Ben)" },
            { char: "ㄷ", pronoun: "D / T", example: "다 (Da - Hepsi)" },
            { char: "ㅏ", pronoun: "A", example: "아 (A)" }
        ]
    },
    gokturk: {
        title: "Göktürk Alfabesi Tarihçesi",
        history: "Türkçenin bilinen en eski yazılı metinleri olan Orhun Yazıtları'nda kullanılan alfabedir. Taşlara kazınmaya uygun olacak şekilde keskin ve düz çizgilerle tasarlanmıştır.",
        letters: [
            { char: "𐰀", pronoun: "A / E", example: "𐰏 (Eg)" },
            { char: "𐰁", pronoun: "B (İnce)", example: "𐰋 (Eb)" },
            { char: "𐰺", pronoun: "R (Kalın)", example: "𐰺 (Ar)" }
        ]
    },
    japanese: {
        title: "Japonca (Hiragana & Katakana)",
        history: "Japon yazı sistemi; temel kelimeler için Hiragana, yabancı kelimeler için Katakana ve Çin'den gelen Kanji karakterlerinden oluşur.",
        letters: [
            { char: "あ", pronoun: "A (Hiragana)", example: "あめ (Yağmur)" },
            { char: "ア", pronoun: "A (Katakana)", example: "アイス (Dondurma)" },
            { char: "う", pronoun: "U", example: "うみ (Deniz)" }
        ]
    },
    chinese: {
        title: "Çince (Hanzi & Pinyin)",
        history: "Çin alfabesi (Hanzi) harflerden değil, binlerce logografik karakterden oluşur. Modern dönemde okunuşu kolaylaştırmak için Latin harflerine dayanan Pinyin sistemi geliştirilmiştir.",
        letters: [
            { char: "你", pronoun: "Nǐ", example: "Sen" },
            { char: "好", pronoun: "Hǎo", example: "İyi (Nǐ hǎo: Merhaba)" },
            { char: "中", pronoun: "Zhōng", example: "Orta (Zhōngguó: Çin)" }
        ]
    },
    cyrillic: {
        title: "Kiril Alfabesi (Rusça) Tarihçesi",
        history: "9. yüzyılda Bizanslı din adamları tarafından Doğu Slav halklarının Hristiyanlığı öğrenmesini kolaylaştırmak amacıyla geliştirilmiştir.",
        letters: [
            { char: "А", pronoun: "A", example: "Анна (Anna)" },
            { char: "Б", pronoun: "B", example: "Брат (Kardeş)" },
            { char: "В", pronoun: "V", example: "Вода (Su)" }
        ]
    },
    ancientGreek: {
        title: "Antik Yunanca (Klasik)",
        history: "Felsefe, bilim ve mitolojinin dilidir. Klasik dönemde Platon ve Aristoteles'in eserleri bu dille kaleme alınmıştır. Kendine has aksaret ve soluk işaretleri barındırır.",
        letters: [
            { char: "Ω ω", pronoun: "Omega (Uzun O)", example: "Ωκεανός (Okyanus)" },
            { char: "Δ δ", pronoun: "Delta", example: "Δόξα (Şan)" },
            { char: "Ψ ψ", pronoun: "Psi", example: "Ψυχή (Ruh / Zihin)" }
        ]
    },
    modernGreek: {
        title: "Modern Yunanca",
        history: "Bugün Yunanistan ve Kıbrıs'ta konuşulan resmi dildir. Antik Yunancaya göre sesletim (telaffuz) kuralları sadeleşmiş, ancak kök yapısı büyük ölçüde korunmuştur.",
        letters: [
            { char: "Α α", pronoun: "Alfa", example: "Αθήna (Atina)" },
            { char: "Β β", pronoun: "Vita", example: "Βιβλίο (Kitap)" },
            { char: "Γ γ", pronoun: "Yima", example: "Γάτα (Kedi)" }
        ]
    },
    portuguese: {
        title: "Portekizce Alfabesi Tarihçesi",
        history: "Latin alfabesini kullanan Portekizce; Brezilya, Portekiz ve Afrika'nın pek çok bölgesinde konuşulan, kendine has nazal (genel) ses seslerine sahip köklü bir dildir.",
        letters: [
            { char: "A a", pronoun: "A", example: "Amigo (Arkadaş)" },
            { char: "Ç ç", pronoun: "Se-cedilha", example: "Coração (Kalp)" },
            { char: "Õ õ", pronoun: "O nasal", example: "Pão (Ekmek)" }
        ]
    },
    arabic: {
        title: "Arapça Alfabesi Tarihçesi",
        history: "Sami dil ailesine ait olan Arap alfabesi sağdan sola yazılır ve harfler kelime içindeki konumlarına (başta, ortada, sonda) göre zarif kavislerle şekil değiştirir.",
        letters: [
            { char: "ا", pronoun: "Elif", example: "أسد (Aslan)" },
            { char: "ب", pronoun: "Be", example: "باب (Kapı)" },
            { char: "ت", pronoun: "Te", example: "تفاحة (Elma)" }
        ]
    }
};
// Mevcut dillerin altına ekleyeceğimiz yeni Kiril dilleri:
const newCyrillicLangs = {
    ukrainian: {
        title: "Ukraynaca (Ukrayna Kiril)",
        history: "Ukrayna'nın resmi dilidir. Rusça Kiril alfabesinden farklı olarak 'І', 'Ї', 'Є' ve 'Ґ' gibi kendine has harfler içerir.",
        letters: [
            { char: "І і", pronoun: "İ", example: "Інформація (Bilgi)" },
            { char: "Ї ї", pronoun: "Yin", example: "Їжа (Yiyecek)" },
            { char: "Є є", pronoun: "Ye", example: "Єнот (Rakun)" }
        ]
    },
    belarusian: {
        title: "Beyaz Rusça (Belarusça)",
        history: "Belarus'un iki resmi dilinden biridir. Kiril alfabesinde en dikkat çekici detay 'Ў' (Noktalı U / Kısa U) harfidir.",
        letters: [
            { char: "Ў ў", pronoun: "Kısa U / W", example: "Возера (Göl)" },
            { char: "І і", pronoun: "İ", example: "Мінск (Minsk)" }
        ]
    },
    bulgarian: {
        title: "Bulgarca Tarihçesi",
        history: "Kiril alfabesinin doğduğu yer olarak kabul edilen Bulgaristan'ın dilidir. Slav dilleri arasında tek bükümsüz (eksel) dil yapısına sahiptir.",
        letters: [
            { char: "Ъ ъ", pronoun: "Er Golyam (Kapalı A/I)", example: "България (Bulgaristan)" },
            { char: "Щ щ", pronoun: "Şt", example: "Щастие (Mutluluk)" }
        ]
    },
    serbian: {
        title: "Sırpça (Vuk Kiril)",
        history: "Sırp Kiril alfabesi 'Okunduğu gibi yazılır' ilkesiyle tasarlanmış en fonetik alfabelerdendir. 'Љ', 'Њ', 'Ћ', 'Ђ' gibi özel karakterleri vardır.",
        letters: [
            { char: "Љ љ", pronoun: "Ly", example: "Љубав (Aşk)" },
            { char: "Њ њ", pronoun: "Ny", example: "Његош (Njegoš)" },
            { char: "Ђ ђ", pronoun: "C/Cı", example: "Ђакон (Diyakon)" }
        ]
    },
    macedonian: {
        title: "Makedonca",
        history: "Sırp Kiril alfabesine benzer ancak kendine has 'Ѓ', 'Ќ' ve 'Ѕ' harflerini barındıran güney Slav dilidir.",
        letters: [
            { char: "Ѕ ѕ", pronoun: "Dz", example: "Ѕвезда (Yıldız)" },
            { char: "Ѓ ѓ", pronoun: "Gj / Yumuşak G", example: "Ѓоган (Gjogan)" }
        ]
    },
    kazakh: {
        title: "Kazakça Kiril Alfabesi",
        history: "Kazakistan'da yaygın olarak kullanılan Kiril alfabesi, Türkçe sesleri karşılamak için 'Ә', 'Ғ', 'Қ', 'Ң', 'Ө', 'Ұ', 'Ү', 'Һ' harflerini içerir.",
        letters: [
            { char: "Ә ә", pronoun: "Açık E", example: "Әке (Baba)" },
            { char: "Қ қ", pronoun: "Kalın K", example: "Қазақстан (Kazakistan)" },
            { char: "Ө ө", pronoun: "Ö", example: "Өмір (Hayat)" }
        ]
    },
    tatar: {
        title: "Tatarca Kiril",
        history: "Tataristan'da kullanılan Kiril sürümünde Türkçe fonetiğe özel 'Ә', 'Ө', 'Ү', 'Җ', 'Ң', 'Һ' harfleri yer alır.",
        letters: [
            { char: "Җ җ", pronoun: "C", example: "Җыр (Şarkı)" },
            { char: "Ң ң", pronoun: "Sağır N (Ñ)", example: "Məңге (Sonsuz)" }
        ]
    },
    bashkir: {
        title: "Başkırca Kiril",
        history: "Başkortostan'da konuşulan Türk dilidir. Kiril alfabesinde ekstra olarak 'Ҙ' (Peltik Z) ve 'Ҡ' (K) gibi özel harfler bulunur.",
        letters: [
            { char: "Ҙ ҙ", pronoun: "Peltik Z (Th)", example: "Ҡаҙ (Kaz)" },
            { char: "Ҫ ҫ", pronoun: "Peltik S", example: "Ҫәс (Saç)" }
        ]
    },
    mongolian: {
        title: "Moğolca Kiril Alfabesi",
        history: "Moğolistan 1940'lardan beri Kiril alfabesini kullanmaktadır. Standart Rus Kiril'ine ek olarak 'Ө' ve 'Ү' harflerini içerir.",
        letters: [
            { char: "Ө ө", pronoun: "Ö", example: "Өглөө (Sabah)" },
            { char: "Ү ү", pronoun: "Ü", example: "Үүл (Bulut)" }
        ]
    },
    abkhaz: {
        title: "Abhazca Kiril",
        history: "Kafkas dillerinden biri olan Abhazcanın zengin ses yapısını ifade edebilmek için Kiril alfabesine 60'tan fazla karmaşık karakter eklenmiştir.",
        letters: [
            { char: "Ҟ ҟ", pronoun: "Gırtlak K", example: "Ҟабз (Gelenek)" },
            { char: "Ҩ ҩ", pronoun: "Çift Sesli O/W", example: "Ҩны (Ev)" }
        ]
    },
    abaza: {
        title: "Abazaca Kiril",
        history: "Abhazca ile akraba olan Abazaca, geniş ünsüz harf çeşitliliğine sahip Kiril tabanlı bir Kafkas dilidir.",
        letters: [
            { char: "Гъ гъ", pronoun: "Ğ", example: "Гъаза (Kaz)" },
            { char: "Къ къ", pronoun: "Sert K", example: "Къвырд (Kafkas)" }
        ]
    },
    avar: {
        title: "Avarca Kiril",
        history: "Dağıstan'ın en yaygın dillerinden biridir. Kiril alfabesinde gırtlak seslerini belirtmek için 'Palochka' (Ӏ) denilen çizgi simgesi sıkça kullanılır.",
        letters: [
            { char: "Ӏ", pronoun: "Palochka (Gırtlak Vurgusu)", example: "ГӀаракь (Rakı/İçecek)" },
            { char: "КӀ кӀ", pronoun: "Vurgulu K", example: "КӀал (Ağız)" }
        ]
    }
};

// Bu objeyi langData içine dahi edebilirsin.
Object.assign(langData, newCyrillicLangs);
