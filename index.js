'use strict'
const modal = document.querySelector('.modal')
const image = document.querySelector('.img-confirm')
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
  image.classList.remove('hidden')
})
