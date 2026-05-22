import './scss/styles.scss';
import { Modal } from 'bootstrap';
import { DateTime } from 'luxon';

const showTimeBtn = document.getElementById('showTimeBtn') as HTMLButtonElement;
const timeSpan = document.getElementById('currentDateTime') as HTMLSpanElement;
const modalElement = document.getElementById('timeModal') as HTMLElement;

let myModal: Modal | null = null;
if (modalElement) {
    myModal = new Modal(modalElement);
}

function updateDateTime(): void {
    if (timeSpan) {
        const now = DateTime.local();
        timeSpan.textContent = now.toFormat('dd.MM.yyyy HH:mm:ss');
    }
}

if (showTimeBtn && myModal) {
    showTimeBtn.addEventListener('click', () => {
        updateDateTime();
        myModal!.show();
    });
}

if (modalElement && myModal) {
    modalElement.addEventListener('show.bs.modal', updateDateTime);
}

updateDateTime();