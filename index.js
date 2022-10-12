'use strict'
const modal = document.querySelector('.modal')
const pageMain = document.querySelector('.page_main')
const pageImage = document.querySelector('.page_image')
const btnConfirm = document.querySelector('.btn.confirm')
const btnCloseModal = document.querySelector('.btn.cancel')
const btnOpenModal = document.querySelector('.btn')
const text = document.querySelector('.text')
const user = document.querySelector('.input')
const greeting = document.querySelector('.greeting')

btnOpenModal.addEventListener('click', function () {
  modal.classList.remove('hidden')
  console.log(user.value)
  text.innerHTML = `Please confirm account creation for ${user.value}`
})

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden')
  user.value = ``
})

btnConfirm.addEventListener('click', function () {
  console.log('click')
  pageImage.classList.remove('hidden')
  pageMain.classList.add('hidden')
  modal.classList.add('hidden')
  greeting.append(`Hello ${user.value}!!`)
})
