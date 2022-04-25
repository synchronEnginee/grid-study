const modal = $("#js-modal");
const close = $("#js-close");
const open = $("#js-open");

open.on('click', function () {
  modal.addClass("open");
});

close.on('click', function () {
  modal.removeClass("open");
});