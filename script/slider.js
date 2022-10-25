const selectOnName = document.querySelectorAll('[data-select-name]'),
    selectOnPosition = document.querySelectorAll('[data-select-position]'),
    arrowBack = document.querySelector('[data-back]'),
    arrowForward = document.querySelector('[data-forward]'),
    arrowBackMobile = document.querySelector('[data-back-small]'),
    arrowForwardMobile = document.querySelector('[data-forward-small]')
    city = document.querySelector('[data-city]'),
    place = document.querySelector('[data-city-place]'),
    area = document.querySelector('[data-area]'),
    time = document.querySelector('[data-time]'),
    imgBig = document.querySelector('[data-pic-big]'),
    imgSmall = document.querySelector('[data-pic-small]');

const data = [
    {
        portfolio: 1,
        city: 'Rostov-on-Don',
        place: 'LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        pic: 'assets/carousel/portfolio_1.jpg'
    },
    {
        portfolio: 2,
        city: 'Sochi',
        place: 'Thieves',
        area: '105 m2',
        time: '4 months',
        pic: 'assets/carousel/portfolio_2.jpg'
    },
    {
        portfolio: 3,
        city: 'Rostov-on-Don',
        place: 'Patriotic',
        area: '93 m2',
        time: '3 months',
        pic: 'assets/carousel/portfolio_3.jpg'
    }
]

let currentPortfolio = 1;

function selectedPortfolio (){
    data.forEach(item =>{
        if (currentPortfolio == item.portfolio){
            city.textContent = item.city;
            place.textContent = item.place;
            area.textContent = item.area;
            time.textContent = item.time;
            imgBig.setAttribute('src', item.pic);
            imgSmall.setAttribute('src', item.pic);
        }
    })
}
function checkPosition (){
    selectOnPosition.forEach(item =>{
        if (item.getAttribute('data-select-position')==currentPortfolio) {
            item.classList.remove('not-selected')
        } else {
            item.classList.add('not-selected')
        }
    })
}
function checkName (){
    selectOnName.forEach(item =>{
        if (item.getAttribute('data-select-name') == currentPortfolio) {
            item.classList.remove('portfolio-cities-name');
            item.classList.remove('subtitle')
            item.classList.add('portfolio-selected');
            item.classList.add('title');
        }
        else {
            item.classList.add('portfolio-cities-name');
            item.classList.add('subtitle')
            item.classList.remove('portfolio-selected');
            item.classList.remove('title');
        }
    })
}
function checkCounter (){
    if (currentPortfolio >3){
        currentPortfolio = 1
    }
    if (currentPortfolio <1 ){
        currentPortfolio = 3
    }
}

arrowBack.addEventListener('click', function (){
    currentPortfolio --;
    checkCounter();
    selectedPortfolio();
    checkPosition();
    checkName();
})

arrowForward.addEventListener('click', function (){
    currentPortfolio ++;
    checkCounter();
    selectedPortfolio();
    checkPosition();
    checkName();
})
arrowBackMobile.addEventListener('click', function (){
    currentPortfolio --;
    checkCounter();
    selectedPortfolio();
    checkPosition();
    checkName();
})

arrowForwardMobile.addEventListener('click', function (){
    currentPortfolio ++;
    checkCounter();
    selectedPortfolio();
    checkPosition();
    checkName();
})

selectOnName.forEach(item =>{
    item.addEventListener('click', function (evt){
        evt.preventDefault();
        currentPortfolio = item.getAttribute('data-select-name');
        selectedPortfolio();
        checkPosition();
        checkName();
    })
})
selectOnPosition.forEach(item =>{
    item.addEventListener('click', function (evt){
        evt.preventDefault();
        currentPortfolio = item.getAttribute('data-select-position');
        selectedPortfolio();
        checkPosition();
    })
})
selectedPortfolio();
