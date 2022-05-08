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
  console.log(getFormValue('age'));
  console.log(getFormValue('size'));
})


const getFormValue = (elementsName) => {
  // ヌルポ注意
  const elements = document.getElementsByName(elementsName);
  const length = elements.length;
  for (let i = 0; i < length; i++) {
    if (elements.item(i).checked) {
        return elements.item(i).value;
    }
  }
}
