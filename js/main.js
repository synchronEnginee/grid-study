const modal = $("#js-modal");
const close = $("#js-close");
const open = $("#js-open");

open.on('click', function () {
  modal.addClass("open");
});

close.on('click', function () {
  modal.removeClass("open");
});

document.getElementById('btn').addEventListener('click', ()=>{
  const age = document.getElementsByName('age');
  let ageLength = age.length
  let checkedAge = '';
  for (let i = 0; i < ageLength; i++) {
    if (age.item(i).checked) {
        checkedAge = age.item(i).value;
    }
  }
  // 冗長なので後で関数切り出す
  const size = document.getElementsByName('size');
  const sizeLength = size.length
  let checkedSize = '';
  for (let i = 0; i < sizeLength; i++) {
    if (age.item(i).checked) {
        checkedSize = size.item(i).value;
    }
  }
  console.log(checkedAge, checkedSize);
})
