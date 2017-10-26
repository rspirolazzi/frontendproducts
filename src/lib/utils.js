import dateFormat from 'dateformat'
export const formatNumber=(number)=>`$${parseFloat(number).toFixed(2)}`
export const formatDate=(date)=>{
    return dateFormat(date, "dd/mm/yyyy HH:MM");
}
