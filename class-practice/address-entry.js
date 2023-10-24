const addressEntry = document.querySelector('#address-entry');

function initializeAddressEntry() {
  addressEntry.addEventListener('change', () => {
    console.log(addressEntry.value);
  });
}

export {
  initializeAddressEntry,
};
