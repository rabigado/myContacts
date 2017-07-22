let browserStorage = (typeof localStorage === 'undefined') ? null : localStorage;
export default {
  language: null,
  Contacts:{id:Math.random(),loading:false,Contacts:(browserStorage && JSON.parse(browserStorage.getItem('my_contacts')) || [])}
};
