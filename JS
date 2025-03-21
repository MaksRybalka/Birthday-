function openEnvelope(index) {
    let envelope = document.querySelectorAll('.envelope')[index - 1];
    envelope.classList.toggle('open');
}
