

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

        ]
    },

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

        ]
    },


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

        ]
    },
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

        // **********************************
        //         8. SINIF - İLERİ (Advanced)
        // **********************************
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


