const modals  = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector){
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item =>{
            item.addEventListener('click', (e)=>{
                if(e.target){
                    e.preventDefault();
                }

                modal.style.display = 'block';
               document.body.style.overflow = 'hidden';
            });
        })

        close.addEventListener('click', ()=>{
            modal.style.display = 'none';
           document.body.style.overflow = "";
        });

        modal.addEventListener('click', (e)=>{
            if(e.target === modal){
                modal.style.display = 'none';
                document.body.style.overflow = "";
            }
        })
    };

    function showModalBytime(selector, time){
        setTimeout(()=>{
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_hose_btn', '.popup_calc_hoses', '.popup_calc_hose_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    // showModalBytime('.popup', 60000);
};

export default modals;