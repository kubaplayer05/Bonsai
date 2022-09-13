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