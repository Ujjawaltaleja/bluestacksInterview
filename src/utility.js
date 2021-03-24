export const getDiffDates=(date)=>{
    let today = new Date();
    today=new Date(today.getFullYear(),today.getMonth(),today.getDate());
    let tom = new Date(date);
    tom=new Date(tom.getFullYear(),tom.getMonth(),tom.getDate());
    let diff=Math.abs(today-tom)/(24*3600*1000);
    return diff;
}

export const formatDate=(date)=>{
    date=new Date(date);
    let shortMonth = date.toLocaleString('en-us', { month: 'short' });
    let formattedDate=shortMonth+' '+date.getFullYear()+','+date.getDay();
    return  formattedDate;
}

export const serviceParser=(data)=>{
   
    data=data.json();
    debugger;
}


