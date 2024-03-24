const yesNoRadios = document.querySelectorAll('input[type="radio"]');
const yesInputs = document.querySelectorAll('input[required]');

yesNoRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    const nextInput = radio.nextElementSibling.nextElementSibling; // Get the next input after the label
    if (radio.checked && radio.value === 'YES') {
      nextInput.value('required');
    }
  });
});
