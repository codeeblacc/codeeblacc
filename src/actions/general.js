export const showMessage = async (message, type) => {
    const _message = document.querySelector('.message');
    _message.style.display = "inline-flex";
    _message.innerHTML = message;
    _message.classList.add(type);

    setTimeout(() => {
        _message.classList.remove("animate__zoomIn");
        _message.classList.add("animate__zoomOut");
    }, 3600);
    setTimeout(() => {
        _message.removeAttribute('style');
        _message.classList.remove(type);
        _message.classList.add("animate__zoomIn");
        _message.classList.remove("animate__zoomOut");
    }, 4000);
}

export const closeLoader = () => {
  const loader = document.querySelector('.load');
  const form = document.querySelector('form');

  loader.classList.remove('animate__fadeIn');
  loader.classList.add('animate__fadeOut');

  form.reset();

  setTimeout(() => {
    loader.removeAttribute('style');
    loader.classList.add('animate__fadeIn');
    loader.classList.remove('animate__fadeOut');
  }, 400);
}
