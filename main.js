const cafeData = {
    view: [
        { name: "가평 골든트리", desc: "청평호반 바로 앞에서 즐기는 환상적인 '물멍' 포인트. 통유리창 너머 호수 뷰가 일품입니다.", location: "경기 가평군 가평읍 북한강변로 326-124" },
        { name: "광주 스멜츠", desc: "남한산성 숲속 대형 창문으로 보이는 계절의 변화가 마치 액자 속 그림 같은 곳입니다.", location: "경기 광주시 오포읍 신현로 103" },
        { name: "남양주 비루개", desc: "별내 산꼭대기에 위치한 식물원 컨셉의 카페. 탁 트인 산세와 밤하늘의 별을 감상하기 좋습니다.", location: "경기 남양주시 별내면 용암비루개길 219-88" }
    ],
    architecture: [
        { name: "이천 논스페이스", desc: "논밭 한가운데 위치한 노출 콘크리트 격자 구조 건축물. 한국건축문화대상 수상작입니다.", location: "경기 이천시 호법면 안거리로21번길 76" },
        { name: "파주 모쿠슈라 프렌치카페", desc: "유럽의 고성이나 대저택을 연상시키는 웅장한 외관과 화려한 중정이 돋보이는 공간입니다.", location: "경기 파주시 조리읍 기곡길 138" },
        { name: "용인 아리랑도원", desc: "거대한 일월오봉도 조형물과 전통 미학을 현대적으로 재해석한 압도적인 인테리어를 자랑합니다.", location: "경기 용인시 처인구 남사읍 통삼로 495" }
    ],
    coffee: [
        { name: "성남 180 커피 로스터스", desc: "한국 커피 로스팅 챔피언이 운영하는 곳. 커피 애호가들을 위한 브루잉 커피의 성지입니다.", location: "경기 성남시 분당구 판교역로 10번길 22" },
        { name: "용인 카페톤", desc: "용인 자연휴양림 인근 로스터리. 수준 높은 원두 로스팅과 숲 뷰를 동시에 즐길 수 있습니다.", location: "경기 용인시 처인구 모현읍 초부로 192" },
        { name: "광주 오라운트", desc: "거대한 로스팅 팩토리를 겸한 카페. 다양한 산지의 원두를 전문 바리스타의 손길로 맛볼 수 있습니다.", location: "경기 광주시 오포읍 양벌로 320-4" }
    ]
};

let currentCategory = null;
const historyList = JSON.parse(localStorage.getItem('cafeHistory')) || [];

const themeToggle = document.getElementById('theme-toggle');
const categoryBtns = document.querySelectorAll('.category-btn');
const resultArea = document.getElementById('recommendation-result');
const cafeName = document.getElementById('cafe-name');
const cafeDesc = document.getElementById('cafe-desc');
const cafeLocation = document.getElementById('cafe-location');
const generateBtn = document.getElementById('generate');
const historyUl = document.getElementById('history-list');

function initTheme() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) document.body.classList.add('dark-mode');
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    themeToggle.textContent = isDark ? '☀️' : '🌓';
}

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);
    updateThemeIcon(isDark);
});

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        recommendCafe();
    });
});

function recommendCafe() {
    if (!currentCategory) return;

    const list = cafeData[currentCategory];
    const randomIndex = Math.floor(Math.random() * list.length);
    const selected = list[randomIndex];

    displayResult(selected);
    addToHistory(selected, currentCategory);
}

function displayResult(cafe) {
    resultArea.style.display = 'block';
    cafeName.textContent = cafe.name;
    cafeDesc.textContent = cafe.desc;
    cafeLocation.textContent = "📍 " + cafe.location;
}

function addToHistory(cafe, category) {
    const categoryNames = { view: '풍경', architecture: '건축', coffee: '커피' };
    const historyItem = { ...cafe, categoryName: categoryNames[category], time: new Date().toLocaleString() };
    
    if (historyList.length > 0 && historyList[0].name === cafe.name) return;

    historyList.unshift(historyItem);
    if (historyList.length > 5) historyList.pop();
    
    localStorage.setItem('cafeHistory', JSON.stringify(historyList));
    renderHistory();
}

function renderHistory() {
    historyUl.innerHTML = '';
    historyList.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = "<div><strong>" + item.name + "</strong><span class='history-tag'>" + item.categoryName + "</span></div><small style='font-size: 0.7rem; opacity: 0.7;'>" + item.time + "</small>";
        historyUl.appendChild(li);
    });
}

generateBtn.addEventListener('click', recommendCafe);

initTheme();
renderHistory();
