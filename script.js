document.addEventListener('DOMContentLoaded', () => {
    const monthYear = document.getElementById('monthYear');
    const daysContainer = document.getElementById('days');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let date = new Date();

    function renderCalendar() {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();
        
        monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        daysContainer.innerHTML = '';

        // Empty cells for days of the week before the 1st
        for (let i = 0; i < firstDay; i++) {
            daysContainer.innerHTML += '<div></div>';
        }

        // Days of the month
        for (let day = 1; day <= lastDay; day++) {
            daysContainer.innerHTML += `<div>${day}</div>`;
        }
    }

    prevButton.addEventListener('click', () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });

    nextButton.addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
