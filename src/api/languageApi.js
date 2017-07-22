import delay from './delay';

const lang = [
    {
        lang:'en',
        dictonary:{
            strWelcome:'strWelcome',
            strContactlist:'strContactlist',
            strHomeSubHeader:'strHomeSubHeader',
            strContactFullName:'strContactFullName',
            strHomePhone:'strHomePhone',
            strWorkPhone:'strWorkPhone',
            strEmail:'strEmail',
            strEdit:'strEdit',
            strSubmit:'strSubmit',
            strFirstName:'strFirstName',
            strLastName:'strLastName'
        }
    },{
        lang:'he',
        dictonary:{
            strWelcome:'strWelcome1',
            strContactlist:'strContactlist',
            strHomeSubHeader:'strHomeSubHeader',
            strContactFullName:'strContactFullName',
            strHomePhone:'strHomePhone',
            strWorkPhone:'strWorkPhone',
            strEmail:'strEmail',
            strEdit:'strEdit',
            strSubmit:'strSubmit',
            strFirstName:'strFirstName',
            strLastName:'strLastName'
        }
    }
];

class LanguageApi{
        static getLanguage(language){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let l = lang.filter(obj => obj.lang === language)[0];
                    if(!l){
                        l =lang.filter(obj => obj.lang === 'en')[0];
                    }
                    resolve(Object.assign({},l));
                }, delay);
        });
    }
}

export default LanguageApi;