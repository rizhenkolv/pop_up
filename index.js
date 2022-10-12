'use strict'
const modal = document.querySelector('.modal')
const pageMain = document.querySelector('.page_main')
const pageImage = document.querySelector('.page_image')
const btnConfirm = document.querySelector('.btn.confirm')
const btnCloseModal = document.querySelector('.btn.cancel')
const btnOpenModal = document.querySelector('.btn')

btnOpenModal.addEventListener('click', function () {
  modal.classList.remove('hidden')
})
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden')
})
btnConfirm.addEventListener('click', function () {
  console.log('click')
  pageImage.classList.remove('hidden')
  pageMain.classList.add('hidden')
  modal.classList.add('hidden')
})
