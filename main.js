const ingot = document.getElementById('ingot')
const ticket = document.querySelector("#ticket")
const submit = document.querySelector("#submit")

let show = []  

submit.addEventListener('click', () => {

show = []  

// 計算要課多少元寶才能補足500抽

if (!ingot.value) {
  show.push('請輸入元寶數量') 
}
if (!ticket.value) {
  show.push('請輸入千機卷數量') 
}
if (ticket.value !== '' && ingot.value !=='') {
  let y = (500- Number(ticket.value)) //先用完千機卷後需要幾抽

let tenRaffle = Math.floor(y/10) //用完卷後要幾個十連抽
let tenRaffleI = tenRaffle* 2590 //十連抽的部分需要多少元寶

let monoRaffle = (y %= 10) //單抽要補幾次
let monoRaffleI = monoRaffle * 288 //單抽的部分需要多少元寶

let total = tenRaffleI + monoRaffleI //用完卷後總共需要的元寶數

//不補的話手上的元寶能幾抽
let leftIngotTen = Math.floor(Number(ingot.value) / 2590)//元寶可十抽次數
let leftIngotmono = Number(ingot.value) - (leftIngotTen * 2590)//抽完十抽剩的元寶
leftIngotmonoR = Math.floor(leftIngotmono / 288) //單抽可以抽幾次
let left = leftIngotmono % 288//單抽完會剩幾顆
let donee = total - Number(ingot.value)
let final = (leftIngotTen * 10 ) + leftIngotmonoR + Number(ticket.value)
console.log(final)

//計算回報
if (Number(ingot.value) >= 129500 || Number(ticket.value) >= 500) {
  show.push ('恭喜你500抽大獎直接可以入手啦!!!')
} else if (Number(ingot.value) >= total) {
  show.push ('恭喜你!用完千機卷後剩的元寶足夠抽滿500抽啦')
} else {
  show.push (`嘿! 看來目前還不夠500抽喔!`)
  show.push (`要抽的話, 用完千機卷後, 進行 ${leftIngotTen} 次10連抽, 再 ${leftIngotmonoR} 次單抽, 之後你會剩下 ${left}顆元寶, 這樣一共會是 ${final} 抽喔!!`)
  show.push (`.........或著你要不要考慮再課 ${donee} 顆元寶一口氣500抽阿XDDD `)
}}


console.log(show)

 
})

  


 


