import checkNumImputs from './checkNumInputs';

const forms = (state) =>{
    const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');

    checkNumImputs('input[name="user_phone"]');

    const message ={
        success: 'Скоро мы свяжемся с вами',
        loading: 'Идёт загрузка',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) =>{
        document.querySelector('.status').textContent = message.loading;

        const res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const cleaarInputs = () =>{
        input.forEach(item=>{
            item.value = '';
        })
    }

    form.forEach(item=>{
        item.addEventListener('submit', (e)=>{
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            
            const formData = new FormData(item)

            if(item.getAttribute('data-calc') === "end"){
                for(let key in state){
                    formData.append(key, state[key]);
                }
            }
            postData('assets/server.php', formData)
                .then(res=>{
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(()=>{
                    statusMessage.textContent = message.failure;
                })
                .finally(()=>{
                    cleaarInputs();
                    setTimeout(()=>{
                        statusMessage.remove()
                    }, 50000)
                })
        })
    });
};
export default forms;