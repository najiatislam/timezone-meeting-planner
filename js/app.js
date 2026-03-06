// ===== CITY DATA =====
const cities = [
    { name: "New York", country: "USA", timezone: "EST", offset: -5, dstOffset: -4 },
    { name: "Los Angeles", country: "USA", timezone: "PST", offset: -8, dstOffset: -7 },
    { name: "Chicago", country: "USA", timezone: "CST", offset: -6, dstOffset: -5 },
    { name: "Denver", country: "USA", timezone: "MST", offset: -7, dstOffset: -6 },
    { name: "Phoenix", country: "USA", timezone: "MST", offset: -7, dstOffset: -7 },
    { name: "Houston", country: "USA", timezone: "CST", offset: -6, dstOffset: -5 },
    { name: "Miami", country: "USA", timezone: "EST", offset: -5, dstOffset: -4 },
    { name: "Seattle", country: "USA", timezone: "PST", offset: -8, dstOffset: -7 },
    { name: "San Francisco", country: "USA", timezone: "PST", offset: -8, dstOffset: -7 },
    { name: "Boston", country: "USA", timezone: "EST", offset: -5, dstOffset: -4 },
    { name: "London", country: "UK", timezone: "GMT", offset: 0, dstOffset: 1 },
    { name: "Manchester", country: "UK", timezone: "GMT", offset: 0, dstOffset: 1 },
    { name: "Edinburgh", country: "UK", timezone: "GMT", offset: 0, dstOffset: 1 },
    { name: "Paris", country: "France", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Lyon", country: "France", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Berlin", country: "Germany", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Munich", country: "Germany", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Frankfurt", country: "Germany", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Amsterdam", country: "Netherlands", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Brussels", country: "Belgium", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Madrid", country: "Spain", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Barcelona", country: "Spain", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Rome", country: "Italy", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Milan", country: "Italy", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Vienna", country: "Austria", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Zurich", country: "Switzerland", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Geneva", country: "Switzerland", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Stockholm", country: "Sweden", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Copenhagen", country: "Denmark", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Oslo", country: "Norway", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Helsinki", country: "Finland", timezone: "EET", offset: 2, dstOffset: 3 },
    { name: "Athens", country: "Greece", timezone: "EET", offset: 2, dstOffset: 3 },
    { name: "Istanbul", country: "Turkey", timezone: "TRT", offset: 3, dstOffset: 3 },
    { name: "Moscow", country: "Russia", timezone: "MSK", offset: 3, dstOffset: 3 },
    { name: "Dubai", country: "UAE", timezone: "GST", offset: 4, dstOffset: 4 },
    { name: "Abu Dhabi", country: "UAE", timezone: "GST", offset: 4, dstOffset: 4 },
    { name: "Mumbai", country: "India", timezone: "IST", offset: 5.5, dstOffset: 5.5 },
    { name: "Delhi", country: "India", timezone: "IST", offset: 5.5, dstOffset: 5.5 },
    { name: "Bangalore", country: "India", timezone: "IST", offset: 5.5, dstOffset: 5.5 },
    { name: "Chennai", country: "India", timezone: "IST", offset: 5.5, dstOffset: 5.5 },
    { name: "Kolkata", country: "India", timezone: "IST", offset: 5.5, dstOffset: 5.5 },
    { name: "Dhaka", country: "Bangladesh", timezone: "BST", offset: 6, dstOffset: 6 },
    { name: "Bangkok", country: "Thailand", timezone: "ICT", offset: 7, dstOffset: 7 },
    { name: "Jakarta", country: "Indonesia", timezone: "WIB", offset: 7, dstOffset: 7 },
    { name: "Ho Chi Minh City", country: "Vietnam", timezone: "ICT", offset: 7, dstOffset: 7 },
    { name: "Singapore", country: "Singapore", timezone: "SGT", offset: 8, dstOffset: 8 },
    { name: "Hong Kong", country: "China", timezone: "HKT", offset: 8, dstOffset: 8 },
    { name: "Beijing", country: "China", timezone: "CST", offset: 8, dstOffset: 8 },
    { name: "Shanghai", country: "China", timezone: "CST", offset: 8, dstOffset: 8 },
    { name: "Shenzhen", country: "China", timezone: "CST", offset: 8, dstOffset: 8 },
    { name: "Taipei", country: "Taiwan", timezone: "CST", offset: 8, dstOffset: 8 },
    { name: "Kuala Lumpur", country: "Malaysia", timezone: "MYT", offset: 8, dstOffset: 8 },
    { name: "Perth", country: "Australia", timezone: "AWST", offset: 8, dstOffset: 8 },
    { name: "Tokyo", country: "Japan", timezone: "JST", offset: 9, dstOffset: 9 },
    { name: "Osaka", country: "Japan", timezone: "JST", offset: 9, dstOffset: 9 },
    { name: "Seoul", country: "South Korea", timezone: "KST", offset: 9, dstOffset: 9 },
    { name: "Adelaide", country: "Australia", timezone: "ACST", offset: 9.5, dstOffset: 10.5 },
    { name: "Sydney", country: "Australia", timezone: "AEST", offset: 10, dstOffset: 11 },
    { name: "Melbourne", country: "Australia", timezone: "AEST", offset: 10, dstOffset: 11 },
    { name: "Brisbane", country: "Australia", timezone: "AEST", offset: 10, dstOffset: 10 },
    { name: "Auckland", country: "New Zealand", timezone: "NZST", offset: 12, dstOffset: 13 },
    { name: "Wellington", country: "New Zealand", timezone: "NZST", offset: 12, dstOffset: 13 },
    { name: "Fiji", country: "Fiji", timezone: "FJT", offset: 12, dstOffset: 12 },
    { name: "Toronto", country: "Canada", timezone: "EST", offset: -5, dstOffset: -4 },
    { name: "Vancouver", country: "Canada", timezone: "PST", offset: -8, dstOffset: -7 },
    { name: "Montreal", country: "Canada", timezone: "EST", offset: -5, dstOffset: -4 },
    { name: "Calgary", country: "Canada", timezone: "MST", offset: -7, dstOffset: -6 },
    { name: "Mexico City", country: "Mexico", timezone: "CST", offset: -6, dstOffset: -5 },
    { name: "São Paulo", country: "Brazil", timezone: "BRT", offset: -3, dstOffset: -3 },
    { name: "Rio de Janeiro", country: "Brazil", timezone: "BRT", offset: -3, dstOffset: -3 },
    { name: "Buenos Aires", country: "Argentina", timezone: "ART", offset: -3, dstOffset: -3 },
    { name: "Lima", country: "Peru", timezone: "PET", offset: -5, dstOffset: -5 },
    { name: "Bogotá", country: "Colombia", timezone: "COT", offset: -5, dstOffset: -5 },
    { name: "Santiago", country: "Chile", timezone: "CLT", offset: -4, dstOffset: -3 },
    { name: "Caracas", country: "Venezuela", timezone: "VET", offset: -4, dstOffset: -4 },
    { name: "Cairo", country: "Egypt", timezone: "EET", offset: 2, dstOffset: 2 },
    { name: "Johannesburg", country: "South Africa", timezone: "SAST", offset: 2, dstOffset: 2 },
    { name: "Cape Town", country: "South Africa", timezone: "SAST", offset: 2, dstOffset: 2 },
    { name: "Lagos", country: "Nigeria", timezone: "WAT", offset: 1, dstOffset: 1 },
    { name: "Nairobi", country: "Kenya", timezone: "EAT", offset: 3, dstOffset: 3 },
    { name: "Casablanca", country: "Morocco", timezone: "WET", offset: 0, dstOffset: 1 },
    { name: "Tel Aviv", country: "Israel", timezone: "IST", offset: 2, dstOffset: 3 },
    { name: "Riyadh", country: "Saudi Arabia", timezone: "AST", offset: 3, dstOffset: 3 },
    { name: "Doha", country: "Qatar", timezone: "AST", offset: 3, dstOffset: 3 },
    { name: "Kuwait City", country: "Kuwait", timezone: "AST", offset: 3, dstOffset: 3 },
    { name: "Lisbon", country: "Portugal", timezone: "WET", offset: 0, dstOffset: 1 },
    { name: "Dublin", country: "Ireland", timezone: "GMT", offset: 0, dstOffset: 1 },
    { name: "Warsaw", country: "Poland", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Prague", country: "Czech Republic", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Budapest", country: "Hungary", timezone: "CET", offset: 1, dstOffset: 2 },
    { name: "Bucharest", country: "Romania", timezone: "EET", offset: 2, dstOffset: 3 },
    { name: "Honolulu", country: "USA", timezone: "HST", offset: -10, dstOffset: -10 },
    { name: "Anchorage", country: "USA", timezone: "AKST", offset: -9, dstOffset: -8 }
];

// ===== STATE =====
let selectedCities = [];
let meetingSlots = [{ time: null, duration: 1 }, { time: null, duration: 1 }, { time: null, duration: 1 }];
let activeSlot = 0;
let meetingDuration = 1;
let isDragging = false;
let isResizing = false;
let currentView = 'day';
let workStart = 9;
let workEnd = 17;
let selectedDate = new Date();
let isDarkMode = true;

// ===== DOM =====
const searchInput = document.getElementById('citySearch');
const dropdown = document.getElementById('dropdown');
const cityTags = document.getElementById('cityTags');
const timelineArea = document.getElementById('timelineArea');
const durationSelect = document.getElementById('durationSelect');
const dateInput = document.getElementById('dateInput');
const converterSource = document.getElementById('converterSource');

// ===== UTILITY FUNCTIONS =====
function isDST(date) {
    const m = date.getMonth();
    return m >= 2 && m <= 10; // Simplified DST check (March-October)
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== INIT =====
function init() {
    dateInput.value = formatDateInput(new Date());
    loadFromUrl();
    loadGroups();
    updateConverterOptions();
    render();
    setupListeners();
    setInterval(updateLiveTimes, 60000);
}

function setupListeners() {
    searchInput.addEventListener('input', handleSearch);
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) dropdown.classList.remove('active');
    });
    dropdown.addEventListener('click', handleCitySelect);
    durationSelect.addEventListener('change', (e) => {
        meetingDuration = parseFloat(e.target.value);
        meetingSlots[activeSlot].duration = meetingDuration;
        render();
    });
    dateInput.addEventListener('change', (e) => {
        selectedDate = new Date(e.target.value);
        render();
    });
    document.getElementById('workStart').addEventListener('change', (e) => {
        workStart = parseInt(e.target.value);
        render();
    });
    document.getElementById('workEnd').addEventListener('change', (e) => {
        workEnd = parseInt(e.target.value);
        render();
    });
    document.addEventListener('keydown', handleKeyboard);
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
}

// ===== SEARCH =====
function handleSearch(e) {
    const q = e.target.value.toLowerCase();
    if (q.length < 1) { dropdown.classList.remove('active'); return; }

    const filtered = cities.filter(c => 
        !selectedCities.find(s => s.name === c.name && s.country === c.country) &&
        (c.name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q))
    ).slice(0, 10);

    if (filtered.length > 0) {
        dropdown.innerHTML = filtered.map(c => `
            <div class="dropdown-item" data-city="${c.name}" data-country="${c.country}">
                <span class="primary">${c.name}, ${c.country}</span>
                <span class="secondary">${c.timezone} (UTC${c.offset >= 0 ? '+' : ''}${c.offset})</span>
            </div>
        `).join('');
        dropdown.classList.add('active');
    } else {
        dropdown.classList.remove('active');
    }
}

function handleCitySelect(e) {
    const item = e.target.closest('.dropdown-item');
    if (item && selectedCities.length < 4) {
        const city = cities.find(c => c.name === item.dataset.city && c.country === item.dataset.country);
        if (city) {
            selectedCities.push({ ...city, participant: '' });
            updateCityTags();
            updateConverterOptions();
            render();
        }
        searchInput.value = '';
        dropdown.classList.remove('active');
    }
}

function updateCityTags() {
    cityTags.innerHTML = selectedCities.map((c, i) => `
        <div class="city-tag">
            <span>${c.name}</span>
            <input type="text" class="participant-input" placeholder="Name" value="${c.participant || ''}" 
                   onchange="updateParticipant(${i}, this.value)">
            <button class="remove-btn" onclick="removeCity(${i})">×</button>
        </div>
    `).join('');
}

function updateParticipant(i, name) {
    selectedCities[i].participant = name;
    render();
}

function removeCity(i) {
    selectedCities.splice(i, 1);
    updateCityTags();
    updateConverterOptions();
    render();
}

// ===== TIME UTILS =====
function getOffset(city, date = selectedDate) {
    const m = date.getMonth();
    const dstActive = m >= 2 && m <= 10;
    return city.dstOffset !== undefined && dstActive ? city.dstOffset : city.offset;
}

function localHour(utc, offset) { return ((utc + offset) % 24 + 24) % 24; }
function utcFromLocal(local, offset) { return ((local - offset) % 24 + 24) % 24; }
function isWorking(h) { return h >= workStart && h < workEnd; }
function isNight(h) { return h < 6 || h >= 22; }

function formatTime(h) {
    const hr = Math.floor(h);
    const mn = Math.round((h % 1) * 60);
    const p = hr >= 12 ? 'PM' : 'AM';
    const d = hr % 12 || 12;
    return mn > 0 ? `${d}:${mn.toString().padStart(2, '0')} ${p}` : `${d} ${p}`;
}

function formatHour(h) { return ((h % 24) + 24) % 24; }
function formatDateInput(d) { return d.toISOString().split('T')[0]; }

function calcOverlap() {
    if (selectedCities.length < 2) return [];
    const overlap = [];
    for (let u = 0; u < 24; u++) {
        if (selectedCities.every(c => isWorking(localHour(u, getOffset(c))))) overlap.push(u);
    }
    return overlap;
}

// ===== SUGGESTIONS =====
function getSuggestions() {
    const overlap = calcOverlap();
    if (overlap.length === 0) return [];

    const suggestions = [];
    let i = 0;
    while (i < overlap.length) {
        const start = overlap[i];
        let end = start;
        while (i < overlap.length - 1 && overlap[i + 1] === overlap[i] + 1) {
            end = overlap[++i];
        }
        let score = 0;
        for (let h = start; h <= end; h++) {
            for (const c of selectedCities) {
                const lh = localHour(h, getOffset(c));
                if (lh >= 10 && lh <= 16) score += 2;
                else if (lh >= 9 && lh <= 17) score += 1;
            }
        }
        suggestions.push({ startUtc: start, endUtc: end + 1, score });
        i++;
    }
    return suggestions.sort((a, b) => b.score - a.score).slice(0, 3);
}

function applySuggestion(utc) {
    meetingSlots[activeSlot].time = utc;
    render();
    toast('Meeting time applied');
}

// ===== RENDERING =====
function render() {
    if (selectedCities.length < 2) {
        timelineArea.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🌐</div>
                <p class="empty-state-text">Add at least 2 cities to compare time zones and find the perfect meeting time</p>
            </div>
        `;
        document.getElementById('meetingCard').style.display = 'none';
        document.getElementById('suggestionsCard').style.display = 'none';
        return;
    }

    if (currentView === 'day') renderDay();
    else renderWeek();

    renderSuggestions();
    renderMeetingInfo();
    renderSlotTabs();
}

function renderDay() {
    const overlap = calcOverlap();
    const now = new Date();
    const nowUtc = now.getUTCHours() + now.getUTCMinutes() / 60;
    const isWeekend = [0, 6].includes(selectedDate.getDay());

    let html = `
        <div class="timeline-header">
            ${Array.from({length: 24}, (_, i) => `<div class="hour-label">${i.toString().padStart(2, '0')}</div>`).join('')}
        </div>
    `;

    selectedCities.forEach((city, ci) => {
        const off = getOffset(city);
        const currH = localHour(now.getUTCHours(), off);
        const currM = now.getUTCMinutes();
        const currPos = (nowUtc / 24) * 100;
        const hasDST = city.offset !== city.dstOffset;

        html += `
            <div class="timeline-row">
                <div class="city-info">
                    <div class="city-name">${city.name}</div>
                    ${city.participant ? `<div class="city-participant">👤 ${city.participant}</div>` : ''}
                    <div class="city-time">
                        <span>${city.timezone}</span>
                        <span class="live-time">${formatHour(currH).toString().padStart(2, '0')}:${currM.toString().padStart(2, '0')}</span>
                        ${hasDST ? '<span class="dst-badge">DST</span>' : ''}
                    </div>
                </div>
                <div class="timeline" data-ci="${ci}">
                    ${Array.from({length: 24}, (_, u) => {
                        const lh = localHour(u, off);
                        let cls = 'hour-block';
                        if (isWeekend) cls += ' weekend';
                        else if (overlap.includes(u)) cls += ' overlap';
                        else if (isWorking(lh)) cls += ' working';
                        else if (isNight(lh)) cls += ' night';
                        return `<div class="${cls}" data-u="${u}" data-l="${lh}" title="${formatTime(lh)}"></div>`;
                    }).join('')}
                    <div class="current-time-line" style="left: ${currPos}%"></div>
                    ${ci === 0 ? renderSlots() : ''}
                </div>
            </div>
        `;
    });

    if (overlap.length > 0) {
        const start = Math.min(...overlap);
        const end = Math.max(...overlap) + 1;
        html += `
            <div class="overlap-summary has-overlap">
                <h3>✓ ${overlap.length} hours of overlap</h3>
                <p class="overlap-details">
                    ${selectedCities.map(c => `<strong>${c.name}:</strong> ${formatTime(localHour(start, getOffset(c)))} – ${formatTime(localHour(end, getOffset(c)))}`).join(' &nbsp;•&nbsp; ')}
                </p>
            </div>
        `;
    } else {
        html += `
            <div class="overlap-summary no-overlap">
                <h3>✗ No overlapping working hours</h3>
                <p class="overlap-details">Consider adjusting working hours or scheduling across multiple days.</p>
            </div>
        `;
    }

    timelineArea.innerHTML = html;
    setupDrag();
}

function renderWeek() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekStart = new Date(selectedDate);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay());

    let html = `<div class="timeline-header">${Array.from({length: 24}, (_, i) => `<div class="hour-label">${i.toString().padStart(2, '0')}</div>`).join('')}</div>`;

    selectedCities.forEach(city => {
        const off = getOffset(city);
        html += `<div class="week-city-section"><div class="week-city-header">${city.name}${city.participant ? ` (${city.participant})` : ''}</div>`;

        for (let d = 0; d < 7; d++) {
            const wknd = d === 0 || d === 6;
            const dayDate = new Date(weekStart);
            dayDate.setDate(weekStart.getDate() + d);
            
            html += `
                <div class="week-row">
                    <div class="week-day ${wknd ? 'weekend' : ''}">${days[d]} ${dayDate.getDate()}</div>
                    <div class="week-timeline">
                        ${Array.from({length: 24}, (_, u) => {
                            const lh = localHour(u, off);
                            let bg = 'transparent';
                            if (wknd) bg = 'rgba(239, 68, 68, 0.08)';
                            else if (isWorking(lh)) bg = 'rgba(59, 130, 246, 0.15)';
                            else if (isNight(lh)) bg = 'rgba(0, 0, 0, 0.15)';
                            return `<div class="hour-block" style="background: ${bg}; width: 36px;"></div>`;
                        }).join('')}
                    </div>
                </div>
            `;
        }
        html += `</div>`;
    });

    timelineArea.innerHTML = html;
}

function renderSlots() {
    return meetingSlots.map((s, i) => {
        if (s.time === null) return '';
        const dur = s.duration || meetingDuration;
        return `
            <div class="meeting-slot slot-${i + 1} ${i === activeSlot ? 'active' : ''}" data-slot="${i}"
                 style="left: ${(s.time / 24) * 100}%; width: ${(dur / 24) * 100}%;">
                <span class="slot-badge">Slot ${i + 1}</span>
                ${formatTime(localHour(s.time, getOffset(selectedCities[0])))}
                <div class="resize-handle"></div>
            </div>
        `;
    }).join('');
}

function renderSuggestions() {
    const card = document.getElementById('suggestionsCard');
    const list = document.getElementById('suggestionsList');
    
    if (selectedCities.length < 2) { card.style.display = 'none'; return; }

    const sugg = getSuggestions();
    if (sugg.length === 0) { card.style.display = 'none'; return; }

    card.style.display = 'block';
    list.innerHTML = sugg.map(s => {
        const times = selectedCities.map(c => `${c.name}: ${formatTime(localHour(s.startUtc, getOffset(c)))}`).join(' • ');
        return `
            <div class="suggestion-item" onclick="applySuggestion(${s.startUtc})">
                <div>
                    <div class="suggestion-time">${formatTime(localHour(s.startUtc, getOffset(selectedCities[0])))} – ${formatTime(localHour(s.endUtc, getOffset(selectedCities[0])))} (${selectedCities[0].name})</div>
                    <div class="suggestion-cities">${times}</div>
                </div>
                <div class="suggestion-score">⭐ ${s.score}</div>
            </div>
        `;
    }).join('');
}

function renderMeetingInfo() {
    const card = document.getElementById('meetingCard');
    const details = document.getElementById('meetingDetails');
    const slot = meetingSlots[activeSlot];

    if (slot.time === null || selectedCities.length < 2) { card.style.display = 'none'; return; }

    card.style.display = 'block';
    const dur = slot.duration || meetingDuration;

    details.innerHTML = selectedCities.map(c => {
        const off = getOffset(c);
        const start = localHour(slot.time, off);
        const end = localHour(slot.time + dur, off);
        return `
            <div class="meeting-detail-row">
                <span class="city">${c.name}${c.participant ? ` (${c.participant})` : ''}</span>
                <span class="time">${formatTime(start)} – ${formatTime(end)}</span>
            </div>
        `;
    }).join('');
}

function renderSlotTabs() {
    const tabs = document.getElementById('slotTabs');
    let html = meetingSlots.map((s, i) => {
        if (s.time === null && i > 0) return '';
        return `<button class="slot-tab slot-${i + 1} ${i === activeSlot ? 'active' : ''}" onclick="switchSlot(${i})">Slot ${i + 1}</button>`;
    }).join('');
    const used = meetingSlots.filter(s => s.time !== null).length;
    if (used < 3) html += `<button class="add-slot-btn" onclick="addSlot()">+ Add Slot</button>`;
    tabs.innerHTML = html;
}

function switchSlot(i) { activeSlot = i; render(); }
function addSlot() {
    const next = meetingSlots.findIndex(s => s.time === null);
    if (next !== -1) { activeSlot = next; toast('Click timeline to place Slot ' + (next + 1)); }
}

// ===== DRAG =====
function setupDrag() {
    document.querySelectorAll('.timeline').forEach((tl, i) => {
        tl.addEventListener('mousedown', (e) => handleClick(e, tl, i));
    });
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);
}

function handleClick(e, tl, ci) {
    const rect = tl.getBoundingClientRect();
    const slot = e.target.closest('.meeting-slot');

    if (slot) {
        activeSlot = parseInt(slot.dataset.slot);
        if (e.target.classList.contains('resize-handle')) isResizing = true;
        else isDragging = true;
    } else {
        const x = e.clientX - rect.left;
        const hw = rect.width / 24;
        let u = Math.round((x / hw) * 2) / 2;
        u = Math.max(0, Math.min(23.5, u));
        meetingSlots[activeSlot].time = u;
        meetingSlots[activeSlot].duration = meetingDuration;
        isDragging = true;
        render();
    }
}

function handleMove(e) {
    if (!isDragging && !isResizing) return;
    const tl = document.querySelector('.timeline');
    if (!tl) return;
    const rect = tl.getBoundingClientRect();
    const hw = rect.width / 24;

    if (isDragging && meetingSlots[activeSlot].time !== null) {
        const x = e.clientX - rect.left;
        let u = Math.round((x / hw) * 2) / 2;
        const dur = meetingSlots[activeSlot].duration || meetingDuration;
        u = Math.max(0, Math.min(24 - dur, u));
        if (u !== meetingSlots[activeSlot].time) {
            meetingSlots[activeSlot].time = u;
            render();
        }
    } else if (isResizing) {
        const x = e.clientX - rect.left;
        let end = Math.round((x / hw) * 2) / 2;
        let dur = end - meetingSlots[activeSlot].time;
        dur = Math.max(0.5, Math.min(4, dur));
        if (dur !== meetingSlots[activeSlot].duration) {
            meetingSlots[activeSlot].duration = dur;
            meetingDuration = dur;
            durationSelect.value = dur.toString();
            render();
        }
    }
}

function handleUp() { isDragging = false; isResizing = false; }

function handleTouchStart(e) {
    const slot = e.target.closest('.meeting-slot');
    const tl = e.target.closest('.timeline');
    if (slot || (tl && tl.dataset.ci === '0')) {
        e.preventDefault();
        if (slot) { activeSlot = parseInt(slot.dataset.slot); isDragging = true; }
        else {
            const rect = tl.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const hw = rect.width / 24;
            meetingSlots[activeSlot].time = Math.round((x / hw) * 2) / 2;
            meetingSlots[activeSlot].duration = meetingDuration;
            isDragging = true;
            render();
        }
    }
}

function handleTouchMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    const tl = document.querySelector('.timeline');
    if (!tl) return;
    const rect = tl.getBoundingClientRect();
    const hw = rect.width / 24;
    const x = e.touches[0].clientX - rect.left;
    let u = Math.round((x / hw) * 2) / 2;
    const dur = meetingSlots[activeSlot].duration || meetingDuration;
    u = Math.max(0, Math.min(24 - dur, u));
    if (u !== meetingSlots[activeSlot].time) {
        meetingSlots[activeSlot].time = u;
        render();
    }
}

function handleTouchEnd() { isDragging = false; }

// ===== KEYBOARD =====
function handleKeyboard(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    const slot = meetingSlots[activeSlot];
    switch(e.key) {
        case 'ArrowLeft':
            if (slot.time !== null) {
                if (e.shiftKey) slot.duration = Math.max(0.5, (slot.duration || meetingDuration) - 0.5);
                else slot.time = Math.max(0, slot.time - 0.5);
                render();
            }
            e.preventDefault();
            break;
        case 'ArrowRight':
            if (slot.time !== null) {
                if (e.shiftKey) slot.duration = Math.min(4, (slot.duration || meetingDuration) + 0.5);
                else slot.time = Math.min(24 - (slot.duration || meetingDuration), slot.time + 0.5);
                render();
            }
            e.preventDefault();
            break;
        case '1': case '2': case '3':
            activeSlot = parseInt(e.key) - 1;
            render();
            break;
        case 'd': case 'D':
            setView(currentView === 'day' ? 'week' : 'day');
            break;
    }
}

// ===== VIEW =====
function setView(v) {
    currentView = v;
    document.querySelectorAll('.view-tab').forEach(b => b.classList.toggle('active', b.dataset.view === v));
    render();
}

// ===== ACTIONS =====
function copyDetails() {
    const slot = meetingSlots[activeSlot];
    if (slot.time === null) return;
    const dur = slot.duration || meetingDuration;
    let text = `📅 Meeting Time (${dur} hour${dur !== 1 ? 's' : ''})\n${'─'.repeat(35)}\n\n`;
    selectedCities.forEach(c => {
        const off = getOffset(c);
        const start = localHour(slot.time, off);
        const end = localHour(slot.time + dur, off);
        const name = c.participant ? `${c.name} (${c.participant})` : c.name;
        text += `🌍 ${name}\n   ${formatTime(start)} – ${formatTime(end)} (${c.timezone})\n\n`;
    });
    text += `📆 Date: ${selectedDate.toDateString()}\n`;
    navigator.clipboard.writeText(text).then(() => toast('Copied to clipboard'));
}

function exportCalendar() {
    const slot = meetingSlots[activeSlot];
    if (slot.time === null) return;
    const dur = slot.duration || meetingDuration;
    const start = new Date(selectedDate);
    start.setUTCHours(Math.floor(slot.time), (slot.time % 1) * 60, 0, 0);
    const end = new Date(start);
    end.setTime(end.getTime() + dur * 3600000);
    const fmt = d => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const desc = selectedCities.map(c => `${c.name}: ${formatTime(localHour(slot.time, getOffset(c)))} - ${formatTime(localHour(slot.time + dur, getOffset(c)))}`).join('\\n');
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Chronos//EN\nBEGIN:VEVENT\nUID:${Date.now()}@chronos\nDTSTAMP:${fmt(new Date())}\nDTSTART:${fmt(start)}\nDTEND:${fmt(end)}\nSUMMARY:Team Meeting\nDESCRIPTION:${desc}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'meeting.ics'; a.click();
    URL.revokeObjectURL(url);
    toast('Calendar file downloaded');
}

function generateShareUrl() {
    const p = new URLSearchParams();
    // Simple format: just city names
    p.set('cities', selectedCities.map(c => c.name).join(','));
    p.set('date', formatDateInput(selectedDate));
    if (meetingSlots[activeSlot].time !== null) {
        const hour = Math.floor(meetingSlots[activeSlot].time);
        const min = Math.round((meetingSlots[activeSlot].time - hour) * 60);
        p.set('meeting', `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`);
        p.set('duration', meetingSlots[activeSlot].duration || meetingDuration);
    }
    document.getElementById('shareUrlInput').value = location.origin + location.pathname + '?' + p.toString();
    document.getElementById('shareUrlWrapper').classList.add('active');
}

function copyShareUrl() {
    navigator.clipboard.writeText(document.getElementById('shareUrlInput').value).then(() => toast('Share URL copied'));
}

function loadFromUrl() {
    const p = new URLSearchParams(location.search);
    
    // Support simple format: ?cities=London,Tokyo,New York
    if (p.has('cities')) {
        const cityList = p.get('cities').split(',');
        cityList.forEach(cityInput => {
            // Check if it's the complex format (name|country|participant)
            if (cityInput.includes('|')) {
                const [name, country, participant] = cityInput.split('|');
                const city = cities.find(c => c.name === name && c.country === country);
                if (city) selectedCities.push({ ...city, participant: participant || '' });
            } else {
                // Simple format: just city name
                const cityName = cityInput.trim();
                const city = cities.find(c => c.name.toLowerCase() === cityName.toLowerCase());
                if (city) selectedCities.push({ ...city, participant: '' });
            }
        });
        updateCityTags();
    }
    
    if (p.has('date')) { 
        selectedDate = new Date(p.get('date')); 
        dateInput.value = p.get('date'); 
    }
    
    if (p.has('slot')) activeSlot = parseInt(p.get('slot'));
    
    // Support simple meeting time format: ?meeting=14:00 or ?meeting=14:30
    if (p.has('meeting')) {
        const meetingTime = p.get('meeting');
        const [hours, minutes] = meetingTime.split(':').map(Number);
        meetingSlots[activeSlot].time = hours + (minutes / 60);
        meetingSlots[activeSlot].duration = parseFloat(p.get('duration') || '1');
    }
    // Also support old format
    if (p.has('time')) {
        meetingSlots[activeSlot].time = parseFloat(p.get('time'));
        meetingSlots[activeSlot].duration = parseFloat(p.get('duration') || '1');
    }
}

function clearSlot() { meetingSlots[activeSlot] = { time: null, duration: 1 }; render(); }

// ===== GROUPS =====
function loadGroups() {
    const groups = JSON.parse(localStorage.getItem('tzGroups') || '[]');
    document.getElementById('savedGroups').innerHTML = groups.map((g, i) => `
        <div class="saved-group" onclick="loadGroup(${i})">
            <span>${g.name}</span>
            <span class="delete-btn" onclick="event.stopPropagation(); deleteGroup(${i})">×</span>
        </div>
    `).join('');
}

function saveGroup() {
    const name = document.getElementById('groupNameInput').value.trim();
    if (!name || selectedCities.length === 0) { toast('Enter name and select cities'); return; }
    const groups = JSON.parse(localStorage.getItem('tzGroups') || '[]');
    groups.push({ name, cities: selectedCities.map(c => ({ name: c.name, country: c.country, participant: c.participant })) });
    localStorage.setItem('tzGroups', JSON.stringify(groups));
    document.getElementById('groupNameInput').value = '';
    loadGroups();
    toast('Group saved');
}

function loadGroup(i) {
    const groups = JSON.parse(localStorage.getItem('tzGroups') || '[]');
    const g = groups[i];
    selectedCities = g.cities.map(gc => {
        const city = cities.find(c => c.name === gc.name && c.country === gc.country);
        return city ? { ...city, participant: gc.participant || '' } : null;
    }).filter(Boolean);
    updateCityTags();
    updateConverterOptions();
    render();
    toast(`Loaded "${g.name}"`);
}

function deleteGroup(i) {
    const groups = JSON.parse(localStorage.getItem('tzGroups') || '[]');
    groups.splice(i, 1);
    localStorage.setItem('tzGroups', JSON.stringify(groups));
    loadGroups();
}

// ===== CONVERTER =====
function updateConverterOptions() {
    const opts = selectedCities.length > 0 ? selectedCities : cities.slice(0, 10);
    converterSource.innerHTML = opts.map(c => `<option value="${c.name}|${c.country}">${c.name}</option>`).join('');
}

function convertTime() {
    const time = document.getElementById('converterTime').value;
    const [name, country] = converterSource.value.split('|');
    const src = cities.find(c => c.name === name && c.country === country);
    if (!src || !time) return;
    const [h, m] = time.split(':').map(Number);
    const local = h + m / 60;
    const utc = utcFromLocal(local, getOffset(src));
    const targets = selectedCities.length > 0 ? selectedCities : cities.slice(0, 5);
    const results = targets.filter(c => c.name !== src.name).map(c => ({ city: c, time: formatTime(localHour(utc, getOffset(c))) }));
    document.getElementById('converterResults').innerHTML = results.map(r => `
        <div class="converter-result">
            <span class="city">${r.city.name}:</span>
            <span class="time">${r.time}</span>
        </div>
    `).join('');
}

// ===== THEME =====
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('light-mode', !isDarkMode);
    localStorage.setItem('tzTheme', isDarkMode ? 'dark' : 'light');
}

if (localStorage.getItem('tzTheme') === 'light') {
    isDarkMode = false;
    document.body.classList.add('light-mode');
}

// ===== LIVE TIME =====
function updateLiveTimes() {
    const live = document.querySelectorAll('.live-time');
    const now = new Date();
    selectedCities.forEach((c, i) => {
        if (live[i]) {
            const off = getOffset(c);
            const h = localHour(now.getUTCHours(), off);
            const m = now.getUTCMinutes();
            live[i].textContent = `${formatHour(h).toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
        }
    });
}

// ===== TOAST =====
function toast(msg) {
    document.querySelectorAll('.toast').forEach(t => t.remove());
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => {
        t.style.animation = 'toastOut 0.25s ease forwards';
        setTimeout(() => t.remove(), 250);
    }, 2500);
}

// ===== WORLD CLOCK =====
let worldClocks = JSON.parse(localStorage.getItem('worldClocks') || '[]');
let worldClockInterval = null;

function initWorldClock() {
    const select = document.getElementById('worldClockSelect');
    cities.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.name;
        opt.textContent = `${c.name}, ${c.country}`;
        select.appendChild(opt);
    });
    renderWorldClocks();
    worldClockInterval = setInterval(renderWorldClocks, 1000);
}

function addWorldClock() {
    const select = document.getElementById('worldClockSelect');
    const cityName = select.value;
    if (!cityName || worldClocks.includes(cityName)) return;
    worldClocks.push(cityName);
    localStorage.setItem('worldClocks', JSON.stringify(worldClocks));
    renderWorldClocks();
    select.value = '';
}

function removeWorldClock(cityName) {
    worldClocks = worldClocks.filter(c => c !== cityName);
    localStorage.setItem('worldClocks', JSON.stringify(worldClocks));
    renderWorldClocks();
}

function renderWorldClocks() {
    const grid = document.getElementById('worldClocksGrid');
    if (worldClocks.length === 0) {
        grid.innerHTML = '<div style="text-align:center;padding:30px;color:var(--text-muted);grid-column:1/-1;">Add cities to see their current time</div>';
        return;
    }
    grid.innerHTML = worldClocks.map(cityName => {
        const city = cities.find(c => c.name === cityName);
        if (!city) return '';
        const now = new Date();
        const offset = isDST(now) ? city.dstOffset : city.offset;
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const cityTime = new Date(utc + offset * 3600000);
        const timeStr = cityTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
        const dateStr = cityTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        return `
            <div class="world-clock-item">
                <button class="world-clock-remove" onclick="removeWorldClock('${cityName}')">×</button>
                <div class="world-clock-city">${city.name}</div>
                <div class="world-clock-time">${timeStr}</div>
                <div class="world-clock-date">${dateStr}</div>
            </div>
        `;
    }).join('');
}

// ===== MEETING COUNTDOWN =====
let meetings = JSON.parse(localStorage.getItem('meetings') || '[]');
let countdownInterval = null;

function initCountdown() {
    const dateInput = document.getElementById('meetingDate');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
    document.getElementById('meetingTime').value = '09:00';
    renderCountdowns();
    countdownInterval = setInterval(renderCountdowns, 1000);
}

function addMeeting() {
    const title = document.getElementById('meetingTitle').value.trim();
    const date = document.getElementById('meetingDate').value;
    const time = document.getElementById('meetingTime').value;
    if (!title || !date || !time) { toast('Please fill all fields'); return; }
    meetings.push({ id: Date.now(), title, datetime: `${date}T${time}` });
    localStorage.setItem('meetings', JSON.stringify(meetings));
    document.getElementById('meetingTitle').value = '';
    renderCountdowns();
    toast('Meeting added');
}

function removeMeeting(id) {
    meetings = meetings.filter(m => m.id !== id);
    localStorage.setItem('meetings', JSON.stringify(meetings));
    renderCountdowns();
}

function renderCountdowns() {
    const container = document.getElementById('countdownList');
    const now = new Date();
    const upcoming = meetings.filter(m => new Date(m.datetime) > now).sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
    if (upcoming.length === 0) {
        container.innerHTML = '<div class="empty-countdown"><div class="empty-countdown-icon">📅</div><p>No upcoming meetings</p></div>';
        return;
    }
    container.innerHTML = upcoming.map(m => {
        const meetingTime = new Date(m.datetime);
        const diff = meetingTime - now;
        const hours = Math.floor(diff / 3600000);
        const mins = Math.floor((diff % 3600000) / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        let timeDisplay = '';
        let urgency = '';
        if (hours >= 24) {
            const days = Math.floor(hours / 24);
            timeDisplay = `${days}d ${hours % 24}h`;
        } else if (hours > 0) {
            timeDisplay = `${hours}h ${mins}m`;
            if (hours < 1) urgency = 'soon';
        } else {
            timeDisplay = `${mins}m ${secs}s`;
            urgency = mins < 15 ? 'urgent' : 'soon';
        }
        return `
            <div class="countdown-meeting ${urgency}">
                <div class="countdown-header">
                    <div>
                        <div class="countdown-title">${escapeHtml(m.title)}</div>
                        <div class="countdown-details">${meetingTime.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
                    </div>
                    <div class="countdown-time-display">${timeDisplay}</div>
                </div>
                <button class="countdown-remove" onclick="removeMeeting(${m.id})">×</button>
            </div>
        `;
    }).join('');
}

// ===== TEAM DIRECTORY =====
let teamMembers = JSON.parse(localStorage.getItem('teamMembers') || '[]');

function initTeamDirectory() {
    const select = document.getElementById('memberTimezone');
    cities.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.name;
        opt.textContent = `${c.name} (${c.timezone})`;
        select.appendChild(opt);
    });
    renderTeamMembers();
}

function addTeamMember() {
    const name = document.getElementById('memberName').value.trim();
    const role = document.getElementById('memberRole').value.trim();
    const tz = document.getElementById('memberTimezone').value;
    const hours = document.getElementById('memberHours').value.trim();
    if (!name || !tz) { toast('Name and timezone required'); return; }
    teamMembers.push({ id: Date.now(), name, role, timezone: tz, hours: hours || '9-17' });
    localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
    document.getElementById('memberName').value = '';
    document.getElementById('memberRole').value = '';
    document.getElementById('memberTimezone').value = '';
    document.getElementById('memberHours').value = '';
    renderTeamMembers();
    toast('Team member added');
}

function removeTeamMember(id) {
    teamMembers = teamMembers.filter(m => m.id !== id);
    localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
    renderTeamMembers();
}

function getTeamMemberStatus(member) {
    const city = cities.find(c => c.name === member.timezone);
    if (!city) return 'away';
    const now = new Date();
    const offset = isDST(now) ? city.dstOffset : city.offset;
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const localTime = new Date(utc + offset * 3600000);
    const hour = localTime.getHours();
    const [start, end] = (member.hours || '9-17').split('-').map(Number);
    if (hour >= start && hour < end) return 'available';
    if (hour >= end && hour < end + 2) return 'away';
    return 'busy';
}

function renderTeamMembers() {
    const grid = document.getElementById('teamGrid');
    if (teamMembers.length === 0) {
        grid.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);grid-column:1/-1;">Add team members to track their availability</div>';
        return;
    }
    grid.innerHTML = teamMembers.map(m => {
        const city = cities.find(c => c.name === m.timezone);
        const status = getTeamMemberStatus(m);
        const initials = m.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
        let localTimeStr = '';
        if (city) {
            const now = new Date();
            const offset = isDST(now) ? city.dstOffset : city.offset;
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const localTime = new Date(utc + offset * 3600000);
            localTimeStr = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
        }
        return `
            <div class="team-member">
                <div class="team-actions">
                    <button class="team-action-btn delete" onclick="removeTeamMember(${m.id})">×</button>
                </div>
                <div class="team-member-header">
                    <div class="team-avatar">${initials}</div>
                    <div>
                        <div class="team-name">${escapeHtml(m.name)}</div>
                        <div class="team-role">${escapeHtml(m.role || 'Team member')}</div>
                    </div>
                </div>
                <div class="team-info">
                    <div class="team-info-item"><span>🌍</span><span>${m.timezone}</span></div>
                    <div class="team-info-item"><span>🕐</span><span>${localTimeStr}</span></div>
                    <div class="team-info-item"><span>📆</span><span>Working: ${m.hours}</span></div>
                    <div class="team-info-item"><span class="team-status ${status}">${status}</span></div>
                </div>
            </div>
        `;
    }).join('');
}

// ===== HOLIDAY CALENDAR =====
const holidays = {
    US: [
        { date: '01-01', name: "New Year's Day", type: 'Federal' },
        { date: '01-20', name: 'Martin Luther King Jr. Day', type: 'Federal' },
        { date: '02-17', name: "Presidents' Day", type: 'Federal' },
        { date: '05-26', name: 'Memorial Day', type: 'Federal' },
        { date: '06-19', name: 'Juneteenth', type: 'Federal' },
        { date: '07-04', name: 'Independence Day', type: 'Federal' },
        { date: '09-01', name: 'Labor Day', type: 'Federal' },
        { date: '10-13', name: 'Columbus Day', type: 'Federal' },
        { date: '11-11', name: 'Veterans Day', type: 'Federal' },
        { date: '11-27', name: 'Thanksgiving', type: 'Federal' },
        { date: '12-25', name: 'Christmas Day', type: 'Federal' }
    ],
    UK: [
        { date: '01-01', name: "New Year's Day", type: 'Bank Holiday' },
        { date: '04-18', name: 'Good Friday', type: 'Bank Holiday' },
        { date: '04-21', name: 'Easter Monday', type: 'Bank Holiday' },
        { date: '05-05', name: 'Early May Bank Holiday', type: 'Bank Holiday' },
        { date: '05-26', name: 'Spring Bank Holiday', type: 'Bank Holiday' },
        { date: '08-25', name: 'Summer Bank Holiday', type: 'Bank Holiday' },
        { date: '12-25', name: 'Christmas Day', type: 'Bank Holiday' },
        { date: '12-26', name: 'Boxing Day', type: 'Bank Holiday' }
    ],
    DE: [
        { date: '01-01', name: 'Neujahrstag', type: 'National' },
        { date: '04-18', name: 'Karfreitag', type: 'National' },
        { date: '04-21', name: 'Ostermontag', type: 'National' },
        { date: '05-01', name: 'Tag der Arbeit', type: 'National' },
        { date: '05-29', name: 'Christi Himmelfahrt', type: 'National' },
        { date: '06-09', name: 'Pfingstmontag', type: 'National' },
        { date: '10-03', name: 'Tag der Deutschen Einheit', type: 'National' },
        { date: '12-25', name: 'Weihnachtstag', type: 'National' },
        { date: '12-26', name: 'Zweiter Weihnachtstag', type: 'National' }
    ],
    FR: [
        { date: '01-01', name: "Jour de l'An", type: 'National' },
        { date: '04-21', name: 'Lundi de Pâques', type: 'National' },
        { date: '05-01', name: 'Fête du Travail', type: 'National' },
        { date: '05-08', name: 'Victoire 1945', type: 'National' },
        { date: '05-29', name: 'Ascension', type: 'National' },
        { date: '06-09', name: 'Lundi de Pentecôte', type: 'National' },
        { date: '07-14', name: 'Fête Nationale', type: 'National' },
        { date: '08-15', name: 'Assomption', type: 'National' },
        { date: '11-01', name: 'Toussaint', type: 'National' },
        { date: '11-11', name: 'Armistice', type: 'National' },
        { date: '12-25', name: 'Noël', type: 'National' }
    ],
    JP: [
        { date: '01-01', name: 'New Year', type: 'National' },
        { date: '01-13', name: 'Coming of Age Day', type: 'National' },
        { date: '02-11', name: 'Foundation Day', type: 'National' },
        { date: '02-23', name: "Emperor's Birthday", type: 'National' },
        { date: '03-20', name: 'Vernal Equinox', type: 'National' },
        { date: '04-29', name: 'Showa Day', type: 'National' },
        { date: '05-03', name: 'Constitution Day', type: 'National' },
        { date: '05-04', name: 'Greenery Day', type: 'National' },
        { date: '05-05', name: "Children's Day", type: 'National' },
        { date: '07-21', name: 'Marine Day', type: 'National' },
        { date: '08-11', name: 'Mountain Day', type: 'National' },
        { date: '09-15', name: 'Respect for Aged', type: 'National' },
        { date: '09-23', name: 'Autumnal Equinox', type: 'National' },
        { date: '10-13', name: 'Sports Day', type: 'National' },
        { date: '11-03', name: 'Culture Day', type: 'National' },
        { date: '11-23', name: 'Labour Thanksgiving', type: 'National' }
    ],
    AU: [
        { date: '01-01', name: "New Year's Day", type: 'National' },
        { date: '01-27', name: 'Australia Day (Observed)', type: 'National' },
        { date: '04-18', name: 'Good Friday', type: 'National' },
        { date: '04-19', name: 'Easter Saturday', type: 'National' },
        { date: '04-21', name: 'Easter Monday', type: 'National' },
        { date: '04-25', name: 'Anzac Day', type: 'National' },
        { date: '12-25', name: 'Christmas Day', type: 'National' },
        { date: '12-26', name: 'Boxing Day', type: 'National' }
    ],
    CA: [
        { date: '01-01', name: "New Year's Day", type: 'Federal' },
        { date: '04-18', name: 'Good Friday', type: 'Federal' },
        { date: '05-19', name: 'Victoria Day', type: 'Federal' },
        { date: '07-01', name: 'Canada Day', type: 'Federal' },
        { date: '09-01', name: 'Labour Day', type: 'Federal' },
        { date: '09-30', name: 'Truth & Reconciliation', type: 'Federal' },
        { date: '10-13', name: 'Thanksgiving', type: 'Federal' },
        { date: '11-11', name: 'Remembrance Day', type: 'Federal' },
        { date: '12-25', name: 'Christmas Day', type: 'Federal' },
        { date: '12-26', name: 'Boxing Day', type: 'Federal' }
    ],
    IN: [
        { date: '01-26', name: 'Republic Day', type: 'National' },
        { date: '08-15', name: 'Independence Day', type: 'National' },
        { date: '10-02', name: 'Gandhi Jayanti', type: 'National' },
        { date: '03-14', name: 'Holi', type: 'Gazetted' },
        { date: '04-14', name: 'Ambedkar Jayanti', type: 'Gazetted' },
        { date: '10-12', name: 'Dussehra', type: 'Gazetted' },
        { date: '11-01', name: 'Diwali', type: 'Gazetted' },
        { date: '12-25', name: 'Christmas', type: 'Gazetted' }
    ]
};

function loadHolidays() {
    const country = document.getElementById('holidayCountry').value;
    const year = document.getElementById('holidayYear').value;
    const list = document.getElementById('holidayList');
    const countryHolidays = holidays[country] || [];
    if (countryHolidays.length === 0) {
        list.innerHTML = '<div class="holiday-empty">No holidays data for this country</div>';
        return;
    }
    const today = new Date();
    const sortedHolidays = countryHolidays.map(h => {
        const [month, day] = h.date.split('-');
        return { ...h, fullDate: new Date(year, parseInt(month) - 1, parseInt(day)) };
    }).sort((a, b) => a.fullDate - b.fullDate);
    list.innerHTML = sortedHolidays.map(h => {
        const isPast = h.fullDate < today;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `
            <div class="holiday-item" style="${isPast ? 'opacity: 0.5;' : ''}">
                <div class="holiday-date">
                    <div class="holiday-date-day">${h.fullDate.getDate()}</div>
                    <div class="holiday-date-month">${months[h.fullDate.getMonth()]}</div>
                </div>
                <div class="holiday-info">
                    <div class="holiday-name">${h.name}</div>
                    <div class="holiday-country">${h.fullDate.toLocaleDateString('en-US', { weekday: 'long' })}</div>
                </div>
                <div class="holiday-type">${h.type}</div>
            </div>
        `;
    }).join('');
}

// ===== MEETING INVITE GENERATOR =====
let inviteRecipients = [];

function initInviteGenerator() {
    const sourceSelect = document.getElementById('inviteSourceTz');
    const recipientSelect = document.getElementById('addRecipientTz');
    cities.forEach(c => {
        const opt1 = document.createElement('option');
        opt1.value = c.name;
        opt1.textContent = `${c.name} (${c.timezone})`;
        sourceSelect.appendChild(opt1);
        const opt2 = document.createElement('option');
        opt2.value = c.name;
        opt2.textContent = `${c.name} (${c.timezone})`;
        recipientSelect.appendChild(opt2);
    });
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('inviteDate').value = tomorrow.toISOString().split('T')[0];
}

function addInviteRecipient() {
    const select = document.getElementById('addRecipientTz');
    const tz = select.value;
    if (!tz || inviteRecipients.find(r => r.timezone === tz)) return;
    inviteRecipients.push({ timezone: tz });
    select.value = '';
    renderInviteRecipients();
}

function removeInviteRecipient(tz) {
    inviteRecipients = inviteRecipients.filter(r => r.timezone !== tz);
    renderInviteRecipients();
}

function renderInviteRecipients() {
    const container = document.getElementById('inviteRecipients');
    if (inviteRecipients.length === 0) {
        container.innerHTML = '';
        return;
    }
    container.innerHTML = inviteRecipients.map(r => `
        <div class="tz-recipient">
            <span>🌍</span>
            <span style="flex:1;">${r.timezone}</span>
            <button class="tz-recipient-remove" onclick="removeInviteRecipient('${r.timezone}')">×</button>
        </div>
    `).join('');
}

function generateInvite() {
    const title = document.getElementById('inviteTitle').value.trim();
    const date = document.getElementById('inviteDate').value;
    const time = document.getElementById('inviteTime').value;
    const sourceCity = document.getElementById('inviteSourceTz').value;
    const desc = document.getElementById('inviteDescription').value.trim();
    if (!title || !date || !time || !sourceCity) {
        toast('Please fill in title, date, time, and timezone');
        return;
    }
    const sourceData = cities.find(c => c.name === sourceCity);
    if (!sourceData) return;
    const meetingDate = new Date(`${date}T${time}`);
    const now = new Date();
    const sourceOffset = isDST(now) ? sourceData.dstOffset : sourceData.offset;
    let invite = `📅 MEETING INVITE\n`;
    invite += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    invite += `📌 ${title}\n\n`;
    if (desc) invite += `📝 ${desc}\n\n`;
    invite += `🕐 Time:\n`;
    invite += `   ${sourceCity}: ${meetingDate.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}\n`;
    inviteRecipients.forEach(r => {
        const cityData = cities.find(c => c.name === r.timezone);
        if (!cityData) return;
        const targetOffset = isDST(now) ? cityData.dstOffset : cityData.offset;
        const diffHours = targetOffset - sourceOffset;
        const convertedTime = new Date(meetingDate.getTime() + diffHours * 3600000);
        invite += `   ${r.timezone}: ${convertedTime.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}\n`;
    });
    invite += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
    invite += `Generated by Chronos`;
    document.getElementById('invitePreview').textContent = invite;
    document.getElementById('invitePreview').style.display = 'block';
}

function copyInvite() {
    const preview = document.getElementById('invitePreview');
    if (!preview.textContent) {
        toast('Generate an invite first');
        return;
    }
    navigator.clipboard.writeText(preview.textContent);
    toast('Copied to clipboard!');
}

// ===== AVAILABILITY WINDOWS =====
let availabilityPersons = [{ name: 'You', availability: {} }];
let currentAvailabilityPerson = 0;

function initAvailability() {
    loadAvailability();
    renderAvailabilityPersons();
    renderAvailabilityGrid();
}

function loadAvailability() {
    const saved = localStorage.getItem('availabilityPersons');
    if (saved) availabilityPersons = JSON.parse(saved);
}

function saveAvailability() {
    localStorage.setItem('availabilityPersons', JSON.stringify(availabilityPersons));
}

function addAvailabilityPerson() {
    const name = prompt('Enter person name:');
    if (!name) return;
    availabilityPersons.push({ name, availability: {} });
    saveAvailability();
    renderAvailabilityPersons();
}

function selectAvailabilityPerson(index) {
    currentAvailabilityPerson = index;
    renderAvailabilityPersons();
    renderAvailabilityGrid();
}

function renderAvailabilityPersons() {
    const container = document.getElementById('availabilityPersons');
    container.innerHTML = availabilityPersons.map((p, i) => `
        <button class="person-chip ${i === currentAvailabilityPerson ? 'active' : ''}" onclick="selectAvailabilityPerson(${i})">${escapeHtml(p.name)}</button>
    `).join('');
}

function toggleAvailabilityCell(day, hour) {
    const key = `${day}-${hour}`;
    const person = availabilityPersons[currentAvailabilityPerson];
    if (person.availability[key]) {
        delete person.availability[key];
    } else {
        person.availability[key] = true;
    }
    saveAvailability();
    renderAvailabilityGrid();
}

function renderAvailabilityGrid() {
    const grid = document.getElementById('availabilityGrid');
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let html = '<div></div>';
    days.forEach(d => html += `<div class="availability-header">${d}</div>`);
    for (let hour = 6; hour < 22; hour++) {
        const hourStr = hour.toString().padStart(2, '0') + ':00';
        html += `<div class="availability-hour">${hourStr}</div>`;
        days.forEach((d, di) => {
            const key = `${di}-${hour}`;
            const isSelected = availabilityPersons[currentAvailabilityPerson].availability[key];
            html += `<div class="availability-cell ${isSelected ? 'selected' : ''}" onclick="toggleAvailabilityCell(${di}, ${hour})"></div>`;
        });
    }
    grid.innerHTML = html;
}

function findOverlapAvailability() {
    const grid = document.getElementById('availabilityGrid');
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let html = '<div></div>';
    days.forEach(d => html += `<div class="availability-header">${d}</div>`);
    for (let hour = 6; hour < 22; hour++) {
        const hourStr = hour.toString().padStart(2, '0') + ':00';
        html += `<div class="availability-hour">${hourStr}</div>`;
        days.forEach((d, di) => {
            const key = `${di}-${hour}`;
            const count = availabilityPersons.filter(p => p.availability[key]).length;
            let cls = 'availability-cell';
            if (count === availabilityPersons.length && count > 0) cls += ' overlap';
            else if (count > 0) cls += ' partial';
            html += `<div class="${cls}" onclick="toggleAvailabilityCell(${di}, ${hour})" title="${count}/${availabilityPersons.length} available"></div>`;
        });
    }
    grid.innerHTML = html;
    toast(`Showing overlap for ${availabilityPersons.length} people`);
}

// ===== INITIALIZE ALL FEATURES =====
init();
initWorldClock();
initCountdown();
initTeamDirectory();
loadHolidays();
initInviteGenerator();
initAvailability();
setInterval(renderTeamMembers, 60000);
