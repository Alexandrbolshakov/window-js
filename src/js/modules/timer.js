const timer = () =>{
    const getTimeRemaining = (id, deadTime) =>{
        const t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/(1000 *60)%60)),
            hours = Math.floor((t/(1000 * 60 * 60)%24),
            days = Math.floor(t/(1000*60*60*24)));
        return{
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    };

    const setClock = (selector, endtime) =>{
        const timer = document.querySelector(selector);
        
    }
};
export default timer;