import delay from './delay';

const lang = [
    {
        lang:'en',
        dictonary:{
            strWelcome:'Hello, Dave. You\'re looking well today',
            strContactlist:'Contact List',
            strHomeSubHeader:"All You\'re contact's in one place",
            strContactFullName:'Contact Full Name',
            strHomePhone:'Home Phone',
            strWorkPhone:'Work Phone',
            strEmail:'Email',
            strEdit:'Edit Contact',
            strSubmit:'Submit',
            strFirstName:'First Name',
            strLastName:'Last Name'
        }
    },{
        lang:'he',
        dictonary:{
            strWelcome:'ברוך הבא לרשימת הקשר שלך',
            strContactlist:'רשימת קשר',
            strHomeSubHeader:'כל אנשי הקשר שלך במקום אחד',
            strContactFullName:'שם מלא',
            strHomePhone:'טלפון אישי',
            strWorkPhone:'טלפון עבודה',
            strEmail:'דוא"ל',
            strEdit:'ערוך איש קשר',
            strSubmit:'בצע',
            strFirstName:'שם פרטי',
            strLastName:'שם משפחה'
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