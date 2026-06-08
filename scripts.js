document.addEventListener('DOMContentLoaded', function() {
    generateWeekCards();
});

const weekIcons = [
    '🏢','📒','⚙️','🧩','🎨',
    '📜','⚛️','🏗️','🐍','🚀',
    '🔐','📷','📄','🤖','⚡',
    '📊','📈','🔄','👥','💡','✅'
];
const weekLinks = {
    1: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week1.pdf', additionalInfo: 'Week 1: Introduction to Organization and Software Development Fundamentals' },
    2: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week2.pdf', additionalInfo: 'Week 2: Introduction to TallyPrime and Accounting Concepts' },
    3: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week3.pdf', additionalInfo: 'Week 3: Fundamentals of Tally Definition Language (TDL)' },
    4: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week4.pdf', additionalInfo: 'Week 4: Advanced TDL Programming and Report Customization' },
    5: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week5.pdf', additionalInfo: 'Week 5: Introduction to Web Development using HTML and CSS' },
    6: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week6.pdf', additionalInfo: 'Week 6: JavaScript Programming and Interactive Web Development' },
    7: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week7.pdf', additionalInfo: 'Week 7: React.js Fundamentals and Component-Based Development' },
    8: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week8.pdf', additionalInfo: 'Week 8: Advanced React.js and Frontend Architecture Design' },
    9: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week9.pdf', additionalInfo: 'Week 9: Python Programming Fundamentals for Application Development' },
    10: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week10.pdf', additionalInfo: 'Week 10: Backend Development using FastAPI Framework' },
    11: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week11.pdf', additionalInfo: 'Week 11: Frontend and Backend Integration with Authentication System' },
    12: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week12.pdf', additionalInfo: 'Week 12: Study and Integration of OCR Technology' },
    13: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week13.pdf', additionalInfo: 'Week 13: Invoice Analysis and Data Extraction Techniques' },
    14: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week14.pdf', additionalInfo: 'Week 14: Artificial Intelligence Integration using Groq Cloud AI' },
    15: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week15.pdf', additionalInfo: 'Week 15: Development of Automated OCR and AI Processing Pipeline' },
    16: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week16.pdf', additionalInfo: 'Week 16: Excel Automation and Accounting Record Generation' },
    17: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week17.pdf', additionalInfo: 'Week 17: Dashboard Development and Data Management Features' },
    18: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week18.pdf', additionalInfo: 'Week 18: Batch Invoice Processing and Workflow Optimization' },
    19: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week19.pdf', additionalInfo: 'Week 19: Design and Implementation of Visitor Management Module' },
    20: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week20.pdf', additionalInfo: 'Week 20: Development of Electricity Consumption Monitoring Module' },
    21: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-104_DAILY-DIARY/main/week21.pdf', additionalInfo: 'Week 21: System Testing, Documentation, and Project Finalization' }
};

function openPdfInNewTab(pdfPath) {
    if (!pdfPath) {
        return;
    }
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
}

function generateWeekCards() {
    const grid = document.getElementById('week-grid');

    for (let week = 1; week <= 21; week += 1) {
        const card = document.createElement('div');
        card.className = 'week-card';
        const hasPdf = Boolean(weekLinks[week]);
        const icon = weekIcons[(week - 1) % weekIcons.length];

        card.innerHTML = `
            <div class="week-card-icon">${icon}</div>
            <div class="week-meta">
                <span class="week-number">Week ${week}</span>
                <span class="week-tag">Progress</span>
            </div>
            <p>${hasPdf ? weekLinks[week].additionalInfo : 'PDF is not available for this week yet.'}</p>
            <a class="week-action ${hasPdf ? '' : 'disabled'}" href="${hasPdf ? weekLinks[week].pdfLink : '#'}" target="_blank" rel="noopener noreferrer">Open PDF</a>
        `;

        card.addEventListener('click', function(event) {
            if (event.target.closest('.week-action')) {
                return;
            }
            if (hasPdf) {
                openPdfInNewTab(weekLinks[week].pdfLink);
            }
        });

        grid.appendChild(card);
    }
}
