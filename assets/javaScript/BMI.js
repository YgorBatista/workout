console.log('BMI test');

const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const form = document.querySelector('.bmi-form');
const resultContainer = document.querySelector('.bmi-result');
const resultTitle = resultContainer.querySelector('h4');
const resultValue = resultContainer.querySelector('span');
const resultDescription = resultContainer.querySelector('p');

// deixar o campo peso recebendo apenas numeros
weight.addEventListener('input', e => {
    let value = e.target.value;

    value = value.replace(/\D/g, '');

    if (value.length === 0) {
        e.target.value = '';
        return;
    }

    e.target.value = value;
});

// deixar o altura  recebendo apenas numeros
height.addEventListener('input', e => {
    let value = e.target.value;

    value = value.replace(/\D/g, '');

    if (value.length === 0) {
        e.target.value = '';
        return;
    }

    value = (Number(value) / 100).toFixed(2);
    e.target.value = value;
});

// calculo do BMI

const calculateBMI = (weight, height) => {
    return weight / (height * height);
};
// verifica o status conforme o resultado

const getBMIStatus = bmi => {
    if (bmi < 18.5) {
        return {
            title: 'Underweight',
            description: 'You are below the recommended weight range.',
            className: 'underweight'
        };
    } else if (bmi < 25) {
        return {
            title: 'Normal weight',
            description: 'You have a healthy body weight.',
            className: 'normal'
        };
    } else if (bmi < 30) {
        return {
            title: 'Overweight',
            description: 'You are above the recommended weight range.',
            className: 'overweight'
        };
    } else {
        return {
            title: 'Obese',
            description: 'Your BMI indicates obesity. Consider consulting a professional.',
            className: 'obese'
        };
    }
};

// animação para o resultado usando GSAP
function animateBMI(finalValue, description) {
    const valueEl = document.querySelector('#bmi-value');
    const titleEl = document.querySelector('#bmi-title');
    const textEl = document.querySelector('#bmi-text');

    textEl.textContent = description;

    // para animar o valor do BMI de 0 até o valor final, usa um objeto com valor inicial
    let obj = { value: 0 };

    gsap.timeline()
        .to(obj, {
            value: finalValue,
            duration: 1,
            ease: 'power2.out',
            onUpdate: () => {
                valueEl.textContent = obj.value.toFixed(1);
            }
        })
        .fromTo(titleEl, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(textEl, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2');
}

// 🔥 highlight dos cards
function highlightCard(type) {
    const cards = document.querySelectorAll('.bmi');

    cards.forEach(card => {
        card.classList.remove('active');
    });

    const activeCard = document.querySelector(`.${type}`);
    if (activeCard) {
        activeCard.classList.add('active');
    }
}

// executa o calculo e animação ao enviar o form
form.addEventListener('submit', e => {
    e.preventDefault();

    const weightValue = Number(weight.value);
    const heightValue = Number(height.value);

    if (!weightValue || !heightValue) {
        alert('Fill all fields');
        return;
    }

    const bmi = calculateBMI(weightValue, heightValue);

    const { title, description, className } = getBMIStatus(bmi);

    resultTitle.textContent = title;

    animateBMI(bmi, description);
    highlightCard(className);
});
