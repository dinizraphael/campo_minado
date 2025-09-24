const questions = [
    {
        question: "Qual dinossauro é conhecido como 'lagarto com chifre'?",
        options: [
            {
                text: "Triceratops",
                image: "https://images.fineartamerica.com/images-medium-large-5/1-triceratops-horridus-dinosaur-julius-t-csotonyiscience-photo-library.jpg",
                correct: true
            },
            {
                text: "Tiranossauro Rex",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Tyrannosaurus%20Rex%20with%20large%20head%20and%20small%20arms&id=2",
                correct: false
            },
            {
                text: "Velociraptor",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Velociraptor%20with%20feathers%20and%20sickle%20claw&id=3",
                correct: false
            },
            {
                text: "Estegossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Stegosaurus%20with%20plates%20on%20back%20and%20spiked%20tail&id=4",
                correct: false
            }
        ]
    },
    {
        question: "Qual destes dinossauros era carnívoro?",
        options: [
            {
                text: "Brontossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Brontosaurus%20with%20long%20neck%20and%20tail&id=5",
                correct: false
            },
            {
                text: "Espinossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Spinosaurus%20with%20sail%20on%20back%20and%20crocodile-like%20snout&id=6",
                correct: true
            },
            {
                text: "Triceratops",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Triceratops%20with%20three%20horns%20and%20frill&id=7",
                correct: false
            },
            {
                text: "Anquilossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Ankylosaurus%20with%20armored%20body%20and%20club%20tail&id=8",
                correct: false
            }
        ]
    },
    {
        question: "Qual dinossauro tinha placas ósseas nas costas?",
        options: [
            {
                text: "Tiranossauro Rex",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Tyrannosaurus%20Rex%20standing%20upright&id=9",
                correct: false
            },
            {
                text: "Velociraptor",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Velociraptor%20in%20hunting%20pose&id=10",
                correct: false
            },
            {
                text: "Estegossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Stegosaurus%20with%20bony%20plates%20along%20back&id=11",
                correct: true
            },
            {
                text: "Pterodáctilo",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Pterodactyl%20flying%20reptile%20with%20wings&id=12",
                correct: false
            }
        ]
    },
    {
        question: "Qual era o maior dinossauro carnívoro?",
        options: [
            {
                text: "Tiranossauro Rex",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Tyrannosaurus%20Rex%20large%20carnivore&id=13",
                correct: false
            },
            {
                text: "Espinossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Spinosaurus%20largest%20carnivorous%20dinosaur&id=14",
                correct: true
            },
            {
                text: "Alossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Allosaurus%20medium-sized%20predator&id=15",
                correct: false
            },
            {
                text: "Carnotauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Carnotaurus%20with%20horns%20and%20small%20arms&id=16",
                correct: false
            }
        ]
    },
    {
        question: "Qual dinossauro tinha um 'clube' na cauda?",
        options: [
            {
                text: "Estegossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Stegosaurus%20with%20spiked%20tail&id=17",
                correct: false
            },
            {
                text: "Anquilossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Ankylosaurus%20with%20tail%20club&id=18",
                correct: true
            },
            {
                text: "Triceratops",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Triceratops%20with%20horns&id=19",
                correct: false
            },
            {
                text: "Diplodoco",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Diplodocus%20long-necked%20dinosaur&id=20",
                correct: false
            }
        ]
    },
    {
        question: "Qual destes NÃO era um dinossauro, mas um réptil voador?",
        options: [
            {
                text: "Pteranodon",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Pteranodon%20flying%20reptile%20with%20crest&id=21",
                correct: true
            },
            {
                text: "Velociraptor",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Velociraptor%20feathered%20dinosaur&id=22",
                correct: false
            },
            {
                text: "Iguanodonte",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Iguanodon%20with%20thumb%20spikes&id=23",
                correct: false
            },
            {
                text: "Paquicefalossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Pachycephalosaurus%20with%20dome%20head&id=24",
                correct: false
            }
        ]
    },
    {
        question: "Qual dinossauro tinha um pescoço extremamente longo?",
        options: [
            {
                text: "Tiranossauro Rex",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Tyrannosaurus%20Rex%20short-necked&id=25",
                correct: false
            },
            {
                text: "Braquiossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Brachiosaurus%20with%20extremely%20long%20neck&id=26",
                correct: true
            },
            {
                text: "Triceratops",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Triceratops%20short-necked&id=27",
                correct: false
            },
            {
                text: "Anquilossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Ankylosaurus%20low%20profile&id=28",
                correct: false
            }
        ]
    },
    {
        question: "Qual dinossauro tinha dedos com garras em forma de foice?",
        options: [
            {
                text: "Estegossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Stegosaurus%20with%20plates&id=29",
                correct: false
            },
            {
                text: "Deinonico",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Deinonychus%20with%20sickle%20claws&id=30",
                correct: true
            },
            {
                text: "Triceratops",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Triceratops%20with%20horns&id=31",
                correct: false
            },
            {
                text: "Paquicefalossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Pachycephalosaurus%20dome-headed&id=32",
                correct: false
            }
        ]
    },
    {
        question: "Qual era o dinossauro com 'bico de pato'?",
        options: [
            {
                text: "Hadrossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Hadrosaurus%20duck-billed%20dinosaur&id=33",
                correct: true
            },
            {
                text: "Velociraptor",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Velociraptor%20with%20sharp%20teeth&id=34",
                correct: false
            },
            {
                text: "Tiranossauro Rex",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Tyrannosaurus%20Rex%20with%20large%20teeth&id=35",
                correct: false
            },
            {
                text: "Anquilossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Ankylosaurus%20armored&id=36",
                correct: false
            }
        ]
    },
    {
        question: "Qual dinossauro tinha uma cabeça em forma de cúpula espessa?",
        options: [
            {
                text: "Triceratops",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Triceratops%20with%20horned%20head&id=37",
                correct: false
            },
            {
                text: "Paquicefalossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Pachycephalosaurus%20with%20dome-shaped%20head&id=38",
                correct: true
            },
            {
                text: "Velociraptor",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Velociraptor%20with%20elongated%20skull&id=39",
                correct: false
            },
            {
                text: "Estegossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Stegosaurus%20with%20small%20head&id=40",
                correct: false
            }
        ]
    },
    {
        question: "Qual destes dinossauros era herbívoro?",
        options: [
            {
                text: "Tiranossauro Rex",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Tyrannosaurus%20Rex%20carnivore&id=41",
                correct: false
            },
            {
                text: "Espinossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Spinosaurus%20fish-eating%20predator&id=42",
                correct: false
            },
            {
                text: "Iguanodonte",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Iguanodon%20herbivorous%20dinosaur&id=43",
                correct: true
            },
            {
                text: "Velociraptor",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Velociraptor%20predatory%20dinosaur&id=44",
                correct: false
            }
        ]
    },
    {
        question: "Qual dinossauro é conhecido por seus 'polegares pontiagudos'?",
        options: [
            {
                text: "Iguanodonte",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Iguanodon%20with%20thumb%20spikes&id=45",
                correct: true
            },
            {
                text: "Tiranossauro Rex",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Tyrannosaurus%20Rex%20with%20small%20arms&id=46",
                correct: false
            },
            {
                text: "Estegossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Stegosaurus%20with%20plates&id=47",
                correct: false
            },
            {
                text: "Anquilossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Ankylosaurus%20with%20armor&id=48",
                correct: false
            }
        ]
    },
    {
        question: "Qual era o menor dinossauro conhecido?",
        options: [
            {
                text: "Compsognato",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Compsognathus%20small%20dinosaur&id=49",
                correct: true
            },
            {
                text: "Tiranossauro Rex",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Tyrannosaurus%20Rex%20large%20dinosaur&id=50",
                correct: false
            },
            {
                text: "Brontossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Brontosaurus%20giant%20dinosaur&id=51",
                correct: false
            },
            {
                text: "Triceratops",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Triceratops%20large%20herbivore&id=52",
                correct: false
            }
        ]
    },
    {
        question: "Qual era o dinossauro mais inteligente?",
        options: [
            {
                text: "Estegossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Stegosaurus%20with%20small%20brain&id=53",
                correct: false
            },
            {
                text: "Troodon",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Troodon%20intelligent%20dinosaur&id=54",
                correct: true
            },
            {
                text: "Anquilossauro",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Ankylosaurus%20armored%20dinosaur&id=55",
                correct: false
            },
            {
                text: "Diplodoco",
                image: "https://placeholder-image-service.onrender.com/image/200x120?prompt=Diplodocus%20long-necked%20dinosaur&id=56",
                correct: false
            }
        ]
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(questions.length).fill(null);

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const currentElement = document.getElementById('current');
const scoreElement = document.getElementById('score');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

function loadQuestion() {
    currentElement.textContent = currentQuestion + 1;
    scoreElement.textContent = score;

    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    optionsElement.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');

        if (userAnswers[currentQuestion] === index) {
            optionElement.classList.add(option.correct ? 'correct' : 'incorrect');
        }

        optionElement.innerHTML = `
                    <img src="${option.image}" alt="${option.text}">
                    <div class="option-text">${option.text}</div>
                `;

        optionElement.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(optionElement);
    });

    updateNavigationButtons();
}

function selectOption(optionIndex) {
    if (userAnswers[currentQuestion] !== null) return;

    userAnswers[currentQuestion] = optionIndex;
    const correct = questions[currentQuestion].options[optionIndex].correct;

    if (correct) {
        score++;
        scoreElement.textContent = score;
    }

    const optionElements = optionsElement.querySelectorAll('.option');
    optionElements.forEach((element, index) => {
        const isCorrect = questions[currentQuestion].options[index].correct;
        if (index === optionIndex) {
            element.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (isCorrect && userAnswers[currentQuestion] !== null) {
            element.classList.add('correct');
        }
    });

    updateNavigationButtons();
}

function updateNavigationButtons() {
    prevButton.disabled = currentQuestion === 0;

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = 'Finalizar';
    } else {
        nextButton.textContent = 'Próxima';
    }

    if (currentQuestion === questions.length - 1 && userAnswers[currentQuestion] !== null) {
        nextButton.textContent = 'Ver Resultados';
    }
}

prevButton.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

nextButton.addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else if (currentQuestion === questions.length - 1 && userAnswers[currentQuestion] !== null) {
        showResults();
    }
});

function showResults() {
    const container = document.querySelector('.container');
    container.innerHTML = `
                <div class="results">
                    <h2>Quiz Concluído!</h2>
                    <p>Sua pontuação final: ${score} de ${questions.length}</p>
                    <p>${getScoreMessage()}</p>
                    <button class="restart-btn" onclick="location.reload()">Jogar Novamente</button>
                </div>
            `;
}

function getScoreMessage() {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "Excelente! Você é um expert em dinossauros!";
    if (percentage >= 70) return "Muito bom! Você conhece bem os dinossauros!";
    if (percentage >= 50) return "Bom trabalho! Continue aprendendo sobre dinossauros!";
    return "Estude um pouco mais sobre esses fascinantes animais pré-históricos!";
}

// Inicializar o quiz
loadQuestion();