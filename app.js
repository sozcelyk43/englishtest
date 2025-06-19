// app.js içeriği
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
            correctAnswerCounts: { a: 0, b: 0, c: 0, d: 0 }
        };
        this.elements = {
            homeScreen: document.getElementById('home-screen'),
            quizScreen: document.getElementById('quiz-screen'),
            question: document.getElementById('question'),
            answers: document.getElementById('answers'),
            levelTitle: document.getElementById('level-title'),
            result: document.getElementById('result'),
            progressBar: document.getElementById('progress-bar'),
            wrongBar: document.getElementById('wrong-bar')
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
        this.loadProgress();
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
            segment.classList.remove('inactive', 'yellow', 'red', 'dark-red'); // Tüm renkleri temizle

            if (index < remainingSegments) {
                if (remainingSegments >= 8) {
                    // Default green, no additional class
                } else if (remainingSegments >= 5) {
                    segment.classList.add('yellow');
                } else if (remainingSegments >= 2) {
                    segment.classList.add('red');
                } else if (remainingSegments === 1) {
                    segment.classList.add('dark-red');
                }
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
                if (!grade) {
                    this.showErrorModal({ title: 'Hata!', message: 'Sınıf tanımlı değil!' });
                    return;
                }
                this.state.selectedGrade = grade;
                this.state.seviye = 'beginner';
                this.resetGame(false); // Sınıfı koruyarak sıfırla
                this.showScreen('quiz-screen');
                this.sounds.start.play();
                this.initQuiz();
            });
        });

        const backToHomeButton = document.getElementById('back-to-home');
        if (backToHomeButton) {
            backToHomeButton.addEventListener('click', () => {
                this.sounds.click.play();
                this.resetGame(true); // Tamamen sıfırla
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
            const currentTheme = document.body.dataset.theme || 'dark'; // Varsayılanı dark olarak değiştirdim
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
            }
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modal = document.querySelector('.modal.active');
                if (modal) this.hideModal();
            }
        });
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        const activeScreen = document.getElementById(screenId);
        if (activeScreen) {
            activeScreen.classList.add('active');
        }
    }

    initQuiz() {
        if (!this.loadQuestions()) {
            this.showErrorModal({ title: 'Hata!', message: 'Sorular yüklenemedi! Lütfen tekrar deneyin.' });
            this.showScreen('home-screen');
            return;
        }
        this.prepareQuestionsForLevel();
        if (this.state.mevcutSorular.length === 0) {
            this.showErrorModal({ title: 'Soru Yok!', message: `Sınıf ${this.state.selectedGrade}, ${this.state.seviye} seviyesinde soru bulunamadı! Ana sayfaya dönülüyor.` });
            this.showScreen('home-screen');
            return;
        }
        this.displayQuestion();
        this.updateLevelTitle();
    }

    loadQuestions() {
        return questionsByGrade && questionsByGrade[this.state.selectedGrade];
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
        let questions;
        if (this.state.seviye === 'beginner') {
            questions = gradeQuestions.beginner || [];
        } else if (this.state.seviye === 'intermediate') {
            questions = gradeQuestions.intermediate || [];
        } else {
            questions = gradeQuestions.advanced || [];
        }

        this.state.mevcutSorular = this.shuffleArray([...questions]);
        this.state.kullanilanSoruIndeksleri = [];
        this.updateProgressBar(); // Yeni seviye soruları yüklendiğinde ilerleme çubuğunu sıfırla
    }

    displayQuestion() {
        const { mevcutSorular, kullanilanSoruIndeksleri, correctAnswerCounts } = this.state;

        const availableQuestionIndices = mevcutSorular
            .map((_, index) => index)
            .filter(index => !kullanilanSoruIndeksleri.includes(index));

        if (availableQuestionIndices.length === 0) {
            this.handleLevelCompletion();
            return;
        }

        const questionIndex = availableQuestionIndices[Math.floor(Math.random() * availableQuestionIndices.length)];
        kullanilanSoruIndeksleri.push(questionIndex);

        const question = mevcutSorular[questionIndex];
        this.elements.question.textContent = question.question;
        this.elements.answers.innerHTML = '';

        const options = [...question.options];
        const correctAnswer = question.correctAnswer;

        const counts = Object.entries(correctAnswerCounts);
        const minCount = counts.length > 0 ? Math.min(...counts.map(([_, count]) => count)) : 0;
        const leastUsedOptions = counts.filter(([_, count]) => count === minCount).map(([option]) => option);
        const selectedOptionLetter = leastUsedOptions.length > 0 ? leastUsedOptions[Math.floor(Math.random() * leastUsedOptions.length)] : 'a';

        const shuffledOtherOptions = this.shuffleArray(options.filter(opt => opt !== correctAnswer));
        const finalOptions = new Array(4).fill(null);
        const selectedIndex = ['a', 'b', 'c', 'd'].indexOf(selectedOptionLetter);
        finalOptions[selectedIndex] = correctAnswer;

        let otherOptionIndex = 0;
        for (let i = 0; i < 4; i++) {
            if (finalOptions[i] === null) {
                finalOptions[i] = shuffledOtherOptions[otherOptionIndex++];
            }
        }
        this.state.correctAnswerCounts[selectedOptionLetter]++;

        finalOptions.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = `${String.fromCharCode(97 + index)}) ${option}`;
            button.addEventListener('click', () => {
                this.sounds.click.play();
                this.checkAnswer(option, correctAnswer, button);
            });
            this.elements.answers.appendChild(button);
        });

        this.state.toplamSoruSayisi = mevcutSorular.length;
        this.updateProgressBar(); // İlerleme çubuğunu güncelle
        this.state.cevapVerildi = false;
    }

    checkAnswer(answer, correctAnswer, button) {
        if (this.state.cevapVerildi) return;
        this.state.cevapVerildi = true;
        this.state.tiklamaSayisi++;

        const buttons = this.elements.answers.querySelectorAll('button');
        buttons.forEach(btn => btn.disabled = true);

        if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
            button.classList.add('correct');
            this.state.dogruCevapSayisi++;
            this.state.puan += 10;
            this.sounds.correct.play();
            this.elements.result.textContent = 'Doğru!';
            this.elements.result.style.color = '#28a745';
        } else {
            button.classList.add('wrong');
            this.state.yanlisCevapSayisi++;
            this.updateWrongBar();
            this.sounds.wrong.play();
            buttons.forEach(btn => {
                const buttonText = btn.textContent.slice(3).trim();
                if (buttonText.toLowerCase() === correctAnswer.toLowerCase()) {
                    btn.classList.add('correct');
                }
            });
            this.elements.result.textContent = `Yanlış! Doğru cevap: ${correctAnswer}`;
            this.elements.result.style.color = '#dc3545';
        }

        if (this.state.yanlisCevapSayisi >= 10) {
            this.sounds.game_over.play();
            this.endGame(false);
            return;
        }

        setTimeout(() => {
            this.elements.result.textContent = '';
            this.displayQuestion();
        }, 1500);
    }

    updateProgressBar() {
        if (this.state.mevcutSorular.length === 0) {
            this.elements.progressBar.style.width = '0%';
            return;
        }
        const percentage = (this.state.kullanilanSoruIndeksleri.length / this.state.mevcutSorular.length) * 100;
        this.elements.progressBar.style.width = `${percentage}%`;
    }

    handleLevelCompletion() {
        if (this.state.yanlisCevapSayisi < 10) {
            if (this.state.seviye === 'beginner') {
                this.state.seviye = 'intermediate';
                this.sounds.level_up.play();
                this.showModal({
                    title: 'Tebrikler!',
                    message: 'Başlangıç seviyesini başarıyla tamamladınız. Şimdi orta seviyeye geçiyorsunuz.',
                    buttons: [{ text: 'Devam Et', className: 'btn-modal btn-continue', action: () => this.continueToNextLevel() }]
                });
            } else if (this.state.seviye === 'intermediate') {
                this.state.seviye = 'advanced';
                this.sounds.level_up.play();
                this.showModal({
                    title: 'Harika!',
                    message: 'Orta seviyeyi de bitirdiniz. Şimdi zor seviyeye geçiyorsunuz.',
                    buttons: [{ text: 'Devam Et', className: 'btn-modal btn-continue', action: () => this.continueToNextLevel() }]
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

    continueToNextLevel() {
        this.hideModal();
        this.prepareQuestionsForLevel();
        this.resetGame(false); // Sadece quiz state'ini sıfırla, sınıf ve seviye kalsın
        this.updateLevelTitle();
        this.displayQuestion();
    }

    endGame(isSuccess) {
        let title = isSuccess ? "Oyun Tamamlandı!" : "Oyun Bitti!";
        let message = `
            ${isSuccess ? "Tebrikler! Oyunu başarıyla tamamladınız!" : "Ne yazık ki yanlış cevap sınırını aştınız."}<br>
            Doğru Cevap: ${this.state.dogruCevapSayisi}<br>
            Yanlış Cevap: ${this.state.yanlisCevapSayisi}<br>
            Puan: ${this.state.puan}
        `;
        let buttons = [
            { text: 'Ana Sayfaya Dön', className: 'btn-modal btn-close', action: () => { this.resetGame(true); this.showScreen('home-screen'); this.hideModal(); } }
        ];
        if (!isSuccess) {
            buttons.push({ text: 'Tekrar Oyna', className: 'btn-modal btn-restart', action: () => { this.resetGame(false); this.initQuiz(); this.hideModal(); } });
        }

        this.showModal({
            title: title,
            message: message,
            buttons: buttons
        });
    }

    resetGame(resetAll = true) {
        this.state = {
            soruIndex: 0,
            dogruCevapSayisi: 0,
            yanlisCevapSayisi: 0,
            toplamSoruSayisi: 0,
            seviye: resetAll ? 'beginner' : this.state.seviye,
            puan: 0,
            mevcutSorular: [],
            cevapVerildi: false,
            tiklamaSayisi: 0,
            selectedGrade: resetAll ? null : this.state.selectedGrade,
            kullanilanSoruIndeksleri: [],
            correctAnswerCounts: { a: 0, b: 0, c: 0, d: 0 }
        };
        this.initWrongBar();
        this.updateProgressBar(); // İlerleme çubuğunu sıfırla
        this.elements.result.textContent = '';
        this.saveProgress();
    }

    saveProgress() {
        // Yalnızca selectedGrade tanımlıysa kaydet
        if (this.state.selectedGrade) {
            localStorage.setItem(`quiz_progress_${this.state.selectedGrade}`, JSON.stringify({
                dogruCevapSayisi: this.state.dogruCevapSayisi,
                yanlisCevapSayisi: this.state.yanlisCevapSayisi,
                puan: this.state.puan,
                seviye: this.state.seviye,
                correctAnswerCounts: this.state.correctAnswerCounts
            }));
        } else {
            // Eğer selectedGrade yoksa, önceki kaydı temizle
            // Örneğin, kullanıcı ana sayfaya dönünce sınıf seçimi sıfırlanırsa
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('quiz_progress_')) {
                    localStorage.removeItem(key);
                }
            });
        }
    }

    loadProgress() {
        // Sınıf seçimi yapılmadan ilerleme yüklemeye kalkarsa hata vermemesi için
        if (!this.state.selectedGrade) {
            console.log("Sınıf seçimi yapılmadığı için ilerleme yüklenmedi.");
            return;
        }
        const progress = localStorage.getItem(`quiz_progress_${this.state.selectedGrade}`);
        if (progress) {
            const parsed = JSON.parse(progress);
            this.state.dogruCevapSayisi = parsed.dogruCevapSayisi || 0;
            this.state.yanlisCevapSayisi = parsed.yanlisCevapSayisi || 0;
            this.state.puan = parsed.puan || 0;
            this.state.seviye = parsed.seviye || 'beginner';
            this.state.correctAnswerCounts = parsed.correctAnswerCounts || { a: 0, b: 0, c: 0, d: 0 };
            this.initWrongBar();
            this.updateProgressBar(); // Yüklenen ilerlemeye göre çubuğu güncelle
        }
    }

    showModal(options) {
        const existingModal = document.querySelector('.modal');
        if (existingModal) existingModal.remove();

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>${options.title}</h3>
                <p>${options.message}</p>
                <div class="modal-buttons">
                    ${options.buttons.map(btn => `<button class="${btn.className}">${btn.text}</button>`).join('')}
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.classList.add('active');

        options.buttons.forEach(btnOptions => {
            modal.querySelector(`.${btnOptions.className.split(' ').join('.')}`).addEventListener('click', btnOptions.action);
        });
    }

    hideModal() {
        const modal = document.querySelector('.modal.active');
        if (modal) {
            modal.classList.remove('active');
            modal.addEventListener('transitionend', () => modal.remove(), { once: true });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const quiz = new Quiz();
});