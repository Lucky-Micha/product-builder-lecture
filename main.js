const cafeData = {
    view: [
        { 
            name: "가평 골든트리", 
            desc: "청평호반 바로 앞에서 즐기는 환상적인 '물멍' 포인트. 통유리창 너머 호수 뷰가 일품입니다.", 
            location: "경기 가평군 가평읍 북한강변로 326-124",
            img: "https://images.unsplash.com/photo-1508270666974-9a0a12aca7b2?q=80&w=2070&auto=format&fit=crop"
        },
        { 
            name: "광주 스멜츠", 
            desc: "남한산성 숲속 대형 창문으로 보이는 계절의 변화가 마치 액자 속 그림 같은 곳입니다.", 
            location: "경기 광주시 오포읍 신현로 103",
            img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop"
        },
        { 
            name: "남양주 비루개", 
            desc: "별내 산꼭대기에 위치한 식물원 컨셉의 카페. 탁 트인 산세와 밤하늘의 별을 감상하기 좋습니다.", 
            location: "경기 남양주시 별내면 용암비루개길 219-88",
            img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
        }
    ],
    architecture: [
        { 
            name: "이천 논스페이스", 
            desc: "논밭 한가운데 위치한 노출 콘크리트 격자 구조 건축물. 한국건축문화대상 수상작입니다.", 
            location: "경기 이천시 호법면 안거리로21번길 76",
            img: "https://images.unsplash.com/photo-1518005020251-582c7eb846bb?q=80&w=2042&auto=format&fit=crop"
        },
        { 
            name: "파주 모쿠슈라 프렌치카페", 
            desc: "유럽의 고성이나 대저택을 연상시키는 웅장한 외관과 화려한 중정이 돋보이는 공간입니다.", 
            location: "경기 파주시 조리읍 기곡길 138",
            img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
        },
        { 
            name: "용인 아리랑도원", 
            desc: "거대한 일월오봉도 조형물과 전통 미학을 현대적으로 재해석한 압도적인 인테리어를 자랑합니다.", 
            location: "경기 용인시 처인구 남사읍 통삼로 495",
            img: "https://images.unsplash.com/photo-1596422846543-b5c65171e03a?q=80&w=2070&auto=format&fit=crop"
        }
    ],
    reading: [
        { 
            name: "파주 지혜의 숲", 
            desc: "천장까지 닿는 거대한 서가와 수만 권의 책들이 압도적인 분위기를 자아내는 독서가들의 성지입니다.", 
            location: "경기 파주시 회동길 145",
            img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2090&auto=format&fit=crop"
        },
        { 
            name: "의정부 미술도서관", 
            desc: "미술관과 도서관이 융합된 감각적인 공간. 탁 트인 층고와 예술적인 분위기 속에서 책을 읽기 좋습니다.", 
            location: "경기 의정부시 민락로 248",
            img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop"
        },
        { 
            name: "양평 테라로사 서종", 
            desc: "넓은 팩토리 스타일 공간에 수많은 책과 커피 향이 어우러져 여유롭게 독서를 즐기기 최적인 곳입니다.", 
            location: "경기 양평군 서종면 북한강로 992",
            img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop"
        }
    ]
};

let currentCategory = null;
const historyList = JSON.parse(localStorage.getItem('cafeHistory')) || [];

const themeToggle = document.getElementById('theme-toggle');
const categoryBtns = document.querySelectorAll('.category-btn');
const resultArea = document.getElementById('recommendation-result');
const cafeImage = document.getElementById('cafe-image');
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
    cafeImage.src = cafe.img;
    cafeName.textContent = cafe.name;
    cafeDesc.textContent = cafe.desc;
    cafeLocation.textContent = "📍 " + cafe.location;
}

function addToHistory(cafe, category) {
    const categoryNames = { view: '풍경', architecture: '건축', reading: '독서' };
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
