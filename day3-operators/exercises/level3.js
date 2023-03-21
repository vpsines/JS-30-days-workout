//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let date = new Date()
let year1 = date.getFullYear()
let month = date.getMonth() > 9 ?`${date.getMonth()+1}`:`0${date.getMonth()+1}`
let day = date.getDate() > 9 ?`${date.getDate()}`:`0${date.getDate()}`
let hour = date.getHours() > 9 ?`${date.getHours()}`:`0${date.getHours()}`
let min = date.getMinutes() > 9 ?`${date.getMinutes()}`:`0${date.getMinutes()}`

console.log(`${year1}-${month}-${day} ${hour}:${min}`)
