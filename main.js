const root = document.querySelector('#root');
const btnAdd = document.querySelector('.btn-add');
const InfoSum = document.querySelector('.show-sum'); // เลือก element ที่จะแสดงผลรวม

function Counter() {
    let counterNum = 0;

    const makeElement = (tag, attr_n, attr_v, text) => {
        let output = document.createElement(tag);
        output.setAttribute(attr_n, attr_v);
        output.textContent = text; // Use the provided text parameter
        return output;
    }

    const updateCounter = (n) => { // Add the missing parameter 'n' here
        if (counterNum + n < 0) {
            return;
        }
        counterNum += n;
        number.textContent = counterNum;
        updateTotalSum();
    }

    const deleteCounter = (e) => {
        e.target.closest('.counter').remove();
        updateTotalSum();
    }

    const updateTotalSum = () => {
        const counters = document.querySelectorAll('.counter');
        let totalSum = 0;
        counters.forEach((counter) => {
            totalSum += parseInt(counter.querySelector('.number').textContent);
        });
        InfoSum.textContent = `Sum = ${totalSum}` // Update the total sum display
    }

    const counter = makeElement('div', 'class', 'counter', '');
    const btnInc = makeElement('button', 'class', 'btn-inc', '+');
    const number = makeElement('h3', 'class', 'number', '0');
    const btnDec = makeElement('button', 'class', 'btn-dec', '-');
    const btnClr = makeElement('button', 'class', 'btn-clr', 'C'); // Use 'C' as text for clear button
    const btnDel = makeElement('button', 'class', 'btn-del', 'x');

    btnInc.addEventListener('click', () => updateCounter(1));
    btnDec.addEventListener('click', () => updateCounter(-1));
    btnClr.addEventListener('click', () => updateCounter(-counterNum)); // Fix the clear button logic
    btnDel.addEventListener('click', deleteCounter);

    counter.append(btnInc, number, btnDec, btnClr, btnDel);
    updateTotalSum();

    return counter;
}

const hdlAddCounter = () => {
    root.append(Counter());
}

btnAdd.addEventListener('click', hdlAddCounter);