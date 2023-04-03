const load = document.querySelector('#load')

let loadingDate = () => {
    if(document.querySelector('#restDays')){
        document.querySelector('#restDays').remove()
        document.querySelector('#and').remove()
        document.querySelector('#restHours').remove()
    }

    let birthday = dayjs('2000-04-28')
    let today = dayjs()
    let nextMinute = dayjs(`2023-04-${today.$D}`).hour(today.$H).minute(today.$m + 1)
    let nextHour = dayjs(`2023-04-${today.$D}`).hour(`${today.$H + 1}`)
    let tommorow = dayjs(`2023-04-${today.$D + 1}`)
    const ageInYears = today.diff(birthday, 'year')
    let nextBirthday = birthday.add(ageInYears + 1, 'year')
    let restDays = nextBirthday.diff(today, 'day') + 1
    let restHours = `${tommorow.diff(today, 'hour')}:${nextHour.diff(today, 'minute') + 1 >= 10 ? nextHour.diff(today, 'minute') + 1 : `0${nextHour.diff(today, 'minute') + 1}`}:${nextMinute.diff(today, 'second') + 1 >= 10 ? nextMinute.diff(today, 'second') + 1 : `0${nextMinute.diff(today, 'second') + 1}`}`

    
    const div = document.querySelector('#content')
    let days = document.createElement('p')
    let and = document.createElement('p')
    let hours = document.createElement('p')

    days.innerText = `${restDays} Dias`
    days.id = 'restDays'
    and.innerText = 'e'
    and.id = 'and'
    hours.innerText = `${restHours}`
    hours.id = 'restHours'

    div.append(days, and, hours)
    load.innerHTML = 'Recarregar&#x1F353'
}

load.addEventListener('click', loadingDate)