export const convertDate = (date) =>
    date.split('T')[0].split('-').reverse().join('-');
