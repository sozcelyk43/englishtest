

const questionsByGrade = {
    5: {
        beginner: [

    {
                question: "What do you say to greet someone?",
                options: ["Goodbye", "Hello", "Thank you", "Sorry"],
                correctAnswer: "Hello",
                explanation: "'Hello' birisiyle selamlaşmak için kullanılır ve 'Merhaba' anlamına gelir."
    },
    {
        question: "What do you say when you meet someone in the morning?",
        options: ["Good evening", "Good night", "Good morning", "Goodbye"],
        correctAnswer: "Good morning",
        explanation: "'Good morning' (Günaydın), sabahları biriyle karşılaştığınızda kullanılır."
    },
    {
        question: "What sound does a cat make?",
        options: ["Woof", "Moo", "Meow", "Oink"],
        correctAnswer: "Meow",
        explanation: "Kediler 'Meow' (Miyav) diye ses çıkarır."
    },
    {
        question: "What color is the sky on a sunny day?",
        options: ["Green", "Black", "Blue", "Red"],
        correctAnswer: "Blue",
        explanation: "Güneşli bir günde gökyüzü 'blue' (mavi) renktedir."
    },
    {
        question: "Which number is between ten and twelve?",
        options: ["Nine", "Thirteen", "Eleven", "Twenty"],
        correctAnswer: "Eleven",
        explanation: "On ('ten') ve on iki ('twelve') arasında on bir ('eleven') vardır."
    },
    {
        question: "How many fingers do you have on one hand?",
        options: ["Ten", "Two", "Five", "One"],
        correctAnswer: "Five",
        explanation: "Bir elde 'five' (beş) parmak bulunur."
    },
    {
        question: "Which subject is about numbers?",
        options: ["Art", "Music", "Maths", "English"],
        correctAnswer: "Maths",
        explanation: "Sayılarla ilgili olan ders 'Maths' (Matematik) dersidir."
    },
    {
        question: "Which of these is a fruit?",
        options: ["Carrot", "Apple", "Potato", "Bread"],
        correctAnswer: "Apple",
        explanation: "'Apple' (elma) bir meyvedir."
    },
    {
        question: "What is the day after Friday?",
        options: ["Thursday", "Sunday", "Monday", "Saturday"],
        correctAnswer: "Saturday",
        explanation: "Cuma'dan ('Friday') sonraki gün Cumartesi'dir ('Saturday')."
    },
    {
        question: "Which number comes after seven?",
        options: ["Six", "Eight", "Nine", "Five"],
        correctAnswer: "Eight",
        explanation: "Yediden sonra sekiz ('Eight') gelir."
    },
    {
        question: "Where can you buy bread?",
        options: ["At the library", "At the hospital", "At the bakery", "At the school"],
        correctAnswer: "At the bakery",
        explanation: "Ekmek, 'bakery' (fırın) adı verilen yerden satın alınır."
    },
    {
        question: "What color is a banana?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: "Yellow",
        explanation: "Muzun rengi 'yellow' (sarı) dır."
    },
    {
        question: "What is the opposite of 'big'?",
        options: ["Tall", "Small", "Long", "Wide"],
        correctAnswer: "Small",
        explanation: "'Big' (büyük) kelimesinin zıt anlamlısı 'small' (küçük) kelimesidir."
    },
    {
        question: "How do you ask for someone's name?",
        options: ["How old are you?", "Where are you from?", "What is your name?", "How are you?"],
        correctAnswer: "What is your name?",
        explanation: "Birinin adını sormak için 'What is your name?' (Adın ne?) sorusu kullanılır."
    },
    {
        question: "Which of these is a pet?",
        options: ["Lion", "Tiger", "Dog", "Elephant"],
        correctAnswer: "Dog",
        explanation: "'Dog' (köpek), bir evcil hayvandır. Diğerleri vahşi hayvanlardır."
    },
    {
        question: "What do you use to write?",
        options: ["A chair", "A table", "A pencil", "A book"],
        correctAnswer: "A pencil",
        explanation: "Yazı yazmak için 'pencil' (kurşun kalem) kullanılır."
    },
    {
        question: "The instruction 'Turn right' means:",
        options: ["Düz git", "Sola dön", "Sağa dön", "Dur"],
        correctAnswer: "Sağa dön",
        explanation: "'Turn right' bir yön tarifidir ve 'Sağa dön' anlamına gelir."
    },
    {
        question: "A place with many books is a _______.",
        options: ["cinema", "pharmacy", "library", "cafe"],
        correctAnswer: "library",
        explanation: "İçinde çok sayıda kitap bulunan yere 'library' (kütüphane) denir."
    },
    {
        question: "Which activity do you do with a ball?",
        options: ["Swimming", "Reading", "Playing football", "Singing"],
        correctAnswer: "Playing football",
        explanation: "'Playing football' (futbol oynamak), topla yapılan bir aktivitedir."
    },
    {
        question: "What do you do in the morning after you wake up?",
        options: ["Go to bed", "Have dinner", "Wash your face", "Do homework"],
        correctAnswer: "Wash your face",
        explanation: "Sabah uyandıktan sonra genellikle 'wash your face' (yüzünü yıkamak) eylemi yapılır."
    },
    {
        question: "An activity you like to do in your free time is a _______.",
        options: ["job", "chore", "hobby", "rule"],
        correctAnswer: "hobby",
        explanation: "Boş zamanlarda yapılan sevilen aktivitelere 'hobby' (hobi) denir."
    },
    {
        question: "What is the meal you eat in the evening?",
        options: ["Breakfast", "Lunch", "Snack", "Dinner"],
        correctAnswer: "Dinner",
        explanation: "Akşam yenen yemeğe 'dinner' (akşam yemeği) denir."
    },
    {
        question: "Which of these is NOT a game?",
        options: ["Chess", "Tag", "Hide-and-seek", "Homework"],
        correctAnswer: "Homework",
        explanation: "'Homework' (ev ödevi) bir görevdir, diğerleri ise oyundur."
    },
    {
        question: "I _______ my teeth every morning.",
        options: ["brush", "eat", "play", "read"],
        correctAnswer: "brush",
        explanation: "'Brush my teeth' (dişlerimi fırçalamak) bir günlük rutindir."
    },
    {
        question: "What do you do when you are tired at night?",
        options: ["Wake up", "Go to bed", "Have breakfast", "Go to school"],
        correctAnswer: "Go to bed",
        explanation: "Gece yorulduğunuzda 'go to bed' (yatağa gitmek) eylemini yaparsınız."
    },
    {
        question: "Can you ride a _______?",
        options: ["book", "song", "bike", "game"],
        correctAnswer: "bike",
        explanation: "'Ride a bike' (bisiklete binmek) yaygın bir ifadedir."
    },
    {
        question: "I like _______ music.",
        options: ["listening to", "eating", "playing", "watching"],
        correctAnswer: "listening to",
        explanation: "Müzik için 'listening to' (dinlemek) fiili kullanılır."
    },
    {
        question: "He gets _______ at 8:00 and goes to school.",
        options: ["home", "dressed", "lunch", "dinner"],
        correctAnswer: "dressed",
        explanation: "'Get dressed' (giyinmek), genellikle okula gitmeden önce yapılan bir eylemdir."
    },
    {
        question: "If you have a headache, you should...",
        options: ["play football", "listen to loud music", "rest", "run"],
        correctAnswer: "rest",
        explanation: "Baş ağrısı ('headache') olduğunda 'rest' (dinlenmek) iyi bir fikirdir."
    },
    {
        question: "Which movie type is funny?",
        options: ["Horror", "Comedy", "Drama", "Sci-Fi"],
        correctAnswer: "Comedy",
        explanation: "'Comedy' (komedi) filmleri komik ve eğlenceli olur."
    },
    {
        question: "You should eat _______ food to be healthy.",
        options: ["junk", "unhealthy", "healthy", "fast"],
        correctAnswer: "healthy",
        explanation: "Sağlıklı olmak için 'healthy' (sağlıklı) yiyecekler yemeliyiz."
    },
    {
        question: "A movie with robots and spaceships is a _______ movie.",
        options: ["comedy", "romance", "sci-fi", "western"],
        correctAnswer: "sci-fi",
        explanation: "Robotların ve uzay gemilerinin olduğu filmler 'sci-fi' (bilim kurgu) türündedir."
    },
    {
        question: "What is the place where you watch movies?",
        options: ["Library", "Bakery", "Cinema", "Hospital"],
        correctAnswer: "Cinema",
        explanation: "Film izlediğimiz yere 'cinema' (sinema) denir."
    },
    {
        question: "A _______ helps sick people.",
        options: ["teacher", "doctor", "farmer", "pilot"],
        correctAnswer: "doctor",
        explanation: "'Doctor' (doktor), hasta insanlara yardım eder."
    },
    {
        question: "A scary movie is called a _______ movie.",
        options: ["horror", "comedy", "animation", "musical"],
        correctAnswer: "horror",
        explanation: "Korkutucu filmlere 'horror' (korku) filmi denir."
    },
    {
        question: "You should _______ your hands before eating.",
        options: ["dirty", "wash", "break", "clap"],
        correctAnswer: "wash",
        explanation: "Yemekten önce ellerimizi 'wash' (yıkamak) gerekir."
    },
    {
        question: "A _______ is a person who acts in a movie.",
        options: ["director", "writer", "actor", "singer"],
        correctAnswer: "actor",
        explanation: "Filmde rol alan kişiye 'actor' (aktör/oyuncu) denir."
    },
    {
        question: "If you have a toothache, you should go to the _______.",
        options: ["teacher", "baker", "dentist", "doctor"],
        correctAnswer: "dentist",
        explanation: "Diş ağrısı ('toothache') için 'dentist' (diş hekimi) gidilir."
    },
    {
                question: "What is the opposite of 'big'?",
                options: ["Small", "Tall", "Long", "Wide"],
                correctAnswer: "Small",
                explanation: "'Big' (büyük) kelimesinin zıttı 'small' (küçük) kelimesidir."
    },
            {
                question: "What is a place where you buy food?",
                options: ["Market", "School", "Park", "Hospital"],
                correctAnswer: "Market",
                explanation: "'Market' yiyecek satın aldığımız yerdir."
            },
            {
                question: "What is the color of grass?",
                options: ["Green", "Red", "Blue", "Yellow"],
                correctAnswer: "Green",
                explanation: "Çimenlerin rengi 'green' (yeşil) olur."
            },
            {
                question: "What do you do with a ball?",
                options: ["Eat", "Kick", "Read", "Sleep"],
                correctAnswer: "Kick",
                explanation: "Topa genellikle 'kick' (vurmak) eylemi yapılır."
            },
            {
                question: "What time do you wake up?",
                options: ["Night", "Morning", "Afternoon", "Evening"],
                correctAnswer: "Morning",
                explanation: "Genellikle 'morning' (sabah) uyanırız."
            },
            {
                question: "Who is your mother's husband?",
                options: ["Father", "Brother", "Sister", "Friend"],
                correctAnswer: "Father",
                explanation: "Annenizin eşi sizin 'father' (babanız) olur."
            },
            {
                question: "What is a 'cat'?",
                options: ["Fruit", "Animal", "Color", "Game"],
                correctAnswer: "Animal",
                explanation: "'Cat' (kedi) bir 'animal' (hayvan) türüdür."
            },
            {
                question: "What do you wear on your feet?",
                options: ["Hat", "Gloves", "Shoes", "Jacket"],
                correctAnswer: "Shoes",
                explanation: "Ayaklarımıza 'shoes' (ayakkabı) giyeriz."
            },
            {
                question: "Where do you play outside?",
                options: ["Kitchen", "Bedroom", "Playground", "Bathroom"],
                correctAnswer: "Playground",
                explanation: "Dışarıda oynamak için 'playground' (oyun parkı) kullanılır."
            },
            {
                question: "What do you do when you are tired?",
                options: ["Run", "Sleep", "Dance", "Sing"],
                correctAnswer: "Sleep",
                explanation: "Yorgun olduğumuzda 'sleep' (uyumak) ihtiyacı duyarız."
            },
            {
                question: "What is a 'movie'?",
                options: ["Book", "Song", "Film", "Game"],
                correctAnswer: "Film",
                explanation: "'Movie' kelimesi 'film' ile eş anlamlıdır."
            },
            {
                question: "What do you say at a birthday?",
                options: ["Good night", "Happy birthday", "See you", "Good morning"],
                correctAnswer: "Happy birthday",
                explanation: "Doğum günlerinde 'Happy birthday' (Mutlu yıllar) denir."
            },
            {
                question: "What is a sport you play with a ball?",
                options: ["Cooking", "Reading", "Football", "Drawing"],
                correctAnswer: "Football",
                explanation: "'Football' (futbol) topla oynanan bir spordur."
            },
            {
                question: "What is a 'dog'?",
                options: ["Plant", "Toy", "Animal", "Place"],
                correctAnswer: "Animal",
                explanation: "'Dog' (köpek) bir 'animal' (hayvan) türüdür."
            },
            {
                question: "What do you eat at a picnic?",
                options: ["Books", "Clothes", "Sandwiches", "Toys"],
                correctAnswer: "Sandwiches",
                explanation: "Pikniklerde genellikle 'sandwiches' (sandviçler) yenir."
            },
            {
                question: "What is the opposite of 'happy'?",
                options: ["Big", "Sad", "Fast", "Tall"],
                correctAnswer: "Sad",
                explanation: "'Happy' (mutlu) kelimesinin zıttı 'sad' (üzgün) kelimesidir."
            },
            {
                question: "What is a 'school'?",
                options: ["Place to sleep", "Place to learn", "Place to eat", "Place to play"],
                correctAnswer: "Place to learn",
                explanation: "'School' (okul) öğrenim görülen bir yerdir."
            },
            {
                question: "What do you use to write?",
                options: ["Spoon", "Pen", "Shoe", "Ball"],
                correctAnswer: "Pen",
                explanation: "Yazı yazmak için 'pen' (kalem) kullanırız."
            },
            {
                question: "What is the opposite of 'fast'?",
                options: ["Quick", "Slow", "High", "Low"],
                correctAnswer: "Slow",
                explanation: "'Fast' (hızlı) kelimesinin zıttı 'slow' (yavaş) kelimesidir."
            },
            {
                question: "Who is a 'friend'?",
                options: ["A stranger", "Someone you like", "A teacher", "A boss"],
                correctAnswer: "Someone you like",
                explanation: "'Friend' (arkadaş), sevdiğiniz ve anlaştığınız bir kişidir."
            },
            {
                question: "What do you do in a park?",
                options: ["Cook", "Study", "Play", "Sleep"],
                correctAnswer: "Play",
                explanation: "Parklarda genellikle 'play' (oynamak) eylemi yapılır."
            },
            {
                question: "What is a 'headache'?",
                options: ["Pain in leg", "Pain in head", "Pain in arm", "Pain in foot"],
                correctAnswer: "Pain in head",
                explanation: "'Headache', 'baş ağrısı' anlamına gelir."
            },
            {
                question: "What is a 'comedy' movie?",
                options: ["Scary", "Funny", "Sad", "Boring"],
                correctAnswer: "Funny",
                explanation: "'Comedy' (komedi) filmleri 'funny' (eğlenceli, komik) olur."
            },
            {
                question: "What do you wear to a party?",
                options: ["Casual clothes", "Formal clothes", "Sportswear", "School uniform"],
                correctAnswer: "Formal clothes",
                explanation: "Partilere genellikle 'formal clothes' (resmi kıyafetler) veya şık kıyafetler giyilir."
            },
            {
                question: "What is 'running'?",
                options: ["Color", "Sport", "Animal", "Place"],
                correctAnswer: "Sport",
                explanation: "'Running' (koşu) bir 'sport' (spor) türüdür."
            },
            {
                question: "What is a 'bird'?",
                options: ["Toy", "Plant", "Animal", "Book"],
                correctAnswer: "Animal",
                explanation: "'Bird' (kuş) bir 'animal' (hayvan) türüdür."
            },
            {
                question: "What do you do at a festival?",
                options: ["Work", "Study", "Dance", "Sleep"],
                correctAnswer: "Dance",
                explanation: "Festivallerde genellikle 'dance' (dans) edilir ve eğlenilir."
            },
            {
                question: "What is the opposite of 'old'?",
                options: ["Young", "Big", "Tall", "Fast"],
                correctAnswer: "Young",
                explanation: "'Old' (yaşlı) kelimesinin zıttı 'young' (genç) kelimesidir."
            },
            {
                question: "What is a 'hospital'?",
                options: ["Place for shopping", "Place for sick people", "Place for playing", "Place for cooking"],
                correctAnswer: "Place for sick people",
                explanation: "'Hospital' (hastane), hasta insanlar için olan bir yerdir."
            },
            {
                question: "What do you call a best friend?",
                options: ["Teacher", "Stranger", "Pal", "Enemy"],
                correctAnswer: "Pal",
                explanation: "'Pal', en iyi arkadaş anlamına gelen samimi bir ifadedir."
            },
            {
                question: "What do you drink?",
                options: ["Book", "Water", "Ball", "Pen"],
                correctAnswer: "Water",
                explanation: "'Water' (su) içilebilen bir sıvıdır."
            },
            {
                question: "What is a 'hobby'?",
                options: ["Something you eat", "Something you like to do", "Something you wear", "Something you read"],
                correctAnswer: "Something you like to do",
                explanation: "'Hobby' (hobi), yapmaktan hoşlandığınız bir aktivitedir."
            },
            {
                question: "What is the opposite of 'up'?",
                options: ["Left", "Down", "Right", "In"],
                correctAnswer: "Down",
                explanation: "'Up' (yukarı) kelimesinin zıttı 'down' (aşağı) kelimesidir."
            },
            {
                question: "Who is a 'teacher'?",
                options: ["Person who cooks", "Person who teaches", "Person who plays", "Person who sings"],
                correctAnswer: "Person who teaches",
                explanation: "'Teacher' (öğretmen), bir şeyler öğreten kişidir."
            },
            {
                question: "What do you do with a book?",
                options: ["Wear", "Eat", "Read", "Kick"],
                correctAnswer: "Read",
                explanation: "Kitaplar 'read' (okumak) içindir."
            },
            {
                question: "What is a 'fever'?",
                options: ["Cold body", "High body temperature", "Fast running", "Loud noise"],
                correctAnswer: "High body temperature",
                explanation: "'Fever' (ateş), yüksek vücut sıcaklığı anlamına gelir."
            },
            {
                question: "What is an 'action' movie?",
                options: ["Sad", "Exciting", "Funny", "Slow"],
                correctAnswer: "Exciting",
                explanation: "'Action' (aksiyon) filmleri genellikle 'exciting' (heyecan verici) olur."
            },
            {
                question: "What is a 'cake'?",
                options: ["Toy", "Food", "Cloth", "Game"],
                correctAnswer: "Food",
                explanation: "'Cake' (pasta) bir 'food' (yiyecek) türüdür."
            },
            {
                question: "What is 'swimming'?",
                options: ["Color", "Animal", "Sport", "Place"],
                correctAnswer: "Sport",
                explanation: "'Swimming' (yüzme) bir 'sport' (spor) türüdür."
            },
            {
                question: "What do you do after school?",
                options: ["Cook", "Do homework", "Work", "Sleep"],
                correctAnswer: "Do homework",
                explanation: "Okuldan sonra genellikle 'do homework' (ödev yapmak) gerekir."
            },
            {
                question: "Who is in your 'family'?",
                options: ["Coworkers", "People you live with", "Strangers", "Teachers"],
                correctAnswer: "People you live with",
                explanation: "'Family' (aile), birlikte yaşadığınız insanlardır."
            },
            {
                question: "What do you eat for breakfast?",
                options: ["Eggs", "Cereal", "Pizza", "Ice cream"],
                correctAnswer: "Eggs",
                explanation: "Kahvaltıda 'eggs' (yumurta) yaygın bir yiyecektir. Cereal (gevrek) de doğru olabilir."
            },
            {
                question: "What is a 'bus'?",
                options: ["Food", "Vehicle", "Toy", "Cloth"],
                correctAnswer: "Vehicle",
                explanation: "'Bus' (otobüs) bir 'vehicle' (taşıt) türüdür."
            },
            {
                question: "What do you say to thank someone?",
                options: ["Sorry", "Hello", "Thank you", "Goodbye"],
                correctAnswer: "Thank you",
                explanation: "Birine teşekkür etmek için 'Thank you' (Teşekkür ederim) denir."
            },
            {
                question: "What is a 'table'?",
                options: ["Food", "Furniture", "Animal", "Sport"],
                correctAnswer: "Furniture",
                explanation: "'Table' (masa) bir 'furniture' (mobilya) türüdür."
            },
            {
                question: "What do you do in the classroom?",
                options: ["Cook", "Play", "Study", "Sleep"],
                correctAnswer: "Study",
                explanation: "Sınıfta 'study' (ders çalışmak) yapılır."
            },
            {
                question: "What is the opposite of 'long'?",
                options: ["Big", "Short", "Tall", "Wide"],
                correctAnswer: "Short",
                explanation: "'Long' (uzun) kelimesinin zıttı 'short' (kısa) kelimesidir."
            },
            {
                question: "What is a 'garden'?",
                options: ["Place to sleep", "Place with plants", "Place to eat", "Place to work"],
                correctAnswer: "Place with plants",
                explanation: "'Garden' (bahçe), bitkilerin olduğu bir yerdir."
            },
            {
                question: "Who is a 'student'?",
                options: ["Person who cooks", "Person who learns", "Person who drives", "Person who sings"],
                correctAnswer: "Person who learns",
                explanation: "'Student' (öğrenci), öğrenen kişidir."
            },
            {
                question: "What is a 'chair'?",
                options: ["Something to sit on", "Something to eat", "Something to wear", "Something to read"],
                correctAnswer: "Something to sit on",
                explanation: "'Chair' (sandalye), üzerine oturulan bir eşyadır."
            },
            {
                question: "What do you say to apologize?",
                options: ["Hello", "Sorry", "Thank you", "Goodbye"],
                correctAnswer: "Sorry",
                explanation: "Özür dilemek için 'Sorry' (Üzgünüm/Özür dilerim) denir."
            },
            {
                question: "What is the opposite of 'hot'?",
                options: ["Warm", "Cold", "Dry", "Wet"],
                correctAnswer: "Cold",
                explanation: "'Hot' (sıcak) kelimesinin zıttı 'cold' (soğuk) kelimesidir."
            },
            {
                question: "Who is a 'sister'?",
                options: ["Female sibling", "Male sibling", "Teacher", "Friend"],
                correctAnswer: "Female sibling",
                explanation: "'Sister' (kız kardeş), kadın olan kardeştir."
            },
            {
                question: "What do you wear on your head?",
                options: ["Shoes", "Jacket", "Hat", "Gloves"],
                correctAnswer: "Hat",
                explanation: "Başımıza 'hat' (şapka) takarız."
            },
            {
                question: "What is a 'market'?",
                options: ["Place to sleep", "Place to buy things", "Place to study", "Place to play"],
                correctAnswer: "Place to buy things",
                explanation: "'Market', bir şeyler satın alınan bir yerdir."
            },
            {
                question: "What do you do with a pencil?",
                options: ["Eat", "Write", "Kick", "Wear"],
                correctAnswer: "Write",
                explanation: "Kurşun kalem ('pencil') ile 'write' (yazmak) eylemi yapılır."
            },
            {
                question: "Who is a 'brother'?",
                options: ["Teacher", "Male sibling", "Friend", "Sister"],
                correctAnswer: "Male sibling",
                explanation: "'Brother' (erkek kardeş), erkek olan kardeştir."
            },
            {
                question: "What is the opposite of 'dark'?",
                options: ["Light", "Heavy", "Big", "Small"],
                correctAnswer: "Light",
                explanation: "'Dark' (karanlık) kelimesinin zıttı 'light' (aydınlık) kelimesidir."
            },
            {
                question: "What do you eat for lunch?",
                options: ["Book", "Soup", "Pen", "Shoe"],
                correctAnswer: "Soup",
                explanation: "Öğle yemeğinde 'soup' (çorba) içilebilir."
            },
            {
                question: "What is a 'bed'?",
                options: ["Something to sleep on", "Something to eat", "Something to wear", "Something to read"],
                correctAnswer: "Something to sleep on",
                explanation: "'Bed' (yatak), üzerinde uyunulan bir eşyadır."
            },
            {
                question: "What do you say to say goodbye?",
                options: ["Hello", "Thank you", "Goodbye", "Sorry"],
                correctAnswer: "Goodbye",
                explanation: "Vedalaşmak için 'Goodbye' (Hoşça kal) denir."
            },
            {
                question: "What is a 'balloon'?",
                options: ["Food", "Toy", "Cloth", "Book"],
                correctAnswer: "Toy",
                explanation: "'Balloon' (balon) genellikle bir 'toy' (oyuncak) olarak kullanılır."
            },
            {
                question: "What do you do at a birthday party?",
                options: ["Work", "Study", "Sing", "Sleep"],
                correctAnswer: "Sing",
                explanation: "Doğum günü partilerinde 'sing' (şarkı söylemek) yaygındır."
            },
            {
                question: "What is a 'fish'?",
                options: ["Plant", "Animal", "Toy", "Color"],
                correctAnswer: "Animal",
                explanation: "'Fish' (balık) bir 'animal' (hayvan) türüdür."
            },
            {
                question: "What do you wear in winter?",
                options: ["Swimsuit", "Jacket", "T-shirt", "Shorts"],
                correctAnswer: "Jacket",
                explanation: "Kışın 'jacket' (ceket, mont) giyilir."
            },
            {
                question: "What is a 'gift'?",
                options: ["Something you give", "Something you eat", "Something you wear", "Something you read"],
                correctAnswer: "Something you give",
                explanation: "'Gift' (hediye), birine verilen bir şeydir."
            },
            {
                question: "What do you do in a library?",
                options: ["Play", "Cook", "Read", "Sleep"],
                correctAnswer: "Read",
                explanation: "Kütüphanede ('library') kitap 'read' (okumak) için gidilir."
            },
            {
                question: "What is a 'flower'?",
                options: ["Animal", "Plant", "Toy", "Food"],
                correctAnswer: "Plant",
                explanation: "'Flower' (çiçek) bir 'plant' (bitki) türüdür."
            },
            {
                question: "What is the opposite of 'loud'?",
                options: ["Noisy", "Quiet", "Big", "Small"],
                correctAnswer: "Quiet",
                explanation: "'Loud' (yüksek sesli) kelimesinin zıttı 'quiet' (sessiz) kelimesidir."
            },
            {
                question: "What do you eat for dinner?",
                options: ["Pen", "Rice", "Book", "Shoe"],
                correctAnswer: "Rice",
                explanation: "Akşam yemeğinde 'rice' (pilav) yenebilir."
            },
            {
                question: "What is a 'door'?",
                options: ["Something to eat", "Something to open", "Something to wear", "Something to read"],
                correctAnswer: "Something to open",
                explanation: "'Door' (kapı), açılıp kapanan bir nesnedir."
            },
            {
                question: "What do you say to ask for something?",
                options: ["Please", "Thank you", "Goodbye", "Sorry"],
                correctAnswer: "Please",
                explanation: "Bir şey isterken kibarca 'Please' (Lütfen) denir."
            },
            {
                question: "What is a 'rabbit'?",
                options: ["Plant", "Toy", "Animal", "Color"],
                correctAnswer: "Animal",
                explanation: "'Rabbit' (tavşan) bir 'animal' (hayvan) türüdür."
            },
            {
                question: "What do you wear on your hands?",
                options: ["Hat", "Shoes", "Gloves", "Jacket"],
                correctAnswer: "Gloves",
                explanation: "Ellerimize 'gloves' (eldiven) takarız."
            },
            {
                question: "What is a 'kitchen'?",
                options: ["Place to cook", "Place to sleep", "Place to study", "Place to play"],
                correctAnswer: "Place to cook",
                explanation: "'Kitchen' (mutfak), yemek pişirilen yerdir."
            },
            {
                question: "What do you do with a toy?",
                options: ["Eat", "Play", "Write", "Wear"],
                correctAnswer: "Play",
                explanation: "Oyuncaklarla ('toy') 'play' (oynamak) eylemi yapılır."
            },
            {
                question: "What is the opposite of 'wet'?",
                options: ["Dry", "Cold", "Hot", "Big"],
                correctAnswer: "Dry",
                explanation: "'Wet' (ıslak) kelimesinin zıttı 'dry' (kuru) kelimesidir."
            },
            {
                question: "What do you eat for a snack?",
                options: ["Book", "Fruit", "Pen", "Shoe"],
                correctAnswer: "Fruit",
                explanation: "Atıştırmalık olarak 'fruit' (meyve) sağlıklı bir seçenektir."
            },
            {
                question: "What is a 'window'?",
                options: ["Something to eat", "Something to look through", "Something to wear", "Something to read"],
                correctAnswer: "Something to look through",
                explanation: "'Window' (pencere), dışarıya bakmak için kullanılır."
            },
            {
                question: "What do you say to introduce yourself?",
                options: ["Goodbye", "My name is...", "Thank you", "Sorry"],
                correctAnswer: "My name is...",
                explanation: "Kendinizi tanıtmak için 'My name is...' (Benim adım...) dersiniz."
            },
            {
                question: "What is a 'tree'?",
                options: ["Animal", "Toy", "Plant", "Food"],
                correctAnswer: "Plant",
                explanation: "'Tree' (ağaç) bir 'plant' (bitki) türüdür."
            },
            {
                question: "What do you do in a bedroom?",
                options: ["Cook", "Sleep", "Play", "Study"],
                correctAnswer: "Sleep",
                explanation: "Yatak odasında ('bedroom') genellikle 'sleep' (uyumak) eylemi yapılır."
            },
            {
                question: "What is a 'cup'?",
                options: ["Something to drink from", "Something to eat", "Something to wear", "Something to read"],
                correctAnswer: "Something to drink from",
                explanation: "'Cup' (fincan/bardak), içecek içmek için kullanılır."
            },
            {
                question: "What is the opposite of 'heavy'?",
                options: ["Light", "Big", "Tall", "Long"],
                correctAnswer: "Light",
                explanation: "'Heavy' (ağır) kelimesinin zıttı 'light' (hafif) kelimesidir."
            },
            {
                question: "Who is a 'neighbor'?",
                options: ["Person at school", "Person nearby", "Person at work", "Person in family"],
                correctAnswer: "Person nearby",
                explanation: "'Neighbor' (komşu), yakınınızda yaşayan kişidir."
            },
            {
                question: "What do you do with a phone?",
                options: ["Eat", "Call", "Wear", "Write"],
                correctAnswer: "Call",
                explanation: "Telefon ile 'call' (aramak) yapabilirsiniz."
            },
            {
                question: "What is a 'plate'?",
                options: ["Something to eat from", "Something to wear", "Something to read", "Something to play with"],
                correctAnswer: "Something to eat from",
                explanation: "'Plate' (tabak), üzerinden yemek yenilen bir eşyadır."
            },
            {
                question: "What is the opposite of 'near'?",
                options: ["Close", "Far", "Next to", "Behind"],
                correctAnswer: "Far",
                explanation: "'Near' (yakın) kelimesinin zıttı 'far' (uzak) kelimesidir."
            },
            {
                question: "What do you wear in summer?",
                options: ["Jacket", "T-shirt", "Gloves", "Coat"],
                correctAnswer: "T-shirt",
                explanation: "Yazın 'T-shirt' (tişört) gibi ince kıyafetler giyilir."
            },
            {
                question: "What is a 'team'?",
                options: ["Type of food", "Group of people", "Kind of game", "Single person"],
                correctAnswer: "Group of people",
                explanation: "'Team' (takım), bir grup insandan oluşur."
            },
            {
                question: "What do you do at a picnic?",
                options: ["Study", "Eat", "Work", "Sleep"],
                correctAnswer: "Eat",
                explanation: "Piknikte temel aktivite 'eat' (yemek yemek) ve dinlenmektir."
            },
            {
                question: "What is the 'sun'?",
                options: ["Animal", "Star", "Plant", "Toy"],
                correctAnswer: "Star",
                explanation: "'Sun' (Güneş) bir 'star' (yıldız) türüdür."
            },
            {
                question: "What is the opposite of 'day'?",
                options: ["Night", "Morning", "Evening", "Afternoon"],
                correctAnswer: "Night",
                explanation: "'Day' (gündüz) kelimesinin zıttı 'night' (gece) kelimesidir."
            },
            {
                question: "What do you do with a kite?",
                options: ["Eat", "Fly", "Wear", "Write"],
                correctAnswer: "Fly",
                explanation: "Uçurtma ('kite') 'fly' (uçurmak) için kullanılır."
            },
            {
                question: "What is a 'clock'?",
                options: ["Something to tell time", "Something to eat", "Something to wear", "Something to read"],
                correctAnswer: "Something to tell time",
                explanation: "'Clock' (saat), zamanı söyleyen bir alettir."
            },
            {
                question: "What do you drink in the morning?",
                options: ["Milk", "Soda", "Ice cream", "Soup"],
                correctAnswer: "Milk",
                explanation: "Sabahları 'milk' (süt) içmek yaygındır."
            }
        ],
     
        intermediate: [
            {
                question: "Where do you buy bread?",
                options: ["Bakery", "Library", "Gym", "Zoo"],
                correctAnswer: "Bakery",
                explanation: "Ekmek almak için 'bakery' (fırın) adı verilen yere gidilir."
            },
            {
                question: "What do you say when you leave?",
                options: ["Hello", "Thank you", "Goodbye", "Please"],
                correctAnswer: "Goodbye",
                explanation: "Bir yerden ayrılırken 'Goodbye' (Hoşça kal) denir."
            },
            {
                question: "What do you like to do in your free time?",
                options: ["Work", "Play games", "Sleep", "Study"],
                correctAnswer: "Play games",
                explanation: "Boş zamanlarda 'play games' (oyun oynamak) popüler bir aktivitedir."
            },
            {
                question: "What time do you go to bed?",
                options: ["Morning", "Night", "Afternoon", "Evening"],
                correctAnswer: "Night",
                explanation: "Genellikle 'night' (gece) yatağa gidilir."
            },
            {
                question: "What do you take when you have a cold?",
                options: ["Book", "Medicine", "Toy", "Food"],
                correctAnswer: "Medicine",
                explanation: "Soğuk algınlığında 'medicine' (ilaç) alınır."
            },
            {
                question: "What kind of movie is 'Star Wars'?",
                options: ["Comedy", "Romance", "Science fiction", "Horror"],
                correctAnswer: "Science fiction",
                explanation: "'Star Wars' bir 'science fiction' (bilim kurgu) filmidir."
            },
            {
                question: "What do you send for a party?",
                options: ["Homework", "Invitation", "Gift", "Letter"],
                correctAnswer: "Invitation",
                explanation: "Bir partiye insanları çağırmak için 'invitation' (davetiye) gönderilir."
            },
            {
                question: "What do you need to play soccer?",
                options: ["Pen", "Ball", "Book", "Hat"],
                correctAnswer: "Ball",
                explanation: "Futbol oynamak için bir 'ball' (top) gereklidir."
            },
            {
                question: "What do you feed a dog?",
                options: ["Clothes", "Books", "Food", "Toys"],
                correctAnswer: "Food",
                explanation: "Köpekler 'food' (mama/yiyecek) ile beslenir."
            },
            {
                question: "What do you wear in winter?",
                options: ["Swimsuit", "T-shirt", "Jacket", "Shorts"],
                correctAnswer: "Jacket",
                explanation: "Kışın sıcak tutması için 'jacket' (ceket/mont) giyilir."
            },
            {
                question: "What is a place in your town?",
                options: ["Apple", "Car", "Library", "Tree"],
                correctAnswer: "Library",
                explanation: "'Library' (kütüphane) bir şehirde bulunabilecek bir yerdir."
            },
            {
                question: "What game do you play with a racket?",
                options: ["Football", "Basketball", "Tennis", "Volleyball"],
                correctAnswer: "Tennis",
                explanation: "'Tennis' (tenis) raketle oynanan bir spordur."
            },
            {
                question: "What do you do every morning?",
                options: ["Play soccer", "Watch TV", "Brush teeth", "Read a book"],
                correctAnswer: "Brush teeth",
                explanation: "Her sabah yapılması gereken bir alışkanlık 'brush teeth' (diş fırçalamak) eylemidir."
            },
            {
                question: "What is bad for your health?",
                options: ["Eating fruit", "Exercise", "Smoking", "Sleeping"],
                correctAnswer: "Smoking",
                explanation: "'Smoking' (sigara içmek) sağlığa zararlıdır."
            },
            {
                question: "What do you watch at the cinema?",
                options: ["Song", "Movie", "Book", "Game"],
                correctAnswer: "Movie",
                explanation: "Sinemada 'movie' (film) izlenir."
            },
            {
                question: "What do you bring to a birthday party?",
                options: ["Toothbrush", "Schoolbag", "Gift", "Homework"],
                correctAnswer: "Gift",
                explanation: "Doğum günü partisine 'gift' (hediye) getirilir."
            },
            {
                question: "What sport uses a pool?",
                options: ["Football", "Swimming", "Basketball", "Tennis"],
                correctAnswer: "Swimming",
                explanation: "'Swimming' (yüzme) havuzda yapılan bir spordur."
            },
            {
                question: "What animal lives in a shelter?",
                options: ["Snake", "Fish", "Cat", "Bird"],
                correctAnswer: "Cat",
                explanation: "Hayvan barınaklarında ('shelter') genellikle 'cat' (kedi) gibi evcil hayvanlar bulunur."
            },
            {
                question: "What do you see at a festival?",
                options: ["Sleeping", "Dancing", "Homework", "Working"],
                correctAnswer: "Dancing",
                explanation: "Festivallerde 'dancing' (dans eden) insanlar görebilirsiniz."
            },
            {
                question: "What is the opposite of 'near'?",
                options: ["Close", "Behind", "Far", "Next to"],
                correctAnswer: "Far",
                explanation: "'Near' (yakın) kelimesinin zıttı 'far' (uzak) kelimesidir."
            },
            {
                question: "What do you do in a library?",
                options: ["Sleep", "Eat", "Read", "Play"],
                correctAnswer: "Read",
                explanation: "Kütüphaneye ('library') kitap 'read' (okumak) için gidilir."
            },
            {
                question: "What do you use for a hobby?",
                options: ["Spoon", "Paint", "Shoe", "Ball"],
                correctAnswer: "Paint",
                explanation: "Resim yapmak gibi bir hobi için 'paint' (boya) kullanılır."
            },
            {
                question: "What do you feel when you are sick?",
                options: ["Excited", "Tired", "Happy", "Strong"],
                correctAnswer: "Tired",
                explanation: "Hasta olduğunuzda genellikle 'tired' (yorgun) hissedersiniz."
            },
            {
                question: "What is a 'horror' movie?",
                options: ["Funny", "Romantic", "Scary", "Exciting"],
                correctAnswer: "Scary",
                explanation: "'Horror' (korku) filmleri 'scary' (korkutucu) olur."
            },
            {
                question: "What do you say to accept an invitation?",
                options: ["No, thanks", "Maybe later", "Yes, please", "I’m busy"],
                correctAnswer: "Yes, please",
                explanation: "Bir daveti kabul etmek için 'Yes, please' (Evet, lütfen) denir."
            },
            {
                question: "What do you wear for fitness?",
                options: ["Dress", "Suit", "Sneakers", "Hat"],
                correctAnswer: "Sneakers",
                explanation: "Spor yapmak için 'sneakers' (spor ayakkabı) giyilir."
            },
            {
                question: "What do you give to an animal?",
                options: ["Pen", "Book", "Water", "Shirt"],
                correctAnswer: "Water",
                explanation: "Hayvanlara yiyecek dışında 'water' (su) verilir."
            },
            {
                question: "What is a common festival food?",
                options: ["Cake", "Sandwich", "Salad", "Soup"],
                correctAnswer: "Cake",
                explanation: "Festivallerde ve kutlamalarda 'cake' (pasta) yaygın bir yiyecektir."
            },
            {
                question: "What is a place to exercise?",
                options: ["Bedroom", "Kitchen", "Gym", "Bathroom"],
                correctAnswer: "Gym",
                explanation: "'Gym' (spor salonu) egzersiz yapılan bir yerdir."
            },
            {
                question: "What do you do with friends?",
                options: ["Study", "Work", "Play", "Sleep"],
                correctAnswer: "Play",
                explanation: "Arkadaşlarla genellikle 'play' (oynamak) ve vakit geçirmek için buluşulur."
            },
            {
                question: "What is a 'cough'?",
                options: ["Pain in head", "Pain in leg", "Sound from throat", "High fever"],
                correctAnswer: "Sound from throat",
                explanation: "'Cough' (öksürük), boğazdan gelen bir sestir."
            },
            {
                question: "What is a 'romance' movie about?",
                options: ["Fighting", "Monsters", "Love", "Space"],
                correctAnswer: "Love",
                explanation: "'Romance' (romantik) filmler 'love' (aşk) hakkındadır."
            },
            {
                question: "What do you use for a party decoration?",
                options: ["Pen", "Book", "Balloon", "Shoe"],
                correctAnswer: "Balloon",
                explanation: "Parti dekorasyonu için 'balloon' (balon) kullanılır."
            },
            {
                question: "What sport uses a basket?",
                options: ["Tennis", "Football", "Basketball", "Swimming"],
                correctAnswer: "Basketball",
                explanation: "'Basketball' (basketbol) pota ('basket') kullanılarak oynanır."
            },
            {
                question: "What do you adopt from a shelter?",
                options: ["Book", "Car", "Pet", "Clothes"],
                correctAnswer: "Pet",
                explanation: "Hayvan barınağından 'pet' (evcil hayvan) sahiplenilir."
            },
            {
                question: "What do you wear at a festival?",
                options: ["Pajamas", "Swimsuit", "Costume", "Uniform"],
                correctAnswer: "Costume",
                explanation: "Bazı festivallerde özel 'costume' (kostüm) giyilir."
            },
            {
                question: "Who is a 'neighbor'?",
                options: ["Person at school", "Person nearby", "Person at work", "Person in family"],
                correctAnswer: "Person nearby",
                explanation: "'Neighbor' (komşu), yakınınızda oturan kişidir."
            },
            {
                question: "What do you do every day?",
                options: ["Buy a car", "Eat breakfast", "Go on vacation", "Plant a tree"],
                correctAnswer: "Eat breakfast",
                explanation: "Her gün yapılan bir rutin 'eat breakfast' (kahvaltı yapmak) eylemidir."
            },
            {
                question: "What helps you stay healthy?",
                options: ["Watching TV", "Playing video games", "Eating vegetables", "Sleeping late"],
                correctAnswer: "Eating vegetables",
                explanation: "'Eating vegetables' (sebze yemek) sağlıklı kalmaya yardımcı olur."
            },
            {
                question: "What do you do to stay fit?",
                options: ["Watch TV", "Eat candy", "Exercise", "Sleep"],
                correctAnswer: "Exercise",
                explanation: "Formda kalmak için 'exercise' (egzersiz) yapılır."
            },
            {
                question: "What is a 'cinema'?",
                options: ["Place to sleep", "Place to watch movies", "Place to eat", "Place to play"],
                correctAnswer: "Place to watch movies",
                explanation: "'Cinema' (sinema), film izlenen bir yerdir."
            },
            {
                question: "What do you say to ask for help?",
                options: ["Go away!", "I’m fine!", "Please help me!", "Give me!"],
                correctAnswer: "Please help me!",
                explanation: "Yardım istemek için kibarca 'Please help me!' (Lütfen bana yardım edin!) denir."
            },
            {
                question: "What is a 'team'?",
                options: ["Type of food", "Single person", "Group of people", "Kind of game"],
                correctAnswer: "Group of people",
                explanation: "'Team' (takım), bir grup insandan oluşur."
            },
            {
                question: "What do you use to draw?",
                options: ["Spoon", "Pencil", "Shoe", "Ball"],
                correctAnswer: "Pencil",
                explanation: "Çizim yapmak için 'pencil' (kurşun kalem) kullanılır."
            },
            {
                question: "What do you do at a fair?",
                options: ["Study", "Ride a Ferris wheel", "Work", "Sleep"],
                correctAnswer: "Ride a Ferris wheel",
                explanation: "Panayırlarda 'ride a Ferris wheel' (dönme dolaba binmek) gibi aktiviteler yapılır."
            },
            {
                question: "What do you say to suggest a game?",
                options: ["Let’s play!", "I’m tired!", "Go away!", "No way!"],
                correctAnswer: "Let’s play!",
                explanation: "Bir oyun önermek için 'Let’s play!' (Hadi oynayalım!) denir."
            },
            {
                question: "What is a 'schedule'?",
                options: ["Type of food", "Plan for the day", "Kind of game", "Piece of clothing"],
                correctAnswer: "Plan for the day",
                explanation: "'Schedule' (program/plan), gün için yapılan bir plandır."
            },
            {
                question: "What is a 'sore throat'?",
                options: ["Pain in head", "Pain in throat", "Pain in leg", "High fever"],
                correctAnswer: "Pain in throat",
                explanation: "'Sore throat', boğaz ağrısı anlamına gelir."
            },
            {
                question: "What do you say to decline an invitation?",
                options: ["I’m sorry, I can’t", "I’d love to", "See you there", "Sounds great"],
                correctAnswer: "I’m sorry, I can’t",
                explanation: "Bir daveti reddetmek için kibarca 'I’m sorry, I can’t' (Üzgünüm, gelemem) denir."
            },
            {
                question: "What do you need for a picnic?",
                options: ["Schoolbag", "Blanket", "Toothbrush", "Laptop"],
                correctAnswer: "Blanket",
                explanation: "Piknik için yere sermek üzere 'blanket' (battaniye) gerekir."
            },
            {
                question: "What is a 'volleyball'?",
                options: ["Food", "Sport", "Animal", "Place"],
                correctAnswer: "Sport",
                explanation: "'Volleyball' (voleybol) bir spor dalıdır."
            },
            {
                question: "What is a 'museum'?",
                options: ["Place to sleep", "Place to eat", "Place to see history", "Place to play"],
                correctAnswer: "Place to see history",
                explanation: "'Museum' (müze), tarihi eserlerin görüldüğü bir yerdir."
            },
            {
                question: "What do you say to offer help?",
                options: ["Go away!", "Can I help you?", "I’m fine!", "No way!"],
                correctAnswer: "Can I help you?",
                explanation: "Yardım teklif etmek için 'Can I help you?' (Yardım edebilir miyim?) denir."
            },
            {
                question: "What is a 'rule'?",
                options: ["Something you eat", "Something you wear", "Something you must follow", "Something you read"],
                correctAnswer: "Something you must follow",
                explanation: "'Rule' (kural), uyulması gereken bir şeydir."
            },
            {
                question: "What do you do to relax?",
                options: ["Work", "Read a book", "Study", "Run"],
                correctAnswer: "Read a book",
                explanation: "Rahatlamak için 'read a book' (kitap okumak) iyi bir aktivitedir."
            },
            {
                question: "What do you say to ask the time?",
                options: ["What time is it?", "Where are you?", "How are you?", "What is this?"],
                correctAnswer: "What time is it?",
                explanation: "Saati sormak için 'What time is it?' (Saat kaç?) denir."
            },
            {
                question: "What do you wear when it rains?",
                options: ["T-shirt", "Swimsuit", "Raincoat", "Shorts"],
                correctAnswer: "Raincoat",
                explanation: "Yağmur yağdığında 'raincoat' (yağmurluk) giyilir."
            },
            {
                question: "What is a 'hobby' like painting?",
                options: ["Something you eat", "Something you do for fun", "Something you wear", "Something you read"],
                correctAnswer: "Something you do for fun",
                explanation: "Resim yapmak gibi bir hobi, eğlence için yapılan bir şeydir."
            },
            {
                question: "What do you do at a concert?",
                options: ["Study", "Listen to music", "Work", "Sleep"],
                correctAnswer: "Listen to music",
                explanation: "Konserde 'listen to music' (müzik dinlemek) için gidilir."
            },
            {
                question: "Who is a 'doctor'?",
                options: ["Person who sells food", "Person who helps sick people", "Person who builds houses", "Person who writes books"],
                correctAnswer: "Person who helps sick people",
                explanation: "'Doctor' (doktor), hasta insanlara yardım eden kişidir."
            },
            {
                question: "What do you say to congratulate someone?",
                options: ["I’m sorry!", "Well done!", "Go away!", "No way!"],
                correctAnswer: "Well done!",
                explanation: "Birini tebrik etmek için 'Well done!' (Aferin!/Harika iş!) denir."
            },
            {
                question: "What do you need for a game?",
                options: ["Schoolbag", "Ball", "Toothbrush", "Laptop"],
                correctAnswer: "Ball",
                explanation: "Birçok oyun için 'ball' (top) gereklidir."
            },
    {
        question: "Who works in a school and teaches students?",
        options: ["Doctor", "Teacher", "Farmer", "Pilot"],
        correctAnswer: "Teacher",
        explanation: "Okulda çalışan ve öğrencilere ders anlatan kişiye 'teacher' (öğretmen) denir."
    },
    {
        question: "Where do you go to watch a football match?",
        options: ["Cinema", "Stadium", "Library", "Museum"],
        correctAnswer: "Stadium",
        explanation: "Futbol maçı izlemek için 'stadium' (stadyum) adı verilen yere gidilir."
    },
    {
        question: "I have a toothache. I should see a _______.",
        options: ["baker", "dentist", "teacher", "mechanic"],
        correctAnswer: "dentist",
        explanation: "Diş ağrısı ('toothache') için bir 'dentist' (diş hekimi) görünmek gerekir."
    },
    {
        question: "What do you do before you eat a meal?",
        options: ["You sleep.", "You brush your teeth.", "You watch TV.", "You wash your hands."],
        correctAnswer: "You wash your hands.",
        explanation: "Yemek yemeden önce hijyen için elleri yıkamak ('wash your hands') önemlidir."
    },
    {
        question: "Which one is NOT a healthy food?",
        options: ["Apple", "Carrot", "Burger", "Salad"],
        correctAnswer: "Burger",
        explanation: "'Burger' genellikle diğer seçeneklere göre daha az sağlıklı kabul edilir."
    },
    {
        question: "A movie that makes you laugh is a _______.",
        options: ["horror", "drama", "comedy", "action"],
        correctAnswer: "comedy",
        explanation: "Sizi güldüren filmlere 'comedy' (komedi) filmi denir."
    },
    {
        question: "What is a popular free time activity for kids?",
        options: ["Working", "Playing video games", "Driving a car", "Paying bills"],
        correctAnswer: "Playing video games",
        explanation: "Çocuklar için popüler bir boş zaman aktivitesi 'playing video games' (video oyunları oynamak) tır."
    },
    {
        question: "She goes to bed at 10 p.m. _______ night.",
        options: ["every", "always", "sometimes", "never"],
        correctAnswer: "every",
        explanation: "Her gece yapılan bir rutini belirtmek için 'every night' (her gece) ifadesi kullanılır."
    },
    {
        question: "If you have a fever, you should _______.",
        options: ["play outside", "drink cold water", "rest at home", "go to a party"],
        correctAnswer: "rest at home",
        explanation: "Ateşiniz ('fever') olduğunda evde dinlenmek ('rest at home') en iyisidir."
    },
    {
        question: "What do you need to send a letter?",
        options: ["A ball", "A stamp", "A ticket", "A key"],
        correctAnswer: "A stamp",
        explanation: "Mektup göndermek için üzerine 'stamp' (pul) yapıştırmanız gerekir."
    },
    {
        question: "A place where you can borrow books is a _______.",
        options: ["bookshop", "library", "cafe", "post office"],
        correctAnswer: "library",
        explanation: "Kitap ödünç alabileceğiniz yere 'library' (kütüphane) denir. 'Bookshop' kitap satın alınan yerdir."
    },
    {
        question: "What is the job of a firefighter?",
        options: ["To cook food", "To build houses", "To put out fires", "To fly planes"],
        correctAnswer: "To put out fires",
        explanation: "Bir itfaiyecinin ('firefighter') görevi yangınları söndürmektir ('to put out fires')."
    },
    {
        question: "Which of these animals can fly?",
        options: ["Dog", "Fish", "Bird", "Snake"],
        correctAnswer: "Bird",
        explanation: "Hayvanlar arasında uçabilenler 'bird' (kuş) sınıfındadır."
    },
    {
        question: "My mother is a nurse. She works in a _______.",
        options: ["school", "hospital", "bank", "restaurant"],
        correctAnswer: "hospital",
        explanation: "Hemşireler ('nurse') genellikle 'hospital' (hastane) içinde çalışır."
    },
    {
        question: "To be healthy, you should do _______ regularly.",
        options: ["homework", "chores", "exercise", "shopping"],
        correctAnswer: "exercise",
        explanation: "Sağlıklı olmak için düzenli olarak 'exercise' (egzersiz) yapmalısınız."
    },
    {
        question: "What kind of movie has ghosts and monsters?",
        options: ["A comedy movie", "A horror movie", "A romance movie", "An animation movie"],
        correctAnswer: "A horror movie",
        explanation: "Hayaletlerin ve canavarların olduğu filmler 'horror' (korku) türündedir."
    },
    {
        question: "He likes _______ photos of nature.",
        options: ["taking", "to take", "take", "takes"],
        correctAnswer: "taking",
        explanation: "'Like' fiilinden sonra gelen eylem genellikle '-ing' takısı alır."
    },
    {
        question: "What do you do with a newspaper?",
        options: ["You eat it.", "You wear it.", "You read it.", "You play with it."],
        correctAnswer: "You read it.",
        explanation: "Gazete ('newspaper') okumak ('read') içindir."
    },
    {
        question: "A person who grows food on a farm is a _______.",
        options: ["doctor", "teacher", "farmer", "dentist"],
        correctAnswer: "farmer",
        explanation: "Çiftlikte yiyecek yetiştiren kişiye 'farmer' (çiftçi) denir."
    },
    {
        question: "What do you celebrate on December 31st?",
        options: ["A birthday", "Halloween", "New Year's Eve", "An anniversary"],
        correctAnswer: "New Year's Eve",
        explanation: "31 Aralık'ta 'New Year's Eve' (Yılbaşı Gecesi) kutlanır."
    },
    {
        question: "Which option is a type of weather?",
        options: ["Happy", "Cloudy", "Excited", "Tired"],
        correctAnswer: "Cloudy",
        explanation: "'Cloudy' (bulutlu) bir hava durumunu ifade ederken diğerleri duygudur."
    },
    {
        question: "Where does a police officer work?",
        options: ["At a police station", "At a hospital", "At a bakery", "At a school"],
        correctAnswer: "At a police station",
        explanation: "Bir polis memuru ('police officer') 'police station' (polis merkezi) içinde çalışır."
    },
    {
        question: "Can you play the _______? It's my favorite instrument.",
        options: ["football", "chess", "guitar", "tag"],
        correctAnswer: "guitar",
        explanation: "Seçenekler arasında çalınabilen bir enstrüman 'guitar' (gitar) dır."
    },
    {
        question: "You should _______ your teeth twice a day.",
        options: ["eat", "brush", "comb", "wash"],
        correctAnswer: "brush",
        explanation: "Dişler günde iki kez fırçalanmalıdır ('brush')."
    },
    {
        question: "A place with swings and slides for children is a _______.",
        options: ["market", "playground", "car park", "station"],
        correctAnswer: "playground",
        explanation: "Çocuklar için salıncak ve kaydırakların olduğu yere 'playground' (oyun parkı) denir."
    },
    {
        question: "A _______ movie often has a hero and a lot of fighting.",
        options: ["romance", "comedy", "documentary", "action"],
        correctAnswer: "action",
        explanation: "İçinde kahraman ve bolca dövüş sahnesi olan filmler 'action' (aksiyon) türündedir."
    },
    {
        question: "What is the meal you eat in the middle of the day?",
        options: ["Breakfast", "Dinner", "Snack", "Lunch"],
        correctAnswer: "Lunch",
        explanation: "Günün ortasında yenen öğüne 'lunch' (öğle yemeği) denir."
    },
    {
        question: "He has a pet _______. It says 'hello'.",
        options: ["cat", "dog", "parrot", "fish"],
        correctAnswer: "parrot",
        explanation: "Konuşabilen ve 'hello' diyebilen bir evcil hayvan 'parrot' (papağan) olabilir."
    },
    {
        question: "You need a _______ to travel to another country by plane.",
        options: ["map", "ticket", "book", "key"],
        correctAnswer: "ticket",
        explanation: "Uçakla başka bir ülkeye seyahat etmek için 'ticket' (bilet) gerekir."
    },
    {
        question: "What do you wear on your feet to play sports?",
        options: ["Boots", "Sandals", "Trainers", "Slippers"],
        correctAnswer: "Trainers",
        explanation: "Spor yapmak için ayağınıza 'trainers' veya 'sneakers' (spor ayakkabı) giyersiniz."
    },
    {
        question: "A person who fixes cars is a _______.",
        options: ["mechanic", "waiter", "chef", "writer"],
        correctAnswer: "mechanic",
        explanation: "Arabaları tamir eden kişiye 'mechanic' (tamirci) denir."
    },
    {
        question: "Which of these is NOT a city?",
        options: ["London", "Paris", "England", "Rome"],
        correctAnswer: "England",
        explanation: "'England' (İngiltere) bir ülkedir, diğerleri ise şehirdir."
    },
    {
        question: "You should not eat too much _______ food like chips and sweets.",
        options: ["healthy", "junk", "delicious", "fresh"],
        correctAnswer: "junk",
        explanation: "Cips ve tatlılar gibi yiyecekler 'junk food' (abur cubur) olarak sınıflandırılır."
    },
    {
        question: "A _______ tells you the time.",
        options: ["calendar", "clock", "map", "book"],
        correctAnswer: "clock",
        explanation: "Zamanı gösteren alete 'clock' (saat) denir."
    },
    {
        question: "What is the opposite of 'easy'?",
        options: ["Simple", "Difficult", "Quick", "Nice"],
        correctAnswer: "Difficult",
        explanation: "'Easy' (kolay) kelimesinin zıttı 'difficult' (zor) kelimesidir."
    },
    {
        question: "Where can you buy stamps and send parcels?",
        options: ["At the library", "At the post office", "At the cinema", "At the hospital"],
        correctAnswer: "At the post office",
        explanation: "Pul alıp koli gönderebileceğiniz yer 'post office' (postane) dir."
    },
    {
        question: "What season comes after summer?",
        options: ["Winter", "Spring", "Autumn", "Holiday"],
        correctAnswer: "Autumn",
        explanation: "Yazdan ('summer') sonra 'autumn' (sonbahar) mevsimi gelir."
    },
    {
        question: "A person who designs buildings is an _______.",
        options: ["artist", "engineer", "architect", "actor"],
        correctAnswer: "architect",
        explanation: "Binaları tasarlayan kişiye 'architect' (mimar) denir."
    },
    {
        question: "You can _______ a bus or a train to travel.",
        options: ["fly", "ride", "drive", "take"],
        correctAnswer: "take",
        explanation: "Toplu taşıma araçlarına binmek için genellikle 'take a bus/train' (otobüse/trene binmek) fiili kullanılır."
    },
    {
        question: "I have a running nose and a cough. I have a _______.",
        options: ["headache", "cold", "fever", "stomachache"],
        correctAnswer: "cold",
        explanation: "Burun akıntısı ('running nose') ve öksürük ('cough'), 'cold' (soğuk algınlığı) belirtileridir."
    },
    {
        question: "The movie was very _______. I cried at the end.",
        options: ["funny", "scary", "sad", "exciting"],
        correctAnswer: "sad",
        explanation: "Sonunda ağladığınız bir film muhtemelen 'sad' (üzücü) bir filmdir."
    },
    {
        question: "What do you do with a birthday invitation?",
        options: ["You throw it away.", "You reply to it.", "You write it.", "You buy it."],
        correctAnswer: "You reply to it.",
        explanation: "Bir doğum günü davetiyesi aldığınızda, gidip gitmeyeceğinizi bildirmek için ona cevap verirsiniz ('reply to it')."
    },
    {
        question: "A person who flies a plane is a _______.",
        options: ["driver", "pilot", "captain", "sailor"],
        correctAnswer: "pilot",
        explanation: "Uçak kullanan kişiye 'pilot' denir."
    },
    {
        question: "You need to be _______ in a library.",
        options: ["loud", "quiet", "fast", "active"],
        correctAnswer: "quiet",
        explanation: "Kütüphanede 'quiet' (sessiz) olmanız gerekir."
    },
    {
        question: "What do you do in a gym?",
        options: ["You read books.", "You watch movies.", "You do exercise.", "You cook food."],
        correctAnswer: "You do exercise.",
        explanation: "Spor salonunda ('gym') 'exercise' (egzersiz) yapılır."
    },
    {
        question: "Which of these is a vegetable?",
        options: ["Banana", "Orange", "Potato", "Strawberry"],
        correctAnswer: "Potato",
        explanation: "Seçenekler arasında 'potato' (patates) bir sebzedir."
    },
    {
        question: "What time is it? It's half _______ three.",
        options: ["to", "past", "at", "on"],
        correctAnswer: "past",
        explanation: "Saat 3:30'u belirtmek için 'half past three' (üçü yarım geçiyor) ifadesi kullanılır."
    },
    {
        question: "You can see many famous paintings in an _______.",
        options: ["art gallery", "opera house", "concert hall", "aquarium"],
        correctAnswer: "art gallery",
        explanation: "Ünlü tabloları bir 'art gallery' (sanat galerisi) içinde görebilirsiniz."
    },
    {
        question: "A _______ helps the doctor with the patients.",
        options: ["teacher", "nurse", "farmer", "waiter"],
        correctAnswer: "nurse",
        explanation: "Hastalara bakarken doktora yardım eden kişi 'nurse' (hemşire) dir."
    },
{
                question: "What is a 'festival'?",
                options: ["Place to sleep", "Event to celebrate", "Place to eat", "Place to work"],
                correctAnswer: "Event to celebrate",
                explanation: "'Festival', kutlama yapılan bir etkinliktir."
            },
            {
                question: "What do you do to stay clean?",
                options: ["Watch TV", "Take a shower", "Eat candy", "Play soccer"],
                correctAnswer: "Take a shower",
                explanation: "Temiz kalmak için 'take a shower' (duş almak) gerekir."
            },
            {
                question: "What is a 'bicycle'?",
                options: ["Food", "Vehicle", "Toy", "Cloth"],
                correctAnswer: "Vehicle",
                explanation: "'Bicycle' (bisiklet) bir 'vehicle' (taşıt) türüdür."
            },
            {
                question: "What do you say to ask for permission?",
                options: ["Can I go?", "Go away!", "I’m fine!", "No way!"],
                correctAnswer: "Can I go?",
                explanation: "İzin istemek için 'Can I go?' (Gidebilir miyim?) gibi ifadeler kullanılır."
            },
            {
                question: "What do you do at a zoo?",
                options: ["Study", "See animals", "Work", "Sleep"],
                correctAnswer: "See animals",
                explanation: "Hayvanat bahçesinde ('zoo') 'see animals' (hayvanları görmek) için gidilir."
            },
            {
                question: "What is a 'breakfast'?",
                options: ["Meal in the morning", "Meal at night", "Meal in the afternoon", "Meal at noon"],
                correctAnswer: "Meal in the morning",
                explanation: "'Breakfast' (kahvaltı), sabah yenen öğündür."
            },
            {
                question: "What is a 'song'?",
                options: ["Food", "Music", "Book", "Game"],
                correctAnswer: "Music",
                explanation: "'Song' (şarkı) bir 'music' (müzik) türüdür."
            },
            {
                question: "What do you do to help a friend?",
                options: ["Ignore them", "Share with them", "Run away", "Sleep"],
                correctAnswer: "Share with them",
                explanation: "Bir arkadaşa yardım etmek için onunla 'share' (paylaşmak) iyi bir davranıştır."
            },
            {
                question: "What is a 'bus stop'?",
                options: ["Place to sleep", "Place to wait for a bus", "Place to eat", "Place to play"],
                correctAnswer: "Place to wait for a bus",
                explanation: "'Bus stop' (otobüs durağı), otobüs beklenen yerdir."
            },
            {
                question: "What do you say to introduce a friend?",
                options: ["This is my friend", "Go away!", "I’m fine!", "No way!"],
                correctAnswer: "This is my friend",
                explanation: "Bir arkadaşınızı tanıtmak için 'This is my friend' (Bu benim arkadaşım) dersiniz."
            },
            {
                question: "What do you do at a beach?",
                options: ["Study", "Work", "Swim", "Sleep"],
                correctAnswer: "Swim",
                explanation: "Sahilde ('beach') 'swim' (yüzmek) popüler bir aktivitedir."
            },
            {
                question: "What is a 'lunch'?",
                options: ["Meal at night", "Meal at noon", "Meal in the morning", "Meal in the evening"],
                correctAnswer: "Meal at noon",
                explanation: "'Lunch' (öğle yemeği), öğlen yenen öğündür."
            },
            {
                question: "What is a 'game'?",
                options: ["Something you eat", "Something you play", "Something you wear", "Something you read"],
                correctAnswer: "Something you play",
                explanation: "'Game' (oyun), oynanan bir şeydir."
            },
            {
                question: "What is a 'ticket'?",
                options: ["Type of food", "Kind of game", "Paper for travel", "Piece of clothing"],
                correctAnswer: "Paper for travel",
                explanation: "'Ticket' (bilet), seyahat veya etkinlikler için kullanılan bir kağıttır."
            },
            {
                question: "What do you say to thank a friend?",
                options: ["Go away!", "I’m fine!", "Thank you!", "No way!"],
                correctAnswer: "Thank you!",
                explanation: "Bir arkadaşa teşekkür etmek için 'Thank you!' (Teşekkür ederim!) denir."
            },
            {
                question: "What do you do in a garden?",
                options: ["Study", "Plant flowers", "Work", "Sleep"],
                correctAnswer: "Plant flowers",
                explanation: "Bahçede ('garden') 'plant flowers' (çiçek dikmek) gibi işler yapılır."
            },
            {
                question: "What is a 'dinner'?",
                options: ["Meal in the morning", "Meal at noon", "Meal at night", "Meal in the afternoon"],
                correctAnswer: "Meal at night",
                explanation: "'Dinner' (akşam yemeği), akşam yenen öğündür."
            },
            {
                question: "What do you wear for sports?",
                options: ["Dress", "Suit", "Sneakers", "Hat"],
                correctAnswer: "Sneakers",
                explanation: "Spor yaparken 'sneakers' (spor ayakkabı) giymek rahattır."
            },
            {
                question: "What is a 'friendship'?",
                options: ["Something you eat", "Something you wear", "Being kind to others", "Something you read"],
                correctAnswer: "Being kind to others",
                explanation: "'Friendship' (arkadaşlık), başkalarına karşı nazik olmayı içerir."
            },
            {
                question: "What do you do at a playground?",
                options: ["Study", "Work", "Play", "Sleep"],
                correctAnswer: "Play",
                explanation: "Oyun parkında ('playground') 'play' (oynamak) için gidilir."
            },
            {
                question: "What is a 'snack'?",
                options: ["Meal at night", "Small meal between meals", "Meal in the morning", "Meal at noon"],
                correctAnswer: "Small meal between meals",
                explanation: "'Snack' (atıştırmalık), öğünler arasında yenen küçük bir yemektir."
            },
            {
                question: "What do you say to ask for a toy?",
                options: ["Can I have it?", "Go away!", "I’m fine!", "No way!"],
                correctAnswer: "Can I have it?",
                explanation: "Bir oyuncak istemek için kibarca 'Can I have it?' (Onu alabilir miyim?) diye sorulur."
            },

    {
        question: "Excuse me, how can I get to the post office?",
        options: ["It's next to the bank.", "I'm 11 years old.", "I'm from Spain.", "I can speak English."],
        correctAnswer: "It's next to the bank.",
        explanation: "Bu soru bir yer tarifi ('directions') sorusudur. Cevap bir konum belirtmelidir."
    },
    {
        question: "Which country is NOT in Europe?",
        options: ["Germany", "France", "Japan", "Italy"],
        correctAnswer: "Japan",
        explanation: "'Japan' (Japonya) Asya'da bir ülkedir, diğerleri ise Avrupa'dadır."
    },
    {
        question: "My father is a doctor. He works at a _______.",
        options: ["school", "restaurant", "hospital", "supermarket"],
        correctAnswer: "hospital",
        explanation: "Doktorlar 'hospital' (hastane) adı verilen yerde çalışır."
    },
    {
        question: "A: What is your nationality? B: I am _______.",
        options: ["Turkey", "Turkish", "England", "Englishman"],
        correctAnswer: "Turkish",
        explanation: "'Nationality' (milliyet) sorulduğunda, ülke adı değil, milliyet belirten sıfat ('Turkish') kullanılır."
    },
    {
        question: "The library is _______ the school and the cafe.",
        options: ["next", "between", "under", "on"],
        correctAnswer: "between",
        explanation: "İki yerin arasında olduğunu belirtmek için 'between' (arasında) kelimesi kullanılır."
    },
    {
        question: "Can you _______ German?",
        options: ["speak", "speaks", "speaking", "spoke"],
        correctAnswer: "speak",
        explanation: "'Can' yardımcı fiilinden sonra gelen ana fiil yalın halde (V1) kullanılır."
    },
    {
        question: "The opposite of 'behind' is _______.",
        options: ["next to", "in front of", "near", "opposite"],
        correctAnswer: "in front of",
        explanation: "'Behind' (arkasında) kelimesinin zıt anlamlısı 'in front of' (önünde) ifadesidir."
    },
    {
        question: "A person from China has _______ nationality.",
        options: ["China", "Chinanese", "Chinese", "Chinian"],
        correctAnswer: "Chinese",
        explanation: "Çin'den olan birinin milliyeti 'Chinese' (Çinli) olarak ifade edilir."
    },
    {
        question: "Go straight ahead, then take the second _______.",
        options: ["right", "left", "turn", "road"],
        correctAnswer: "right",
        explanation: "Yol tarifi verirken 'take the first/second right/left' (birinci/ikinci sağa/sola dön) kalıbı kullanılır."
    },
    {
        question: "I have two _______, one from France and one from Italy.",
        options: ["classmate", "classmates", "classmat", "classesmate"],
        correctAnswer: "classmates",
        explanation: "İki kişiden bahsedildiği için 'classmate' (sınıf arkadaşı) kelimesi çoğul (-s takısı) olmalıdır."
    },
    {
        question: "She doesn't like playing volleyball, _______ she loves playing basketball.",
        options: ["and", "so", "but", "because"],
        correctAnswer: "but",
        explanation: "İki zıt fikri bağlamak için 'but' (ama, fakat) bağlacı kullanılır."
    },
    {
        question: "What time do you usually _______ dinner?",
        options: ["has", "have", "haves", "having"],
        correctAnswer: "have",
        explanation: "'You' öznesi ile 'have' fiili kullanılır. 'Have dinner' akşam yemeği yemek demektir."
    },
    {
        question: "My favorite activity is _______. I have many colorful stones.",
        options: ["doing origami", "collecting stamps", "collecting marbles", "sculpting"],
        correctAnswer: "collecting marbles",
        explanation: "Renkli taşlar ('colorful stones') ifadesi 'collecting marbles' (misket biriktirme) hobisine işaret eder."
    },
    {
        question: "He _______ his homework after school.",
        options: ["do", "does", "is", "are"],
        correctAnswer: "does",
        explanation: "Üçüncü tekil şahıs ('He') ile geniş zamanda fiile -s takısı gelir ('do' -> 'does')."
    },
    {
        question: "Do you enjoy _______ photos?",
        options: ["take", "to take", "taking", "takes"],
        correctAnswer: "taking",
        explanation: "'Enjoy' fiilinden sonra gelen ikinci fiil genellikle -ing takısı alır."
    },
    {
        question: "I _______ get up early on Sundays because I don't go to school.",
        options: ["always", "usually", "never", "don't"],
        correctAnswer: "don't",
        explanation: "Okula gitmediği bir gün erken kalkmak zorunda olmadığını belirtmek için 'don't have to' veya 'don't' kullanılır."
    },
    {
        question: "We love Chinese checkers. It's our favorite _______ game.",
        options: ["card", "board", "ball", "video"],
        correctAnswer: "board",
        explanation: "Çin daması gibi oyunlar bir tahta üzerinde oynandığı için 'board game' (kutu/masa oyunu) olarak adlandırılır."
    },
    {
        question: "What does she do _______ the evening?",
        options: ["at", "on", "in", "to"],
        correctAnswer: "in",
        explanation: "Günün bölümlerinden bahsederken ('morning', 'afternoon', 'evening') 'in' edatı kullanılır."
    },
    {
        question: "He can't stand _______. He thinks it's boring.",
        options: ["fishing", "to fish", "fish", "fishes"],
        correctAnswer: "fishing",
        explanation: "'Can't stand' (katlanamamak) ifadesinden sonra fiil -ing takısı alır."
    },
    {
        question: "They _______ visit their grandparents at the weekend.",
        options: ["sometimes", "is", "are", "do"],
        correctAnswer: "sometimes",
        explanation: "Bu cümlede bir sıklık zarfına ihtiyaç vardır. 'Sometimes' (bazen) anlamı tamamlar."
    },

    {
        question: "I have a terrible cold. I should _______.",
        options: ["go out and play", "eat ice cream", "see a doctor", "watch TV all night"],
        correctAnswer: "see a doctor",
        explanation: "Şiddetli bir soğuk algınlığı ('terrible cold') durumunda yapılacak en mantıklı şey 'see a doctor' (doktora görünmek) eylemidir."
    },
    {
        question: "What kind of movies do you like? I'm _______ action movies.",
        options: ["keen", "fond", "crazy about", "interested in"],
        correctAnswer: "crazy about",
        explanation: "Aksiyon filmlerine bayıldığını belirtmek için 'crazy about' (-nın delisi olmak) ifadesi kullanılır."
    },
    {
        question: "You _______ eat too much junk food. It is unhealthy.",
        options: ["should", "must", "shouldn't", "can"],
        correctAnswer: "shouldn't",
        explanation: "Tavsiye verirken, yapılmaması gereken bir eylem için 'shouldn't' (yapmamalısın) kullanılır."
    },
    {
        question: "I think the movie was really _______. I almost fell asleep.",
        options: ["exciting", "interesting", "boring", "funny"],
        correctAnswer: "boring",
        explanation: "Neredeyse uyuya kalacak kadar sıkılan biri için film 'boring' (sıkıcı) demektir."
    },
    {
        question: "A: What's the matter with you? B: I have a _______.",
        options: ["happy", "sore throat", "movie", "good"],
        correctAnswer: "sore throat",
        explanation: "'What's the matter with you?' (Neyin var?) sorusuna bir sağlık problemiyle cevap verilir. 'Sore throat' (boğaz ağrısı) bir sağlık problemidir."
    },
    {
        question: "The movie is about a girl who finds a magic lamp. It's a _______.",
        options: ["fantasy", "horror", "western", "drama"],
        correctAnswer: "fantasy",
        explanation: "Sihirli bir lamba bulan kız hakkındaki bir film 'fantasy' (fantastik) türündedir."
    },
    {
        question: "You need a _______ to buy medicine from the pharmacy.",
        options: ["ticket", "prescription", "menu", "recipe"],
        correctAnswer: "prescription",
        explanation: "Eczaneden ilaç almak için doktorun yazdığı 'prescription' (reçete) gerekir."
    },
    {
        question: "I don't like horror movies _______ they are too scary.",
        options: ["but", "so", "and", "because"],
        correctAnswer: "because",
        explanation: "Bir neden belirtmek için 'because' (çünkü) bağlacı kullanılır."
    },
    {
        question: "You should take this _______ three times a day.",
        options: ["food", "syrup", "problem", "movie"],
        correctAnswer: "syrup",
        explanation: "Günde üç kez alınması gereken şey bir ilaç, örneğin 'syrup' (şurup) olabilir."
    },
    {
        question: "The main _______ of the movie is a brave princess.",
        options: ["director", "character", "actor", "sound"],
        correctAnswer: "character",
        explanation: "Filmin ana kahramanına 'main character' (ana karakter) denir."
    },
         {
                question: "What is a 'home'?",
                options: ["Place to sleep", "Place to buy things", "Place to study", "Place to play"],
                correctAnswer: "Place to sleep",
                explanation: "'Home' (ev), içinde yaşanılan ve uyunulan bir yerdir."
            }
        ],

        advanced: [
            {
                question: "What do you say to introduce yourself?",
                options: ["Thank you", "Goodbye", "My name is...", "Sorry"],
                correctAnswer: "My name is...",
                explanation: "Kendini tanıtmanın standart yolu 'My name is...' (Benim adım...) ifadesidir."
            },
    {
        question: "The pharmacy is on the corner, _______ the toy shop.",
        options: ["between", "behind", "in front of", "opposite"],
        correctAnswer: "opposite",
        explanation: "Köşede ve başka bir dükkanın karşısında olduğunu belirtmek için 'opposite' (karşısında) kullanılır."
    },
    {
        question: "A: _______ languages can you speak? B: Two. English and German.",
        options: ["What", "Where", "How many", "Who"],
        correctAnswer: "How many",
        explanation: "Sayılabilen isimlerin miktarını sormak için 'How many' (Kaç tane) soru kalıbı kullanılır."
    },
    {
        question: "My cousin is from the USA. He is _______.",
        options: ["American", "America", "the USA", "United States"],
        correctAnswer: "American",
        explanation: "ABD'den olan birinin milliyeti 'American' (Amerikalı) dır."
    },
    {
        question: "Walk along this street and you will see the museum _______ your left.",
        options: ["at", "in", "on", "to"],
        correctAnswer: "on",
        explanation: "Sağında veya solunda olduğunu belirtmek için 'on your left/right' kalıbı kullanılır."
    },
    {
        question: "There is a big _______ near our town with many trees and animals.",
        options: ["river", "mountain", "forest", "lake"],
        correctAnswer: "forest",
        explanation: "Ağaçların ve hayvanların bol olduğu büyük alana 'forest' (orman) denir."
    },
    {
        question: "This is a world map. Can you show me the _______ of Brazil?",
        options: ["language", "nationality", "location", "capital"],
        correctAnswer: "location",
        explanation: "Bir ülkenin haritadaki yerine 'location' (konum) denir."
    },
    {
        question: "She speaks English _______, but she needs to practice more.",
        options: ["fluently", "badly", "well", "good"],
        correctAnswer: "well",
        explanation: "Bir eylemin nasıl yapıldığını belirtmek için sıfat ('good') yerine zarf ('well') kullanılır."
    },
    {
        question: "A place where you can see historical objects is a _______.",
        options: ["monument", "statue", "bridge", "museum"],
        correctAnswer: "museum",
        explanation: "Tarihi nesnelerin sergilendiği yere 'museum' (müze) denir."
    },
    {
        question: "There are twenty-eight students in my class. It is a _______ class.",
        options: ["small", "empty", "crowded", "quiet"],
        correctAnswer: "crowded",
        explanation: "28 öğrenci, bir sınıf için kalabalık sayılabilir. 'Crowded' (kalabalık) uygun kelimedir."
    },
    {
        question: "The _______ of France is Paris.",
        options: ["country", "language", "capital city", "continent"],
        correctAnswer: "capital city",
        explanation: "Fransa'nın 'capital city' (başkent) şehri Paris'tir."
    },
    {
        question: "I am not very good at _______, so I usually buy clothes.",
        options: ["sewing", "sculpting", "fishing", "hiking"],
        correctAnswer: "sewing",
        explanation: "Kıyafet satın almayı tercih eden biri, 'sewing' (dikiş dikme) konusunda iyi olmayabilir."
    },
    {
        question: "He arrives _______ school at 8:30 a.m. every morning.",
        options: ["in", "on", "at", "to"],
        correctAnswer: "at",
        explanation: "Belirli bir yere varmak anlamında 'arrive at' kalıbı kullanılır."
    },
    {
        question: "My sister _______ her friends after she finishes her studies.",
        options: ["meet", "is meeting", "meets", "are meeting"],
        correctAnswer: "meets",
        explanation: "Geniş zamanda bir rutini anlatan cümlede, üçüncü tekil şahıs ('My sister') için fiile -s takısı eklenir."
    },
    {
        question: "I _______ have breakfast because I'm never hungry in the mornings.",
        options: ["always", "usually", "rarely", "often"],
        correctAnswer: "rarely",
        explanation: "Sabahları hiç acıkmayan biri 'rarely' (nadiren) kahvaltı yapar."
    },
    {
        question: "They are interested in _______ traditional Turkish dishes.",
        options: ["to cook", "cooking", "cooks", "cook"],
        correctAnswer: "cooking",
        explanation: "'Interested in' kalıbından sonra gelen fiil -ing takısı alır."
    },
    {
        question: "I _______ all my homework, so I can go out now.",
        options: ["finish", "am finishing", "have finished", "finishes"],
        correctAnswer: "have finished",
        explanation: "Eylemin henüz bittiğini ve sonucunun (dışarı çıkabilme) şu anı etkilediğini belirtmek için Present Perfect Tense ('have finished') kullanılır."
    },
    {
        question: "Does your father help _______ the housework?",
        options: ["with", "at", "in", "to"],
        correctAnswer: "with",
        explanation: "Birine bir konuda yardım etmek 'help with something' kalıbıyla ifade edilir."
    },
    {
        question: "Before I go to bed, I usually _______ a book for half an hour.",
        options: ["read", "am reading", "reads", "have read"],
        correctAnswer: "read",
        explanation: "Bir alışkanlığı veya rutini ifade etmek için Simple Present Tense (geniş zaman) kullanılır."
    },
    {
        question: "She is very talented. She can _______ beautiful pictures.",
        options: ["draw", "to draw", "drawing", "draws"],
        correctAnswer: "draw",
        explanation: "'Can' yetenek fiilinden sonra gelen ana fiil her zaman yalın (V1) halde olur."
    },
    {
        question: "What kind of activities do you _______ doing at weekends?",
        options: ["hate", "enjoy", "dislike", "can't stand"],
        correctAnswer: "enjoy",
        explanation: "Hafta sonları ne tür aktiviteler yapmaktan 'enjoy' (hoşlanmak) duyduğu sorulmaktadır."
    },
    {
        question: "You have a running nose and you are sneezing. You probably have the _______.",
        options: ["flu", "headache", "toothache", "fever"],
        correctAnswer: "flu",
        explanation: "Burun akıntısı ('running nose') ve hapşırma ('sneezing'), 'flu' (grip) belirtileridir."
    },
    {
        question: "The movie was so _______ that many people in the cinema cried.",
        options: ["funny", "scary", "exciting", "moving"],
        correctAnswer: "moving",
        explanation: "İnsanları ağlatacak kadar duygusal filmler için 'moving' (dokunaklı, etkileyici) sıfatı kullanılır."
    },
    {
        question: "You _______ see a doctor if you feel very ill.",
        options: ["should", "shouldn't", "can't", "don't"],
        correctAnswer: "should",
        explanation: "Güçlü bir tavsiye vermek için 'should' (yapmalısın) kullanılır."
    },
    {
        question: "The film received very good reviews. It's about the life of a famous scientist. It is a _______.",
        options: ["documentary", "biography", "thriller", "animation"],
        correctAnswer: "biography",
        explanation: "Ünlü birinin hayatını anlatan filmlere 'biography' (biyografi) denir."
    },
    {
        question: "I couldn't sleep last night because my neighbour _______ loud music.",
        options: ["listened to", "was listening to", "listen to", "listens to"],
        correctAnswer: "was listening to",
        explanation: "Geçmişte belirli bir anda devam eden bir eylemi anlatmak için Past Continuous Tense ('was/were + V-ing') kullanılır."
    },
    {
        question: "To stay healthy, you should have a balanced _______.",
        options: ["pill", "medicine", "diet", "problem"],
        correctAnswer: "diet",
        explanation: "Sağlıklı kalmak için dengeli bir 'diet' (beslenme düzeni) önemlidir."
    },
    {
        question: "The _______ of the movie was amazing. The music fit the scenes perfectly.",
        options: ["acting", "characters", "director", "soundtrack"],
        correctAnswer: "soundtrack",
        explanation: "Filmin müziklerine 'soundtrack' denir."
    },
    {
        question: "I feel dizzy and I have a fever. I think I _______ stay at home today.",
        options: ["will", "am", "won't", "do"],
        correctAnswer: "will",
        explanation: "Anlık bir karar veya gelecek tahmini için 'will' kullanılır."
    },
    {
        question: "He is a very successful _______. He has made many famous movies.",
        options: ["actor", "writer", "director", "character"],
        correctAnswer: "director",
        explanation: "Film yapan kişiye 'director' (yönetmen) denir."
    },
    {
        question: "She cut her finger while she _______ vegetables.",
        options: ["was chopping", "chopped", "chops", "has chopped"],
        correctAnswer: "was chopping",
        explanation: "Geçmişte bir eylem devam ederken başka bir eylemin olduğunu belirtmek için 'while' ile Past Continuous Tense kullanılır."
    },
{
                question: "Which place is NOT typically in a town?",
                options: ["Library", "Hospital", "Mountain", "Market"],
                correctAnswer: "Mountain",
                explanation: "Kütüphane, hastane ve market kasabalarda bulunur ama 'mountain' (dağ) bir coğrafi şekildir."
            },
            {
                question: "What can you NOT do as a hobby?",
                options: ["Dancing", "Sleeping", "Painting", "Singing"],
                correctAnswer: "Sleeping",
                explanation: "'Sleeping' (uyumak) bir ihtiyaçtır, hobi olarak kabul edilmez."
            },
            {
                question: "What should you do if you have a fever?",
                options: ["Play football", "Eat candy", "See a doctor", "Go swimming"],
                correctAnswer: "See a doctor",
                explanation: "Ateşiniz ('fever') varsa, bir doktora görünmelisiniz."
            },
            {
                question: "Which movie type is about space?",
                options: ["Romance", "Comedy", "Science fiction", "Horror"],
                correctAnswer: "Science fiction",
                explanation: "'Science fiction' (bilim kurgu) filmleri genellikle uzayda geçer."
            },
            {
                question: "What do you say to decline a party invitation?",
                options: ["See you there", "I’d love to", "I’m sorry, I can’t", "Sounds great"],
                correctAnswer: "I’m sorry, I can’t",
                explanation: "Bir daveti kibarca reddetmek için 'I’m sorry, I can’t' (Üzgünüm, gelemem) denir."
            },
    {
        question: "Which question is grammatically correct?",
        options: ["Where you go?", "When is your birthday?", "How she is old?", "What you like?"],
        correctAnswer: "When is your birthday?",
        explanation: "Doğru soru yapısı 'Soru kelimesi + yardımcı fiil + özne' şeklindedir. 'When is your birthday?' (Doğum günün ne zaman?) doğru formdadır."
    },
    {
        question: "She _______ her homework every day after school, but she _______ TV yesterday.",
        options: ["does / watches", "do / watched", "does / watched", "did / watches"],
        correctAnswer: "does / watched",
        explanation: "İlk boşluk bir rutini (geniş zaman), ikinci boşluk ise geçmişte olmuş bir olayı ('yesterday' - dün) belirtir. Bu yüzden 'does' ve 'watched' doğru fiillerdir."
    },
    {
        question: "A place where you can see historical artifacts and learn about the past is a _______.",
        options: ["theater", "gallery", "stadium", "museum"],
        correctAnswer: "museum",
        explanation: "Tarihi eserleri ('historical artifacts') görebileceğiniz ve geçmiş hakkında bilgi edinebileceğiniz yer 'museum' (müze) dir."
    },
    {
        question: "What should you do to show you agree with someone?",
        options: ["You should frown.", "You should shake your head.", "You should nod.", "You should argue."],
        correctAnswer: "You should nod.",
        explanation: "Biriyle aynı fikirde olduğunuzu göstermek için başınızı sallayarak onaylarsınız ('nod'). 'Shake your head' hayır demektir."
    },
    {
        question: "You need a passport and a visa for _______ travel.",
        options: ["domestic", "local", "international", "daily"],
        correctAnswer: "international",
        explanation: "Başka ülkelere seyahat etmek, yani 'international' (uluslararası) seyahat için pasaport ve vize gerekir."
    },
    {
        question: "Which of these is NOT a piece of furniture?",
        options: ["Wardrobe", "Carpet", "Sofa", "Bookshelf"],
        correctAnswer: "Carpet",
        explanation: "'Carpet' (halı) bir zemin kaplamasıdır, diğerleri ise mobilyadır ('furniture')."
    },
    {
        question: "He is interested _______ learning about different cultures.",
        options: ["in", "on", "at", "about"],
        correctAnswer: "in",
        explanation: "'Interested in' (-ile ilgilenmek) doğru edat kullanımıdır."
    },
    {
        question: "A story with magical creatures and imaginary worlds is a _______ story.",
        options: ["detective", "fantasy", "science-fiction", "biography"],
        correctAnswer: "fantasy",
        explanation: "Sihirli yaratıkların ve hayali dünyaların olduğu hikayeler 'fantasy' (fantastik) türündedir."
    },
    {
        question: "You _______ be quiet during the exam. It's a rule.",
        options: ["should", "must", "can", "may"],
        correctAnswer: "must",
        explanation: "Bir kural veya zorunluluk belirtilirken 'must' (-meli, -malı) yardımcı fiili kullanılır."
    },
    {
        question: "The opposite of 'polite' is _______.",
        options: ["kind", "rude", "friendly", "nice"],
        correctAnswer: "rude",
        explanation: "'Polite' (kibar) kelimesinin zıt anlamlısı 'rude' (kaba) kelimesidir."
    },
    {
        question: "I _______ get up early on weekends because there is no school.",
        options: ["must", "have to", "don't have to", "shouldn't"],
        correctAnswer: "don't have to",
        explanation: "Bir zorunluluk olmadığını belirtmek için 'don't have to' (zorunda değilim) kullanılır."
    },
    {
        question: "A performance on a stage with actors is called a _______.",
        options: ["concert", "movie", "play", "match"],
        correctAnswer: "play",
        explanation: "Sahnede oyuncular tarafından sergilenen performansa 'play' (tiyatro oyunu) denir."
    },
    {
        question: "This soup is too salty. You _______ add more salt.",
        options: ["should", "shouldn't", "must", "have to"],
        correctAnswer: "shouldn't",
        explanation: "Çorba zaten çok tuzluysa, daha fazla tuz eklememeniz yönünde bir tavsiye için 'shouldn't' kullanılır."
    },
    {
        question: "What do you call a person who writes books?",
        options: ["An author", "A poet", "A journalist", "A publisher"],
        correctAnswer: "An author",
        explanation: "Kitap yazan kişiye 'author' (yazar) denir."
    },
    {
        question: "The _______ of a movie is the person who tells the actors what to do.",
        options: ["writer", "producer", "director", "star"],
        correctAnswer: "director",
        explanation: "Filmde oyunculara ne yapacaklarını söyleyen kişi 'director' (yönetmen) dir."
    },
    {
        question: "She enjoys _______ to classical music to relax.",
        options: ["listen", "to listen", "listens", "listening"],
        correctAnswer: "listening",
        explanation: "'Enjoy' fiilinden sonra gelen eylem '-ing' takısı alır."
    },
    {
        question: "Which of these is a means of public transportation?",
        options: ["Bicycle", "Car", "Motorbike", "Underground"],
        correctAnswer: "Underground",
        explanation: "'Underground' (metro), bir toplu taşıma ('public transportation') aracıdır."
    },
    {
        question: "If you want to be a doctor, you need to study _______ at university.",
        options: ["history", "art", "medicine", "law"],
        correctAnswer: "medicine",
        explanation: "Doktor olmak için üniversitede 'medicine' (tıp) okumanız gerekir."
    },
    {
        question: "A book that tells the story of a person's life is a _______.",
        options: ["novel", "dictionary", "biography", "atlas"],
        correctAnswer: "biography",
        explanation: "Bir kişinin hayat hikayesini anlatan kitaba 'biography' (biyografi) denir."
    },
    {
        question: "My father _______ to work; he usually takes the bus.",
        options: ["always drives", "never drives", "sometimes drives", "often drives"],
        correctAnswer: "never drives",
        explanation: "Genellikle otobüsü kullanıyorsa, arabayla işe hiç gitmiyor veya nadiren gidiyordur. 'Never' (asla) en mantıklı seçenektir."
    },
    {
        question: "I can't find my keys. I think I _______ them.",
        options: ["lose", "lost", "have lost", "was losing"],
        correctAnswer: "have lost",
        explanation: "Geçmişte olan ve sonucu şimdiki zamanı etkileyen (anahtarları bulamama) bir eylem için Present Perfect Tense kullanılır."
    },
    {
        question: "The _______ of a country is its system of government.",
        options: ["population", "capital", "political system", "location"],
        correctAnswer: "political system",
        explanation: "Bir ülkenin yönetim sistemine 'political system' (siyasi sistem) denir."
    },
    {
        question: "She is very good _______ painting and drawing.",
        options: ["in", "on", "at", "for"],
        correctAnswer: "at",
        explanation: "Bir konuda iyi olmak 'good at' kalıbıyla ifade edilir."
    },
    {
        question: "You need to buy a _______ of toothpaste from the supermarket.",
        options: ["bar", "bottle", "tube", "carton"],
        correctAnswer: "tube",
        explanation: "Diş macunu 'tube' (tüp) içinde satılır."
    },
    {
        question: "Which one is a continent?",
        options: ["Canada", "Brazil", "Africa", "Russia"],
        correctAnswer: "Africa",
        explanation: "'Africa' (Afrika) bir kıtadır ('continent'), diğerleri ise ülkedir."
    },
    {
        question: "To protect the environment, we should _______ our rubbish.",
        options: ["throw", "burn", "recycle", "waste"],
        correctAnswer: "recycle",
        explanation: "Çevreyi korumak için çöplerimizi 'recycle' (geri dönüştürmek) etmeliyiz."
    },
    {
        question: "He felt _______ because he failed the exam.",
        options: ["excited", "proud", "disappointed", "happy"],
        correctAnswer: "disappointed",
        explanation: "Sınavda başarısız olan biri 'disappointed' (hayal kırıklığına uğramış) hisseder."
    },
    {
        question: "The weather forecast says it _______ tomorrow.",
        options: ["is raining", "rains", "will rain", "rained"],
        correctAnswer: "will rain",
        explanation: "Gelecekle ilgili bir tahmin yaparken 'will' yardımcı fiili kullanılır."
    },
    {
        question: "A person who serves you food in a restaurant is a _______.",
        options: ["customer", "chef", "waiter", "manager"],
        correctAnswer: "waiter",
        explanation: "Restoranda size yemek servisi yapan kişiye 'waiter' (garson) denir."
    },
    {
        question: "The opposite of 'ancient' is _______.",
        options: ["old", "historical", "modern", "past"],
        correctAnswer: "modern",
        explanation: "'Ancient' (antik, çok eski) kelimesinin zıttı 'modern' kelimesidir."
    },
    {
        question: "I _______ my grandparents last weekend.",
        options: ["visit", "am visiting", "visited", "will visit"],
        correctAnswer: "visited",
        explanation: "'Last weekend' (geçen hafta sonu) ifadesi geçmiş zamanı belirttiği için fiilin ikinci hali (Simple Past) kullanılır."
    },
    {
        question: "A _______ is a place where planes take off and land.",
        options: ["station", "port", "airport", "bus stop"],
        correctAnswer: "airport",
        explanation: "Uçakların kalktığı ve indiği yere 'airport' (havaalanı) denir."
    },
    {
        question: "She speaks English _______. She lived in London for ten years.",
        options: ["badly", "fluently", "slowly", "quietly"],
        correctAnswer: "fluently",
        explanation: "On yıl Londra'da yaşayan biri İngilizceyi 'fluently' (akıcı bir şekilde) konuşur."
    },
    {
        question: "You can find the meaning of a word in a _______.",
        options: ["notebook", "dictionary", "atlas", "magazine"],
        correctAnswer: "dictionary",
        explanation: "Bir kelimenin anlamını 'dictionary' (sözlük) içinde bulabilirsiniz."
    },
    {
        question: "What is the currency of the United Kingdom?",
        options: ["Euro", "Dollar", "Pound", "Yen"],
        correctAnswer: "Pound",
        explanation: "Birleşik Krallık'ın para birimi ('currency') 'Pound' (Sterlin) dir."
    },
    {
        question: "A _______ is a large area of water surrounded by land.",
        options: ["river", "sea", "ocean", "lake"],
        correctAnswer: "lake",
        explanation: "Etrafı karayla çevrili büyük su birikintisine 'lake' (göl) denir."
    },
    {
        question: "I love _______ shows because I can learn a lot about animals and nature.",
        options: ["sitcom", "documentary", "quiz", "reality"],
        correctAnswer: "documentary",
        explanation: "Hayvanlar ve doğa hakkında çok şey öğrenebileceğiniz program türü 'documentary' (belgesel) dir."
    },
    {
        question: "Which of these is a dairy product?",
        options: ["Bread", "Apple", "Yoghurt", "Chicken"],
        correctAnswer: "Yoghurt",
        explanation: "'Yoghurt' (yoğurt) bir süt ürünüdür ('dairy product')."
    },
    {
        question: "The building was designed by a famous _______. It's magnificent.",
        options: ["painter", "sculptor", "architect", "author"],
        correctAnswer: "architect",
        explanation: "Binalar mimarlar ('architect') tarafından tasarlanır."
    },
    {
        question: "What do you call the money you pay for a service?",
        options: ["A salary", "A fee", "A prize", "A discount"],
        correctAnswer: "A fee",
        explanation: "Bir hizmet için ödediğiniz paraya 'fee' (ücret) denir."
    },
    {
        question: "He couldn't come to the party _______ he was ill.",
        options: ["but", "so", "because", "and"],
        correctAnswer: "because",
        explanation: "Bir neden belirtmek için 'because' (çünkü) bağlacı kullanılır."
    },
    {
        question: "A person who is not brave is _______.",
        options: ["courageous", "cowardly", "adventurous", "daring"],
        correctAnswer: "cowardly",
        explanation: "Cesur olmayan bir kişiye 'cowardly' (korkak) denir."
    },
    {
        question: "The sun _______ in the east and sets in the west.",
        options: ["rise", "is rising", "rises", "rose"],
        correctAnswer: "rises",
        explanation: "Bilimsel bir gerçekten veya genel bir doğrudan bahsederken geniş zaman (Simple Present) kullanılır."
    },
    {
        question: "You need a valid _______ to drive a car.",
        options: ["passport", "ID card", "driving licence", "ticket"],
        correctAnswer: "driving licence",
        explanation: "Araba kullanmak için geçerli bir 'driving licence' (sürücü belgesi) gerekir."
    },
    {
        question: "Let's meet _______ the cinema at 7 p.m.",
        options: ["on", "in", "at", "in front of"],
        correctAnswer: "in front of",
        explanation: "Belirli bir yerin önünde buluşmayı belirtmek için 'in front of' (önünde) kullanılır. 'At' da doğru olabilir ancak 'in front of' daha spesifiktir."
    },
{
                question: "Which sport needs a team?",
                options: ["Running", "Swimming", "Basketball", "Tennis"],
                correctAnswer: "Basketball",
                explanation: "'Basketball' (basketbol) bir takım sporudur, tek başına oynanmaz."
            },
            {
                question: "What do you do at an animal shelter?",
                options: ["Study math", "Care for animals", "Buy clothes", "Cook food"],
                correctAnswer: "Care for animals",
                explanation: "Hayvan barınağında ('animal shelter') hayvanların bakımı yapılır."
            },
            {
                question: "What is a traditional festival activity?",
                options: ["Doing homework", "Watching TV", "Folk dancing", "Going to school"],
                correctAnswer: "Folk dancing",
                explanation: "'Folk dancing' (halk oyunları) geleneksel bir festival aktivitesidir."
            },
            {
                question: "What is the opposite of 'arrive'?",
                options: ["Stay", "Leave", "Come", "Enter"],
                correctAnswer: "Leave",
                explanation: "'Arrive' (varmak) kelimesinin zıttı 'leave' (ayrılmak) kelimesidir."
            },
            {
                question: "Where do you find books?",
                options: ["Kitchen", "Gym", "Library", "Park"],
                correctAnswer: "Library",
                explanation: "Kitaplar kütüphanede ('library') bulunur."
            },
            {
                question: "What do you need for painting?",
                options: ["Spoon", "Ball", "Brush", "Shoe"],
                correctAnswer: "Brush",
                explanation: "Resim yapmak için 'brush' (fırça) gerekir."
            },
            {
                question: "What might cause a sore throat?",
                options: ["Running", "Virus", "Reading", "Sleeping"],
                correctAnswer: "Virus",
                explanation: "Bir 'virus' boğaz ağrısına neden olabilir."
            },
            {
                question: "Which movie type makes you laugh?",
                options: ["Drama", "Horror", "Comedy", "Action"],
                correctAnswer: "Comedy",
                explanation: "'Comedy' (komedi) filmleri insanları güldürür."
            },
            {
                question: "What do you need for a party?",
                options: ["Toothbrush", "Schoolbag", "Decorations", "Laptop"],
                correctAnswer: "Decorations",
                explanation: "Bir parti için 'decorations' (süslemeler) gerekir."
            },
            {
                question: "Which sport is played with a net?",
                options: ["Swimming", "Football", "Volleyball", "Running"],
                correctAnswer: "Volleyball",
                explanation: "'Volleyball' (voleybol) file ile oynanan bir spordur."
            },
            {
                question: "What do you NOT do at an animal shelter?",
                options: ["Adopt pets", "Feed animals", "Play games", "Clean cages"],
                correctAnswer: "Play games",
                explanation: "Barınaklardaki temel işler bakım ve sahiplendirmedir; oyun oynamak birincil görev değildir."
            },
            {
                question: "What do you wear for a cultural festival?",
                options: ["School uniform", "Pajamas", "Traditional clothes", "Swimsuit"],
                correctAnswer: "Traditional clothes",
                explanation: "Kültürel festivallerde 'traditional clothes' (geleneksel kıyafetler) giyilir."
            },
            {
                question: "What is a 'landmark' in a town?",
                options: ["Old car", "Famous place", "Small shop", "New book"],
                correctAnswer: "Famous place",
                explanation: "'Landmark', bir şehirdeki ünlü ve tanınmış bir yerdir."
            },
            {
                question: "What is a polite way to ask for help?",
                options: ["Do it now!", "Give me that!", "Can you help me, please?", "I don’t need you!"],
                correctAnswer: "Can you help me, please?",
                explanation: "'Can you help me, please?' (Bana yardım edebilir misiniz, lütfen?) kibar bir yardım isteme şeklidir."
            },
            {
                question: "What hobby needs a camera?",
                options: ["Cooking", "Swimming", "Photography", "Reading"],
                correctAnswer: "Photography",
                explanation: "'Photography' (fotoğrafçılık) hobisi için kamera gerekir."
            },
            {
                question: "What do you take for a stomachache?",
                options: ["Soda", "Candy", "Medicine", "Ice cream"],
                correctAnswer: "Medicine",
                explanation: "Karın ağrısı ('stomachache') için 'medicine' (ilaç) alınır."
            },
            {
                question: "Which movie type is about love?",
                options: ["Action", "Romance", "Horror", "Comedy"],
                correctAnswer: "Romance",
                explanation: "'Romance' (romantik) filmler aşk hakkındadır."
            },
            {
                question: "What do you do before a party?",
                options: ["Work", "Study", "Plan", "Sleep"],
                correctAnswer: "Plan",
                explanation: "Partiden önce 'plan' (planlama) yapmak gerekir."
            },
            {
                question: "Which sport is NOT a team sport?",
                options: ["Volleyball", "Football", "Swimming", "Basketball"],
                correctAnswer: "Swimming",
                explanation: "'Swimming' (yüzme) genellikle bireysel bir spordur."
            },
            {
                question: "What is an animal shelter for?",
                options: ["Growing plants", "Helping animals", "Selling cars", "Building houses"],
                correctAnswer: "Helping animals",
                explanation: "Hayvan barınakları hayvanlara yardım etmek içindir."
            },
            {
                question: "What is a festival usually about?",
                options: ["Working", "Studying", "Celebrating", "Sleeping"],
                correctAnswer: "Celebrating",
                explanation: "Festivaller genellikle bir şeyi 'celebrating' (kutlamak) ile ilgilidir."
            },
            {
                question: "What does 'change direction to the left' mean?",
                options: ["Stop", "Go straight", "Turn left", "Go right"],
                correctAnswer: "Turn left",
                explanation: "Sola yön değiştirmek, 'turn left' (sola dönmek) anlamına gelir."
            },
            {
                question: "What do you do daily?",
                options: ["Buy a house", "Go on vacation", "Brush your teeth", "Change jobs"],
                correctAnswer: "Brush your teeth",
                explanation: "'Brush your teeth' (dişlerini fırçalamak) günlük bir aktivitedir."
            },
            {
                question: "What is good for your health?",
                options: ["Staying up late", "Watching TV", "Exercising", "Eating candy"],
                correctAnswer: "Exercising",
                explanation: "'Exercising' (egzersiz yapmak) sağlık için iyidir."
            },
            {
                question: "What is a 'symptom' of being sick?",
                options: ["Playing soccer", "Feeling happy", "Having a fever", "Reading a book"],
                correctAnswer: "Having a fever",
                explanation: "Ateşli olmak ('having a fever') hasta olmanın bir 'symptom' (belirti)sidir."
            },
            {
                question: "What do you say about a good movie?",
                options: ["It’s slow", "It’s boring", "It’s exciting", "It’s bad"],
                correctAnswer: "It’s exciting",
                explanation: "İyi bir film için genellikle 'It’s exciting' (Heyecan verici) denir."
            },
            {
                question: "What do you need for a birthday party?",
                options: ["Toothpaste", "Schoolbag", "Cake", "Laptop"],
                correctAnswer: "Cake",
                explanation: "Doğum günü partileri için 'cake' (pasta) vazgeçilmezdir."
            },
            {
                question: "Which sport needs a bicycle?",
                options: ["Tennis", "Football", "Cycling", "Swimming"],
                correctAnswer: "Cycling",
                explanation: "'Cycling' (bisiklete binme) sporu için bisiklet gerekir."
            },
            {
                question: "What do you do with a pet?",
                options: ["Write it", "Wear it", "Feed it", "Read it"],
                correctAnswer: "Feed it",
                explanation: "Evcil hayvanınızı ('pet') 'feed' (beslemek) gerekir."
            },
            {
                question: "What is a festival decoration?",
                options: ["Pen", "Book", "Flag", "Shoe"],
                correctAnswer: "Flag",
                explanation: "Festivallerde 'flag' (bayrak) gibi süslemeler kullanılır."
            },
            {
                question: "What is the opposite of 'healthy'?",
                options: ["Happy", "Sick", "Strong", "Fast"],
                correctAnswer: "Sick",
                explanation: "'Healthy' (sağlıklı) kelimesinin zıttı 'sick' (hasta) kelimesidir."
            },
            {
                question: "What do you say to give directions?",
                options: ["What’s your name?", "I’m tired", "Go straight", "Nice to meet you"],
                correctAnswer: "Go straight",
                explanation: "Yol tarifi verirken 'Go straight' (Düz git) gibi ifadeler kullanılır."
            },
            {
                question: "What hobby involves music?",
                options: ["Running", "Cooking", "Singing", "Reading"],
                correctAnswer: "Singing",
                explanation: "'Singing' (şarkı söylemek) müzik içeren bir hobidir."
            },
            {
                question: "What do you learn from a biography?",
                options: ["A car’s history", "A person’s life story", "A book’s plot", "A game’s rules"],
                correctAnswer: "A person’s life story",
                explanation: "Bir 'biography' (biyografi) bir kişinin hayat hikayesini anlatır."
            },
            {
                question: "What is a 'schedule'?",
                options: ["Kind of game", "Type of food", "Plan for the day", "Piece of clothing"],
                correctAnswer: "Plan for the day",
                explanation: "'Schedule' (program), gün için yapılan bir plandır."
            },
            {
                question: "What do you say to suggest something?",
                options: ["No way!", "I’m tired!", "Let’s go!", "Go away!"],
                correctAnswer: "Let’s go!",
                explanation: "Bir öneride bulunmak için 'Let’s go!' (Hadi gidelim!) gibi ifadeler kullanılır."
            },
            {
                question: "Who is a 'tourist'?",
                options: ["Person who cooks", "Person who teaches", "Person who travels", "Person who sings"],
                correctAnswer: "Person who travels",
                explanation: "'Tourist' (turist), seyahat eden kişidir."
            },
            {
                question: "What do you need for a city tour?",
                options: ["Desk", "Map", "Fork", "Book"],
                correctAnswer: "Map",
                explanation: "Bir şehir turu için 'map' (harita) gereklidir."
            },
            {
                question: "Who is a 'volunteer'?",
                options: ["Person who sells food", "Person who helps for free", "Person who drives", "Person who sings"],
                correctAnswer: "Person who helps for free",
                explanation: "'Volunteer' (gönüllü), ücretsiz olarak yardım eden kişidir."
            },
            {
                question: "What do you do to save water?",
                options: ["Drink soda", "Eat candy", "Turn off the tap", "Watch TV"],
                correctAnswer: "Turn off the tap",
                explanation: "Suyu korumak için musluğu kapatmalısınız ('turn off the tap')."
            },
            {
                question: "What do you say to invite someone?",
                options: ["I’m busy", "Go away", "Come to my party", "See you later"],
                correctAnswer: "Come to my party",
                explanation: "Birini davet etmek için 'Come to my party' (Partime gel) diyebilirsiniz."
            },
            {
                question: "What do you do to protect animals?",
                options: ["Throw trash", "Feed them", "Ignore them", "Run away"],
                correctAnswer: "Feed them",
                explanation: "Hayvanları korumanın bir yolu onları 'feed' (beslemek) ve onlara iyi bakmaktır."
            },
            {
                question: "What do you say to describe a good friend?",
                options: ["He is mean", "She is lazy", "They are kind", "He is shy"],
                correctAnswer: "They are kind",
                explanation: "İyi bir arkadaşı tanımlarken 'They are kind' (Onlar kibar) gibi olumlu ifadeler kullanılır."
            },
            {
                question: "What do you need for a trip?",
                options: ["Toothpaste", "Schoolbag", "Ticket", "Laptop"],
                correctAnswer: "Ticket",
                explanation: "Bir seyahat ('trip') için 'ticket' (bilet) gerekir."
            },
            {
                question: "Who is a 'scientist'?",
                options: ["Person who sells food", "Person who does experiments", "Person who builds houses", "Person who writes books"],
                correctAnswer: "Person who does experiments",
                explanation: "'Scientist' (bilim insanı), deneyler yapan kişidir."
            },
            {
                question: "What do you do to stay safe?",
                options: ["Run in traffic", "Follow rules", "Eat candy", "Sleep"],
                correctAnswer: "Follow rules",
                explanation: "Güvende kalmak için kurallara uymalısınız ('follow rules')."
            },
            {
                question: "What is a 'concert'?",
                options: ["Place to sleep", "Event with music", "Place to eat", "Place to work"],
                correctAnswer: "Event with music",
                explanation: "'Concert' (konser), müzikli bir etkinliktir."
            },
            {
                question: "What do you do at a fair?",
                options: ["Study", "Win a prize", "Work", "Sleep"],
                correctAnswer: "Win a prize",
                explanation: "Panayırlarda oyun oynayarak 'win a prize' (ödül kazanmak) mümkündür."
            },
            {
                question: "Who is a 'chef'?",
                options: ["Person who sells food", "Person who cooks", "Person who builds houses", "Person who writes books"],
                correctAnswer: "Person who cooks",
                explanation: "'Chef' (şef), profesyonel olarak yemek pişiren kişidir."
            },
            {
                question: "What do you do to help the environment?",
                options: ["Throw trash", "Recycle", "Eat candy", "Sleep"],
                correctAnswer: "Recycle",
                explanation: "Çevreye yardım etmek için 'recycle' (geri dönüşüm yapmak) önemlidir."
            },
            {
                question: "Which place is NOT in a town?",
                options: ["Library", "Hospital", "Beach", "Market"],
                correctAnswer: "Beach",
                explanation: "'Beach' (plaj) genellikle kasabaların içinde değil, kıyısında bulunur."
            },
            {
                question: "What do you say to ask the time?",
                options: ["Where are you?", "What time is it?", "How are you?", "What is this?"],
                correctAnswer: "What time is it?",
                explanation: "Saati sormak için 'What time is it?' (Saat kaç?) kullanılır."
            },
            {
                question: "What might cause a sore throat?",
                options: ["Running", "Sleeping", "Cold weather", "Reading"],
                correctAnswer: "Cold weather",
                explanation: "Soğuk hava ('cold weather') boğaz ağrısına neden olabilir."
            },
            {
                question: "What is a 'museum'?",
                options: ["Place to play", "Place to sleep", "Place to see history", "Place to eat"],
                correctAnswer: "Place to see history",
                explanation: "'Museum' (müze), tarihi görmek için gidilen bir yerdir."
            },
            {
                question: "What is a 'rule'?",
                options: ["Something you eat", "Something you wear", "Something you read", "Something you must follow"],
                correctAnswer: "Something you must follow",
                explanation: "'Rule' (kural), uyulması gereken bir şeydir."
            },
            {
                question: "What is a 'hobby' like dancing?",
                options: ["Something you eat", "Something you do for fun", "Something you wear", "Something you read"],
                correctAnswer: "Something you do for fun",
                explanation: "Dans etmek gibi bir hobi, eğlence için yapılan bir aktivitedir."
            },
            {
                question: "What do you say to offer a suggestion?",
                options: ["Why don’t we try?", "Go away!", "I’m fine!", "No way!"],
                correctAnswer: "Why don’t we try?",
                explanation: "Bir öneri sunmak için 'Why don’t we try?' (Neden denemiyoruz?) gibi ifadeler kullanılır."
            },
            {
                question: "What is a 'schedule' for a trip?",
                options: ["Plan for travel", "Type of food", "Kind of game", "Piece of clothing"],
                correctAnswer: "Plan for travel",
                explanation: "Bir seyahat programı, seyahat için yapılan bir plandır."
            },
            {
                question: "What do you say to ask for directions?",
                options: ["What’s your name?", "I’m tired", "Where is the museum?", "Nice to meet you"],
                correctAnswer: "Where is the museum?",
                explanation: "Yol tarifi sormak için 'Where is the...?' (...'nerede?) kalıbı kullanılır."
            },
            {
                question: "What is a 'teacher'?",
                options: ["Person who sells food", "Person who teaches", "Person who builds houses", "Person who writes books"],
                correctAnswer: "Person who teaches",
                explanation: "'Teacher' (öğretmen), öğreten kişidir."
            },
            {
                question: "What do you do to stay fit?",
                options: ["Watch TV", "Eat candy", "Play sports", "Sleep"],
                correctAnswer: "Play sports",
                explanation: "Formda kalmak için 'play sports' (spor yapmak) iyi bir yoldur."
            },
            {
                question: "What is a 'zoo'?",
                options: ["Place to sleep", "Place to see animals", "Place to eat", "Place to work"],
                correctAnswer: "Place to see animals",
                explanation: "'Zoo' (hayvanat bahçesi), hayvanları görmek için bir yerdir."
            },
            {
                question: "What do you say to thank someone for help?",
                options: ["Go away!", "I’m fine!", "Thank you so much!", "No way!"],
                correctAnswer: "Thank you so much!",
                explanation: "Yardım için teşekkür ederken 'Thank you so much!' (Çok teşekkür ederim!) gibi daha vurgulu bir ifade kullanılabilir."
            },
            {
                question: "What do you do at a picnic?",
                options: ["Study", "Eat outdoors", "Work", "Sleep"],
                correctAnswer: "Eat outdoors",
                explanation: "Piknik yapmak, 'eat outdoors' (dışarıda yemek yemek) anlamına gelir."
            },
            {
                question: "What is a 'pilot'?",
                options: ["Person who sells food", "Person who flies planes", "Person who builds houses", "Person who writes books"],
                correctAnswer: "Person who flies planes",
                explanation: "'Pilot', uçakları uçuran kişidir."
            },
            {
                question: "What do you do to save energy?",
                options: ["Watch TV", "Turn off lights", "Eat candy", "Sleep"],
                correctAnswer: "Turn off lights",
                explanation: "Enerji tasarrufu için 'turn off lights' (ışıkları kapatmak) önemlidir."
            },
            {
                question: "What is a 'plan'?",
                options: ["Something you eat", "Something you organize", "Something you wear", "Something you read"],
                correctAnswer: "Something you organize",
                explanation: "'Plan', organize ettiğiniz bir şeydir."
            },
            {
                question: "What do you say to describe a fun activity?",
                options: ["It’s boring", "It’s exciting", "It’s slow", "It’s bad"],
                correctAnswer: "It’s exciting",
                explanation: "Eğlenceli bir aktivite için 'It’s exciting' (Heyecan verici) denilebilir."
            },
            {
                question: "What do you need for a festival?",
                options: ["Toothpaste", "Schoolbag", "Costume", "Laptop"],
                correctAnswer: "Costume",
                explanation: "Bazı festivaller için özel 'costume' (kostüm) gerekir."
            },
            {
                question: "What is a 'musician'?",
                options: ["Person who sells food", "Person who plays music", "Person who builds houses", "Person who writes books"],
                correctAnswer: "Person who plays music",
                explanation: "'Musician' (müzisyen), müzik çalan veya yapan kişidir."
            },
            {
                question: "What do you do to help a friend?",
                options: ["Ignore them", "Listen to them", "Run away", "Sleep"],
                correctAnswer: "Listen to them",
                explanation: "Bir arkadaşa yardım etmenin en iyi yollarından biri onu 'listen to' (dinlemek) eylemidir."
            },
            {
                question: "What is a 'library'?",
                options: ["Place to sleep", "Place to read books", "Place to eat", "Place to work"],
                correctAnswer: "Place to read books",
                explanation: "'Library' (kütüphane), kitap okunan bir yerdir."
            },
            {
                question: "What do you say to ask for permission?",
                options: ["Can I join?", "Go away!", "I’m fine!", "No way!"],
                correctAnswer: "Can I join?",
                explanation: "İzin istemek için 'Can I join?' (Katılabilir miyim?) gibi ifadeler kullanılır."
            },
            {
                question: "What do you do at a beach?",
                options: ["Study", "Build a sandcastle", "Work", "Sleep"],
                correctAnswer: "Build a sandcastle",
                explanation: "Sahilde 'build a sandcastle' (kumdan kale yapmak) eğlenceli bir aktivitedir."
            },
            {
                question: "What is a 'firefighter'?",
                options: ["Person who sells food", "Person who puts out fires", "Person who builds houses", "Person who writes books"],
                correctAnswer: "Person who puts out fires",
                explanation: "'Firefighter' (itfaiyeci), yangınları söndüren kişidir."
            },
            {
                question: "What do you do to stay clean?",
                options: ["Watch TV", "Wash your hands", "Eat candy", "Sleep"],
                correctAnswer: "Wash your hands",
                explanation: "Temiz kalmak için 'wash your hands' (ellerini yıkamak) önemlidir."
            },
            {
                question: "What is a 'park'?",
                options: ["Place to sleep", "Place to relax", "Place to eat", "Place to work"],
                correctAnswer: "Place to relax",
                explanation: "'Park', rahatlamak için gidilebilecek bir yerdir."
            },
            {
                question: "What do you say to congratulate a winner?",
                options: ["Try again!", "I’m fine!", "Great job!", "No way!"],
                correctAnswer: "Great job!",
                explanation: "Bir kazananı tebrik etmek için 'Great job!' (Harika iş!) denir."
            },
            {
                question: "What do you do at a concert?",
                options: ["Study", "Sing along", "Work", "Sleep"],
                correctAnswer: "Sing along",
                explanation: "Konserde sevdiğiniz şarkılara 'sing along' (eşlik etmek) yapabilirsiniz."
            },
            {
                question: "What is a 'nurse'?",
                options: ["Person who sells food", "Person who helps doctors", "Person who builds houses", "Person who writes books"],
                correctAnswer: "Person who helps doctors",
                explanation: "'Nurse' (hemşire), doktorlara yardım eden kişidir."
            },
            {
                question: "What do you do to save the planet?",
                options: ["Throw trash", "Plant trees", "Eat candy", "Sleep"],
                correctAnswer: "Plant trees",
                explanation: "Gezegeni kurtarmak için 'plant trees' (ağaç dikmek) önemli bir adımdır."
            },
            {
                question: "What is a 'holiday'?",
                options: ["Time to work", "Time to rest", "Time to study", "Time to sleep"],
                correctAnswer: "Time to rest",
                explanation: "'Holiday' (tatil), dinlenme zamanıdır."
            },
            {
                question: "What do you say to suggest a movie?",
                options: ["Let’s watch it!", "Go away!", "I’m fine!", "No way!"],
                correctAnswer: "Let’s watch it!",
                explanation: "Bir film önermek için 'Let’s watch it!' (Hadi izleyelim!) denir."
            },
            {
                question: "What do you do at a zoo?",
                options: ["Study", "Watch animals", "Work", "Sleep"],
                correctAnswer: "Watch animals",
                explanation: "Hayvanat bahçesinde 'watch animals' (hayvanları izlemek) için gidilir."
            },
            {
                question: "What is a 'painter'?",
                options: ["Person who sells food", "Person who paints", "Person who builds houses", "Person who writes books"],
                correctAnswer: "Person who paints",
                explanation: "'Painter' (ressam), resim yapan kişidir."
            },
            {
                question: "What do you do to stay healthy?",
                options: ["Watch TV", "Eat vegetables", "Eat candy", "Sleep"],
                correctAnswer: "Eat vegetables",
                explanation: "Sağlıklı kalmak için 'eat vegetables' (sebze yemek) önemlidir."
            },
            {
                question: "What is a 'fair'?",
                options: ["Place to sleep", "Event with games", "Place to eat", "Place to work"],
                correctAnswer: "Event with games",
                explanation: "'Fair' (panayır), oyunların olduğu bir etkinliktir."
            },
            {
                question: "What do you say to describe a kind person?",
                options: ["They are mean", "They are friendly", "They are lazy", "They are shy"],
                correctAnswer: "They are friendly",
                explanation: "Kibar birini tanımlamak için 'friendly' (arkadaş canlısı) kelimesi kullanılabilir."
            }

        ]},

    6: 
    {
        beginner: [
            {
                question: "What do you do in the morning?",
                options: ["Eat breakfast", "Sleep", "Watch TV", "Go to bed"],
                correctAnswer: "Eat breakfast",
                explanation: "Sabahları yapılan rutin bir eylem 'eat breakfast' (kahvaltı yapmak)tır."
            },

            {
        question: "What time is it if the small hand is on 9 and the big hand is on 12?",
        options: ["It's nine o'clock.", "It's half past nine.", "It's quarter to nine.", "It's ten o'clock."],
        correctAnswer: "It's nine o'clock.",
        explanation: "Tam saatleri belirtirken 'o'clock' kalıbı kullanılır. 'Nine o'clock' saat dokuz demektir."
    },
    {
        question: "Which one is a typical breakfast food?",
        options: ["Pizza", "Cheese", "Pasta", "Soup"],
        correctAnswer: "Cheese",
        explanation: "'Cheese' (peynir), tipik bir kahvaltılık yiyecektir."
    },
    {
        question: "What do you usually do after school?",
        options: ["I have breakfast.", "I get up.", "I do my homework.", "I go to bed."],
        correctAnswer: "I do my homework.",
        explanation: "Okuldan sonra genellikle 'do my homework' (ev ödevimi yaparım) eylemi yapılır."
    },
    {
        question: "Which one is a drink?",
        options: ["Bread", "Egg", "Milk", "Sausage"],
        correctAnswer: "Milk",
        explanation: "'Milk' (süt) bir içecektir, diğerleri ise yiyecektir."
    },
    {
        question: "What is the day after Monday?",
        options: ["Sunday", "Wednesday", "Tuesday", "Friday"],
        correctAnswer: "Tuesday",
        explanation: "Pazartesiden ('Monday') sonraki gün Salı'dır ('Tuesday')."
    },
    {
        question: "I love croissants. They are _______.",
        options: ["unhealthy", "salty", "yummy", "bad"],
        correctAnswer: "yummy",
        explanation: "Sevilen bir yiyecek için 'yummy' (nefis, lezzetli) kelimesi kullanılır."
    },
    {
        question: "She _______ at seven o'clock every morning.",
        options: ["get up", "gets up", "getting up", "got up"],
        correctAnswer: "gets up",
        explanation: "Geniş zamanda 'She' öznesiyle fiile -s takısı gelir."
    },
    {
        question: "Which one is a fruit?",
        options: ["Cucumber", "Bagel", "Olive", "Muffin"],
        correctAnswer: "Olive",
        explanation: "Botanik olarak 'Olive' (zeytin) bir meyvedir. Diğer seçenekler sebze veya unlu mamuldür."
    },
    {
        question: "A: Do you want some tea? B: No, _______.",
        options: ["please", "I do", "thank you", "I am"],
        correctAnswer: "thank you",
        explanation: "Bir teklifi reddederken kibarca 'No, thank you' (Hayır, teşekkürler) denir."
    },
    {
        question: "We have _______ on Sundays. We don't go to school.",
        options: ["folk dance class", "guitar course", "free time", "a math exam"],
        correctAnswer: "free time",
        explanation: "Okulun olmadığı Pazar günleri, genellikle 'free time' (boş zaman) olur."
    },

    {
        question: "A place where you can watch plays is a _______.",
        options: ["cinema", "city hall", "theater", "bookstore"],
        correctAnswer: "theater",
        explanation: "Tiyatro oyunlarının sergilendiği yere 'theater' (tiyatro) denir."
    },
    {
        question: "How is the weather? It is _______.",
        options: ["happy", "sad", "angry", "sunny"],
        correctAnswer: "sunny",
        explanation: "'Sunny' (güneşli), bir hava durumunu ifade eder. Diğerleri duygulardır."
    },
    {
        question: "If you are happy, you _______.",
        options: ["cry", "shout", "smile", "sleep"],
        correctAnswer: "smile",
        explanation: "Mutlu ('happy') olduğumuzda genellikle 'smile' (gülümsemek) eylemini yaparız."
    },
    {
        question: "The building where the mayor works is the _______.",
        options: ["post office", "police station", "city hall", "hospital"],
        correctAnswer: "city hall",
        explanation: "Belediye başkanının çalıştığı binaya 'city hall' (belediye binası) denir."
    },
    {
        question: "In winter, the weather is usually _______.",
        options: ["hot and sunny", "warm and rainy", "cold and snowy", "cool and windy"],
        correctAnswer: "cold and snowy",
        explanation: "Kış ('winter') mevsiminde hava genellikle 'cold and snowy' (soğuk ve karlı) olur."
    },
    {
        question: "I feel _______ because I lost my favorite toy.",
        options: ["energetic", "cheerful", "upset", "great"],
        correctAnswer: "upset",
        explanation: "Sevdiği bir oyuncağı kaybeden biri 'upset' (üzgün) hisseder."
    },
    {
        question: "You can buy medicine at the _______.",
        options: ["bakery", "pharmacy", "butcher", "cafe"],
        correctAnswer: "pharmacy",
        explanation: "İlaç satın alabileceğimiz yer 'pharmacy' (eczane) dir."
    },
    {
        question: "It's rainy today. Don't forget your _______.",
        options: ["sunglasses", "t-shirt", "umbrella", "shorts"],
        correctAnswer: "umbrella",
        explanation: "Yağmurlu ('rainy') havalarda ıslanmamak için 'umbrella' (şemsiye) kullanılır."
    },
    {
        question: "Which word describes a feeling?",
        options: ["Windy", "Cloudy", "Sleepy", "Foggy"],
        correctAnswer: "Sleepy",
        explanation: "'Sleepy' (uykulu) bir duyguyu ifade ederken, diğerleri hava durumunu belirtir."
    },
    {
        question: "A _______ sells meat.",
        options: ["grocer", "baker", "butcher", "chemist"],
        correctAnswer: "butcher",
        explanation: "Et satan dükkana veya kişiye 'butcher' (kasap) denir."
    },

    {
        question: "What can you ride at a fair?",
        options: ["A car", "A bus", "A bumper car", "A train"],
        correctAnswer: "A bumper car",
        explanation: "'Bumper car' (çarpışan araba), lunaparklarda ('fair') bulunan bir eğlence aracıdır."
    },
    {
        question: "A person who designs buildings is a(n) _______.",
        options: ["doctor", "teacher", "architect", "pilot"],
        correctAnswer: "architect",
        explanation: "Binaları tasarlayan kişiye 'architect' (mimar) denir."
    },
    {
        question: "Which one is a drink you can buy at a fair?",
        options: ["Popcorn", "Candy floss", "Lemonade", "Hot dog"],
        correctAnswer: "Lemonade",
        explanation: "'Lemonade' (limonata) bir içecektir, diğerleri ise yiyecektir."
    },
    {
        question: "A _______ flies an airplane.",
        options: ["driver", "cook", "nurse", "pilot"],
        correctAnswer: "pilot",
        explanation: "Uçak kullanan kişiye 'pilot' denir."
    },
    {
        question: "I think the ghost train is _______. I was very scared.",
        options: ["boring", "delicious", "frightening", "funny"],
        correctAnswer: "frightening",
        explanation: "Korkan birisi için korku treni ('ghost train') 'frightening' (korkutucu) olur."
    },
    {
        question: "Where does a mechanic work?",
        options: ["In a hospital", "In a school", "In a garage", "On a farm"],
        correctAnswer: "In a garage",
        explanation: "Bir araba tamircisi ('mechanic') genellikle 'garage' (tamirhane) içinde çalışır."
    },
    {
        question: "You can win a _______ if you are good at games at the fair.",
        options: ["ticket", "prize", "food", "drink"],
        correctAnswer: "prize",
        explanation: "Lunaparktaki oyunlarda başarılı olursanız 'prize' (ödül) kazanabilirsiniz."
    },
    {
        question: "A _______ cuts hair.",
        options: ["waiter", "tailor", "hairdresser", "engineer"],
        correctAnswer: "hairdresser",
        explanation: "Saç kesen kişiye 'hairdresser' (kuaför) denir."
    },
    {
        question: "The Ferris wheel is very _______. I can see the whole city from the top.",
        options: ["slow", "fast", "low", "high"],
        correctAnswer: "high",
        explanation: "Tüm şehri tepeden görebiliyorsanız, dönme dolap ('Ferris wheel') çok 'high' (yüksek) demektir."
    },
    {
        question: "A _______ serves food and drinks in a restaurant.",
        options: ["chef", "waiter", "manager", "customer"],
        correctAnswer: "waiter",
        explanation: "Restoranda yiyecek ve içecek servisi yapan kişiye 'waiter' (garson) denir."
    },
{
                question: "What is a place to buy food?",
                options: ["School", "Market", "Park", "Hospital"],
                correctAnswer: "Market",
                explanation: "Yiyecek almak için 'market'e gidilir."
            },
            {
                question: "What is the opposite of 'hot'?",
                options: ["Cold", "Warm", "Dry", "Wet"],
                correctAnswer: "Cold",
                explanation: "'Hot' (sıcak) kelimesinin zıttı 'cold' (soğuk) kelimesidir."
            },
            {
                question: "What do you eat for breakfast?",
                options: ["Pen", "Bread", "Shoe", "Book"],
                correctAnswer: "Bread",
                explanation: "Kahvaltıda 'bread' (ekmek) yaygın bir yiyecektir."
            },
            {
                question: "What is a place in a city?",
                options: ["Library", "Tree", "Car", "Cloud"],
                correctAnswer: "Library",
                explanation: "'Library' (kütüphane) bir şehirde bulunabilecek bir yerdir."
            },
            {
                question: "What is the weather like when it rains?",
                options: ["Sunny", "Windy", "Rainy", "Snowy"],
                correctAnswer: "Rainy",
                explanation: "Yağmur yağdığında hava 'rainy' (yağmurlu) olur."
            },
            {
                question: "What do you do at a fair?",
                options: ["Play games", "Study", "Sleep", "Work"],
                correctAnswer: "Play games",
                explanation: "Panayırlarda ('fair') 'play games' (oyun oynamak) yaygın bir aktivitedir."
            },
            {
                question: "What do you need for a vacation?",
                options: ["Desk", "Suitcase", "Fork", "Book"],
                correctAnswer: "Suitcase",
                explanation: "Tatile ('vacation') giderken eşyaları koymak için 'suitcase' (bavul) gerekir."
            },
            {
                question: "What is a 'teacher'?",
                options: ["Person who cooks", "Person who teaches", "Person who drives", "Person who sings"],
                correctAnswer: "Person who teaches",
                explanation: "'Teacher' (öğretmen) bir şeyler öğreten kişidir."
            },

    {
        question: "What is a place where you can buy books?",
        options: ["Bakery", "Bookshop", "Butcher", "Pharmacy"],
        correctAnswer: "Bookshop",
        explanation: "Kitap satın alabileceğiniz dükkana 'bookshop' veya 'bookstore' denir."
    },
    {
        question: "How do you feel when you have a big exam tomorrow?",
        options: ["Relaxed", "Worried", "Happy", "Excited"],
        correctAnswer: "Worried",
        explanation: "Büyük bir sınavdan önce 'worried' (endişeli) hissetmek normaldir."
    },
    {
        question: "What was the weather like yesterday? It _______ rainy.",
        options: ["is", "are", "was", "were"],
        correctAnswer: "was",
        explanation: "'Yesterday' (dün) geçmiş zamanı belirttiği için ve 'weather' tekil olduğu için 'was' kullanılır."
    },
    {
        question: "Who works in a restaurant and cooks food?",
        options: ["A waiter", "A customer", "A chef", "A manager"],
        correctAnswer: "A chef",
        explanation: "Restoranda yemek pişiren kişiye 'chef' (şef, aşçı) denir."
    },
    {
        question: "What time do you usually _______ to school?",
        options: ["go", "goes", "went", "going"],
        correctAnswer: "go",
        explanation: "'You' öznesiyle geniş zamanda fiil yalın halde kullanılır."
    },
    {
        question: "You can see a lot of tall buildings in a _______. ",
        options: ["village", "farm", "city", "forest"],
        correctAnswer: "city",
        explanation: "Yüksek binaları genellikle bir 'city' (şehir) içinde görürsünüz."
    },
    {
        question: "It is snowing. You should wear your _______.",
        options: ["t-shirt", "shorts", "boots", "sandals"],
        correctAnswer: "boots",
        explanation: "Kar yağarken ayağınıza 'boots' (bot) giymelisiniz."
    },
    {
        question: "A _______ sells bread and cakes.",
        options: ["baker", "butcher", "grocer", "chemist"],
        correctAnswer: "baker",
        explanation: "Ekmek ve pasta satan kişiye 'baker' (fırıncı) denir."
    },
    {
        question: "I was at the _______ yesterday to watch a new movie.",
        options: ["theater", "cinema", "park", "school"],
        correctAnswer: "cinema",
        explanation: "Yeni bir film izlemek için 'cinema' (sinema) salonuna gidilir."
    },
    {
        question: "She felt very _______ after winning the race.",
        options: ["sad", "angry", "proud", "tired"],
        correctAnswer: "proud",
        explanation: "Yarışı kazandıktan sonra 'proud' (gururlu) hissetmek yaygındır."
    },
    {
        question: "The post office is _______ the bank and the library.",
        options: ["next to", "opposite", "between", "behind"],
        correctAnswer: "between",
        explanation: "İki yerin arasında olduğunu belirtmek için 'between' (arasında) kelimesi kullanılır."
    },
    {
        question: "What is your favorite breakfast food?",
        options: ["Pasta", "Pizza", "Pancake", "Rice"],
        correctAnswer: "Pancake",
        explanation: "'Pancake' (pankek), popüler bir kahvaltılık yiyecektir."
    },
    {
        question: "In autumn, the _______ fall from the trees.",
        options: ["flowers", "leaves", "fruits", "snow"],
        correctAnswer: "leaves",
        explanation: "Sonbaharda ağaçlardan 'leaves' (yapraklar) dökülür."
    },
    {
        question: "A person who flies a plane is a _______.",
        options: ["doctor", "pilot", "engineer", "teacher"],
        correctAnswer: "pilot",
        explanation: "Uçak kullanan mesleğe sahip kişiye 'pilot' denir."
    },
    {
        question: "I _______ my grandparents last Sunday.",
        options: ["visit", "visits", "visited", "visiting"],
        correctAnswer: "visited",
        explanation: "'Last Sunday' (geçen Pazar) geçmiş zamanı belirttiği için fiilin ikinci hali (visited) kullanılır."
    },
    {
        question: "A place where you go when you are sick is a _______.",
        options: ["supermarket", "hospital", "station", "cinema"],
        correctAnswer: "hospital",
        explanation: "Hasta olduğunuzda gittiğiniz yere 'hospital' (hastane) denir."
    },
    {
        question: "The weather is _______ today. Let's fly a kite.",
        options: ["rainy", "foggy", "windy", "snowy"],
        correctAnswer: "windy",
        explanation: "Uçurtma uçurmak için havanın 'windy' (rüzgarlı) olması gerekir."
    },
    {
        question: "What do you do with a book?",
        options: ["You cook it.", "You read it.", "You wear it.", "You drink it."],
        correctAnswer: "You read it.",
        explanation: "Kitaplar okunmak ('read') içindir."
    },
    {
        question: "A _______ is a place with many shops, cafes, and a cinema.",
        options: ["hospital", "shopping mall", "police station", "fire station"],
        correctAnswer: "shopping mall",
        explanation: "İçinde birçok dükkan, kafe ve sinema olan yere 'shopping mall' (alışveriş merkezi) denir."
    },
    {
        question: "He was _______ because his team lost the game.",
        options: ["happy", "excited", "upset", "cheerful"],
        correctAnswer: "upset",
        explanation: "Takımı oyunu kaybeden biri 'upset' (üzgün) hisseder."
    },
    {
        question: "What do you drink for breakfast?",
        options: ["Soda", "Tea", "Water", "Coke"],
        correctAnswer: "Tea",
        explanation: "'Tea' (çay), Türkiye'de yaygın bir kahvaltı içeceğidir."
    },
    {
        question: "A _______ takes your order in a cafe.",
        options: ["teacher", "waiter", "doctor", "dentist"],
        correctAnswer: "waiter",
        explanation: "Kafede siparişinizi alan kişiye 'waiter' (garson) denir."
    },
    {
        question: "My father is a mechanic. He repairs _______.",
        options: ["computers", "cars", "houses", "teeth"],
        correctAnswer: "cars",
        explanation: "Bir tamirci ('mechanic') 'cars' (arabalar) tamir eder."
    },
    {
        question: "It's very hot today. The weather is _______.",
        options: ["cold", "sunny", "cool", "freezing"],
        correctAnswer: "sunny",
        explanation: "Hava çok sıcak olduğunda genellikle 'sunny' (güneşli) olur."
    },
    {
        question: "What time is it? It's nine _______.",
        options: ["thirty", "o'clock", "fifteen", "forty-five"],
        correctAnswer: "o'clock",
        explanation: "Tam saatleri belirtmek için 'o'clock' kullanılır. Saat tam dokuz."
    },
    {
        question: "A place where you wait for a bus is a _______.",
        options: ["train station", "airport", "bus stop", "car park"],
        correctAnswer: "bus stop",
        explanation: "Otobüs beklediğiniz yere 'bus stop' (otobüs durağı) denir."
    },
    {
        question: "I was born _______ 2012.",
        options: ["at", "on", "in", "from"],
        correctAnswer: "in",
        explanation: "Yıllardan önce 'in' edatı kullanılır."
    },
    {
        question: "What do you eat at a fair? You can eat _______.",
        options: ["soup", "salad", "popcorn", "pasta"],
        correctAnswer: "popcorn",
        explanation: "Panayırlarda satılan popüler bir yiyecek 'popcorn' (patlamış mısır) dır."
    },
    {
        question: "She is _______ because it's her birthday.",
        options: ["bored", "sleepy", "excited", "angry"],
        correctAnswer: "excited",
        explanation: "Doğum günü olan biri genellikle 'excited' (heyecanlı) olur."
    },
    {
        question: "A person who cuts your hair is a _______.",
        options: ["butcher", "hairdresser", "tailor", "farmer"],
        correctAnswer: "hairdresser",
        explanation: "Saçınızı kesen kişiye 'hairdresser' (kuaför) denir."
    },
    {
        question: "We _______ a delicious cake for my mother's birthday yesterday.",
        options: ["make", "makes", "made", "making"],
        correctAnswer: "made",
        explanation: "'Yesterday' (dün) geçmiş zaman belirttiği için 'make' fiilinin ikinci hali 'made' kullanılır."
    },
    {
        question: "The _______ is a very big and tall building.",
        options: ["bridge", "skyscraper", "statue", "fountain"],
        correctAnswer: "skyscraper",
        explanation: "Çok büyük ve yüksek binalara 'skyscraper' (gökdelen) denir."
    },
    {
        question: "It is cold outside. Don't forget your _______ and gloves.",
        options: ["scarf", "sunglasses", "hat", "t-shirt"],
        correctAnswer: "scarf",
        explanation: "Soğuk havalarda eldivenle birlikte boynunuza 'scarf' (atkı) takarsınız."
    },
    {
        question: "What do you do in your free time? I _______ books.",
        options: ["read", "write", "eat", "play"],
        correctAnswer: "read",
        explanation: "Boş zaman aktivitesi olarak kitaplar 'read' (okumak) içindir."
    },
    {
        question: "He arrives _______ school at 8 o'clock.",
        options: ["in", "on", "at", "to"],
        correctAnswer: "at",
        explanation: "Okul gibi belirli bir yere varmak anlamında 'arrive at' kalıbı kullanılır."
    },
    {
        question: "A place with a mayor and government offices is a _______.",
        options: ["city hall", "museum", "art gallery", "mosque"],
        correctAnswer: "city hall",
        explanation: "Belediye başkanının ve devlet dairelerinin olduğu binaya 'city hall' (belediye binası) denir."
    },
    {
        question: "I am feeling _______, I think I will go to bed early.",
        options: ["energetic", "sleepy", "happy", "awake"],
        correctAnswer: "sleepy",
        explanation: "Erken yatmak isteyen biri 'sleepy' (uykulu) hissediyordur."
    },
    {
        question: "You can buy fresh vegetables at the _______.",
        options: ["greengrocer's", "bakery", "butcher's", "pharmacy"],
        correctAnswer: "greengrocer's",
        explanation: "Taze sebzeleri 'greengrocer's' (manav) dükkanından alabilirsiniz."
    },
    {
        question: "The opposite of 'noisy' is _______.",
        options: ["crowded", "quiet", "busy", "calm"],
        correctAnswer: "quiet",
        explanation: "'Noisy' (gürültülü) kelimesinin zıttı 'quiet' (sessiz) kelimesidir."
    },
    {
        question: "We usually have _______ and eggs for a traditional breakfast.",
        options: ["cheese", "cereal", "croissant", "muffin"],
        correctAnswer: "cheese",
        explanation: "Geleneksel bir kahvaltıda yumurtayla birlikte 'cheese' (peynir) yenir."
    },
    {
        question: "She _______ her teeth every morning.",
        options: ["brush", "brushes", "brushed", "brushing"],
        correctAnswer: "brushes",
        explanation: "Her sabah yapılan bir rutini anlatırken geniş zaman kullanılır ve 'she' öznesiyle fiile -s takısı gelir."
    },
    {
        question: "The traffic is very heavy in the city center, so it is _______.",
        options: ["quiet", "empty", "crowded", "clean"],
        correctAnswer: "crowded",
        explanation: "Trafiğin yoğun olduğu bir yer 'crowded' (kalabalık) olur."
    },
    {
        question: "Be careful! The floor is wet. You can feel _______.",
        options: ["happy", "sleepy", "surprised", "moody"],
        correctAnswer: "surprised",
        explanation: "Islak zeminde kayıp düşme riski vardır ve bu durum kişiyi 'surprised' (şaşırmış) hissettirebilir, ancak burada aslında bir uyarı var. Daha uygun bir duygu 'scared' (korkmuş) olabilirdi."
    },
    {
        question: "What do you call a person who makes clothes?",
        options: ["A tailor", "A baker", "A farmer", "A doctor"],
        correctAnswer: "A tailor",
        explanation: "Kıyafet yapan veya tamir eden kişiye 'tailor' (terzi) denir."
    },
    {
        question: "Last night, I _______ a strange dream.",
        options: ["have", "has", "had", "having"],
        correctAnswer: "had",
        explanation: "'Last night' (dün gece) geçmiş zamanı belirttiği için 'have' fiilinin ikinci hali 'had' kullanılır."
    },
    {
        question: "You can send a letter from the _______.",
        options: ["bank", "post office", "library", "school"],
        correctAnswer: "post office",
        explanation: "Mektuplar 'post office' (postane) aracılığıyla gönderilir."
    },

            {
                question: "What do you do to save the planet?",
                options: ["Eat", "Recycle", "Run", "Sing"],
                correctAnswer: "Recycle",
                explanation: "Gezegeni korumak için 'recycle' (geri dönüşüm yapmak) önemlidir."
            },
            {
                question: "What is the opposite of 'happy'?",
                options: ["Big", "Sad", "Fast", "Tall"],
                correctAnswer: "Sad",
                explanation: "'Happy' (mutlu) kelimesinin zıttı 'sad' (üzgün) kelimesidir."
            },
            {
                question: "What do you drink in the morning?",
                options: ["Book", "Milk", "Ball", "Pen"],
                correctAnswer: "Milk",
                explanation: "Sabahları 'milk' (süt) içmek yaygın bir alışkanlıktır."
            },
            {
                question: "What is a 'park'?",
                options: ["Place to sleep", "Place to play", "Place to eat", "Place to work"],
                correctAnswer: "Place to play",
                explanation: "'Park', oynamak ve dinlenmek için gidilen bir yerdir."
            },
            {
                question: "What is the weather like when it’s cold?",
                options: ["Rainy", "Snowy", "Sunny", "Windy"],
                correctAnswer: "Snowy",
                explanation: "Hava çok soğuk olduğunda 'snowy' (karlı) olabilir."
            },
            {
                question: "What do you ride at a fair?",
                options: ["Car", "Bus", "Ferris wheel", "Train"],
                correctAnswer: "Ferris wheel",
                explanation: "Panayırlarda 'Ferris wheel' (dönme dolap) gibi eğlence araçlarına binilir."
            },
            {
                question: "Where do you go on vacation?",
                options: ["Hospital", "School", "Beach", "Market"],
                correctAnswer: "Beach",
                explanation: "Tatilde gidilebilecek popüler yerlerden biri 'beach' (plaj)dır."
            },
            {
                question: "What is a 'doctor'?",
                options: ["Person who sells food", "Person who helps sick people", "Person who builds houses", "Person who writes books"],
                correctAnswer: "Person who helps sick people",
                explanation: "'Doctor' (doktor) hasta insanlara yardım eden meslek grubudur."
            },
            {
                question: "What is a 'bottle' used for?",
                options: ["Reading books", "Drinking water", "Playing games", "Writing notes"],
                correctAnswer: "Drinking water",
                explanation: "'Bottle' (şişe) genellikle su içmek için kullanılır."
            },
            {
                question: "What do you do when you vote?",
                options: ["Eat food", "Choose a candidate", "Play games", "Sleep"],
                correctAnswer: "Choose a candidate",
                explanation: "Oy verirken ('vote') bir aday ('candidate') seçilir."
            },
            {
                question: "What is the opposite of 'big'?",
                options: ["Tall", "Small", "Long", "Wide"],
                correctAnswer: "Small",
                explanation: "'Big' (büyük) kelimesinin zıttı 'small' (küçük) kelimesidir."
            },
            {
                question: "What do you eat with eggs?",
                options: ["Shoe", "Cheese", "Pen", "Book"],
                correctAnswer: "Cheese",
                explanation: "Yumurta ile birlikte 'cheese' (peynir) sıkça tüketilir."
            },
            {
                question: "What is a place to watch movies?",
                options: ["Park", "Cinema", "School", "Kitchen"],
                correctAnswer: "Cinema",
                explanation: "Film izlemek için 'cinema' (sinema) salonlarına gidilir."
            },
            {
                question: "What is the weather like when the sun shines?",
                options: ["Foggy", "Rainy", "Sunny", "Windy"],
                correctAnswer: "Sunny",
                explanation: "Güneş parladığında hava 'sunny' (güneşli) olur."
            },
            {
                question: "What do you buy at a fair?",
                options: ["Desk", "Candy", "Car", "Shirt"],
                correctAnswer: "Candy",
                explanation: "Panayırlarda genellikle 'candy' (şekerleme) gibi yiyecekler satılır."
            },
            {
                question: "What do you wear on vacation?",
                options: ["Coat", "Swimsuit", "Uniform", "Gloves"],
                correctAnswer: "Swimsuit",
                explanation: "Deniz kenarında bir tatilde 'swimsuit' (mayo) giyilir."
            },
            {
                question: "What is a 'farmer'?",
                options: ["Person who teaches", "Person who grows food", "Person who drives", "Person who sings"],
                correctAnswer: "Person who grows food",
                explanation: "'Farmer' (çiftçi) yiyecek yetiştiren kişidir."
            },
            {
                question: "What do you do with paper to save the planet?",
                options: ["Throw away", "Eat", "Recycle", "Wear"],
                correctAnswer: "Recycle",
                explanation: "Kağıtları 'recycle' (geri dönüştürmek) gezegeni korumaya yardımcı olur."
            },
            {
                question: "What is the opposite of 'fast'?",
                options: ["Quick", "High", "Slow", "Low"],
                correctAnswer: "Slow",
                explanation: "'Fast' (hızlı) kelimesinin zıttı 'slow' (yavaş) kelimesidir."
            },
            {
                question: "What is a 'hospital'?",
                options: ["Place for shopping", "Place for playing", "Place for sick people", "Place for cooking"],
                correctAnswer: "Place for sick people",
                explanation: "'Hospital' (hastane), hasta insanlar için olan bir yerdir."
            },
            {
                question: "What do you eat for lunch?",
                options: ["Book", "Soup", "Ball", "Pen"],
                correctAnswer: "Soup",
                explanation: "Öğle yemeğinde 'soup' (çorba) popüler bir seçenektir."
            },
            {
                question: "What is a place to read books?",
                options: ["Mall", "Kitchen", "Library", "Park"],
                correctAnswer: "Library",
                explanation: "Kitap okumak için en uygun yer 'library' (kütüphane)dir."
            },
            {
                question: "What is the weather like when it’s very cold?",
                options: ["Windy", "Rainy", "Snowy", "Sunny"],
                correctAnswer: "Snowy",
                explanation: "Hava çok soğuk olduğunda 'snowy' (karlı) olabilir."
            },
            {
                question: "What do you do at a fair?",
                options: ["Cook", "Study", "Ride a roller coaster", "Sleep"],
                correctAnswer: "Ride a roller coaster",
                explanation: "Büyük panayırlarda 'roller coaster' (hız treni) gibi araçlara binilebilir."
            },
            {
                question: "What do you need for a trip?",
                options: ["Fork", "Desk", "Map", "Book"],
                correctAnswer: "Map",
                explanation: "Bir gezi ('trip') için yolunuzu bulmanıza yardımcı olacak bir 'map' (harita) gerekir."
            },
            {
                question: "What is a 'nurse'?",
                options: ["Person who sells clothes", "Person who helps doctors", "Person who writes books", "Person who plays music"],
                correctAnswer: "Person who helps doctors",
                explanation: "'Nurse' (hemşire) doktorlara yardım eden sağlık görevlisidir."
            },
            {
                question: "What do you do with trash?",
                options: ["Wear", "Eat", "Recycle", "Read"],
                correctAnswer: "Recycle",
                explanation: "Çöpleri ('trash') ayrıştırarak 'recycle' (geri dönüşüm) yapmalıyız."
            },
            {
                question: "What is the opposite of 'up'?",
                options: ["Left", "Right", "Down", "In"],
                correctAnswer: "Down",
                explanation: "'Up' (yukarı) kelimesinin zıttı 'down' (aşağı) kelimesidir."
            },
            {
                question: "What do you eat with bread?",
                options: ["Pen", "Butter", "Shoe", "Book"],
                correctAnswer: "Butter",
                explanation: "Ekmek ile birlikte 'butter' (tereyağı) yenir."
            },
            {
                question: "What is a place to shop?",
                options: ["Park", "Mall", "School", "Hospital"],
                correctAnswer: "Mall",
                explanation: "Alışveriş yapmak için 'mall' (alışveriş merkezi) gibi yerlere gidilir."
            },
            {
                question: "What is a 'leader' in democracy?",
                options: ["Person who cooks", "Person who guides", "Person who plays", "Person who sleeps"],
                correctAnswer: "Person who guides",
                explanation: "Demokrasideki bir 'leader' (lider), insanlara yol gösteren kişidir."
            },
            {
                question: "What do you wear when it’s rainy?",
                options: ["Swimsuit", "T-shirt", "Raincoat", "Shorts"],
                correctAnswer: "Raincoat",
                explanation: "Yağmurlu havalarda ıslanmamak için 'raincoat' (yağmurluk) giyilir."
            },
            {
                question: "What is a 'student'?",
                options: ["Person who cooks", "Person who drives", "Person who learns", "Person who sings"],
                correctAnswer: "Person who learns",
                explanation: "'Student' (öğrenci) öğrenim gören kişidir."
            },
            {
                question: "What do you say to thank someone?",
                options: ["Hello", "Sorry", "Thank you", "Goodbye"],
                correctAnswer: "Thank you",
                explanation: "Birine teşekkür etmek için 'Thank you' (Teşekkür ederim) denir."
            },
            {
                question: "What is a 'bus stop'?",
                options: ["Place to sleep", "Place to wait for a bus", "Place to eat", "Place to play"],
                correctAnswer: "Place to wait for a bus",
                explanation: "'Bus stop' (otobüs durağı), otobüs beklenen yerdir."
            },
            {
                question: "What do you do in a library?",
                options: ["Eat", "Play", "Read", "Sleep"],
                correctAnswer: "Read",
                explanation: "Kütüphanede ('library') kitap okunur."
            },
            {
                question: "What is the opposite of 'long'?",
                options: ["Big", "Tall", "Short", "Wide"],
                correctAnswer: "Short",
                explanation: "'Long' (uzun) kelimesinin zıttı 'short' (kısa) kelimesidir."
            },
            {
                question: "What do you use to draw?",
                options: ["Spoon", "Shoe", "Pencil", "Ball"],
                correctAnswer: "Pencil",
                explanation: "Çizim yapmak için 'pencil' (kalem) kullanılır."
            },
            {
                question: "What is a 'hobby'?",
                options: ["Something you eat", "Something you wear", "Something you like to do", "Something you read"],
                correctAnswer: "Something you like to do",
                explanation: "'Hobby' (hobi), yapmaktan hoşlandığınız bir aktivitedir."
            },
            {
                question: "What do you do at a beach?",
                options: ["Cook", "Study", "Swim", "Sleep"],
                correctAnswer: "Swim",
                explanation: "Plajda ('beach') genellikle 'swim' (yüzmek) aktivitesi yapılır."
            },
            {
                question: "What is a 'ticket'?",
                options: ["Kind of game", "Type of food", "Paper for travel", "Piece of clothing"],
                correctAnswer: "Paper for travel",
                explanation: "'Ticket' (bilet), seyahat veya etkinlikler için kullanılan bir kağıttır."
            },
            {
                question: "What do you say to greet a friend?",
                options: ["Goodbye", "Hi", "Thank you", "Sorry"],
                correctAnswer: "Hi",
                explanation: "Bir arkadaşı selamlarken samimi bir ifade olan 'Hi' (Selam) kullanılır."
            },
            {
                question: "What is the opposite of 'tall'?",
                options: ["Long", "Big", "Short", "Wide"],
                correctAnswer: "Short",
                explanation: "'Tall' (uzun boylu) kelimesinin zıttı 'short' (kısa boylu) kelimesidir."
            },
            {
                question: "What do you wear on your head?",
                options: ["Jacket", "Hat", "Shoes", "Gloves"],
                correctAnswer: "Hat",
                explanation: "Başımıza 'hat' (şapka) takarız."
            },
            {
                question: "What is a 'kitchen'?",
                options: ["Place to sleep", "Place to cook", "Place to study", "Place to play"],
                correctAnswer: "Place to cook",
                explanation: "'Kitchen' (mutfak), yemek pişirilen yerdir."
            },
            {
                question: "What do you do with a book?",
                options: ["Wear", "Eat", "Read", "Kick"],
                correctAnswer: "Read",
                explanation: "Kitaplar ('book') okunmak içindir."
            },
            {
                question: "What is a 'friend'?",
                options: ["Person you don’t know", "Person you work with", "Person you like", "Person you teach"],
                correctAnswer: "Person you like",
                explanation: "'Friend' (arkadaş), sevdiğiniz ve anlaştığınız bir kişidir."
            },
            {
                question: "What is the weather like when it’s hot?",
                options: ["Rainy", "Sunny", "Snowy", "Windy"],
                correctAnswer: "Sunny",
                explanation: "Hava sıcak olduğunda genellikle 'sunny' (güneşli) olur."
            },
            {
                question: "What do you eat for dinner?",
                options: ["Pen", "Rice", "Book", "Shoe"],
                correctAnswer: "Rice",
                explanation: "Akşam yemeğinde 'rice' (pilav) yenebilir."
            },
            {
                question: "What is a 'bed'?",
                options: ["Something to eat", "Something to sleep on", "Something to wear", "Something to read"],
                correctAnswer: "Something to sleep on",
                explanation: "'Bed' (yatak), üzerinde uyunulan bir eşyadır."
            },
            {
                question: "What do you say to apologize?",
                options: ["Thank you", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "Sorry",
                explanation: "Özür dilemek için 'Sorry' (Üzgünüm/Özür dilerim) denir."
            },
            {
                question: "What is a 'cat'?",
                options: ["Fruit", "Color", "Animal", "Game"],
                correctAnswer: "Animal",
                explanation: "'Cat' (kedi) bir hayvandır."
            },
            {
                question: "What do you wear on your feet?",
                options: ["Hat", "Gloves", "Shoes", "Jacket"],
                correctAnswer: "Shoes",
                explanation: "Ayaklarımıza 'shoes' (ayakkabı) giyeriz."
            },
            {
                question: "What is a 'playground'?",
                options: ["Place to sleep", "Place to play", "Place to eat", "Place to work"],
                correctAnswer: "Place to play",
                explanation: "'Playground' (oyun parkı) oynamak için bir yerdir."
            },
            {
                question: "What do you do when you’re tired?",
                options: ["Run", "Sing", "Sleep", "Dance"],
                correctAnswer: "Sleep",
                explanation: "Yorgun olduğumuzda 'sleep' (uyumak) ihtiyacı duyarız."
            },
            {
                question: "What is a 'movie'?",
                options: ["Book", "Song", "Film", "Game"],
                correctAnswer: "Film",
                explanation: "'Movie' kelimesi 'film' ile eş anlamlıdır."
            },
            {
                question: "What do you say at a party?",
                options: ["Good morning", "Happy birthday", "See you", "Good night"],
                correctAnswer: "Happy birthday",
                explanation: "Bir doğum günü partisinde 'Happy birthday' (Mutlu yıllar) denir."
            },
            {
                question: "What is a 'dog'?",
                options: ["Toy", "Plant", "Animal", "Place"],
                correctAnswer: "Animal",
                explanation: "'Dog' (köpek) bir hayvandır."
            },
            {
                question: "What do you eat at a picnic?",
                options: ["Books", "Clothes", "Food", "Toys"],
                correctAnswer: "Food",
                explanation: "Piknikte genellikle 'food' (yiyecek) yenir."
            },
            {
                question: "What is a 'school'?",
                options: ["Place to sleep", "Place to eat", "Place to learn", "Place to play"],
                correctAnswer: "Place to learn",
                explanation: "'School' (okul) öğrenim görülen bir yerdir."
            },
            {
                question: "What do you use to write?",
                options: ["Spoon", "Shoe", "Pen", "Ball"],
                correctAnswer: "Pen",
                explanation: "Yazı yazmak için 'pen' (kalem) kullanırız."
            },
            {
                question: "What is the opposite of 'loud'?",
                options: ["Noisy", "Big", "Quiet", "Small"],
                correctAnswer: "Quiet",
                explanation: "'Loud' (yüksek sesli) kelimesinin zıttı 'quiet' (sessiz) kelimesidir."
            },
            {
                question: "What do you do with a toy?",
                options: ["Eat", "Play", "Write", "Wear"],
                correctAnswer: "Play",
                explanation: "Oyuncaklarla ('toy') oynanır."
            },
            {
                question: "What is a 'bird'?",
                options: ["Toy", "Plant", "Animal", "Book"],
                correctAnswer: "Animal",
                explanation: "'Bird' (kuş) bir hayvandır."
            },
            {
                question: "What do you do after school?",
                options: ["Cook", "Work", "Do homework", "Sleep"],
                correctAnswer: "Do homework",
                explanation: "Okuldan sonra genellikle 'do homework' (ödev yapmak) gerekir."
            },
            {
                question: "What is a 'family'?",
                options: ["People you work with", "People you don’t know", "People you live with", "People you teach"],
                correctAnswer: "People you live with",
                explanation: "'Family' (aile), birlikte yaşadığınız insanlardır."
            },
            {
                question: "What is a 'table'?",
                options: ["Food", "Animal", "Furniture", "Sport"],
                correctAnswer: "Furniture",
                explanation: "'Table' (masa) bir mobilyadır."
            },
            {
                question: "What do you do in the classroom?",
                options: ["Cook", "Play", "Study", "Sleep"],
                correctAnswer: "Study",
                explanation: "Sınıfta ('classroom') ders çalışılır."
            },
            {
                question: "What is a 'garden'?",
                options: ["Place to sleep", "Place to eat", "Place with plants", "Place to work"],
                correctAnswer: "Place with plants",
                explanation: "'Garden' (bahçe), bitkilerin olduğu bir yerdir."
            },
            {
                question: "What is a 'chair'?",
                options: ["Something to eat", "Something to wear", "Something to sit on", "Something to read"],
                correctAnswer: "Something to sit on",
                explanation: "'Chair' (sandalye), üzerine oturulan bir eşyadır."
            },
            {
                question: "What do you say to say goodbye?",
                options: ["Thank you", "Hello", "Goodbye", "Sorry"],
                correctAnswer: "Goodbye",
                explanation: "Vedalaşmak için 'Goodbye' (Hoşça kal) denir."
            },
            {
                question: "What is a 'balloon'?",
                options: ["Food", "Cloth", "Toy", "Book"],
                correctAnswer: "Toy",
                explanation: "'Balloon' (balon) genellikle bir oyuncaktır."
            },
            {
                question: "What do you do at a birthday party?",
                options: ["Work", "Study", "Sing", "Sleep"],
                correctAnswer: "Sing",
                explanation: "Doğum günü partilerinde 'sing' (şarkı söylemek) yaygındır."
            },
            {
                question: "What is a 'fish'?",
                options: ["Plant", "Animal", "Toy", "Color"],
                correctAnswer: "Animal",
                explanation: "'Fish' (balık) bir hayvandır."
            },
            {
                question: "What do you wear in winter?",
                options: ["Swimsuit", "T-shirt", "Jacket", "Shorts"],
                correctAnswer: "Jacket",
                explanation: "Kışın 'jacket' (mont/ceket) giyilir."
            },
            {
                question: "What is a 'gift'?",
                options: ["Something you eat", "Something you give", "Something you wear", "Something you read"],
                correctAnswer: "Something you give",
                explanation: "'Gift' (hediye), birine verilen bir şeydir."
            },
            {
                question: "What is a 'flower'?",
                options: ["Animal", "Plant", "Toy", "Food"],
                correctAnswer: "Plant",
                explanation: "'Flower' (çiçek) bir bitkidir."
            },
            {
                question: "What do you eat for a snack?",
                options: ["Pen", "Fruit", "Book", "Shoe"],
                correctAnswer: "Fruit",
                explanation: "Atıştırmalık olarak 'fruit' (meyve) sağlıklı bir seçenektir."
            },
            {
                question: "What is a 'door'?",
                options: ["Something to eat", "Something to wear", "Something to open", "Something to read"],
                correctAnswer: "Something to open",
                explanation: "'Door' (kapı), açılıp kapanan bir nesnedir."
            },
            {
                question: "What do you say to ask for something?",
                options: ["Thank you", "Please", "Goodbye", "Sorry"],
                correctAnswer: "Please",
                explanation: "Bir şey isterken kibarca 'Please' (Lütfen) denir."
            },
            {
                question: "What is a 'rabbit'?",
                options: ["Toy", "Plant", "Animal", "Color"],
                correctAnswer: "Animal",
                explanation: "'Rabbit' (tavşan) bir hayvandır."
            },
            {
                question: "What do you wear on your hands?",
                options: ["Hat", "Shoes", "Gloves", "Jacket"],
                correctAnswer: "Gloves",
                explanation: "Ellerimize 'gloves' (eldiven) takarız."
            },
            {
                question: "What is the opposite of 'wet'?",
                options: ["Cold", "Dry", "Hot", "Big"],
                correctAnswer: "Dry",
                explanation: "'Wet' (ıslak) kelimesinin zıttı 'dry' (kuru) kelimesidir."
            },
            {
                question: "What is a 'window'?",
                options: ["Something to eat", "Something to wear", "Something to look through", "Something to read"],
                correctAnswer: "Something to look through",
                explanation: "'Window' (pencere), dışarıya bakmak için kullanılır."
            },
            {
                question: "What is a 'tree'?",
                options: ["Animal", "Toy", "Plant", "Food"],
                correctAnswer: "Plant",
                explanation: "'Tree' (ağaç) bir bitkidir."
            },
            {
                question: "What do you do in a bedroom?",
                options: ["Cook", "Play", "Sleep", "Study"],
                correctAnswer: "Sleep",
                explanation: "Yatak odasında ('bedroom') genellikle uyunur."
            },
            {
                question: "What is a 'cup'?",
                options: ["Something to eat", "Something to wear", "Something to drink from", "Something to read"],
                correctAnswer: "Something to drink from",
                explanation: "'Cup' (fincan/bardak), içecek içmek için kullanılır."
            },
            {
                question: "What is the opposite of 'heavy'?",
                options: ["Big", "Light", "Tall", "Long"],
                correctAnswer: "Light",
                explanation: "'Heavy' (ağır) kelimesinin zıttı 'light' (hafif) kelimesidir."
            },
            {
                question: "What do you do with a phone?",
                options: ["Eat", "Wear", "Call", "Write"],
                correctAnswer: "Call",
                explanation: "Telefon ile 'call' (arama yapmak) eylemi gerçekleştirilir."
            },
            {
                question: "What is a 'plate'?",
                options: ["Something to wear", "Something to eat from", "Something to read", "Something to play with"],
                correctAnswer: "Something to eat from",
                explanation: "'Plate' (tabak), üzerinden yemek yenilen bir eşyadır."
            },
            {
                question: "What do you wear in summer?",
                options: ["Coat", "Gloves", "T-shirt", "Jacket"],
                correctAnswer: "T-shirt",
                explanation: "Yazın 'T-shirt' (tişört) gibi ince kıyafetler giyilir."
            }
        ],

        intermediate: [
            {
                question: "What do you do every day?",
                options: ["Eat breakfast", "Go on vacation", "Buy a car", "Plant a tree"],
                correctAnswer: "Eat breakfast",
                explanation: "Her gün yapılan bir rutin 'eat breakfast' (kahvaltı yapmak) eylemidir."
            },
            {
        question: "She _______ arrives at school on time. She is a punctual student.",
        options: ["never", "rarely", "always", "sometimes"],
        correctAnswer: "always",
        explanation: "Dakik ('punctual') bir öğrenci okula 'always' (her zaman) vaktinde gelir."
    },
    {
        question: "A: _______ do you have breakfast? B: At around 8 a.m.",
        options: ["What time", "Where", "Who", "What"],
        correctAnswer: "What time",
        explanation: "Bir eylemin saatini sormak için 'What time' (Saat kaçta) soru kalıbı kullanılır."
    },
    {
        question: "I want to eat something healthy. I think I'll have a(n) _______.",
        options: ["croissant", "bagel", "cereal", "muffin"],
        correctAnswer: "cereal",
        explanation: "Seçenekler arasında 'cereal' (kahvaltılık gevrek), genellikle diğerlerinden daha sağlıklı bir seçenek olarak kabul edilir."
    },
    {
        question: "He usually _______ a shower before he goes to bed.",
        options: ["take", "is taking", "takes", "took"],
        correctAnswer: "takes",
        explanation: "Geniş zamanda bir rutini anlatan cümlede, üçüncü tekil şahıs ('He') için fiile -s takısı eklenir. 'Take a shower' duş almaktır."
    },
    {
        question: "My mother _______ breakfast for us every morning.",
        options: ["prepare", "prepares", "is preparing", "prepared"],
        correctAnswer: "prepares",
        explanation: "Her sabah tekrarlanan bir eylem olduğu için geniş zaman kullanılır ve 'My mother' (she) öznesiyle fiile -s takısı gelir."
    },
    {
        question: "We have our guitar course _______ 3 p.m. and 5 p.m.",
        options: ["at", "on", "from", "between"],
        correctAnswer: "between",
        explanation: "İki saat arasında olduğunu belirtmek için 'between' (arasında) kelimesi kullanılır."
    },
    {
        question: "Which one is NOT a dairy product?",
        options: ["Cheese", "Yogurt", "Sausage", "Milk"],
        correctAnswer: "Sausage",
        explanation: "'Sausage' (sosis) bir et ürünüdür. Diğerleri 'dairy product' (süt ürünü) kategorisindedir."
    },
{
        question: "A person who is always happy and smiling is _______. ",
        options: ["moody", "cheerful", "anxious", "upset"],
        correctAnswer: "cheerful",
        explanation: "Her zaman mutlu ve güler yüzlü olan bir kişiye 'cheerful' (neşeli) denir."
    },
    {
        question: "What were you doing at 8 p.m. last night? I _______ a book.",
        options: ["read", "was reading", "am reading", "reads"],
        correctAnswer: "was reading",
        explanation: "Geçmişte belirli bir anda devam eden bir eylemi anlatmak için Past Continuous Tense ('was/were + V-ing') kullanılır."
    },
    {
        question: "The _______ of a city is usually the busiest part.",
        options: ["suburb", "countryside", "downtown", "village"],
        correctAnswer: "downtown",
        explanation: "Bir şehrin 'downtown' (şehir merkezi) kısmı genellikle en yoğun olan yeridir."
    },
    {
        question: "To keep fit, you should have a _______ diet.",
        options: ["junk", "unhealthy", "balanced", "fatty"],
        correctAnswer: "balanced",
        explanation: "Formda kalmak için 'balanced' (dengeli) bir beslenme düzenine sahip olmalısınız."
    },
    {
        question: "She doesn't like crowded places. She feels _______ in them.",
        options: ["comfortable", "relaxed", "anxious", "excited"],
        correctAnswer: "anxious",
        explanation: "Kalabalık yerleri sevmeyen biri, o tür yerlerde 'anxious' (endişeli, kaygılı) hissedebilir."
    },
    {
        question: "The temperature was below zero. It was _______ outside.",
        options: ["warm", "cool", "boiling", "freezing"],
        correctAnswer: "freezing",
        explanation: "Sıcaklık sıfırın altına düştüğünde hava 'freezing' (dondurucu) olur."
    },
    {
        question: "A _______ is a professional who gives advice about law.",
        options: ["lawyer", "judge", "police officer", "detective"],
        correctAnswer: "lawyer",
        explanation: "Hukuk hakkında tavsiye veren profesyonel kişiye 'lawyer' (avukat) denir."
    },
    {
        question: "While I _______ for the bus, I saw an old friend.",
        options: ["waited", "am waiting", "was waiting", "wait"],
        correctAnswer: "was waiting",
        explanation: "Geçmişte bir eylem (beklemek) devam ederken başka bir eylemin (görmek) olduğunu belirtmek için Past Continuous Tense kullanılır."
    },
    {
        question: "The amusement park was _______. I loved the roller coaster.",
        options: ["boring", "dull", "amazing", "awful"],
        correctAnswer: "amazing",
        explanation: "Hız trenini seven biri için lunapark 'amazing' (harika, şaşırtıcı) bir yerdir."
    },
    {
        question: "To make an omelette, you need to _______ the eggs first.",
        options: ["whisk", "slice", "chop", "peel"],
        correctAnswer: "whisk",
        explanation: "Omlet yapmak için önce yumurtaları 'whisk' (çırpmak) gerekir."
    },
    {
        question: "A very tall building found in modern cities is a _______.",
        options: ["monument", "skyscraper", "bridge", "tower"],
        correctAnswer: "skyscraper",
        explanation: "Modern şehirlerde bulunan çok katlı binalara 'skyscraper' (gökdelen) denir."
    },
    {
        question: "My sister is a vegetarian. She _______ eats meat.",
        options: ["always", "usually", "never", "sometimes"],
        correctAnswer: "never",
        explanation: "Vejetaryen olan biri 'never' (asla) et yemez."
    },
    {
        question: "He is a talented musician. He can play the violin _______.",
        options: ["badly", "beautifully", "loudly", "slowly"],
        correctAnswer: "beautifully",
        explanation: "Yetenekli bir müzisyen kemanı 'beautifully' (harika bir şekilde) çalar."
    },
    {
        question: "A person who works with wood to make furniture is a _______.",
        options: ["carpenter", "plumber", "electrician", "bricklayer"],
        correctAnswer: "carpenter",
        explanation: "Mobilya yapmak için ahşapla çalışan kişiye 'carpenter' (marangoz) denir."
    },
    {
        question: "The weather forecast said it _______ tomorrow.",
        options: ["is going to snow", "snows", "snowed", "was snowing"],
        correctAnswer: "is going to snow",
        explanation: "Bir tahmine veya plana dayalı gelecek zaman için 'be going to' yapısı kullanılır."
    },
    {
        question: "I felt _______ when I heard the good news.",
        options: ["miserable", "delighted", "worried", "bored"],
        correctAnswer: "delighted",
        explanation: "İyi bir haber duyduğunuzda 'delighted' (çok memnun, sevinçli) hissedersiniz."
    },
    {
        question: "To cross the river, you have to walk over the _______.",
        options: ["road", "pavement", "bridge", "tunnel"],
        correctAnswer: "bridge",
        explanation: "Nehrin karşısına geçmek için 'bridge' (köprü) üzerinden yürümeniz gerekir."
    },
    {
        question: "What does a dentist do? He or she _______.",
        options: ["looks after animals", "fixes cars", "takes care of people's teeth", "builds houses"],
        correctAnswer: "takes care of people's teeth",
        explanation: "Bir diş hekimi ('dentist') insanların dişleriyle ilgilenir."
    },
    {
        question: "The opposite of 'generous' is _______.",
        options: ["kind", "mean", "honest", "polite"],
        correctAnswer: "mean",
        explanation: "'Generous' (cömert) kelimesinin zıtlarından biri 'mean' (cimri) kelimesidir."
    },
    {
        question: "It was hailing this morning. The hailstones were as big as _______.",
        options: ["marbles", "sand", "dust", "raindrops"],
        correctAnswer: "marbles",
        explanation: "Dolu ('hailstones') taneleri bazen 'marbles' (misket) kadar büyük olabilir."
    },
    {
        question: "A person who designs websites is a _______.",
        options: ["web designer", "fashion designer", "graphic designer", "architect"],
        correctAnswer: "web designer",
        explanation: "Web sitelerini tasarlayan kişiye 'web designer' (web tasarımcısı) denir."
    },
    {
        question: "I prefer _______ in the sea to swimming in a pool.",
        options: ["to swim", "swam", "swim", "swimming"],
        correctAnswer: "swimming",
        explanation: "'Prefer + Ving + to + Ving' kalıbı, bir aktiviteyi diğerine tercih ettiğini belirtmek için kullanılır."
    },
    {
        question: "You can see famous sculptures and paintings in an _______.",
        options: ["aquarium", "art gallery", "stadium", "amusement park"],
        correctAnswer: "art gallery",
        explanation: "Ünlü heykelleri ve tabloları bir 'art gallery' (sanat galerisi) içinde görebilirsiniz."
    },
    {
        question: "What is the job of a journalist?",
        options: ["To write articles for newspapers", "To serve food in a cafe", "To repair broken pipes", "To teach children"],
        correctAnswer: "To write articles for newspapers",
        explanation: "Bir gazetecinin ('journalist') işi, gazeteler için makaleler yazmaktır."
    },
    {
        question: "The ghost train at the fair was really _______. I screamed a lot.",
        options: ["funny", "boring", "frightening", "delicious"],
        correctAnswer: "frightening",
        explanation: "Çok çığlık attığınız bir korku treni, 'frightening' (korkutucu) bir deneyimdir."
    },
    {
        question: "A period of ten years is called a _______.",
        options: ["century", "millennium", "decade", "year"],
        correctAnswer: "decade",
        explanation: "On yıllık periyoda 'decade' denir."
    },
    {
        question: "He is a very punctual person. He is _______ late for his appointments.",
        options: ["always", "often", "sometimes", "never"],
        correctAnswer: "never",
        explanation: "Dakik ('punctual') bir kişi randevularına 'never' (asla) geç kalmaz."
    },
    {
        question: "Could you tell me the way to the _______? I need to buy some medicine.",
        options: ["pharmacy", "butcher's", "bakery", "greengrocer's"],
        correctAnswer: "pharmacy",
        explanation: "İlaç almak için gitmeniz gereken yer 'pharmacy' (eczane) dir."
    },
    {
        question: "It is unhealthy to eat too much _______ food.",
        options: ["nutritious", "fresh", "processed", "organic"],
        correctAnswer: "processed",
        explanation: "Çok fazla 'processed' (işlenmiş) gıda tüketmek sağlıksızdır."
    },
    {
        question: "I _______ to music when the phone rang.",
        options: ["listened", "was listening", "am listening", "listen"],
        correctAnswer: "was listening",
        explanation: "Geçmişte bir eylem (müzik dinlemek) devam ederken başka bir eylemin (telefonun çalması) olduğunu belirtmek için Past Continuous Tense kullanılır."
    },
    {
        question: "An _______ is a person who builds or designs machines, engines, or structures.",
        options: ["architect", "engineer", "artist", "scientist"],
        correctAnswer: "engineer",
        explanation: "Makineleri, motorları veya yapıları tasarlayan kişiye 'engineer' (mühendis) denir."
    },
    {
        question: "The traditional _______ of a country includes its customs, beliefs, and arts.",
        options: ["cuisine", "culture", "climate", "location"],
        correctAnswer: "culture",
        explanation: "Bir ülkenin geleneklerini, inançlarını ve sanatını içeren kavram 'culture' (kültür) dür."
    },
    {
        question: "You should avoid eating _______ snacks between meals.",
        options: ["sugary", "healthy", "nutritious", "fresh"],
        correctAnswer: "sugary",
        explanation: "Öğünler arasında 'sugary' (şekerli) atıştırmalıklar yemekten kaçınmalısınız."
    },
    {
        question: "A _______ is a large, strong building, built in the past to defend people.",
        options: ["palace", "castle", "cathedral", "mosque"],
        correctAnswer: "castle",
        explanation: "Geçmişte insanları savunmak için inşa edilmiş büyük, güçlü binaya 'castle' (kale) denir."
    },
    {
        question: "What do you call a person who serves customers in a shop?",
        options: ["A cashier", "A manager", "A shop assistant", "A client"],
        correctAnswer: "A shop assistant",
        explanation: "Bir dükkanda müşterilere hizmet veren kişiye 'shop assistant' (tezgahtar) denir."
    },
    {
        question: "The opposite of 'polite' is _______.",
        options: ["kind", "friendly", "rude", "nice"],
        correctAnswer: "rude",
        explanation: "'Polite' (kibar) kelimesinin zıttı 'rude' (kaba) kelimesidir."
    },
    {
        question: "She is very good at languages. She can speak three languages _______.",
        options: ["fluently", "badly", "slowly", "hardly"],
        correctAnswer: "fluently",
        explanation: "Dillerde çok iyi olan biri, o dilleri 'fluently' (akıcı bir şekilde) konuşabilir."
    },
    {
        question: "What is the capital city of France?",
        options: ["London", "Berlin", "Madrid", "Paris"],
        correctAnswer: "Paris",
        explanation: "Fransa'nın başkenti ('capital city') Paris'tir."
    },
    {
        question: "The movie was so _______ that I fell asleep in the middle.",
        options: ["exciting", "interesting", "boring", "funny"],
        correctAnswer: "boring",
        explanation: "Ortasında uyuyakaldığınız bir film, muhtemelen 'boring' (sıkıcı) bir filmdir."
    },
    {
        question: "A _______ fixes problems with water pipes.",
        options: ["plumber", "electrician", "carpenter", "mechanic"],
        correctAnswer: "plumber",
        explanation: "Su borularıyla ilgili sorunları çözen kişiye 'plumber' (tesisatçı) denir."
    },
    {
        question: "I am feeling a bit under the ______ today, so I will stay home.",
        options: ["weather", "sun", "moon", "rain"],
        correctAnswer: "weather",
        explanation: "'To be under the weather' (keyifsiz/hasta hissetmek) bir deyimdir."
    },
    {
        question: "You need a _______ to get on a plane.",
        options: ["ticket and passport", "boarding pass and ID", "driving license", "credit card"],
        correctAnswer: "boarding pass and ID",
        explanation: "Uçağa binmek için genellikle bir 'boarding pass' (biniş kartı) ve kimlik belgesi gerekir."
    },
    {
        question: "A building where you can see stars and planets is an _______.",
        options: ["observatory", "laboratory", "university", "factory"],
        correctAnswer: "observatory",
        explanation: "Yıldızları ve gezegenleri görebileceğiniz binaya 'observatory' (gözlemevi) denir."
    },
    {
        question: "He is very _______. He always says 'please' and 'thank you'.",
        options: ["rude", "impolite", "polite", "lazy"],
        correctAnswer: "polite",
        explanation: "Her zaman 'lütfen' ve 'teşekkür ederim' diyen biri 'polite' (kibar) biridir."
    },
    {
        question: "After I get up, I get dressed and then I _______ my hair.",
        options: ["wash", "comb", "brush", "cut"],
        correctAnswer: "comb",
        explanation: "Giyindikten sonra genellikle saç taranır. 'Comb' (taramak) doğru fiildir."
    },
    {
        question: "A: What would you like to drink? B: _______, please.",
        options: ["An egg", "A pancake", "Orange juice", "Some toast"],
        correctAnswer: "Orange juice",
        explanation: "'Drink' (içmek) fiiliyle sorulan bir soruya içecek bir cevap verilir. 'Orange juice' (portakal suyu) bir içecektir."
    },
    {
        question: "My father _______ the newspaper while he has his breakfast.",
        options: ["read", "reads", "is reading", "are reading"],
        correctAnswer: "reads",
        explanation: "Geniş zamanda bir alışkanlığı anlatan bu cümlede 'My father' (he) öznesiyle fiile -s takısı eklenir."
    },

    {
        question: "You can't turn left here. Look at the traffic _______!",
        options: ["light", "jam", "sign", "police"],
        correctAnswer: "sign",
        explanation: "Sola dönülmez gibi kuralları 'traffic sign' (trafik levhası) belirtir."
    },
    {
        question: "The weather is _______ today. I can't see anything.",
        options: ["foggy", "sunny", "clear", "windy"],
        correctAnswer: "foggy",
        explanation: "Hiçbir şeyin görülemediği hava durumu 'foggy' (sisli) olarak tanımlanır."
    },
    {
        question: "She feels _______ because she has an important exam tomorrow.",
        options: ["bored", "relaxed", "anxious", "happy"],
        correctAnswer: "anxious",
        explanation: "Önemli bir sınav öncesinde insanlar genellikle 'anxious' (endişeli, kaygılı) hisseder."
    },
    {
        question: "The _______ is across from the bank. You can cross the street.",
        options: ["skyscraper", "mosque", "bridge", "art gallery"],
        correctAnswer: "art gallery",
        explanation: "Bankanın karşısında ('across from') olabilecek bir yer, seçenekler arasında 'art gallery' (sanat galerisi) olabilir."
    },
    {
        question: "What is the weather like in London? It _______ heavily.",
        options: ["rain", "rains", "is raining", "rained"],
        correctAnswer: "is raining",
        explanation: "Şu anda olan bir hava durumunu belirtmek için Şimdiki Zaman ('is raining' - yağmur yağıyor) kullanılır."
    },
    {
        question: "He is _______ of the dark, so he always sleeps with a small light on.",
        options: ["scared", "tired", "fond", "proud"],
        correctAnswer: "scared",
        explanation: "'Scared of' (-den korkmak) bir kalıptır. Karanlıktan korkan biri ışıkla uyur."
    },
    {
        question: "A very tall, modern building is called a _______.",
        options: ["bridge", "monument", "skyscraper", "statue"],
        correctAnswer: "skyscraper",
        explanation: "Çok katlı, modern binalara 'skyscraper' (gökdelen) denir."
    },
    {
        question: "It was very stormy last night. There was loud _______ and bright lightning.",
        options: ["snow", "sun", "thunder", "wind"],
        correctAnswer: "thunder",
        explanation: "Fırtınalı havalarda şimşek ('lightning') ile birlikte gök gürültüsü ('thunder') duyulur."
    },
    {
        question: "I am really _______ to see you again after such a long time.",
        options: ["sad", "excited", "angry", "worried"],
        correctAnswer: "excited",
        explanation: "Uzun zaman sonra birini tekrar görmek 'excited' (heyecanlı) hissettirir."
    },
    {
        question: "Can you tell me the way to the nearest _______ station?",
        options: ["bus", "car", "plane", "underground"],
        correctAnswer: "underground",
        explanation: "Londra gibi büyük şehirlerde metroya 'underground station' (metro istasyonu) denir."
    },
    {
        question: "What does a tailor do?",
        options: ["He bakes bread.", "He fixes cars.", "He makes and repairs clothes.", "He grows vegetables."],
        correctAnswer: "He makes and repairs clothes.",
        explanation: "Bir 'tailor' (terzi), kıyafet yapar ve tamir eder."
    },
    {
        question: "I don't like carousels because they _______ round and round, and I feel dizzy.",
        options: ["go", "goes", "is going", "went"],
        correctAnswer: "go",
        explanation: "Genel bir doğrudan bahsederken geniş zaman kullanılır. 'They' (onlar) öznesiyle fiil yalın halde kalır."
    },
    {
        question: "A person who writes articles for a newspaper is a _______.",
        options: ["novelist", "librarian", "journalist", "publisher"],
        correctAnswer: "journalist",
        explanation: "Gazeteler için makale yazan kişiye 'journalist' (gazeteci) denir."
    },
    {
        question: "The ghost train wasn't frightening at all. I think it was _______.",
        options: ["amazing", "thrilling", "boring", "exciting"],
        correctAnswer: "boring",
        explanation: "Hiç korkutucu olmayan bir korku treni, 'boring' (sıkıcı) olarak nitelendirilebilir."
    },
    {
        question: "My uncle is a farmer. He _______ fruits and vegetables.",
        options: ["grow", "is growing", "grows", "grew"],
        correctAnswer: "grows",
        explanation: "Bir çiftçinin genel olarak yaptığı işi anlatırken geniş zaman kullanılır ve 'He' öznesiyle fiile -s takısı gelir."
    },
    {
        question: "The _______ was amazing! It went up so high and came down really fast.",
        options: ["roller coaster", "carousel", "Ferris wheel", "bumper car"],
        correctAnswer: "roller coaster",
        explanation: "Çok yükseğe çıkıp hızla aşağı inen eğlence trenine 'roller coaster' (hız treni) denir."
    },
    {
        question: "A _______ takes care of sick animals.",
        options: ["doctor", "nurse", "vet", "dentist"],
        correctAnswer: "vet",
        explanation: "Hasta hayvanlarla ilgilenen kişiye 'vet' (veteriner) denir."
    },
    {
        question: "I would like to try the roller coaster, but I am _______ of heights.",
        options: ["fond", "keen", "afraid", "interested"],
        correctAnswer: "afraid",
        explanation: "'Afraid of' (-den korkmak) bir kalıptır ve 'heights' (yükseklik) ile birlikte kullanılır."
    },
    {
        question: "A chef works in a kitchen, but a waiter works in the _______ area.",
        options: ["dining", "office", "garden", "parking"],
        correctAnswer: "dining",
        explanation: "Garsonlar, müşterilerin oturduğu 'dining area' (yemek alanı) bölümünde çalışır."
    },
    {
        question: "The clown at the fair was very _______. He made everybody laugh.",
        options: ["scary", "serious", "funny", "sad"],
        correctAnswer: "funny",
        explanation: "Herkesi güldüren bir palyaço 'funny' (komik) olarak tanımlanır."
    },
{
                question: "What is a healthy breakfast food?",
                options: ["Chips", "Eggs", "Candy", "Soda"],
                correctAnswer: "Eggs",
                explanation: "'Eggs' (yumurta) sağlıklı bir kahvaltı yiyeceğidir."
            },
            {
                question: "Where is the cinema?",
                options: ["In the kitchen", "Next to the park", "Under the table", "On the chair"],
                correctAnswer: "Next to the park",
                explanation: "Sinemanın konumu 'next to the park' (parkın yanında) gibi bir ifadeyle belirtilebilir."
            },
            {
                question: "How is the weather today?",
                options: ["It’s a book", "It’s sunny", "It’s a car", "It’s a pen"],
                correctAnswer: "It’s sunny",
                explanation: "Hava durumunu belirtmek için 'It’s sunny' (Hava güneşli) gibi ifadeler kullanılır."
            },
            {
                question: "What do you do at a fair?",
                options: ["Sleep all day", "Eat cotton candy", "Study math", "Work"],
                correctAnswer: "Eat cotton candy",
                explanation: "Panayırlarda 'eat cotton candy' (pamuk şeker yemek) yaygındır."
            },
            {
                question: "Where do you stay on vacation?",
                options: ["School", "Hospital", "Hotel", "Market"],
                correctAnswer: "Hotel",
                explanation: "Tatilde genellikle bir 'hotel' (otel)de konaklanır."
            },
            {
                question: "What does a firefighter do?",
                options: ["Sells clothes", "Puts out fires", "Teaches students", "Writes books"],
                correctAnswer: "Puts out fires",
                explanation: "Bir itfaiyeci ('firefighter') yangınları söndürür ('puts out fires')."
            },
            {
                question: "What does a leader do?",
                options: ["Cooks food", "Guides people", "Plays games", "Sings songs"],
                correctAnswer: "Guides people",
                explanation: "Bir lider ('leader') insanlara yol gösterir ('guides people')."
            },
            {
                question: "What do you do to save water?",
                options: ["Drink soda", "Eat candy", "Turn off the tap", "Watch TV"],
                correctAnswer: "Turn off the tap",
                explanation: "Suyu korumak için musluğu kapatmak ('turn off the tap') gerekir."
            },
            {
                question: "What do you do in a democracy?",
                options: ["Sleep", "Eat", "Vote", "Run"],
                correctAnswer: "Vote",
                explanation: "Demokrasilerde vatandaşlar 'vote' (oy kullanır)."
            },
            {
                question: "What do you eat with cereal?",
                options: ["Water", "Milk", "Juice", "Tea"],
                correctAnswer: "Milk",
                explanation: "Mısır gevreği ('cereal') genellikle 'milk' (süt) ile yenir."
            },
            {
                question: "What is opposite the school?",
                options: ["Chair", "Park", "Table", "Book"],
                correctAnswer: "Park",
                explanation: "Okulun karşısında ('opposite') bir 'park' olabilir."
            },
            {
                question: "What do you feel when it’s cold?",
                options: ["Happy", "Sad", "Cold", "Angry"],
                correctAnswer: "Cold",
                explanation: "Hava soğuk olduğunda 'cold' (üşümüş) hissedersiniz."
            },
            {
                question: "What do you win at a fair?",
                options: ["Car", "Desk", "Prize", "Shirt"],
                correctAnswer: "Prize",
                explanation: "Panayırlarda oyunlardan 'prize' (ödül) kazanılabilir."
            },
            {
                question: "What do you need for a vacation?",
                options: ["Desk", "Fork", "Ticket", "Book"],
                correctAnswer: "Ticket",
                explanation: "Tatile gitmek için genellikle bir 'ticket' (bilet) gerekir."
            },
            {
                question: "What does a chef do?",
                options: ["Drives cars", "Cooks food", "Teaches students", "Sings songs"],
                correctAnswer: "Cooks food",
                explanation: "Bir 'chef' (şef) yemek pişirir ('cooks food')."
            },
            {
                question: "What is a famous person’s life story?",
                options: ["Movie", "Biography", "Game", "Song"],
                correctAnswer: "Biography",
                explanation: "Ünlü birinin hayat hikayesine 'biography' (biyografi) denir."
            },
            {
                question: "What do you do with plastic bottles?",
                options: ["Eat", "Throw away", "Recycle", "Wear"],
                correctAnswer: "Recycle",
                explanation: "Plastik şişeleri 'recycle' (geri dönüştürmek) çevre için önemlidir."
            },
            {
                question: "What do you choose in an election?",
                options: ["Book", "Food", "Leader", "Game"],
                correctAnswer: "Leader",
                explanation: "Bir seçimde ('election') bir 'leader' (lider) seçilir."
            },
            {
                question: "What is a breakfast drink?",
                options: ["Soda", "Coffee", "Juice", "Water"],
                correctAnswer: "Juice",
                explanation: "'Juice' (meyve suyu) popüler bir kahvaltı içeceğidir."
            },
            {
                question: "Where do you go to buy clothes?",
                options: ["Park", "School", "Mall", "Hospital"],
                correctAnswer: "Mall",
                explanation: "Kıyafet almak için bir 'mall' (AVM) veya mağazaya gidilir."
            },
            {
                question: "What do you wear when it’s rainy?",
                options: ["T-shirt", "Swimsuit", "Shorts", "Raincoat"],
                correctAnswer: "Raincoat",
                explanation: "Yağmurlu havada 'raincoat' (yağmurluk) giyilir."
            },
            {
                question: "What do you play at a fair?",
                options: ["Basketball", "Football", "Ring toss", "Tennis"],
                correctAnswer: "Ring toss",
                explanation: "'Ring toss' (halka atma) bir panayır oyunudur."
            },
            {
                question: "What do you see on vacation?",
                options: ["Books", "Homework", "Sights", "Cars"],
                correctAnswer: "Sights",
                explanation: "Tatilde turistik yerler ('sights') görülür."
            },
            {
                question: "What does a pilot do?",
                options: ["Cooks food", "Flies planes", "Teaches students", "Sells clothes"],
                correctAnswer: "Flies planes",
                explanation: "Bir 'pilot' uçak kullanır ('flies planes')."
            },
            {
                question: "What did a famous person do in the past?",
                options: ["Ate food", "Wrote a book", "Slept", "Ran"],
                correctAnswer: "Wrote a book",
                explanation: "Ünlü bir kişi geçmişte 'wrote a book' (kitap yazmış) olabilir."
            },
            {
                question: "What do you plant to save the planet?",
                options: ["Books", "Trees", "Cars", "Shoes"],
                correctAnswer: "Trees",
                explanation: "Gezegeni korumak için 'trees' (ağaçlar) dikmek önemlidir."
            },
            {
                question: "What is a ‘candidate’ in an election?",
                options: ["Person who votes", "Person who cooks", "Person who runs for office", "Person who sings"],
                correctAnswer: "Person who runs for office",
                explanation: "Seçimdeki bir 'candidate' (aday), bir makam için yarışan kişidir."
            },
            {
                question: "What do you eat for a snack?",
                options: ["Shoe", "Fruit", "Pen", "Book"],
                correctAnswer: "Fruit",
                explanation: "'Fruit' (meyve) sağlıklı bir atıştırmalıktır."
            },
            {
                question: "What is behind the library?",
                options: ["Table", "Chair", "Park", "Book"],
                correctAnswer: "Park",
                explanation: "Kütüphanenin arkasında ('behind') bir 'park' olabilir."
            },
            {
                question: "What do you feel when you win?",
                options: ["Sad", "Angry", "Happy", "Tired"],
                correctAnswer: "Happy",
                explanation: "Kazandığınızda 'happy' (mutlu) hissedersiniz."
            },
            {
                question: "What do you buy at a fair?",
                options: ["Car", "Desk", "Toys", "Shirt"],
                correctAnswer: "Toys",
                explanation: "Panayırlardan 'toys' (oyuncaklar) satın alınabilir."
            },
            {
                question: "What do you pack for a trip?",
                options: ["Books", "Cars", "Clothes", "Tables"],
                correctAnswer: "Clothes",
                explanation: "Bir gezi için 'clothes' (kıyafetler) hazırlarsınız."
            },
            {
                question: "What does a police officer do?",
                options: ["Cooks food", "Keeps people safe", "Teaches students", "Sings songs"],
                correctAnswer: "Keeps people safe",
                explanation: "Bir polis memuru ('police officer') insanları güvende tutar."
            },
            {
                question: "What is a biography about?",
                options: ["A car’s history", "A person’s life", "A book’s story", "A game’s rules"],
                correctAnswer: "A person’s life",
                explanation: "Bir biyografi bir insanın hayatı hakkındadır."
            },
            {
                question: "What do you do to save energy?",
                options: ["Eat candy", "Watch TV", "Turn off lights", "Run"],
                correctAnswer: "Turn off lights",
                explanation: "Enerji tasarrufu için 'turn off lights' (ışıkları kapatmak) gerekir."
            },
            {
                question: "What do you do before an election?",
                options: ["Eat", "Sleep", "Campaign", "Vote"],
                correctAnswer: "Campaign",
                explanation: "Seçimden önce adaylar 'campaign' (kampanya) yapar."
            },
            {
                question: "What is a healthy breakfast?",
                options: ["Chips", "Candy", "Yogurt", "Soda"],
                correctAnswer: "Yogurt",
                explanation: "'Yogurt' (yoğurt) sağlıklı bir kahvaltı seçeneğidir."
            },
            {
                question: "What is a place to exercise?",
                options: ["Bedroom", "Kitchen", "Bathroom", "Gym"],
                correctAnswer: "Gym",
                explanation: "'Gym' (spor salonu) egzersiz yapmak için bir yerdir."
            },
            {
                question: "What do you wear when it’s snowy?",
                options: ["T-shirt", "Swimsuit", "Coat", "Shorts"],
                correctAnswer: "Coat",
                explanation: "Karlı havada sıcak kalmak için 'coat' (palto/mont) giyilir."
            },
            {
                question: "What do you do at a fair?",
                options: ["Cook", "Study", "Win a prize", "Sleep"],
                correctAnswer: "Win a prize",
                explanation: "Panayırlarda 'win a prize' (ödül kazanmak) mümkündür."
            },
            {
                question: "What is a 'museum'?",
                options: ["Place to sleep", "Place to eat", "Place to see history", "Place to play"],
                correctAnswer: "Place to see history",
                explanation: "'Museum' (müze), tarihi eserleri ve sanat eserlerini görmek için bir yerdir."
            },
            {
                question: "What do you say to ask for help?",
                options: ["Go away!", "I’m fine!", "Can you help me?", "No way!"],
                correctAnswer: "Can you help me?",
                explanation: "Yardım istemek için kibarca 'Can you help me?' (Bana yardım edebilir misin?) diye sorulur."
            },
            {
                question: "What is a 'schedule'?",
                options: ["Type of food", "Kind of game", "Plan for the day", "Piece of clothing"],
                correctAnswer: "Plan for the day",
                explanation: "'Schedule' (program), gün için yapılan bir plandır."
            },
            {
                question: "What do you wear on your head?",
                options: ["Jacket", "Shoes", "Hat", "Gloves"],
                correctAnswer: "Hat",
                explanation: "Başımıza 'hat' (şapka) takarız."
            },
            {
                question: "What is a 'tourist'?",
                options: ["Person who cooks", "Person who teaches", "Person who travels", "Person who sings"],
                correctAnswer: "Person who travels",
                explanation: "'Tourist' (turist), gezi amaçlı seyahat eden kişidir."
            },
            {
                question: "What do you do to stay healthy?",
                options: ["Watch TV", "Eat candy", "Exercise", "Sleep"],
                correctAnswer: "Exercise",
                explanation: "Sağlıklı kalmak için 'exercise' (egzersiz) yapmak önemlidir."
            },
            {
                question: "What is a 'rule'?",
                options: ["Something you eat", "Something you wear", "Something you must follow", "Something you read"],
                correctAnswer: "Something you must follow",
                explanation: "'Rule' (kural), uyulması gereken bir yönergedir."
            },
            {
                question: "What do you use for a hobby like painting?",
                options: ["Spoon", "Shoe", "Brush", "Ball"],
                correctAnswer: "Brush",
                explanation: "Resim yapma hobisi için 'brush' (fırça) kullanılır."
            },
            {
                question: "What is a 'neighbor'?",
                options: ["Person at school", "Person at work", "Person nearby", "Person in family"],
                correctAnswer: "Person nearby",
                explanation: "'Neighbor' (komşu), yakınınızda yaşayan kişidir."
            },
            {
                question: "What do you say to ask the time?",
                options: ["Where are you?", "What time is it?", "How are you?", "What is this?"],
                correctAnswer: "What time is it?",
                explanation: "Saati sormak için 'What time is it?' (Saat kaç?) denir."
            },
            {
                question: "What do you do before bed?",
                options: ["Play soccer", "Watch TV", "Brush teeth", "Eat lunch"],
                correctAnswer: "Brush teeth",
                explanation: "Yatmadan önce 'brush teeth' (diş fırçalamak) sağlıklı bir alışkanlıktır."
            },
            {
                question: "What is a 'sore throat'?",
                options: ["Pain in head", "Pain in leg", "Pain in throat", "High fever"],
                correctAnswer: "Pain in throat",
                explanation: "'Sore throat', boğazdaki ağrı anlamına gelir."
            },
            {
                question: "What do you say to invite someone?",
                options: ["I’m busy", "Go away", "Come to my party", "See you later"],
                correctAnswer: "Come to my party",
                explanation: "Birini davet etmek için 'Come to my party' (Partime gel) diyebilirsiniz."
            },
            {
                question: "What do you need for a picnic?",
                options: ["Schoolbag", "Toothbrush", "Blanket", "Laptop"],
                correctAnswer: "Blanket",
                explanation: "Piknikte üzerine oturmak için 'blanket' (battaniye) kullanılır."
            },
            {
                question: "What is a 'volleyball'?",
                options: ["Food", "Animal", "Sport", "Place"],
                correctAnswer: "Sport",
                explanation: "'Volleyball' (voleybol) bir spor dalıdır."
            },
            {
                question: "What do you do at a concert?",
                options: ["Study", "Work", "Listen to music", "Sleep"],
                correctAnswer: "Listen to music",
                explanation: "Konserlerde 'listen to music' (müzik dinlenir)."
            },
            {
                question: "What do you say to congratulate someone?",
                options: ["I’m sorry!", "No way!", "Well done!", "Go away!"],
                correctAnswer: "Well done!",
                explanation: "Birini tebrik etmek için 'Well done!' (Harika iş!) denir."
            },
            {
                question: "What do you need for a game?",
                options: ["Schoolbag", "Toothbrush", "Ball", "Laptop"],
                correctAnswer: "Ball",
                explanation: "Birçok oyun için bir 'ball' (top) gerekir."
            },
            {
                question: "What is a 'festival'?",
                options: ["Place to sleep", "Place to eat", "Event to celebrate", "Place to work"],
                correctAnswer: "Event to celebrate",
                explanation: "'Festival', kutlama amaçlı bir etkinliktir."
            },
            {
                question: "What do you do to stay clean?",
                options: ["Watch TV", "Eat candy", "Take a shower", "Play soccer"],
                correctAnswer: "Take a shower",
                explanation: "Temiz kalmak için 'take a shower' (duş almak) önemlidir."
            },
            {
                question: "What is a 'bicycle'?",
                options: ["Food", "Cloth", "Vehicle", "Toy"],
                correctAnswer: "Vehicle",
                explanation: "'Bicycle' (bisiklet) bir ulaşım aracıdır ('vehicle')."
            },
            {
                question: "What do you say to ask for permission?",
                options: ["Go away!", "I’m fine!", "Can I go?", "No way!"],
                correctAnswer: "Can I go?",
                explanation: "İzin istemek için 'Can I go?' (Gidebilir miyim?) gibi ifadeler kullanılır."
            },
            {
                question: "What do you do at a zoo?",
                options: ["Study", "Work", "See animals", "Sleep"],
                correctAnswer: "See animals",
                explanation: "Hayvanat bahçesinde ('zoo') hayvanları görürsünüz."
            },
            {
                question: "What is a 'breakfast'?",
                options: ["Meal at night", "Meal in the afternoon", "Meal in the morning", "Meal at noon"],
                correctAnswer: "Meal in the morning",
                explanation: "'Breakfast' (kahvaltı), sabah yenen öğündür."
            },
            {
                question: "What do you wear for a party?",
                options: ["Uniform", "Pajamas", "Swimsuit", "Dress"],
                correctAnswer: "Dress",
                explanation: "Bir partiye giderken 'dress' (elbise) gibi şık kıyafetler giyilebilir."
            },
            {
                question: "What is a 'song'?",
                options: ["Book", "Food", "Music", "Game"],
                correctAnswer: "Music",
                explanation: "'Song' (şarkı), bir müzik türüdür."
            },
            {
                question: "What do you do to help a friend?",
                options: ["Run away", "Ignore them", "Share with them", "Sleep"],
                correctAnswer: "Share with them",
                explanation: "Bir arkadaşa yardım etmek için onunla bir şeyler paylaşabilirsiniz ('share with them')."
            },
            {
                question: "What is a 'bus stop'?",
                options: ["Place to sleep", "Place to eat", "Place to wait for a bus", "Place to play"],
                correctAnswer: "Place to wait for a bus",
                explanation: "'Bus stop' (otobüs durağı), otobüs beklenen yerdir."
            },
            {
                question: "What do you say to introduce a friend?",
                options: ["Go away!", "I’m fine!", "This is my friend", "No way!"],
                correctAnswer: "This is my friend",
                explanation: "Bir arkadaşınızı tanıtmak için 'This is my friend' (Bu benim arkadaşım) dersiniz."
            },
            {
                question: "What do you do at a beach?",
                options: ["Study", "Work", "Sleep", "Swim"],
                correctAnswer: "Swim",
                explanation: "Plajda ('beach') 'swim' (yüzmek) popüler bir aktivitedir."
            },
            {
                question: "What is a 'lunch'?",
                options: ["Meal at night", "Meal in the morning", "Meal at noon", "Meal in the evening"],
                correctAnswer: "Meal at noon",
                explanation: "'Lunch' (öğle yemeği), öğlen yenen öğündür."
            },
            {
                question: "What do you wear for sports?",
                options: ["Dress", "Suit", "Hat", "Sneakers"],
                correctAnswer: "Sneakers",
                explanation: "Spor yaparken 'sneakers' (spor ayakkabı) giyilir."
            },
            {
                question: "What is a 'friendship'?",
                options: ["Something you eat", "Something you wear", "Something you read", "Being kind to others"],
                correctAnswer: "Being kind to others",
                explanation: "'Friendship' (arkadaşlık), başkalarına karşı nazik olmayı içerir."
            },
            {
                question: "What do you do at a playground?",
                options: ["Study", "Work", "Sleep", "Play"],
                correctAnswer: "Play",
                explanation: "Oyun parkında ('playground') oynanır."
            },
            {
                question: "What is a 'snack'?",
                options: ["Meal at night", "Meal in the morning", "Small meal between meals", "Meal at noon"],
                correctAnswer: "Small meal between meals",
                explanation: "'Snack' (atıştırmalık), öğünler arasında yenen küçük bir yemektir."
            },
            {
                question: "What do you say to ask for a toy?",
                options: ["Go away!", "I’m fine!", "No way!", "Can I have it?"],
                correctAnswer: "Can I have it?",
                explanation: "Bir oyuncak istemek için kibarca 'Can I have it?' (Onu alabilir miyim?) diye sorulur."
            },
            {
                question: "What do you do at a party?",
                options: ["Study", "Work", "Dance", "Sleep"],
                correctAnswer: "Dance",
                explanation: "Partilerde 'dance' (dans etmek) yaygındır."
            },
            {
                question: "What is a 'home'?",
                options: ["Place to buy things", "Place to study", "Place to sleep", "Place to play"],
                correctAnswer: "Place to sleep",
                explanation: "'Home' (ev), içinde yaşanılan ve uyunulan bir yerdir."
            },
            {
                question: "What do you say to suggest a game?",
                options: ["I’m tired!", "Go away!", "Let’s play!", "No way!"],
                correctAnswer: "Let’s play!",
                explanation: "Bir oyun önermek için 'Let’s play!' (Hadi oynayalım!) denir."
            },
            {
                question: "What do you do to relax?",
                options: ["Work", "Study", "Run", "Read a book"],
                correctAnswer: "Read a book",
                explanation: "Rahatlamak için 'read a book' (kitap okumak) iyi bir aktivitedir."
            },
            {
                question: "What do you say to offer help?",
                options: ["Go away!", "I’m fine!", "No way!", "Can I help you?"],
                correctAnswer: "Can I help you?",
                explanation: "Yardım teklif etmek için 'Can I help you?' (Yardım edebilir miyim?) denir."
            },
            {
                question: "What do you do in a garden?",
                options: ["Study", "Work", "Sleep", "Plant flowers"],
                correctAnswer: "Plant flowers",
                explanation: "Bahçede 'plant flowers' (çiçek dikmek) gibi işler yapılır."
            },
            {
                question: "What is a 'dinner'?",
                options: ["Meal in the morning", "Meal at noon", "Meal in the afternoon", "Meal at night"],
                correctAnswer: "Meal at night",
                explanation: "'Dinner' (akşam yemeği), akşam yenen öğündür."
            }
        ],

        advanced: [
            {
                question: "What do you say to ask about someone’s routine?",
                options: ["What do you do every day?", "Where are you?", "What is this?", "How is the weather?"],
                correctAnswer: "What do you do every day?",
                explanation: "Birinin rutinini sormak için 'What do you do every day?' (Her gün ne yaparsın?) sorusu kullanılır."
            },

    {
                question: "He _______ home at half past four, and then he meets his friends.",
                options: ["arrive", "is arriving", "arrives", "arrived"],
                correctAnswer: "arrives",
                explanation: "Geniş zamanda bir rutini anlatırken, 'he' öznesiyle fiile -s takısı gelir. 'Arrive home' eve varmaktır."
            },
    {
        question: "A: _______ do you do after you finish your homework? B: I watch TV.",
        options: ["What", "When", "Where", "Who"],
        correctAnswer: "What",
        explanation: "Birinin ne yaptığını sormak için 'What' (Ne) soru kelimesi kullanılır."
    },
    {
        question: "My sister and I _______ our rooms on Saturdays.",
        options: ["tidy up", "tidies up", "is tidying up", "are tidying up"],
        correctAnswer: "tidy up",
        explanation: "Özne 'My sister and I' (we) olduğu için geniş zamanda fiil yalın halde kullanılır. 'Tidy up' (toplamak, düzenlemek) bir ev işidir."
    },
    {
        question: "I prefer eating cheese and olives for breakfast, but my brother likes _______ with milk.",
        options: ["croissants", "sausages", "cereal", "bagels"],
        correctAnswer: "cereal",
        explanation: "Süt ile yenen kahvaltılık yiyecek 'cereal' (kahvaltılık gevrek) seçeneğidir."
    },
    {
        question: "She can't eat muffins or croissants because she is _______ to gluten.",
        options: ["allergic", "healthy", "fond", "keen"],
        correctAnswer: "allergic",
        explanation: "Belirli yiyecekleri yiyemeyen bir kişi onlara karşı 'allergic' (alerjik) olabilir."
    },
    {
        question: "He runs errands for his grandparents _______ the afternoon.",
        options: ["at", "on", "in", "from"],
        correctAnswer: "in",
        explanation: "Günün bölümlerinden 'afternoon' (öğleden sonra) için 'in' edatı kullanılır. 'Run errands' (ayak işlerini yapmak) bir ifadedir."
    },
    {
        question: "A: Do you want a muffin? B: No, thanks. I don't like _______ food.",
        options: ["nutritious", "healthy", "junk", "delicious"],
        correctAnswer: "junk",
        explanation: "Muffin gibi yiyecekler genellikle 'junk food' (abur cubur) kategorisine girer."
    },
    {
        question: "What time does your traditional dance course _______?",
        options: ["start", "starts", "is starting", "started"],
        correctAnswer: "start",
        explanation: "'Do/Does' ile sorulan sorularda ana fiil her zaman yalın (V1) halde olur."
    },
    {
        question: "I have to leave home early because my school is _______ from our house.",
        options: ["near", "far", "next to", "close"],
        correctAnswer: "far",
        explanation: "Evden erken çıkması gerekiyorsa, okulu evine 'far' (uzak) demektir."
    },
    {
        question: "To keep fit, you should eat _______ food and exercise regularly.",
        options: ["junk", "unhealthy", "nutritious", "fatty"],
        correctAnswer: "nutritious",
        explanation: "Formda kalmak için düzenli egzersiz yapmalı ve 'nutritious' (besleyici) yiyecekler yemelisiniz."
    },

    {
        question: "The temperature is below zero. It is _______ outside.",
        options: ["boiling", "freezing", "warm", "cool"],
        correctAnswer: "freezing",
        explanation: "Sıcaklık sıfırın altına düştüğünde hava 'freezing' (dondurucu) olur."
    },
    {
        question: "He felt _______ when he got a bad mark on his exam.",
        options: ["miserable", "cheerful", "energetic", "pleased"],
        correctAnswer: "miserable",
        explanation: "Sınavdan kötü bir not alan biri kendini 'miserable' (perişan, çok mutsuz) hissedebilir."
    },
    {
        question: "There is a lot of traffic, so we are moving very _______.",
        options: ["fast", "quickly", "slowly", "rapidly"],
        correctAnswer: "slowly",
        explanation: "Trafik sıkışıklığında arabalar 'slowly' (yavaşça) hareket eder."
    },
    {
        question: "I need to go to the _______ to send a letter to my friend.",
        options: ["stationery", "post office", "bookstore", "newsagent"],
        correctAnswer: "post office",
        explanation: "Arkadaşınıza mektup göndermek için 'post office' (postane) gitmeniz gerekir."
    },
    {
        question: "Don't go out without a coat. The wind is _______ very strongly.",
        options: ["shining", "raining", "snowing", "blowing"],
        correctAnswer: "blowing",
        explanation: "Rüzgar için 'blowing' (esmek) fiili kullanılır."
    },
    {
        question: "She was very _______ when she won the first prize.",
        options: ["surprised", "disappointed", "bored", "worried"],
        correctAnswer: "surprised",
        explanation: "Birincilik ödülünü kazanan biri 'surprised' (şaşırmış) ve mutlu olabilir."
    },
    {
        question: "A _______ shows historical events and figures.",
        options: ["statue", "monument", "fountain", "tower"],
        correctAnswer: "monument",
        explanation: "Tarihi olayları ve figürleri gösteren yapıya 'monument' (anıt) denir."
    },
    {
        question: "The weather forecast says it will be _______ tomorrow, so we can have a picnic.",
        options: ["stormy", "hailing", "mild", "freezing"],
        correctAnswer: "mild",
        explanation: "Piknik yapmak için havanın 'mild' (ılıman) olması idealdir."
    },
    {
        question: "He feels _______ because all his friends are on holiday and he is at home.",
        options: ["lonely", "joyful", "thrilled", "peaceful"],
        correctAnswer: "lonely",
        explanation: "Tüm arkadaşları tatildeyken evde olan biri kendini 'lonely' (yalnız) hissedebilir."
    },
    {
        question: "The area in the center of a city with lots of shops and offices is the _______.",
        options: ["suburb", "countryside", "downtown", "village"],
        correctAnswer: "downtown",
        explanation: "Bir şehrin alışveriş ve iş merkezlerinin yoğun olduğu bölgesine 'downtown' (şehir merkezi) denir."
    },

    {
        question: "A person who is qualified to advise people about the law is a(n) _______.",
        options: ["engineer", "lawyer", "architect", "scientist"],
        correctAnswer: "lawyer",
        explanation: "İnsanlara hukuk konusunda danışmanlık yapan yetkili kişiye 'lawyer' (avukat) denir."
    },
    {
        question: "I find the wave swinger _______ because it goes very high and fast.",
        options: ["dull", "boring", "exciting", "tasteless"],
        correctAnswer: "exciting",
        explanation: "Çok yükseğe çıkan ve hızlı giden bir eğlence aracı 'exciting' (heyecan verici) olarak tanımlanır."
    },
    {
        question: "A _______ is responsible for preparing food in a restaurant's kitchen.",
        options: ["waiter", "customer", "chef", "manager"],
        correctAnswer: "chef",
        explanation: "Restoran mutfağında yemek hazırlamaktan sorumlu olan kişiye 'chef' (şef, aşçıbaşı) denir."
    },
    {
        question: "The prices at the fair were very _______. We couldn't afford to buy much.",
        options: ["cheap", "reasonable", "expensive", "low"],
        correctAnswer: "expensive",
        explanation: "Çok fazla bir şey alamayacak kadar paraları yetmiyorsa, fiyatlar 'expensive' (pahalı) demektir."
    },
    {
        question: "What qualifications do you need to be a(n) _______?",
        options: ["worker", "customer", "employee", "engineer"],
        correctAnswer: "engineer",
        explanation: "'Engineer' (mühendis) olmak için belirli niteliklere ve eğitime ihtiyaç vardır."
    },
    {
        question: "I felt a bit sick after riding the roller coaster three times in a _______.",
        options: ["line", "row", "queue", "circle"],
        correctAnswer: "row",
        explanation: "'In a row' (arka arkaya, üst üste) bir eylemin kesintisiz tekrarlandığını belirtir."
    },
    {
        question: "My sister wants to be a _______ because she is very good at designing websites.",
        options: ["web designer", "fashion designer", "architect", "graphic designer"],
        correctAnswer: "web designer",
        explanation: "Web sitesi tasarlamada iyi olan biri 'web designer' (web tasarımcısı) olmak isteyebilir."
    },
    {
        question: "There was a long _______ to buy tickets for the Ferris wheel.",
        options: ["road", "line", "queue", "path"],
        correctAnswer: "queue",
        explanation: "Bilet almak için bekleyen insan sırasına 'queue' (kuyruk) denir."
    },
    {
        question: "A person who can translate from one language to another is a(n) _______.",
        options: ["author", "journalist", "interpreter", "librarian"],
        correctAnswer: "interpreter",
        explanation: "Bir dilden diğerine sözlü çeviri yapan kişiye 'interpreter' (tercüman) denir."
    },
    {
        question: "I think bumper cars are more _______ than the carousel.",
        options: ["entertaining", "boring", "dull", "slow"],
        correctAnswer: "entertaining",
        explanation: "İki şeyi karşılaştırırken, çarpışan arabaların atlıkarıncadan daha 'entertaining' (eğlenceli) olduğunu belirtebiliriz."
    },
{
                question: "Which food is NOT healthy for breakfast?",
                options: ["Yogurt", "Fruit", "Candy", "Eggs"],
                correctAnswer: "Candy",
                explanation: "'Candy' (şeker) kahvaltı için sağlıklı bir seçenek değildir."
            },
            {
                question: "What do you say to give directions?",
                options: ["I’m tired", "Nice to meet you", "Go straight", "What’s your name?"],
                correctAnswer: "Go straight",
                explanation: "Yol tarifi verirken 'Go straight' (Düz git) gibi ifadeler kullanılır."
            },
            {
                question: "How do you describe snowy weather?",
                options: ["It’s very hot", "It’s very cold", "It’s very dry", "It’s very windy"],
                correctAnswer: "It’s very cold",
                explanation: "Karlı hava ('snowy weather') çok soğuk olur."
            },
            {
                question: "What can you NOT do at a fair?",
                options: ["Eat cotton candy", "Win a prize", "Study math", "Ride a roller coaster"],
                correctAnswer: "Study math",
                explanation: "Panayırlar eğlence yerleridir, 'study math' (matematik çalışmak) için uygun değildir."
            },

    {
        question: "A person who is not afraid of taking risks is considered to be _______.",
        options: ["cautious", "adventurous", "timid", "shy"],
        correctAnswer: "adventurous",
        explanation: "Risk almaktan korkmayan bir kişi 'adventurous' (maceraperest) olarak kabul edilir."
    },
    {
        question: "He was studying for his exam when his friends _______ to see him.",
        options: ["were coming", "came", "come", "are coming"],
        correctAnswer: "came",
        explanation: "Geçmişte bir eylem devam ederken (ders çalışmak), onu bölen kısa, tamamlanmış eylem (arkadaşlarının gelmesi) Simple Past Tense ile ifade edilir."
    },
    {
        question: "The part of a town or city that is away from the center is called the _______.",
        options: ["downtown", "city center", "suburbs", "square"],
        correctAnswer: "suburbs",
        explanation: "Şehir merkezinden uzakta olan yerleşim bölgelerine 'suburbs' (banliyö) denir."
    },
    {
        question: "To maintain a healthy lifestyle, you should _______ processed food.",
        options: ["consume", "eat", "avoid", "enjoy"],
        correctAnswer: "avoid",
        explanation: "Sağlıklı bir yaşam tarzı sürdürmek için işlenmiş gıdalardan 'avoid' (kaçınmak) etmelisiniz."
    },
    {
        question: "She is so _______. One minute she wants to go out, the next she wants to stay home.",
        options: ["decisive", "stubborn", "indecisive", "reliable"],
        correctAnswer: "indecisive",
        explanation: "Sürekli fikrini değiştiren ve karar veremeyen bir kişiye 'indecisive' (kararsız) denir."
    },
    {
        question: "The opposite of 'temporary' is _______.",
        options: ["permanent", "short", "long", "brief"],
        correctAnswer: "permanent",
        explanation: "'Temporary' (geçici) kelimesinin zıttı 'permanent' (kalıcı) kelimesidir."
    },
    {
        question: "An _______ is a person who studies past cultures by digging up remains and artifacts.",
        options: ["historian", "archaeologist", "geologist", "biologist"],
        correctAnswer: "archaeologist",
        explanation: "Kalıntıları ve eserleri kazarak geçmiş kültürleri inceleyen kişiye 'archaeologist' (arkeolog) denir."
    },
    {
        question: "I prefer watching documentaries _______ reality shows because they are more informative.",
        options: ["than", "from", "to", "over"],
        correctAnswer: "to",
        explanation: "'Prefer something to something else' kalıbı, bir şeyi diğerine tercih ettiğini belirtmek için kullanılır."
    },
    {
        question: "The carrousel at the funfair was disappointing; it moved incredibly _______.",
        options: ["fast", "quickly", "slowly", "rapidly"],
        correctAnswer: "slowly",
        explanation: "Hayal kırıklığı yaratan bir atlıkarınca muhtemelen çok 'slowly' (yavaşça) hareket ediyordur."
    },
    {
        question: "To make this recipe, you need to finely _______ the garlic.",
        options: ["dice", "slice", "chop", "grate"],
        correctAnswer: "chop",
        explanation: "Sarımsağı ince ince kıymak için 'chop' (doğramak, kıymak) fiili kullanılır."
    },
    {
        question: "A _______ is a public square in a city, often with historical monuments.",
        options: ["boulevard", "plaza", "avenue", "street"],
        correctAnswer: "plaza",
        explanation: "Genellikle tarihi anıtların bulunduğu halka açık meydanlara 'plaza' denir."
    },
    {
        question: "You _______ be a professional chef to cook a delicious meal.",
        options: ["must", "have to", "don't have to", "shouldn't"],
        correctAnswer: "don't have to",
        explanation: "Lezzetli bir yemek pişirmek için profesyonel bir şef olmak zorunda değilsiniz. 'Don't have to' zorunluluk olmadığını belirtir."
    },
    {
        question: "She is a very _______ person; she always considers other people's feelings.",
        options: ["selfish", "thoughtful", "arrogant", "careless"],
        correctAnswer: "thoughtful",
        explanation: "Başkalarının duygularını düşünen kişiye 'thoughtful' (düşünceli) denir."
    },
    {
        question: "A person who is employed to do domestic tasks in a large house is a _______.",
        options: ["butler", "chef", "gardener", "driver"],
        correctAnswer: "butler",
        explanation: "Büyük bir evde ev işlerini yapmak üzere çalışan kişiye 'butler' (uşak, kahya) denir."
    },
    {
        question: "He _______ for the bus when it started to rain heavily.",
        options: ["was waiting", "waited", "is waiting", "waits"],
        correctAnswer: "was waiting",
        explanation: "Geçmişte bir eylem (beklemek) devam ederken başka bir eylemin (yağmurun başlaması) olduğunu belirtmek için Past Continuous Tense kullanılır."
    },
    {
        question: "I'm not keen _______ horror movies; I find them too stressful.",
        options: ["on", "at", "in", "about"],
        correctAnswer: "on",
        explanation: "'Keen on' (-e meraklı/istekli olmak) kalıbında 'on' edatı kullanılır."
    },
    {
        question: "The river _______ its banks after three days of heavy rain.",
        options: ["burst", "flowed", "ran", "filled"],
        correctAnswer: "burst",
        explanation: "Bir nehrin yatağından taşması için 'burst its banks' deyimi kullanılır."
    },
    {
        question: "What qualifications do you need to become a _______?",
        options: ["customer", "patient", "surgeon", "tourist"],
        correctAnswer: "surgeon",
        explanation: "Bir 'surgeon' (cerrah) olmak için özel nitelikler ve uzun bir eğitim gerekir."
    },
    {
        question: "The opposite of 'ancient' is _______.",
        options: ["old", "historic", "modern", "antique"],
        correctAnswer: "modern",
        explanation: "'Ancient' (antik) kelimesinin zıttı 'modern' kelimesidir."
    },
    {
        question: "It was a _______ day, with clear blue skies and no clouds.",
        options: ["gloomy", "overcast", "splendid", "foggy"],
        correctAnswer: "splendid",
        explanation: "Açık mavi gökyüzü ve bulutsuz bir gün 'splendid' (harika, muhteşem) olarak tanımlanabilir."
    },
    {
        question: "A person who works for a company is an _______.",
        options: ["employer", "employee", "manager", "director"],
        correctAnswer: "employee",
        explanation: "Bir şirket için çalışan kişiye 'employee' (çalışan, personel) denir. 'Employer' işverendir."
    },
    {
        question: "He would rather _______ a documentary than watch a sitcom.",
        options: ["to watch", "watching", "watch", "watches"],
        correctAnswer: "watch",
        explanation: "'Would rather' kalıbından sonra gelen fiil her zaman yalın (V1) halde olur."
    },
    {
        question: "The atmosphere at the carnival was vibrant and _______.",
        options: ["dull", "boring", "lively", "quiet"],
        correctAnswer: "lively",
        explanation: "Canlı bir atmosferi tanımlamak için 'vibrant' ile birlikte 'lively' (canlı, hareketli) kelimesi kullanılır."
    },
    {
        question: "A _______ is a structure that is built over a river or a road.",
        options: ["tunnel", "bridge", "path", "canal"],
        correctAnswer: "bridge",
        explanation: "Bir nehir veya yolun üzerinden geçmek için inşa edilen yapıya 'bridge' (köprü) denir."
    },
    {
        question: "She felt _______ when she realized she had forgotten her friend's birthday.",
        options: ["proud", "guilty", "pleased", "excited"],
        correctAnswer: "guilty",
        explanation: "Arkadaşının doğum gününü unuttuğunu fark eden biri 'guilty' (suçlu) hissedebilir."
    },
    {
        question: "This coffee is too _______. I can't drink it without sugar.",
        options: ["sweet", "sour", "bitter", "salty"],
        correctAnswer: "bitter",
        explanation: "Şekersiz içilemeyen bir kahve muhtemelen 'bitter' (acı) bir tada sahiptir."
    },
    {
        question: "A person who is skilled at repairing things is _______.",
        options: ["clumsy", "practical", "creative", "artistic"],
        correctAnswer: "practical",
        explanation: "Eşyaları tamir etmede yetenekli olan bir kişi 'practical' (pratik, becerikli) biridir."
    },
    {
        question: "I was just about to leave the house when the doorbell _______.",
        options: ["was ringing", "rings", "rang", "is ringing"],
        correctAnswer: "rang",
        explanation: "Tam evden çıkmak üzereyken (bir eylemin eşiğindeyken), onu bölen kısa, tamamlanmış eylem (zil çalması) Simple Past Tense ile ifade edilir."
    },
    {
        question: "A _______ is a performance of music by one or more musicians.",
        options: ["play", "concert", "exhibition", "recital"],
        correctAnswer: "recital",
        explanation: "Bir veya daha fazla müzisyen tarafından verilen müzik performansına, özellikle solo veya küçük grup ise, 'recital' denir. 'Concert' daha genel ve büyük çaplıdır."
    },
    {
        question: "The city's _______ is famous for its narrow streets and old buildings.",
        options: ["business district", "historic quarter", "shopping area", "suburbs"],
        correctAnswer: "historic quarter",
        explanation: "Dar sokakları ve eski binalarıyla ünlü olan bölge, şehrin 'historic quarter' (tarihi bölgesi) dir."
    },
    {
        question: "He is a very _______ person; he always thinks carefully before making a decision.",
        options: ["impulsive", "cautious", "careless", "spontaneous"],
        correctAnswer: "cautious",
        explanation: "Karar vermeden önce dikkatlice düşünen kişiye 'cautious' (tedbirli, dikkatli) denir."
    },
    {
        question: "You _______ touch the exhibits in the museum. It is forbidden.",
        options: ["mustn't", "don't have to", "should", "can"],
        correctAnswer: "mustn't",
        explanation: "Yasaklanmış bir eylemi belirtmek için 'mustn't' (yapmamalısın) kullanılır."
    },
    {
        question: "A _______ is a journey in a ship for pleasure.",
        options: ["flight", "trip", "voyage", "cruise"],
        correctAnswer: "cruise",
        explanation: "Zevk için bir gemiyle yapılan seyahate 'cruise' (gemi gezisi) denir."
    },
    {
        question: "The book was so _______ that I couldn't put it down.",
        options: ["dull", "gripping", "predictable", "tedious"],
        correctAnswer: "gripping",
        explanation: "Elinizden bırakamadığınız bir kitap, 'gripping' (sürükleyici, ilgi çekici) bir kitaptır."
    },
    {
        question: "A person who writes for a newspaper or magazine is a _______.",
        options: ["novelist", "poet", "journalist", "playwright"],
        correctAnswer: "journalist",
        explanation: "Gazete veya dergi için yazan kişiye 'journalist' (gazeteci) denir."
    },
    {
        question: "The opposite of 'brave' is _______.",
        options: ["courageous", "daring", "cowardly", "fearless"],
        correctAnswer: "cowardly",
        explanation: "'Brave' (cesur) kelimesinin zıttı 'cowardly' (korkak) kelimesidir."
    },
    {
        question: "It is important to have a good _______ between work and personal life.",
        options: ["balance", "routine", "schedule", "difference"],
        correctAnswer: "balance",
        explanation: "İş ve özel hayat arasında iyi bir 'balance' (denge) kurmak önemlidir."
    },
    {
        question: "The government should take _______ to protect the environment.",
        options: ["photos", "notes", "measures", "risks"],
        correctAnswer: "measures",
        explanation: "Hükümetin çevreyi korumak için 'take measures' (önlem almak) gerekir."
    },
    {
        question: "A _______ is a doctor who performs operations.",
        options: ["physician", "surgeon", "specialist", "consultant"],
        correctAnswer: "surgeon",
        explanation: "Ameliyat yapan doktora 'surgeon' (cerrah) denir."
    },
    {
        question: "I was _______ when I saw the final score. I couldn't believe we won.",
        options: ["disappointed", "astonished", "calm", "indifferent"],
        correctAnswer: "astonished",
        explanation: "Kazandığınıza inanamadığınızda 'astonished' (çok şaşırmış, hayrete düşmüş) hissedersiniz."
    },
    {
        question: "The main _______ of this recipe are flour, eggs, and sugar.",
        options: ["components", "ingredients", "elements", "parts"],
        correctAnswer: "ingredients",
        explanation: "Bir yemek tarifinin ana 'ingredients' (malzemeler) un, yumurta ve şekerdir."
    },
    {
        question: "We need to find a _______ to this problem as soon as possible.",
        options: ["cause", "reason", "solution", "question"],
        correctAnswer: "solution",
        explanation: "Bir probleme en kısa sürede bir 'solution' (çözüm) bulmamız gerekir."
    },
    {
        question: "A _______ is a large area of land covered with trees.",
        options: ["desert", "forest", "meadow", "plain"],
        correctAnswer: "forest",
        explanation: "Ağaçlarla kaplı geniş bir araziye 'forest' (orman) denir."
    },
    {
        question: "His job involves a lot of travelling, which can be quite _______.",
        options: ["relaxing", "tiring", "exciting", "boring"],
        correctAnswer: "tiring",
        explanation: "Çok fazla seyahat içeren bir iş oldukça 'tiring' (yorucu) olabilir."
    },
{
                question: "What do you need to plan a vacation?",
                options: ["Desk", "Fork", "A map", "Book"],
                correctAnswer: "A map",
                explanation: "Bir tatil planlamak için 'a map' (bir harita) faydalı olabilir."
            },
            {
                question: "What is a veterinarian’s job?",
                options: ["Cooks food", "Teaches students", "Treats animals", "Drives cars"],
                correctAnswer: "Treats animals",
                explanation: "Bir veterinerin ('veterinarian') işi hayvanları tedavi etmektir ('treats animals')."
            },
            {
                question: "What did a famous person achieve?",
                options: ["Ate food", "Slept", "Won a prize", "Ran"],
                correctAnswer: "Won a prize",
                explanation: "Ünlü bir kişi 'won a prize' (bir ödül kazanmış) olabilir."
            },
            {
                question: "What should you do to help the environment?",
                options: ["Eat candy", "Use less plastic", "Watch TV", "Sleep"],
                correctAnswer: "Use less plastic",
                explanation: "Çevreye yardım etmek için 'use less plastic' (daha az plastik kullanmak) gerekir."
            },
            {
                question: "What is the purpose of an election?",
                options: ["To play games", "To choose leaders", "To eat food", "To sleep"],
                correctAnswer: "To choose leaders",
                explanation: "Bir seçimin amacı ('purpose') liderleri seçmektir."
            },
            {
                question: "Which drink is good for breakfast?",
                options: ["Soda", "Coffee", "Milk", "Water"],
                correctAnswer: "Milk",
                explanation: "'Milk' (süt) kahvaltı için iyi bir içecektir."
            },
            {
                question: "What is the opposite of ‘near’?",
                options: ["Close", "Next to", "Far", "Behind"],
                correctAnswer: "Far",
                explanation: "'Near' (yakın) kelimesinin zıttı 'far' (uzak) kelimesidir."
            },
            {
                question: "What do you feel when you lose a game?",
                options: ["Happy", "Excited", "Sad", "Tired"],
                correctAnswer: "Sad",
                explanation: "Bir oyunu kaybettiğinizde 'sad' (üzgün) hissedebilirsiniz."
            },
            {
                question: "What do you NOT buy at a fair?",
                options: ["Balloons", "Candy", "Toys", "Car"],
                correctAnswer: "Car",
                explanation: "Panayırlarda genellikle araba ('car') satılmaz."
            },
            {
                question: "What is important for a vacation?",
                options: ["Sleeping", "Eating", "Planning", "Running"],
                correctAnswer: "Planning",
                explanation: "Bir tatil için 'planning' (planlama) yapmak önemlidir."
            },
            {
                question: "What does an engineer do?",
                options: ["Cooks food", "Teaches students", "Designs buildings", "Sings songs"],
                correctAnswer: "Designs buildings",
                explanation: "Bir mühendis ('engineer') binalar tasarlar ('designs buildings')."
            },
            {
                question: "What is included in a biography?",
                options: ["A car’s history", "A book’s story", "A person’s achievements", "A game’s rules"],
                correctAnswer: "A person’s achievements",
                explanation: "Bir biyografi, bir kişinin başarılarını ('achievements') içerir."
            },
            {
                question: "What can you do to reduce waste?",
                options: ["Eat candy", "Watch TV", "Reuse bags", "Sleep"],
                correctAnswer: "Reuse bags",
                explanation: "Atığı azaltmak için poşetleri tekrar kullanabilirsiniz ('reuse bags')."
            },
            {
                question: "What does a voter do in a democracy?",
                options: ["Cooks food", "Plays games", "Chooses a leader", "Sings songs"],
                correctAnswer: "Chooses a leader",
                explanation: "Bir seçmen ('voter') demokraside bir lider seçer."
            },
            {
                question: "Which food is good for energy?",
                options: ["Soda", "Candy", "Chips", "Bread"],
                correctAnswer: "Bread",
                explanation: "'Bread' (ekmek) gibi karbonhidratlar enerji için iyidir."
            },
            {
                question: "What is a landmark in a city?",
                options: ["Small shop", "Old car", "Famous place", "New book"],
                correctAnswer: "Famous place",
                explanation: "Bir şehirdeki 'landmark', ünlü bir yerdir."
            },
            {
                question: "What do you wear in foggy weather?",
                options: ["Swimsuit", "T-shirt", "Shorts", "Jacket"],
                correctAnswer: "Jacket",
                explanation: "Sisli ('foggy') hava serin olabileceğinden 'jacket' (ceket) giyilebilir."
            },
            {
                question: "What is a popular fair activity?",
                options: ["Working", "Studying", "Face painting", "Sleeping"],
                correctAnswer: "Face painting",
                explanation: "'Face painting' (yüz boyama) popüler bir panayır aktivitesidir."
            },
            {
                question: "What do you do before a vacation?",
                options: ["Eat food", "Sleep", "Pack a suitcase", "Run"],
                correctAnswer: "Pack a suitcase",
                explanation: "Tatile çıkmadan önce 'pack a suitcase' (bavul hazırlamak) gerekir."
            },
            {
                question: "What does a scientist do?",
                options: ["Cooks food", "Teaches students", "Conducts experiments", "Sings songs"],
                correctAnswer: "Conducts experiments",
                explanation: "Bir bilim insanı ('scientist') deneyler yapar ('conducts experiments')."
            },
            {
                question: "What do you learn from a biography?",
                options: ["A car’s history", "A book’s plot", "A person’s life story", "A game’s rules"],
                correctAnswer: "A person’s life story",
                explanation: "Bir biyografiden bir kişinin hayat hikayesini öğrenirsiniz."
            },
            {
                question: "What is bad for the environment?",
                options: ["Recycling", "Saving water", "Pollution", "Planting trees"],
                correctAnswer: "Pollution",
                explanation: "'Pollution' (kirlilik) çevre için kötüdür."
            },
            {
                question: "What is a ‘ballot’ in an election?",
                options: ["Food recipe", "Voting paper", "Game rule", "Book page"],
                correctAnswer: "Voting paper",
                explanation: "Seçimdeki bir 'ballot' oy pusulasıdır ('voting paper')."
            },
            {
                question: "Which food is NOT for breakfast?",
                options: ["Yogurt", "Eggs", "Pizza", "Fruit"],
                correctAnswer: "Pizza",
                explanation: "'Pizza' genellikle bir kahvaltı yiyeceği değildir."
            },
            {
                question: "What do you say to ask for directions?",
                options: ["What is your name?", "How are you?", "Where is the park?", "What time is it?"],
                correctAnswer: "Where is the park?",
                explanation: "Yol tarifi sormak için 'Where is the...?' (...'nerede?) kalıbı kullanılır."
            },
            {
                question: "What do you feel in windy weather?",
                options: ["Happy", "Sad", "Cold", "Hot"],
                correctAnswer: "Cold",
                explanation: "Rüzgarlı ('windy') havada üşümüş ('cold') hissedebilirsiniz."
            },
            {
                question: "What do you NOT do at a fair?",
                options: ["Ride a Ferris wheel", "Eat cotton candy", "Do homework", "Win a prize"],
                correctAnswer: "Do homework",
                explanation: "Panayırlar ödev yapmak ('do homework') için bir yer değildir."
            },
            {
                question: "What do you need for a long trip?",
                options: ["Desk", "Fork", "Water bottle", "Book"],
                correctAnswer: "Water bottle",
                explanation: "Uzun bir gezi için 'water bottle' (su şişesi) önemlidir."
            },
            {
                question: "What does a journalist do?",
                options: ["Cooks food", "Teaches students", "Writes news", "Sings songs"],
                correctAnswer: "Writes news",
                explanation: "Bir gazeteci ('journalist') haber yazar ('writes news')."
            },
            {
                question: "What did a historical figure do?",
                options: ["Ate food", "Slept", "Changed history", "Ran"],
                correctAnswer: "Changed history",
                explanation: "Tarihi bir figür, tarihi değiştirmiş ('changed history') olabilir."
            },
            {
                question: "What can you do to save energy?",
                options: ["Eat candy", "Watch TV", "Use solar power", "Sleep"],
                correctAnswer: "Use solar power",
                explanation: "Enerji tasarrufu için 'use solar power' (güneş enerjisi kullanmak) iyi bir yoldur."
            },
            {
                question: "What is a ‘campaign’ in a democracy?",
                options: ["Cooking food", "Playing games", "Promoting a candidate", "Singing songs"],
                correctAnswer: "Promoting a candidate",
                explanation: "Demokrasideki bir 'campaign' (kampanya), bir adayı tanıtmaktır."
            },
            {
                question: "Which drink is healthy for breakfast?",
                options: ["Soda", "Coffee", "Tea", "Juice"],
                correctAnswer: "Juice",
                explanation: "'Juice' (meyve suyu) sağlıklı bir kahvaltı içeceği olabilir."
            },
            {
                question: "What is a place to relax in a city?",
                options: ["School", "Hospital", "Market", "Park"],
                correctAnswer: "Park",
                explanation: "Bir şehirde rahatlamak için bir 'park'a gidebilirsiniz."
            },
            {
                question: "What do you say to describe a cloudy day?",
                options: ["It’s sunny", "It’s rainy", "It’s cloudy", "It’s snowy"],
                correctAnswer: "It’s cloudy",
                explanation: "Bulutlu bir günü 'It’s cloudy' (Hava bulutlu) diye tarif edersiniz."
            },
            {
                question: "What is a 'rule'?",
                options: ["Something you eat", "Something you wear", "Something you must follow", "Something you read"],
                correctAnswer: "Something you must follow",
                explanation: "'Rule' (kural), uyulması gereken bir şeydir."
            },
            {
                question: "What do you do to stay fit?",
                options: ["Watch TV", "Eat candy", "Sleep", "Exercise"],
                correctAnswer: "Exercise",
                explanation: "Formda kalmak ('stay fit') için egzersiz yaparsınız."
            },
            {
                question: "What is a 'neighbor'?",
                options: ["Person at school", "Person at work", "Person in family", "Person nearby"],
                correctAnswer: "Person nearby",
                explanation: "'Neighbor' (komşu), yakınınızda yaşayan kişidir."
            },
            {
                question: "What do you say to invite someone?",
                options: ["I’m busy", "Go away", "See you later", "Come to my party"],
                correctAnswer: "Come to my party",
                explanation: "Birini davet etmek için 'Come to my party' (Partime gel) diyebilirsiniz."
            },
            {
                question: "What is a 'museum'?",
                options: ["Place to sleep", "Place to eat", "Place to play", "Place to see history"],
                correctAnswer: "Place to see history",
                explanation: "'Museum' (müze), tarihi görmek için bir yerdir."
            },
            {
                question: "What do you use for a hobby like painting?",
                options: ["Spoon", "Shoe", "Ball", "Brush"],
                correctAnswer: "Brush",
                explanation: "Resim yapma hobisi için 'brush' (fırça) kullanılır."
            },
            {
                question: "What is a 'schedule'?",
                options: ["Type of food", "Kind of game", "Piece of clothing", "Plan for the day"],
                correctAnswer: "Plan for the day",
                explanation: "'Schedule' (program), gün için yapılan bir plandır."
            },
            {
                question: "What do you say to ask for help?",
                options: ["Go away!", "I’m fine!", "No way!", "Can you help me?"],
                correctAnswer: "Can you help me?",
                explanation: "Yardım istemek için kibarca 'Can you help me?' (Bana yardım edebilir misin?) denir."
            },
            {
                question: "What is a 'tourist'?",
                options: ["Person who cooks", "Person who teaches", "Person who sings", "Person who travels"],
                correctAnswer: "Person who travels",
                explanation: "'Tourist' (turist), seyahat eden kişidir."
            },
            {
                question: "What do you need for a city tour?",
                options: ["Desk", "Fork", "Book", "Map"],
                correctAnswer: "Map",
                explanation: "Bir şehir turu için 'map' (harita) gereklidir."
            },
            {
                question: "What do you do to protect animals?",
                options: ["Throw trash", "Ignore them", "Feed them", "Run away"],
                correctAnswer: "Feed them",
                explanation: "Hayvanları korumak için onları besleyebilirsiniz ('feed them')."
            },
            {
                question: "What do you say to describe a good friend?",
                options: ["He is mean", "She is lazy", "They are kind", "He is shy"],
                correctAnswer: "They are kind",
                explanation: "İyi bir arkadaşı 'They are kind' (Onlar kibar) diye tarif edebilirsiniz."
            },
            {
                question: "What is a 'scientist'?",
                options: ["Person who sells food", "Person who builds houses", "Person who does experiments", "Person who writes books"],
                correctAnswer: "Person who does experiments",
                explanation: "Bir bilim insanı ('scientist') deneyler yapar."
            },
            {
                question: "What do you do to stay safe?",
                options: ["Run in traffic", "Eat candy", "Sleep", "Follow rules"],
                correctAnswer: "Follow rules",
                explanation: "Güvende kalmak için kurallara uymanız ('follow rules') gerekir."
            },
            {
                question: "What is a 'concert'?",
                options: ["Place to sleep", "Place to eat", "Event with music", "Place to work"],
                correctAnswer: "Event with music",
                explanation: "'Concert' (konser), müzikli bir etkinliktir."
            },
            {
                question: "What do you say to offer a suggestion?",
                options: ["Go away!", "I’m fine!", "No way!", "Why don’t we try?"],
                correctAnswer: "Why don’t we try?",
                explanation: "Bir öneride bulunmak için 'Why don’t we try?' (Neden denemiyoruz?) diyebilirsiniz."
            },
            {
                question: "What do you do at a fair?",
                options: ["Study", "Work", "Sleep", "Win a prize"],
                correctAnswer: "Win a prize",
                explanation: "Panayırda 'win a prize' (ödül kazanmak) mümkündür."
            },
            {
                question: "What is a 'chef'?",
                options: ["Person who sells food", "Person who builds houses", "Person who cooks", "Person who writes books"],
                correctAnswer: "Person who cooks",
                explanation: "Bir 'chef' (şef) profesyonel olarak yemek pişiren kişidir."
            },
            {
                question: "What do you do to help the environment?",
                options: ["Throw trash", "Eat candy", "Sleep", "Recycle"],
                correctAnswer: "Recycle",
                explanation: "Çevreye yardım etmek için 'recycle' (geri dönüşüm) yapmalısınız."
            },
            {
                question: "What is a 'schedule' for a trip?",
                options: ["Type of food", "Kind of game", "Piece of clothing", "Plan for travel"],
                correctAnswer: "Plan for travel",
                explanation: "Bir gezi programı, seyahat için bir plandır."
            },
            {
                question: "What do you say to ask for directions?",
                options: ["What’s your name?", "I’m tired", "Nice to meet you", "Where is the museum?"],
                correctAnswer: "Where is the museum?",
                explanation: "Yol tarifi sormak için 'Where is the...?' (...'nerede?) kalıbını kullanırsınız."
            },
            {
                question: "What is a 'teacher'?",
                options: ["Person who sells food", "Person who builds houses", "Person who writes books", "Person who teaches"],
                correctAnswer: "Person who teaches",
                explanation: "'Teacher' (öğretmen) öğreten kişidir."
            },
            {
                question: "What do you do to stay healthy?",
                options: ["Watch TV", "Eat candy", "Sleep", "Eat vegetables"],
                correctAnswer: "Eat vegetables",
                explanation: "Sağlıklı kalmak için sebze yersiniz ('eat vegetables')."
            },
            {
                question: "What is a 'zoo'?",
                options: ["Place to sleep", "Place to eat", "Place to work", "Place to see animals"],
                correctAnswer: "Place to see animals",
                explanation: "'Zoo' (hayvanat bahçesi), hayvanları görmek için bir yerdir."
            },
            {
                question: "What do you say to thank someone for help?",
                options: ["Go away!", "I’m fine!", "No way!", "Thank you so much!"],
                correctAnswer: "Thank you so much!",
                explanation: "Yardım için teşekkür ederken 'Thank you so much!' (Çok teşekkür ederim!) dersiniz."
            },
            {
                question: "What do you do at a picnic?",
                options: ["Study", "Work", "Sleep", "Eat outdoors"],
                correctAnswer: "Eat outdoors",
                explanation: "Piknikte 'eat outdoors' (açık havada yemek yemek) aktivitesi yapılır."
            },
            {
                question: "What is a 'pilot'?",
                options: ["Person who sells food", "Person who builds houses", "Person who writes books", "Person who flies planes"],
                correctAnswer: "Person who flies planes",
                explanation: "Bir 'pilot' uçakları uçurur."
            },
            {
                question: "What do you do to save energy?",
                options: ["Watch TV", "Eat candy", "Sleep", "Turn off lights"],
                correctAnswer: "Turn off lights",
                explanation: "Enerji tasarrufu için ışıkları kapatırsınız ('turn off lights')."
            },
            {
                question: "What is a 'plan'?",
                options: ["Something you eat", "Something you wear", "Something you read", "Something you organize"],
                correctAnswer: "Something you organize",
                explanation: "'Plan', organize ettiğiniz bir şeydir."
            },
            {
                question: "What do you say to describe a fun activity?",
                options: ["It’s boring", "It’s slow", "It’s bad", "It’s exciting"],
                correctAnswer: "It’s exciting",
                explanation: "Eğlenceli bir aktiviteyi 'It’s exciting' (Heyecan verici) diye tarif edebilirsiniz."
            },
            {
                question: "What do you need for a festival?",
                options: ["Toothpaste", "Schoolbag", "Laptop", "Costume"],
                correctAnswer: "Costume",
                explanation: "Bir festival için 'costume' (kostüm) gerekebilir."
            },
            {
                question: "What is a 'musician'?",
                options: ["Person who sells food", "Person who builds houses", "Person who writes books", "Person who plays music"],
                correctAnswer: "Person who plays music",
                explanation: "Bir müzisyen ('musician') müzik çalar."
            },
            {
                question: "What do you do to help a friend?",
                options: ["Ignore them", "Run away", "Sleep", "Listen to them"],
                correctAnswer: "Listen to them",
                explanation: "Bir arkadaşa yardım etmek için onu dinlersiniz ('listen to them')."
            },
            {
                question: "What is a 'library'?",
                options: ["Place to sleep", "Place to eat", "Place to work", "Place to read books"],
                correctAnswer: "Place to read books",
                explanation: "'Library' (kütüphane), kitap okumak için bir yerdir."
            },
            {
                question: "What do you say to ask for permission?",
                options: ["Go away!", "I’m fine!", "No way!", "Can I join?"],
                correctAnswer: "Can I join?",
                explanation: "İzin istemek için 'Can I join?' (Katılabilir miyim?) diye sorabilirsiniz."
            },
            {
                question: "What do you do at a beach?",
                options: ["Study", "Work", "Sleep", "Build a sandcastle"],
                correctAnswer: "Build a sandcastle",
                explanation: "Plajda 'build a sandcastle' (kumdan kale yapmak) eğlenceli bir aktivitedir."
            },
            {
                question: "What is a 'firefighter'?",
                options: ["Person who sells food", "Person who builds houses", "Person who puts out fires", "Person who writes books"],
                correctAnswer: "Person who puts out fires",
                explanation: "Bir itfaiyeci ('firefighter') yangınları söndürür."
            },
            {
                question: "What do you do to stay clean?",
                options: ["Watch TV", "Eat candy", "Sleep", "Wash your hands"],
                correctAnswer: "Wash your hands",
                explanation: "Temiz kalmak için ellerinizi yıkarsınız ('wash your hands')."
            },
            {
                question: "What is a 'park'?",
                options: ["Place to sleep", "Place to eat", "Place to work", "Place to relax"],
                correctAnswer: "Place to relax",
                explanation: "'Park', rahatlamak için bir yerdir."
            },
            {
                question: "What do you say to congratulate a winner?",
                options: ["Try again!", "I’m fine!", "No way!", "Great job!"],
                correctAnswer: "Great job!",
                explanation: "Bir kazananı tebrik etmek için 'Great job!' (Harika iş!) dersiniz."
            },
            {
                question: "What do you do at a concert?",
                options: ["Study", "Work", "Sleep", "Sing along"],
                correctAnswer: "Sing along",
                explanation: "Konserde şarkılara eşlik edersiniz ('sing along')."
            },
            {
                question: "What is a 'nurse'?",
                options: ["Person who sells food", "Person who builds houses", "Person who writes books", "Person who helps doctors"],
                correctAnswer: "Person who helps doctors",
                explanation: "Bir hemşire ('nurse') doktorlara yardım eder."
            },
            {
                question: "What do you do to save the planet?",
                options: ["Throw trash", "Eat candy", "Sleep", "Plant trees"],
                correctAnswer: "Plant trees",
                explanation: "Gezegeni kurtarmak için ağaç dikersiniz ('plant trees')."
            },
            {
                question: "What is a 'holiday'?",
                options: ["Time to work", "Time to study", "Time to sleep", "Time to rest"],
                correctAnswer: "Time to rest",
                explanation: "'Holiday' (tatil), dinlenme zamanıdır."
            },
            {
                question: "What do you say to suggest a movie?",
                options: ["Go away!", "I’m fine!", "No way!", "Let’s watch it!"],
                correctAnswer: "Let’s watch it!",
                explanation: "Bir film önermek için 'Let’s watch it!' (Hadi izleyelim!) dersiniz."
            },
            {
                question: "What do you do at a zoo?",
                options: ["Study", "Work", "Sleep", "Watch animals"],
                correctAnswer: "Watch animals",
                explanation: "Hayvanat bahçesinde hayvanları izlersiniz ('watch animals')."
            },
            {
                question: "What is a 'painter'?",
                options: ["Person who sells food", "Person who builds houses", "Person who writes books", "Person who paints"],
                correctAnswer: "Person who paints",
                explanation: "Bir ressam ('painter') resim yapar."
            },
            {
                question: "What do you say to describe a kind person?",
                options: ["They are mean", "They are lazy", "They are shy", "They are friendly"],
                correctAnswer: "They are friendly",
                explanation: "Kibar bir kişiyi 'They are friendly' (Onlar arkadaş canlısı) diye tarif edebilirsiniz."
            }

        ]    },


    7: 
    
    {
        beginner: [
            {
                question: "What do you say to welcome someone?",
                options: ["Goodbye", "Welcome!", "Sorry", "Thank you"],
                correctAnswer: "Welcome!",
                explanation: "Birini karşılarken 'Welcome!' (Hoş geldin!) denir."
            },
            {
                question: "What is a place to see animals?",
                options: ["Library", "Zoo", "Market", "School"],
                correctAnswer: "Zoo",
                explanation: "'Zoo' (hayvanat bahçesi), hayvanları görebileceğiniz bir yerdir."
            },

    {
        question: "A person who is friendly and enjoys being with other people is _______.",
        options: ["shy", "outgoing", "clumsy", "stubborn"],
        correctAnswer: "outgoing",
        explanation: "'Outgoing' (dışa dönük, sosyal), diğer insanlarla birlikte olmaktan hoşlanan kişiler için kullanılır."
    },
    {
        question: "What does a punctual person always do?",
        options: ["Arrives late", "Forgets things", "Is on time", "Tells jokes"],
        correctAnswer: "Is on time",
        explanation: "'Punctual' (dakik) bir kişi her zaman 'is on time' (vaktinde gelir)."
    },
    {
        question: "Albert Einstein _______ a famous scientist.",
        options: ["is", "are", "was", "were"],
        correctAnswer: "was",
        explanation: "Geçmişte yaşamış bir kişiden bahsederken Simple Past Tense kullanılır. 'Albert Einstein' (he) tekil olduğu için 'was' kullanılır."
    },
    {
        question: "My brother has blue eyes and _______ hair.",
        options: ["short, straight", "well-built", "generous", "tall"],
        correctAnswer: "short, straight",
        explanation: "Cümlede göz renginden bahsedildiği için, devamında saçı tanımlayan 'short, straight' (kısa, düz) ifadesi gelmelidir."
    },
    {
        question: "A person who gives money and helps others is _______.",
        options: ["selfish", "stingy", "generous", "forgetful"],
        correctAnswer: "generous",
        explanation: "Başkalarına para veren ve yardım eden kişiye 'generous' (cömert) denir."
    },
    {
        question: "She _______ born in 1985.",
        options: ["was", "is", "were", "are"],
        correctAnswer: "was",
        explanation: "Doğum tarihinden bahsederken, geçmiş zaman olduğu için 'was/were born' kalıbı kullanılır. 'She' ile 'was' kullanılır."
    },
    {
        question: "What is the opposite of 'slim'?",
        options: ["Thin", "Well-built", "Plump", "Short"],
        correctAnswer: "Plump",
        explanation: "'Slim' (ince, zayıf) kelimesinin zıt anlamlısı 'plump' (balık etli, tombul) olabilir."
    },
    {
        question: "He is very _______. He always makes me laugh.",
        options: ["serious", "funny", "shy", "selfish"],
        correctAnswer: "funny",
        explanation: "İnsanları güldüren birisi 'funny' (komik, eğlenceli) olarak tanımlanır."
    },
    {
        question: "Mozart _______ his first music at the age of five.",
        options: ["compose", "composed", "composes", "composing"],
        correctAnswer: "composed",
        explanation: "Geçmişte tamamlanmış bir eylemi belirtmek için fiilin ikinci hali (V2) kullanılır. 'Composed' (besteledi) doğru fiildir."
    },
    {
        question: "A person who doesn't like sharing is _______.",
        options: ["thoughtful", "easy-going", "honest", "stingy"],
        correctAnswer: "stingy",
        explanation: "Paylaşmayı sevmeyen kişiye 'stingy' (cimri) denir."
    },

    {
        question: "Which sport do you play with a racket and a ball?",
        options: ["Football", "Basketball", "Tennis", "Swimming"],
        correctAnswer: "Tennis",
        explanation: "'Tennis' (tenis), bir raket ve topla oynanan bir spordur."
    },
    {
        question: "Lions and tigers are _______ animals.",
        options: ["domestic", "farm", "wild", "pet"],
        correctAnswer: "wild",
        explanation: "Aslanlar ve kaplanlar, doğada yaşayan 'wild' (vahşi) hayvanlardır."
    },
    {
        question: "You need a _______ to swim.",
        options: ["ball", "helmet", "bat", "swimsuit"],
        correctAnswer: "swimsuit",
        explanation: "Yüzmek için 'swimsuit' (mayo) giyilir."
    },
    {
        question: "A crocodile is a _______.",
        options: ["mammal", "reptile", "bird", "fish"],
        correctAnswer: "reptile",
        explanation: "Timsah, bir 'reptile' (sürüngen) türüdür."
    },
    {
        question: "In football, two _______ play against each other.",
        options: ["players", "spectators", "teams", "referees"],
        correctAnswer: "teams",
        explanation: "Futbolda iki 'team' (takım) birbirine karşı oynar."
    },
    {
        question: "Which animal lives in the jungle?",
        options: ["Penguin", "Polar bear", "Monkey", "Camel"],
        correctAnswer: "Monkey",
        explanation: "'Monkey' (maymun), genellikle 'jungle' (vahşi orman) ortamında yaşar."
    },
    {
        question: "You do _______ in a dojo.",
        options: ["skiing", "ice-skating", "judo", "sailing"],
        correctAnswer: "judo",
        explanation: "'Judo' gibi dövüş sanatları 'dojo' adı verilen özel salonlarda yapılır."
    },
    {
        question: "A camel lives in the _______.",
        options: ["forest", "ocean", "desert", "mountain"],
        correctAnswer: "desert",
        explanation: "Deve ('camel'), 'desert' (çöl) ortamında yaşayan bir hayvandır."
    },
    {
        question: "To win the match, you need to score a _______.",
        options: ["point", "prize", "goal", "team"],
        correctAnswer: "goal",
        explanation: "Futbol gibi oyunlarda sayı kazanmak için 'score a goal' (gol atmak) gerekir."
    },
    {
        question: "An elephant is a large _______. It has big ears and a long trunk.",
        options: ["reptile", "mammal", "insect", "bird"],
        correctAnswer: "mammal",
        explanation: "Fil, bir 'mammal' (memeli) hayvan türüdür."
    },

    {
        question: "A program that gives information about the latest events is the _______.",
        options: ["cartoon", "sitcom", "news", "quiz show"],
        correctAnswer: "news",
        explanation: "Son olaylar hakkında bilgi veren program türüne 'news' (haberler) denir."
    },
    {
        question: "Which one is a type of celebration?",
        options: ["A meeting", "An exam", "A birthday party", "A lesson"],
        correctAnswer: "A birthday party",
        explanation: "'A birthday party' (doğum günü partisi), bir 'celebration' (kutlama) türüdür."
    },
    {
        question: "I prefer watching documentaries _______ quiz shows.",
        options: ["than", "or", "to", "and"],
        correctAnswer: "to",
        explanation: "'Prefer' fiili ile bir şeyi diğerine tercih ettiğimizi belirtirken 'to' edatını kullanırız."
    },
    {
        question: "You need _______ to decorate the room for a party.",
        options: ["books", "presents", "balloons", "food"],
        correctAnswer: "balloons",
        explanation: "Parti için bir odayı süslerken genellikle 'balloons' (balonlar) kullanılır."
    },
    {
        question: "A funny TV series about a family is a _______.",
        options: ["documentary", "sitcom", "talk show", "discussion"],
        correctAnswer: "sitcom",
        explanation: "Genellikle bir aile hakkındaki komik TV dizilerine 'sitcom' (durum komedisi) denir."
    },
    {
        question: "What do you give to your friend on their birthday?",
        options: ["Advice", "A list", "A present", "A bill"],
        correctAnswer: "A present",
        explanation: "Doğum günlerinde arkadaşlarımıza 'present' veya 'gift' (hediye) veririz."
    },
    {
        question: "What is the opposite of 'generous'?",
        options: ["Kind", "Stingy", "Honest", "Friendly"],
        correctAnswer: "Stingy",
        explanation: "'Generous' (cömert) kelimesinin zıt anlamlısı 'stingy' (cimri) kelimesidir."
    },
    {
        question: "Marie Curie _______ a famous physicist and chemist.",
        options: ["is", "are", "was", "were"],
        correctAnswer: "was",
        explanation: "Geçmişte yaşamış bir kişiden bahsederken Simple Past Tense kullanılır. 'Marie Curie' (she) tekil olduğu için 'was' kullanılır."
    },
    {
        question: "Which animal is a reptile?",
        options: ["Eagle", "Dolphin", "Snake", "Lion"],
        correctAnswer: "Snake",
        explanation: "'Snake' (yılan) bir 'reptile' (sürüngen) türüdür."
    },
    {
        question: "You need a racket to play _______.",
        options: ["football", "basketball", "tennis", "volleyball"],
        correctAnswer: "tennis",
        explanation: "Tenis oynamak için bir rakete ihtiyacınız vardır."
    },
    {
        question: "What do you call a TV program that makes you laugh?",
        options: ["News", "Documentary", "Sitcom", "Talk show"],
        correctAnswer: "Sitcom",
        explanation: "Sizi güldüren komik TV programlarına 'sitcom' (durum komedisi) denir."
    },
    {
        question: "We need to buy some _______ for the party, like juice and soda.",
        options: ["decorations", "presents", "beverages", "guests"],
        correctAnswer: "beverages",
        explanation: "Meyve suyu ve gazoz gibi içeceklere genel olarak 'beverages' (içecekler) denir."
    },
    {
        question: "A person who always arrives on time is _______.",
        options: ["punctual", "forgetful", "clumsy", "outgoing"],
        correctAnswer: "punctual",
        explanation: "Her zaman vaktinde gelen bir kişiye 'punctual' (dakik) denir."
    },
    {
        question: "Aziz Sancar _______ the Nobel Prize in Chemistry in 2015.",
        options: ["win", "wins", "won", "winning"],
        correctAnswer: "won",
        explanation: "Geçmişte belirli bir zamanda (2015) tamamlanmış bir eylem için fiilin ikinci hali (won) kullanılır."
    },
    {
        question: "A tiger is a _______ animal. It lives in the jungle.",
        options: ["domestic", "farm", "wild", "tame"],
        correctAnswer: "wild",
        explanation: "Kaplan, ormanda yaşayan 'wild' (vahşi) bir hayvandır."
    },
    {
        question: "You need a helmet and pads for _______.",
        options: ["swimming", "skateboarding", "running", "sailing"],
        correctAnswer: "skateboarding",
        explanation: "Kaykay ('skateboarding') yaparken güvenlik için kask ve koruyucu pedler gerekir."
    },
    {
        question: "I prefer watching series _______ movies.",
        options: ["than", "to", "from", "for"],
        correctAnswer: "to",
        explanation: "'Prefer' fiili ile bir şeyi diğerine tercih ettiğimizi belirtirken 'to' edatını kullanırız."
    },
    {
        question: "What do you send to people to invite them to your party?",
        options: ["A bill", "A list", "An invitation card", "A present"],
        correctAnswer: "An invitation card",
        explanation: "İnsanları partinize davet etmek için onlara 'invitation card' (davetiye) gönderirsiniz."
    },
    {
        question: "A person who doesn't like sharing is _______.",
        options: ["generous", "selfish", "kind", "thoughtful"],
        correctAnswer: "selfish",
        explanation: "Paylaşmayı sevmeyen kişiye 'selfish' (bencil) denir."
    },
    {
        question: "What did you _______ last weekend?",
        options: ["do", "did", "does", "doing"],
        correctAnswer: "do",
        explanation: "Geçmiş zamanda 'did' yardımcı fiili ile soru sorarken, ana fiil yalın (V1) halde kullanılır."
    },
    {
        question: "A penguin is a bird but it can't _______.",
        options: ["swim", "walk", "fly", "eat"],
        correctAnswer: "fly",
        explanation: "Penguenler uçamayan ('can't fly') kuşlardır."
    },
    {
        question: "In which sport do you try to score goals?",
        options: ["Tennis", "Football", "Skiing", "Judo"],
        correctAnswer: "Football",
        explanation: "Futbolda ('football') amaç gol ('goal') atmaktır."
    },
    {
        question: "He likes watching _______ because he likes learning about real events.",
        options: ["cartoons", "sitcoms", "documentaries", "quiz shows"],
        correctAnswer: "documentaries",
        explanation: "Gerçek olaylar hakkında bilgi edinmeyi seven biri 'documentaries' (belgesel) izlemeyi sever."
    },
    {
        question: "You need to buy a _______ for your friend's birthday.",
        options: ["guest", "decoration", "present", "beverage"],
        correctAnswer: "present",
        explanation: "Arkadaşınızın doğum günü için bir 'present' (hediye) almanız gerekir."
    },
    {
        question: "He is tall and _______. He goes to the gym every day.",
        options: ["slim", "well-built", "plump", "short"],
        correctAnswer: "well-built",
        explanation: "Her gün spor salonuna giden biri genellikle 'well-built' (yapılı, kaslı) olur."
    },
    {
        question: "When _______ you born?",
        options: ["was", "were", "is", "are"],
        correctAnswer: "were",
        explanation: "'You' öznesiyle geçmiş zamanda soru sorarken 'were' kullanılır. 'When were you born?' (Ne zaman doğdun?)"
    },
    {
        question: "A shark lives in the _______.",
        options: ["desert", "jungle", "ocean", "forest"],
        correctAnswer: "ocean",
        explanation: "Köpek balığı ('shark') 'ocean' (okyanus) içinde yaşar."
    },
    {
        question: "Which sport is an individual sport?",
        options: ["Volleyball", "Basketball", "Swimming", "Football"],
        correctAnswer: "Swimming",
        explanation: "Yüzme ('swimming') genellikle bireysel olarak yapılan bir spordur."
    },
    {
        question: "I use the _______ to change the TV channels.",
        options: ["screen", "remote control", "sofa", "cable"],
        correctAnswer: "remote control",
        explanation: "TV kanallarını değiştirmek için 'remote control' (uzaktan kumanda) kullanılır."
    },
    {
        question: "For the party, we need some _______ like balloons and ribbons.",
        options: ["food", "drinks", "decorations", "music"],
        correctAnswer: "decorations",
        explanation: "Balonlar ve kurdeleler parti 'decorations' (süslemeler) için kullanılır."
    },
    {
        question: "My father is very _______. He always helps people.",
        options: ["stubborn", "helpful", "selfish", "clumsy"],
        correctAnswer: "helpful",
        explanation: "İnsanlara her zaman yardım eden biri 'helpful' (yardımsever) biridir."
    },
    {
        question: "They _______ to Antalya for their holiday last summer.",
        options: ["go", "goes", "went", "are going"],
        correctAnswer: "went",
        explanation: "'Last summer' (geçen yaz) ifadesi geçmiş zamanı belirttiği için 'go' fiilinin ikinci hali 'went' kullanılır."
    },
    {
        question: "A _______ is a large mammal that lives in the sea.",
        options: ["whale", "crocodile", "hippo", "elephant"],
        correctAnswer: "whale",
        explanation: "'Whale' (balina), denizde yaşayan büyük bir memelidir."
    },
    {
        question: "You can do _______ in the mountains in winter.",
        options: ["sailing", "swimming", "skiing", "hiking"],
        correctAnswer: "skiing",
        explanation: "Kışın dağlarda 'skiing' (kayak) yapabilirsiniz."
    },
    {
        question: "What is your favorite TV _______?",
        options: ["channel", "programme", "remote control", "screen"],
        correctAnswer: "programme",
        explanation: "En sevdiğiniz TV 'programme' (program) sorulmaktadır."
    },
    {
        question: "He is having a _______ party. Everyone must wear a costume.",
        options: ["birthday", "fancy dress", "slumber", "wedding"],
        correctAnswer: "fancy dress",
        explanation: "Herkesin kostüm giymesi gereken partilere 'fancy dress party' (kostüm partisi) denir."
    },
    {
        question: "A person who always tells the truth is _______.",
        options: ["honest", "dishonest", "generous", "stubborn"],
        correctAnswer: "honest",
        explanation: "Her zaman doğruyu söyleyen kişiye 'honest' (dürüst) denir."
    },
    {
        question: "He _______ his first book when he was 25.",
        options: ["write", "writes", "wrote", "is writing"],
        correctAnswer: "wrote",
        explanation: "Geçmişte tamamlanmış bir eylemi anlatırken fiilin ikinci hali (wrote) kullanılır."
    },
    {
        question: "A _______ is an animal that eats only plants.",
        options: ["carnivore", "herbivore", "omnivore", "reptile"],
        correctAnswer: "herbivore",
        explanation: "Sadece bitki yiyen hayvanlara 'herbivore' (otobur) denir."
    },
    {
        question: "In basketball, you _______ the ball.",
        options: ["kick", "throw", "hit", "catch"],
        correctAnswer: "throw",
        explanation: "Basketbolda topu potaya 'throw' (atmak) eylemi yapılır."
    },
    {
        question: "The news gives information about _______ events.",
        options: ["past", "funny", "current", "imaginary"],
        correctAnswer: "current",
        explanation: "Haberler ('news'), 'current' (güncel) olaylar hakkında bilgi verir."
    },
    {
        question: "Before the party, you should make a _______ list.",
        options: ["shopping", "guest", "music", "present"],
        correctAnswer: "guest",
        explanation: "Partiden önce, davet edilecek kişilerin olduğu bir 'guest list' (davetli listesi) yapmalısınız."
    },
    {
        question: "She is very _______. She often breaks things.",
        options: ["careful", "clumsy", "punctual", "outgoing"],
        correctAnswer: "clumsy",
        explanation: "Sık sık bir şeyleri kıran veya düşüren kişiye 'clumsy' (sakar) denir."
    },
    {
        question: "Where _______ you yesterday evening?",
        options: ["was", "were", "is", "are"],
        correctAnswer: "were",
        explanation: "'You' öznesiyle geçmiş zamanda soru sorarken 'were' kullanılır."
    },
    {
        question: "A camel is a mammal that is _______ to desert life.",
        options: ["adapted", "known", "seen", "found"],
        correctAnswer: "adapted",
        explanation: "Deve, çöl hayatına 'adapted' (adapte olmuş, uyum sağlamış) bir memelidir."
    },
    {
        question: "You go _______ to ride on waves in the sea.",
        options: ["skating", "surfing", "cycling", "climbing"],
        correctAnswer: "surfing",
        explanation: "Denizde dalgaların üzerinde kaymak için 'surfing' (sörf) yapılır."
    },
    {
        question: "I don't like _______ because they are always interrupted by commercials.",
        options: ["talk shows", "movies", "series", "discussions"],
        correctAnswer: "talk shows",
        explanation: "Reklamlarla ('commercials') kesintiye uğrayan programlar genellikle televizyon kanallarındaki canlı yayınlardır, 'talk shows' (sohbet programları) buna bir örnektir."
    },
    {
        question: "It is a _______ party. We will stay at her house all night.",
        options: ["slumber", "graduation", "welcome", "farewell"],
        correctAnswer: "slumber",
        explanation: "Bütün gece bir arkadaşın evinde kalınıp uyunan partilere 'slumber party' (pijama partisi) denir."
    },
    {
        question: "The opposite of 'shy' is _______.",
        options: ["quiet", "outgoing", "serious", "nervous"],
        correctAnswer: "outgoing",
        explanation: "'Shy' (utangaç) kelimesinin zıttı 'outgoing' (dışa dönük, sosyal) kelimesidir."
    },
    {
        question: "He _______ his leg while he was playing football.",
        options: ["break", "breaks", "broke", "is breaking"],
        correctAnswer: "broke",
        explanation: "Geçmişte bir eylem devam ederken olan ani ve tamamlanmış bir olay (ayağını kırmak) Simple Past Tense ile ifade edilir."
    },
    {
        question: "An animal's natural home is its _______.",
        options: ["country", "habitat", "house", "area"],
        correctAnswer: "habitat",
        explanation: "Bir hayvanın doğal yaşam alanına 'habitat' denir."
    },
    {
        question: "In volleyball, players hit the ball over a _______.",
        options: ["goal", "basket", "net", "line"],
        correctAnswer: "net",
        explanation: "Voleybolda oyuncular topa bir 'net' (file) üzerinden vurur."
    },
    {
        question: "What is on TV tonight? Let me check the _______.",
        options: ["remote control", "TV guide", "channel", "screen"],
        correctAnswer: "TV guide",
        explanation: "Televizyonda ne olduğunu öğrenmek için 'TV guide' (TV rehberi) kontrol edilir."
    },
    {
        question: "For a party, you need to prepare an invitation _______.",
        options: ["card", "book", "note", "letter"],
        correctAnswer: "card",
        explanation: "Partiler için genellikle 'invitation card' (davetiye kartı) hazırlanır."
    },
    {
        question: "You use the _______ to change the channels on TV.",
        options: ["sofa", "screen", "remote control", "commercial"],
        correctAnswer: "remote control",
        explanation: "Kanalları değiştirmek için 'remote control' (uzaktan kumanda) kullanılır."
    },
    {
        question: "At a wedding party, the bride and groom cut the _______.",
        options: ["music", "presents", "cake", "balloons"],
        correctAnswer: "cake",
        explanation: "Düğün partilerinde gelin ve damat 'cake' (pasta) keser."
    },
{
                question: "What is the opposite of 'new'?",
                options: ["Old", "Big", "Fast", "Tall"],
                correctAnswer: "Old",
                explanation: "'New' (yeni) kelimesinin zıttı 'old' (eski) kelimesidir."
            },
            {
                question: "What do you eat for lunch?",
                options: ["Pasta", "Notebook", "Pencil", "Shoe"],
                correctAnswer: "Pasta",
                explanation: "Öğle yemeğinde 'pasta' (makarna) yenebilir."
            },
            {
                question: "What is a type of weather?",
                options: ["Cloudy", "Car", "Book", "Desk"],
                correctAnswer: "Cloudy",
                explanation: "'Cloudy' (bulutlu), bir hava durumu türüdür."
            },
            {
                question: "What do you wear in cold weather?",
                options: ["Swimsuit", "T-shirt", "Coat", "Shorts"],
                correctAnswer: "Coat",
                explanation: "Soğuk havada sıcak tutması için 'coat' (palto/mont) giyilir."
            },
            {
                question: "What is a place to exercise?",
                options: ["Kitchen", "Gym", "Bedroom", "Bathroom"],
                correctAnswer: "Gym",
                explanation: "'Gym' (spor salonu), egzersiz yapılan bir yerdir."
            },
            {
                question: "What do you use to call someone?",
                options: ["Spoon", "Phone", "Ball", "Pen"],
                correctAnswer: "Phone",
                explanation: "Birini aramak için 'phone' (telefon) kullanılır."
            },
            {
                question: "What is a type of fruit?",
                options: ["Apple", "Car", "Book", "Shoe"],
                correctAnswer: "Apple",
                explanation: "'Apple' (elma) bir meyve türüdür."
            },
            {
                question: "What do you do in a classroom?",
                options: ["Cook", "Study", "Sleep", "Play"],
                correctAnswer: "Study",
                explanation: "Sınıfta ('classroom') ders çalışılır ('study')."
            },
            {
                question: "What is the opposite of 'high'?",
                options: ["Low", "Fast", "Big", "Tall"],
                correctAnswer: "Low",
                explanation: "'High' (yüksek) kelimesinin zıttı 'low' (alçak) kelimesidir."
            },
            {
                question: "What do you drink after sports?",
                options: ["Water", "Soda", "Ice cream", "Soup"],
                correctAnswer: "Water",
                explanation: "Spor yaptıktan sonra vücudun su ihtiyacını karşılamak için 'water' (su) içilir."
            },
            {
                question: "What is a place to read books?",
                options: ["Library", "Park", "Kitchen", "Zoo"],
                correctAnswer: "Library",
                explanation: "Kitap okumak için en uygun yer 'library' (kütüphane)dir."
            },
            {
                question: "What do you wear on your head?",
                options: ["Shoes", "Hat", "Gloves", "Jacket"],
                correctAnswer: "Hat",
                explanation: "Başımıza 'hat' (şapka) takarız."
            },
            {
                question: "What is a type of vegetable?",
                options: ["Carrot", "Book", "Pen", "Shoe"],
                correctAnswer: "Carrot",
                explanation: "'Carrot' (havuç) bir sebze türüdür."
            },
            {
                question: "What do you do at a playground?",
                options: ["Cook", "Play", "Study", "Sleep"],
                correctAnswer: "Play",
                explanation: "Oyun parkında ('playground') oyun oynanır ('play')."
            },
            {
                question: "What is the opposite of 'open'?",
                options: ["Close", "Big", "Fast", "Tall"],
                correctAnswer: "Close",
                explanation: "'Open' (açık) kelimesinin zıttı 'close' (kapalı) kelimesidir."
            },
            {
                question: "What do you eat for dinner?",
                options: ["Chicken", "Book", "Pen", "Shoe"],
                correctAnswer: "Chicken",
                explanation: "Akşam yemeğinde 'chicken' (tavuk) yenebilir."
            },
            {
                question: "What is a place to watch sports?",
                options: ["Stadium", "School", "Kitchen", "Library"],
                correctAnswer: "Stadium",
                explanation: "'Stadium' (stadyum), spor müsabakalarını izlemek için bir yerdir."
            },
            {
                question: "What do you use to draw?",
                options: ["Spoon", "Pencil", "Ball", "Shoe"],
                correctAnswer: "Pencil",
                explanation: "Çizim yapmak için 'pencil' (kalem) kullanılır."
            },
            {
                question: "What is a type of animal?",
                options: ["Lion", "Book", "Car", "Tree"],
                correctAnswer: "Lion",
                explanation: "'Lion' (aslan) bir hayvan türüdür."
            },
            {
                question: "What do you do at a birthday party?",
                options: ["Work", "Celebrate", "Study", "Sleep"],
                correctAnswer: "Celebrate",
                explanation: "Doğum günü partisinde kutlama yapılır ('celebrate')."
            },
            {
                question: "What is the opposite of 'big'?",
                options: ["Small", "Fast", "High", "Long"],
                correctAnswer: "Small",
                explanation: "'Big' (büyük) kelimesinin zıttı 'small' (küçük) kelimesidir."
            },
            {
                question: "What do you drink in the morning?",
                options: ["Juice", "Soda", "Ice cream", "Soup"],
                correctAnswer: "Juice",
                explanation: "Sabahları 'juice' (meyve suyu) içilebilir."
            },
            {
                question: "What is a place to swim?",
                options: ["Pool", "Library", "Market", "School"],
                correctAnswer: "Pool",
                explanation: "Yüzmek için 'pool' (havuz) kullanılır."
            },
            {
                question: "What do you wear in summer?",
                options: ["Coat", "T-shirt", "Gloves", "Jacket"],
                correctAnswer: "T-shirt",
                explanation: "Yazın 'T-shirt' (tişört) gibi hafif kıyafetler giyilir."
            },
            {
                question: "What is a type of sport?",
                options: ["Soccer", "Book", "Car", "Tree"],
                correctAnswer: "Soccer",
                explanation: "'Soccer' (futbol) bir spor türüdür."
            },
            {
                question: "What do you do after school?",
                options: ["Work", "Do homework", "Cook", "Sleep"],
                correctAnswer: "Do homework",
                explanation: "Okuldan sonra genellikle ödev yapılır ('do homework')."
            },
            {
                question: "What is the opposite of 'clean'?",
                options: ["Dirty", "Big", "Fast", "Tall"],
                correctAnswer: "Dirty",
                explanation: "'Clean' (temiz) kelimesinin zıttı 'dirty' (kirli) kelimesidir."
            },
            {
                question: "What do you eat for breakfast?",
                options: ["Bread", "Book", "Pen", "Shoe"],
                correctAnswer: "Bread",
                explanation: "Kahvaltıda 'bread' (ekmek) yaygın bir yiyecektir."
            },
            {
                question: "What is a place to buy clothes?",
                options: ["Store", "Zoo", "Park", "Kitchen"],
                correctAnswer: "Store",
                explanation: "Kıyafet almak için 'store' (mağaza) gibi yerlere gidilir."
            },
            {
                question: "What do you use to write?",
                options: ["Spoon", "Pen", "Ball", "Shoe"],
                correctAnswer: "Pen",
                explanation: "Yazı yazmak için 'pen' (kalem) kullanılır."
            },
            {
                question: "What is a type of flower?",
                options: ["Rose", "Book", "Car", "Tree"],
                correctAnswer: "Rose",
                explanation: "'Rose' (gül) bir çiçek türüdür."
            },
            {
                question: "What do you do at a park?",
                options: ["Cook", "Run", "Study", "Sleep"],
                correctAnswer: "Run",
                explanation: "Parkta 'run' (koşmak) gibi spor aktiviteleri yapılabilir."
            },
            {
                question: "What is the opposite of 'hot'?",
                options: ["Cold", "Big", "Fast", "Tall"],
                correctAnswer: "Cold",
                explanation: "'Hot' (sıcak) kelimesinin zıttı 'cold' (soğuk) kelimesidir."
            },
            {
                question: "What do you eat for a snack?",
                options: ["Chips", "Book", "Pen", "Shoe"],
                correctAnswer: "Chips",
                explanation: "Atıştırmalık olarak 'chips' (cips) yenebilir."
            },
            {
                question: "What is a place to eat?",
                options: ["Kitchen", "Library", "Zoo", "School"],
                correctAnswer: "Kitchen",
                explanation: "'Kitchen' (mutfak), evde yemek yenilen bir yerdir."
            },
            {
                question: "What do you wear on your feet?",
                options: ["Hat", "Shoes", "Gloves", "Jacket"],
                correctAnswer: "Shoes",
                explanation: "Ayaklarımıza 'shoes' (ayakkabı) giyeriz."
            },
            {
                question: "What is a type of bird?",
                options: ["Eagle", "Book", "Car", "Tree"],
                correctAnswer: "Eagle",
                explanation: "'Eagle' (kartal) bir kuş türüdür."
            },
            {
                question: "What do you do at a festival?",
                options: ["Work", "Dance", "Study", "Sleep"],
                correctAnswer: "Dance",
                explanation: "Festivallerde 'dance' (dans etmek) yaygın bir aktivitedir."
            },
            {
                question: "What describes a person's hair?",
                options: ["Tall", "Curly", "Fast", "Kind"],
                correctAnswer: "Curly",
                explanation: "'Curly' (kıvırcık), saç tipini tanımlayan bir sıfattır."
            },
            {
                question: "What is a sport played with a ball?",
                options: ["Swimming", "Basketball", "Running", "Skiing"],
                correctAnswer: "Basketball",
                explanation: "'Basketball' (basketbol) topla oynanan bir spordur."
            },
            {
                question: "What is the opposite of 'tall'?",
                options: ["Long", "Big", "Short", "Wide"],
                correctAnswer: "Short",
                explanation: "'Tall' (uzun boylu) kelimesinin zıttı 'short' (kısa boylu) kelimesidir."
            },
            {
                question: "What do you call a friendly person?",
                options: ["Mean", "Kind", "Shy", "Lazy"],
                correctAnswer: "Kind",
                explanation: "Arkadaş canlısı bir kişiye 'kind' (nazik, kibar) denir."
            },
            {
                question: "What is a place to exercise?",
                options: ["Kitchen", "Gym", "Bedroom", "Bathroom"],
                correctAnswer: "Gym",
                explanation: "'Gym' (spor salonu), egzersiz yapılan bir yerdir."
            },
            {
                question: "What do you use to write?",
                options: ["Spoon", "Pen", "Shoe", "Ball"],
                correctAnswer: "Pen",
                explanation: "Yazı yazmak için 'pen' (kalem) kullanılır."
            },
            {
                question: "What is the opposite of 'happy'?",
                options: ["Sad", "Big", "Fast", "Tall"],
                correctAnswer: "Sad",
                explanation: "'Happy' (mutlu) kelimesinin zıttı 'sad' (üzgün) kelimesidir."
            },
            {
                question: "What is a 'scientist'?",
                options: ["Person who cooks", "Person who experiments", "Person who sings", "Person who drives"],
                correctAnswer: "Person who experiments",
                explanation: "'Scientist' (bilim insanı), deneyler yapan kişidir."
            },
            {
                question: "What do you do to save the planet?",
                options: ["Throw trash", "Recycle", "Eat candy", "Sleep"],
                correctAnswer: "Recycle",
                explanation: "Gezegeni korumak için 'recycle' (geri dönüşüm yapmak) önemlidir."
            },
            {
                question: "What is a 'dream'?",
                options: ["Something you eat", "Something you wish for", "Something you wear", "Something you read"],
                correctAnswer: "Something you wish for",
                explanation: "'Dream' (hayal/rüya), dilediğiniz bir şeydir."
            },
            {
                question: "What describes a person's eyes?",
                options: ["Blue", "Tall", "Fast", "Kind"],
                correctAnswer: "Blue",
                explanation: "'Blue' (mavi), göz rengini tanımlayan bir sıfattır."
            },
            {
                question: "What is a sport with a racket?",
                options: ["Football", "Tennis", "Swimming", "Cycling"],
                correctAnswer: "Tennis",
                explanation: "'Tennis' (tenis), raketle oynanan bir spordur."
            },
            {
                question: "What is the opposite of 'big'?",
                options: ["Small", "Tall", "Long", "Wide"],
                correctAnswer: "Small",
                explanation: "'Big' (büyük) kelimesinin zıttı 'small' (küçük) kelimesidir."
            },
            {
                question: "What do you call a helpful person?",
                options: ["Lazy", "Helpful", "Mean", "Shy"],
                correctAnswer: "Helpful",
                explanation: "Yardımsever bir kişiye 'helpful' denir."
            },
            {
                question: "What is a place to read books?",
                options: ["Mall", "Library", "Park", "Kitchen"],
                correctAnswer: "Library",
                explanation: "Kitap okumak için 'library' (kütüphane) ideal bir yerdir."
            },
            {
                question: "What do you eat for lunch?",
                options: ["Pen", "Soup", "Book", "Shoe"],
                correctAnswer: "Soup",
                explanation: "Öğle yemeğinde 'soup' (çorba) yenebilir."
            },
            {
                question: "What is the opposite of 'fast'?",
                options: ["Quick", "Slow", "High", "Low"],
                correctAnswer: "Slow",
                explanation: "'Fast' (hızlı) kelimesinin zıttı 'slow' (yavaş) kelimesidir."
            },
            {
                question: "What is a 'computer'?",
                options: ["Food", "Toy", "Technology", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Computer' (bilgisayar) bir teknoloji ürünüdür."
            },
            {
                question: "What do you do with plastic bottles?",
                options: ["Eat", "Recycle", "Wear", "Read"],
                correctAnswer: "Recycle",
                explanation: "Plastik şişeleri geri dönüştürmek ('recycle') çevre için iyidir."
            },
            {
                question: "What is a 'firefighter'?",
                options: ["Person who cooks", "Person who puts out fires", "Person who sings", "Person who drives"],
                correctAnswer: "Person who puts out fires",
                explanation: "'Firefighter' (itfaiyeci), yangınları söndüren kişidir."
            },
            {
                question: "What describes a person's height?",
                options: ["Tall", "Funny", "Smart", "Kind"],
                correctAnswer: "Tall",
                explanation: "'Tall' (uzun), bir kişinin boyunu tanımlayan bir sıfattır."
            },
            {
                question: "What is a sport in water?",
                options: ["Football", "Swimming", "Basketball", "Tennis"],
                correctAnswer: "Swimming",
                explanation: "'Swimming' (yüzme) suda yapılan bir spordur."
            },
            {
                question: "What is the opposite of 'hot'?",
                options: ["Cold", "Warm", "Dry", "Wet"],
                correctAnswer: "Cold",
                explanation: "'Hot' (sıcak) kelimesinin zıttı 'cold' (soğuk) kelimesidir."
            },
            {
                question: "What do you call a funny person?",
                options: ["Serious", "Funny", "Shy", "Mean"],
                correctAnswer: "Funny",
                explanation: "Komik bir kişiye 'funny' denir."
            },
            {
                question: "What is a place to shop?",
                options: ["Park", "Mall", "School", "Hospital"],
                correctAnswer: "Mall",
                explanation: "'Mall' (AVM), alışveriş yapmak için gidilen bir yerdir."
            },
            {
                question: "What do you drink?",
                options: ["Book", "Water", "Ball", "Pen"],
                correctAnswer: "Water",
                explanation: "Seçenekler arasında sadece 'water' (su) içilebilir."
            },
            {
                question: "What is the opposite of 'up'?",
                options: ["Left", "Down", "Right", "In"],
                correctAnswer: "Down",
                explanation: "'Up' (yukarı) kelimesinin zıttı 'down' (aşağı) kelimesidir."
            },
            {
                question: "What is a 'phone'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Phone' (telefon) bir teknoloji ürünüdür."
            },
            {
                question: "What do you do to save water?",
                options: ["Drink soda", "Turn off the tap", "Eat candy", "Watch TV"],
                correctAnswer: "Turn off the tap",
                explanation: "Suyu korumak için musluğu kapatmak ('turn off the tap') gerekir."
            },
            {
                question: "What is a 'police officer'?",
                options: ["Person who cooks", "Person who keeps people safe", "Person who sings", "Person who drives"],
                correctAnswer: "Person who keeps people safe",
                explanation: "'Police officer' (polis memuru), insanları güvende tutan kişidir."
            },
            {
                question: "What describes a person's weight?",
                options: ["Slim", "Funny", "Smart", "Kind"],
                correctAnswer: "Slim",
                explanation: "'Slim' (zayıf), bir kişinin kilosunu tanımlayan bir sıfattır."
            },
            {
                question: "What is a sport on a bike?",
                options: ["Cycling", "Swimming", "Football", "Tennis"],
                correctAnswer: "Cycling",
                explanation: "'Cycling' (bisiklet sürme) bisikletle yapılan bir spordur."
            },
            {
                question: "What is the opposite of 'long'?",
                options: ["Big", "Short", "Tall", "Wide"],
                correctAnswer: "Short",
                explanation: "'Long' (uzun) kelimesinin zıttı 'short' (kısa) kelimesidir."
            },
            {
                question: "What do you call a smart person?",
                options: ["Lazy", "Mean", "Clever", "Shy"],
                correctAnswer: "Clever",
                explanation: "Zeki bir kişiye 'clever' denir."
            },
            {
                question: "What is a place to watch movies?",
                options: ["Cinema", "Park", "School", "Kitchen"],
                correctAnswer: "Cinema",
                explanation: "'Cinema' (sinema), film izlenen bir yerdir."
            },
            {
                question: "What do you eat for breakfast?",
                options: ["Pen", "Eggs", "Book", "Shoe"],
                correctAnswer: "Eggs",
                explanation: "Kahvaltıda 'eggs' (yumurta) yenebilir."
            },
            {
                question: "What is the opposite of 'loud'?",
                options: ["Noisy", "Quiet", "Big", "Small"],
                correctAnswer: "Quiet",
                explanation: "'Loud' (yüksek sesli) kelimesinin zıttı 'quiet' (sessiz) kelimesidir."
            },
            {
                question: "What is a 'robot'?",
                options: ["Food", "Toy", "Technology", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Robot' bir teknoloji ürünüdür."
            },
            {
                question: "What do you do with paper?",
                options: ["Eat", "Recycle", "Wear", "Read"],
                correctAnswer: "Recycle",
                explanation: "Kağıtları geri dönüştürmek ('recycle') çevre için önemlidir."
            },
            {
                question: "What is a 'doctor'?",
                options: ["Person who cooks", "Person who helps sick people", "Person who sings", "Person who drives"],
                correctAnswer: "Person who helps sick people",
                explanation: "'Doctor' (doktor), hasta insanlara yardım eden kişidir."
            },
            {
                question: "What describes a person's personality?",
                options: ["Tall", "Friendly", "Slim", "Curly"],
                correctAnswer: "Friendly",
                explanation: "'Friendly' (arkadaş canlısı), bir kişinin kişiliğini tanımlayan bir sıfattır."
            },
            {
                question: "What is a sport with a net?",
                options: ["Football", "Volleyball", "Swimming", "Cycling"],
                correctAnswer: "Volleyball",
                explanation: "'Volleyball' (voleybol) file ile oynanan bir spordur."
            },
            {
                question: "What is the opposite of 'wet'?",
                options: ["Dry", "Cold", "Hot", "Big"],
                correctAnswer: "Dry",
                explanation: "'Wet' (ıslak) kelimesinin zıttı 'dry' (kuru) kelimesidir."
            },
            {
                question: "What do you call a shy person?",
                options: ["Talkative", "Shy", "Mean", "Funny"],
                correctAnswer: "Shy",
                explanation: "Utangaç bir kişiye 'shy' denir."
            },
            {
                question: "What is a place to play?",
                options: ["Kitchen", "Bedroom", "Playground", "Bathroom"],
                correctAnswer: "Playground",
                explanation: "'Playground' (oyun parkı), oyun oynamak için bir yerdir."
            },
            {
                question: "What do you eat for dinner?",
                options: ["Pen", "Rice", "Book", "Shoe"],
                correctAnswer: "Rice",
                explanation: "Akşam yemeğinde 'rice' (pilav) yenebilir."
            },
            {
                question: "What is the opposite of 'heavy'?",
                options: ["Light", "Big", "Tall", "Long"],
                correctAnswer: "Light",
                explanation: "'Heavy' (ağır) kelimesinin zıttı 'light' (hafif) kelimesidir."
            },
            {
                question: "What is a 'tablet'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Tablet' bir teknoloji ürünüdür."
            },
            {
                question: "What do you do to save energy?",
                options: ["Watch TV", "Turn off lights", "Eat candy", "Sleep"],
                correctAnswer: "Turn off lights",
                explanation: "Enerji tasarrufu için ışıkları kapatmak ('turn off lights') gerekir."
            },
            {
                question: "What is a 'nurse'?",
                options: ["Person who cooks", "Person who helps doctors", "Person who sings", "Person who drives"],
                correctAnswer: "Person who helps doctors",
                explanation: "'Nurse' (hemşire), doktorlara yardım eden kişidir."
            },
            {
                question: "What describes a person's clothes?",
                options: ["Smart", "Tall", "Slim", "Curly"],
                correctAnswer: "Smart",
                explanation: "'Smart' (şık), bir kişinin kıyafetlerini tanımlayan bir sıfattır."
            },
            {
                question: "What is a sport in the mountains?",
                options: ["Swimming", "Skiing", "Football", "Tennis"],
                correctAnswer: "Skiing",
                explanation: "'Skiing' (kayak), dağlarda yapılan bir spordur."
            },
            {
                question: "What is the opposite of 'near'?",
                options: ["Close", "Far", "Next to", "Behind"],
                correctAnswer: "Far",
                explanation: "'Near' (yakın) kelimesinin zıttı 'far' (uzak) kelimesidir."
            },
            {
                question: "What do you call a lazy person?",
                options: ["Active", "Lazy", "Kind", "Funny"],
                correctAnswer: "Lazy",
                explanation: "Tembel bir kişiye 'lazy' denir."
            },
            {
                question: "What is a place to study?",
                options: ["Kitchen", "School", "Park", "Mall"],
                correctAnswer: "School",
                explanation: "'School' (okul), ders çalışmak için bir yerdir."
            },
            {
                question: "What do you eat for a snack?",
                options: ["Pen", "Fruit", "Book", "Shoe"],
                correctAnswer: "Fruit",
                explanation: "Atıştırmalık olarak 'fruit' (meyve) sağlıklı bir seçenektir."
            },
            {
                question: "What is the opposite of 'dark'?",
                options: ["Light", "Heavy", "Big", "Small"],
                correctAnswer: "Light",
                explanation: "'Dark' (karanlık) kelimesinin zıttı 'light' (aydınlık) kelimesidir."
            },
            {
                question: "What is a 'camera'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Camera' (kamera) bir teknoloji ürünüdür."
            },
            {
                question: "What do you do with trash?",
                options: ["Eat", "Recycle", "Wear", "Read"],
                correctAnswer: "Recycle",
                explanation: "Çöpleri geri dönüştürmek ('recycle') çevre için önemlidir."
            },
            {
                question: "What is a 'teacher'?",
                options: ["Person who cooks", "Person who teaches", "Person who sings", "Person who drives"],
                correctAnswer: "Person who teaches",
                explanation: "'Teacher' (öğretmen), öğreten kişidir."
            },
            {
                question: "What describes a person's face?",
                options: ["Tall", "Slim", "Freckled", "Kind"],
                correctAnswer: "Freckled",
                explanation: "'Freckled' (çilli), bir kişinin yüzünü tanımlayan bir sıfattır."
            },
            {
                question: "What is a sport with a team?",
                options: ["Running", "Swimming", "Football", "Skiing"],
                correctAnswer: "Football",
                explanation: "'Football' (futbol) bir takım sporudur."
            },
            {
                question: "What is the opposite of 'day'?",
                options: ["Night", "Morning", "Evening", "Afternoon"],
                correctAnswer: "Night",
                explanation: "'Day' (gündüz) kelimesinin zıttı 'night' (gece) kelimesidir."
            },
            {
                question: "What do you call a talkative person?",
                options: ["Quiet", "Talkative", "Mean", "Shy"],
                correctAnswer: "Talkative",
                explanation: "Çok konuşan bir kişiye 'talkative' denir."
            },
            {
                question: "What is a place to relax?",
                options: ["Kitchen", "Park", "School", "Mall"],
                correctAnswer: "Park",
                explanation: "'Park', rahatlamak için gidilebilecek bir yerdir."
            },
            {
                question: "What do you drink for breakfast?",
                options: ["Pen", "Milk", "Book", "Shoe"],
                correctAnswer: "Milk",
                explanation: "Kahvaltıda 'milk' (süt) içilebilir."
            },
            {
                question: "What is the opposite of 'old'?",
                options: ["Young", "Big", "Tall", "Fast"],
                correctAnswer: "Young",
                explanation: "'Old' (yaşlı) kelimesinin zıttı 'young' (genç) kelimesidir."
            },
            {
                question: "What is a 'laptop'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Laptop' (dizüstü bilgisayar) bir teknoloji ürünüdür."
            },
            {
                question: "What do you do to help animals?",
                options: ["Throw trash", "Feed them", "Eat candy", "Sleep"],
                correctAnswer: "Feed them",
                explanation: "Hayvanlara yardım etmek için onları besleyebilirsiniz ('feed them')."
            },
            {
                question: "What is a 'student'?",
                options: ["Person who cooks", "Person who learns", "Person who sings", "Person who drives"],
                correctAnswer: "Person who learns",
                explanation: "'Student' (öğrenci), öğrenen kişidir."
            },
            {
                question: "What describes a person's build?",
                options: ["Tall", "Slim", "Funny", "Kind"],
                correctAnswer: "Slim",
                explanation: "'Slim' (zayıf), bir kişinin vücut yapısını tanımlayan bir sıfattır."
            },
            {
                question: "What is a sport with a board?",
                options: ["Football", "Skateboarding", "Swimming", "Tennis"],
                correctAnswer: "Skateboarding",
                explanation: "'Skateboarding' (kaykay), bir tahta ile yapılan spordur."
            },
            {
                question: "What is the opposite of 'strong'?",
                options: ["Weak", "Big", "Tall", "Fast"],
                correctAnswer: "Weak",
                explanation: "'Strong' (güçlü) kelimesinin zıttı 'weak' (güçsüz) kelimesidir."
            },
            {
                question: "What do you call a generous person?",
                options: ["Selfish", "Generous", "Mean", "Shy"],
                correctAnswer: "Generous",
                explanation: "Cömert bir kişiye 'generous' denir."
            },
            {
                question: "What is a place to buy food?",
                options: ["Market", "School", "Park", "Hospital"],
                correctAnswer: "Market",
                explanation: "'Market', yiyecek satın almak için bir yerdir."
            },
            {
                question: "What do you eat with bread?",
                options: ["Pen", "Butter", "Book", "Shoe"],
                correctAnswer: "Butter",
                explanation: "Ekmekle birlikte 'butter' (tereyağı) yenebilir."
            },
            {
                question: "What is the opposite of 'easy'?",
                options: ["Difficult", "Simple", "Big", "Small"],
                correctAnswer: "Difficult",
                explanation: "'Easy' (kolay) kelimesinin zıttı 'difficult' (zor) kelimesidir."
            },
            {
                question: "What is a 'television'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Television' (televizyon) bir teknoloji ürünüdür."
            },
            {
                question: "What do you do to save trees?",
                options: ["Cut them", "Plant them", "Eat candy", "Sleep"],
                correctAnswer: "Plant them",
                explanation: "Ağaçları korumak için onları dikmelisiniz ('plant them')."
            },
            {
                question: "What is a 'librarian'?",
                options: ["Person who cooks", "Person who manages books", "Person who sings", "Person who drives"],
                correctAnswer: "Person who manages books",
                explanation: "'Librarian' (kütüphaneci), kitapları yöneten kişidir."
            },
            {
                question: "What describes a person's skin?",
                options: ["Tall", "Fair", "Funny", "Kind"],
                correctAnswer: "Fair",
                explanation: "'Fair' (açık tenli), bir kişinin ten rengini tanımlayan bir sıfattır."
            },
            {
                question: "What is a sport with a horse?",
                options: ["Football", "Horse riding", "Swimming", "Tennis"],
                correctAnswer: "Horse riding",
                explanation: "'Horse riding' (binicilik), atla yapılan bir spordur."
            },
            {
                question: "What is the opposite of 'clean'?",
                options: ["Dirty", "Big", "Tall", "Fast"],
                correctAnswer: "Dirty",
                explanation: "'Clean' (temiz) kelimesinin zıttı 'dirty' (kirli) kelimesidir."
            },
            {
                question: "What do you call a cheerful person?",
                options: ["Sad", "Cheerful", "Mean", "Shy"],
                correctAnswer: "Cheerful",
                explanation: "Neşeli bir kişiye 'cheerful' denir."
            },
            {
                question: "What is a place to swim?",
                options: ["Kitchen", "Pool", "School", "Mall"],
                correctAnswer: "Pool",
                explanation: "'Pool' (havuz), yüzmek için bir yerdir."
            },
            {
                question: "What do you eat with cereal?",
                options: ["Pen", "Milk", "Book", "Shoe"],
                correctAnswer: "Milk",
                explanation: "Gevrek ('cereal') genellikle sütle ('milk') yenir."
            },
            {
                question: "What is the opposite of 'high'?",
                options: ["Low", "Big", "Tall", "Fast"],
                correctAnswer: "Low",
                explanation: "'High' (yüksek) kelimesinin zıttı 'low' (alçak) kelimesidir."
            },
            {
                question: "What is a 'printer'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Printer' (yazıcı) bir teknoloji ürünüdür."
            },
            {
                question: "What do you do to help the environment?",
                options: ["Throw trash", "Use less plastic", "Eat candy", "Sleep"],
                correctAnswer: "Use less plastic",
                explanation: "Çevreye yardım etmek için daha az plastik kullanmalısınız ('use less plastic')."
            },
            {
                question: "What is a 'pilot'?",
                options: ["Person who cooks", "Person who flies planes", "Person who sings", "Person who drives"],
                correctAnswer: "Person who flies planes",
                explanation: "'Pilot', uçakları uçuran kişidir."
            },
            {
                question: "What describes a person's age?",
                options: ["Young", "Funny", "Smart", "Kind"],
                correctAnswer: "Young",
                explanation: "'Young' (genç), bir kişinin yaşını tanımlayan bir sıfattır."
            },
            {
                question: "What is a sport with a bat?",
                options: ["Baseball", "Swimming", "Football", "Tennis"],
                correctAnswer: "Baseball",
                explanation: "'Baseball' (beyzbol), sopayla ('bat') oynanan bir spordur."
            },
            {
                question: "What is the opposite of 'full'?",
                options: ["Empty", "Big", "Tall", "Fast"],
                correctAnswer: "Empty",
                explanation: "'Full' (dolu) kelimesinin zıttı 'empty' (boş) kelimesidir."
            },
            {
                question: "What do you call a rude person?",
                options: ["Polite", "Rude", "Kind", "Funny"],
                correctAnswer: "Rude",
                explanation: "Kaba bir kişiye 'rude' denir."
            },
            {
                question: "What is a place to see animals?",
                options: ["Kitchen", "Zoo", "School", "Mall"],
                correctAnswer: "Zoo",
                explanation: "'Zoo' (hayvanat bahçesi), hayvanları görmek için bir yerdir."
            },
            {
                question: "What do you eat for a snack?",
                options: ["Pen", "Yogurt", "Book", "Shoe"],
                correctAnswer: "Yogurt",
                explanation: "Atıştırmalık olarak 'yogurt' (yoğurt) yenebilir."
            },
            {
                question: "What is the opposite of 'rich'?",
                options: ["Poor", "Big", "Tall", "Fast"],
                correctAnswer: "Poor",
                explanation: "'Rich' (zengin) kelimesinin zıttı 'poor' (fakir) kelimesidir."
            },
            {
                question: "What is a 'smartphone'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Smartphone' (akıllı telefon) bir teknoloji ürünüdür."
            },
            {
                question: "What do you do to save animals?",
                options: ["Throw trash", "Protect them", "Eat candy", "Sleep"],
                correctAnswer: "Protect them",
                explanation: "Hayvanları kurtarmak için onları korumalısınız ('protect them')."
            },
            {
                question: "What is a 'vet'?",
                options: ["Person who cooks", "Person who treats animals", "Person who sings", "Person who drives"],
                correctAnswer: "Person who treats animals",
                explanation: "'Vet' (veteriner), hayvanları tedavi eden kişidir."
            }
        ],

     
        intermediate: [
            {
                question: "What do you say to ask for directions?",
                options: ["Where is this place?", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "Where is this place?",
                explanation: "Yol tarifi sormak için 'Where is...?' (... nerede?) kalıbı kullanılır."
            },
            {
                question: "What is a healthy habit?",
                options: ["Eating candy", "Exercising", "Watching TV", "Sleeping late"],
                correctAnswer: "Exercising",
                explanation: "'Exercising' (egzersiz yapmak) sağlıklı bir alışkanlıktır."
            },
            {
                question: "What do you need to play basketball?",
                options: ["Racket", "Ball", "Notebook", "Desk"],
                correctAnswer: "Ball",
                explanation: "Basketbol oynamak için bir topa ('ball') ihtiyaç vardır."
            },
            {
                question: "What is a natural resource?",
                options: ["Car", "Water", "Book", "Pen"],
                correctAnswer: "Water",
                explanation: "'Water' (su) bir doğal kaynaktır."
            },
            {
                question: "What do you do to save energy?",
                options: ["Leave lights on", "Turn off lights", "Watch TV", "Play games"],
                correctAnswer: "Turn off lights",
                explanation: "Enerji tasarrufu için ışıkları kapatmak ('turn off lights') gerekir."
            },
            {
                question: "What is a type of music?",
                options: ["Pop", "Book", "Car", "Tree"],
                correctAnswer: "Pop",
                explanation: "'Pop' bir müzik türüdür."
            },
            {
                question: "What do you say to invite a friend?",
                options: ["Come over!", "Go away!", "I’m tired!", "No way!"],
                correctAnswer: "Come over!",
                explanation: "Bir arkadaşınızı davet etmek için 'Come over!' (Bize gel!) diyebilirsiniz."
            },
            {
                question: "What is a place to see art?",
                options: ["Gym", "Museum", "Park", "Kitchen"],
                correctAnswer: "Museum",
                explanation: "'Museum' (müze), sanat eserlerini görmek için bir yerdir."
            },
            {
                question: "What do you need to cook pasta?",
                options: ["Spoon", "Pot", "Book", "Shoe"],
                correctAnswer: "Pot",
                explanation: "Makarna pişirmek için bir tencereye ('pot') ihtiyaç vardır."
            },
            {
                question: "What is a type of job?",
                options: ["Doctor", "Book", "Car", "Tree"],
                correctAnswer: "Doctor",
                explanation: "'Doctor' (doktor) bir meslek türüdür."
            },
            {
                question: "What do you do to stay hydrated?",
                options: ["Eat candy", "Drink water", "Watch TV", "Sleep"],
                correctAnswer: "Drink water",
                explanation: "Sıvı ihtiyacını karşılamak ('stay hydrated') için su içmek ('drink water') önemlidir."
            },
            {
                question: "What is a type of dance?",
                options: ["Ballet", "Book", "Car", "Tree"],
                correctAnswer: "Ballet",
                explanation: "'Ballet' (bale) bir dans türüdür."
            },
            {
                question: "What do you say to thank a teacher?",
                options: ["Go away!", "Thank you!", "I’m tired!", "No way!"],
                correctAnswer: "Thank you!",
                explanation: "Bir öğretmene teşekkür etmek için 'Thank you!' (Teşekkür ederim!) denir."
            },
            {
                question: "What is a place to see a concert?",
                options: ["Library", "Stadium", "School", "Kitchen"],
                correctAnswer: "Stadium",
                explanation: "Büyük konserler genellikle bir stadyumda ('stadium') yapılır."
            },
            {
                question: "What do you need to paint a picture?",
                options: ["Spoon", "Brush", "Book", "Shoe"],
                correctAnswer: "Brush",
                explanation: "Resim yapmak için bir fırçaya ('brush') ihtiyaç vardır."
            },
            {
                question: "What is a type of vehicle?",
                options: ["Car", "Book", "Tree", "Pen"],
                correctAnswer: "Car",
                explanation: "'Car' (araba) bir taşıt ('vehicle') türüdür."
            },
            {
                question: "What do you do to recycle?",
                options: ["Throw away everything", "Sort trash", "Watch TV", "Sleep"],
                correctAnswer: "Sort trash",
                explanation: "Geri dönüşüm yapmak için çöpleri ayırmak ('sort trash') gerekir."
            },
            {
                question: "What is a type of movie?",
                options: ["Comedy", "Book", "Car", "Tree"],
                correctAnswer: "Comedy",
                explanation: "'Comedy' (komedi) bir film türüdür."
            },
            {
                question: "What do you say to ask for help?",
                options: ["Can you help me?", "Go away!", "I’m fine!", "No way!"],
                correctAnswer: "Can you help me?",
                explanation: "Yardım istemek için 'Can you help me?' (Bana yardım edebilir misin?) denir."
            },
            {
                question: "What is a place to see history?",
                options: ["Gym", "Museum", "Park", "Kitchen"],
                correctAnswer: "Museum",
                explanation: "'Museum' (müze), tarihi eserleri görmek için bir yerdir."
            },
            {
                question: "What do you need to play tennis?",
                options: ["Ball", "Racket", "Book", "Shoe"],
                correctAnswer: "Racket",
                explanation: "Tenis oynamak için bir rakete ('racket') ihtiyaç vardır."
            },
            {
                question: "What is a type of weather event?",
                options: ["Storm", "Book", "Car", "Tree"],
                correctAnswer: "Storm",
                explanation: "'Storm' (fırtına) bir hava olayıdır."
            },
            {
                question: "What do you do to stay safe in traffic?",
                options: ["Run across the road", "Follow rules", "Play games", "Sleep"],
                correctAnswer: "Follow rules",
                explanation: "Trafikte güvende kalmak için kurallara uymak ('follow rules') gerekir."
            },
    {
        question: "My friend is very _______. She never changes her mind.",
        options: ["easy-going", "stubborn", "thoughtful", "generous"],
        correctAnswer: "stubborn",
        explanation: "Fikrini asla değiştirmeyen bir kişi 'stubborn' (inatçı) olarak tanımlanır."
    },
    {
        question: "He _______ from university with a degree in engineering in 2010.",
        options: ["graduate", "graduated", "graduates", "is graduating"],
        correctAnswer: "graduated",
        explanation: "Geçmişte belirli bir zamanda (2010) tamamlanmış bir eylem için fiilin ikinci hali (Simple Past) kullanılır."
    },
    {
        question: "A person who easily forgets things is _______.",
        options: ["punctual", "forgetful", "outgoing", "honest"],
        correctAnswer: "forgetful",
        explanation: "Eşyaları kolayca unutan kişiye 'forgetful' (unutkan) denir."
    },
    {
        question: "She got _______ to her husband five years ago.",
        options: ["marry", "marries", "married", "marrying"],
        correctAnswer: "married",
        explanation: "'Get married' (evlenmek) bir kalıptır ve geçmiş zamanda 'got married' olarak kullanılır."
    },
    {
        question: "What does he look like? He is tall and _______.",
        options: ["well-built", "selfish", "clumsy", "funny"],
        correctAnswer: "well-built",
        explanation: "'What does he look like?' sorusu dış görünüşü sorar. 'Well-built' (yapılı, kaslı) bir dış görünüş özelliğidir."
    },
    {
        question: "When _______ he start his career as a writer?",
        options: ["did", "do", "does", "was"],
        correctAnswer: "did",
        explanation: "Geçmiş zamanda soru sormak için 'did' yardımcı fiili kullanılır."
    },
    {
        question: "He is a(n) _______ person. He always tells the truth.",
        options: ["dishonest", "honest", "stubborn", "shy"],
        correctAnswer: "honest",
        explanation: "Her zaman doğruyu söyleyen kişi 'honest' (dürüst) biridir."
    },
    {
        question: "They _______ to a new city last year.",
        options: ["move", "moved", "moves", "are moving"],
        correctAnswer: "moved",
        explanation: "'Last year' (geçen yıl) ifadesi geçmiş zamanı belirttiği için fiilin ikinci hali kullanılır."
    },
    {
        question: "Which one is a negative personality trait?",
        options: ["Hard-working", "Creative", "Generous", "Selfish"],
        correctAnswer: "Selfish",
        explanation: "'Selfish' (bencil) olumsuz bir kişilik özelliğidir. Diğerleri olumludur."
    },
    {
        question: "Did she _______ any awards for her work?",
        options: ["win", "won", "wins", "winning"],
        correctAnswer: "win",
        explanation: "'Did' ile sorulan sorularda ana fiil her zaman yalın (V1) halde olur."
    },

    {
        question: "Dolphins are _______ than sharks.",
        options: ["more intelligent", "intelligent", "the most intelligent", "intelligenter"],
        correctAnswer: "more intelligent",
        explanation: "İki şeyi karşılaştırırken uzun sıfatların önüne 'more' getirilir ('comparative' yapı)."
    },
    {
        question: "You _______ wear a helmet for cycling. It's for your safety.",
        options: ["shouldn't", "mustn't", "should", "don't have to"],
        correctAnswer: "should",
        explanation: "Güçlü bir tavsiye vermek için 'should' (yapmalısın) kullanılır."
    },
    {
        question: "A cheetah can run _______ than a lion.",
        options: ["fast", "faster", "fastest", "more fast"],
        correctAnswer: "faster",
        explanation: "İki şeyi karşılaştırırken tek heceli zarfların sonuna '-er' takısı eklenir."
    },
    {
        question: "We _______ protect endangered animals.",
        options: ["must", "mustn't", "shouldn't", "can't"],
        correctAnswer: "must",
        explanation: "Nesli tükenmekte olan hayvanları korumak bir zorunluluktur, bu yüzden 'must' (yapmalıyız) kullanılır."
    },
    {
        question: "Tigers are carnivores. They only eat _______.",
        options: ["plants", "fruits", "meat", "leaves"],
        correctAnswer: "meat",
        explanation: "Etobur ('carnivore') hayvanlar sadece 'meat' (et) yer."
    },
    {
        question: "You _______ hunt wild animals. It is forbidden.",
        options: ["should", "can", "mustn't", "have to"],
        correctAnswer: "mustn't",
        explanation: "Yasaklanmış bir eylemi belirtmek için 'mustn't' (yapmamalısın) kullanılır."
    },
    {
        question: "The natural environment of an animal is its _______.",
        options: ["home", "country", "habitat", "house"],
        correctAnswer: "habitat",
        explanation: "Bir hayvanın doğal yaşam alanına 'habitat' denir."
    },
    {
        question: "Snakes are _______ reptiles, but some of them are not.",
        options: ["harmless", "domestic", "poisonous", "friendly"],
        correctAnswer: "poisonous",
        explanation: "Yılanlar 'poisonous' (zehirli) olmalarıyla bilinirler."
    },
    {
        question: "A person who watches a sport is a _______.",
        options: ["player", "teammate", "coach", "spectator"],
        correctAnswer: "spectator",
        explanation: "Bir spor müsabakasını izleyen kişiye 'spectator' (seyirci) denir."
    },
    {
        question: "We shouldn't _______ the environment.",
        options: ["protect", "clean", "pollute", "save"],
        correctAnswer: "pollute",
        explanation: "Çevreyi 'pollute' (kirletmek) yapmamamız gereken bir eylemdir."
    },

    {
        question: "I prefer watching series _______ watching movies.",
        options: ["from", "than", "to", "for"],
        correctAnswer: "to",
        explanation: "'Prefer + V-ing + to + V-ing' kalıbı, bir aktiviteyi diğerine tercih ettiğini belirtmek için kullanılır."
    },
    {
        question: "The party is on Saturday. _______ you like to come?",
        options: ["Do", "Are", "Would", "Can"],
        correctAnswer: "Would",
        explanation: "Birini kibarca davet etmek için 'Would you like to...?' (İster misin?) kalıbı kullanılır."
    },
    {
        question: "He _______ watches the news because he thinks it's boring.",
        options: ["always", "usually", "often", "rarely"],
        correctAnswer: "rarely",
        explanation: "Haberleri sıkıcı bulan biri 'rarely' (nadiren) izler."
    },
    {
        question: "First, we need to prepare a guest ______ for the party.",
        options: ["beverages", "presents", "list", "decorations"],
        correctAnswer: "list",
        explanation: "Parti organizasyonunda ilk adımlardan biri 'guest list' (davetli listesi) hazırlamaktır."
    },
    {
        question: "I think sitcoms are _______ than talk shows.",
        options: ["more entertaining", "entertaining", "the most entertaining", "entertaininger"],
        correctAnswer: "more entertaining",
        explanation: "İki program türünü karşılaştırırken uzun bir sıfat olan 'entertaining' önüne 'more' alır."
    },
    {
        question: "We need to buy some beverages, _______ as juice and lemonade.",
        options: ["for example", "like", "such as", "for"],
        correctAnswer: "such as",
        explanation: "Örnek vermek için 'such as' (...gibi) kullanılır."
    },
    {
        question: "A: What is your favorite TV programme? B: I _______ watching quiz shows.",
        options: ["prefer", "would like", "hate", "dislike"],
        correctAnswer: "prefer",
        explanation: "Favori programını belirtirken 'prefer' (tercih etmek) fiili kullanılabilir."
    },
    {
        question: "She is organizing a _______ party for her best friend.",
        options: ["slumber", "fancy dress", "wedding", "graduation"],
        correctAnswer: "fancy dress",
        explanation: "İnsanların kostüm giydiği partilere 'fancy dress party' (kostüm partisi) denir."
    },
    {
        question: "There is a great documentary about sharks on _______ 7 tonight.",
        options: ["channel", "programme", "screen", "episode"],
        correctAnswer: "channel",
        explanation: "Televizyon kanalları için 'channel' kelimesi kullanılır."
    },
    {
        question: "You should _______ the invitation if you can't go to the party.",
        options: ["accept", "refuse", "organize", "decorate"],
        correctAnswer: "refuse",
        explanation: "Partiye gidemiyorsanız, daveti 'refuse' (reddetmek) etmeniz gerekir."
    },
    {
        question: "A person who is determined to do what they want is _______.",
        options: ["stubborn", "easy-going", "generous", "shy"],
        correctAnswer: "stubborn",
        explanation: "İstediğini yapmakta kararlı olan ve fikrini kolay değiştirmeyen kişiye 'stubborn' (inatçı) denir."
    },
    {
        question: "While she _______ for the bus, it began to rain.",
        options: ["was waiting", "waited", "is waiting", "waits"],
        correctAnswer: "was waiting",
        explanation: "Geçmişte bir eylem devam ederken (beklemek) başka bir eylemin (yağmurun başlaması) olduğunu belirtmek için Past Continuous Tense kullanılır."
    },
    {
        question: "Cheetahs are the _______ land animals in the world.",
        options: ["fast", "faster", "fastest", "more fast"],
        correctAnswer: "fastest",
        explanation: "Bir grup içindeki en üstünlüğü belirtmek için 'superlative' (-est takısı) yapısı kullanılır."
    },
    {
        question: "You _______ feed the animals in the zoo. It is forbidden.",
        options: ["should", "can", "mustn't", "don't have to"],
        correctAnswer: "mustn't",
        explanation: "Yasaklanmış bir eylemi belirtmek için 'mustn't' (yapmamalısın) kullanılır."
    },
    {
        question: "I would rather watch a documentary _______ watch a quiz show.",
        options: ["to", "than", "from", "for"],
        correctAnswer: "than",
        explanation: "'Would rather + V1 + than + V1' kalıbı, iki eylem arasında tercih belirtmek için kullanılır."
    },
    {
        question: "She is organizing a _______ party to celebrate finishing university.",
        options: ["wedding", "graduation", "birthday", "farewell"],
        correctAnswer: "graduation",
        explanation: "Üniversiteyi bitirmeyi kutlamak için yapılan partiye 'graduation party' (mezuniyet partisi) denir."
    },
    {
        question: "He is so _______; he always thinks about other people's needs.",
        options: ["selfish", "thoughtful", "arrogant", "mean"],
        correctAnswer: "thoughtful",
        explanation: "Başkalarının ihtiyaçlarını düşünen kişiye 'thoughtful' (düşünceli) denir."
    },
    {
        question: "She _______ from university two years ago.",
        options: ["graduate", "graduates", "graduated", "is graduating"],
        correctAnswer: "graduated",
        explanation: "'Two years ago' (iki yıl önce) ifadesi geçmiş zamanı belirttiği için fiilin ikinci hali kullanılır."
    },
    {
        question: "Many animals are becoming _______ because their habitats are being destroyed.",
        options: ["extinct", "endangered", "domestic", "wild"],
        correctAnswer: "endangered",
        explanation: "Yaşam alanları yok edildiği için birçok hayvan 'endangered' (nesli tükenmekte olan) hale geliyor."
    },
    {
        question: "The team trained hard, so they won the _______.",
        options: ["match", "game", "championship", "spectator"],
        correctAnswer: "championship",
        explanation: "Çok çalışan bir takım, sezonun veya turnuvanın sonunda 'championship' (şampiyonluk) kazanabilir."
    },
    {
        question: "I am not keen _______ soap operas. I think they are boring.",
        options: ["at", "in", "on", "of"],
        correctAnswer: "on",
        explanation: "'Keen on' (-e meraklı olmak) kalıbında 'on' edatı kullanılır."
    },
    {
        question: "The party was a great success. Everyone had a _______ time.",
        options: ["terrible", "awful", "wonderful", "bad"],
        correctAnswer: "wonderful",
        explanation: "Başarılı bir partide herkes 'wonderful' (harika) zaman geçirir."
    },
    {
        question: "A person who is clumsy and often has accidents is _______. ",
        options: ["careful", "well-built", "forgetful", "accident-prone"],
        correctAnswer: "accident-prone",
        explanation: "Sık sık kaza yapan sakar bir kişiye 'accident-prone' (kazaya meyilli) denilebilir."
    },
    {
        question: "He _______ his homework when his mother called him for dinner.",
        options: ["was doing", "did", "does", "is doing"],
        correctAnswer: "was doing",
        explanation: "Geçmişte bir eylem devam ederken (ödev yapmak) başka bir eylemin (annesinin çağırması) olduğunu belirtmek için Past Continuous Tense kullanılır."
    },
    {
        question: "Whales are _______ than dolphins.",
        options: ["large", "larger", "the largest", "more large"],
        correctAnswer: "larger",
        explanation: "İki şeyi karşılaştırırken tek heceli sıfatların sonuna '-er' takısı eklenir."
    },
    {
        question: "The referee _______ the whistle to start the game.",
        options: ["kicked", "threw", "blew", "hit"],
        correctAnswer: "blew",
        explanation: "Hakem, oyunu başlatmak için düdüğü 'blew' (çaldı, üfledi)."
    },
    {
        question: "I prefer _______ with a few close friends to going to big parties.",
        options: ["to hang out", "hanging out", "hang out", "hung out"],
        correctAnswer: "hanging out",
        explanation: "'Prefer + V-ing + to + V-ing' kalıbı bir aktiviteyi diğerine tercih ettiğini belirtir."
    },
    {
        question: "What is another word for a present?",
        options: ["Gift", "Card", "Note", "Letter"],
        correctAnswer: "Gift",
        explanation: "'Present' kelimesinin eş anlamlısı 'gift' (hediye) kelimesidir."
    },
    {
        question: "My sister has _______ hair, but mine is straight.",
        options: ["blonde", "long", "curly", "dark"],
        correctAnswer: "curly",
        explanation: "Düz saçın zıttı olarak 'curly' (kıvırcık) saç kullanılabilir."
    },
    {
        question: "He _______ in London for five years before he moved to New York.",
        options: ["lives", "is living", "lived", "has lived"],
        correctAnswer: "lived",
        explanation: "Geçmişte başlayıp bitmiş bir süreci anlatırken Simple Past Tense kullanılır."
    },
    {
        question: "Dinosaurs became _______ millions of years ago.",
        options: ["endangered", "extinct", "wild", "tame"],
        correctAnswer: "extinct",
        explanation: "Dinozorların nesli milyonlarca yıl önce 'extinct' (tükendi)."
    },
    {
        question: "You need a bow and arrows for _______.",
        options: ["archery", "fencing", "judo", "sailing"],
        correctAnswer: "archery",
        explanation: "'Archery' (okçuluk) sporu için yay ve oklara ihtiyaç vardır."
    },
    {
        question: "The _______ on TV are often very annoying.",
        options: ["commercials", "programmes", "channels", "screens"],
        correctAnswer: "commercials",
        explanation: "Televizyondaki 'commercials' (reklamlar) genellikle sinir bozucu olabilir."
    },
    {
        question: "We should all try to _______ our rubbish to help the environment.",
        options: ["reduce, reuse, and recycle", "throw away", "burn", "ignore"],
        correctAnswer: "reduce, reuse, and recycle",
        explanation: "Çevreye yardım etmek için çöplerimizi 'azaltmalı, yeniden kullanmalı ve geri dönüştürmeliyiz'."
    },
    {
        question: "A person who is easy to get along with is _______.",
        options: ["stubborn", "easy-going", "selfish", "moody"],
        correctAnswer: "easy-going",
        explanation: "İyi geçinmesi kolay olan kişiye 'easy-going' (uyumlu, geçimli) denir."
    },
    {
        question: "I _______ a documentary about sharks when you called.",
        options: ["watched", "was watching", "watch", "am watching"],
        correctAnswer: "was watching",
        explanation: "Geçmişte bir eylem devam ederken başka bir eylemin olduğunu belirtmek için Past Continuous Tense kullanılır."
    },
    {
        question: "A _______ is an animal that eats meat.",
        options: ["herbivore", "carnivore", "omnivore", "mammal"],
        correctAnswer: "carnivore",
        explanation: "Et yiyen hayvanlara 'carnivore' (etobur) denir."
    },
    {
        question: "The Olympic Games are a famous international sports _______.",
        options: ["team", "event", "match", "player"],
        correctAnswer: "event",
        explanation: "Olimpiyat Oyunları, ünlü bir uluslararası spor 'event' (etkinlik) idir."
    },
    {
        question: "I would rather _______ a book than play video games.",
        options: ["to read", "reading", "read", "reads"],
        correctAnswer: "read",
        explanation: "'Would rather' kalıbından sonra fiil yalın halde gelir."
    },
    {
        question: "For my birthday, I want to _______ a party at home.",
        options: ["go", "do", "make", "throw"],
        correctAnswer: "throw",
        explanation: "Parti vermek için 'throw a party' deyimi kullanılır."
    },
    {
        question: "He is a very _______ person. He never lies.",
        options: ["truthful", "dishonest", "unreliable", "selfish"],
        correctAnswer: "truthful",
        explanation: "Asla yalan söylemeyen kişi 'truthful' (dürüst) biridir. 'Honest' ile eş anlamlıdır."
    },
    {
        question: "The Wright brothers _______ the first successful airplane in 1903.",
        options: ["invented", "discovered", "created", "designed"],
        correctAnswer: "invented",
        explanation: "Daha önce var olmayan bir şeyi yapmak 'invent' (icat etmek) fiiliyle anlatılır."
    },
    {
        question: "We should _______ wild animals, not hunt them.",
        options: ["destroy", "protect", "eat", "sell"],
        correctAnswer: "protect",
        explanation: "Vahşi hayvanları avlamak yerine onları 'protect' (korumak) gerekir."
    },
    {
        question: "He enjoys watching _______ because he likes competitions and answering questions.",
        options: ["quiz shows", "sitcoms", "the news", "documentaries"],
        correctAnswer: "quiz shows",
        explanation: "Yarışmaları ve soru cevaplamayı seven biri 'quiz shows' (bilgi yarışmaları) izlemekten hoşlanır."
    },
    {
        question: "It is important to _______ the invitation so they know if you are coming.",
        options: ["ignore", "refuse", "respond to", "throw away"],
        correctAnswer: "respond to",
        explanation: "Gelip gelmeyeceğinizi bilmeleri için davetiyeye 'respond to' (cevap vermek) önemlidir."
    },
{
                question: "What is a type of book?",
                options: ["Novel", "Book", "Car", "Tree"],
                correctAnswer: "Novel",
                explanation: "'Novel' (roman) bir kitap türüdür."
            },
            {
                question: "What do you say to congratulate someone?",
                options: ["Well done!", "Go away!", "I’m tired!", "No way!"],
                correctAnswer: "Well done!",
                explanation: "Birini tebrik etmek için 'Well done!' (Harika iş!) denir."
            },
            {
                question: "What is a place to see a play?",
                options: ["Theater", "Gym", "Park", "Kitchen"],
                correctAnswer: "Theater",
                explanation: "Bir tiyatro oyunu izlemek için tiyatroya ('theater') gidilir."
            },
            {
                question: "What do you need to bake bread?",
                options: ["Spoon", "Oven", "Book", "Shoe"],
                correctAnswer: "Oven",
                explanation: "Ekmek pişirmek için bir fırına ('oven') ihtiyaç vardır."
            },
            {
                question: "What is a type of profession?",
                options: ["Engineer", "Book", "Car", "Tree"],
                correctAnswer: "Engineer",
                explanation: "'Engineer' (mühendis) bir meslek türüdür."
            },
            {
                question: "What do you do to stay organized?",
                options: ["Make a mess", "Use a planner", "Watch TV", "Sleep"],
                correctAnswer: "Use a planner",
                explanation: "Düzenli kalmak için bir planlayıcı kullanmak ('use a planner') yardımcı olur."
            },
            {
                question: "What is a type of instrument?",
                options: ["Guitar", "Book", "Car", "Tree"],
                correctAnswer: "Guitar",
                explanation: "'Guitar' (gitar) bir müzik enstrümanıdır."
            },
            {
                question: "What do you say to apologize?",
                options: ["Sorry!", "Go away!", "I’m fine!", "No way!"],
                correctAnswer: "Sorry!",
                explanation: "Özür dilemek için 'Sorry!' (Üzgünüm!) denir."
            },
            {
                question: "What is a place to see stars?",
                options: ["Observatory", "Gym", "Park", "Kitchen"],
                correctAnswer: "Observatory",
                explanation: "'Observatory' (gözlemevi), yıldızları izlemek için bir yerdir."
            },
            {
                question: "What do you need to play soccer?",
                options: ["Racket", "Ball", "Book", "Shoe"],
                correctAnswer: "Ball",
                explanation: "Futbol oynamak için bir topa ('ball') ihtiyaç vardır."
            },
            {
                question: "What is a type of disaster?",
                options: ["Flood", "Book", "Car", "Tree"],
                correctAnswer: "Flood",
                explanation: "'Flood' (sel) bir doğal afet türüdür."
            },
            {
                question: "What do you do to stay warm?",
                options: ["Wear a T-shirt", "Wear a jacket", "Play games", "Sleep"],
                correctAnswer: "Wear a jacket",
                explanation: "Sıcak kalmak için bir ceket giyersiniz ('wear a jacket')."
            },
            {
                question: "What is a type of art?",
                options: ["Painting", "Book", "Car", "Tree"],
                correctAnswer: "Painting",
                explanation: "'Painting' (resim) bir sanat türüdür."
            },
            {
                question: "What do you say to offer help?",
                options: ["Can I help you?", "Go away!", "I’m fine!", "No way!"],
                correctAnswer: "Can I help you?",
                explanation: "Yardım teklif etmek için 'Can I help you?' (Yardımcı olabilir miyim?) denir."
            },
            {
                question: "What is a place to see animals?",
                options: ["Zoo", "Library", "Market", "School"],
                correctAnswer: "Zoo",
                explanation: "'Zoo' (hayvanat bahçesi), hayvanları görmek için bir yerdir."
            },
            {
                question: "What do you need to play volleyball?",
                options: ["Racket", "Ball", "Book", "Shoe"],
                correctAnswer: "Ball",
                explanation: "Voleybol oynamak için bir topa ('ball') ihtiyaç vardır."
            },
            {
                question: "How do you describe a tall person?",
                options: ["They are short", "They are tall", "They are funny", "They are kind"],
                correctAnswer: "They are tall",
                explanation: "Uzun boylu birini 'They are tall' diye tarif edersiniz."
            },
            {
                question: "What do you need to play tennis?",
                options: ["Ball", "Racket", "Board", "Bat"],
                correctAnswer: "Racket",
                explanation: "Tenis oynamak için bir rakete ('racket') ihtiyaç vardır."
            },
            {
                question: "What is a biography about?",
                options: ["A car’s history", "A person’s life", "A book’s story", "A game’s rules"],
                correctAnswer: "A person’s life",
                explanation: "Bir biyografi bir kişinin hayatı hakkındadır."
            },
            {
                question: "What do you do to stay healthy?",
                options: ["Watch TV", "Exercise", "Eat candy", "Sleep"],
                correctAnswer: "Exercise",
                explanation: "Sağlıklı kalmak için egzersiz yaparsınız ('exercise')."
            },
            {
                question: "What causes pollution?",
                options: ["Recycling", "Planting trees", "Throwing trash", "Saving water"],
                correctAnswer: "Throwing trash",
                explanation: "Çöp atmak ('throwing trash') kirliliğe neden olur."
            },
            {
                question: "What is an adventure?",
                options: ["Something boring", "Something exciting", "Something you eat", "Something you wear"],
                correctAnswer: "Something exciting",
                explanation: "Bir macera ('adventure') heyecan verici bir şeydir."
            },
            {
                question: "What is a famous invention?",
                options: ["Book", "Telephone", "Pen", "Shoe"],
                correctAnswer: "Telephone",
                explanation: "'Telephone' (telefon) ünlü bir icattır."
            },
            {
                question: "What is a dream job?",
                options: ["Something you hate", "Something you love", "Something you eat", "Something you wear"],
                correctAnswer: "Something you love",
                explanation: "Hayalinizdeki iş ('dream job') yapmayı sevdiğiniz bir iştir."
            },
            {
                question: "What does a mayor do?",
                options: ["Cooks food", "Manages a city", "Sings songs", "Drives cars"],
                correctAnswer: "Manages a city",
                explanation: "Bir belediye başkanı ('mayor') bir şehri yönetir ('manages a city')."
            },
            {
                question: "What do you say to describe a kind person?",
                options: ["They are mean", "They are kind", "They are lazy", "They are shy"],
                correctAnswer: "They are kind",
                explanation: "Kibar birini 'They are kind' diye tarif edersiniz."
            },
            {
                question: "What do you need for basketball?",
                options: ["Racket", "Ball", "Board", "Bat"],
                correctAnswer: "Ball",
                explanation: "Basketbol için bir topa ('ball') ihtiyaç vardır."
            },
            {
                question: "What did a famous person achieve?",
                options: ["Ate food", "Won a prize", "Slept", "Ran"],
                correctAnswer: "Won a prize",
                explanation: "Ünlü bir kişi bir ödül kazanmış ('won a prize') olabilir."
            },
            {
                question: "What is a healthy snack?",
                options: ["Chips", "Candy", "Fruit", "Soda"],
                correctAnswer: "Fruit",
                explanation: "'Fruit' (meyve) sağlıklı bir atıştırmalıktır."
            },
            {
                question: "What can you do to save water?",
                options: ["Drink soda", "Turn off the tap", "Eat candy", "Watch TV"],
                correctAnswer: "Turn off the tap",
                explanation: "Suyu korumak için musluğu kapatabilirsiniz ('turn off the tap')."
            },
            {
                question: "What is a dangerous adventure?",
                options: ["Reading a book", "Climbing a mountain", "Eating lunch", "Sleeping"],
                correctAnswer: "Climbing a mountain",
                explanation: "Bir dağa tırmanmak ('climbing a mountain') tehlikeli bir macera olabilir."
            },
            {
                question: "What is a modern technology?",
                options: ["Book", "Smartphone", "Pen", "Shoe"],
                correctAnswer: "Smartphone",
                explanation: "'Smartphone' (akıllı telefon) modern bir teknolojidir."
            },
            {
                question: "What do you dream about?",
                options: ["Eating food", "Your future", "Sleeping", "Running"],
                correctAnswer: "Your future",
                explanation: "Geleceğiniz ('your future') hakkında hayal kurabilirsiniz."
            },
            {
                question: "What does a firefighter do?",
                options: ["Cooks food", "Puts out fires", "Sings songs", "Drives cars"],
                correctAnswer: "Puts out fires",
                explanation: "Bir itfaiyeci ('firefighter') yangınları söndürür."
            },
            {
                question: "How do you describe a funny person?",
                options: ["They are serious", "They are funny", "They are tall", "They are shy"],
                correctAnswer: "They are funny",
                explanation: "Komik birini 'They are funny' diye tarif edersiniz."
            },
            {
                question: "What do you need for swimming?",
                options: ["Racket", "Ball", "Swimsuit", "Bat"],
                correctAnswer: "Swimsuit",
                explanation: "Yüzmek için bir mayoya ('swimsuit') ihtiyaç vardır."
            },
            {
                question: "What is a biography?",
                options: ["A person’s life story", "A car’s history", "A book’s plot", "A game’s rules"],
                correctAnswer: "A person’s life story",
                explanation: "Bir biyografi bir kişinin hayat hikayesidir."
            },
            {
                question: "What is good for your health?",
                options: ["Eating candy", "Drinking soda", "Eating vegetables", "Watching TV"],
                correctAnswer: "Eating vegetables",
                explanation: "Sebze yemek ('eating vegetables') sağlığınız için iyidir."
            },
            {
                question: "What is bad for the environment?",
                options: ["Recycling", "Saving water", "Pollution", "Planting trees"],
                correctAnswer: "Pollution",
                explanation: "'Pollution' (kirlilik) çevre için kötüdür."
            },
            {
                question: "What is a fun adventure?",
                options: ["Doing homework", "Exploring a forest", "Eating lunch", "Sleeping"],
                correctAnswer: "Exploring a forest",
                explanation: "Bir ormanı keşfetmek ('exploring a forest') eğlenceli bir maceradır."
            },
            {
                question: "What is a useful invention?",
                options: ["Book", "Light bulb", "Pen", "Shoe"],
                correctAnswer: "Light bulb",
                explanation: "Ampul ('light bulb') faydalı bir icattır."
            },
            {
                question: "What do you want to be in the future?",
                options: ["A student", "A teacher", "A child", "A baby"],
                correctAnswer: "A teacher",
                explanation: "Gelecekte ne olmak istediğiniz sorusuna 'a teacher' (bir öğretmen) gibi cevaplar verilebilir."
            },
            {
                question: "What does a police officer do?",
                options: ["Cooks food", "Keeps people safe", "Sings songs", "Drives cars"],
                correctAnswer: "Keeps people safe",
                explanation: "Bir polis memuru ('police officer') insanları güvende tutar."
            },
            {
                question: "How do you describe a shy person?",
                options: ["They are talkative", "They are shy", "They are tall", "They are funny"],
                correctAnswer: "They are shy",
                explanation: "Utangaç birini 'They are shy' diye tarif edersiniz."
            },
            {
                question: "What do you need for cycling?",
                options: ["Racket", "Bicycle", "Ball", "Bat"],
                correctAnswer: "Bicycle",
                explanation: "Bisiklet sürmek için bir bisiklete ('bicycle') ihtiyaç vardır."
            },
            {
                question: "What did a scientist invent?",
                options: ["Ate food", "Slept", "Made a discovery", "Ran"],
                correctAnswer: "Made a discovery",
                explanation: "Bir bilim insanı bir keşif yapmış ('made a discovery') olabilir."
            },
            {
                question: "What is a healthy breakfast?",
                options: ["Chips", "Candy", "Yogurt", "Soda"],
                correctAnswer: "Yogurt",
                explanation: "'Yogurt' (yoğurt) sağlıklı bir kahvaltıdır."
            },
            {
                question: "What can you do to save energy?",
                options: ["Watch TV", "Turn off lights", "Eat candy", "Sleep"],
                correctAnswer: "Turn off lights",
                explanation: "Enerji tasarrufu için ışıkları kapatabilirsiniz ('turn off lights')."
            },
            {
                question: "What is an exciting adventure?",
                options: ["Reading a book", "Sailing a boat", "Eating lunch", "Sleeping"],
                correctAnswer: "Sailing a boat",
                explanation: "Bir tekneyle yelken açmak ('sailing a boat') heyecan verici bir maceradır."
            },
            {
                question: "What is a common technology?",
                options: ["Book", "Computer", "Pen", "Shoe"],
                correctAnswer: "Computer",
                explanation: "'Computer' (bilgisayar) yaygın bir teknolojidir."
            },
            {
                question: "What is a dream goal?",
                options: ["Eating food", "Achieving success", "Sleeping", "Running"],
                correctAnswer: "Achieving success",
                explanation: "Başarıya ulaşmak ('achieving success') hayal edilen bir hedeftir."
            },
            {
                question: "What does a doctor do?",
                options: ["Cooks food", "Helps sick people", "Sings songs", "Drives cars"],
                correctAnswer: "Helps sick people",
                explanation: "Bir doktor ('doctor') hasta insanlara yardım eder."
            },
            {
                question: "How do you describe a clever person?",
                options: ["They are lazy", "They are clever", "They are tall", "They are shy"],
                correctAnswer: "They are clever",
                explanation: "Zeki birini 'They are clever' diye tarif edersiniz."
            },
            {
                question: "What do you need for volleyball?",
                options: ["Racket", "Ball", "Board", "Bat"],
                correctAnswer: "Ball",
                explanation: "Voleybol için bir topa ('ball') ihtiyaç vardır."
            },
            {
                question: "What did a famous person do?",
                options: ["Ate food", "Changed history", "Slept", "Ran"],
                correctAnswer: "Changed history",
                explanation: "Ünlü bir kişi tarihi değiştirmiş ('changed history') olabilir."
            },
            {
                question: "What is a healthy drink?",
                options: ["Soda", "Juice", "Coffee", "Tea"],
                correctAnswer: "Juice",
                explanation: "Meyve suyu ('juice') sağlıklı bir içecek olabilir."
            },
            {
                question: "What can you do to help animals?",
                options: ["Throw trash", "Feed them", "Eat candy", "Sleep"],
                correctAnswer: "Feed them",
                explanation: "Hayvanlara yardım etmek için onları besleyebilirsiniz ('feed them')."
            },
            {
                question: "What is a thrilling adventure?",
                options: ["Doing homework", "Skydiving", "Eating lunch", "Sleeping"],
                correctAnswer: "Skydiving",
                explanation: "Hava dalışı ('skydiving') heyecan verici bir maceradır."
            },
            {
                question: "What is an important invention?",
                options: ["Book", "Internet", "Pen", "Shoe"],
                correctAnswer: "Internet",
                explanation: "'Internet' önemli bir icattır."
            },
            {
                question: "What is a dream vacation?",
                options: ["Going to school", "Traveling abroad", "Doing homework", "Sleeping"],
                correctAnswer: "Traveling abroad",
                explanation: "Yurtdışına seyahat etmek ('traveling abroad') hayal edilen bir tatildir."
            },
            {
                question: "What does a nurse do?",
                options: ["Cooks food", "Helps doctors", "Sings songs", "Drives cars"],
                correctAnswer: "Helps doctors",
                explanation: "Bir hemşire ('nurse') doktorlara yardım eder."
            },
            {
                question: "How do you describe a generous person?",
                options: ["They are selfish", "They are generous", "They are tall", "They are shy"],
                correctAnswer: "They are generous",
                explanation: "Cömert birini 'They are generous' diye tarif edersiniz."
            },
            {
                question: "What do you need for skateboarding?",
                options: ["Racket", "Ball", "Skateboard", "Bat"],
                correctAnswer: "Skateboard",
                explanation: "Kaykay yapmak için bir kaykaya ('skateboard') ihtiyaç vardır."
            },
            {
                question: "What is a biography for?",
                options: ["Learning about cars", "Learning about people", "Learning about books", "Learning about games"],
                correctAnswer: "Learning about people",
                explanation: "Bir biyografi insanlar hakkında öğrenmek içindir."
            },
            {
                question: "What is a healthy lunch?",
                options: ["Chips", "Candy", "Salad", "Soda"],
                correctAnswer: "Salad",
                explanation: "'Salad' (salata) sağlıklı bir öğle yemeğidir."
            },
            {
                question: "What can you do to reduce waste?",
                options: ["Throw trash", "Reuse bags", "Eat candy", "Sleep"],
                correctAnswer: "Reuse bags",
                explanation: "Atığı azaltmak için poşetleri yeniden kullanabilirsiniz ('reuse bags')."
            },
            {
                question: "What is a challenging adventure?",
                options: ["Reading a book", "Hiking a mountain", "Eating lunch", "Sleeping"],
                correctAnswer: "Hiking a mountain",
                explanation: "Bir dağda yürüyüş yapmak ('hiking a mountain') zorlu bir maceradır."
            },
            {
                question: "What is a helpful technology?",
                options: ["Book", "Tablet", "Pen", "Shoe"],
                correctAnswer: "Tablet",
                explanation: "'Tablet' faydalı bir teknolojidir."
            },
            {
                question: "What is a dream for the future?",
                options: ["Eating food", "Helping others", "Sleeping", "Running"],
                correctAnswer: "Helping others",
                explanation: "Başkalarına yardım etmek ('helping others') gelecek için bir hayaldir."
            },
            {
                question: "What does a teacher do?",
                options: ["Cooks food", "Teaches students", "Sings songs", "Drives cars"],
                correctAnswer: "Teaches students",
                explanation: "Bir öğretmen ('teacher') öğrencilere ders anlatır."
            },
            {
                question: "How do you describe a rude person?",
                options: ["They are polite", "They are rude", "They are tall", "They are shy"],
                correctAnswer: "They are rude",
                explanation: "Kaba birini 'They are rude' diye tarif edersiniz."
            },
            {
                question: "What do you need for horse riding?",
                options: ["Racket", "Horse", "Ball", "Bat"],
                correctAnswer: "Horse",
                explanation: "Binicilik için bir ata ('horse') ihtiyaç vardır."
            },
            {
                question: "What did an inventor create?",
                options: ["Ate food", "Made a machine", "Slept", "Ran"],
                correctAnswer: "Made a machine",
                explanation: "Bir mucit bir makine yapmış ('made a machine') olabilir."
            },
            {
                question: "What is a healthy dinner?",
                options: ["Chips", "Candy", "Fish", "Soda"],
                correctAnswer: "Fish",
                explanation: "'Fish' (balık) sağlıklı bir akşam yemeğidir."
            },
            {
                question: "What can you do to save trees?",
                options: ["Cut them", "Plant them", "Eat candy", "Sleep"],
                correctAnswer: "Plant them",
                explanation: "Ağaçları kurtarmak için onları dikebilirsiniz ('plant them')."
            },
            {
                question: "What is an extreme adventure?",
                options: ["Reading a book", "Bungee jumping", "Eating lunch", "Sleeping"],
                correctAnswer: "Bungee jumping",
                explanation: "'Bungee jumping' ekstrem bir maceradır."
            },
            {
                question: "What is a new technology?",
                options: ["Book", "Smartwatch", "Pen", "Shoe"],
                correctAnswer: "Smartwatch",
                explanation: "'Smartwatch' (akıllı saat) yeni bir teknolojidir."
            },
            {
                question: "What is a dream house?",
                options: ["A small tent", "A big villa", "A school", "A hospital"],
                correctAnswer: "A big villa",
                explanation: "Büyük bir villa ('a big villa') hayal edilen bir ev olabilir."
            },
            {
                question: "What does a librarian do?",
                options: ["Cooks food", "Manages books", "Sings songs", "Drives cars"],
                correctAnswer: "Manages books",
                explanation: "Bir kütüphaneci ('librarian') kitapları yönetir."
            },
            {
                question: "How do you describe a cheerful person?",
                options: ["They are sad", "They are cheerful", "They are tall", "They are shy"],
                correctAnswer: "They are cheerful",
                explanation: "Neşeli birini 'They are cheerful' diye tarif edersiniz."
            },
            {
                question: "What do you need for skiing?",
                options: ["Racket", "Skis", "Ball", "Bat"],
                correctAnswer: "Skis",
                explanation: "Kayak yapmak için kayaklara ('skis') ihtiyaç vardır."
            },
            {
                question: "What is a famous person’s story?",
                options: ["A car’s history", "A biography", "A book’s plot", "A game’s rules"],
                correctAnswer: "A biography",
                explanation: "Ünlü bir kişinin hikayesi bir biyografidir."
            },
            {
                question: "What is a healthy drink?",
                options: ["Soda", "Water", "Coffee", "Tea"],
                correctAnswer: "Water",
                explanation: "'Water' (su) en sağlıklı içecektir."
            },
            {
                question: "What can you do to help the environment?",
                options: ["Throw trash", "Use less plastic", "Eat candy", "Sleep"],
                correctAnswer: "Use less plastic",
                explanation: "Çevreye yardım etmek için daha az plastik kullanabilirsiniz ('use less plastic')."
            },
            {
                question: "What is a relaxing adventure?",
                options: ["Reading a book", "Camping", "Eating lunch", "Sleeping"],
                correctAnswer: "Camping",
                explanation: "Kamp yapmak ('camping') rahatlatıcı bir maceradır."
            },
            {
                question: "What is an old invention?",
                options: ["Book", "Wheel", "Pen", "Shoe"],
                correctAnswer: "Wheel",
                explanation: "Tekerlek ('wheel') eski bir icattır."
            },
            {
                question: "What is a dream career?",
                options: ["Doing homework", "Being a doctor", "Eating food", "Sleeping"],
                correctAnswer: "Being a doctor",
                explanation: "Doktor olmak ('being a doctor') hayal edilen bir kariyerdir."
            },
            {
                question: "What does a pilot do?",
                options: ["Cooks food", "Flies planes", "Sings songs", "Drives cars"],
                correctAnswer: "Flies planes",
                explanation: "Bir pilot ('pilot') uçakları uçurur."
            },
            {
                question: "How do you describe a talkative person?",
                options: ["They are quiet", "They are talkative", "They are tall", "They are shy"],
                correctAnswer: "They are talkative",
                explanation: "Çok konuşan birini 'They are talkative' diye tarif edersiniz."
            },
            {
                question: "What do you need for baseball?",
                options: ["Racket", "Ball", "Board", "Bat"],
                correctAnswer: "Bat",
                explanation: "Beyzbol için bir sopaya ('bat') ihtiyaç vardır."
            },
            {
                question: "What did a leader do in history?",
                options: ["Ate food", "Led people", "Slept", "Ran"],
                correctAnswer: "Led people",
                explanation: "Tarihteki bir lider insanlara önderlik etmiştir ('led people')."
            },
            {
                question: "What is a healthy breakfast drink?",
                options: ["Soda", "Milk", "Coffee", "Tea"],
                correctAnswer: "Milk",
                explanation: "'Milk' (süt) sağlıklı bir kahvaltı içeceğidir."
            },
            {
                question: "What can you do to save animals?",
                options: ["Throw trash", "Protect them", "Eat candy", "Sleep"],
                correctAnswer: "Protect them",
                explanation: "Hayvanları kurtarmak için onları koruyabilirsiniz ('protect them')."
            },
            {
                question: "What is a cultural adventure?",
                options: ["Reading a book", "Visiting a museum", "Eating lunch", "Sleeping"],
                correctAnswer: "Visiting a museum",
                explanation: "Bir müzeyi ziyaret etmek ('visiting a museum') kültürel bir maceradır."
            },
            {
                question: "What is a useful technology?",
                options: ["Book", "Printer", "Pen", "Shoe"],
                correctAnswer: "Printer",
                explanation: "'Printer' (yazıcı) faydalı bir teknolojidir."
            },
            {
                question: "What is a dream for a better world?",
                options: ["Eating food", "World peace", "Sleeping", "Running"],
                correctAnswer: "World peace",
                explanation: "Daha iyi bir dünya için bir hayal dünya barışıdır ('world peace')."
            },
            {
                question: "What does a vet do?",
                options: ["Cooks food", "Treats animals", "Sings songs", "Drives cars"],
                correctAnswer: "Treats animals",
                explanation: "Bir veteriner ('vet') hayvanları tedavi eder."
            },
            {
                question: "How do you describe a lazy person?",
                options: ["They are active", "They are lazy", "They are tall", "They are shy"],
                correctAnswer: "They are lazy",
                explanation: "Tembel birini 'They are lazy' diye tarif edersiniz."
            },
            {
                question: "What do you need for surfing?",
                options: ["Racket", "Surfboard", "Ball", "Bat"],
                correctAnswer: "Surfboard",
                explanation: "Sörf yapmak için bir sörf tahtasına ('surfboard') ihtiyaç vardır."
            },
            {
                question: "What is a historical figure’s story?",
                options: ["A car’s history", "A biography", "A book’s plot", "A game’s rules"],
                correctAnswer: "A biography",
                explanation: "Tarihi bir figürün hikayesi bir biyografidir."
            },
            {
                question: "What is a healthy snack?",
                options: ["Chips", "Candy", "Nuts", "Soda"],
                correctAnswer: "Nuts",
                explanation: "Kuruyemişler ('nuts') sağlıklı bir atıştırmalıktır."
            },
            {
                question: "What can you do to reduce pollution?",
                options: ["Throw trash", "Use public transport", "Eat candy", "Sleep"],
                correctAnswer: "Use public transport",
                explanation: "Kirliliği azaltmak için toplu taşıma kullanabilirsiniz ('use public transport')."
            },
            {
                question: "What is a group adventure?",
                options: ["Reading a book", "Team hiking", "Eating lunch", "Sleeping"],
                correctAnswer: "Team hiking",
                explanation: "Takım halinde yürüyüş yapmak ('team hiking') bir grup macerasıdır."
            },
            {
                question: "What is a scientific invention?",
                options: ["Book", "Microscope", "Pen", "Shoe"],
                correctAnswer: "Microscope",
                explanation: "'Microscope' (mikroskop) bilimsel bir icattır."
            },
            {
                question: "What is a dream for children?",
                options: ["Doing homework", "Better schools", "Eating food", "Sleeping"],
                correctAnswer: "Better schools",
                explanation: "Çocuklar için bir hayal daha iyi okullardır ('better schools')."
            },
            {
                question: "What does a scientist do?",
                options: ["Cooks food", "Conducts experiments", "Sings songs", "Drives cars"],
                correctAnswer: "Conducts experiments",
                explanation: "Bir bilim insanı ('scientist') deneyler yapar."
            },
            {
                question: "How do you describe a polite person?",
                options: ["They are rude", "They are polite", "They are tall", "They are shy"],
                correctAnswer: "They are polite",
                explanation: "Kibar birini 'They are polite' diye tarif edersiniz."
            },
            {
                question: "What do you need for football?",
                options: ["Racket", "Ball", "Board", "Bat"],
                correctAnswer: "Ball",
                explanation: "Futbol için bir topa ('ball') ihtiyaç vardır."
            },
            {
                question: "What did an artist create?",
                options: ["Ate food", "Made a painting", "Slept", "Ran"],
                correctAnswer: "Made a painting",
                explanation: "Bir sanatçı bir resim yapmış ('made a painting') olabilir."
            },
            {
                question: "What is a healthy lunch drink?",
                options: ["Soda", "Water", "Coffee", "Tea"],
                correctAnswer: "Water",
                explanation: "'Water' (su) sağlıklı bir öğle yemeği içeceğidir."
            },
            {
                question: "What can you do to save energy?",
                options: ["Watch TV", "Use solar power", "Eat candy", "Sleep"],
                correctAnswer: "Use solar power",
                explanation: "Enerji tasarrufu için güneş enerjisi kullanabilirsiniz ('use solar power')."
            },
            {
                question: "What is a solo adventure?",
                options: ["Reading a book", "Traveling alone", "Eating lunch", "Sleeping"],
                correctAnswer: "Traveling alone",
                explanation: "Tek başına seyahat etmek ('traveling alone') bir solo maceradır."
            },
            {
                question: "What is a digital technology?",
                options: ["Book", "Laptop", "Pen", "Shoe"],
                correctAnswer: "Laptop",
                explanation: "'Laptop' (dizüstü bilgisayar) bir dijital teknolojidir."
            },
            {
                question: "What is a dream for the planet?",
                options: ["Eating food", "Clean oceans", "Sleeping", "Running"],
                correctAnswer: "Clean oceans",
                explanation: "Gezegen için bir hayal temiz okyanuslardır ('clean oceans')."
            },
            {
                question: "What does a journalist do?",
                options: ["Cooks food", "Writes news", "Sings songs", "Drives cars"],
                correctAnswer: "Writes news",
                explanation: "Bir gazeteci ('journalist') haber yazar."
            }
        ],


        advanced: [
            {
                question: "What do you say to persuade a friend?",
                options: ["It’s a great idea!", "Go away!", "I’m tired!", "No way!"],
                correctAnswer: "It’s a great idea!",
                explanation: "Bir arkadaşınızı ikna etmek için 'It’s a great idea!' (Bu harika bir fikir!) diyebilirsiniz."
            },
            {
                question: "What is a renewable energy source?",
                options: ["Coal", "Solar power", "Oil", "Gas"],
                correctAnswer: "Solar power",
                explanation: "Güneş enerjisi ('solar power') yenilenebilir bir enerji kaynağıdır."
            },
            {
                question: "What do you need for a research project?",
                options: ["Spoon", "Sources", "Notebook", "Shoe"],
                correctAnswer: "Sources",
                explanation: "Bir araştırma projesi için kaynaklara ('sources') ihtiyaç duyarsınız."
            },
            {
                question: "What is a natural disaster with lava?",
                options: ["Flood", "Volcano", "Tornado", "Earthquake"],
                correctAnswer: "Volcano",
                explanation: "Lav püskürten doğal afet volkandır ('volcano')."
            },
            {
                question: "What do you do to prevent cyberbullying?",
                options: ["Share everything", "Be respectful online", "Click all links", "Post daily"],
                correctAnswer: "Be respectful online",
                explanation: "Siber zorbalığı önlemek için çevrimiçi ortamda saygılı olmalısınız ('be respectful online')."
            },
            {
                question: "What do teens learn in science class?",
                options: ["Cooking", "Experiments", "Dancing", "Painting"],
                correctAnswer: "Experiments",
                explanation: "Gençler fen dersinde deneyler ('experiments') yapmayı öğrenirler."
            },
            {
                question: "What is an autobiography?",
                options: ["A fictional story", "A person’s own life story", "A game’s rules", "A car’s history"],
                correctAnswer: "A person’s own life story",
                explanation: "Bir otobiyografi, bir kişinin kendi hayat hikayesidir."
            },
            {
                question: "What do you need for a school debate?",
                options: ["Spoon", "Arguments", "Book", "Shoe"],
                correctAnswer: "Arguments",
                explanation: "Okul münazarası için argümanlara ('arguments') ihtiyacınız vardır."
            },
            {
                question: "What do you say to resolve a disagreement?",
                options: ["Let’s find a solution", "I’m always right!", "Go away!", "No way!"],
                correctAnswer: "Let’s find a solution",
                explanation: "Bir anlaşmazlığı çözmek için 'Let’s find a solution' (Bir çözüm bulalım) diyebilirsiniz."
            },
            {
                question: "What is a natural disaster with fire?",
                options: ["Wildfire", "Flood", "Earthquake", "Tornado"],
                correctAnswer: "Wildfire",
                explanation: "Orman yangını ('wildfire') ateşle ilgili bir doğal afettir."
            },
            {
                question: "What do you do to secure your digital identity?",
                options: ["Share passwords", "Use encryption", "Click all links", "Post everything"],
                correctAnswer: "Use encryption",
                explanation: "Dijital kimliğinizi güvence altına almak için şifreleme ('encryption') kullanabilirsiniz."
            },

    {
        question: "He is so _______. One minute he is happy, and the next minute he is sad.",
        options: ["outgoing", "moody", "thoughtful", "easy-going"],
        correctAnswer: "moody",
        explanation: "Ruh hali sürekli değişen, bir anı bir anını tutmayan kişilere 'moody' (kararsız, dengesiz) denir."
    },
    {
        question: "While he _______ in his lab, he accidentally discovered a new chemical.",
        options: ["worked", "works", "was working", "is working"],
        correctAnswer: "was working",
        explanation: "Geçmişte bir eylem devam ederken başka bir eylemin olduğunu belirtmek için Past Continuous Tense ('was working') kullanılır."
    },
    {
        question: "My sister is more _______ than me. She always gets good grades.",
        options: ["hard-working", "lazy", "clumsy", "generous"],
        correctAnswer: "hard-working",
        explanation: "Sürekli iyi notlar alan birisi, diğerinden 'more hard-working' (daha çalışkan) olur."
    },
    {
        question: "He received a Nobel Prize _______ his contributions to science.",
        options: ["with", "at", "for", "in"],
        correctAnswer: "for",
        explanation: "Bir şeyin karşılığında, bir şey için ödül almak 'receive a prize for something' kalıbıyla ifade edilir."
    },
    {
        question: "A person who can be trusted to do something well is _______.",
        options: ["selfish", "unreliable", "reliable", "stubborn"],
        correctAnswer: "reliable",
        explanation: "Bir işi iyi yapacağına güvenilebilecek kişi 'reliable' (güvenilir) biridir."
    },
    {
        question: "He _______ a poor family, but he became a very successful businessman.",
        options: ["came from", "went to", "looked for", "grew up"],
        correctAnswer: "came from",
        explanation: "Birinin kökenini, ailesini belirtirken 'come from' (bir yerden/aileden gelmek) kalıbı kullanılır."
    },
    {
        question: "What were you _______ when I called you yesterday?",
        options: ["do", "did", "doing", "does"],
        correctAnswer: "doing",
        explanation: "Past Continuous Tense ile soru sorarken ana fiil -ing takısı alır."
    },
    {
        question: "She is a very _______ person; she always has new and interesting ideas.",
        options: ["creative", "forgetful", "shy", "serious"],
        correctAnswer: "creative",
        explanation: "Yeni ve ilginç fikirlere sahip olan kişi 'creative' (yaratıcı) olarak tanımlanır."
    },
    {
        question: "He didn't just become famous overnight. He worked hard to _______ his goals.",
        options: ["achieve", "lose", "forget", "fail"],
        correctAnswer: "achieve",
        explanation: "Hedeflere ulaşmak ve onları başarmak için 'achieve goals' ifadesi kullanılır."
    },
    {
        question: "My grandfather has _______ hair and wears glasses.",
        options: ["plump", "short", "bald", "generous"],
        correctAnswer: "bald",
        explanation: "Hiç saçı olmayan durumu tanımlamak için 'bald' (kel) kelimesi kullanılır."
    },

    {
        question: "I think individual sports are _______ than team sports.",
        options: ["more challenging", "challenging", "the most challenging", "challenginger"],
        correctAnswer: "more challenging",
        explanation: "İki tür sporu karşılaştırırken 'challenging' gibi uzun bir sıfatın önüne 'more' gelir."
    },
    {
        question: "The population of pandas is decreasing. They are _______.",
        options: ["extinct", "dangerous", "domestic", "endangered"],
        correctAnswer: "endangered",
        explanation: "Popülasyonu azalan ve yok olma tehlikesiyle karşı karşıya olan hayvanlar 'endangered' (nesli tükenmekte olan) olarak adlandırılır."
    },
    {
        question: "You _______ be quiet in a library. It is a rule.",
        options: ["should", "must", "can", "shouldn't"],
        correctAnswer: "must",
        explanation: "Kütüphanede sessiz olmak bir kural olduğu için, bu zorunluluğu belirtmek için 'must' kullanılır."
    },
    {
        question: "What kind of equipment do you need for _______?",
        options: ["archery", "jogging", "trekking", "sailing"],
        correctAnswer: "archery",
        explanation: "Ok ve yay gerektiren spor 'archery' (okçuluk) sporudur."
    },
    {
        question: "Herbivores are animals that _______ feed on plants.",
        options: ["usually", "never", "rarely", "sometimes"],
        correctAnswer: "usually",
        explanation: "Otobur ('herbivore') hayvanlar genellikle ('usually') bitkilerle beslenir."
    },
    {
        question: "The government _______ take measures to stop illegal hunting.",
        options: ["should", "shouldn't", "mustn't", "can"],
        correctAnswer: "should",
        explanation: "Hükümete bir tavsiyede bulunurken 'should' (yapmalı) kullanılır."
    },
    {
        question: "The score was a _______. Both teams had the same number of points.",
        options: ["win", "defeat", "draw", "victory"],
        correctAnswer: "draw",
        explanation: "İki takımın da aynı sayıda puana sahip olduğu duruma 'draw' (beraberlik) denir."
    },
    {
        question: "The _______ of many wild animals are destroyed by deforestation.",
        options: ["habitats", "species", "populations", "continents"],
        correctAnswer: "habitats",
        explanation: "Ormanların yok edilmesi ('deforestation'), birçok vahşi hayvanın 'habitats' (yaşam alanları) yok eder."
    },
    {
        question: "He has been doing _______ since he was a child.",
        options: ["athletics", "stadium", "championship", "tournament"],
        correctAnswer: "athletics",
        explanation: "Koşu, atlama gibi sporları içeren genel kategoriye 'athletics' (atletizm) denir."
    },
    {
        question: "We _______ cut down trees; on the contrary, we should plant more.",
        options: ["must", "have to", "shouldn't", "can't"],
        correctAnswer: "shouldn't",
        explanation: "Ağaçları kesmememiz gerektiği yönünde bir tavsiye için 'shouldn't' kullanılır."
    },

    {
        question: "I would rather _______ a book than watch that silly sitcom.",
        options: ["read", "to read", "reading", "reads"],
        correctAnswer: "read",
        explanation: "'Would rather' kalıbından sonra gelen fiil her zaman yalın (V1) halde olur."
    },
    {
        question: "A: What about throwing a surprise party for her? B: That _______ a great idea!",
        options: ["is sounding", "sound", "sounds like", "sounded"],
        correctAnswer: "sounds like",
        explanation: "Bir fikrin kulağa nasıl geldiğini belirtmek için 'sounds like' (kulağa ... gibi geliyor) kalıbı kullanılır."
    },
    {
        question: "This discussion programme is about air pollution. I find it very _______.",
        options: ["amusing", "informative", "ridiculous", "dull"],
        correctAnswer: "informative",
        explanation: "Hava kirliliği hakkındaki bir tartışma programı 'informative' (bilgilendirici) olabilir."
    },
    {
        question: "The guests should bring _______ to a wedding party.",
        options: ["decorations", "beverages", "invitations", "presents"],
        correctAnswer: "presents",
        explanation: "Düğün partilerine davetliler genellikle 'presents' (hediyeler) getirir."
    },
    {
        question: "He is not keen on watching TV. He _______ a new episode yesterday, though.",
        options: ["watches", "watched", "was watching", "has watched"],
        correctAnswer: "watched",
        explanation: "'Yesterday' (dün) ifadesi, eylemin geçmişte belirli bir zamanda yapıldığını gösterir, bu yüzden Simple Past Tense kullanılır."
    },
    {
        question: "To _______ a party, you need to decide on a date, place, and guest list first.",
        options: ["refuse", "accept", "join", "organize"],
        correctAnswer: "organize",
        explanation: "Bir parti düzenlemek için 'organize' fiili kullanılır."
    },
    {
        question: "I missed the last _______ of my favorite series. Can I watch it online?",
        options: ["channel", "episode", "commercial", "character"],
        correctAnswer: "episode",
        explanation: "Bir dizinin her bir bölümüne 'episode' (bölüm) denir."
    },
    {
        question: "A: Can you help me with the decorations? B: _______, I'm a bit busy right now.",
        options: ["Sure, I'd love to.", "Why not?", "I'm afraid I can't.", "That sounds great."],
        correctAnswer: "I'm afraid I can't.",
        explanation: "Meşgul olan birisi, yardım teklifini kibarca reddetmek için 'I'm afraid I can't' (Korkarım yapamam) diyebilir."
    },
    {
        question: "There are too many _______ on this channel. The movie is always interrupted.",
        options: ["documentaries", "viewers", "commercials", "episodes"],
        correctAnswer: "commercials",
        explanation: "Filmi sürekli bölen yayınlara 'commercials' (reklamlar) denir."
    },
    {
        question: "The party was a great success. _______ had a wonderful time.",
        options: ["Anybody", "Nobody", "Somebody", "Everybody"],
        correctAnswer: "Everybody",
        explanation: "Parti başarılıysa, 'Everybody' (herkes) harika zaman geçirmiş demektir."
    },
{
                question: "What do teens learn in chemistry class?",
                options: ["Cooking", "Reactions", "Dancing", "Painting"],
                correctAnswer: "Reactions",
                explanation: "Gençler kimya dersinde reaksiyonları ('reactions') öğrenirler."
            },
            {
                question: "What is an editorial?",
                options: ["A fictional story", "An opinion piece", "A game’s rules", "A car’s history"],
                correctAnswer: "An opinion piece",
                explanation: "Bir başyazı ('editorial'), bir fikir yazısıdır."
            },
            {
                question: "What do you need for a school campaign?",
                options: ["Spoon", "Posters", "Book", "Pen"],
                correctAnswer: "Posters",
                explanation: "Bir okul kampanyası için posterlere ('posters') ihtiyacınız vardır."
            },
            {
                question: "What do you say to encourage teamwork?",
                options: ["Let’s work together!", "Do it alone!", "I’m tired!", "No way!"],
                correctAnswer: "Let’s work together!",
                explanation: "Takım çalışmasını teşvik etmek için 'Let’s work together!' (Birlikte çalışalım!) diyebilirsiniz."
            },
            {
                question: "What is a natural disaster with snow?",
                options: ["Blizzard", "Flood", "Earthquake", "Tornado"],
                correctAnswer: "Blizzard",
                explanation: "Kar fırtınası ('blizzard') karla ilgili bir doğal afettir."
            },
            {
                question: "What do you do to avoid online scams?",
                options: ["Click all links", "Check website safety", "Share passwords", "Post everything"],
                correctAnswer: "Check website safety",
                explanation: "Çevrimiçi dolandırıcılıklardan kaçınmak için web sitesi güvenliğini kontrol etmelisiniz ('check website safety')."
            },
            {
                question: "What do teens learn in physics class?",
                options: ["Cooking", "Motion", "Dancing", "Painting"],
                correctAnswer: "Motion",
                explanation: "Gençler fizik dersinde hareketi ('motion') öğrenirler."
            },
            {
                question: "What is a feature article?",
                options: ["A fictional story", "An in-depth story", "A game’s rules", "A car’s history"],
                correctAnswer: "An in-depth story",
                explanation: "Özel bir makale ('feature article'), derinlemesine bir hikayedir."
            },
            {
                question: "What do you need for a debate competition?",
                options: ["Spoon", "Evidence", "Book", "Pen"],
                correctAnswer: "Evidence",
                explanation: "Bir münazara yarışması için kanıtlara ('evidence') ihtiyacınız vardır."
            },
            {
                question: "What do you say to propose a project?",
                options: ["I have an idea!", "Go away!", "I’m tired!", "No way!"],
                correctAnswer: "I have an idea!",
                explanation: "Bir proje önermek için 'I have an idea!' (Bir fikrim var!) diyebilirsiniz."
            },
            {
                question: "What is a natural disaster with wind?",
                options: ["Hurricane", "Flood", "Earthquake", "Wildfire"],
                correctAnswer: "Hurricane",
                explanation: "Kasırga ('hurricane') rüzgarla ilgili bir doğal afettir."
            },
            {
                question: "What do you do to protect your privacy online?",
                options: ["Share everything", "Limit personal info", "Click all links", "Post daily"],
                correctAnswer: "Limit personal info",
                explanation: "Çevrimiçi gizliliğinizi korumak için kişisel bilgileri sınırlamalısınız ('limit personal info')."
            },
{
        question: "A person who is able to make good decisions and give good advice is considered _______.",
        options: ["wise", "foolish", "naive", "immature"],
        correctAnswer: "wise",
        explanation: "İyi kararlar alabilen ve iyi tavsiyeler verebilen bir kişi 'wise' (bilge) olarak kabul edilir."
    },
    {
        question: "While the scientist _______ the experiment, he noticed something unusual.",
        options: ["was conducting", "conducted", "conducts", "is conducting"],
        correctAnswer: "was conducting",
        explanation: "Geçmişte bir eylem (deney yapmak) devam ederken, başka bir eylemin (bir şey fark etmek) olduğunu belirtmek için Past Continuous Tense kullanılır."
    },
    {
        question: "The Amazon rainforest has the most _______ ecosystem in the world.",
        options: ["diverse", "simple", "similar", "plain"],
        correctAnswer: "diverse",
        explanation: "Amazon yağmur ormanları, dünyadaki en 'diverse' (çeşitli, farklı türleri barındıran) ekosisteme sahiptir."
    },
    {
        question: "The government must _______ laws to prevent illegal hunting.",
        options: ["enforce", "ignore", "break", "change"],
        correctAnswer: "enforce",
        explanation: "Hükümet, yasa dışı avlanmayı önlemek için yasaları 'enforce' (uygulamak, yürürlüğe koymak) zorundadır."
    },
    {
        question: "I would rather _______ for a walk in nature than be stuck in traffic.",
        options: ["to go", "going", "go", "went"],
        correctAnswer: "go",
        explanation: "'Would rather + V1 + than + V1' kalıbı, iki eylem arasında tercih belirtmek için kullanılır."
    },
    {
        question: "To celebrate their 25th wedding _______, they threw a big party.",
        options: ["birthday", "anniversary", "graduation", "ceremony"],
        correctAnswer: "anniversary",
        explanation: "Evliliklerinin 25. 'anniversary' (yıl dönümü) için büyük bir parti verdiler."
    },
    {
        question: "A person who is fair and reasonable in their judgments is _______.",
        options: ["biased", "impartial", "subjective", "prejudiced"],
        correctAnswer: "impartial",
        explanation: "Yargılarında adil ve makul olan kişiye 'impartial' (tarafsız, yansız) denir."
    },
    {
        question: "Galileo Galilei made significant _______ to the field of astronomy.",
        options: ["discoveries", "inventions", "contributions", "creations"],
        correctAnswer: "contributions",
        explanation: "Galileo, astronomi alanına önemli 'contributions' (katkılar) yapmıştır."
    },
    {
        question: "The _______ of many species is threatened by climate change.",
        options: ["survival", "extinction", "habitat", "population"],
        correctAnswer: "survival",
        explanation: "İklim değişikliği, birçok türün 'survival' (hayatta kalması) için bir tehdittir."
    },
    {
        question: "The final match of the tournament was a _______ contest between the two best teams.",
        options: ["dull", "tedious", "fierce", "calm"],
        correctAnswer: "fierce",
        explanation: "Turnuvanın final maçı, en iyi iki takım arasında 'fierce' (şiddetli, kıyasıya) bir mücadeleydi."
    },
    {
        question: "I'm not particularly fond of soap operas; I find their plots too _______.",
        options: ["original", "predictable", "exciting", "complex"],
        correctAnswer: "predictable",
        explanation: "Pembe dizileri sevmeyen biri, onların konularını ('plots') çok 'predictable' (tahmin edilebilir) bulabilir."
    },
    {
        question: "Could you please RSVP by Friday so we can finalize the _______ for the caterer?",
        options: ["headcount", "menu", "decorations", "playlist"],
        correctAnswer: "headcount",
        explanation: "Partiye kaç kişinin geleceğini ('headcount') belirlemek için LCV (Lütfen Cevap Veriniz) istenir."
    },
    {
        question: "A person who is relaxed and not easily upset or worried is described as _______.",
        options: ["laid-back", "uptight", "anxious", "moody"],
        correctAnswer: "laid-back",
        explanation: "Rahat ve kolay kolay üzülmeyen veya endişelenmeyen kişi 'laid-back' (rahat, gamsız) olarak tanımlanır."
    },
    {
        question: "He had a brilliant idea while he _______ in the shower.",
        options: ["was singing", "sang", "sings", "is singing"],
        correctAnswer: "was singing",
        explanation: "Geçmişte bir eylem devam ederken (şarkı söylemek) başka bir olayın (fikrin gelmesi) olduğunu belirtmek için Past Continuous Tense kullanılır."
    },
    {
        question: "Reptiles are cold-blooded, which means their body temperature _______ on the environment.",
        options: ["depends", "relies", "insists", "focuses"],
        correctAnswer: "depends",
        explanation: "Sürüngenlerin vücut ısısı çevreye 'depends on' (bağlıdır, bağlı olarak değişir)."
    },
    {
        question: "The player was given a penalty for a _______ during the match.",
        options: ["goal", "foul", "victory", "score"],
        correctAnswer: "foul",
        explanation: "Oyuncu, maç sırasında yaptığı bir 'foul' (faul) nedeniyle ceza aldı."
    },
    {
        question: "The documentary gave a fascinating _______ into the lives of wild animals.",
        options: ["view", "insight", "opinion", "look"],
        correctAnswer: "insight",
        explanation: "Belgesel, vahşi hayvanların yaşamlarına dair büyüleyici bir 'insight' (içgörü, anlayış) sağladı."
    },
    {
        question: "The host and hostess greeted the guests at the _______ of the party.",
        options: ["beginning", "middle", "end", "highlight"],
        correctAnswer: "beginning",
        explanation: "Ev sahipleri, misafirleri partinin 'beginning' (başlangıcı) kısmında karşıladı."
    },
    {
        question: "A _______ person can be trusted to do their job well and thoroughly.",
        options: ["conscientious", "careless", "lazy", "irresponsible"],
        correctAnswer: "conscientious",
        explanation: "İşini iyi ve özenli yapacağına güvenilebilecek kişiye 'conscientious' (vicdanlı, özenli) denir."
    },
    {
        question: "The scientist's _______ was groundbreaking and changed our understanding of physics.",
        options: ["theory", "opinion", "guess", "feeling"],
        correctAnswer: "theory",
        explanation: "Bilim insanının 'theory' (teorisi) çığır açıcıydı ve fizik anlayışımızı değiştirdi."
    },
            {
                question: "What do teens learn in social studies?",
                options: ["Cooking", "Civics", "Dancing", "Painting"],
                correctAnswer: "Civics",
                explanation: "Gençler sosyal bilgiler dersinde yurttaşlık bilgisini ('civics') öğrenirler."
            },
            {
                question: "What is a TED Talk?",
                options: ["A fictional story", "An inspiring speech", "A game’s rules", "A car’s history"],
                correctAnswer: "An inspiring speech",
                explanation: "Bir TED Konuşması, ilham verici bir konuşmadır ('an inspiring speech')."
            },
            {
                question: "What do you need for a volunteering event?",
                options: ["Spoon", "Commitment", "Book", "Pen"],
                correctAnswer: "Commitment",
                explanation: "Bir gönüllülük etkinliği için bağlılığa ('commitment') ihtiyacınız vardır."
            },
            {
                question: "What do you say to express disagreement?",
                options: ["I see your point, but…", "Go away!", "I’m tired!", "No way!"],
                correctAnswer: "I see your point, but…",
                explanation: "Fikrinizi belirtmek için kibarca 'I see your point, but…' (Senin açını anlıyorum, ama…) diyebilirsiniz."
            },
            {
                question: "What is a natural disaster with earth?",
                options: ["Earthquake", "Flood", "Tornado", "Wildfire"],
                correctAnswer: "Earthquake",
                explanation: "Deprem ('earthquake') yer kabuğuyla ilgili bir doğal afettir."
            },
            {
                question: "What do you do to stay safe from hackers?",
                options: ["Share passwords", "Update software", "Click all links", "Post everything"],
                correctAnswer: "Update software",
                explanation: "Bilgisayar korsanlarından güvende kalmak için yazılımınızı güncellemelisiniz ('update software')."
            },
            {
                question: "What do teens learn in language arts?",
                options: ["Cooking", "Writing", "Dancing", "Painting"],
                correctAnswer: "Writing",
                explanation: "Gençler dil sanatları dersinde yazmayı ('writing') öğrenirler."
            },
            {
                question: "What is a webinar?",
                options: ["A fictional story", "An online seminar", "A game’s rules", "A car’s history"],
                correctAnswer: "An online seminar",
                explanation: "Bir webinar, çevrimiçi bir seminerdir."
            },
            {
                question: "What do you need for a school festival?",
                options: ["Spoon", "Planning", "Book", "Pen"],
                correctAnswer: "Planning",
                explanation: "Bir okul festivali için planlama ('planning') yapmanız gerekir."
            },
            {
                question: "What do you say to ask for clarification?",
                options: ["Can you explain?", "Go away!", "I’m tired!", "No way!"],
                correctAnswer: "Can you explain?",
                explanation: "Açıklama istemek için 'Can you explain?' (Açıklayabilir misin?) diye sorabilirsiniz."
            },
            {
                question: "What is a natural disaster with heat?",
                options: ["Heatwave", "Flood", "Earthquake", "Tornado"],
                correctAnswer: "Heatwave",
                explanation: "Sıcak hava dalgası ('heatwave') ısıyla ilgili bir doğal afettir."
            },
            {
                question: "What do you do to promote digital citizenship?",
                options: ["Share everything", "Be ethical online", "Click all links", "Post daily"],
                correctAnswer: "Be ethical online",
                explanation: "Dijital vatandaşlığı teşvik etmek için çevrimiçi ortamda etik olmalısınız ('be ethical online')."
            },
            {
                question: "What do teens learn in computer class?",
                options: ["Cooking", "Programming", "Dancing", "Painting"],
                correctAnswer: "Programming",
                explanation: "Gençler bilgisayar dersinde programlama ('programming') öğrenirler."
            },
            {
                question: "What is a case study?",
                options: ["A fictional story", "A detailed analysis", "A game’s rules", "A car’s history"],
                correctAnswer: "A detailed analysis",
                explanation: "Bir vaka çalışması ('case study'), detaylı bir analizdir."
            },
            {
                question: "What do you need for a leadership role?",
                options: ["Spoon", "Responsibility", "Book", "Pen"],
                correctAnswer: "Responsibility",
                explanation: "Bir liderlik rolü için sorumluluğa ('responsibility') ihtiyacınız vardır."
            },
            {
                question: "What do you say to motivate a group?",
                options: ["We can do this!", "Go away!", "I’m tired!", "No way!"],
                correctAnswer: "We can do this!",
                explanation: "Bir grubu motive etmek için 'We can do this!' (Bunu yapabiliriz!) diyebilirsiniz."
            },
            {
                question: "What is a natural disaster with mud?",
                options: ["Landslide", "Flood", "Earthquake", "Tornado"],
                correctAnswer: "Landslide",
                explanation: "Heyelan ('landslide') çamurla ilgili bir doğal afettir."
            },
            {
                question: "What adjective describes a friend who helps others?",
                options: ["Selfish", "Helpful", "Lazy", "Rude"],
                correctAnswer: "Helpful",
                explanation: "Başkalarına yardım eden bir arkadaşı 'helpful' (yardımsever) olarak tanımlarsınız."
            },
            {
                question: "Which sport requires a high level of teamwork?",
                options: ["Running", "Swimming", "Football", "Skiing"],
                correctAnswer: "Football",
                explanation: "Futbol ('football') yüksek düzeyde takım çalışması gerektirir."
            },
            {
                question: "What is the main purpose of a biography?",
                options: ["To sell cars", "To tell a person’s life story", "To teach math", "To play games"],
                correctAnswer: "To tell a person’s life story",
                explanation: "Bir biyografinin ana amacı bir kişinin hayat hikayesini anlatmaktır."
            },
            {
                question: "What is the healthiest way to stay active?",
                options: ["Watching TV", "Playing video games", "Exercising regularly", "Eating candy"],
                correctAnswer: "Exercising regularly",
                explanation: "Aktif kalmanın en sağlıklı yolu düzenli egzersiz yapmaktır ('exercising regularly')."
            },
            {
                question: "What is a major cause of environmental pollution?",
                options: ["Recycling", "Planting trees", "Burning fossil fuels", "Saving water"],
                correctAnswer: "Burning fossil fuels",
                explanation: "Fosil yakıtların yakılması ('burning fossil fuels') çevre kirliliğinin önemli bir nedenidir."
            },
            {
                question: "What defines an extreme adventure?",
                options: ["Reading quietly", "Bungee jumping", "Eating lunch", "Sleeping"],
                correctAnswer: "Bungee jumping",
                explanation: "'Bungee jumping' ekstrem bir macera olarak tanımlanır."
            },
            {
                question: "Which invention changed communication?",
                options: ["Wheel", "Telephone", "Pen", "Shoe"],
                correctAnswer: "Telephone",
                explanation: "Telefon ('telephone') iletişimi değiştiren bir icattır."
            },
            {
                question: "What is a common dream for the future?",
                options: ["Eating more candy", "Achieving world peace", "Watching TV", "Sleeping"],
                correctAnswer: "Achieving world peace",
                explanation: "Gelecek için yaygın bir hayal dünya barışını sağlamaktır ('achieving world peace')."
            },
            {
                question: "What does a governor do?",
                options: ["Cooks food", "Manages a region", "Sings songs", "Drives cars"],
                correctAnswer: "Manages a region",
                explanation: "Bir vali ('governor') bir bölgeyi yönetir ('manages a region')."
            },
            {
                question: "What adjective describes a person who makes others laugh?",
                options: ["Serious", "Funny", "Lazy", "Rude"],
                correctAnswer: "Funny",
                explanation: "Başkalarını güldüren birini 'funny' (komik) olarak tanımlarsınız."
            },
            {
                question: "Which sport is played individually?",
                options: ["Football", "Volleyball", "Tennis", "Basketball"],
                correctAnswer: "Tennis",
                explanation: "Tenis ('tennis') bireysel olarak oynanan bir spordur."
            },
            {
                question: "What is a key element of a biography?",
                options: ["A car’s history", "A person’s achievements", "A book’s plot", "A game’s rules"],
                correctAnswer: "A person’s achievements",
                explanation: "Bir biyografinin kilit unsurlarından biri kişinin başarılarıdır ('achievements')."
            },
            {
                question: "What is the healthiest food choice?",
                options: ["Chips", "Candy", "Vegetables", "Soda"],
                correctAnswer: "Vegetables",
                explanation: "En sağlıklı yiyecek seçimi sebzelerdir ('vegetables')."
            },
            {
                question: "What can reduce air pollution?",
                options: ["Driving more cars", "Using public transport", "Burning trash", "Cutting trees"],
                correctAnswer: "Using public transport",
                explanation: "Toplu taşıma kullanmak ('using public transport') hava kirliliğini azaltabilir."
            },
            {
                question: "What is a cultural adventure?",
                options: ["Doing homework", "Visiting historical sites", "Eating lunch", "Sleeping"],
                correctAnswer: "Visiting historical sites",
                explanation: "Tarihi yerleri ziyaret etmek ('visiting historical sites') kültürel bir maceradır."
            },
            {
                question: "Which invention helps with scientific research?",
                options: ["Wheel", "Microscope", "Pen", "Shoe"],
                correctAnswer: "Microscope",
                explanation: "Mikroskop ('microscope') bilimsel araştırmalara yardımcı olan bir icattır."
            },
            {
                question: "What is a dream career for many?",
                options: ["Doing homework", "Being a scientist", "Eating food", "Sleeping"],
                correctAnswer: "Being a scientist",
                explanation: "Bilim insanı olmak ('being a scientist') birçok kişi için hayal edilen bir kariyerdir."
            },
            {
                question: "What does a paramedic do?",
                options: ["Cooks food", "Provides emergency care", "Sings songs", "Drives cars"],
                correctAnswer: "Provides emergency care",
                explanation: "Bir paramedik acil bakım sağlar ('provides emergency care')."
            },
            {
                question: "What adjective describes a person who doesn’t talk much?",
                options: ["Talkative", "Quiet", "Tall", "Rude"],
                correctAnswer: "Quiet",
                explanation: "Fazla konuşmayan birini 'quiet' (sessiz) olarak tanımlarsınız."
            },
            {
                question: "Which sport requires endurance?",
                options: ["Football", "Running", "Tennis", "Basketball"],
                correctAnswer: "Running",
                explanation: "Koşu ('running') dayanıklılık gerektiren bir spordur."
            },
            {
                question: "What did a historical figure accomplish?",
                options: ["Ate food", "Changed society", "Slept", "Ran"],
                correctAnswer: "Changed society",
                explanation: "Tarihi bir figür toplumu değiştirmiş ('changed society') olabilir."
            },
            {
                question: "What is the healthiest drink choice?",
                options: ["Soda", "Coffee", "Water", "Tea"],
                correctAnswer: "Water",
                explanation: "En sağlıklı içecek seçimi sudur ('water')."
            },
            {
                question: "What can protect endangered animals?",
                options: ["Hunting", "Creating sanctuaries", "Cutting trees", "Burning trash"],
                correctAnswer: "Creating sanctuaries",
                explanation: "Nesli tükenmekte olan hayvanları korumak için sığınaklar oluşturmak ('creating sanctuaries') gerekir."
            },
            {
                question: "What is a thrilling group adventure?",
                options: ["Reading quietly", "White-water rafting", "Eating lunch", "Sleeping"],
                correctAnswer: "White-water rafting",
                explanation: "'White-water rafting' heyecan verici bir grup macerasıdır."
            },
            {
                question: "Which invention connects the world?",
                options: ["Wheel", "Internet", "Pen", "Shoe"],
                correctAnswer: "Internet",
                explanation: "İnternet dünyayı birbirine bağlayan bir icattır."
            },
            {
                question: "What is a dream for a better planet?",
                options: ["More pollution", "Clean energy", "Watching TV", "Sleeping"],
                correctAnswer: "Clean energy",
                explanation: "Daha iyi bir gezegen için bir hayal temiz enerjidir ('clean energy')."
            },
            {
                question: "What does a city planner do?",
                options: ["Cooks food", "Designs cities", "Sings songs", "Drives cars"],
                correctAnswer: "Designs cities",
                explanation: "Bir şehir plancısı ('city planner') şehirleri tasarlar."
            },
            {
                question: "What adjective describes a person who shares a lot?",
                options: ["Selfish", "Generous", "Lazy", "Rude"],
                correctAnswer: "Generous",
                explanation: "Çok paylaşan birini 'generous' (cömert) olarak tanımlarsınız."
            },
            {
                question: "Which sport is played on ice?",
                options: ["Football", "Ice hockey", "Tennis", "Basketball"],
                correctAnswer: "Ice hockey",
                explanation: "Buz hokeyi ('ice hockey') buz üzerinde oynanır."
            },
            {
                question: "What is a biography’s focus?",
                options: ["A car’s history", "A person’s life events", "A book’s plot", "A game’s rules"],
                correctAnswer: "A person’s life events",
                explanation: "Bir biyografinin odak noktası bir kişinin hayat olaylarıdır."
            },
            {
                question: "What is the healthiest lifestyle choice?",
                options: ["Eating junk food", "Regular exercise", "Watching TV", "Sleeping late"],
                correctAnswer: "Regular exercise",
                explanation: "En sağlıklı yaşam tarzı seçimi düzenli egzersizdir ('regular exercise')."
            },
            {
                question: "What can reduce water pollution?",
                options: ["Dumping waste", "Cleaning rivers", "Burning trash", "Cutting trees"],
                correctAnswer: "Cleaning rivers",
                explanation: "Nehirleri temizlemek ('cleaning rivers') su kirliliğini azaltabilir."
            },
            {
                question: "What is a solo adventure?",
                options: ["Team sports", "Solo hiking", "Group camping", "Eating lunch"],
                correctAnswer: "Solo hiking",
                explanation: "Tek başına yürüyüş yapmak ('solo hiking') bir solo maceradır."
            },
            {
                question: "Which invention aids medical treatment?",
                options: ["Wheel", "X-ray machine", "Pen", "Shoe"],
                correctAnswer: "X-ray machine",
                explanation: "X-ray cihazı ('X-ray machine') tıbbi tedaviye yardımcı olan bir icattır."
            },
            {
                question: "What is a dream for education?",
                options: ["More homework", "Better schools", "Watching TV", "Sleeping"],
                correctAnswer: "Better schools",
                explanation: "Eğitim için bir hayal daha iyi okullardır ('better schools')."
            },
            {
                question: "What does an environmentalist do?",
                options: ["Cooks food", "Protects nature", "Sings songs", "Drives cars"],
                correctAnswer: "Protects nature",
                explanation: "Bir çevreci ('environmentalist') doğayı korur."
            },
            {
                question: "What adjective describes a person who is well-mannered?",
                options: ["Rude", "Polite", "Lazy", "Tall"],
                correctAnswer: "Polite",
                explanation: "Görgü kurallarına uyan birini 'polite' (kibar) olarak tanımlarsınız."
            },
            {
                question: "Which sport requires precision?",
                options: ["Football", "Archery", "Tennis", "Basketball"],
                correctAnswer: "Archery",
                explanation: "Okçuluk ('archery') hassasiyet gerektiren bir spordur."
            },
            {
                question: "What did an inventor contribute?",
                options: ["Ate food", "Created a new device", "Slept", "Ran"],
                correctAnswer: "Created a new device",
                explanation: "Bir mucit yeni bir cihaz yaratmış ('created a new device') olabilir."
            },
            {
                question: "What is the healthiest breakfast choice?",
                options: ["Chips", "Candy", "Oatmeal", "Soda"],
                correctAnswer: "Oatmeal",
                explanation: "En sağlıklı kahvaltı seçimi yulaf ezmesidir ('oatmeal')."
            },
            {
                question: "What can combat climate change?",
                options: ["Burning fossil fuels", "Planting trees", "Dumping waste", "Cutting forests"],
                correctAnswer: "Planting trees",
                explanation: "Ağaç dikmek ('planting trees') iklim değişikliğiyle mücadele edebilir."
            },
            {
                question: "What is a historical adventure?",
                options: ["Watching TV", "Exploring ancient ruins", "Eating lunch", "Sleeping"],
                correctAnswer: "Exploring ancient ruins",
                explanation: "Antik kalıntıları keşfetmek ('exploring ancient ruins') tarihi bir maceradır."
            },
            {
                question: "Which invention revolutionized transportation?",
                options: ["Wheel", "Airplane", "Pen", "Shoe"],
                correctAnswer: "Airplane",
                explanation: "Uçak ('airplane') ulaşımda devrim yaratan bir icattır."
            },
            {
                question: "What is a dream for global health?",
                options: ["More diseases", "Access to medicine", "Watching TV", "Sleeping"],
                correctAnswer: "Access to medicine",
                explanation: "Küresel sağlık için bir hayal ilaca erişimdir ('access to medicine')."
            },
            {
                question: "What does a social worker do?",
                options: ["Cooks food", "Helps communities", "Sings songs", "Drives cars"],
                correctAnswer: "Helps communities",
                explanation: "Bir sosyal hizmet uzmanı ('social worker') topluluklara yardım eder."
            },
            {
                question: "What adjective describes a person who thinks fast?",
                options: ["Slow", "Clever", "Lazy", "Rude"],
                correctAnswer: "Clever",
                explanation: "Hızlı düşünen birini 'clever' (zeki) olarak tanımlarsınız."
            },
            {
                question: "Which sport is played with a shuttlecock?",
                options: ["Football", "Badminton", "Tennis", "Basketball"],
                correctAnswer: "Badminton",
                explanation: "Badminton, tüylü topla ('shuttlecock') oynanan bir spordur."
            },
            {
                question: "What is a biography’s purpose?",
                options: ["To sell products", "To inspire with a life story", "To teach math", "To play games"],
                correctAnswer: "To inspire with a life story",
                explanation: "Bir biyografinin amacı bir hayat hikayesiyle ilham vermektir."
            },
            {
                question: "What is the healthiest dinner choice?",
                options: ["Chips", "Candy", "Grilled chicken", "Soda"],
                correctAnswer: "Grilled chicken",
                explanation: "En sağlıklı akşam yemeği seçimi ızgara tavuktur ('grilled chicken')."
            },
            {
                question: "What can promote recycling?",
                options: ["Dumping waste", "Using bins", "Burning trash", "Cutting trees"],
                correctAnswer: "Using bins",
                explanation: "Geri dönüşüm kutuları kullanmak ('using bins') geri dönüşümü teşvik edebilir."
            },
            {
                question: "What is a nature adventure?",
                options: ["Watching TV", "Camping in a forest", "Eating lunch", "Sleeping"],
                correctAnswer: "Camping in a forest",
                explanation: "Bir ormanda kamp yapmak ('camping in a forest') bir doğa macerasıdır."
            },
            {
                question: "Which invention helps navigation?",
                options: ["Wheel", "GPS", "Pen", "Shoe"],
                correctAnswer: "GPS",
                explanation: "GPS navigasyona yardımcı olan bir icattır."
            },
            {
                question: "What is a dream for equality?",
                options: ["More division", "Fair opportunities", "Watching TV", "Sleeping"],
                correctAnswer: "Fair opportunities",
                explanation: "Eşitlik için bir hayal adil fırsatlardır ('fair opportunities')."
            },
            {
                question: "What does a lawyer do?",
                options: ["Cooks food", "Defends people in court", "Sings songs", "Drives cars"],
                correctAnswer: "Defends people in court",
                explanation: "Bir avukat ('lawyer') mahkemede insanları savunur."
            },
            {
                question: "What adjective describes a person who doesn’t share?",
                options: ["Generous", "Selfish", "Lazy", "Tall"],
                correctAnswer: "Selfish",
                explanation: "Paylaşmayan birini 'selfish' (bencil) olarak tanımlarsınız."
            },
            {
                question: "Which sport requires balance?",
                options: ["Football", "Gymnastics", "Tennis", "Basketball"],
                correctAnswer: "Gymnastics",
                explanation: "Jimnastik ('gymnastics') denge gerektiren bir spordur."
            },
            {
                question: "What did a scientist discover?",
                options: ["Ate food", "Found a new theory", "Slept", "Ran"],
                correctAnswer: "Found a new theory",
                explanation: "Bir bilim insanı yeni bir teori bulmuş ('found a new theory') olabilir."
            },
            {
                question: "What is the healthiest snack choice?",
                options: ["Chips", "Candy", "Nuts", "Soda"],
                correctAnswer: "Nuts",
                explanation: "En sağlıklı atıştırmalık seçimi kuruyemiştir ('nuts')."
            },
            {
                question: "What can reduce deforestation?",
                options: ["Cutting trees", "Protecting forests", "Burning trash", "Dumping waste"],
                correctAnswer: "Protecting forests",
                explanation: "Ormanları korumak ('protecting forests') ormansızlaşmayı azaltabilir."
            },
            {
                question: "What is a space adventure?",
                options: ["Watching TV", "Visiting a planet", "Eating lunch", "Sleeping"],
                correctAnswer: "Visiting a planet",
                explanation: "Bir gezegeni ziyaret etmek ('visiting a planet') bir uzay macerasıdır."
            },
            {
                question: "Which invention stores information?",
                options: ["Wheel", "Computer", "Pen", "Shoe"],
                correctAnswer: "Computer",
                explanation: "Bilgisayar ('computer') bilgi depolayan bir icattır."
            },
            {
                question: "What is a dream for technology?",
                options: ["Broken devices", "Smarter AI", "Watching TV", "Sleeping"],
                correctAnswer: "Smarter AI",
                explanation: "Teknoloji için bir hayal daha akıllı yapay zekadır ('smarter AI')."
            },
            {
                question: "What does an architect do?",
                options: ["Cooks food", "Designs buildings", "Sings songs", "Drives cars"],
                correctAnswer: "Designs buildings",
                explanation: "Bir mimar ('architect') binalar tasarlar."
            },
            {
                question: "What adjective describes a person who works hard?",
                options: ["Lazy", "Hardworking", "Tall", "Rude"],
                correctAnswer: "Hardworking",
                explanation: "Çok çalışan birini 'hardworking' (çalışkan) olarak tanımlarsınız."
            },
            {
                question: "Which sport is played underwater?",
                options: ["Football", "Synchronized swimming", "Tennis", "Basketball"],
                correctAnswer: "Synchronized swimming",
                explanation: "Senkronize yüzme ('synchronized swimming') su altında oynanan bir spordur."
            },
            {
                question: "What is a biography’s value?",
                options: ["To sell cars", "To learn from others’ lives", "To teach math", "To play games"],
                correctAnswer: "To learn from others’ lives",
                explanation: "Bir biyografinin değeri başkalarının hayatlarından öğrenmektir."
            },
            {
                question: "What is the healthiest lunch choice?",
                options: ["Chips", "Candy", "Salad", "Soda"],
                correctAnswer: "Salad",
                explanation: "En sağlıklı öğle yemeği seçimi salatadır ('salad')."
            },
            {
                question: "What can improve ocean health?",
                options: ["Dumping plastic", "Cleaning beaches", "Burning trash", "Cutting trees"],
                correctAnswer: "Cleaning beaches",
                explanation: "Plajları temizlemek ('cleaning beaches') okyanus sağlığını iyileştirebilir."
            },
            {
                question: "What is an urban adventure?",
                options: ["Watching TV", "Exploring a city", "Eating lunch", "Sleeping"],
                correctAnswer: "Exploring a city",
                explanation: "Bir şehri keşfetmek ('exploring a city') bir şehir macerasıdır."
            },
            {
                question: "Which invention powers homes?",
                options: ["Wheel", "Solar panel", "Pen", "Shoe"],
                correctAnswer: "Solar panel",
                explanation: "Güneş paneli ('solar panel') evlere güç veren bir icattır."
            },
            {
                question: "What is a dream for communities?",
                options: ["More conflict", "Stronger unity", "Watching TV", "Sleeping"],
                correctAnswer: "Stronger unity",
                explanation: "Topluluklar için bir hayal daha güçlü birlikteliktir ('stronger unity')."
            },
            {
                question: "What does a teacher do?",
                options: ["Cooks food", "Educates students", "Sings songs", "Drives cars"],
                correctAnswer: "Educates students",
                explanation: "Bir öğretmen ('teacher') öğrencileri eğitir."
            },
            {
                question: "What adjective describes a person who loves new ideas?",
                options: ["Boring", "Creative", "Lazy", "Rude"],
                correctAnswer: "Creative",
                explanation: "Yeni fikirleri seven birini 'creative' (yaratıcı) olarak tanımlarsınız."
            },
            {
                question: "Which sport requires climbing?",
                options: ["Football", "Rock climbing", "Tennis", "Basketball"],
                correctAnswer: "Rock climbing",
                explanation: "Kaya tırmanışı ('rock climbing') tırmanma gerektiren bir spordur."
            },
            {
                question: "What did an explorer discover?",
                options: ["Ate food", "Found a new land", "Slept", "Ran"],
                correctAnswer: "Found a new land",
                explanation: "Bir kaşif yeni bir yer bulmuş ('found a new land') olabilir."
            },
            {
                question: "What is the healthiest breakfast drink?",
                options: ["Soda", "Coffee", "Milk", "Tea"],
                correctAnswer: "Milk",
                explanation: "En sağlıklı kahvaltı içeceği süttür ('milk')."
            },
            {
                question: "What can promote sustainability?",
                options: ["Using fossil fuels", "Renewable energy", "Dumping waste", "Cutting trees"],
                correctAnswer: "Renewable energy",
                explanation: "Yenilenebilir enerji ('renewable energy') sürdürülebilirliği teşvik edebilir."
            },
            {
                question: "What is a wildlife adventure?",
                options: ["Watching TV", "Safari tour", "Eating lunch", "Sleeping"],
                correctAnswer: "Safari tour",
                explanation: "Safari turu ('safari tour') bir yaban hayatı macerasıdır."
            },
            {
                question: "Which invention improves education?",
                options: ["Wheel", "Tablet", "Pen", "Shoe"],
                correctAnswer: "Tablet",
                explanation: "Tablet eğitimi geliştiren bir icattır."
            },
            {
                question: "What is a dream for innovation?",
                options: ["Old machines", "New solutions", "Watching TV", "Sleeping"],
                correctAnswer: "New solutions",
                explanation: "İnovasyon için bir hayal yeni çözümlerdir ('new solutions')."
            },
            {
                question: "What does a vet do?",
                options: ["Cooks food", "Treats animals", "Sings songs", "Drives cars"],
                correctAnswer: "Treats animals",
                explanation: "Bir veteriner ('vet') hayvanları tedavi eder."
            },
            {
                question: "What adjective describes a person who is always late?",
                options: ["Punctual", "Late", "Lazy", "Tall"],
                correctAnswer: "Late",
                explanation: "Her zaman geç kalan birini 'late' (geç kalan) olarak tanımlarsınız."
            },
            {
                question: "Which sport is played with a bow?",
                options: ["Football", "Archery", "Tennis", "Basketball"],
                correctAnswer: "Archery",
                explanation: "Okçuluk ('archery') yayla oynanan bir spordur."
            },
            {
                question: "What is a biography’s impact?",
                options: ["To confuse readers", "To inspire people", "To teach math", "To play games"],
                correctAnswer: "To inspire people",
                explanation: "Bir biyografinin etkisi insanlara ilham vermektir ('to inspire people')."
            },
            {
                question: "What is the healthiest dinner drink?",
                options: ["Soda", "Coffee", "Water", "Tea"],
                correctAnswer: "Water",
                explanation: "En sağlıklı akşam yemeği içeceği sudur ('water')."
            },
            {
                question: "What can reduce global warming?",
                options: ["Burning coal", "Using wind energy", "Dumping waste", "Cutting trees"],
                correctAnswer: "Using wind energy",
                explanation: "Rüzgar enerjisi kullanmak ('using wind energy') küresel ısınmayı azaltabilir."
            },
            {
                question: "What is a culinary adventure?",
                options: ["Watching TV", "Trying new foods", "Eating lunch", "Sleeping"],
                correctAnswer: "Trying new foods",
                explanation: "Yeni yiyecekler denemek ('trying new foods') bir mutfak macerasıdır."
            },
            {
                question: "Which invention enhances safety?",
                options: ["Wheel", "Seatbelt", "Pen", "Shoe"],
                correctAnswer: "Seatbelt",
                explanation: "Emniyet kemeri ('seatbelt') güvenliği artıran bir icattır."
            },
            {
                question: "What is a dream for humanity?",
                options: ["More wars", "Global cooperation", "Watching TV", "Sleeping"],
                correctAnswer: "Global cooperation",
                explanation: "İnsanlık için bir hayal küresel işbirliğidir ('global cooperation')."
            },
            {
                question: "What does a scientist do?",
                options: ["Cooks food", "Researches new ideas", "Sings songs", "Drives cars"],
                correctAnswer: "Researches new ideas",
                explanation: "Bir bilim insanı ('scientist') yeni fikirler araştırır."
            },
            {
                question: "What adjective describes a person who loves adventure?",
                options: ["Boring", "Adventurous", "Lazy", "Rude"],
                correctAnswer: "Adventurous",
                explanation: "Macerayı seven birini 'adventurous' (maceracı) olarak tanımlarsınız."
            },
            {
                question: "Which sport is played on a court?",
                options: ["Football", "Basketball", "Swimming", "Skiing"],
                correctAnswer: "Basketball",
                explanation: "Basketbol ('basketball') bir sahada ('court') oynanır."
            },
            {
                question: "What did a leader inspire?",
                options: ["Ate food", "Positive change", "Slept", "Ran"],
                correctAnswer: "Positive change",
                explanation: "Bir lider pozitif değişime ilham vermiş ('inspired positive change') olabilir."
            },
            {
                question: "What is the healthiest snack drink?",
                options: ["Soda", "Coffee", "Juice", "Tea"],
                correctAnswer: "Juice",
                explanation: "En sağlıklı atıştırmalık içeceği meyve suyudur ('juice')."
            },
            {
                question: "What can save endangered species?",
                options: ["Hunting", "Conservation programs", "Dumping waste", "Cutting trees"],
                correctAnswer: "Conservation programs",
                explanation: "Koruma programları ('conservation programs') nesli tükenmekte olan türleri kurtarabilir."
            },
            {
                question: "What is a virtual adventure?",
                options: ["Watching TV", "Virtual reality tour", "Eating lunch", "Sleeping"],
                correctAnswer: "Virtual reality tour",
                explanation: "Sanal gerçeklik turu ('virtual reality tour') bir sanal maceradır."
            },
            {
                question: "Which invention supports health?",
                options: ["Wheel", "Vaccine", "Pen", "Shoe"],
                correctAnswer: "Vaccine",
                explanation: "Aşı ('vaccine') sağlığı destekleyen bir icattır."
            },
            {
                question: "What is a dream for exploration?",
                options: ["Staying home", "Discovering space", "Watching TV", "Sleeping"],
                correctAnswer: "Discovering space",
                explanation: "Keşif için bir hayal uzayı keşfetmektir ('discovering space')."
            },
            {
                question: "What does a journalist do?",
                options: ["Cooks food", "Reports news", "Sings songs", "Drives cars"],
                correctAnswer: "Reports news",
                explanation: "Bir gazeteci ('journalist') haberleri bildirir."
            }

        ]    },
        

        8: {
        beginner: [
            {
                question: "What do you say to greet a friend?",
                options: ["See you!", "Hi!", "Sorry!", "Thank you!"],
                correctAnswer: "Hi!",
                explanation: "Bir arkadaşı selamlarken samimi bir ifade olan 'Hi!' (Selam!) kullanılır."
            },
            {
                question: "What is a place to watch movies?",
                options: ["Cinema", "Library", "Park", "Kitchen"],
                correctAnswer: "Cinema",
                explanation: "'Cinema' (sinema), film izlemek için gidilen bir yerdir."
            },
            {
                question: "What is the opposite of 'fast'?",
                options: ["Slow", "Big", "High", "Long"],
                correctAnswer: "Slow",
                explanation: "'Fast' (hızlı) kelimesinin zıttı 'slow' (yavaş) kelimesidir."
            },
            {
                question: "What do you eat for a snack?",
                options: ["Fruit", "Book", "Pen", "Shoe"],
                correctAnswer: "Fruit",
                explanation: "Atıştırmalık olarak 'fruit' (meyve) sağlıklı bir seçenektir."
            },
            {
                question: "What is a type of weather?",
                options: ["Sunny", "Car", "Book", "Desk"],
                correctAnswer: "Sunny",
                explanation: "'Sunny' (güneşli), bir hava durumu türüdür."
            },
            {
                question: "What do you wear in rainy weather?",
                options: ["T-shirt", "Raincoat", "Shorts", "Sunglasses"],
                correctAnswer: "Raincoat",
                explanation: "Yağmurlu havada ıslanmamak için 'raincoat' (yağmurluk) giyilir."
            },
            {
                question: "What is a place to study?",
                options: ["Kitchen", "Library", "Gym", "Mall"],
                correctAnswer: "Library",
                explanation: "'Library' (kütüphane), ders çalışmak için uygun bir yerdir."
            },
            {
                question: "What do you use to take photos?",
                options: ["Spoon", "Camera", "Ball", "Pen"],
                correctAnswer: "Camera",
                explanation: "Fotoğraf çekmek için 'camera' (kamera) kullanılır."
            },
            {
                question: "What is a type of dessert?",
                options: ["Cake", "Car", "Book", "Shoe"],
                correctAnswer: "Cake",
                explanation: "'Cake' (pasta), bir tatlı türüdür."
            },
            {
                question: "What do you do at a beach?",
                options: ["Study", "Swim", "Cook", "Sleep"],
                correctAnswer: "Swim",
                explanation: "Plajda ('beach') yüzmek ('swim') yaygın bir aktivitedir."
            },
            {
                question: "What is the opposite of 'loud'?",
                options: ["Quiet", "Fast", "Big", "Tall"],
                correctAnswer: "Quiet",
                explanation: "'Loud' (yüksek sesli) kelimesinin zıttı 'quiet' (sessiz) kelimesidir."
            },
            {
                question: "What do you drink when you’re thirsty?",
                options: ["Water", "Soda", "Ice cream", "Soup"],
                correctAnswer: "Water",
                explanation: "Susadığınızda 'water' (su) içersiniz."
            },
            {
                question: "What is a place to play sports?",
                options: ["Field", "Library", "Kitchen", "Mall"],
                correctAnswer: "Field",
                explanation: "'Field' (saha), spor yapmak için bir alandır."
            },
            {
                question: "What do you wear in winter?",
                options: ["Swimsuit", "Scarf", "T-shirt", "Shorts"],
                correctAnswer: "Scarf",
                explanation: "Kışın boynunuza 'scarf' (atkı) takarsınız."
            },
{
        question: "A person who supports you and is always there for you is a _______ friend.",
        options: ["bad", "true", "new", "old"],
        correctAnswer: "true",
        explanation: "Sizi destekleyen ve her zaman yanınızda olan kişi 'true' (gerçek) bir arkadaştır."
    },
    {
        question: "I love wearing _______ clothes like T-shirts and jeans.",
        options: ["formal", "casual", "smart", "fancy"],
        correctAnswer: "casual",
        explanation: "Tişört ve kot pantolon gibi günlük, rahat kıyafetlere 'casual' (gündelik) denir."
    },
    {
        question: "First, _______ the onion into small pieces.",
        options: ["boil", "fry", "chop", "bake"],
        correctAnswer: "chop",
        explanation: "Bir tarife başlarken genellikle soğan 'chop' (doğramak) edilir."
    },
    {
        question: "Could you hold on a moment? The line is _______.",
        options: ["good", "bad", "busy", "clear"],
        correctAnswer: "busy",
        explanation: "Telefonda konuştuğunuz hat meşgulse, 'The line is busy' dersiniz."
    },
    {
        question: "I use the internet to _______ with my friends online.",
        options: ["eat", "sleep", "chat", "run"],
        correctAnswer: "chat",
        explanation: "İnterneti arkadaşlarınızla çevrimiçi 'chat' (sohbet etmek) için kullanırsınız."
    },
    {
        question: "Rock climbing is an _______ sport.",
        options: ["easy", "boring", "extreme", "indoor"],
        correctAnswer: "extreme",
        explanation: "Kaya tırmanışı bir 'extreme' (ekstrem, macera) sporudur."
    },
    {
        question: "When I go on holiday, I always buy a _______ for my family.",
        options: ["ticket", "hotel", "souvenir", "map"],
        correctAnswer: "souvenir",
        explanation: "Tatile gittiğinizde aileniz için 'souvenir' (hediyelik eşya) alırsınız."
    },
    {
        question: "It's my turn to do the _______ today. I need to wash the plates.",
        options: ["laundry", "dishes", "shopping", "ironing"],
        correctAnswer: "dishes",
        explanation: "Tabakları yıkama işine 'do the dishes' (bulaşıkları yıkamak) denir."
    },
    {
        question: "A _______ is a person who studies science.",
        options: ["scientist", "artist", "musician", "writer"],
        correctAnswer: "scientist",
        explanation: "Bilimle uğraşan kişiye 'scientist' (bilim insanı) denir."
    },
    {
        question: "A flood is a type of _______.",
        options: ["party", "holiday", "natural disaster", "celebration"],
        correctAnswer: "natural disaster",
        explanation: "Sel ('flood'), bir 'natural disaster' (doğal afet) türüdür."
    },
    {
        question: "A good friend should be _______ and always tell the truth.",
        options: ["dishonest", "honest", "rude", "selfish"],
        correctAnswer: "honest",
        explanation: "İyi bir arkadaş 'honest' (dürüst) olmalı ve her zaman doğruyu söylemelidir."
    },
    {
        question: "She is not keen on pop music. She thinks it's _______.",
        options: ["great", "terrific", "awful", "fantastic"],
        correctAnswer: "awful",
        explanation: "Pop müziği sevmeyen biri, onun 'awful' (berbat) olduğunu düşünebilir."
    },
    {
        question: "You need to _______ the potatoes before you can eat them.",
        options: ["peel", "cut", "cook", "wash"],
        correctAnswer: "cook",
        explanation: "Patatesleri yemeden önce onları 'cook' (pişirmek) gerekir."
    },
    {
        question: "Can I take a _______? I need to write down your number.",
        options: ["call", "message", "note", "word"],
        correctAnswer: "message",
        explanation: "Telefonda birinden mesaj almak için 'Can I take a message?' diye sorulur."
    },
    {
        question: "You need a password to _______ to your email account.",
        options: ["log out", "log in", "sign up", "delete"],
        correctAnswer: "log in",
        explanation: "E-posta hesabınıza 'log in' (giriş yapmak) için bir şifreye ihtiyacınız vardır."
    },
    {
        question: "You need a helmet for _______. It can be dangerous.",
        options: ["swimming", "cycling", "running", "walking"],
        correctAnswer: "cycling",
        explanation: "Bisiklete binerken ('cycling') güvenlik için kask takmak önemlidir."
    },
    {
        question: "The Blue Mosque is a famous _______ in Istanbul.",
        options: ["tourist attraction", "hotel", "restaurant", "shop"],
        correctAnswer: "tourist attraction",
        explanation: "Sultanahmet Camii, İstanbul'da ünlü bir 'tourist attraction' (turistik mekan) dır."
    },
    {
        question: "Please _______ your bed before you leave the room.",
        options: ["do", "make", "set", "clean"],
        correctAnswer: "make",
        explanation: "Odadan çıkmadan önce yatağını yapmak ('make your bed') bir ev kuralı olabilir."
    },
    {
        question: "A laboratory is a place where scientists do _______.",
        options: ["homework", "experiments", "shopping", "sports"],
        correctAnswer: "experiments",
        explanation: "Laboratuvar, bilim insanlarının 'experiments' (deneyler) yaptığı yerdir."
    },
    {
        question: "A _______ is a very strong wind.",
        options: ["rain", "storm", "snow", "fog"],
        correctAnswer: "storm",
        explanation: "Çok güçlü bir rüzgara genellikle 'storm' (fırtına) eşlik eder."
    },
    {
        question: "My best friend and I have a lot in _______.",
        options: ["common", "different", "similar", "same"],
        correctAnswer: "common",
        explanation: "'Have a lot in common' (çok ortak noktası olmak) bir deyimdir."
    },
    {
        question: "I can't stand listening to heavy metal. It's too _______.",
        options: ["quiet", "loud", "slow", "nice"],
        correctAnswer: "loud",
        explanation: "Heavy metal müziğe katlanamayan biri, onu çok 'loud' (yüksek sesli) bulabilir."
    },
    {
        question: "You should add a pinch of _______ to the soup.",
        options: ["sugar", "salt", "flour", "oil"],
        correctAnswer: "salt",
        explanation: "Çorbaya lezzet katmak için genellikle bir tutam 'salt' (tuz) eklenir."
    },
    {
        question: "I'll call you _______ later. I'm busy now.",
        options: ["up", "on", "back", "off"],
        correctAnswer: "back",
        explanation: "Daha sonra geri aramak için 'call back' phrasal verb'ü kullanılır."
    },
    {
        question: "I need to _______ this file from the internet.",
        options: ["upload", "download", "attach", "delete"],
        correctAnswer: "download",
        explanation: "İnternetten bir dosyayı bilgisayarınıza indirmek 'download' etmektir."
    },
    {
        question: "Bungee jumping looks _______. I want to try it.",
        options: ["boring", "safe", "thrilling", "dull"],
        correctAnswer: "thrilling",
        explanation: "Bungee jumping denemek isteyen biri, onun 'thrilling' (heyecan verici) olduğunu düşünür."
    },
    {
        question: "What is the _______ in your country? Is it hot in summer?",
        options: ["cuisine", "climate", "location", "language"],
        correctAnswer: "climate",
        explanation: "Bir ülkenin hava durumu koşulları 'climate' (iklim) olarak adlandırılır."
    },
    {
        question: "It's your responsibility to take out the _______.",
        options: ["dog", "dishes", "garbage", "laundry"],
        correctAnswer: "garbage",
        explanation: "Çöpü dışarı çıkarmak için 'take out the garbage' ifadesi kullanılır."
    },
    {
        question: "A _______ is used to see things that are very far away, like stars.",
        options: ["microscope", "telescope", "camera", "magnifying glass"],
        correctAnswer: "telescope",
        explanation: "Yıldızlar gibi çok uzaktaki şeyleri görmek için 'telescope' (teleskop) kullanılır."
    },
    {
        question: "During an earthquake, you should stay away from _______.",
        options: ["tables", "walls", "windows", "doorways"],
        correctAnswer: "windows",
        explanation: "Deprem sırasında cam kırılabileceği için 'windows' (pencereler) den uzak durmalısınız."
    },
    {
        question: "He is very _______. He always supports his friends.",
        options: ["loyal", "selfish", "jealous", "mean"],
        correctAnswer: "loyal",
        explanation: "Arkadaşlarını her zaman destekleyen kişi 'loyal' (sadık) biridir."
    },
    {
        question: "I prefer _______ clothes because they are comfortable.",
        options: ["smart", "formal", "casual", "tight"],
        correctAnswer: "casual",
        explanation: "Rahat olduğu için 'casual' (gündelik) kıyafetler tercih edilebilir."
    },
    {
        question: "To make a cake, you need to mix the _______ in a bowl.",
        options: ["recipes", "ingredients", "utensils", "dishes"],
        correctAnswer: "ingredients",
        explanation: "Kek yapmak için 'ingredients' (malzemeler) bir kapta karıştırılır."
    },
    {
        question: "Sorry, I can't hear you. Can you speak _______?",
        options: ["up", "down", "on", "off"],
        correctAnswer: "up",
        explanation: "Karşı tarafın sesini yükseltmesini istemek için 'speak up' (daha yüksek sesle konuş) denir."
    },
    {
        question: "Don't forget to _______ from your account when you finish.",
        options: ["log in", "log out", "sign in", "register"],
        correctAnswer: "log out",
        explanation: "İşiniz bittiğinde hesabınızdan 'log out' (çıkış yapmak) yapmalısınız."
    },
    {
        question: "Kayaking on a wild river can be very _______.",
        options: ["relaxing", "challenging", "boring", "easy"],
        correctAnswer: "challenging",
        explanation: "Vahşi bir nehirde kano yapmak 'challenging' (zorlu) olabilir."
    },
    {
        question: "Cappadocia is famous for its _______ hotels.",
        options: ["beach", "cave", "city", "luxury"],
        correctAnswer: "cave",
        explanation: "Kapadokya, 'cave' (mağara) otelleriyle ünlüdür."
    },
    {
        question: "My mother is responsible for _______ the laundry.",
        options: ["making", "doing", "setting", "taking"],
        correctAnswer: "doing",
        explanation: "Çamaşır yıkamak için 'doing the laundry' kalıbı kullanılır."
    },
    {
        question: "Scientists make a _______ before they start an experiment.",
        options: ["conclusion", "result", "hypothesis", "fact"],
        correctAnswer: "hypothesis",
        explanation: "Bilim insanları bir deneye başlamadan önce bir 'hypothesis' (hipotez, varsayım) oluşturur."
    },
    {
        question: "A long period with no rain is a _______.",
        options: ["flood", "drought", "storm", "blizzard"],
        correctAnswer: "drought",
        explanation: "Yağmursuz geçen uzun döneme 'drought' (kuraklık) denir."
    },
    {
        question: "A true friend _______ you up when you are sad.",
        options: ["backs", "lets", "gets", "puts"],
        correctAnswer: "backs",
        explanation: "Gerçek bir arkadaş, üzgün olduğunuzda size 'backs you up' (destek olur)."
    },
    {
        question: "That music is really _______. I love the rhythm.",
        options: ["awful", "terrific", "unbearable", "loud"],
        correctAnswer: "terrific",
        explanation: "Ritmini sevdiğiniz bir müzik için 'terrific' (harika) sıfatını kullanabilirsiniz."
    },
    {
        question: "You can _______ the cheese on top of the pasta.",
        options: ["pour", "grate", "slice", "mix"],
        correctAnswer: "grate",
        explanation: "Makarnanın üzerine peyniri 'grate' (rendelemek) edebilirsiniz."
    },
    {
        question: "She left a _______ on my voicemail because I didn't answer.",
        options: ["call", "text", "message", "note"],
        correctAnswer: "message",
        explanation: "Cevap vermediğinizde, arayan kişi sesli posta kutunuza 'message' (mesaj) bırakabilir."
    },
    {
        question: "You can _______ with people all over the world via the internet.",
        options: ["communicate", "disconnect", "argue", "fight"],
        correctAnswer: "communicate",
        explanation: "İnternet aracılığıyla dünyanın her yerinden insanlarla 'communicate' (iletişim kurmak) edebilirsiniz."
    },
    {
        question: "You must wear a life jacket for _______.",
        options: ["rafting", "hiking", "climbing", "caving"],
        correctAnswer: "rafting",
        explanation: "Rafting yaparken güvenlik için can yeleği giymelisiniz."
    },
{
                question: "What is a type of drink?",
                options: ["Juice", "Book", "Pen", "Shoe"],
                correctAnswer: "Juice",
                explanation: "'Juice' (meyve suyu) bir içecek türüdür."
            },
            {
                question: "What do you do at a picnic?",
                options: ["Work", "Eat", "Study", "Sleep"],
                correctAnswer: "Eat",
                explanation: "Piknikte temel aktivite yemek yemektir ('eat')."
            },
            {
                question: "What is the opposite of 'happy'?",
                options: ["Sad", "Big", "Fast", "Tall"],
                correctAnswer: "Sad",
                explanation: "'Happy' (mutlu) kelimesinin zıttı 'sad' (üzgün) kelimesidir."
            },
            {
                question: "What do you eat for lunch?",
                options: ["Soup", "Book", "Pen", "Shoe"],
                correctAnswer: "Soup",
                explanation: "Öğle yemeğinde 'soup' (çorba) içilebilir."
            },
            {
                question: "What is a place to buy food?",
                options: ["Market", "Zoo", "Park", "Gym"],
                correctAnswer: "Market",
                explanation: "'Market', yiyecek satın alabileceğiniz bir yerdir."
            },
            {
                question: "What do you use to listen to music?",
                options: ["Spoon", "Headphones", "Ball", "Pen"],
                correctAnswer: "Headphones",
                explanation: "Müzik dinlemek için 'headphones' (kulaklık) kullanılır."
            },
            {
                question: "What is a type of pet?",
                options: ["Dog", "Book", "Car", "Tree"],
                correctAnswer: "Dog",
                explanation: "'Dog' (köpek) bir evcil hayvan ('pet') türüdür."
            },
            {
                question: "What do you do at a concert?",
                options: ["Work", "Listen to music", "Study", "Sleep"],
                correctAnswer: "Listen to music",
                explanation: "Konserde müzik dinlenir ('listen to music')."
            },
            {
                question: "What is the opposite of 'long'?",
                options: ["Short", "Fast", "High", "Big"],
                correctAnswer: "Short",
                explanation: "'Long' (uzun) kelimesinin zıttı 'short' (kısa) kelimesidir."
            },
            {
                question: "What do you drink after exercise?",
                options: ["Water", "Soda", "Ice cream", "Soup"],
                correctAnswer: "Water",
                explanation: "Egzersiz sonrası vücudun su ihtiyacını karşılamak için 'water' (su) içilir."
            },
            {
                question: "What is a place to relax?",
                options: ["Park", "Library", "Market", "School"],
                correctAnswer: "Park",
                explanation: "'Park', dinlenmek ve rahatlamak için gidilen bir yerdir."
            },
            {
                question: "What do you wear on your hands?",
                options: ["Hat", "Gloves", "Shoes", "Jacket"],
                correctAnswer: "Gloves",
                explanation: "Ellerimize 'gloves' (eldiven) takarız."
            },
            {
                question: "What is a type of meal?",
                options: ["Breakfast", "Book", "Pen", "Shoe"],
                correctAnswer: "Breakfast",
                explanation: "'Breakfast' (kahvaltı) bir öğün türüdür."
            },
            {
                question: "What do you do at a museum?",
                options: ["Cook", "See exhibits", "Study", "Sleep"],
                correctAnswer: "See exhibits",
                explanation: "Müzede sergilenen eserleri görürsünüz ('see exhibits')."
            },
            {
                question: "What is the opposite of 'bright'?",
                options: ["Dark", "Big", "Fast", "Tall"],
                correctAnswer: "Dark",
                explanation: "'Bright' (parlak) kelimesinin zıttı 'dark' (karanlık) kelimesidir."
            },
            {
                question: "What do you eat for dinner?",
                options: ["Rice", "Book", "Pen", "Shoe"],
                correctAnswer: "Rice",
                explanation: "Akşam yemeğinde 'rice' (pilav) yenebilir."
            },
            {
                question: "What is a place to hike?",
                options: ["Mountain", "Library", "Mall", "School"],
                correctAnswer: "Mountain",
                explanation: "'Mountain' (dağ), doğa yürüyüşü ('hike') için uygun bir yerdir."
            },
            {
                question: "What do you use to read books?",
                options: ["Spoon", "Glasses", "Ball", "Pen"],
                correctAnswer: "Glasses",
                explanation: "Gözleri iyi görmeyenler kitap okumak için 'glasses' (gözlük) kullanır."
            },
            {
                question: "What is a type of tree?",
                options: ["Oak", "Book", "Car", "Shoe"],
                correctAnswer: "Oak",
                explanation: "'Oak' (meşe) bir ağaç türüdür."
            },
            {
                question: "What do you do at a party?",
                options: ["Work", "Dance", "Study", "Sleep"],
                correctAnswer: "Dance",
                explanation: "Partilerde genellikle dans edilir ('dance')."
            },
{
        question: "A good friend always tells the truth. He or she is _______.",
        options: ["honest", "selfish", "jealous", "unreliable"],
        correctAnswer: "honest",
        explanation: "Her zaman doğruyu söyleyen bir kişi 'honest' (dürüst) olarak tanımlanır."
    },
    {
        question: "You can _______ a true friend. They always support you.",
        options: ["argue with", "count on", "ignore", "lie to"],
        correctAnswer: "count on",
        explanation: "'Count on' (güvenmek, bel bağlamak) deyimi, gerçek bir arkadaş için kullanılır."
    },
    {
        question: "I can't stand listening to rap music. I think it's _______.",
        options: ["terrific", "trendy", "unbearable", "great"],
        correctAnswer: "unbearable",
        explanation: "Katlanamadığınız bir müzik türü sizin için 'unbearable' (dayanılmaz) olabilir."
    },
    {
        question: "She always follows the latest fashion. She likes wearing _______ clothes.",
        options: ["casual", "formal", "old", "trendy"],
        correctAnswer: "trendy",
        explanation: "En son modayı takip eden biri 'trendy' (moda, son moda) kıyafetler giyer."
    },
    {
        question: "First, _______ the potatoes and then boil them.",
        options: ["peel", "fry", "bake", "grill"],
        correctAnswer: "peel",
        explanation: "Patatesleri haşlamadan önce genellikle kabuklarını soymak ('peel') gerekir."
    },
    {
        question: "A list of instructions on how to prepare a food is a _______.",
        options: ["menu", "recipe", "bill", "shopping list"],
        correctAnswer: "recipe",
        explanation: "Bir yemeğin nasıl hazırlanacağını anlatan talimatlar listesine 'recipe' (yemek tarifi) denir."
    },
    {
        question: "Which one is a kitchen tool?",
        options: ["Sofa", "Bed", "Knife", "Book"],
        correctAnswer: "Knife",
        explanation: "'Knife' (bıçak), bir mutfak aletidir."
    },
    {
        question: "A: Hello, can I speak to John? B: _______ a moment, please.",
        options: ["Hang up", "Call back", "Hold on", "Speak up"],
        correctAnswer: "Hold on",
        explanation: "Telefonda birini bekletmek için 'Hold on' (Hatta kalın, bekleyin) denir."
    },
    {
        question: "If the line is busy, you should _______ later.",
        options: ["hang up", "call back", "pick up", "text"],
        correctAnswer: "call back",
        explanation: "Hat meşgulse, daha sonra 'call back' (geri aramak) yapmanız gerekir."
    },
    {
        question: "To use your account, you need a username and a _______.",
        options: ["link", "file", "password", "website"],
        correctAnswer: "password",
        explanation: "Hesabınıza girmek için bir kullanıcı adı ve 'password' (şifre) gerekir."
    },
    {
        question: "You can _______ to your friends using social media.",
        options: ["delete", "connect", "log out", "download"],
        correctAnswer: "connect",
        explanation: "Sosyal medya kullanarak arkadaşlarınızla 'connect' (bağlantı kurmak) edebilirsiniz."
    },
    {
        question: "Which one is an extreme sport?",
        options: ["Walking", "Reading", "Rafting", "Watching TV"],
        correctAnswer: "Rafting",
        explanation: "'Rafting', bir ekstrem (macera) sporudur."
    },
    {
        question: "You need a helmet for your _______ when you go rock climbing.",
        options: ["fun", "safety", "health", "hobby"],
        correctAnswer: "safety",
        explanation: "Kaya tırmanışı yaparken 'safety' (güvenlik) için kask takmak gerekir."
    },
    {
        question: "A place with a lot of historical buildings is _______.",
        options: ["modern", "ancient", "new", "dull"],
        correctAnswer: "ancient",
        explanation: "Çok sayıda tarihi binanın olduğu yerler 'ancient' (antik) olarak tanımlanır."
    },
    {
        question: "I bought a _______ to remember my holiday.",
        options: ["ticket", "souvenir", "hotel", "map"],
        correctAnswer: "souvenir",
        explanation: "Tatilinizi hatırlamak için 'souvenir' (hediyelik eşya) alırsınız."
    },
    {
        question: "It is your responsibility to _______ your bed every morning.",
        options: ["do", "make", "set", "clean"],
        correctAnswer: "make",
        explanation: "Yatağını toplamak/düzeltmek için 'make your bed' ifadesi kullanılır."
    },
    {
        question: "My father is responsible for _______ the lawn.",
        options: ["washing", "cooking", "mowing", "ironing"],
        correctAnswer: "mowing",
        explanation: "Bahçedeki çimleri biçmek için 'mowing the lawn' ifadesi kullanılır."
    },
    {
        question: "A person who does experiments is a _______.",
        options: ["teacher", "doctor", "scientist", "writer"],
        correctAnswer: "scientist",
        explanation: "Deneyler yapan kişiye 'scientist' (bilim insanı) denir."
    },
    {
        question: "You use a _______ to see very small things.",
        options: ["telescope", "camera", "microscope", "computer"],
        correctAnswer: "microscope",
        explanation: "Çok küçük şeyleri görmek için 'microscope' (mikroskop) kullanılır."
    },
    {
        question: "A sudden shaking of the ground is a(n) _______.",
        options: ["flood", "drought", "earthquake", "avalanche"],
        correctAnswer: "earthquake",
        explanation: "Yerin ani şekilde sallanmasına 'earthquake' (deprem) denir."
    },
{
                question: "What is the opposite of 'wet'?",
                options: ["Dry", "Big", "Fast", "Tall"],
                correctAnswer: "Dry",
                explanation: "'Wet' (ıslak) kelimesinin zıttı 'dry' (kuru) kelimesidir."
            },
            {
                question: "What do you eat for breakfast?",
                options: ["Eggs", "Book", "Pen", "Shoe"],
                correctAnswer: "Eggs",
                explanation: "Kahvaltıda 'eggs' (yumurta) yaygın bir seçenektir."
            },
            {
                question: "What is a place to fish?",
                options: ["River", "Library", "Gym", "Mall"],
                correctAnswer: "River",
                explanation: "'River' (nehir), balık tutmak ('fish') için bir yerdir."
            },
            {
                question: "What do you wear on sunny days?",
                options: ["Coat", "Sunglasses", "Gloves", "Scarf"],
                correctAnswer: "Sunglasses",
                explanation: "Güneşli günlerde gözleri korumak için 'sunglasses' (güneş gözlüğü) takılır."
            },
            {
                question: "What is a type of fish?",
                options: ["Salmon", "Book", "Car", "Tree"],
                correctAnswer: "Salmon",
                explanation: "'Salmon' (somon) bir balık türüdür."
            },
            {
                question: "What do you do at a fair?",
                options: ["Work", "Play games", "Study", "Sleep"],
                correctAnswer: "Play games",
                explanation: "Panayırlarda ('fair') oyun oynamak ('play games') eğlencelidir."
            },
            {
                question: "What is a good friend like?",
                options: ["Mean", "Kind", "Lazy", "Rude"],
                correctAnswer: "Kind",
                explanation: "İyi bir arkadaş 'kind' (nazik, kibar) olur."
            },
            {
                question: "What do teens like to do?",
                options: ["Sleep all day", "Hang out with friends", "Work all day", "Eat books"],
                correctAnswer: "Hang out with friends",
                explanation: "Gençler arkadaşlarıyla takılmayı sever ('hang out with friends')."
            },
            {
                question: "What do you use in the kitchen?",
                options: ["Pen", "Knife", "Book", "Shoe"],
                correctAnswer: "Knife",
                explanation: "Mutfakta 'knife' (bıçak) kullanılan bir alettir."
            },
            {
                question: "What do you say on the phone to greet someone?",
                options: ["Goodbye", "Hello", "Sorry", "Thank you"],
                correctAnswer: "Hello",
                explanation: "Telefonda birini selamlarken 'Hello' (Merhaba) denir."
            },
            {
                question: "What is a fun adventure?",
                options: ["Doing homework", "Camping", "Sleeping", "Eating"],
                correctAnswer: "Camping",
                explanation: "'Camping' (kamp yapmak) eğlenceli bir maceradır."
            },
            {
                question: "What is a chore at home?",
                options: ["Playing games", "Cleaning the room", "Watching TV", "Reading books"],
                correctAnswer: "Cleaning the room",
                explanation: "Odayı temizlemek ('cleaning the room') bir ev işidir ('chore')."
            },
            {
                question: "What is a 'scientist'?",
                options: ["Person who cooks", "Person who experiments", "Person who sings", "Person who drives"],
                correctAnswer: "Person who experiments",
                explanation: "'Scientist' (bilim insanı), deneyler yapan kişidir."
            },
            {
                question: "What do you use to access the internet?",
                options: ["Spoon", "Computer", "Ball", "Pen"],
                correctAnswer: "Computer",
                explanation: "İnternete erişmek için 'computer' (bilgisayar) kullanılır."
            },
            {
                question: "What is a natural disaster?",
                options: ["Party", "Earthquake", "Concert", "Game"],
                correctAnswer: "Earthquake",
                explanation: "'Earthquake' (deprem) bir doğal afettir."
            },
            {
                question: "What do you call a helpful friend?",
                options: ["Selfish", "Helpful", "Rude", "Lazy"],
                correctAnswer: "Helpful",
                explanation: "Yardımsever bir arkadaşa 'helpful' denir."
            },
            {
                question: "What do teens use to chat?",
                options: ["Books", "Smartphones", "Shoes", "Pens"],
                correctAnswer: "Smartphones",
                explanation: "Gençler sohbet etmek için 'smartphones' (akıllı telefonlar) kullanır."
            },
            {
                question: "What is a kitchen tool?",
                options: ["Fork", "Book", "Shoe", "Pen"],
                correctAnswer: "Fork",
                explanation: "'Fork' (çatal) bir mutfak aletidir."
            },
            {
                question: "What do you say to end a phone call?",
                options: ["Hello", "Goodbye", "Sorry", "Thank you"],
                correctAnswer: "Goodbye",
                explanation: "Bir telefon görüşmesini bitirirken 'Goodbye' (Hoşça kal) denir."
            },
            {
                question: "What is an outdoor adventure?",
                options: ["Watching TV", "Hiking", "Sleeping", "Cooking"],
                correctAnswer: "Hiking",
                explanation: "'Hiking' (doğa yürüyüşü) bir açık hava macerasıdır."
            },
            {
                question: "What is a household chore?",
                options: ["Playing games", "Washing dishes", "Reading books", "Watching TV"],
                correctAnswer: "Washing dishes",
                explanation: "Bulaşıkları yıkamak ('washing dishes') bir ev işidir."
            },
            {
                question: "What is a 'robot'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Robot' bir teknoloji ürünüdür."
            },
            {
                question: "What do you do online?",
                options: ["Eat food", "Browse the internet", "Sleep", "Run"],
                correctAnswer: "Browse the internet",
                explanation: "İnternette gezinmek ('browse the internet') çevrimiçi yapılan bir aktivitedir."
            },
            {
                question: "What is a 'flood'?",
                options: ["Party", "Natural disaster", "Concert", "Game"],
                correctAnswer: "Natural disaster",
                explanation: "'Flood' (sel) bir doğal afettir."
            },
            {
                question: "What do you call a funny friend?",
                options: ["Serious", "Funny", "Rude", "Lazy"],
                correctAnswer: "Funny",
                explanation: "Komik bir arkadaşa 'funny' denir."
            },
            {
                question: "What do teens enjoy?",
                options: ["Working all day", "Listening to music", "Sleeping all day", "Eating books"],
                correctAnswer: "Listening to music",
                explanation: "Gençler müzik dinlemekten ('listening to music') hoşlanır."
            },
            {
                question: "What do you use to cook?",
                options: ["Pen", "Pan", "Book", "Shoe"],
                correctAnswer: "Pan",
                explanation: "Yemek pişirmek için 'pan' (tava) kullanılır."
            },
            {
                question: "What do you say to apologize on the phone?",
                options: ["Hello", "Sorry", "Goodbye", "Thank you"],
                correctAnswer: "Sorry",
                explanation: "Telefonda özür dilemek için 'Sorry' (Üzgünüm) denir."
            },
            {
                question: "What is a water adventure?",
                options: ["Reading books", "Swimming", "Sleeping", "Cooking"],
                correctAnswer: "Swimming",
                explanation: "'Swimming' (yüzme) bir su macerasıdır."
            },
            {
                question: "What is a chore in the kitchen?",
                options: ["Playing games", "Wiping the counter", "Watching TV", "Reading books"],
                correctAnswer: "Wiping the counter",
                explanation: "Tezgahı silmek ('wiping the counter') bir mutfak işidir."
            },
            {
                question: "What is a 'computer'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Computer' (bilgisayar) bir teknoloji ürünüdür."
            },
            {
                question: "What is a social media platform?",
                options: ["Book", "Instagram", "Pen", "Shoe"],
                correctAnswer: "Instagram",
                explanation: "'Instagram' bir sosyal medya platformudur."
            },
            {
                question: "What is a 'tornado'?",
                options: ["Party", "Natural disaster", "Concert", "Game"],
                correctAnswer: "Natural disaster",
                explanation: "'Tornado' (hortum) bir doğal afettir."
            },
            {
                question: "What do you call a shy friend?",
                options: ["Talkative", "Shy", "Rude", "Funny"],
                correctAnswer: "Shy",
                explanation: "Utangaç bir arkadaşa 'shy' denir."
            },
            {
                question: "What do teens do after school?",
                options: ["Work all day", "Do homework", "Sleep all day", "Eat books"],
                correctAnswer: "Do homework",
                explanation: "Gençler okuldan sonra ödev yapar ('do homework')."
            },
            {
                question: "What is a kitchen appliance?",
                options: ["Oven", "Book", "Shoe", "Pen"],
                correctAnswer: "Oven",
                explanation: "'Oven' (fırın) bir mutfak aletidir."
            },
            {
                question: "What do you say to thank someone on the phone?",
                options: ["Hello", "Sorry", "Thank you", "Goodbye"],
                correctAnswer: "Thank you",
                explanation: "Telefonda birine teşekkür etmek için 'Thank you' (Teşekkür ederim) denir."
            },
            {
                question: "What is a mountain adventure?",
                options: ["Watching TV", "Climbing", "Sleeping", "Cooking"],
                correctAnswer: "Climbing",
                explanation: "'Climbing' (tırmanma) bir dağ macerasıdır."
            },
            {
                question: "What is a chore in the living room?",
                options: ["Playing games", "Vacuuming", "Watching TV", "Reading books"],
                correctAnswer: "Vacuuming",
                explanation: "Elektrik süpürgesiyle temizlik yapmak ('vacuuming') bir oturma odası işidir."
            },
            {
                question: "What is a 'tablet'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Tablet' bir teknoloji ürünüdür."
            },
            {
                question: "What do you do on the internet?",
                options: ["Eat food", "Watch videos", "Sleep", "Run"],
                correctAnswer: "Watch videos",
                explanation: "İnternette video izlemek ('watch videos') yaygın bir aktivitedir."
            },
            {
                question: "What is a 'volcano'?",
                options: ["Party", "Natural disaster", "Concert", "Game"],
                correctAnswer: "Natural disaster",
                explanation: "'Volcano' (yanardağ) bir doğal afettir."
            },
            {
                question: "What do you call a generous friend?",
                options: ["Selfish", "Generous", "Rude", "Lazy"],
                correctAnswer: "Generous",
                explanation: "Cömert bir arkadaşa 'generous' denir."
            },
            {
                question: "What do teens use for gaming?",
                options: ["Books", "Consoles", "Shoes", "Pens"],
                correctAnswer: "Consoles",
                explanation: "Gençler oyun oynamak için 'consoles' (oyun konsolları) kullanır."
            },
            {
                question: "What is a kitchen ingredient?",
                options: ["Salt", "Book", "Shoe", "Pen"],
                correctAnswer: "Salt",
                explanation: "'Salt' (tuz) bir mutfak malzemesidir."
            },
            {
                question: "What do you say to ask for help on the phone?",
                options: ["Can you help me?", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "Can you help me?",
                explanation: "Telefonda yardım istemek için 'Can you help me?' (Bana yardım edebilir misin?) denir."
            },
            {
                question: "What is a forest adventure?",
                options: ["Watching TV", "Camping", "Sleeping", "Cooking"],
                correctAnswer: "Camping",
                explanation: "'Camping' (kamp yapmak) bir orman macerasıdır."
            },
            {
                question: "What is a chore in the bathroom?",
                options: ["Playing games", "Cleaning the sink", "Watching TV", "Reading books"],
                correctAnswer: "Cleaning the sink",
                explanation: "Lavaboyu temizlemek ('cleaning the sink') bir banyo işidir."
            },
            {
                question: "What is a 'smartphone'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Smartphone' (akıllı telefon) bir teknoloji ürünüdür."
            },
            {
                question: "What do you use to send emails?",
                options: ["Spoon", "Computer", "Ball", "Pen"],
                correctAnswer: "Computer",
                explanation: "E-posta göndermek için 'computer' (bilgisayar) kullanılır."
            },
            {
                question: "What is a 'hurricane'?",
                options: ["Party", "Natural disaster", "Concert", "Game"],
                correctAnswer: "Natural disaster",
                explanation: "'Hurricane' (kasırga) bir doğal afettir."
            },
            {
                question: "What do you call a polite friend?",
                options: ["Rude", "Polite", "Lazy", "Funny"],
                correctAnswer: "Polite",
                explanation: "Kibar bir arkadaşa 'polite' denir."
            },
            {
                question: "What do teens do on weekends?",
                options: ["Work all day", "Meet friends", "Sleep all day", "Eat books"],
                correctAnswer: "Meet friends",
                explanation: "Gençler hafta sonları arkadaşlarıyla buluşur ('meet friends')."
            },
            {
                question: "What is a kitchen utensil?",
                options: ["Spoon", "Book", "Shoe", "Pen"],
                correctAnswer: "Spoon",
                explanation: "'Spoon' (kaşık) bir mutfak gerecidir."
            },
            {
                question: "What do you say to invite someone on the phone?",
                options: ["Come over!", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "Come over!",
                explanation: "Telefonda birini davet etmek için 'Come over!' (Bize gel!) diyebilirsiniz."
            },
            {
                question: "What is a beach adventure?",
                options: ["Watching TV", "Surfing", "Sleeping", "Cooking"],
                correctAnswer: "Surfing",
                explanation: "'Surfing' (sörf yapmak) bir plaj macerasıdır."
            },
            {
                question: "What is a chore in the garden?",
                options: ["Playing games", "Watering plants", "Watching TV", "Reading books"],
                correctAnswer: "Watering plants",
                explanation: "Bitkileri sulamak ('watering plants') bir bahçe işidir."
            },
            {
                question: "What is a 'laptop'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Laptop' (dizüstü bilgisayar) bir teknoloji ürünüdür."
            },
            {
                question: "What do you do on social media?",
                options: ["Eat food", "Share photos", "Sleep", "Run"],
                correctAnswer: "Share photos",
                explanation: "Sosyal medyada fotoğraf paylaşmak ('share photos') yaygındır."
            },
            {
                question: "What is a 'tsunami'?",
                options: ["Party", "Natural disaster", "Concert", "Game"],
                correctAnswer: "Natural disaster",
                explanation: "'Tsunami' bir doğal afettir."
            },
            {
                question: "What do you call a cheerful friend?",
                options: ["Sad", "Cheerful", "Rude", "Lazy"],
                correctAnswer: "Cheerful",
                explanation: "Neşeli bir arkadaşa 'cheerful' denir."
            },
            {
                question: "What do teens wear?",
                options: ["Uniforms only", "Casual clothes", "Suits", "Pajamas"],
                correctAnswer: "Casual clothes",
                explanation: "Gençler genellikle günlük kıyafetler ('casual clothes') giyer."
            },
            {
                question: "What is a kitchen appliance?",
                options: ["Microwave", "Book", "Shoe", "Pen"],
                correctAnswer: "Microwave",
                explanation: "'Microwave' (mikrodalga fırın) bir mutfak aletidir."
            },
            {
                question: "What do you say to ask the time on the phone?",
                options: ["What time is it?", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "What time is it?",
                explanation: "Telefonda saati sormak için 'What time is it?' (Saat kaç?) denir."
            },
            {
                question: "What is a city adventure?",
                options: ["Watching TV", "Exploring streets", "Sleeping", "Cooking"],
                correctAnswer: "Exploring streets",
                explanation: "Sokakları keşfetmek ('exploring streets') bir şehir macerasıdır."
            },
            {
                question: "What is a chore in the bedroom?",
                options: ["Playing games", "Making the bed", "Watching TV", "Reading books"],
                correctAnswer: "Making the bed",
                explanation: "Yatağı yapmak ('making the bed') bir yatak odası işidir."
            },
            {
                question: "What is a 'camera'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Camera' (kamera) bir teknoloji ürünüdür."
            },
            {
                question: "What do you use to video call?",
                options: ["Spoon", "Smartphone", "Ball", "Pen"],
                correctAnswer: "Smartphone",
                explanation: "Görüntülü arama yapmak için 'smartphone' (akıllı telefon) kullanılır."
            },
            {
                question: "What is a 'wildfire'?",
                options: ["Party", "Natural disaster", "Concert", "Game"],
                correctAnswer: "Natural disaster",
                explanation: "'Wildfire' (orman yangını) bir doğal afettir."
            },
            {
                question: "What do you call a talkative friend?",
                options: ["Quiet", "Talkative", "Rude", "Lazy"],
                correctAnswer: "Talkative",
                explanation: "Çok konuşan bir arkadaşa 'talkative' denir."
            },
            {
                question: "What do teens do online?",
                options: ["Work all day", "Play games", "Sleep all day", "Eat books"],
                correctAnswer: "Play games",
                explanation: "Gençler çevrimiçi ortamda oyun oynar ('play games')."
            },
            {
                question: "What is a kitchen tool?",
                options: ["Whisk", "Book", "Shoe", "Pen"],
                correctAnswer: "Whisk",
                explanation: "'Whisk' (çırpıcı) bir mutfak aletidir."
            },
            {
                question: "What do you say to offer help on the phone?",
                options: ["Can I help you?", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "Can I help you?",
                explanation: "Telefonda yardım teklif etmek için 'Can I help you?' (Yardım edebilir miyim?) denir."
            },
            {
                question: "What is a desert adventure?",
                options: ["Watching TV", "Camel riding", "Sleeping", "Cooking"],
                correctAnswer: "Camel riding",
                explanation: "Deveye binmek ('camel riding') bir çöl macerasıdır."
            },
            {
                question: "What is a chore in the house?",
                options: ["Playing games", "Taking out trash", "Watching TV", "Reading books"],
                correctAnswer: "Taking out trash",
                explanation: "Çöpü dışarı çıkarmak ('taking out trash') bir ev işidir."
            },
            {
                question: "What is a 'television'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Television' (televizyon) bir teknoloji ürünüdür."
            },
            {
                question: "What do you do on a website?",
                options: ["Eat food", "Read articles", "Sleep", "Run"],
                correctAnswer: "Read articles",
                explanation: "Bir web sitesinde makale okuyabilirsiniz ('read articles')."
            },
            {
                question: "What is a 'landslide'?",
                options: ["Party", "Natural disaster", "Concert", "Game"],
                correctAnswer: "Natural disaster",
                explanation: "'Landslide' (heyelan) bir doğal afettir."
            },
            {
                question: "What do you call a rude friend?",
                options: ["Polite", "Rude", "Funny", "Lazy"],
                correctAnswer: "Rude",
                explanation: "Kaba bir arkadaşa 'rude' denir."
            },
            {
                question: "What do teens do at school?",
                options: ["Work all day", "Study", "Sleep all day", "Eat books"],
                correctAnswer: "Study",
                explanation: "Gençler okulda ders çalışır ('study')."
            },
            {
                question: "What is a kitchen ingredient?",
                options: ["Sugar", "Book", "Shoe", "Pen"],
                correctAnswer: "Sugar",
                explanation: "'Sugar' (şeker) bir mutfak malzemesidir."
            },
            {
                question: "What do you say to suggest a plan on the phone?",
                options: ["Let’s meet!", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "Let’s meet!",
                explanation: "Telefonda bir plan önermek için 'Let’s meet!' (Buluşalım!) diyebilirsiniz."
            },
            {
                question: "What is a jungle adventure?",
                options: ["Watching TV", "Trekking", "Sleeping", "Cooking"],
                correctAnswer: "Trekking",
                explanation: "'Trekking' (doğa yürüyüşü) bir orman macerasıdır."
            },
            {
                question: "What is a chore in the yard?",
                options: ["Playing games", "Mowing the lawn", "Watching TV", "Reading books"],
                correctAnswer: "Mowing the lawn",
                explanation: "Çimleri biçmek ('mowing the lawn') bir bahçe işidir."
            },
            {
                question: "What is a 'printer'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Printer' (yazıcı) bir teknoloji ürünüdür."
            },
            {
                question: "What do you use to shop online?",
                options: ["Spoon", "Computer", "Ball", "Pen"],
                correctAnswer: "Computer",
                explanation: "Çevrimiçi alışveriş yapmak için 'computer' (bilgisayar) kullanılır."
            },
            {
                question: "What is a 'drought'?",
                options: ["Party", "Natural disaster", "Concert", "Game"],
                correctAnswer: "Natural disaster",
                explanation: "'Drought' (kuraklık) bir doğal afettir."
            },
            {
                question: "What do you call a lazy friend?",
                options: ["Active", "Lazy", "Funny", "Polite"],
                correctAnswer: "Lazy",
                explanation: "Tembel bir arkadaşa 'lazy' denir."
            },
            {
                question: "What do teens use for music?",
                options: ["Books", "Headphones", "Shoes", "Pens"],
                correctAnswer: "Headphones",
                explanation: "Gençler müzik için 'headphones' (kulaklık) kullanır."
            },
            {
                question: "What is a kitchen appliance?",
                options: ["Blender", "Book", "Shoe", "Pen"],
                correctAnswer: "Blender",
                explanation: "'Blender' (karıştırıcı) bir mutfak aletidir."
            },
            {
                question: "What do you say to confirm a plan on the phone?",
                options: ["Sounds good!", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "Sounds good!",
                explanation: "Telefonda bir planı onaylamak için 'Sounds good!' (Kulağa hoş geliyor!) diyebilirsiniz."
            },
            {
                question: "What is a sky adventure?",
                options: ["Watching TV", "Paragliding", "Sleeping", "Cooking"],
                correctAnswer: "Paragliding",
                explanation: "'Paragliding' (yamaç paraşütü) bir gökyüzü macerasıdır."
            },
            {
                question: "What is a chore in the garage?",
                options: ["Playing games", "Organizing tools", "Watching TV", "Reading books"],
                correctAnswer: "Organizing tools",
                explanation: "Aletleri düzenlemek ('organizing tools') bir garaj işidir."
            },
            {
                question: "What is a 'smartwatch'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Smartwatch' (akıllı saat) bir teknoloji ürünüdür."
            },
            {
                question: "What do you do on a blog?",
                options: ["Eat food", "Write posts", "Sleep", "Run"],
                correctAnswer: "Write posts",
                explanation: "Bir blogda gönderi yazarsınız ('write posts')."
            },
            {
                question: "What is a 'blizzard'?",
                options: ["Party", "Natural disaster", "Concert", "Game"],
                correctAnswer: "Natural disaster",
                explanation: "'Blizzard' (tipi) bir doğal afettir."
            },
            {
                question: "What do you call a clever friend?",
                options: ["Slow", "Clever", "Rude", "Lazy"],
                correctAnswer: "Clever",
                explanation: "Zeki bir arkadaşa 'clever' denir."
            },
            {
                question: "What do teens do at a party?",
                options: ["Work all day", "Dance", "Sleep all day", "Eat books"],
                correctAnswer: "Dance",
                explanation: "Gençler partide dans eder ('dance')."
            },
            {
                question: "What is a kitchen tool?",
                options: ["Ladle", "Book", "Shoe", "Pen"],
                correctAnswer: "Ladle",
                explanation: "'Ladle' (kepçe) bir mutfak aletidir."
            },
            {
                question: "What do you say to ask for directions on the phone?",
                options: ["Where is it?", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "Where is it?",
                explanation: "Telefonda yol tarifi sormak için 'Where is it?' (Nerede?) diye sorabilirsiniz."
            },
            {
                question: "What is a cave adventure?",
                options: ["Watching TV", "Exploring caves", "Sleeping", "Cooking"],
                correctAnswer: "Exploring caves",
                explanation: "Mağaraları keşfetmek ('exploring caves') bir mağara macerasıdır."
            },
            {
                question: "What is a chore in the laundry room?",
                options: ["Playing games", "Washing clothes", "Watching TV", "Reading books"],
                correctAnswer: "Washing clothes",
                explanation: "Kıyafetleri yıkamak ('washing clothes') bir çamaşır odası işidir."
            },
            {
                question: "What is a 'headphone'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Headphone' (kulaklık) bir teknoloji ürünüdür."
            },
            {
                question: "What do you do on a forum?",
                options: ["Eat food", "Discuss topics", "Sleep", "Run"],
                correctAnswer: "Discuss topics",
                explanation: "Bir forumda konuları tartışırsınız ('discuss topics')."
            },
            {
                question: "What is an 'avalanche'?",
                options: ["Party", "Natural disaster", "Concert", "Game"],
                correctAnswer: "Natural disaster",
                explanation: "'Avalanche' (çığ) bir doğal afettir."
            },
            {
                question: "What do you call a supportive friend?",
                options: ["Unhelpful", "Supportive", "Rude", "Lazy"],
                correctAnswer: "Supportive",
                explanation: "Destekleyici bir arkadaşa 'supportive' denir."
            },
            {
                question: "What do teens do in their free time?",
                options: ["Work all day", "Watch movies", "Sleep all day", "Eat books"],
                correctAnswer: "Watch movies",
                explanation: "Gençler boş zamanlarında film izler ('watch movies')."
            },
            {
                question: "What is a kitchen ingredient?",
                options: ["Flour", "Book", "Shoe", "Pen"],
                correctAnswer: "Flour",
                explanation: "'Flour' (un) bir mutfak malzemesidir."
            },
            {
                question: "What do you say to cancel a plan on the phone?",
                options: ["I can’t make it", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "I can’t make it",
                explanation: "Telefonda bir planı iptal etmek için 'I can’t make it' (Gelemiyorum) diyebilirsiniz."
            },
            {
                question: "What is an ocean adventure?",
                options: ["Watching TV", "Diving", "Sleeping", "Cooking"],
                correctAnswer: "Diving",
                explanation: "'Diving' (dalış yapmak) bir okyanus macerasıdır."
            },
            {
                question: "What is a chore in the dining room?",
                options: ["Playing games", "Setting the table", "Watching TV", "Reading books"],
                correctAnswer: "Setting the table",
                explanation: "Masayı kurmak ('setting the table') bir yemek odası işidir."
            },
            {
                question: "What is a 'speaker'?",
                options: ["Food", "Technology", "Toy", "Cloth"],
                correctAnswer: "Technology",
                explanation: "'Speaker' (hoparlör) bir teknoloji ürünüdür."
            },
            {
                question: "What do you do on a search engine?",
                options: ["Eat food", "Look for information", "Sleep", "Run"],
                correctAnswer: "Look for information",
                explanation: "Bir arama motorunda bilgi ararsınız ('look for information')."
            },
            {
                question: "What is a 'storm'?",
                options: ["Party", "Natural disaster", "Concert", "Game"],
                correctAnswer: "Natural disaster",
                explanation: "'Storm' (fırtına) bir doğal afettir."
            }
        ],

     
        intermediate: [
   {
        question: "A person who you can trust with your secrets is...",
        options: ["aggressive", "mean", "reliable", "arrogant"],
        correctAnswer: "reliable",
        explanation: "'Reliable' (güvenilir), sırlarınızı paylaşabileceğiniz bir kişiyi tanımlar."
    },
    {
        question: "If someone always supports you, they _______.",
        options: ["back you up", "lie to you", "argue with you", "ignore you"],
        correctAnswer: "back you up",
        explanation: "'Back up' (desteklemek), birine arka çıkmak ve destek olmak anlamına gelir."
    },
    {
        question: "What is another word for a close friend?",
        options: ["Enemy", "Stranger", "Buddy", "Acquaintance"],
        correctAnswer: "Buddy",
        explanation: "'Buddy' (kanka), yakın arkadaşlar için kullanılan samimi bir ifadedir."
    },
    {
        question: "True friends _______ get on well with each other.",
        options: ["rarely", "never", "always", "sometimes"],
        correctAnswer: "always",
        explanation: "Gerçek arkadaşlar her zaman ('always') birbiriyle iyi geçinir."
    },
    {
        question: "Which one is NOT a quality of a good friend?",
        options: ["Honest", "Loyal", "Jealous", "Generous"],
        correctAnswer: "Jealous",
        explanation: "'Jealous' (kıskanç) olmak, iyi bir arkadaşın özelliği değildir."
    },
    {
        question: "I have a lot of things _______ common with my best friend.",
        options: ["in", "on", "at", "for"],
        correctAnswer: "in",
        explanation: "'Have something in common' (ortak noktası olmak) kalıbında 'in' edatı kullanılır."
    },
    {
        question: "You can always _______ on a true friend; they will never let you down.",
        options: ["give up", "count on", "look for", "put on"],
        correctAnswer: "count on",
        explanation: "'Count on' (güvenmek), birine bel bağlamak ve güvenmek anlamına gelen bir deyimdir."
    },
    {
        question: "A: Do you want to come over to my place this afternoon? B: _______, I'd love to.",
        options: ["I'm sorry, I can't", "I'm busy", "Sure", "Not really"],
        correctAnswer: "Sure",
        explanation: "Bir daveti kabul ederken 'Sure' (Elbette) gibi olumlu bir ifade kullanılır."
    },
    {
        question: "Someone who only thinks about himself/herself is...",
        options: ["tactful", "self-centered", "caring", "supportive"],
        correctAnswer: "self-centered",
        explanation: "'Self-centered' (benmerkezci), sadece kendini düşünen insanlar için kullanılır."
    },
    {
        question: "We are going to a concert. Would you like to _______ us?",
        options: ["join", "leave", "find", "see"],
        correctAnswer: "join",
        explanation: "Birine 'bize katılır mısın?' diye sormak için 'join' (katılmak) fiili kullanılır."
    },
    {
        question: "A: Let's watch a sci-fi movie tonight. B: I'm not into sci-fi. _______ watching a comedy?",
        options: ["Do you", "Let's", "How about", "Are you"],
        correctAnswer: "How about",
        explanation: "Bir öneride bulunurken 'How about + V-ing' (Yapmaya ne dersin?) kalıbı kullanılır."
    },
    {
        question: "Which pair of words are opposites?",
        options: ["honest / truthful", "loyal / faithful", "generous / mean", "caring / thoughtful"],
        correctAnswer: "generous / mean",
        explanation: "'Generous' (cömert) ve 'mean' (cimri) kelimeleri zıt anlamlıdır."
    },
    {
        question: "An invitation for a birthday party is usually called a(n) _______.",
        options: ["letter", "e-mail", "invitation card", "bill"],
        correctAnswer: "invitation card",
        explanation: "Doğum günü partisi için gönderilen davetiyeye 'invitation card' (davetiye kartı) denir."
    },
    {
        question: "If you can't attend an event, you should _______ the invitation.",
        options: ["accept", "refuse", "join", "go"],
        correctAnswer: "refuse",
        explanation: "Bir etkinliğe katılamayacaksanız, daveti 'refuse' (reddetmek) etmeniz gerekir."
    },
    {
        question: "A: Are you busy tomorrow evening? B: No, not at all. ______?",
        options: ["What time is it", "Why do you ask", "Where are you", "Who are you"],
        correctAnswer: "Why do you ask",
        explanation: "Birisinin neden meşgul olup olmadığını sorduğunu öğrenmek için 'Why do you ask?' (Neden sordun?) denir."
    },

    {
        question: "What is another way to say something is 'very fashionable'?",
        options: ["Casual", "Ridiculous", "Trendy", "Formal"],
        correctAnswer: "Trendy",
        explanation: "'Trendy' (moda, son moda), çok moda olan şeyler için kullanılan bir sıfattır."
    },
    {
        question: "My brother loves listening to rock music, but I find it _______.",
        options: ["terrific", "impressive", "unbearable", "relaxing"],
        correctAnswer: "unbearable",
        explanation: "'But' (ama) zıtlık belirttiği için, cümlenin devamına olumsuz bir sıfat olan 'unbearable' (dayanılmaz) gelmelidir."
    },
    {
        question: "I am fond _______ reading books in my free time.",
        options: ["at", "in", "of", "on"],
        correctAnswer: "of",
        explanation: "'Fond of' (-e düşkün olmak) kalıbında 'of' edatı kullanılır."
    },
    {
        question: "After school, I usually _______ with my friends at a cafe.",
        options: ["hang out", "do homework", "go to bed", "take a nap"],
        correctAnswer: "hang out",
        explanation: "Arkadaşlarla dışarıda vakit geçirmek 'hang out' (takılmak) deyimiyle ifade edilir."
    },
    {
        question: "Which activity is an example of a daily routine?",
        options: ["Climbing a mountain", "Traveling to another country", "Brushing your teeth", "Winning a lottery"],
        correctAnswer: "Brushing your teeth",
        explanation: "'Brushing your teeth' (dişlerini fırçalamak), bir günlük rutindir."
    },
    {
        question: "My father prefers _______ tea to coffee.",
        options: ["drink", "drank", "to drink", "drinking"],
        correctAnswer: "drinking",
        explanation: "'Prefer + V-ing + to + V-ing' kalıbı, bir şeyi diğerine tercih ettiğini belirtmek için kullanılır."
    },
    {
        question: "I think rap music is _______. The lyrics are meaningless.",
        options: ["impressive", "energetic", "ridiculous", "great"],
        correctAnswer: "ridiculous",
        explanation: "Şarkı sözlerinin anlamsız olduğunu düşünen biri için rap müzik 'ridiculous' (saçma) olabilir."
    },
    {
        question: "What kind of books do you prefer _______?",
        options: ["read", "to read", "reading", "reads"],
        correctAnswer: "reading",
        explanation: "Tercihleri sorarken genellikle 'prefer' fiilinden sonra 'V-ing' (isim-fiil) hali kullanılır."
    },
    {
        question: "Teenagers are keen on _______ the latest fashion trends.",
        options: ["follow", "to follow", "following", "follows"],
        correctAnswer: "following",
        explanation: "'Keen on' (-e meraklı olmak) kalıbından sonra fiilin 'V-ing' hali gelir."
    },
    {
        question: "I can't stand heavy metal music. I think it's too _______.",
        options: ["quiet", "loud", "slow", "calm"],
        correctAnswer: "loud",
        explanation: "'Can't stand' (dayanamamak, katlanamamak) ifadesi, müziğin çok 'loud' (yüksek sesli) olduğunu belirtir."
    },
    {
        question: "Which of these is a type of clothing?",
        options: ["Sneakers", "Headphones", "Backpack", "Scarf"],
        correctAnswer: "Scarf",
        explanation: "'Sneakers' ayakkabı, 'Headphones' kulaklık, 'Backpack' sırt çantasıdır. 'Scarf' (atkı) bir giysi türüdür."
    },
    {
        question: "A: What's your favorite type of movie? B: I love _______ because they make me laugh.",
        options: ["horrors", "dramas", "comedies", "thrillers"],
        correctAnswer: "comedies",
        explanation: "İnsanları güldüren film türü 'comedies' (komediler)dir."
    },
    {
        question: "My daily _______ starts at 7 a.m. when I wake up.",
        options: ["hobby", "routine", "party", "concert"],
        correctAnswer: "routine",
        explanation: "Her gün tekrarlanan işler bütününe 'routine' (rutin) denir."
    },
    {
        question: "He is crazy about _______ video games after he finishes his homework.",
        options: ["play", "to play", "playing", "plays"],
        correctAnswer: "playing",
        explanation: "'Crazy about' (-e bayılmak, delisi olmak) ifadesinden sonra fiil 'V-ing' takısı alır."
    },
    {
        question: "Something that is amazing and wonderful can be described as _______.",
        options: ["boring", "ordinary", "terrific", "awful"],
        correctAnswer: "terrific",
        explanation: "'Terrific' (harika, müthiş), şaşırtıcı ve harika şeyler için kullanılan olumlu bir sıfattır."
    },
    
    {
        question: "What is the first step before you chop an onion?",
        options: ["Boil it", "Fry it", "Peel it", "Bake it"],
        correctAnswer: "Peel it",
        explanation: "Soğanı doğramadan önce ilk adım kabuğunu soymaktır ('peel it')."
    },
{
        question: "A friend who you can trust with your secrets is _______.",
        options: ["unreliable", "trustworthy", "talkative", "sneaky"],
        correctAnswer: "trustworthy",
        explanation: "Sırlarınızı emanet edebileceğiniz bir arkadaş 'trustworthy' (güvenilir) biridir."
    },
    {
        question: "I'm really into rock music; I find it _______ and energetic.",
        options: ["dull", "calm", "impressive", "boring"],
        correctAnswer: "impressive",
        explanation: "Rock müziği seven biri, onu 'impressive' (etkileyici) ve enerjik bulabilir."
    },
    {
        question: "To make the sauce, you need to _______ the tomatoes until they are soft.",
        options: ["simmer", "grill", "roast", "fry"],
        correctAnswer: "simmer",
        explanation: "Sosu yapmak için, domatesleri yumuşayana kadar 'simmer' (hafif ateşte kaynatmak) gerekir."
    },
    {
        question: "A: Can I speak to the manager? B: I'm afraid he's not _______ at the moment.",
        options: ["busy", "free", "available", "engaged"],
        correctAnswer: "available",
        explanation: "Birinin o anda müsait olmadığını belirtmek için 'not available' ifadesi kullanılır."
    },
    {
        question: "I need to _______ my browser's cache to solve the loading problem.",
        options: ["clear", "delete", "upload", "download"],
        correctAnswer: "clear",
        explanation: "Yükleme problemini çözmek için tarayıcının önbelleğini 'clear' (temizlemek) gerekebilir."
    },
    {
        question: "Caving can be a _______ activity if you are not experienced.",
        options: ["safe", "hazardous", "relaxing", "pleasant"],
        correctAnswer: "hazardous",
        explanation: "Mağaracılık, deneyimli değilseniz 'hazardous' (tehlikeli, riskli) bir aktivite olabilir."
    },
    {
        question: "The hotel offers _______ views of the sea.",
        options: ["awful", "spectacular", "ordinary", "boring"],
        correctAnswer: "spectacular",
        explanation: "Otel, denizin 'spectacular' (muhteşem, görkemli) manzaralarını sunuyor."
    },
    {
        question: "You have an _______ to help with the chores. It's not just my duty.",
        options: ["opinion", "idea", "obligation", "excuse"],
        correctAnswer: "obligation",
        explanation: "Ev işlerine yardım etme 'obligation' (yükümlülük, zorunluluk) görevin var."
    },
    {
        question: "The scientist's discovery was a major _______ in the field of medicine.",
        options: ["failure", "setback", "breakthrough", "problem"],
        correctAnswer: "breakthrough",
        explanation: "Bilim insanının keşfi, tıp alanında büyük bir 'breakthrough' (çığır açan gelişme) idi."
    },
    {
        question: "To prepare for a hurricane, you should _______ on food and water.",
        options: ["run out", "stock up", "give away", "use up"],
        correctAnswer: "stock up",
        explanation: "Kasırgaya hazırlanmak için yiyecek ve su 'stock up' (stoklamak) yapmalısınız."
    },
    {
        question: "He never lets his friends down. He is very _______.",
        options: ["dependable", "selfish", "arrogant", "stubborn"],
        correctAnswer: "dependable",
        explanation: "Arkadaşlarını asla yarı yolda bırakmayan biri 'dependable' (güvenilir) biridir."
    },
    {
        question: "I prefer watching live concerts to listening to recorded music because the _______ is better.",
        options: ["atmosphere", "lyrics", "rhythm", "melody"],
        correctAnswer: "atmosphere",
        explanation: "Canlı konserlerin 'atmosphere' (atmosfer) i genellikle kayıtlı müzikten daha iyidir."
    },
    {
        question: "This soup is a bit _______. It needs more seasoning.",
        options: ["delicious", "tasty", "bland", "spicy"],
        correctAnswer: "bland",
        explanation: "Daha fazla baharata ihtiyacı olan bir çorba, 'bland' (tatsız, yavan) olabilir."
    },
    {
        question: "Could you put me _______ to the sales department, please?",
        options: ["up", "on", "through", "down"],
        correctAnswer: "through",
        explanation: "Telefonda birini başka bir departmana bağlamak için 'put someone through' kalıbı kullanılır."
    },
    {
        question: "It is important to _______ your software regularly to protect against viruses.",
        options: ["update", "delete", "install", "ignore"],
        correctAnswer: "update",
        explanation: "Virüslere karşı korunmak için yazılımınızı düzenli olarak 'update' (güncellemek) önemlidir."
    },
    {
        question: "Hang-gliding provides a _______ view of the landscape below.",
        options: ["bird's-eye", "close-up", "limited", "narrow"],
        correctAnswer: "bird's-eye",
        explanation: "Yelken kanat, aşağıdaki manzaranın 'bird's-eye view' (kuş bakışı görünümü) sunar."
    },
    {
        question: "The _______ of the region is characterized by its mountains and rivers.",
        options: ["architecture", "geography", "history", "cuisine"],
        correctAnswer: "geography",
        explanation: "Bölgenin 'geography' (coğrafyası), dağları ve nehirleriyle karakterize edilir."
    },
    {
        question: "My mother _______ that I am responsible for vacuuming the floors.",
        options: ["insists", "suggests", "offers", "asks"],
        correctAnswer: "insists",
        explanation: "Annem, yerleri süpürmekten sorumlu olduğum konusunda 'insists' (ısrar ediyor)."
    },
    {
        question: "The _______ of the experiment were inconclusive; more research is needed.",
        options: ["hypothesis", "procedure", "findings", "equipment"],
        correctAnswer: "findings",
        explanation: "Deneyin 'findings' (bulguları) sonuçsuzdu; daha fazla araştırma gerekiyor."
    },
    {
        question: "The government issued a warning for people to _______ before the flood.",
        options: ["celebrate", "gather", "evacuate", "relax"],
        correctAnswer: "evacuate",
        explanation: "Hükümet, selden önce insanların 'evacuate' (tahliye etmek) etmesi için bir uyarı yayınladı."
    },
    {
        question: "A good friend should be _______ and understand your feelings.",
        options: ["indifferent", "empathetic", "apathetic", "insensitive"],
        correctAnswer: "empathetic",
        explanation: "İyi bir arkadaş 'empathetic' (empatik) olmalı ve duygularınızı anlamalıdır."
    },
    {
        question: "I find classical music very _______. It helps me to concentrate.",
        options: ["distracting", "soothing", "chaotic", "loud"],
        correctAnswer: "soothing",
        explanation: "Klasik müziği 'soothing' (yatıştırıcı, dinlendirici) buluyorum; konsantre olmama yardımcı oluyor."
    },
    {
        question: "You need to _______ the chicken in the marinade for at least two hours.",
        options: ["soak", "stir", "boil", "bake"],
        correctAnswer: "soak",
        explanation: "Tavuğu en az iki saat marinatta 'soak' (bekletmek, ıslatmak) gerekir."
    },
    {
        question: "I'm calling to _______ about the job advertisement I saw online.",
        options: ["complain", "inquire", "argue", "apologize"],
        correctAnswer: "inquire",
        explanation: "İnternette gördüğüm iş ilanı hakkında 'inquire' (bilgi almak, sormak) için arıyorum."
    },
    {
        question: "He forgot his password, so he couldn't _______ his account.",
        options: ["access", "create", "delete", "share"],
        correctAnswer: "access",
        explanation: "Şifresini unuttu, bu yüzden hesabına 'access' (erişmek) edemedi."
    },
    {
        question: "The view from the mountain peak was absolutely _______.",
        options: ["ordinary", "breathtaking", "plain", "unimpressive"],
        correctAnswer: "breathtaking",
        explanation: "Dağın zirvesinden manzara kesinlikle 'breathtaking' (nefes kesici) idi."
    },
    {
        question: "The city is renowned for its stunning Ottoman _______.",
        options: ["cuisine", "architecture", "language", "climate"],
        correctAnswer: "architecture",
        explanation: "Şehir, büyüleyici Osmanlı 'architecture' (mimarisi) ile ünlüdür."
    },
    {
        question: "You are _______ to finish your homework before watching TV.",
        options: ["allowed", "supposed", "suggested", "offered"],
        correctAnswer: "supposed",
        explanation: "TV izlemeden önce ödevini bitirmen 'supposed to' (gerekiyor, bekleniyor)."
    },
    {
        question: "A scientist must be _______ and base conclusions on evidence.",
        options: ["subjective", "objective", "biased", "emotional"],
        correctAnswer: "objective",
        explanation: "Bir bilim insanı 'objective' (objektif, nesnel) olmalı ve sonuçları kanıtlara dayandırmalıdır."
    },
    {
        question: "A _______ is a fire that spreads uncontrollably in a natural environment.",
        options: ["campfire", "bonfire", "wildfire", "fireplace"],
        correctAnswer: "wildfire",
        explanation: "Doğal bir ortamda kontrolsüzce yayılan yangına 'wildfire' (orman yangını) denir."
    },
    {
        question: "I really appreciate your _______; you always know what to say.",
        options: ["arrogance", "honesty", "tact", "indifference"],
        correctAnswer: "tact",
        explanation: "'Tact' (incelik, düşüncelilik) özelliğini takdir ediyorum; her zaman ne diyeceğini biliyorsun."
    },
    {
        question: "That song has a very _______ melody that I can't get out of my head.",
        options: ["boring", "catchy", "complex", "dull"],
        correctAnswer: "catchy",
        explanation: "O şarkının aklımdan çıkaramadığım çok 'catchy' (akılda kalıcı) bir melodisi var."
    },
    {
        question: "You should _______ the vegetables before adding them to the salad.",
        options: ["boil", "rinse", "bake", "fry"],
        correctAnswer: "rinse",
        explanation: "Salataya eklemeden önce sebzeleri 'rinse' (suyla durulamak) yapmalısınız."
    },
    {
        question: "I'm sorry, the number you have dialed is currently _______.",
        options: ["available", "unreachable", "connected", "free"],
        correctAnswer: "unreachable",
        explanation: "Aradığınız numara şu anda 'unreachable' (ulaşılamıyor)."
    },
    {
        question: "Using a _______ can help you protect your online identity.",
        options: ["VPN (Virtual Private Network)", "public Wi-Fi", "simple password", "real name"],
        correctAnswer: "VPN (Virtual Private Network)",
        explanation: "Bir VPN kullanmak, çevrimiçi kimliğinizi korumanıza yardımcı olabilir."
    },
    {
        question: "The tour included a visit to a _______ village in the mountains.",
        options: ["bustling", "picturesque", "modern", "crowded"],
        correctAnswer: "picturesque",
        explanation: "Tur, dağlarda 'picturesque' (resim gibi, şirin) bir köyü ziyareti içeriyordu."
    },
    {
        question: "You must _______ with the school rules.",
        options: ["comply", "ignore", "break", "disagree"],
        correctAnswer: "comply",
        explanation: "Okul kurallarına 'comply with' (uymak, itaat etmek) zorundasınız."
    },
    {
        question: "The invention of the printing press was a _______ moment in history.",
        options: ["minor", "pivotal", "negative", "trivial"],
        correctAnswer: "pivotal",
        explanation: "Matbaanın icadı, tarihte 'pivotal' (çok önemli, dönüm noktası) bir andı."
    },
    {
        question: "It is crucial to have an emergency _______ in case of a natural disaster.",
        options: ["plan", "party", "holiday", "game"],
        correctAnswer: "plan",
        explanation: "Doğal afet durumunda bir acil durum 'plan' (planı) olması hayati önem taşır."
    },
    {
        question: "A true friend will tell you the truth, even if it is _______. ",
        options: ["pleasant", "unpleasant", "welcome", "nice"],
        correctAnswer: "unpleasant",
        explanation: "Gerçek bir arkadaş, 'unpleasant' (nahoş, tatsız) olsa bile size gerçeği söyler."
    },
    {
        question: "To make a cake, you need a list of _______ like flour, sugar, and eggs.",
        options: ["utensils", "ingredients", "recipes", "steps"],
        correctAnswer: "ingredients",
        explanation: "Bir yemeği yapmak için gereken malzemelere 'ingredients' (içindekiler, malzemeler) denir."
    },
    {
        question: "First, crack two eggs into a bowl. _______, add some milk and whisk.",
        options: ["Finally", "Before", "Then", "After"],
        correctAnswer: "Then",
        explanation: "Bir işlem sırasını anlatırken 'First' (ilk olarak) dedikten sonraki adım için 'Then' (sonra) kullanılır."
    },
    {
        question: "Which verb means to cut food into small squares?",
        options: ["Slice", "Peel", "Dice", "Mash"],
        correctAnswer: "Dice",
        explanation: "'Dice' (küp küp doğramak), yiyecekleri küçük kareler halinde kesmek anlamına gelir."
    },
    {
        question: "Don't touch the oven. It's very hot. You can _______ your hand.",
        options: ["freeze", "burn", "wash", "cool"],
        correctAnswer: "burn",
        explanation: "Sıcak bir fırına dokunursanız elinizi 'burn' (yakmak) edebilirsiniz."
    },
    {
        question: "A set of instructions for preparing a particular dish is called a _______.",
        options: ["menu", "recipe", "shopping list", "bill"],
        correctAnswer: "recipe",
        explanation: "Belirli bir yemeği hazırlama talimatları setine 'recipe' (yemek tarifi) denir."
    },
    {
        question: "You should _______ the potatoes before you mash them.",
        options: ["fry", "boil", "bake", "grill"],
        correctAnswer: "boil",
        explanation: "Patates püresi yapmadan önce patatesleri 'boil' (haşlamak) gerekir."
    },
    {
        question: "Which of these is a sweet food?",
        options: ["Lemon", "Vinegar", "Honey", "Salt"],
        correctAnswer: "Honey",
        explanation: "'Honey' (bal), tatlı bir yiyecektir. Diğerleri ekşi veya tuzludur."
    },

    {
        question: "A: Let's go to the cinema tonight. B: That sounds awesome, but I _______ refuse it. I have an exam.",
        options: ["must", "can", "should", "will"],
        correctAnswer: "must",
        explanation: "Bir zorunluluk (sınav) nedeniyle teklifi reddederken 'must' (zorundayım) kullanılır."
    },
    {
        question: "She is a very determined girl. She never _______ on her goals.",
        options: ["counts on", "gets on well", "gives up", "comes over"],
        correctAnswer: "gives up",
        explanation: "Kararlı ('determined') bir kız, hedeflerinden asla 'gives up' (vazgeçmez)."
    },
    {
        question: "A slumber party is a party where guests _______ at the host's house.",
        options: ["eat dinner", "watch movies", "sleep", "play games"],
        correctAnswer: "sleep",
        explanation: "'Slumber party' (pijama partisi), misafirlerin ev sahibinin evinde 'sleep' (uyuduğu) bir partidir."
    },
    {
        question: "He prefers _______ to music to reading a book.",
        options: ["listen", "to listen", "listened", "listening"],
        correctAnswer: "listening",
        explanation: "'Prefer + V-ing + to + V-ing' kalıbı bir şeyi diğerine tercih ettiğini belirtir."
    },
    {
        question: "I can't stand loud music. It's _______.",
        options: ["relaxing", "energetic", "impressive", "deafening"],
        correctAnswer: "deafening",
        explanation: "Yüksek sese katlanamayan biri için bu ses 'deafening' (sağır edici) olabilir."
    },
    {
        question: "She is keen _______ wearing stylish clothes.",
        options: ["at", "of", "in", "on"],
        correctAnswer: "on",
        explanation: "'Keen on' (-e meraklı olmak, düşkün olmak) bir kalıptır ve 'on' edatıyla kullanılır."
    },
    {
        question: "Which action comes first in a recipe: 'slice the tomatoes' or 'peel the tomatoes'?",
        options: ["Peel the tomatoes", "Slice the tomatoes", "Both at the same time", "Neither"],
        correctAnswer: "Slice the tomatoes",
        explanation: "Domateslerin kabuğu genellikle soyulmaz, bu yüzden önce 'slice' (dilimlemek) eylemi yapılır."
    },
    {
        question: "After you add the eggs, you should _______ them with a fork.",
        options: ["pour", "whisk", "bake", "fry"],
        correctAnswer: "whisk",
        explanation: "Yumurtaları ekledikten sonra bir çatalla 'whisk' (çırpmak) gerekir."
    },
    {
        question: "A food that tastes sweet has a lot of _______ in it.",
        options: ["salt", "sugar", "pepper", "flour"],
        correctAnswer: "sugar",
        explanation: "Tatlı yiyeceklerin içinde bol miktarda 'sugar' (şeker) bulunur."
    },
    {
        question: "A: Could I speak to Mr. Harris? B: I'm sorry, he is not _______ at the moment.",
        options: ["busy", "engaged", "available", "out"],
        correctAnswer: "available",
        explanation: "Bir kişinin o anda müsait olmadığını belirtmek için 'not available' (müsait değil) ifadesi kullanılır."
    },
    {
        question: "I will _______ a message on his phone and ask him to call me back.",
        options: ["take", "leave", "send", "get"],
        correctAnswer: "leave",
        explanation: "Telefona mesaj bırakmak için 'leave a message' kalıbı kullanılır."
    },
    {
        question: "He uses different social media _______ to keep in touch with his friends.",
        options: ["connections", "applications", "confirmations", "attachments"],
        correctAnswer: "applications",
        explanation: "Sosyal medya 'applications' (uygulamalar) aracılığıyla iletişim kurulur."
    },
    {
        question: "You should never share your personal information _______ strangers online.",
        options: ["with", "for", "to", "at"],
        correctAnswer: "with",
        explanation: "Birisiyle bir şey paylaşmak 'share something with someone' kalıbıyla ifade edilir."
    },
    {
        question: "If you want to use this website, you must create a(n) _______ first.",
        options: ["comment", "profile", "account", "link"],
        correctAnswer: "account",
        explanation: "Bir web sitesini kullanmak için genellikle önce bir 'account' (hesap) oluşturmanız gerekir."
    },
    {
        question: "I need to _______ my project file to my teacher via email.",
        options: ["download", "upload", "attach", "log in"],
        correctAnswer: "upload",
        explanation: "Kendi bilgisayarınızdaki bir dosyayı internete göndermek 'upload' (yüklemek) eylemidir. E-postaya eklemek 'attach' olsa da, genel anlamda internete göndermek 'upload'tır."
    },
    {
        question: "I think scuba-diving is _______ than kayaking.",
        options: ["more exciting", "exciting", "the most exciting", "excitinger"],
        correctAnswer: "more exciting",
        explanation: "İki aktiviteyi karşılaştırırken, 'exciting' gibi uzun bir sıfatın önüne 'more' getirilir."
    },
    {
        question: "What kind of _______ do you need for caving?",
        options: ["vehicle", "food", "clothes", "equipment"],
        correctAnswer: "equipment",
        explanation: "Mağaracılık gibi macera sporları için özel 'equipment' (ekipman, teçhizat) gereklidir."
    },
    {
        question: "He is an adrenaline junkie. He finds extreme sports ______.",
        options: ["safe", "boring", "amusing", "dull"],
        correctAnswer: "amusing",
        explanation: "Adrenalin tutkunları ekstrem sporları 'amusing' (eğlenceli, keyifli) bulur."
    },
    {
        question: "We visited Topkapı Palace, which was the main _______ of Ottoman Sultans.",
        options: ["residence", "castle", "tower", "mosque"],
        correctAnswer: "residence",
        explanation: "Topkapı Sarayı, Osmanlı Sultanları'nın ana 'residence' (ikametgah) yeriydi."
    },
    {
        question: "The traditional Turkish _______ is famous all over the world.",
        options: ["location", "climate", "cuisine", "architecture"],
        correctAnswer: "cuisine",
        explanation: "Geleneksel Türk 'cuisine' (mutfağı), dünya çapında ünlüdür."
    },
    {
        question: "I prefer staying in a _______ because you can meet travelers from different countries.",
        options: ["five-star hotel", "bed and breakfast", "hostel", "resort"],
        correctAnswer: "hostel",
        explanation: "Farklı ülkelerden gezginlerle tanışmak için en uygun konaklama türü 'hostel'dir."
    },
    {
        question: "I am responsible for _______ the laundry and ironing the clothes.",
        options: ["making", "doing", "setting", "taking"],
        correctAnswer: "doing",
        explanation: "Çamaşır yıkamak için 'doing the laundry' kalıbı kullanılır."
    },
    {
        question: "You _______ make your bed every day. It's a rule in our house.",
        options: ["should", "must", "can", "don't have to"],
        correctAnswer: "must",
        explanation: "Bir ev kuralından bahsederken bu bir zorunluluktur ve 'must' ile ifade edilir."
    },
    {
        question: "After we eat dinner, it is my duty to _______ the table.",
        options: ["set", "make", "clear", "do"],
        correctAnswer: "clear",
        explanation: "Akşam yemeğinden sonra masayı toplamak 'clear the table' olarak ifade edilir."
    },
    {
        question: "He _______ a great discovery while he was working in his laboratory.",
        options: ["makes", "made", "is making", "has made"],
        correctAnswer: "made",
        explanation: "Geçmişte belirli bir anda olan bir olayı anlatırken Simple Past Tense ('made') kullanılır."
    },
    {
        question: "Scientists test their _______ by doing experiments.",
        options: ["conclusions", "results", "processes", "hypotheses"],
        correctAnswer: "hypotheses",
        explanation: "Bilim insanları, deneyler yaparak 'hypotheses' (hipotezler, varsayımlar) test ederler."
    },
    {
        question: "The process of collecting and analyzing data is called _______.",
        options: ["research", "invention", "discovery", "experiment"],
        correctAnswer: "research",
        explanation: "Veri toplama ve analiz etme sürecine 'research' (araştırma) denir."
    },
    {
        question: "If you live in an earthquake zone, you _______ have an emergency kit.",
        options: ["mustn't", "don't have to", "should", "can't"],
        correctAnswer: "should",
        explanation: "Deprem bölgesinde yaşayan birine tavsiye verirken 'should' (yapmalısın) kullanılır."
    },
    {
        question: "Deforestation can _______ the risk of landslides and floods.",
        options: ["decrease", "prevent", "increase", "stop"],
        correctAnswer: "increase",
        explanation: "Ormansızlaşma, heyelan ve sel riskini 'increase' (artırmak) edebilir."
    },
    {
        question: "You _______ drop, cover, and hold on during an earthquake.",
        options: ["should", "shouldn't", "mustn't", "have to"],
        correctAnswer: "should",
        explanation: "Deprem sırasında yapılması gereken bir eylem için tavsiye niteliğinde 'should' kullanılır."
    },
    {
        question: "To make fried chicken, you need to heat some oil in a _______.",
        options: ["bowl", "pan", "plate", "cup"],
        correctAnswer: "pan",
        explanation: "Kızartma yapmak için yağ bir 'pan' (tava) içinde ısıtılır."
    },
    {
        question: "You can _______ cheese over your pasta.",
        options: ["pour", "grate", "mix", "peel"],
        correctAnswer: "grate",
        explanation: "Makarnanın üzerine peynir 'grate' (rendelemek) edilir."
    },
    {
        question: "A lemon tastes _______.",
        options: ["sweet", "salty", "bitter", "sour"],
        correctAnswer: "sour",
        explanation: "Limonun tadı 'sour' (ekşi) olur."
    },
    {
        question: "_______ the oven to 180°C before you put the cake in.",
        options: ["Cool", "Preheat", "Mix", "Serve"],
        correctAnswer: "Preheat",
        explanation: "Keki fırına koymadan önce fırını 'preheat' (önceden ısıtmak) gerekir."
    },
    {
        question: "Which tool is used for cutting vegetables?",
        options: ["Spoon", "Fork", "Knife", "Plate"],
        correctAnswer: "Knife",
        explanation: "Sebzeleri kesmek için 'knife' (bıçak) kullanılır."
    },
    {
        question: "My favorite _______ is pasta with tomato sauce.",
        options: ["drink", "dessert", "dish", "snack"],
        correctAnswer: "dish",
        explanation: "Domates soslu makarna bir ana 'dish' (yemek) türüdür."
    },
    {
        question: "After you cook the soup, _______ it hot.",
        options: ["serve", "chop", "mix", "buy"],
        correctAnswer: "serve",
        explanation: "Çorbayı pişirdikten sonra sıcak olarak 'serve' (servis etmek) edersiniz."
    },
    {
        question: "A: 'Could you put me through to Mr. Smith?' B: 'Certainly, I will _______ you now.'",
        options: ["hang up", "call back", "connect", "text"],
        correctAnswer: "connect",
        explanation: "'Put someone through' (telefonda birine bağlamak) ile aynı anlama gelen kelime 'connect' (bağlamak) kelimesidir."
    },
    {
        question: "If the person you are calling is already talking to someone else, the line is _______.",
        options: ["available", "clear", "engaged", "open"],
        correctAnswer: "engaged",
        explanation: "Aradığınız kişi başka biriyle konuşuyorsa hat 'engaged' (meşgul) olur."
    },
    {
        question: "I can't hear you well. The _______ is very bad.",
        options: ["connection", "application", "message", "screen"],
        correctAnswer: "connection",
        explanation: "Telefonda karşı tarafı iyi duyamıyorsanız, 'connection' (bağlantı) kötü demektir."
    },
    {
        question: "Please leave a message after the _______. Beeep!",
        options: ["call", "tone", "number", "conversation"],
        correctAnswer: "tone",
        explanation: "Telesekreter mesajları genellikle bir 'tone' (sinyal sesi) sonrası bırakılır."
    },
    {
        question: "A: 'Hello, this is Tom.' B: 'Hi Tom, _______ is Susan.'",
        options: ["that", "it", "this", "she"],
        correctAnswer: "this",
        explanation: "Telefonda kendinizi tanıtırken 'This is ...' (Ben ...) kalıbı kullanılır."
    },
    {
        question: "To make a phone call, you first need to _______ the number.",
        options: ["write", "dial", "text", "save"],
        correctAnswer: "dial",
        explanation: "Telefon görüşmesi yapmak için önce numarayı 'dial' (tuşlamak) gerekir."
    },
    {
        question: "I'm sorry, she is not _______ at the moment. Can I take a message?",
        options: ["busy", "available", "happy", "here"],
        correctAnswer: "available",
        explanation: "'Available' (müsait), birinin o anda konuşup konuşamayacağını belirtir."
    },
    {
        question: "Don't _______ the phone! I haven't finished talking.",
        options: ["hang up", "pick up", "call back", "hold on"],
        correctAnswer: "hang up",
        explanation: "Telefonu kapatmak 'hang up' deyimiyle ifade edilir."
    },
    {
        question: "I will _______ you back as soon as I get home.",
        options: ["text", "call", "speak", "tell"],
        correctAnswer: "call",
        explanation: "'Call back' (geri aramak), birini daha sonra arayacağınızı belirtir."
    },
    {
        question: "A: 'May I speak to John?' B: '_______ a moment, please. I'll get him.'",
        options: ["Leave", "Speak", "Wait", "Hold on"],
        correctAnswer: "Hold on",
        explanation: "'Hold on' (hatta kalın, bekleyin), telefonda birini bekletmek için kullanılan bir ifadedir."
    },
    {
        question: "Smartphones use various _______ to perform different tasks.",
        options: ["screens", "applications", "buttons", "cameras"],
        correctAnswer: "applications",
        explanation: "Akıllı telefonlar farklı görevler için 'applications' veya 'apps' (uygulamalar) kullanır."
    },
    {
        question: "The process of sending a message from your phone is called _______.",
        options: ["calling", "receiving", "texting", "dialing"],
        correctAnswer: "texting",
        explanation: "Telefondan kısa mesaj gönderme eylemine 'texting' (mesajlaşma) denir."
    },
    {
        question: "Can you _______ what you said? I didn't understand.",
        options: ["say", "speak", "tell", "repeat"],
        correctAnswer: "repeat",
        explanation: "Anlamadığınız bir şeyi karşı tarafın tekrar etmesini istemek için 'repeat' (tekrar etmek) fiili kullanılır."
    },
    {
        question: "I use my phone to _______ in touch with my friends who live abroad.",
        options: ["get", "keep", "lose", "find"],
        correctAnswer: "keep",
        explanation: "'Keep in touch' (iletişimde kalmak), biriyle irtibatı sürdürmek anlamına gelir."
    },
    {
        question: "Modern phones have _______ screens that you can interact with.",
        options: ["touch", "small", "broken", "color"],
        correctAnswer: "touch",
        explanation: "Modern telefonlar, dokunarak etkileşim kurulan 'touch' (dokunmatik) ekranlara sahiptir."
    },

    {
        question: "You need to _______ to your email account before you can read your emails.",
        options: ["log out", "sign up", "log in", "delete"],
        correctAnswer: "log in",
        explanation: "E-posta hesabınıza erişmek için önce 'log in' (oturum açmak) yapmanız gerekir."
    },
    {
        question: "A program used to view websites, like Chrome or Firefox, is called a _______.",
        options: ["search engine", "social network", "browser", "document"],
        correctAnswer: "browser",
        explanation: "Web sitelerini görüntülemek için kullanılan programlara 'browser' (tarayıcı) denir."
    },
    {
        question: "Don't forget to _______ the file to your email before you send it.",
        options: ["upload", "attach", "download", "delete"],
        correctAnswer: "attach",
        explanation: "Bir e-postaya dosya eklemek için 'attach' (eklemek, iliştirmek) fiili kullanılır."
    },
    {
        question: "To find information online, you can use a _______ like Google.",
        options: ["website", "keyboard", "search engine", "monitor"],
        correctAnswer: "search engine",
        explanation: "İnternette bilgi bulmak için Google gibi bir 'search engine' (arama motoru) kullanılır."
    },
    {
        question: "I need to _______ this software to my computer to use it.",
        options: ["download", "upload", "comment", "like"],
        correctAnswer: "download",
        explanation: "Bir yazılımı bilgisayarınıza internetten indirmek 'download' etmektir."
    },
    {
        question: "You should create a strong _______ with letters, numbers, and symbols.",
        options: ["username", "password", "account", "profile"],
        correctAnswer: "password",
        explanation: "Güçlü bir 'password' (şifre, parola), hesap güvenliği için çok önemlidir."
    },
    {
        question: "What is the small picture that represents you on a website called?",
        options: ["Icon", "File", "Avatar", "Link"],
        correctAnswer: "Avatar",
        explanation: "Bir web sitesinde sizi temsil eden küçük resme 'avatar' denir."
    },
    {
        question: "You can _______ with your friends online using social media.",
        options: ["confirm", "connect", "delete", "decline"],
        correctAnswer: "connect",
        explanation: "Sosyal medya aracılığıyla arkadaşlarınızla 'connect' (bağlantı kurmak) edebilirsiniz."
    },
    {
        question: "Click on this _______ to go to the homepage.",
        options: ["word", "image", "link", "button"],
        correctAnswer: "link",
        explanation: "Sizi başka bir web sayfasına yönlendiren tıklanabilir metin veya görsele 'link' (bağlantı) denir."
    },
    {
        question: "After you finish using your account, you should _______.",
        options: ["log in", "log out", "sign in", "register"],
        correctAnswer: "log out",
        explanation: "Hesabınızı kullanmayı bitirdikten sonra güvenlik için 'log out' (oturum kapatmak) yapmalısınız."
    },
    {
        question: "The habit of using the Internet too much is called Internet _______.",
        options: ["skill", "connection", "addiction", "browser"],
        correctAnswer: "addiction",
        explanation: "İnterneti çok fazla kullanma alışkanlığına 'Internet addiction' (İnternet bağımlılığı) denir."
    },
    {
        question: "Which of the following is an example of a social networking site?",
        options: ["Google", "Wikipedia", "Instagram", "Microsoft Word"],
        correctAnswer: "Instagram",
        explanation: "Instagram, bir 'social networking site' (sosyal ağ sitesi) örneğidir."
    },
    {
        question: "To use a new online service, you usually have to _______ first.",
        options: ["register", "login", "logout", "comment"],
        correctAnswer: "register",
        explanation: "Yeni bir çevrimiçi hizmeti kullanmak için genellikle önce 'register' (kaydolmak) gerekir."
    },
    {
        question: "I like to read online _______ about products before I buy them.",
        options: ["comments", "files", "accounts", "links"],
        correctAnswer: "comments",
        explanation: "İnsanlar bir ürünü satın almadan önce hakkındaki 'comments' (yorumlar) okumayı sever."
    },
    {
        question: "You can see your friend's photos and posts on their _______ page.",
        options: ["login", "profile", "search", "home"],
        correctAnswer: "profile",
        explanation: "Arkadaşınızın fotoğraf ve gönderilerini onun 'profile' (profil) sayfasında görebilirsiniz."
    },

    {
        question: "I would rather go scuba-diving _______ caving.",
        options: ["to", "or", "than", "and"],
        correctAnswer: "than",
        explanation: "'Would rather' kalıbı ile iki seçenek arasında tercih belirtilirken 'than' kullanılır."
    },
    {
        question: "Which activity takes place underwater?",
        options: ["Hang-gliding", "Caving", "Scuba-diving", "Trekking"],
        correctAnswer: "Scuba-diving",
        explanation: "'Scuba-diving' (tüplü dalış), su altında yapılan bir aktivitedir."
    },
    {
        question: "I think bungee jumping is _______. I'm too scared to try it.",
        options: ["boring", "safe", "entertaining", "frightening"],
        correctAnswer: "frightening",
        explanation: "Denemekten korkan biri için bungee jumping 'frightening' (korkutucu) bir aktivitedir."
    },
    {
        question: "You need special _______ like a helmet and a rope for climbing.",
        options: ["food", "clothes", "equipment", "drinks"],
        correctAnswer: "equipment",
        explanation: "Tırmanış gibi aktiviteler için özel 'equipment' (ekipman, teçhizat) gerekir."
    },
    {
        question: "He prefers canoeing _______ rafting because it's more relaxing.",
        options: ["than", "to", "from", "for"],
        correctAnswer: "to",
        explanation: "'Prefer + V-ing + to + V-ing' kalıbı, bir aktiviteyi diğerine tercih ettiğini belirtmek için kullanılır."
    },
    {
        question: "Exploring inside a cave is called _______.",
        options: ["hiking", "caving", "sailing", "skiing"],
        correctAnswer: "caving",
        explanation: "Bir mağaranın içini keşfetme sporuna 'caving' (mağaracılık) denir."
    },
    {
        question: "I find climbing mountains very _______. It tests my limits.",
        options: ["easy", "challenging", "boring", "relaxing"],
        correctAnswer: "challenging",
        explanation: "Sınırları zorlayan bir aktivite 'challenging' (zorlu, meydan okuyucu) olarak tanımlanır."
    },
    {
        question: "A: What do you think about rafting? B: I think it's _______. I love the excitement.",
        options: ["dull", "tiring", "thrilling", "safe"],
        correctAnswer: "thrilling",
        explanation: "Heyecanı seven biri için rafting 'thrilling' (heyecan verici) bir spordur."
    },
    {
        question: "You should always go with a guide because extreme sports can be _______.",
        options: ["safe", "dangerous", "easy", "popular"],
        correctAnswer: "dangerous",
        explanation: "Ekstrem sporlar 'dangerous' (tehlikeli) olabileceği için bir rehberle yapılmalıdır."
    },
    {
        question: "_______ is a sport where you fly using a large wing.",
        options: ["Kayaking", "Paragliding", "Archery", "Motor racing"],
        correctAnswer: "Paragliding",
        explanation: "'Paragliding' (yamaç paraşütü), büyük bir kanat kullanarak uçma sporudur."
    },
    {
        question: "I'm an adrenaline _______. I love doing extreme sports.",
        options: ["junkie", "hater", "doctor", "teacher"],
        correctAnswer: "junkie",
        explanation: "Adrenalin ve heyecan tutkunlarına 'adrenaline junkie' (adrenalin bağımlısı) denir."
    },
    {
        question: "What do you need for archery?",
        options: ["A boat and a paddle", "A helmet and a harness", "A bow and arrows", "Skis and poles"],
        correctAnswer: "A bow and arrows",
        explanation: "'Archery' (okçuluk) için 'a bow and arrows' (bir yay ve oklar) gerekir."
    },
    {
        question: "He is interested _______ exploring wild and remote places.",
        options: ["in", "on", "at", "of"],
        correctAnswer: "in",
        explanation: "'Interested in' (-ile ilgilenmek) kalıbında 'in' edatı kullanılır."
    },
    {
        question: "The view from the top of the mountain was _______.",
        options: ["disappointing", "awful", "breathtaking", "boring"],
        correctAnswer: "breathtaking",
        explanation: "Dağın tepesinden görünen manzara genellikle 'breathtaking' (nefes kesici) olarak tanımlanır."
    },
    {
        question: "A long walk in nature, especially in the mountains, is called _______.",
        options: ["sailing", "diving", "trekking", "rafting"],
        correctAnswer: "trekking",
        explanation: "Doğada, özellikle dağlarda yapılan uzun yürüyüşlere 'trekking' (doğa yürüyüşü) denir."
    },

    {
        question: "We stayed in an _______ hotel, so all our food and drinks were included.",
        options: ["ancient", "all-inclusive", "urban", "rural"],
        correctAnswer: "all-inclusive",
        explanation: "'All-inclusive' (her şey dahil), yiyecek ve içeceklerin fiyata dahil olduğu otel türüdür."
    },
    {
        question: "A place that is famous for its history and visited by many people is a _______.",
        options: ["shopping mall", "tourist attraction", "hotel", "restaurant"],
        correctAnswer: "tourist attraction",
        explanation: "Tarihiyle ünlü ve çok ziyaret edilen yerlere 'tourist attraction' (turistik yer) denir."
    },
    {
        question: "I bought a small _______ to remember my trip to Paris.",
        options: ["ticket", "souvenir", "receipt", "brochure"],
        correctAnswer: "souvenir",
        explanation: "Bir geziyi hatırlamak için alınan küçük hediyelere 'souvenir' (hediyelik eşya) denir."
    },
    {
        question: "The _______ of Turkey is famous for its historical sites and delicious food.",
        options: ["climate", "cuisine", "language", "population"],
        correctAnswer: "cuisine",
        explanation: "Bir ülkenin yemek kültürü 'cuisine' (mutfak) olarak adlandırılır."
    },
    {
        question: "Ephesus is an _______ city in Turkey with a lot of history.",
        options: ["modern", "ancient", "new", "crowded"],
        correctAnswer: "ancient",
        explanation: "Çok eski ve tarihi şehirlere 'ancient' (antik) denir."
    },
    {
        question: "We stayed at a _______ last summer. It was a small, cozy hotel that only served breakfast.",
        options: ["resort", "hostel", "bed and breakfast", "campsite"],
        correctAnswer: "bed and breakfast",
        explanation: "'Bed and breakfast' (oda ve kahvaltı), sadece konaklama ve kahvaltı sunan küçük otel türüdür."
    },
    {
        question: "The weather was fantastic, so we spent most of our time _______ on the beach.",
        options: ["working", "studying", "sunbathing", "shopping"],
        correctAnswer: "sunbathing",
        explanation: "Sahilde güneşin tadını çıkarmak 'sunbathing' (güneşlenmek) olarak adlandırılır."
    },
    {
        question: "What is the capital city of Turkey?",
        options: ["Istanbul", "Izmir", "Antalya", "Ankara"],
        correctAnswer: "Ankara",
        explanation: "Türkiye'nin başkenti ('capital city') Ankara'dır."
    },
    {
        question: "A place with many trees, plants, and animals is a _______.",
        options: ["desert", "city", "forest", "beach"],
        correctAnswer: "forest",
        explanation: "Çok sayıda ağaç, bitki ve hayvanın bulunduğu yere 'forest' (orman) denir."
    },
    {
        question: "I prefer _______ holidays because I love the sea and sand.",
        options: ["cultural", "seaside", "winter", "adventure"],
        correctAnswer: "seaside",
        explanation: "Deniz ve kumu seven biri 'seaside' (deniz kenarı) tatillerini tercih eder."
    },
    {
        question: "A large, natural area of land with its own ecosystem is a _______.",
        options: ["national park", "city center", "museum", "shopping district"],
        correctAnswer: "national park",
        explanation: "Kendi ekosistemine sahip geniş, doğal alanlara 'national park' (milli park) denir."
    },
    {
        question: "The _______ in the south of Turkey is usually hot and sunny in summer.",
        options: ["location", "culture", "climate", "history"],
        correctAnswer: "climate",
        explanation: "Bir yerin hava durumu koşullarına 'climate' (iklim) denir."
    },
    {
        question: "Which country is famous for its pyramids?",
        options: ["Italy", "Greece", "Egypt", "China"],
        correctAnswer: "Egypt",
        explanation: "'Egypt' (Mısır), piramitleriyle ünlüdür."
    },
    {
        question: "A building where historical objects are kept and displayed is a _______.",
        options: ["castle", "palace", "tower", "museum"],
        correctAnswer: "museum",
        explanation: "Tarihi nesnelerin sergilendiği binalara 'museum' (müze) denir."
    },
    {
        question: "You can find many different kinds of fish and sea animals in an _______.",
        options: ["aquarium", "art gallery", "zoo", "library"],
        correctAnswer: "aquarium",
        explanation: "Balıkların ve deniz canlılarının sergilendiği yer 'aquarium' (akvaryum) dur."
    },
    
    {
        question: "What is a chore that is typically done outdoors?",
        options: ["Washing the dishes", "Dusting the furniture", "Mowing the lawn", "Making the bed"],
        correctAnswer: "Mowing the lawn",
        explanation: "'Mowing the lawn' (çimleri biçmek) genellikle dışarıda yapılan bir ev işidir."
    },
    {
        question: "It's your _______ to keep your room tidy.",
        options: ["hobby", "choice", "responsibility", "dream"],
        correctAnswer: "responsibility",
        explanation: "Odanı düzenli tutmak senin 'responsibility' (sorumluluk) görevidir."
    },
    {
        question: "After dinner, I have to _______ the dishes.",
        options: ["do", "make", "set", "clean"],
        correctAnswer: "do",
        explanation: "Bulaşıkları yıkamak için 'do the dishes' kalıbı kullanılır."
    },
    {
        question: "Could you please _______ the table for dinner? We are eating in five minutes.",
        options: ["clear", "set", "wash", "cook"],
        correctAnswer: "set",
        explanation: "Akşam yemeği için masayı hazırlamak 'set the table' olarak ifade edilir."
    },
    {
        question: "I hate _______ the garbage out, especially when it's raining.",
        options: ["taking", "making", "doing", "cleaning"],
        correctAnswer: "taking",
        explanation: "Çöpü dışarı çıkarmak için 'take out the garbage' kalıbı kullanılır."
    },
    {
        question: "You must _______ your bed every morning before you go to school.",
        options: ["do", "set", "make", "tidy"],
        correctAnswer: "make",
        explanation: "Yatağını toplamak/düzeltmek için 'make your bed' ifadesi kullanılır."
    },
    {
        question: "Putting dirty clothes into the washing machine is called _______.",
        options: ["ironing the clothes", "doing the laundry", "folding the clothes", "hanging out the clothes"],
        correctAnswer: "doing the laundry",
        explanation: "Kirli çamaşırları yıkama işlemine 'doing the laundry' (çamaşır yıkamak) denir."
    },
    {
        question: "My mother usually _______ the floors on Saturdays.",
        options: ["waters", "vacuums", "feeds", "cooks"],
        correctAnswer: "vacuums",
        explanation: "Zeminleri elektrik süpürgesiyle temizlemek 'vacuum the floors' olarak adlandırılır."
    },
    {
        question: "All the tasks and duties at home are called _______ chores.",
        options: ["school", "personal", "household", "office"],
        correctAnswer: "household",
        explanation: "Evdeki görev ve işlere 'household chores' (ev işleri) denir."
    },
    {
        question: "You have to _______ the plants in the garden, or they will die.",
        options: ["cut", "water", "clean", "feed"],
        correctAnswer: "water",
        explanation: "Bitkilerin ölmemesi için onları 'water' (sulamak) gerekir."
    },
    {
        question: "It is my duty to _______ the dog for a walk every evening.",
        options: ["take", "give", "do", "make"],
        correctAnswer: "take",
        explanation: "Köpeği yürüyüşe çıkarmak için 'take the dog for a walk' kalıbı kullanılır."
    },
    {
        question: "After the laundry, I have to _______ the clothes.",
        options: ["wash", "iron", "cook", "dust"],
        correctAnswer: "iron",
        explanation: "Çamaşırlar yıkandıktan sonra 'iron' (ütülemek) gerekir."
    },
    {
        question: "Can you help me _______ the groceries from the car?",
        options: ["cook", "buy", "carry", "eat"],
        correctAnswer: "carry",
        explanation: "Market alışverişini arabadan eve 'carry' (taşımak) için yardım istenebilir."
    },
    {
        question: "You should keep the _______ tidy because it is a shared space.",
        options: ["living room", "your bedroom", "your diary", "your dream"],
        correctAnswer: "living room",
        explanation: "'Living room' (oturma odası) ortak bir alan olduğu için düzenli tutulmalıdır."
    },
    {
        question: "My father is responsible for _______ the car every weekend.",
        options: ["driving", "washing", "selling", "buying"],
        correctAnswer: "washing",
        explanation: "Arabanın temizliğinden sorumlu olan kişi onu 'washing' (yıkama) işini yapar."
    },

    {
        question: "Marie Curie was a famous _______ who worked with radioactivity.",
        options: ["artist", "musician", "scientist", "writer"],
        correctAnswer: "scientist",
        explanation: "Marie Curie, radyoaktivite üzerine çalışan ünlü bir 'scientist' (bilim insanı) idi."
    },
    {
        question: "A place where scientists do experiments is called a _______.",
        options: ["library", "laboratory", "classroom", "gym"],
        correctAnswer: "laboratory",
        explanation: "Bilim insanlarının deney yaptığı yere 'laboratory' veya kısaca 'lab' (laboratuvar) denir."
    },
    {
        question: "Gravity is a scientific _______ that explains why things fall down.",
        options: ["process", "theory", "experiment", "result"],
        correctAnswer: "theory",
        explanation: "Yerçekimi, nesnelerin neden düştüğünü açıklayan bilimsel bir 'theory' (teori, kuram) dir."
    },
    {
        question: "Scientists _______ experiments to test their ideas.",
        options: ["do", "make", "write", "read"],
        correctAnswer: "do",
        explanation: "Bilim insanları fikirlerini test etmek için 'do experiments' (deney yapmak) yaparlar."
    },
    {
        question: "DNA is the molecule that carries the genetic _______ of an organism.",
        options: ["information", "energy", "color", "shape"],
        correctAnswer: "information",
        explanation: "DNA, bir organizmanın genetik 'information' (bilgi) taşıyan molekülüdür."
    },
    {
        question: "The invention of the telephone was a great scientific _______.",
        options: ["failure", "process", "achievement", "opinion"],
        correctAnswer: "achievement",
        explanation: "Telefonun icadı, büyük bir bilimsel 'achievement' (başarı) olarak kabul edilir."
    },
    {
        question: "To see very small things like cells, you need to use a _______.",
        options: ["telescope", "microscope", "camera", "computer"],
        correctAnswer: "microscope",
        explanation: "Hücre gibi çok küçük şeyleri görmek için 'microscope' (mikroskop) kullanılır."
    },
    {
        question: "The process of a plant using sunlight to make food is called _______.",
        options: ["digestion", "respiration", "photosynthesis", "evolution"],
        correctAnswer: "photosynthesis",
        explanation: "Bitkilerin güneş ışığını kullanarak besin üretmesi sürecine 'photosynthesis' (fotosentez) denir."
    },
    {
        question: "A _______ is a scientist who studies stars and planets.",
        options: ["biologist", "chemist", "physicist", "astronomer"],
        correctAnswer: "astronomer",
        explanation: "Yıldızları ve gezegenleri inceleyen bilim insanına 'astronomer' (gökbilimci) denir."
    },
    {
        question: "The results of the experiment did not _______ the scientist's hypothesis.",
        options: ["support", "change", "create", "ignore"],
        correctAnswer: "support",
        explanation: "Deney sonuçları, bilim insanının hipotezini 'support' (desteklemek) edebilir veya etmeyebilir."
    },
    {
        question: "What does 'H2O' represent in chemistry?",
        options: ["Oxygen", "Hydrogen", "Water", "Carbon Dioxide"],
        correctAnswer: "Water",
        explanation: "H2O, kimyada 'Water' (Su) molekülünün formülüdür."
    },
    {
        question: "A _______ is a possible explanation for a scientific problem.",
        options: ["conclusion", "result", "hypothesis", "fact"],
        correctAnswer: "hypothesis",
        explanation: "Bilimsel bir problem için olası bir açıklamaya 'hypothesis' (hipotez, varsayım) denir."
    },
    {
        question: "The study of living organisms is called _______.",
        options: ["chemistry", "physics", "geology", "biology"],
        correctAnswer: "biology",
        explanation: "Canlı organizmaların incelendiği bilim dalına 'biology' (biyoloji) denir."
    },
    {
        question: "Alexander Fleming _______ penicillin in 1928.",
        options: ["discovered", "invented", "created", "produced"],
        correctAnswer: "discovered",
        explanation: "Penisilin doğada zaten var olduğu için icat edilmedi, 'discovered' (keşfedildi)."
    },
    {
        question: "Scientists collect _______ during their experiments to analyze later.",
        options: ["opinions", "data", "pictures", "stories"],
        correctAnswer: "data",
        explanation: "Bilim insanları, deneyleri sırasında daha sonra analiz etmek için 'data' (veri) toplarlar."
    },
    {
        question: "What should you do if an earthquake happens?",
        options: ["Run outside", "Use the elevator", "Drop, Cover, and Hold on", "Stand near a window"],
        correctAnswer: "Drop, Cover, and Hold on",
        explanation: "Deprem sırasında en güvenli hareket 'Drop, Cover, and Hold on' (Çök, Kapan, Tutun) yöntemidir."
    },
    {
        question: "A long period of time with no rain is called a _______.",
        options: ["flood", "drought", "storm", "tsunami"],
        correctAnswer: "drought",
        explanation: "Yağmursuz geçen uzun zaman dilimine 'drought' (kuraklık) denir."
    },
    {
        question: "A very large and destructive storm with high winds is a _______.",
        options: ["tornado", "blizzard", "hurricane", "drizzle"],
        correctAnswer: "hurricane",
        explanation: "Yüksek hızlı rüzgarlara sahip çok büyük ve yıkıcı fırtınalara 'hurricane' (kasırga) denir."
    },
    {
        question: "The sudden shaking of the ground is an _______.",
        options: ["avalanche", "earthquake", "eruption", "landslide"],
        correctAnswer: "earthquake",
        explanation: "Yerin aniden sallanması 'earthquake' (deprem) olarak adlandırılır."
    },
    {
        question: "A large mass of snow, ice, and rocks falling rapidly down a mountainside is an _______.",
        options: ["avalanche", "flood", "drought", "wildfire"],
        correctAnswer: "avalanche",
        explanation: "Dağdan hızla aşağı kayan büyük kar ve buz kütlesine 'avalanche' (çığ) denir."
    },
    {
        question: "You should have an emergency _______ at home for natural disasters.",
        options: ["party", "plan", "game", "kit"],
        correctAnswer: "kit",
        explanation: "Doğal afetler için evde bir 'emergency kit' (acil durum çantası) bulunmalıdır."
    },
    {
        question: "A _______ is an event when a river overflows its banks.",
        options: ["flood", "drought", "fire", "storm"],
        correctAnswer: "flood",
        explanation: "Bir nehrin taşarak yatağının dışına çıkması olayına 'flood' (sel) denir."
    },
    {
        question: "It is important to _______ water during a drought.",
        options: ["waste", "use", "save", "drink"],
        correctAnswer: "save",
        explanation: "Kuraklık sırasında suyu 'save' (tasarruf etmek, biriktirmek) önemlidir."
    },
    {
        question: "A _______ is an opening in the Earth's crust through which lava, ash, and gases escape.",
        options: ["mountain", "volcano", "river", "cave"],
        correctAnswer: "volcano",
        explanation: "Yerkabuğunda lav, kül ve gazların çıktığı açıklığa 'volcano' (yanardağ) denir."
    },
    {
        question: "A fire that burns in a natural area like a forest is a _______.",
        options: ["bonfire", "campfire", "wildfire", "fireplace"],
        correctAnswer: "wildfire",
        explanation: "Orman gibi doğal bir alanda yayılan yangına 'wildfire' (orman yangını) denir."
    },
    {
        question: "A _______ is a giant wave usually caused by earthquakes under the sea.",
        options: ["storm", "hurricane", "tsunami", "tornado"],
        correctAnswer: "tsunami",
        explanation: "Genellikle deniz altındaki depremlerin neden olduğu dev dalgaya 'tsunami' denir."
    },
    {
        question: "We should _______ trees to prevent soil erosion and landslides.",
        options: ["cut down", "burn", "plant", "move"],
        correctAnswer: "plant",
        explanation: "Toprak erozyonunu ve heyelanları önlemek için ağaç 'plant' (dikmek) etmeliyiz."
    },
    {
        question: "The _______ of the volcano was a spectacular but dangerous event.",
        options: ["eruption", "earthquake", "avalanche", "flood"],
        correctAnswer: "eruption",
        explanation: "Yanardağın 'eruption' (püskürmesi), tehlikeli bir doğa olayıdır."
    },
    {
        question: "Climate change can increase the _______ of natural disasters.",
        options: ["safety", "beauty", "frequency", "cost"],
        correctAnswer: "frequency",
        explanation: "İklim değişikliği, doğal afetlerin 'frequency' (sıklık) oranını artırabilir."
    },
    {
        question: "A _______ is a destructive vortex of violently rotating winds.",
        options: ["hurricane", "tsunami", "tornado", "blizzard"],
        correctAnswer: "tornado",
        explanation: "Şiddetle dönen rüzgarların oluşturduğu yıkıcı girdaba 'tornado' (hortum) denir."
    }
    ],

        advanced: [
            {
                question: "What do you say to negotiate a plan?",
                options: ["Can we agree on this?", "Go away!", "I’m tired!", "No way!"],
                correctAnswer: "Can we agree on this?",
                explanation: "Bir plan üzerinde pazarlık yapmak için 'Can we agree on this?' (Bunda anlaşabilir miyiz?) diyebilirsiniz."
            },
            {
                question: "What is a global environmental issue?",
                options: ["Deforestation", "Homework", "Traffic", "Shopping"],
                correctAnswer: "Deforestation",
                explanation: "Ormansızlaşma ('deforestation') küresel bir çevre sorunudur."
            },
            {
                question: "What do you need for a science experiment?",
                options: ["Spoon", "Hypothesis", "Book", "Pen"],
                correctAnswer: "Hypothesis",
                explanation: "Bir bilim deneyi için bir hipoteze ('hypothesis') ihtiyacınız vardır."
            },
            {
                question: "What is a natural disaster with waves?",
                options: ["Tsunami", "Tornado", "Earthquake", "Wildfire"],
                correctAnswer: "Tsunami",
                explanation: "Dalgalarla ilgili bir doğal afet tsunamidir."
            },
            {
                question: "What do you do to combat fake news?",
                options: ["Share everything", "Verify sources", "Click all links", "Post daily"],
                correctAnswer: "Verify sources",
                explanation: "Yalan haberlerle mücadele etmek için kaynakları doğrulamalısınız ('verify sources')."
            },
            {
                question: "What do teens learn in biology class?",
                options: ["Cooking", "Cells", "Dancing", "Painting"],
                correctAnswer: "Cells",
                explanation: "Gençler biyoloji dersinde hücreleri ('cells') öğrenirler."
            },
            {
                question: "What is a biography?",
                options: ["A fictional story", "A person’s life story", "A game’s rules", "A car’s history"],
                correctAnswer: "A person’s life story",
                explanation: "Bir biyografi, bir kişinin hayat hikayesidir."
            },
            {
                question: "What do you need for a career fair?",
                options: ["Spoon", "Résumé", "Book", "Pen"],
                correctAnswer: "Résumé",
                explanation: "Bir kariyer fuarı için bir özgeçmişe ('résumé') ihtiyacınız vardır."
            },
            {
                question: "What do you say to mediate a conflict?",
                options: ["Let’s find a solution!", "I’m always right!", "Go away!", "No way!"],
                correctAnswer: "Let’s find a solution!",
                explanation: "Bir çatışmada arabuluculuk yapmak için 'Let’s find a solution!' (Bir çözüm bulalım!) diyebilirsiniz."
            },
            {
                question: "What is a natural disaster with fire?",
                options: ["Wildfire", "Flood", "Earthquake", "Tornado"],
                correctAnswer: "Wildfire",
                explanation: "Orman yangını ('wildfire') ateşle ilgili bir doğal afettir."
            },
            {
                question: "What do you do to secure your digital identity?",
                options: ["Share passwords", "Use encryption", "Click all links", "Post everything"],
                correctAnswer: "Use encryption",
                explanation: "Dijital kimliğinizi güvence altına almak için şifreleme ('encryption') kullanabilirsiniz."
            },
            {
                question: "What do teens learn in chemistry class?",
                options: ["Cooking", "Reactions", "Dancing", "Painting"],
                correctAnswer: "Reactions",
                explanation: "Gençler kimya dersinde reaksiyonları ('reactions') öğrenirler."
            },
            {
                question: "What is an editorial?",
                options: ["A fictional story", "An opinion piece", "A game’s rules", "A car’s history"],
                correctAnswer: "An opinion piece",
                explanation: "Bir başyazı ('editorial') bir fikir yazısıdır."
            },
            {
                question: "What do you need for a school campaign?",
                options: ["Spoon", "Posters", "Book", "Pen"],
                correctAnswer: "Posters",
                explanation: "Bir okul kampanyası için posterlere ('posters') ihtiyacınız vardır."
            },
            {
                question: "What do you say to encourage teamwork?",
                options: ["Let’s work together!", "Do it alone!", "I’m tired!", "No way!"],
                correctAnswer: "Let’s work together!",
                explanation: "Takım çalışmasını teşvik etmek için 'Let’s work together!' (Birlikte çalışalım!) diyebilirsiniz."
            },
            {
                question: "What is a natural disaster with snow?",
                options: ["Blizzard", "Flood", "Earthquake", "Tornado"],
                correctAnswer: "Blizzard",
                explanation: "Kar fırtınası ('blizzard') karla ilgili bir doğal afettir."
            },
            {
                question: "What do you do to avoid online scams?",
                options: ["Click all links", "Check website safety", "Share passwords", "Post everything"],
                correctAnswer: "Check website safety",
                explanation: "Çevrimiçi dolandırıcılıklardan kaçınmak için web sitesi güvenliğini kontrol etmelisiniz."
            },
            {
                question: "What do teens learn in physics class?",
                options: ["Cooking", "Motion", "Dancing", "Painting"],
                correctAnswer: "Motion",
                explanation: "Gençler fizik dersinde hareketi ('motion') öğrenirler."
            },
            {
                question: "What is a feature article?",
                options: ["A fictional story", "An in-depth story", "A game’s rules", "A car’s history"],
                correctAnswer: "An in-depth story",
                explanation: "Özel bir makale ('feature article') derinlemesine bir hikayedir."
            },
            {
                question: "What do you need for a debate competition?",
                options: ["Spoon", "Evidence", "Book", "Pen"],
                correctAnswer: "Evidence",
                explanation: "Bir münazara yarışması için kanıta ('evidence') ihtiyacınız vardır."
            },
            {
                question: "What do you say to propose a project?",
                options: ["I have an idea!", "Go away!", "I’m tired!", "No way!"],
                correctAnswer: "I have an idea!",
                explanation: "Bir proje önermek için 'I have an idea!' (Bir fikrim var!) diyebilirsiniz."
            },
            {
                question: "What is a natural disaster with wind?",
                options: ["Hurricane", "Flood", "Earthquake", "Wildfire"],
                correctAnswer: "Hurricane",
                explanation: "Kasırga ('hurricane') rüzgarla ilgili bir doğal afettir."
            },
            {
                question: "What do you do to protect your privacy online?",
                options: ["Share everything", "Limit personal info", "Click all links", "Post daily"],
                correctAnswer: "Limit personal info",
                explanation: "Çevrimiçi gizliliğinizi korumak için kişisel bilgileri sınırlamalısınız."
            },
            {
                question: "What do teens learn in social studies?",
                options: ["Cooking", "Civics", "Dancing", "Painting"],
                correctAnswer: "Civics",
                explanation: "Gençler sosyal bilgiler dersinde yurttaşlık bilgisini ('civics') öğrenirler."
            },
    {
        question: "A person who is able to understand and share the feelings of another is _______.",
        options: ["apathetic", "empathetic", "selfish", "arrogant"],
        correctAnswer: "empathetic",
        explanation: "Başkasının duygularını anlayan ve paylaşabilen kişiye 'empathetic' (empatik) denir."
    },
    {
        question: "This song's _______ are very meaningful and thought-provoking.",
        options: ["rhythm", "melody", "beat", "lyrics"],
        correctAnswer: "lyrics",
        explanation: "Bu şarkının 'lyrics' (şarkı sözleri) çok anlamlı ve düşündürücü."
    },
    {
        question: "The recipe says you should _______ the onions until they are golden brown.",
        options: ["sauté", "boil", "steam", "poach"],
        correctAnswer: "sauté",
        explanation: "Tarif, soğanları altın rengi kahverengi olana kadar 'sauté' (sotelemek) yapmanız gerektiğini söylüyor."
    },
    {
        question: "I'm calling to _______ my flight reservation for tomorrow.",
        options: ["cancel", "book", "confirm", "inquire"],
        correctAnswer: "confirm",
        explanation: "Yarınki uçuş rezervasyonumu 'confirm' (onaylamak, teyit etmek) için arıyorum."
    },
    {
        question: "Cyberbullying is a serious issue that can have a negative _______ on teenagers.",
        options: ["impact", "benefit", "advantage", "result"],
        correctAnswer: "impact",
        explanation: "Siber zorbalık, gençler üzerinde olumsuz bir 'impact' (etki) yaratabilen ciddi bir sorundur."
    },
    {
        question: "The _______ of this region is famous for its fresh seafood and olive oil.",
        options: ["cuisine", "culture", "climate", "history"],
        correctAnswer: "cuisine",
        explanation: "Bu bölgenin 'cuisine' (mutfağı), taze deniz ürünleri ve zeytinyağı ile ünlüdür."
    },
    {
        question: "It is your _______ to complete the tasks assigned to you.",
        options: ["choice", "responsibility", "hobby", "privilege"],
        correctAnswer: "responsibility",
        explanation: "Size verilen görevleri tamamlamak sizin 'responsibility' (sorumluluğunuz) dur."
    },
    {
        question: "The _______ of the research provided strong evidence for his theory.",
        options: ["process", "hypothesis", "findings", "method"],
        correctAnswer: "findings",
        explanation: "Araştırmanın 'findings' (bulguları), teorisi için güçlü kanıtlar sağladı."
    },
    {
        question: "The authorities warned residents to take _______ against the approaching storm.",
        options: ["risks", "chances", "precautions", "opportunities"],
        correctAnswer: "precautions",
        explanation: "Yetkililer, yaklaşan fırtınaya karşı 'precautions' (önlemler) almaları için sakinleri uyardı."
    },
    {
        question: "A truly _______ person celebrates your successes without any jealousy.",
        options: ["arrogant", "self-centered", "genuine", "deceitful"],
        correctAnswer: "genuine",
        explanation: "Gerçekten 'genuine' (samimi, içten) bir kişi, başarılarınızı kıskançlık duymadan kutlar."
    },
    {
        question: "The band's performance was _______; the crowd was captivated.",
        options: ["mediocre", "electrifying", "dull", "uninspiring"],
        correctAnswer: "electrifying",
        explanation: "Grubun performansı 'electrifying' (heyecan verici, büyüleyici) idi; kalabalık mest oldu."
    },
    {
        question: "To get the best flavor, you should _______ the spices just before using them.",
        options: ["grind", "chop", "mix", "dissolve"],
        correctAnswer: "grind",
        explanation: "En iyi lezzeti elde etmek için, baharatları kullanmadan hemen önce 'grind' (öğütmek) yapmalısınız."
    },
    {
        question: "There was some _______ on the line, so I couldn't hear him clearly.",
        options: ["clarity", "connection", "interference", "volume"],
        correctAnswer: "interference",
        explanation: "Hatta biraz 'interference' (parazit, cızırtı) vardı, bu yüzden onu net duyamadım."
    },
    {
        question: "It's vital to be able to distinguish between credible and _______ sources of information online.",
        options: ["reliable", "unreliable", "official", "authentic"],
        correctAnswer: "unreliable",
        explanation: "Çevrimiçi ortamda güvenilir ('credible') ve 'unreliable' (güvenilmez) bilgi kaynaklarını ayırt edebilmek hayati önem taşır."
    },
    {
        question: "The historical site has been beautifully _______ to its former glory.",
        options: ["demolished", "restored", "neglected", "modernized"],
        correctAnswer: "restored",
        explanation: "Tarihi mekan, eski ihtişamına güzel bir şekilde 'restored' (restore edildi)."
    },
    {
        question: "You have a moral _______ to report any wrongdoing you witness.",
        options: ["imperative", "choice", "suggestion", "preference"],
        correctAnswer: "imperative",
        explanation: "Tanık olduğunuz herhangi bir usulsüzlüğü bildirmek sizin ahlaki bir 'imperative' (zorunluluk, görev) görevinizdir."
    },
    {
        question: "The experiment was designed to _______ the effects of acid rain on plants.",
        options: ["ignore", "simulate", "complicate", "prevent"],
        correctAnswer: "simulate",
        explanation: "Deney, asit yağmurunun bitkiler üzerindeki etkilerini 'simulate' (simüle etmek, benzetmek) için tasarlanmıştır."
    },
            {
                question: "What is a TED Talk?",
                options: ["A fictional story", "An inspiring speech", "A game’s rules", "A car’s history"],
                correctAnswer: "An inspiring speech",
                explanation: "Bir TED Konuşması, ilham verici bir konuşmadır."
            },
            {
                question: "What do you need for a volunteering event?",
                options: ["Spoon", "Commitment", "Book", "Pen"],
                correctAnswer: "Commitment",
                explanation: "Bir gönüllülük etkinliği için bağlılığa ('commitment') ihtiyacınız vardır."
            },
            {
                question: "What do you say to express disagreement?",
                options: ["I see your point, but…", "Go away!", "I’m tired!", "No way!"],
                correctAnswer: "I see your point, but…",
                explanation: "Fikrinizi belirtmek için kibarca 'I see your point, but…' (Senin açını anlıyorum, ama…) diyebilirsiniz."
            },
            {
                question: "What is a natural disaster with earth?",
                options: ["Earthquake", "Flood", "Tornado", "Wildfire"],
                correctAnswer: "Earthquake",
                explanation: "Deprem ('earthquake') yer kabuğuyla ilgili bir doğal afettir."
            },
            {
                question: "What do you do to stay safe from hackers?",
                options: ["Share passwords", "Update software", "Click all links", "Post everything"],
                correctAnswer: "Update software",
                explanation: "Bilgisayar korsanlarından güvende kalmak için yazılımınızı güncellemelisiniz."
            },
            {
                question: "What do teens learn in language arts?",
                options: ["Cooking", "Writing", "Dancing", "Painting"],
                correctAnswer: "Writing",
                explanation: "Gençler dil sanatları dersinde yazmayı ('writing') öğrenirler."
            },
            {
                question: "What is a webinar?",
                options: ["A fictional story", "An online seminar", "A game’s rules", "A car’s history"],
                correctAnswer: "An online seminar",
                explanation: "Bir webinar, çevrimiçi bir seminerdir."
            },
            {
                question: "What do you need for a school festival?",
                options: ["Spoon", "Planning", "Book", "Pen"],
                correctAnswer: "Planning",
                explanation: "Bir okul festivali için planlama ('planning') yapmanız gerekir."
            },
            {
                question: "What do you say to ask for clarification?",
                options: ["Can you explain?", "Go away!", "I’m tired!", "No way!"],
                correctAnswer: "Can you explain?",
                explanation: "Açıklama istemek için 'Can you explain?' (Açıklayabilir misin?) diye sorabilirsiniz."
            },
            {
                question: "What is a natural disaster with heat?",
                options: ["Heatwave", "Flood", "Earthquake", "Tornado"],
                correctAnswer: "Heatwave",
                explanation: "Sıcak hava dalgası ('heatwave') ısıyla ilgili bir doğal afettir."
            },
            {
                question: "What do you do to promote digital citizenship?",
                options: ["Share everything", "Be ethical online", "Click all links", "Post daily"],
                correctAnswer: "Be ethical online",
                explanation: "Dijital vatandaşlığı teşvik etmek için çevrimiçi ortamda etik olmalısınız."
            },
            {
                question: "What do teens learn in computer class?",
                options: ["Cooking", "Programming", "Dancing", "Painting"],
                correctAnswer: "Programming",
                explanation: "Gençler bilgisayar dersinde programlama ('programming') öğrenirler."
            },
            {
                question: "What is a case study?",
                options: ["A fictional story", "A detailed analysis", "A game’s rules", "A car’s history"],
                correctAnswer: "A detailed analysis",
                explanation: "Bir vaka çalışması ('case study') detaylı bir analizdir."
            },
            {
                question: "What do you need for a leadership role?",
                options: ["Spoon", "Responsibility", "Book", "Pen"],
                correctAnswer: "Responsibility",
                explanation: "Bir liderlik rolü için sorumluluğa ('responsibility') ihtiyacınız vardır."
            },
            {
                question: "What do you say to motivate a group?",
                options: ["We can do this!", "Go away!", "I’m tired!", "No way!"],
                correctAnswer: "We can do this!",
                explanation: "Bir grubu motive etmek için 'We can do this!' (Bunu yapabiliriz!) diyebilirsiniz."
            },
            {
                question: "What is a natural disaster with mud?",
                options: ["Landslide", "Flood", "Earthquake", "Tornado"],
                correctAnswer: "Landslide",
                explanation: "Heyelan ('landslide') çamurla ilgili bir doğal afettir."
            },
            {
                question: "What adjective describes a friend who keeps promises?",
                options: ["Unreliable", "Trustworthy", "Rude", "Lazy"],
                correctAnswer: "Trustworthy",
                explanation: "Sözlerini tutan bir arkadaşı 'trustworthy' (güvenilir) olarak tanımlarsınız."
            },
            {
                question: "What do teens do to express themselves online?",
                options: ["Share personal details", "Create content", "Click unknown links", "Download viruses"],
                correctAnswer: "Create content",
                explanation: "Gençler çevrimiçi ortamda kendilerini ifade etmek için içerik oluştururlar ('create content')."
            },
            {
                question: "What is the most important tool for a chef?",
                options: ["Spoon", "Chef’s knife", "Book", "Shoe"],
                correctAnswer: "Chef’s knife",
                explanation: "Bir şef için en önemli alet şef bıçağıdır ('chef’s knife')."
            },
            {
                question: "What do you say to negotiate a time on the phone?",
                options: ["Does that work for you?", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "Does that work for you?",
                explanation: "Telefonda bir zaman üzerinde anlaşmak için 'Does that work for you?' (Bu sana uyar mı?) diyebilirsiniz."
            },
            {
                question: "What is the most thrilling adventure?",
                options: ["Reading quietly", "White-water rafting", "Eating lunch", "Sleeping"],
                correctAnswer: "White-water rafting",
                explanation: "En heyecan verici macera 'white-water rafting'dir."
            },
            {
                question: "What is a chore that saves energy?",
                options: ["Leaving lights on", "Turning off appliances", "Watching TV", "Playing games"],
                correctAnswer: "Turning off appliances",
                explanation: "Aletleri kapatmak ('turning off appliances') enerji tasarrufu sağlayan bir ev işidir."
            },
            {
                question: "Which invention revolutionized communication?",
                options: ["Wheel", "Internet", "Pen", "Shoe"],
                correctAnswer: "Internet",
                explanation: "İnternet ('internet') iletişimde devrim yaratan bir icattır."
            },
            {
                question: "What is a common dream for teens?",
                options: ["More homework", "Career success", "Watching TV", "Sleeping"],
                correctAnswer: "Career success",
                explanation: "Gençler için yaygın bir hayal kariyer başarısıdır ('career success')."
            },
            {
                question: "What is the deadliest natural disaster?",
                options: ["Earthquake", "Flood", "Tornado", "Wildfire"],
                correctAnswer: "Earthquake",
                explanation: "Deprem ('earthquake') en ölümcül doğal afetlerden biridir."
            },
            {
                question: "What is the best way to stay safe online?",
                options: ["Share passwords", "Use two-factor authentication", "Click all links", "Post everything"],
                correctAnswer: "Use two-factor authentication",
                explanation: "Çevrimiçi güvende kalmanın en iyi yolu iki faktörlü kimlik doğrulama kullanmaktır."
            },
            {
                question: "What adjective describes a friend who inspires others?",
                options: ["Boring", "Inspiring", "Rude", "Lazy"],
                correctAnswer: "Inspiring",
                explanation: "Başkalarına ilham veren bir arkadaşı 'inspiring' (ilham verici) olarak tanımlarsınız."
            },
            {
                question: "What do teens do to stay informed online?",
                options: ["Read fake news", "Follow reliable sources", "Click unknown links", "Download viruses"],
                correctAnswer: "Follow reliable sources",
                explanation: "Gençler çevrimiçi bilgilenmek için güvenilir kaynakları takip ederler."
            },
            {
                question: "What is essential for a professional kitchen?",
                options: ["Spoon", "Oven", "Book", "Shoe"],
                correctAnswer: "Oven",
                explanation: "Profesyonel bir mutfak için fırın ('oven') esastır."
            },
            {
                question: "What do you say to clarify a phone conversation?",
                options: ["Can you repeat that?", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "Can you repeat that?",
                explanation: "Bir telefon görüşmesini netleştirmek için 'Can you repeat that?' (Tekrar edebilir misin?) diyebilirsiniz."
            },
            {
                question: "What is a historical adventure?",
                options: ["Watching TV", "Exploring ancient ruins", "Eating lunch", "Sleeping"],
                correctAnswer: "Exploring ancient ruins",
                explanation: "Antik kalıntıları keşfetmek ('exploring ancient ruins') tarihi bir maceradır."
            },
            {
                question: "What is a chore that promotes recycling?",
                options: ["Throwing trash", "Sorting recyclables", "Watching TV", "Playing games"],
                correctAnswer: "Sorting recyclables",
                explanation: "Geri dönüştürülebilirleri ayırmak ('sorting recyclables') geri dönüşümü teşvik eden bir ev işidir."
            },
            {
                question: "Which invention changed transportation?",
                options: ["Wheel", "Airplane", "Pen", "Shoe"],
                correctAnswer: "Airplane",
                explanation: "Uçak ('airplane') ulaşımı değiştiren bir icattır."
            },
            {
                question: "What is a dream for global health?",
                options: ["More diseases", "Access to medicine", "Watching TV", "Sleeping"],
                correctAnswer: "Access to medicine",
                explanation: "Küresel sağlık için bir hayal ilaca erişimdir ('access to medicine')."
            },
            {
                question: "What is a natural disaster caused by heat?",
                options: ["Earthquake", "Drought", "Flood", "Tornado"],
                correctAnswer: "Drought",
                explanation: "Kuraklık ('drought') ısıyla ilgili bir doğal afettir."
            },
            {
                question: "What is a key to online privacy?",
                options: ["Share everything", "Use privacy settings", "Click all links", "Post daily"],
                correctAnswer: "Use privacy settings",
                explanation: "Çevrimiçi gizliliğin anahtarı gizlilik ayarlarını kullanmaktır."
            },
            {
                question: "What adjective describes a friend who solves problems?",
                options: ["Clueless", "Resourceful", "Rude", "Lazy"],
                correctAnswer: "Resourceful",
                explanation: "Sorunları çözen bir arkadaşı 'resourceful' (becerikli) olarak tanımlarsınız."
            },
            {
                question: "What do teens do to learn online?",
                options: ["Watch entertainment", "Take online courses", "Click unknown links", "Download viruses"],
                correctAnswer: "Take online courses",
                explanation: "Gençler çevrimiçi öğrenmek için çevrimiçi dersler alırlar."
            },
            {
                question: "What is a must-have for a home kitchen?",
                options: ["Spoon", "Refrigerator", "Book", "Shoe"],
                correctAnswer: "Refrigerator",
                explanation: "Bir ev mutfağı için buzdolabı ('refrigerator') olmazsa olmazdır."
            },
            {
                question: "What do you say to decline a phone invitation?",
                options: ["I can’t make it", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "I can’t make it",
                explanation: "Bir telefon davetini reddetmek için 'I can’t make it' (Gelemiyorum) diyebilirsiniz."
            },
            {
                question: "What is a nature-based adventure?",
                options: ["Watching TV", "Wildlife safari", "Eating lunch", "Sleeping"],
                correctAnswer: "Wildlife safari",
                explanation: "Yaban hayatı safari ('wildlife safari') doğa temelli bir maceradır."
            },
            {
                question: "What is a chore that helps the environment?",
                options: ["Throwing trash", "Composting", "Watching TV", "Playing games"],
                correctAnswer: "Composting",
                explanation: "Kompost yapmak ('composting') çevreye yardımcı olan bir ev işidir."
            },
            {
                question: "Which invention aids medical treatment?",
                options: ["Wheel", "X-ray machine", "Pen", "Shoe"],
                correctAnswer: "X-ray machine",
                explanation: "X-ray cihazı ('X-ray machine') tıbbi tedaviye yardımcı olur."
            },
            {
                question: "What is a dream for equality?",
                options: ["More division", "Fair opportunities", "Watching TV", "Sleeping"],
                correctAnswer: "Fair opportunities",
                explanation: "Eşitlik için bir hayal adil fırsatlardır ('fair opportunities')."
            },
            {
                question: "What is a natural disaster with strong winds?",
                options: ["Earthquake", "Tornado", "Flood", "Wildfire"],
                correctAnswer: "Tornado",
                explanation: "Hortum ('tornado') şiddetli rüzgarlarla ilgili bir doğal afettir."
            },
            {
                question: "What is the best way to avoid cyberbullying?",
                options: ["Share everything", "Report it", "Click all links", "Post daily"],
                correctAnswer: "Report it",
                explanation: "Siber zorbalıktan kaçınmanın en iyi yolu onu bildirmektir ('report it')."
            },
            {
                question: "What adjective describes a friend who is always happy?",
                options: ["Sad", "Cheerful", "Rude", "Lazy"],
                correctAnswer: "Cheerful",
                explanation: "Her zaman mutlu olan bir arkadaşı 'cheerful' (neşeli) olarak tanımlarsınız."
            },
            {
                question: "What do teens do to collaborate online?",
                options: ["Work alone", "Use group chats", "Click unknown links", "Download viruses"],
                correctAnswer: "Use group chats",
                explanation: "Gençler çevrimiçi işbirliği yapmak için grup sohbetleri kullanır."
            },
            {
                question: "What is a key ingredient for baking?",
                options: ["Spoon", "Flour", "Book", "Shoe"],
                correctAnswer: "Flour",
                explanation: "Pişirme için kilit bir malzeme undur ('flour')."
            },
            {
                question: "What do you say to offer condolences on the phone?",
                options: ["I’m so sorry", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "I’m so sorry",
                explanation: "Telefonda başsağlığı dilemek için 'I’m so sorry' (Çok üzgünüm) diyebilirsiniz."
            },
            {
                question: "What is a cultural adventure?",
                options: ["Watching TV", "Visiting festivals", "Eating lunch", "Sleeping"],
                correctAnswer: "Visiting festivals",
                explanation: "Festivalleri ziyaret etmek ('visiting festivals') kültürel bir maceradır."
            },
            {
                question: "What is a chore that saves water?",
                options: ["Leaving taps on", "Fixing leaks", "Watching TV", "Playing games"],
                correctAnswer: "Fixing leaks",
                explanation: "Sızıntıları onarmak ('fixing leaks') su tasarrufu sağlayan bir ev işidir."
            },
            {
                question: "Which invention supports education?",
                options: ["Wheel", "Tablet", "Pen", "Shoe"],
                correctAnswer: "Tablet",
                explanation: "Tablet eğitimi destekleyen bir icattır."
            },
            {
                question: "What is a dream for innovation?",
                options: ["Old machines", "New solutions", "Watching TV", "Sleeping"],
                correctAnswer: "New solutions",
                explanation: "İnovasyon için bir hayal yeni çözümlerdir ('new solutions')."
            },
            {
                question: "What is a natural disaster with waves?",
                options: ["Earthquake", "Tsunami", "Flood", "Wildfire"],
                correctAnswer: "Tsunami",
                explanation: "Tsunami dalgalarla ilgili bir doğal afettir."
            },
            {
                question: "What is the best way to secure online accounts?",
                options: ["Share passwords", "Use strong passwords", "Click all links", "Post everything"],
                correctAnswer: "Use strong passwords",
                explanation: "Çevrimiçi hesapları güvence altına almanın en iyi yolu güçlü şifreler kullanmaktır."
            },

            {
        question: "He pretends to be my friend, but I know he is not sincere. I can't _______ him.",
        options: ["get on well with", "back up", "rely on", "come over"],
        correctAnswer: "rely on",
        explanation: "Samimi ('sincere') olmayan birine 'rely on' (güvenmek) yapamazsınız."
    },
    {
        question: "A true friend never tells your secrets to others. That's what _______ is about.",
        options: ["generosity", "determination", "loyalty", "stubbornness"],
        correctAnswer: "loyalty",
        explanation: "Sır saklamak, 'loyalty' (sadakat) kavramının bir parçasıdır."
    },
    {
        question: "I would like to apologize _______ being late to your party.",
        options: ["with", "about", "at", "for"],
        correctAnswer: "for",
        explanation: "Bir şey için özür dilemek 'apologize for something' kalıbıyla ifade edilir."
    },
    {
        question: "I would rather stay at home and read a book _______ go to that noisy concert.",
        options: ["to", "than", "from", "or"],
        correctAnswer: "than",
        explanation: "'Would rather' kalıbı ile iki seçenek arasında tercih belirtilirken 'than' kullanılır."
    },
    {
        question: "The ticket prices for the concert are _______. I can't afford to buy one.",
        options: ["reasonable", "unbearable", "cheap", "terrific"],
        correctAnswer: "unbearable",
        explanation: "Bilet alamayacak kadar pahalı olan fiyatlar 'unbearable' (dayanılmaz, katlanılmaz) olarak nitelendirilebilir."
    },
    {
        question: "She is a very talented musician. Her live performance was _______.",
        options: ["dull", "impressive", "ridiculous", "ordinary"],
        correctAnswer: "impressive",
        explanation: "Çok yetenekli bir müzisyenin canlı performansı 'impressive' (etkileyici) olur."
    },
    {
        question: "You need to _______ the pasta in boiling water for about 10 minutes.",
        options: ["cook", "chop", "fry", "bake"],
        correctAnswer: "cook",
        explanation: "Makarna, kaynar suda yaklaşık 10 dakika 'cook' (pişirmek) edilir."
    },
    {
        question: "This dish has a very _______ taste. It is both sweet and sour.",
        options: ["greasy", "spicy", "unique", "salty"],
        correctAnswer: "unique",
        explanation: "Hem tatlı hem de ekşi gibi farklı tatları bir arada barındıran bir lezzet 'unique' (eşsiz, benzersiz) olabilir."
    },
    {
        question: "Which one is a kitchen utensil?",
        options: ["Oven", "Fridge", "Whisk", "Ingredient"],
        correctAnswer: "Whisk",
        explanation: "'Whisk' (çırpıcı), bir 'kitchen utensil' (mutfak gereci) iken, fırın ve buzdolabı 'kitchen appliance' (mutfak cihazı) olarak geçer."
    },
    {
        question: "He is a bad conversationalist because he always _______ and talks only about himself.",
        options: ["hangs up", "picks up", "holds on", "interrupts"],
        correctAnswer: "interrupts",
        explanation: "Kötü bir konuşmacı, sürekli başkalarının sözünü 'interrupts' (keser)."
    },
    {
        question: "A: Can you repeat that, please? It's a bad line. B: Sure, I said I _______ call you tomorrow.",
        options: ["will", "am going to", "would", "can"],
        correctAnswer: "will",
        explanation: "Konuşma anında karar verilen veya söz verilen bir eylem için genellikle 'will' kullanılır."
    },
    {
        question: "The evolution of _______ has changed the way we communicate dramatically.",
        options: ["transportation", "education", "telecommunication", "agriculture"],
        correctAnswer: "telecommunication",
        explanation: "İletişim kurma şeklimizi değiştiren şey 'telecommunication' (telekomünikasyon) evrimidir."
    },
    {
        question: "You should be careful about _______ confirmation emails that ask for your password.",
        options: ["real", "fake", "official", "important"],
        correctAnswer: "fake",
        explanation: "Şifrenizi isteyen onay e-postaları genellikle 'fake' (sahte) ve dolandırıcılık amaçlıdır."
    },
    {
        question: "Many people express their opinions by posting _______ on blogs.",
        options: ["attachments", "accounts", "comments", "passwords"],
        correctAnswer: "comments",
        explanation: "İnsanlar bloglarda 'comments' (yorumlar) yayınlayarak fikirlerini ifade ederler."
    },
    {
        question: "To avoid misunderstandings, you should use _______ when you text online.",
        options: ["abbreviations", "emoticons", "capital letters", "complex words"],
        correctAnswer: "emoticons",
        explanation: "Çevrimiçi yazışmalarda yanlış anlaşılmaları önlemek için duyguları belirten 'emoticons' (ifadeler, emojiler) kullanılabilir."
    },
    {
        question: "Paragliding is an _______ sport that requires courage and special training.",
        options: ["easy", "entertaining", "individual", "amusing"],
        correctAnswer: "individual",
        explanation: "Yamaç paraşütü, tek başına yapılan bir 'individual' (bireysel) spordur."
    },
    {
        question: "Before you try an extreme sport, you should consider the _______ involved.",
        options: ["fun", "risks", "benefits", "excitement"],
        correctAnswer: "risks",
        explanation: "Ekstrem bir spor denemeden önce içerdiği 'risks' (riskler) göz önünde bulundurulmalıdır."
    },
    {
        question: "What is your preference? _______ hang-gliding or canoeing?",
        options: ["Would you like", "Do you prefer", "Are you keen on", "What about"],
        correctAnswer: "Do you prefer",
        explanation: "İki seçenek arasında bir tercih sormak için 'Do you prefer A or B?' kalıbı kullanılır."
    },
    {
        question: "The hotel was located in a beautiful _______ setting, far from the city noise.",
        options: ["urban", "rural", "crowded", "central"],
        correctAnswer: "rural",
        explanation: "Şehir gürültüsünden uzak, doğal ve kırsal yerler 'rural' (kırsal) olarak tanımlanır."
    },
    {
        question: "What was the most _______ moment of your holiday?",
        options: ["expensive", "delicious", "ancient", "memorable"],
        correctAnswer: "memorable",
        explanation: "Tatilin en 'memorable' (unutulmaz, akılda kalıcı) anı sorulmaktadır."
    },
    {
        question: "I was really _______ with the hotel service. It was terrible.",
        options: ["satisfied", "pleased", "impressed", "disappointed"],
        correctAnswer: "disappointed",
        explanation: "Çok kötü bir otel hizmeti alan kişi 'disappointed' (hayal kırıklığına uğramış) hisseder."
    },
    {
        question: "In our family, we share the _______. Everyone has a duty.",
        options: ["responsibilities", "problems", "hobbies", "opinions"],
        correctAnswer: "responsibilities",
        explanation: "Ailede herkesin bir görevi varsa, 'responsibilities' (sorumluluklar) paylaşılıyor demektir."
    },
    {
        question: "You _______ to help with the household chores. You are a member of this family.",
        options: ["must", "should", "have", "can"],
        correctAnswer: "have",
        explanation: "Bir zorunluluğu ifade etmek için 'have to' kalıbı kullanılır."
    },
    {
        question: "Loading and unloading the _______ is my least favorite chore.",
        options: ["washing machine", "oven", "refrigerator", "dishwasher"],
        correctAnswer: "dishwasher",
        explanation: "'Dishwasher' (bulaşık makinesi) doldurup boşaltmak, sevilmeyen bir ev işi olabilir."
    },
    {
        question: "The aim of this experiment is to _______ the effect of sunlight on plants.",
        options: ["observe", "ignore", "change", "destroy"],
        correctAnswer: "observe",
        explanation: "Bu deneyin amacı, güneş ışığının bitkiler üzerindeki etkisini 'observe' (gözlemlemek) etmektir."
    },
    {
        question: "He is carrying out a scientific _______ to find a cure for the disease.",
        options: ["publication", "investigation", "presentation", "discussion"],
        correctAnswer: "investigation",
        explanation: "Bir hastalığa çare bulmak için bilimsel bir 'investigation' (araştırma, soruşturma) yürütülür."
    },
    {
        question: "The results of his research were _______ in a famous scientific journal.",
        options: ["developed", "published", "invented", "discovered"],
        correctAnswer: "published",
        explanation: "Araştırma sonuçları, bilimsel bir dergide 'published' (yayınlandı)."
    },
    {
        question: "We should use renewable energy sources to prevent _______.",
        options: ["global warming", "earthquakes", "floods", "avalanches"],
        correctAnswer: "global warming",
        explanation: "Yenilenebilir enerji kaynakları kullanmak, 'global warming' (küresel ısınma) ile mücadelede önemlidir."
    },
    {
        question: "People should _______ their houses immediately when there is a tsunami warning.",
        options: ["decorate", "evacuate", "build", "clean"],
        correctAnswer: "evacuate",
        explanation: "Tsunami uyarısı olduğunda insanlar evlerini derhal 'evacuate' (tahliye etmek) etmelidir."
    },
    {
        question: "To _______ the effects of climate change, we must reduce our carbon footprint.",
        options: ["increase", "cause", "mitigate", "worsen"],
        correctAnswer: "mitigate",
        explanation: "İklim değişikliğinin etkilerini 'mitigate' (hafifletmek, azaltmak) için karbon ayak izimizi azaltmalıyız."
    },
{
                question: "What adjective describes a friend who loves new ideas?",
                options: ["Boring", "Creative", "Rude", "Lazy"],
                correctAnswer: "Creative",
                explanation: "Yeni fikirleri seven bir arkadaşı 'creative' (yaratıcı) olarak tanımlarsınız."
            },
            {
                question: "What do teens do to stay entertained online?",
                options: ["Read textbooks", "Stream videos", "Click unknown links", "Download viruses"],
                correctAnswer: "Stream videos",
                explanation: "Gençler çevrimiçi eğlenmek için video akışı yaparlar."
            },
            {
                question: "What is a key tool for cooking pasta?",
                options: ["Spoon", "Pot", "Book", "Shoe"],
                correctAnswer: "Pot",
                explanation: "Makarna pişirmek için kilit bir alet tenceredir ('pot')."
            },
            {
                question: "What do you say to confirm a phone order?",
                options: ["That’s correct", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "That’s correct",
                explanation: "Bir telefon siparişini onaylamak için 'That’s correct' (Bu doğru) diyebilirsiniz."
            },
            {
                question: "What is a space adventure?",
                options: ["Watching TV", "Visiting a planet", "Eating lunch", "Sleeping"],
                correctAnswer: "Visiting a planet",
                explanation: "Bir gezegeni ziyaret etmek ('visiting a planet') bir uzay macerasıdır."
            },
            {
                question: "What is a chore that promotes cleanliness?",
                options: ["Throwing trash", "Sweeping floors", "Watching TV", "Playing games"],
                correctAnswer: "Sweeping floors",
                explanation: "Zeminleri süpürmek ('sweeping floors') temizliği teşvik eden bir ev işidir."
            },
            {
                question: "Which invention powers homes?",
                options: ["Wheel", "Solar panel", "Pen", "Shoe"],
                correctAnswer: "Solar panel",
                explanation: "Güneş paneli ('solar panel') evlere güç veren bir icattır."
            },
            {
                question: "What is a dream for communities?",
                options: ["More conflict", "Stronger unity", "Watching TV", "Sleeping"],
                correctAnswer: "Stronger unity",
                explanation: "Topluluklar için bir hayal daha güçlü birlikteliktir ('stronger unity')."
            },
            {
                question: "What is a natural disaster with snow?",
                options: ["Earthquake", "Blizzard", "Flood", "Tornado"],
                correctAnswer: "Blizzard",
                explanation: "Kar fırtınası ('blizzard') karla ilgili bir doğal afettir."
            },
            {
                question: "What is the best way to avoid online scams?",
                options: ["Click all ads", "Verify websites", "Share passwords", "Post everything"],
                correctAnswer: "Verify websites",
                explanation: "Çevrimiçi dolandırıcılıklardan kaçınmanın en iyi yolu web sitelerini doğrulamaktır."
            },
            {
                question: "What adjective describes a friend who plans well?",
                options: ["Disorganized", "Organized", "Rude", "Lazy"],
                correctAnswer: "Organized",
                explanation: "İyi plan yapan bir arkadaşı 'organized' (düzenli) olarak tanımlarsınız."
            },
            {
                question: "What do teens do to share ideas online?",
                options: ["Stay offline", "Post on forums", "Click unknown links", "Download viruses"],
                correctAnswer: "Post on forums",
                explanation: "Gençler çevrimiçi fikir paylaşmak için forumlarda gönderi yaparlar."
            },
            {
                question: "What is a key appliance for preserving food?",
                options: ["Spoon", "Freezer", "Book", "Shoe"],
                correctAnswer: "Freezer",
                explanation: "Yiyecekleri korumak için kilit bir alet dondurucudur ('freezer')."
            },
            {
                question: "What do you say to apologize for a late call?",
                options: ["Sorry for calling late", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "Sorry for calling late",
                explanation: "Geç bir arama için özür dilemek için 'Sorry for calling late' (Geç aradığım için üzgünüm) diyebilirsiniz."
            },
            {
                question: "What is a wildlife adventure?",
                options: ["Watching TV", "Safari tour", "Eating lunch", "Sleeping"],
                correctAnswer: "Safari tour",
                explanation: "Safari turu ('safari tour') bir yaban hayatı macerasıdır."
            },
            {
                question: "What is a chore that helps animals?",
                options: ["Throwing trash", "Feeding pets", "Watching TV", "Playing games"],
                correctAnswer: "Feeding pets",
                explanation: "Evcil hayvanları beslemek ('feeding pets') hayvanlara yardımcı olan bir ev işidir."
            },
            {
                question: "Which invention enhances safety?",
                options: ["Wheel", "Seatbelt", "Pen", "Shoe"],
                correctAnswer: "Seatbelt",
                explanation: "Emniyet kemeri ('seatbelt') güvenliği artıran bir icattır."
            },
            {
                question: "What is a dream for humanity?",
                options: ["More wars", "Global cooperation", "Watching TV", "Sleeping"],
                correctAnswer: "Global cooperation",
                explanation: "İnsanlık için bir hayal küresel işbirliğidir ('global cooperation')."
            },
            {
                question: "What is a natural disaster with rocks?",
                options: ["Earthquake", "Landslide", "Flood", "Tornado"],
                correctAnswer: "Landslide",
                explanation: "Heyelan ('landslide') kayalarla ilgili bir doğal afettir."
            },
            {
                question: "What is the best way to report cyberbullying?",
                options: ["Ignore it", "Tell an adult", "Click all links", "Post everything"],
                correctAnswer: "Tell an adult",
                explanation: "Siber zorbalığı bildirmenin en iyi yolu bir yetişkine söylemektir."
            },
            {
                question: "What adjective describes a friend who loves adventure?",
                options: ["Boring", "Adventurous", "Rude", "Lazy"],
                correctAnswer: "Adventurous",
                explanation: "Macerayı seven bir arkadaşı 'adventurous' (maceracı) olarak tanımlarsınız."
            },
            {
                question: "What do teens do to build skills online?",
                options: ["Watch random videos", "Learn coding", "Click unknown links", "Download viruses"],
                correctAnswer: "Learn coding",
                explanation: "Gençler çevrimiçi beceri geliştirmek için kodlama öğrenirler."
            },
            {
                question: "What is a key tool for grilling?",
                options: ["Spoon", "Grill", "Book", "Shoe"],
                correctAnswer: "Grill",
                explanation: "Izgara yapmak için kilit bir alet ızgaradır ('grill')."
            },
            {
                question: "What do you say to thank for a phone favor?",
                options: ["Thanks a lot!", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "Thanks a lot!",
                explanation: "Bir telefon iyiliği için teşekkür etmek için 'Thanks a lot!' (Çok teşekkürler!) diyebilirsiniz."
            },
            {
                question: "What is a culinary adventure?",
                options: ["Watching TV", "Trying new foods", "Eating lunch", "Sleeping"],
                correctAnswer: "Trying new foods",
                explanation: "Yeni yiyecekler denemek ('trying new foods') bir mutfak macerasıdır."
            },
            {
                question: "What is a chore that saves money?",
                options: ["Buying new things", "Repairing items", "Watching TV", "Playing games"],
                correctAnswer: "Repairing items",
                explanation: "Eşyaları onarmak ('repairing items') para tasarrufu sağlayan bir ev işidir."
            },
            {
                question: "Which invention supports health?",
                options: ["Wheel", "Vaccine", "Pen", "Shoe"],
                correctAnswer: "Vaccine",
                explanation: "Aşı ('vaccine') sağlığı destekleyen bir icattır."
            },
            {
                question: "What is a dream for exploration?",
                options: ["Staying home", "Discovering space", "Watching TV", "Sleeping"],
                correctAnswer: "Discovering space",
                explanation: "Keşif için bir hayal uzayı keşfetmektir ('discovering space')."
            },
            {
                question: "What is a natural disaster with fire?",
                options: ["Earthquake", "Wildfire", "Flood", "Tornado"],
                correctAnswer: "Wildfire",
                explanation: "Orman yangını ('wildfire') ateşle ilgili bir doğal afettir."
            },
            {
                question: "What is the best way to manage online time?",
                options: ["Stay online all day", "Set time limits", "Click all links", "Post everything"],
                correctAnswer: "Set time limits",
                explanation: "Çevrimiçi zamanı yönetmenin en iyi yolu zaman sınırları belirlemektir."
            },
            {
                question: "What adjective describes a friend who is fair?",
                options: ["Unfair", "Fair", "Rude", "Lazy"],
                correctAnswer: "Fair",
                explanation: "Adil bir arkadaşı 'fair' (adil) olarak tanımlarsınız."
            },
            {
                question: "What do teens do to stay connected online?",
                options: ["Avoid friends", "Use messaging apps", "Click unknown links", "Download viruses"],
                correctAnswer: "Use messaging apps",
                explanation: "Gençler çevrimiçi bağlantıda kalmak için mesajlaşma uygulamalarını kullanır."
            },
            {
                question: "What is a key tool for baking bread?",
                options: ["Spoon", "Oven", "Book", "Shoe"],
                correctAnswer: "Oven",
                explanation: "Ekmek pişirmek için kilit bir alet fırındır ('oven')."
            },
            {
                question: "What do you say to ask for a phone update?",
                options: ["What’s new?", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "What’s new?",
                explanation: "Telefonda bir güncelleme istemek için 'What’s new?' (Ne haber?) diyebilirsiniz."
            },
            {
                question: "What is an urban adventure?",
                options: ["Watching TV", "Exploring a city", "Eating lunch", "Sleeping"],
                correctAnswer: "Exploring a city",
                explanation: "Bir şehri keşfetmek ('exploring a city') bir şehir macerasıdır."
            },
            {
                question: "What is a chore that builds teamwork?",
                options: ["Working alone", "Cleaning with family", "Watching TV", "Playing games"],
                correctAnswer: "Cleaning with family",
                explanation: "Aile ile temizlik yapmak ('cleaning with family') takım çalışmasını geliştiren bir ev işidir."
            },
            {
                question: "Which invention connects people?",
                options: ["Wheel", "Telephone", "Pen", "Shoe"],
                correctAnswer: "Telephone",
                explanation: "Telefon ('telephone') insanları birbirine bağlayan bir icattır."
            },
            {
                question: "What is a dream for education?",
                options: ["More exams", "Better schools", "Watching TV", "Sleeping"],
                correctAnswer: "Better schools",
                explanation: "Eğitim için bir hayal daha iyi okullardır ('better schools')."
            },
            {
                question: "What is a natural disaster with water?",
                options: ["Earthquake", "Flood", "Tornado", "Wildfire"],
                correctAnswer: "Flood",
                explanation: "Sel ('flood') suyla ilgili bir doğal afettir."
            },
            {
                question: "What is the best way to avoid online ads?",
                options: ["Click all ads", "Use ad blockers", "Share passwords", "Post everything"],
                correctAnswer: "Use ad blockers",
                explanation: "Çevrimiçi reklamlardan kaçınmanın en iyi yolu reklam engelleyiciler kullanmaktır."
            },
            {
                question: "What adjective describes a friend who is calm?",
                options: ["Angry", "Calm", "Rude", "Lazy"],
                correctAnswer: "Calm",
                explanation: "Sakin bir arkadaşı 'calm' (sakin) olarak tanımlarsınız."
            },
            {
                question: "What do teens do to promote causes online?",
                options: ["Stay silent", "Share campaigns", "Click unknown links", "Download viruses"],
                correctAnswer: "Share campaigns",
                explanation: "Gençler çevrimiçi davaları desteklemek için kampanyalar paylaşır."
            },
            {
                question: "What is a key appliance for quick cooking?",
                options: ["Spoon", "Microwave", "Book", "Shoe"],
                correctAnswer: "Microwave",
                explanation: "Hızlı pişirme için kilit bir alet mikrodalgadır ('microwave')."
            },
            {
                question: "What do you say to end a formal phone call?",
                options: ["Have a great day!", "Hello", "Sorry", "Goodbye"],
                correctAnswer: "Have a great day!",
                explanation: "Resmi bir telefon görüşmesini bitirmek için 'Have a great day!' (İyi günler!) diyebilirsiniz."
            },
            {
                question: "What is a virtual adventure?",
                options: ["Watching TV", "Virtual reality tour", "Eating lunch", "Sleeping"],
                correctAnswer: "Virtual reality tour",
                explanation: "Sanal gerçeklik turu ('virtual reality tour') bir sanal maceradır."
            },
            {
                question: "What is a chore that improves safety?",
                options: ["Leaving clutter", "Clearing pathways", "Watching TV", "Playing games"],
                correctAnswer: "Clearing pathways",
                explanation: "Yolları temizlemek ('clearing pathways') güvenliği artıran bir ev işidir."
            },
            {
                question: "Which invention supports research?",
                options: ["Wheel", "Microscope", "Pen", "Shoe"],
                correctAnswer: "Microscope",
                explanation: "Mikroskop ('microscope') araştırmayı destekleyen bir icattır."
            },
            {
                question: "What is a dream for the environment?",
                options: ["More pollution", "Clean energy", "Watching TV", "Sleeping"],
                correctAnswer: "Clean energy",
                explanation: "Çevre için bir hayal temiz enerjidir ('clean energy')."
            },
            {
                question: "What is a natural disaster with ice?",
                options: ["Earthquake", "Avalanche", "Flood", "Tornado"],
                correctAnswer: "Avalanche",
                explanation: "Çığ ('avalanche') buzla ilgili bir doğal afettir."
            },
            {
                question: "What is the best way to learn online safely?",
                options: ["Use unverified sites", "Choose trusted platforms", "Click all links", "Post everything"],
                correctAnswer: "Choose trusted platforms",
                explanation: "Çevrimiçi güvenli bir şekilde öğrenmenin en iyi yolu güvenilir platformlar seçmektir."
            }

        ]
    }
};


