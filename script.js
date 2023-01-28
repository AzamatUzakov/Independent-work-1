let welkome = alert("Добро пожаловать в GM Motors")
let money = 27000
let name = prompt(" Как вас зовут").trim().toLowerCase();
if (name === 'alex') {
    alert('Добро пожаловать')
    let сhoice1 = confirm("У нас есть авто Gentra Tracker Onix и Cobalt ")
    let choice2 = 'Gentra Tracker Onix и Cobalt '.trim().toLowerCase();
    let choice3 = prompt('').trim().toLowerCase();
    if (choice2.includes(choice3)) {
        alert('Хороший выбор')
        let cash1 = confirm("С вас 15 000")
        let cash2 = +prompt('Номер карты').trim().toLowerCase();
        if (cash2 === 7777) {
            alert("Всё отлично")
            let cash3 = +prompt("Ведите сумму").trim();
            if (cash3 === 15000) {
                alert("Перевод выполнен") 


                let check = confirm("Посмотреть ваш баланс на карте?")
                let check1 = money - cash3
                 
                if (cash3) {
                    alert('Мы сняли сочёта' + cash3)
                }
                if(check1){
                    alert("Ваш баланс" + check1)
                }
            } else if (cash3 >= 0 && cash3 < 15000) {
                alert('Не достаточно средств')
            } else if (cash3 >= 15000) {
                alert('Введено больше чем стоимость авто')     
            } else { alert('Ошибка') }
        } else {
            alert("Не правельный пороль")
        }
    } else {
        alert('У нас нет такой авто')
    }
} else {
    alert('Извените вам нельзя')
}    
let Motors= alert('Не ждите хороших новостей, потомучто ценны на машины сново поднимутся, всего хорошего GM Motors ')