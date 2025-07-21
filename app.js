class Quiz {


/**
 * Bölüm sonu doğru sayısına göre başarı mesajı döndürür.
 * @param {number} correctCount - O bölümdeki doğru cevap sayısı.
 * @returns {string|null} - Başarı mesajı veya mesaj yoksa null.
 */
getSuccessMessage(correctCount) {
    if (correctCount === 50) {
        return "🏆 Mükemmelsin! 🏆";
    }
    if (correctCount >= 46 && correctCount <= 49) {
        return "⭐ Mükemmele Yakın! ⭐";
    }
    if (correctCount >= 42 && correctCount <= 45) {
        return "👍 Çok İyi! 👍";
    }
    if (correctCount >= 40 && correctCount <= 41) {
        return "🙂 İyi, ama daha da iyi olabilirsin!";
    }

    return null; 
}


    constructor() {
       this.state = {
            soruIndex: 0,
            dogruCevapSayisi: 0,
            yanlisCevapSayisi: 0,
            toplamSoruSayisi: 0,
            seviye: 'beginner',
            bolumIndex: 0, 
            puan: 0,
            seviyeSorulari: [], 
            mevcutSorular: [], 
            cevapVerildi: false,
            tiklamaSayisi: 0,
            selectedGrade: null,
            kullanilanSoruIndeksleri: [],
            correctAnswerCounts: { a: 0, b: 0, c: 0, d: 0 },
            timerId: null,
            timeLeft: 30, 
            wronglyAnswered: [],
	    isPaused: false,
		jokers: {
         fiftyFifty: true,
         extraTime: true,
         skipQuestion: true
     }






        };


        this.elements = {
            homeScreen: document.getElementById('home-screen'),
            quizScreen: document.getElementById('quiz-screen'),
            question: document.getElementById('question'),
            answers: document.getElementById('answers'),
            levelTitle: document.getElementById('level-title'),
            result: document.getElementById('result'),
            progressBar: document.getElementById('progress-bar'),
            wrongBar: document.getElementById('wrong-bar'),             
            timer: document.getElementById('timer'),
            explanationText: document.getElementById('explanation-text'),
            reviewScreen: document.getElementById('review-screen'),
            reviewList: document.getElementById('review-list'),
	    jokerContainer: document.getElementById('joker-container'),
            jokerFiftyFifty: document.getElementById('joker-fifty-fifty'),
            jokerExtraTime: document.getElementById('joker-extra-time'),
            jokerSkipQuestion: document.getElementById('joker-skip-question')



        };

	this.sounds = {
	correct: new Audio('correct.mp3'),
	wrong: new Audio('wrong.mp3'),
	start: new Audio('start.mp3'),
	level_up: new Audio('level_up.mp3'),
	game_over: new Audio('game_over.mp3'),
	click: new Audio('click.mp3'),
	music: new Audio('music.mp3') };
	this.sounds.music.loop = true; 
	Object.values(this.sounds).forEach(sound => {
    	sound.volume = 0.3; 
	sound.onerror = () => console.warn(`Ses dosyası yüklenemedi: ${sound.src}`);
});



        this.bindEvents();
        this.initWrongBar();
        this.showScreen('home-screen');
    }

    initWrongBar() {
        this.elements.wrongBar.innerHTML = '';
        for (let i = 0; i < 10; i++) {
            const segment = document.createElement('div');
            segment.className = 'wrong-bar-segment';
            this.elements.wrongBar.appendChild(segment);
        }
        this.updateWrongBar();
    }


updateJokerButtons() {
    this.elements.jokerFiftyFifty.disabled = !this.state.jokers.fiftyFifty;
    this.elements.jokerExtraTime.disabled = !this.state.jokers.extraTime;
    this.elements.jokerSkipQuestion.disabled = !this.state.jokers.skipQuestion;
}

confirmAndUseJoker(jokerType) {
    if (this.state.cevapVerildi || !this.state.jokers[jokerType]) {
        return;
    }

    this.stopTimer(); 
    const jokerNames = {
        fiftyFifty: '%50 Joker',
        extraTime: 'Ekstra Süre',
        skipQuestion: 'Soru Atlama'
    };

    this.showModal({
        title: 'Jokeri Kullan',
        message: `<b>${jokerNames[jokerType]}</b> jokerini kullanmak istediğinize emin misiniz?`,
        showCloseButton: false,
        buttons: [
            {
                text: 'Evet, Kullan',
                className: 'btn-modal btn-green',
                action: () => {
                    this.hideModal();
                    this.applyJoker(jokerType);
                }
            },
            {
                text: 'Hayır, Vazgeç',
                className: 'btn-modal btn-red',
                action: () => {
                    this.hideModal();
                    if (!this.state.cevapVerildi) {
                        this.startTimer(true);
                    }
                }
            }
        ]
    });
}

applyJoker(jokerType) {
    this.state.jokers[jokerType] = false;
    this.updateJokerButtons();

    switch (jokerType) {
        case 'fiftyFifty':
            this.applyFiftyFifty();
            break;
        case 'extraTime':
            this.applyExtraTime();
            break;
        case 'skipQuestion':
            this.applySkipQuestion();
            break;
    }
}

applyFiftyFifty() {
    const currentQuestion = this.state.mevcutSorular[this.state.kullanilanSoruIndeksleri.slice(-1)[0]];
    const correctAnswer = currentQuestion.correctAnswer;
    const answerButtons = Array.from(this.elements.answers.querySelectorAll('button'));
    
    const wrongAnswers = answerButtons.filter(button => button.textContent !== correctAnswer);
    
    this.shuffleArray(wrongAnswers).slice(0, 2).forEach(button => {
        button.disabled = true;
        button.style.opacity = '0.5';
    });
    this.startTimer(true); 
}

applyExtraTime() {
    this.state.timeLeft += 15;
    this.elements.timer.textContent = this.state.timeLeft;
    this.startTimer(true); 
}

applySkipQuestion() {
    this.stopTimer();
    this.state.cevapVerildi = true; 

    const buttons = this.elements.answers.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    const currentQuestion = this.state.mevcutSorular[this.state.kullanilanSoruIndeksleri.slice(-1)[0]];
    if (!currentQuestion) return;

    buttons.forEach(btn => {
        if (btn.textContent.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
            btn.classList.add('correct');
        }
    });
    
    setTimeout(() => {
        this.showModal({
            title: "Soru Atlandı!",
            message: `Doğru cevap gösterildi. Bir sonraki soruya geçiliyor.`,
            buttons: [{
                text: 'Sonraki Soru',
                className: 'btn-modal btn-next',
                action: () => {
                    this.hideModal();
                    if (this.state.kullanilanSoruIndeksleri.length >= this.state.mevcutSorular.length) {
                        this.handleLevelCompletion();
                    } else {
                        this.displayQuestion();
                    }
                }
            }]
        });
    }, 1500); 
}




    updateWrongBar() {
        const remainingSegments = 10 - this.state.yanlisCevapSayisi;
        const segments = this.elements.wrongBar.querySelectorAll('.wrong-bar-segment');
        segments.forEach((segment, index) => {
            segment.classList.remove('inactive', 'yellow', 'red', 'dark-red');
            if (index < remainingSegments) {
                if (remainingSegments >= 8) {} 
                else if (remainingSegments >= 5) { segment.classList.add('yellow'); } 
                else if (remainingSegments >= 2) { segment.classList.add('red'); } 
                else if (remainingSegments === 1) { segment.classList.add('dark-red'); }
            } else {
                segment.classList.add('inactive');
            }
        });
    }

    updateLevelTitle() {
        if (this.elements.levelTitle) {
            this.elements.levelTitle.textContent = `Seviye: ${this.state.seviye.toUpperCase()} - Bölüm ${this.state.bolumIndex + 1} (Sınıf: ${this.state.selectedGrade})`;
        }
    }

    bindEvents() {
        const gradeButtons = document.querySelectorAll('.grade-button');
        gradeButtons.forEach(button => {
            button.addEventListener('click', () => {
    const grade = button.getAttribute('data-grade');
    this.state.selectedGrade = grade;
    this.resetGame(false); 
    this.showScreen('quiz-screen');
    this.sounds.start.play();



    const musicIcon = document.querySelector('#music-toggle i');
    if (musicIcon && musicIcon.classList.contains('fa-volume-up')) {
       this.sounds.music.play();
    }
    
    this.initQuiz();
});
        });

     

        const backToHomeButton = document.getElementById('back-to-home');
        if (backToHomeButton) {
    backToHomeButton.addEventListener('click', () => {
        this.sounds.click.play();
        this.stopTimer();
        
        this.state.isPaused = true; 

        if (this.state.wronglyAnswered.length > 0) {
            this.showModal({
                title: 'Ana Sayfaya Dön',
                message: 'Mevcut ilerlemeniz sıfırlanacak. Dönmeden önce yanlışlarınızı görmek ister misiniz?',
                showCloseButton: true,
                buttons: [
                    {
                        text: 'Evet, Yanlışları Göster',
                        className: 'btn-modal btn-orange',
                        action: () => {
                            this.state.isPaused = false; 
                            this.showReviewScreen(false);
                        }
                    },
                    {
                        text: 'Hayır, Ana Sayfaya Dön',
                        className: 'btn-modal btn-blue',
                        action: () => {
                            this.state.isPaused = false; 
                            this.hideModal();
                            this.resetGame(true);
                            this.showScreen('home-screen');
                        }
                    }
                ]
            });
        } else {
            this.resetGame(true);
            this.showScreen('home-screen');
        }
    });
}


        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.sounds.click.play();
                document.body.dataset.theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
                const icon = themeToggle.querySelector('i');
                if (icon) {
                    icon.className = document.body.dataset.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
                }
            });
        }

const musicToggle = document.getElementById('music-toggle');
if (musicToggle) {
    musicToggle.addEventListener('click', () => {
        const icon = musicToggle.querySelector('i');
        if (this.sounds.music.paused) {
            this.sounds.music.play();
            icon.className = 'fas fa-volume-up';
        } else {
            this.sounds.music.pause();
            icon.className = 'fas fa-volume-off';
        }
    });
}

	this.elements.jokerFiftyFifty.addEventListener('click', () => this.confirmAndUseJoker('fiftyFifty'));
        this.elements.jokerExtraTime.addEventListener('click', () => this.confirmAndUseJoker('extraTime'));
        this.elements.jokerSkipQuestion.addEventListener('click', () => this.confirmAndUseJoker('skipQuestion'));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.hideModal();
        });
    }

   showScreen(screenId) {
       document.body.classList.toggle('quiz-active', screenId === 'quiz-screen');
       document.querySelectorAll('.screen').forEach(screen => {
           screen.classList.remove('active');
       });
       document.getElementById(screenId)?.classList.add('active');
   }

    initQuiz() {
        if (!this.loadQuestions()) {
            this.showModal({ title: 'Hata!', message: `Sorular yüklenemedi! Lütfen 'sorular.js' dosyasını kontrol edin.` });
            this.showScreen('home-screen');
            return;
        }

        this.prepareQuestionsForLevel();
        
        if (this.state.mevcutSorular.length === 0) {
            this.showModal({ title: 'Soru Yok!', message: `Seçtiğiniz sınıf ve seviyede soru bulunamadı! Ana sayfaya dönülüyor.` });
            this.showScreen('home-screen');
            return;
        }


        this.displayQuestion();
        this.updateLevelTitle();
    }

    loadQuestions() {
        return typeof questionsByGrade !== 'undefined' && questionsByGrade[this.state.selectedGrade];
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    prepareQuestionsForLevel() {
        if (this.state.seviyeSorulari.length === 0) {
            const gradeQuestions = questionsByGrade[this.state.selectedGrade];
            let allLevelQuestions = [];
            if (this.state.seviye === 'beginner') {
                allLevelQuestions = gradeQuestions.beginner || [];
            } else if (this.state.seviye === 'intermediate') {
                allLevelQuestions = gradeQuestions.intermediate || [];
            } else {
                allLevelQuestions = gradeQuestions.advanced || [];
            }
            this.state.seviyeSorulari = this.shuffleArray([...allLevelQuestions]);
        }

        const bolumSorulariSayisi = 50;
        const baslangicIndex = this.state.bolumIndex * bolumSorulariSayisi;
        const bitisIndex = baslangicIndex + bolumSorulariSayisi;
        this.state.mevcutSorular = this.state.seviyeSorulari.slice(baslangicIndex, bitisIndex);
        this.state.kullanilanSoruIndeksleri = [];
        this.updateProgressBar();
    }

    displayQuestion() {
        const { mevcutSorular, kullanilanSoruIndeksleri } = this.state;
        const availableQuestionIndices = mevcutSorular.map((_, index) => index).filter(index => !kullanilanSoruIndeksleri.includes(index));

        if (availableQuestionIndices.length === 0) {
            this.stopTimer();
            this.handleLevelCompletion();
            return;
        }
        this.elements.jokerContainer.style.display = 'flex';

        const questionIndex = availableQuestionIndices[Math.floor(Math.random() * availableQuestionIndices.length)];
        kullanilanSoruIndeksleri.push(questionIndex);
        const question = mevcutSorular[questionIndex];
        this.elements.question.textContent = question.question;
        this.elements.answers.innerHTML = '';

        const options = this.shuffleArray([...question.options]);
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => {
                this.sounds.click.play();
                this.checkAnswer(option, question.correctAnswer, button);
            });
            this.elements.answers.appendChild(button);
        });

        this.state.toplamSoruSayisi = mevcutSorular.length;
        this.updateProgressBar(); 
        this.state.cevapVerildi = false;
this.startTimer(false); 



    }

    checkAnswer(answer, correctAnswer, button) {


    if (this.state.cevapVerildi) {
        return;
    }

    this.stopTimer();
        this.elements.jokerContainer.style.display = 'none';


    this.state.cevapVerildi = true;
    const buttons = this.elements.answers.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    const currentQuestion = this.state.mevcutSorular[this.state.kullanilanSoruIndeksleri.slice(-1)[0]];

    if (!currentQuestion) {
        console.error("KRİTİK HATA: 'currentQuestion' verisi bulunamadı!");
        this.showModal({ title: "Hata!", message: "Soru verisi alınamadı." });
        return;
    }

    let isCorrect = answer.toLowerCase() === correctAnswer.toLowerCase();

    let modalTitle = isCorrect ? "Doğru!" : "Yanlış!";

    if (isCorrect) {
        if (button) button.classList.add('correct');
        this.state.dogruCevapSayisi++;
        this.sounds.correct.play();
        if (typeof confetti === 'function') confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else {
        if (button) button.classList.add('wrong');
        this.state.yanlisCevapSayisi++;
        this.updateWrongBar();
        this.sounds.wrong.play();
        if (window.navigator.vibrate) window.navigator.vibrate(200);

        this.state.wronglyAnswered.push({
            question: currentQuestion,
            userAnswer: answer
        });

        buttons.forEach(btn => {
            if (btn.textContent.toLowerCase() === correctAnswer.toLowerCase()) {
                btn.classList.add('correct');
            }
        });
    }

    if (this.state.yanlisCevapSayisi >= 10) {
        this.sounds.game_over.play();
        this.endGame(false);
        return;
    }

setTimeout(() => {
    const kalanSoru = this.state.mevcutSorular.length - this.state.kullanilanSoruIndeksleri.length;
    const seviyeAdi = this.state.seviye.charAt(0).toUpperCase() + this.state.seviye.slice(1);

    const message = `
        <span class="stats-box stats-correct">Doğru Sayısı: ${this.state.dogruCevapSayisi}</span>
        <span class="stats-box stats-wrong">Yanlış Sayısı: ${this.state.yanlisCevapSayisi}</span>
        <span class="kalan-soru">
            ${seviyeAdi}: ${this.state.bolumIndex + 1}. Bölüm bitmesine kalan soru sayısı: ${kalanSoru}
        </span>
    `;

    this.showModal({
        title: modalTitle,
        message: message,
        buttons: [
            {
                text: 'Sonraki Soru',
                className: 'btn-modal btn-next',
                action: () => {
                    this.hideModal();
                    if (this.state.kullanilanSoruIndeksleri.length >= this.state.mevcutSorular.length) {
                        this.handleLevelCompletion();
                    } else {
                        this.displayQuestion();
                    }
                }
            }
        ]
    });
}, 1200);


}

    updateProgressBar() {
        const percentage = this.state.mevcutSorular.length > 0 ? (this.state.kullanilanSoruIndeksleri.length / this.state.mevcutSorular.length) * 100 : 0;
        this.elements.progressBar.style.width = `${percentage}%`;
    }


moveToNextPart() {
        this.hideModal();
        this.state.bolumIndex++;         
        this.state.yanlisCevapSayisi = 0;
        this.state.wronglyAnswered = [];
        this.initWrongBar();
this.state.jokers = { fiftyFifty: true, extraTime: true, skipQuestion: true };
        this.updateJokerButtons();


        
        this.initQuiz();
    }


handleLevelCompletion() {
    if (this.state.yanlisCevapSayisi < 10) {
	if (this.state.bolumIndex < 3) {            
	this.sounds.level_up.play();
            const sectionCorrectCount = 50 - this.state.yanlisCevapSayisi;
            const successMessage = this.getSuccessMessage(sectionCorrectCount);
	let message = `Tebrikler! ${this.state.seviye.toUpperCase()} seviyesinin ${this.state.bolumIndex + 1}. bölümünü tamamladınız.`;
            if (successMessage) {
                message += `<br><br><div class="success-level">${successMessage}</div>`;
            }            
            let modalButtons = [
                {
                    text: 'Sonraki Bölüme Geç',
                    className: 'btn-modal',
                    action: () => this.moveToNextPart()
                }
            ];

            if (this.state.wronglyAnswered.length > 0) {
                modalButtons.unshift({
                    text: 'Yanlışları Gözden Geçir',
                    className: 'btn-modal btn-review',
                    action: () => this.showReviewScreen(true)
                });
            }

            this.showModal({
                title: 'Bölüm Tamamlandı!',
                message: message, 
                buttons: modalButtons
            });

        } else { 
                const nextLevel = { beginner: 'intermediate', intermediate: 'advanced' };
                if (nextLevel[this.state.seviye]) {
                    this.state.seviye = nextLevel[this.state.seviye];
                    this.state.bolumIndex = 0;
                    this.state.seviyeSorulari = [];
                    this.sounds.level_up.play();
                    this.showModal({
                        title: 'Tebrikler, Seviye Atladınız!',
                        message: `Şimdi '${this.state.seviye.toUpperCase()}' seviyesine geçiyorsunuz.`,
                        buttons: [{ text: 'Devam Et', className: 'btn-modal', action: () => { this.hideModal(); this.initQuiz(); } }]
                    });
                } else {
                    this.sounds.game_over.play();
                    this.endGame(true);
                }
            }
        } else {
            this.sounds.game_over.play();
            this.endGame(false);
        }
    }

    endGame(isSuccess) {
        let title = isSuccess ? "Oyun Tamamlandı!" : "Oyun Bitti!";
        let message = `${isSuccess ? "Tebrikler! Oyunu başarıyla tamamladınız!" : "Yanlış cevap sınırını aştınız."}<br>Doğru: ${this.state.dogruCevapSayisi}, Yanlış: ${this.state.yanlisCevapSayisi}`;
        let buttons = [
            { text: 'Ana Sayfaya Dön', className: 'btn-modal', action: () => { this.hideModal(); this.resetGame(true); this.showScreen('home-screen'); } }
        ];
        if (this.state.wronglyAnswered.length > 0) {
            buttons.push({ text: 'Yanlışları Gözden Geçir', className: 'btn-modal', action: () => this.showReviewScreen() });
        }
        this.showModal({ title, message, buttons });
    }

   resetGame(resetAll = true) {
    this.state.dogruCevapSayisi = 0;
    this.state.yanlisCevapSayisi = 0;
    this.state.puan = 0;
    this.state.kullanilanSoruIndeksleri = [];
    this.state.wronglyAnswered = [];
    this.state.seviyeSorulari = [];
    this.state.mevcutSorular = [];
        this.state.jokers = { fiftyFifty: true, extraTime: true, skipQuestion: true };




    if (resetAll) {
        this.state.seviye = 'beginner';
        this.state.bolumIndex = 0;
        this.state.selectedGrade = null;
        this.sounds.music.pause();
        this.sounds.music.currentTime = 0;
    }
    this.initWrongBar();
    this.updateProgressBar(); 
        this.updateJokerButtons();
}
    showModal(options) {
    document.querySelector('.modal')?.remove(); 
    this.stopTimer(); 

    const buttons = Array.isArray(options.buttons) ? options.buttons : [];
    const modal = document.createElement('div');
    modal.className = 'modal active';
    const closeButtonHTML = options.showCloseButton ? `<button class="modal-close">&times;</button>` : '';
    const buttonHTML = buttons.map((btn, index) => `<button class="${btn.className || ''}" data-index="${index}">${btn.text}</button>`).join('');

    modal.innerHTML = `
        <div class="modal-content">
            ${closeButtonHTML}
            <h3>${options.title}</h3>
            <div class="modal-message">${options.message}</div>
            <div class="modal-buttons">${buttonHTML}</div>
        </div>`;
    document.body.appendChild(modal);

    modal.querySelectorAll('.modal-buttons button').forEach(button => {
        button.addEventListener('click', () => {
            const btnIndex = parseInt(button.dataset.index, 10);
            if (buttons[btnIndex] && typeof buttons[btnIndex].action === 'function') {
                buttons[btnIndex].action();
            }
        });
    });

    const closeButton = modal.querySelector('.modal-close');
if (closeButton) {
    closeButton.addEventListener('click', () => {
        if (this.state.isPaused) {
            if (this.state.timeLeft > 0 && !this.state.cevapVerildi) {
                this.startTimer(true);
            }
            this.state.isPaused = false;
        }
        this.hideModal();
    });
}}

  hideModal() {
    this.state.isPaused = false; 
    document.querySelector('.modal')?.remove();
}

    startTimer(isResume = false) {
    this.stopTimer(); 
    if (!isResume) {
        this.resetTimer();
    }

    this.state.timerId = setInterval(() => {
        this.state.timeLeft--;
        this.elements.timer.textContent = this.state.timeLeft;
        this.elements.timer.className = 'timer';

        if (this.state.timeLeft <= 10 && this.state.timeLeft > 5) {
            this.elements.timer.classList.add('warning');
        } else if (this.state.timeLeft <= 5) {
            this.elements.timer.classList.add('danger');
        }

        if (this.state.timeLeft <= 0) {
            this.handleTimeout();
        }
    }, 1000);
}


    stopTimer() {
        clearInterval(this.state.timerId);
    }

    resetTimer() {
        this.state.timeLeft = 30;
        this.elements.timer.textContent = this.state.timeLeft;
    }

handleTimeout() {
    this.stopTimer();
        this.elements.jokerContainer.style.display = 'none';



    this.state.cevapVerildi = true;
    this.sounds.wrong.play();
    this.state.yanlisCevapSayisi++;
    this.updateWrongBar();

    const buttons = this.elements.answers.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    const currentQuestion = this.state.mevcutSorular[this.state.kullanilanSoruIndeksleri.slice(-1)[0]];
    if (!currentQuestion) return;

    buttons.forEach(btn => {
        if (btn.textContent.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
            btn.classList.add('correct');
        }
    });

    this.state.wronglyAnswered.push({
        question: currentQuestion,
        userAnswer: 'Süre Doldu'
    });

    if (this.state.yanlisCevapSayisi >= 10) {
        this.sounds.game_over.play();
        this.endGame(false);
        return;
    }
    
    setTimeout(() => {
        const kalanSoru = this.state.mevcutSorular.length - this.state.kullanilanSoruIndeksleri.length;
        const seviyeAdi = this.state.seviye.charAt(0).toUpperCase() + this.state.seviye.slice(1);
        const message = `
            <span class="stats-box stats-correct">Doğru Sayısı: ${this.state.dogruCevapSayisi}</span>
            <span class="stats-box stats-wrong">Yanlış Sayısı: ${this.state.yanlisCevapSayisi}</span>
            <span class="kalan-soru">
                ${seviyeAdi}: ${this.state.bolumIndex + 1}. Bölüm bitmesine kalan soru sayısı: ${kalanSoru}
            </span>`;

        this.showModal({
            title: "Süre Doldu!",
            message: message,
            buttons: [{
                text: 'Sonraki Soru',
                className: 'btn-modal btn-next',
                action: () => {
                    this.hideModal();
                    if (this.state.kullanilanSoruIndeksleri.length >= this.state.mevcutSorular.length) {
                        this.handleLevelCompletion();
                    } else {
                        this.displayQuestion();
                    }
                }
            }]
        });
    }, 1200);
}

   showReviewScreen(isMidGameReview = false) {
        this.hideModal();
        this.showScreen('review-screen');
        this.elements.reviewList.innerHTML = '';

        if (this.state.wronglyAnswered.length === 0) {
            this.elements.reviewList.innerHTML = '<p>Bu bölümde hiç yanlış cevabınız yok. Tebrikler!</p>';
        } else {
            this.state.wronglyAnswered.forEach(item => {
                const reviewItem = document.createElement('div');
                reviewItem.className = 'review-item';
                reviewItem.innerHTML = `
                    <h4>${item.question.question}</h4>
                    <p>Sizin Cevabınız: <span class="user-answer">${item.userAnswer}</span></p>
                    <p>Doğru Cevap: <span class="correct-answer">${item.question.correctAnswer}</span></p>
                    ${item.question.explanation ? `<p class="explanation"><strong>Açıklama:</strong> ${item.question.explanation}</p>` : ''}
                `;
                this.elements.reviewList.appendChild(reviewItem);
            });
        }
        const oldButton = document.getElementById('back-to-home-from-review');
        const newButton = oldButton.cloneNode(true); 
        oldButton.parentNode.replaceChild(newButton, oldButton);

        if (isMidGameReview) {
            newButton.textContent = 'Sonraki Bölüme Geç';
            newButton.addEventListener('click', () => this.moveToNextPart());
        } else { 
            newButton.textContent = 'Ana Sayfaya Dön';
            newButton.addEventListener('click', () => {
                this.resetGame(true);
                this.showScreen('home-screen');
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Quiz();
});