class Quiz {
    constructor() {
        this.state = {
            soruIndex: 0,
            dogruCevapSayisi: 0,
            yanlisCevapSayisi: 0,
            toplamSoruSayisi: 0,
            seviye: 'beginner',
            puan: 0,
            mevcutSorular: [],
            cevapVerildi: false,
            tiklamaSayisi: 0,
            selectedGrade: null,
            kullanilanSoruIndeksleri: [],
            correctAnswerCounts: { a: 0, b: 0, c: 0, d: 0 },
            timerId: null,
            timeLeft: 20,
            wronglyAnswered: []
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
            reviewList: document.getElementById('review-list')
        };
        this.sounds = {
            correct: new Audio('correct.mp3'),
            wrong: new Audio('wrong.mp3'),
            start: new Audio('start.mp3'),
            level_up: new Audio('level_up.mp3'),
            game_over: new Audio('game_over.mp3'),
            click: new Audio('click.mp3')
        };
        Object.values(this.sounds).forEach(sound => {
            sound.volume = 0.5;
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
            this.elements.levelTitle.textContent = `Seviye: ${this.state.seviye.toUpperCase()} (Sınıf: ${this.state.selectedGrade})`;
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
                this.initQuiz();
            });
        });

        const backFromReviewButton = document.getElementById('back-to-home-from-review');
        if (backFromReviewButton) {
            backFromReviewButton.addEventListener('click', () => {
                this.sounds.click.play();
                this.resetGame(true);
                this.showScreen('home-screen');
            });
        }

        const backToHomeButton = document.getElementById('back-to-home');
        if (backToHomeButton) {
            backToHomeButton.addEventListener('click', () => {
                this.sounds.click.play();
                this.resetGame(true);
                this.showScreen('home-screen');
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

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.hideModal();
        });
    }

   // EKLENECEK KOD
   showScreen(screenId) {
       // Önce body'deki özel sınıfı kontrol et
       document.body.classList.toggle('quiz-active', screenId === 'quiz-screen');

       // Diğer ekranları gizle, isteneni göster
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
        const gradeQuestions = questionsByGrade[this.state.selectedGrade];
        let questions = [];
        if (this.state.seviye === 'beginner') {
            questions = gradeQuestions.beginner || [];
        } else if (this.state.seviye === 'intermediate') {
            questions = gradeQuestions.intermediate || [];
        } else {
            questions = gradeQuestions.advanced || [];
        }
        this.state.mevcutSorular = this.shuffleArray([...questions]);
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
        this.startTimer();
    }

    checkAnswer(answer, correctAnswer, button) {


    if (this.state.cevapVerildi) {
        return;
    }

    this.stopTimer();

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
        this.showModal({
            title: modalTitle,
            message: currentQuestion.explanation || "Bu soru için bir açıklama bulunmuyor.",
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

    handleLevelCompletion() {
        if (this.state.yanlisCevapSayisi < 10) {
            const nextLevel = { beginner: 'intermediate', intermediate: 'advanced' };
            if (nextLevel[this.state.seviye]) {
                this.state.seviye = nextLevel[this.state.seviye];
                this.sounds.level_up.play();
                this.showModal({
                    title: 'Tebrikler!',
                    message: `Seviye atladınız! Şimdi '${this.state.seviye.toUpperCase()}' seviyesine geçiyorsunuz.`,
                    buttons: [{ text: 'Devam Et', className: 'btn-modal', action: () => { this.hideModal(); this.initQuiz(); } }]
                });
            } else {
                this.sounds.game_over.play();
                this.endGame(true);
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
        if (resetAll) {
            this.state.seviye = 'beginner';
            this.state.selectedGrade = null;
        }
        this.initWrongBar();
        this.updateProgressBar(); 
    }
    
    // Modal, Timer ve Gözden Geçirme Metotları
    showModal(options) {
        this.hideModal(); // Önceki modalı kaldır
        const buttons = Array.isArray(options.buttons) ? options.buttons : [];
        const modal = document.createElement('div');
        modal.className = 'modal active';
        let buttonHTML = buttons.map((btn, index) => `<button class="${btn.className || ''}" data-index="${index}">${btn.text}</button>`).join('');
        modal.innerHTML = `<div class="modal-content"><h3>${options.title}</h3><p>${options.message}</p><div class="modal-buttons">${buttonHTML}</div></div>`;
        document.body.appendChild(modal);
        modal.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                const btnIndex = parseInt(button.dataset.index, 10);
                if (buttons[btnIndex] && typeof buttons[btnIndex].action === 'function') {
                    buttons[btnIndex].action();
                }
            });
        });
    }

    hideModal() {
        document.querySelector('.modal')?.remove();
    }

    startTimer() {
        this.stopTimer();
        this.resetTimer();
        this.state.timerId = setInterval(() => {
            this.state.timeLeft--;
            this.elements.timer.textContent = this.state.timeLeft;
            this.elements.timer.className = 'timer';
            if (this.state.timeLeft <= 10 && this.state.timeLeft > 5) this.elements.timer.classList.add('warning');
            else if (this.state.timeLeft <= 5) this.elements.timer.classList.add('danger');
            if (this.state.timeLeft <= 0) this.handleTimeout();
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.state.timerId);
    }

    resetTimer() {
        this.state.timeLeft = 20;
        this.elements.timer.textContent = this.state.timeLeft;
    }

 handleTimeout() {
    this.stopTimer();
    this.state.cevapVerildi = true;
    this.sounds.wrong.play();
    this.state.yanlisCevapSayisi++;
    this.updateWrongBar();

    const buttons = this.elements.answers.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    const currentQuestion = this.state.mevcutSorular[this.state.kullanilanSoruIndeksleri.slice(-1)[0]];
    if (!currentQuestion) return;

    // Doğru cevabı yeşil renkte göster
    buttons.forEach(btn => {
        if (btn.textContent.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
            btn.classList.add('correct');
        }
    });

    this.state.wronglyAnswered.push({
        question: currentQuestion,
        userAnswer: 'Süre Doldu'
    });

    // Oyun bitti mi kontrol et
    if (this.state.yanlisCevapSayisi >= 10) {
        this.sounds.game_over.play();
        this.endGame(false);
        return;
    }

    // Süre doldu popup'ını göster
    setTimeout(() => {
        this.showModal({
            title: "Süre Doldu!",
            message: currentQuestion.explanation || "Bu soru için bir açıklama bulunmuyor.",
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

    showReviewScreen() {
        this.hideModal();
        this.showScreen('review-screen');
        this.elements.reviewList.innerHTML = '';
        if (this.state.wronglyAnswered.length === 0) {
            this.elements.reviewList.innerHTML = '<p>Hiç yanlış cevabınız yok. Tebrikler!</p>';
            return;
        }
        this.state.wronglyAnswered.forEach(item => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            reviewItem.innerHTML = `<h4>${item.question.question}</h4><p>Sizin Cevabınız: <span class="user-answer">${item.userAnswer}</span></p><p>Doğru Cevap: <span class="correct-answer">${item.question.correctAnswer}</span></p>`;
            this.elements.reviewList.appendChild(reviewItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Quiz();
});