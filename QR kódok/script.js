const data = [
    { pickId: "MOMEN9", email: "mo.mentin@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN10", email: "mo.mentin1@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN11", email: "mo.mentin2@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN12", email: "mo.mentin3@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN13", email: "mo.mentin4@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN14", email: "mo.mentin5@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN15", email: "mo.mentin6@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN16", email: "mo.mentin7@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN17", email: "mo.mentin8@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN18", email: "mo.mentin9@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN19", email: "mo.mentin10@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN20", email: "mo.mentin11@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN21", email: "mo.mentin12@ingka.com", password: "Momoment04" },
    { pickId: "MOMEN22", email: "mo.mentin13@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN24", email: "mo.mentin15@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN25", email: "mo.mentin16@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN26", email: "mo.mentin17@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN27", email: "mo.mentin18@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN28", email: "mo.mentin19@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN29", email: "mo.mentin20@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN30", email: "mo.mentin21@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN31", email: "mo.mentin22@ingka.com", password: "Momoment02" },
    { pickId: "MOMEN32", email: "mo.mentin23@ingka.com", password: "Momoment02" },
];


function generateQRCode(text) {
    const qr = qrcode(4, 'L');
    qr.addData(text);
    qr.make();
    return qr.createImgTag(4);
}

function showQRPage(pickId) {
    const item = data.find(d => d.pickId === pickId);
    if (!item) return;

    document.getElementById('currentPickId').textContent = pickId;
    const qrContainer = document.getElementById('qrContainer');
    qrContainer.innerHTML = `
        <div>
            <h3>Pick ID:</h3>
            ${generateQRCode(item.pickId)}
        </div>
        <div>
            <h3>Email:</h3>
            ${generateQRCode(item.email)}
        </div>
        <div>
            <h3>Jelszó:</h3>
            ${generateQRCode(item.password)}
        </div>
    `;

    document.getElementById('mainPage').classList.add('hidden');
    document.getElementById('qrPage').classList.remove('hidden');
}

function goBack() {
    document.getElementById('mainPage').classList.remove('hidden');
    document.getElementById('qrPage').classList.add('hidden');
}

// Gombok létrehozása
const buttonsContainer = document.getElementById('buttonsContainer');
data.forEach(item => {
    const btn = document.createElement('button');
    btn.textContent = item.pickId;
    btn.onclick = () => showQRPage(item.pickId);
    buttonsContainer.appendChild(btn);
});


