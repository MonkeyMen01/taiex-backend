export const formatDate=(dateStr)=>{
    const year = parseInt(dateStr.slice(0,4),10)
    const month = parseInt(dateStr.slice(4,6),10) -1
    const day = parseInt(dateStr.slice(6,8),10);
    const date = new Date(year,month,day)

    return date.toISOString().slice(0,10)
}

export  const cleanDecimal = (value) =>{
    return value.replace(/,/g, '');
}