document.addEventListener('DOMContentLoaded', function() {
    generateWeekCards();
});

const weekIcons = ['⚡','🧠','💻','🔌','📡','🌐','☁️','📊','🔧','📶','🌍','🛡️','🐍','🧪','🚨','🕵️','📦','🛡️','🌐','🔍','🖥️'];

const weekLinks = {
    1: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-1.pdf', additionalInfo: 'Week 1: IoT & Embedded Systems Basics' },
    2: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-2.pdf', additionalInfo: 'Week 2: Arduino UNO & ESP32 Architecture' },
    3: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-3.pdf', additionalInfo: 'Week 3: Software Environment Setup' },
    4: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-4.pdf', additionalInfo: 'Week 4: Interfacing Ultrasonic Sensor (HC-SR04)' },
    5: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-5.pdf', additionalInfo: 'Week 5: UART Communication Between Arduino & ESP32' },
    6: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-6.pdf', additionalInfo: 'Week 6: Connecting ESP32 to Wi-Fi (Station Mode)' },
    7: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-7.pdf', additionalInfo: 'Week 7: Cloud Setup Using ThingSpeak' },
    8: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-8.pdf', additionalInfo: 'Week 8: Complete IoT Data Pipeline' },
    9: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-9.pdf', additionalInfo: 'Week 9: ESP32 Local Web Server' },
    10: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-10.pdf', additionalInfo: 'Week 10: ESP32 SoftAP (Hotspot Mode)' },
    11: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-11.pdf', additionalInfo: 'Week 11: Implementing Webpage for Sensor Data Display' },
    12: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-12.pdf', additionalInfo: 'Week 12: Timing Side-Channel Attack Theory' },
    13: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-13.pdf', additionalInfo: 'Week 13: Writing Timing Attack Script (Python)' },
    14: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-14.pdf', additionalInfo: 'Week 14: Executing Timing Attack on ESP32' },
    15: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-15.pdf', additionalInfo: 'Week 15: Timing Attack in Unstable Networks' },
    16: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-16.pdf', additionalInfo: 'Week 16: MITM Attack Preparation' },
    17: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-17.pdf', additionalInfo: 'Week 17: Performing ARP Spoofing MITM Attack' },
    18: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-18.pdf', additionalInfo: 'Week 18: Packet and Linux Basics' },
    19: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-19.pdf', additionalInfo: 'Week 19: Phishing Detection Backend Development' },
    20: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-20.pdf', additionalInfo: 'Week 20: URL & Domain Analysis Module' },
    21: { pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-21.pdf', additionalInfo: 'Week 21: GUI Development Using Tkinter' }
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
