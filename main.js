const cafeData = {
    view: [
        { 
            name: "가평 카페 아우라", 
            desc: "청평호반의 탁 트인 리버뷰를 감상할 수 있는 곳으로, 야외 테라스 좌석이 일품입니다.", 
            location: "경기 가평군 설악면 유명로 2312",
            img: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?q=80&w=1000&auto=format&fit=crop"
        },
        { 
            name: "양평 카페 무르", 
            desc: "남한강 바로 앞에 위치하여 '강물 멍'을 때리기 좋으며, 노란 대문이 시그니처 포토존입니다.", 
            location: "경기 양평군 강하면 강남로 443",
            img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop"
        },
        { 
            name: "용인 그린웨일", 
            desc: "이동저수지 뷰를 품은 대형 카페로, 전면 통유리를 통해 사계절 저수지의 풍경을 즐길 수 있습니다.", 
            location: "경기 용인시 처인구 이동읍 어비리 354-4",
            img: "https://images.unsplash.com/photo-1498440726595-300488f286b0?q=80&w=1000&auto=format&fit=crop"
        },
        { 
            name: "양평 구벼울", 
            desc: "남한강 언덕에 위치해 시원한 강바람과 산세를 동시에 즐길 수 있는 뷰 맛집입니다.", 
            location: "경기 양평군 양서면 대심길 106-7",
            img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=1000&auto=format&fit=crop"
        },
        { 
            name: "남양주 비루개", 
            desc: "높은 지대에서 내려다보는 산의 능선과 밤하늘의 별이 아름다운 식물원 컨셉 카페입니다.", 
            location: "경기 남양주시 별내면 용암비루개길 219-88",
            img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop"
        }
    ],
    architecture: [
        { 
            name: "의정부 아나키아", 
            desc: "국내 최대 규모의 대형 카페로, 웅장한 건축미와 층별로 다른 인테리어가 압도적입니다.", 
            location: "경기 의정부시 민락동 877-1",
            img: "https://images.unsplash.com/photo-1518005020251-582c7eb846bb?q=80&w=1000&auto=format&fit=crop"
        },
        { 
            name: "이천 논스페이스", 
            desc: "노출 콘크리트 격자 구조가 인상적인 건축물로, 현대적인 세련미를 자랑합니다.", 
            location: "경기 이천시 호법면 안거리로21번길 76",
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
        },
        { 
            name: "파주 미메시스 아트 뮤지엄", 
            desc: "세계적인 건축가 알바루 시자가 설계한 곡선미가 극대화된 백색 건축물입니다.", 
            location: "경기 파주시 회동길 145",
            img: "https://images.unsplash.com/photo-1515362655824-9a74989f318e?q=80&w=1000&auto=format&fit=crop"
        },
        { 
            name: "용인 포레스트 아웃팅스", 
            desc: "거대한 유리 온실 형태의 건축물로, 내부 정원과 웅장한 층고가 특징입니다.", 
            location: "경기 용인시 기흥구 용구대로 2307",
            img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
        },
        { 
            name: "가평 골든트리", 
            desc: "경기도 건축문화상을 수상한 건물로, 자연 속에 녹아든 모던한 건축미를 보여줍니다.", 
            location: "경기 가평군 가평읍 북한강변로 326-124",
            img: "https://images.unsplash.com/photo-1449156001437-3a1621dfda2e?q=80&w=1000&auto=format&fit=crop"
        }
    ],
    reading: [
        { 
            name: "파주 지혜의 숲", 
            desc: "천장까지 닿는 거대한 서가가 상징적인 독서가들의 성지입니다.", 
            location: "경기 파주시 회동길 145",
            img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop"
        },
        { 
            name: "수원 지관서가", 
            desc: "차분하고 고요한 분위기에서 사색과 독서를 즐기기 최적화된 인문학 북카페입니다.", 
            location: "경기 수원시 팔달구 장다리로 185",
            img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop"
        },
        { 
            name: "수원 책방 카프카", 
            desc: "행궁동의 아늑한 북카페로, 조용한 음악과 함께 혼자만의 시간을 갖기 좋습니다.", 
            location: "경기 수원시 팔달구 화서문로 31",
            img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop"
        },
        { 
            name: "남양주 초록서재", 
            desc: "북한강을 바라보며 자연 속에서 책을 읽을 수 있는 힐링 공간입니다.", 
            location: "경기 남양주시 화도읍 북한강로 1395",
            img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop"
        },
        { 
            name: "파주 블루박스", 
            desc: "헌책방 골목의 정취를 느낄 수 있는 빈티지한 아지트 같은 북카페입니다.", 
            location: "경기 파주시 문발로 240-21",
            img: "https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=1000&auto=format&fit=crop"
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
    
    resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
        li.innerHTML = "<div><strong>" + item.name + "</strong><span class='history-tag'>" + item.categoryName + "</span></div><small style='font-size: 0.7rem; opacity: 0.7;'>" + item.time.split(',')[1] + "</small>";
        historyUl.appendChild(li);
    });
}

generateBtn.addEventListener('click', recommendCafe);

initTheme();
renderHistory();
