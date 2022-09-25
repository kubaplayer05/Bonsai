/* hover menu actions */

const menuLinksArray = document.querySelectorAll('.hover-menu-link')
const menuCards = document.querySelectorAll('.menu-card-link')
const menuTitle = document.querySelector('.menu-title-value')

const cardsDescription = {
    1: ['Free contact maker','Social Media Managment Contact Template','Graphic Design Contract Template','Digital Marketing Contract Template'],
    2: ['Graphic Design Proposal Template','Buisness Proposal Template','Brand Ambassador Proposal Template','Data Entry Proposal Letter Template'],
    3: ['Social Media Invoice Templates','Contractor Invoice Template','Web Design Invoice Template','Influencer Invoice Template'],
    4: ['Influencer Agreement Template','Influencer Collaboration Agreement Template','Monthly Retainer Agreement Template','Writer Agreement Template'],
    5: ['Web Design Quotation Template','Interior Design Quotation Template','Digital Marketing Quotation Template','Video Production Quotation Template'],
    6: ['Website Development Scope of Work Template','Digital Marketing Scope of Work Template','Consultant Scope of Work Template','Interior Design Scope of Work Template'],
    7: ['Design Brief Template','Architecture Design Brief','Fashion Design Brief','Creative Brief Template'],
}

menuLinksArray.forEach(link => {
    link.addEventListener('mouseover', e => {
        const attrValue = e.target.attributes[2].value;

        menuTitle.textContent = e.target.textContent

        menuCards.forEach((card,index) => {
            card.textContent = cardsDescription[attrValue][index]
        })
    })
})


/* dropdown for faq section */

const faqListArray = document.querySelectorAll('.faq-list-item')
const faqDescArray = document.querySelectorAll('.faq-list-desc')



faqListArray.forEach(li => {
    li.addEventListener('click', e => {
        const index = e.target.attributes[1].value

        for(let i = 0; i < faqDescArray.length; i++) {
            if(index === faqDescArray[i].attributes[1].value) {
                faqDescArray[i].classList.toggle('hidden')
                break;
            }            
        }
    })
})

/* ================== */

/* dropdown for footer */

const dropdownLinks = document.querySelectorAll('.dropdown')
const subLists = document.querySelectorAll('.column-sublist')

dropdownLinks.forEach(link => {
    link.addEventListener('click', e => {
        const attrValue = e.target.attributes[1].value
        console.log(attrValue);

        for(let i = 0; i < subLists.length; i++) {
            if(attrValue === subLists[i].attributes[1].value) {
                subLists[i].classList.toggle('hidden')
                break;
            }
        }
    })
})

/* =============== */

const switchDiv = document.querySelector('.switch')
const circle = document.querySelector('.circle')
const monthly = document.querySelector('.monthly')
const yearly = document.querySelector('.yearly')
const price = document.querySelectorAll('.price')
const billed = document.querySelectorAll('.billed')

switchDiv.addEventListener('click', () => {
    circle.classList.toggle('yearly-choice')

    if(circle.classList.contains('yearly-choice')) {
        yearly.style.color = '#000'
        monthly.style.color = '#4c4d5f'

        price[0].textContent = '15'
        price[1].textContent = '24'

        billed.forEach(el => {
            el.classList.remove('hidden')
        })
        
    } else {
        monthly.style.color = '#000'
        yearly.style.color = '#4c4d5f'

        price[0].textContent = '19'
        price[1].textContent = '29'

        billed.forEach(el => {
            el.classList.add('hidden')
        })
    }
})