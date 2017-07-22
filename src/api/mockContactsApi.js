import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const Contacts = [{
    "id": "e6f7aae3-2c1f-4e71-bf7a-df4dfdac2858",
    "firstName": "Ardith",
    "lastName": "Seiffert",
    "Email": "aseiffert0@illinois.edu",
    "HomePhonenumber": "86-(829)409-8707",
    "WorkPhoneNumber": "593-(386)492-1283"
  }, {
    "id": "aeeba8ae-c1aa-4438-b6d8-732a94e72d0a",
    "firstName": "Aube",
    "lastName": "Senussi",
    "Email": "asenussi1@google.ca",
    "HomePhonenumber": "86-(882)594-6869",
    "WorkPhoneNumber": null
  }, {
    "id": "93d4ca9a-12c9-4b22-8fa1-ad87ac91467a",
    "firstName": "Weider",
    "lastName": "Housegoe",
    "Email": "whousegoe2@abc.net.au",
    "HomePhonenumber": null,
    "WorkPhoneNumber": null
  }, {
    "id": "9b9853e4-a278-4664-a5f0-32e1849d5d30",
    "firstName": "Lydie",
    "lastName": "Chopping",
    "Email": "lchopping3@arstechnica.com",
    "HomePhonenumber": null,
    "WorkPhoneNumber": "380-(935)562-9292"
  }, {
    "id": "1759c00d-484e-4d93-94cd-98e35416a3e0",
    "firstName": "Nicky",
    "lastName": "Kehri",
    "Email": "nkehri4@nifty.com",
    "HomePhonenumber": "93-(314)705-2520",
    "WorkPhoneNumber": null
  }, {
    "id": "6bb7a44e-14c4-438c-b602-56c3331a1045",
    "firstName": "Norman",
    "lastName": "Mummery",
    "Email": "nmummery5@studiopress.com",
    "HomePhonenumber": "93-(881)359-0147",
    "WorkPhoneNumber": null
  }, {
    "id": "1fc1bb37-ab02-4d9f-9590-9cacafe5a813",
    "firstName": "Bernice",
    "lastName": "Crinkley",
    "Email": "bcrinkley6@techcrunch.com",
    "HomePhonenumber": "86-(485)500-2892",
    "WorkPhoneNumber": null
  }, {
    "id": "366b8e02-4533-406b-b142-ddfad649032d",
    "firstName": "Ginevra",
    "lastName": "Swinden",
    "Email": "gswinden7@acquirethisname.com",
    "HomePhonenumber": "57-(983)755-3643",
    "WorkPhoneNumber": "48-(673)816-9250"
  }, {
    "id": "b77bd2d1-6a7d-44e9-b118-26be5a4cd543",
    "firstName": "Wells",
    "lastName": "Cawse",
    "Email": "wcawse8@ameblo.jp",
    "HomePhonenumber": null,
    "WorkPhoneNumber": "86-(327)917-8961"
  }, {
    "id": "19d9820a-9f43-4a03-9760-ad2bb5fe760d",
    "firstName": "Marice",
    "lastName": "Reavey",
    "Email": "mreavey9@craigslist.org",
    "HomePhonenumber": "63-(586)478-0244",
    "WorkPhoneNumber": null
  }, {
    "id": "0d104475-c4c8-4159-b28a-0d739da8980e",
    "firstName": "Alf",
    "lastName": "Gilley",
    "Email": "agilleya@businesswire.com",
    "HomePhonenumber": "992-(613)638-9707",
    "WorkPhoneNumber": null
  }, {
    "id": "26486aaa-472c-4a8b-a0fe-dc2d1d99b3ff",
    "firstName": "Diane-marie",
    "lastName": "Lathleiff",
    "Email": "dlathleiffb@yale.edu",
    "HomePhonenumber": "46-(970)240-2155",
    "WorkPhoneNumber": "351-(960)312-3996"
  }, {
    "id": "93a1e621-3038-48d2-805e-a224a697a46c",
    "firstName": "Dur",
    "lastName": "Menier",
    "Email": "dmenierc@barnesandnoble.com",
    "HomePhonenumber": "62-(625)917-1627",
    "WorkPhoneNumber": null
  }, {
    "id": "ea5e27ad-4c3f-491f-8c80-0f9887484660",
    "firstName": "Ardelis",
    "lastName": "Sarre",
    "Email": "asarred@bigcartel.com",
    "HomePhonenumber": "55-(387)243-2999",
    "WorkPhoneNumber": null
  }, {
    "id": "ab7d685a-df87-4344-96d8-81a29392322d",
    "firstName": "Ninnetta",
    "lastName": "Vivian",
    "Email": "nviviane@dmoz.org",
    "HomePhonenumber": "62-(576)772-8181",
    "WorkPhoneNumber": "963-(943)182-8481"
  }, {
    "id": "2fb46b0c-532c-40a7-8170-e349d70e7cea",
    "firstName": "Pennie",
    "lastName": "Littlejohn",
    "Email": "plittlejohnf@freewebs.com",
    "HomePhonenumber": null,
    "WorkPhoneNumber": null
  }, {
    "id": "96dc4186-78f4-4aa2-bbb8-991f854a47c0",
    "firstName": "Ronnie",
    "lastName": "Matsell",
    "Email": "rmatsellg@theatlantic.com",
    "HomePhonenumber": "86-(998)626-2801",
    "WorkPhoneNumber": "86-(230)764-4408"
  }, {
    "id": "2430c256-d3f9-4696-8b0d-9b9fd81a8280",
    "firstName": "Loydie",
    "lastName": "Vause",
    "Email": "lvauseh@typepad.com",
    "HomePhonenumber": null,
    "WorkPhoneNumber": null
  }, {
    "id": "2561fadb-82b0-4c8c-ac79-124dc2a5ffcd",
    "firstName": "Rene",
    "lastName": "Crowd",
    "Email": "rcrowdi@google.pl",
    "HomePhonenumber": "351-(698)975-9250",
    "WorkPhoneNumber": "86-(179)878-8196"
  }, {
    "id": "468f5e30-8f0e-4ce0-8b2c-6d5166c05486",
    "firstName": "Harlan",
    "lastName": "Spaducci",
    "Email": "hspaduccij@cam.ac.uk",
    "HomePhonenumber": "229-(241)730-7007",
    "WorkPhoneNumber": "86-(956)204-4131"
  }, {
    "id": "86cac694-75c9-4210-ae15-6b35fc3a55ff",
    "firstName": "Pippa",
    "lastName": "Tacon",
    "Email": "ptaconk@seattletimes.com",
    "HomePhonenumber": "55-(343)276-3121",
    "WorkPhoneNumber": null
  }, {
    "id": "d09b50c1-b30a-4f17-8a10-3a00e17fe659",
    "firstName": "Alisha",
    "lastName": "Boyle",
    "Email": "aboylel@acquirethisname.com",
    "HomePhonenumber": "254-(630)797-5877",
    "WorkPhoneNumber": null
  }, {
    "id": "aa41c5ad-8f27-4146-8c27-191b406177b9",
    "firstName": "Amby",
    "lastName": "Thormann",
    "Email": "athormannm@symantec.com",
    "HomePhonenumber": null,
    "WorkPhoneNumber": "33-(274)763-0974"
  }, {
    "id": "60c9b28f-bde9-4107-9947-db10b7633e25",
    "firstName": "Shaun",
    "lastName": "Birtwisle",
    "Email": "sbirtwislen@multiply.com",
    "HomePhonenumber": "86-(416)238-4047",
    "WorkPhoneNumber": "86-(864)901-5562"
  }, {
    "id": "92945ba8-9bbb-41dc-a41c-d5f24560ad27",
    "firstName": "Emmerich",
    "lastName": "Darbey",
    "Email": "edarbeyo@spotify.com",
    "HomePhonenumber": "20-(232)908-2340",
    "WorkPhoneNumber": "86-(152)492-0402"
  }, {
    "id": "b7abeb19-7ba4-4bba-9aca-7d28bd9cec1c",
    "firstName": "Garnet",
    "lastName": "Aim",
    "Email": "gaimp@cargocollective.com",
    "HomePhonenumber": "53-(122)356-3299",
    "WorkPhoneNumber": "420-(228)153-2331"
  }, {
    "id": "881bfcbe-b1f6-46ff-9ad2-ac6e69fa024b",
    "firstName": "Konstantin",
    "lastName": "Milesop",
    "Email": "kmilesopq@rediff.com",
    "HomePhonenumber": "48-(788)437-4081",
    "WorkPhoneNumber": "386-(162)452-2848"
  }, {
    "id": "c46a8da8-61af-40a5-aa56-be4b10c92080",
    "firstName": "Alma",
    "lastName": "Isham",
    "Email": "aishamr@myspace.com",
    "HomePhonenumber": "62-(250)348-5884",
    "WorkPhoneNumber": "351-(730)601-9064"
  }, {
    "id": "517f2930-ba32-40d5-a480-1f100e6cca4c",
    "firstName": "Amabel",
    "lastName": "Allport",
    "Email": "aallports@google.es",
    "HomePhonenumber": null,
    "WorkPhoneNumber": "964-(881)660-9517"
  }, {
    "id": "aba8d2d9-0bd5-4ee3-aafd-58a7344a8587",
    "firstName": "Shara",
    "lastName": "MacCall",
    "Email": "smaccallt@ycombinator.com",
    "HomePhonenumber": null,
    "WorkPhoneNumber": "62-(674)137-2602"
  }, {
    "id": "071fdcb2-0d36-43d8-aac7-a61fd21ebb7d",
    "firstName": "Elnora",
    "lastName": "Loadwick",
    "Email": "eloadwicku@weather.com",
    "HomePhonenumber": "84-(619)543-3927",
    "WorkPhoneNumber": "7-(735)940-1287"
  }, {
    "id": "8f0a53f9-f0f8-49ca-b56f-e19b0e6f4895",
    "firstName": "Abbie",
    "lastName": "Baumann",
    "Email": null,
    "HomePhonenumber": "86-(231)387-6090",
    "WorkPhoneNumber": "55-(198)186-3031"
  }, {
    "id": "135a40fd-eb20-482c-bdc6-a6377d503517",
    "firstName": "Buiron",
    "lastName": "Bordis",
    "Email": "bbordisw@multiply.com",
    "HomePhonenumber": "62-(244)174-3216",
    "WorkPhoneNumber": null
  }, {
    "id": "bfc78f8a-f498-40a5-b15f-cde4ec3af9b8",
    "firstName": "Lynnette",
    "lastName": "Jancik",
    "Email": "ljancikx@wikispaces.com",
    "HomePhonenumber": null,
    "WorkPhoneNumber": null
  }, {
    "id": "a4728209-afc9-4953-ab1f-eb309ca861c1",
    "firstName": "Pegeen",
    "lastName": "Lockless",
    "Email": "plocklessy@scribd.com",
    "HomePhonenumber": "1-(308)608-5721",
    "WorkPhoneNumber": "63-(387)267-5398"
  }, {
    "id": "7362d75a-dbb7-4beb-9761-847bbc25fb4b",
    "firstName": "Madelin",
    "lastName": "St Quenin",
    "Email": "mstqueninz@google.com.hk",
    "HomePhonenumber": "62-(937)781-6192",
    "WorkPhoneNumber": "7-(828)433-7528"
  }, {
    "id": "90a43fb3-46ec-48f8-8aa2-bb50ec9df273",
    "firstName": "Channa",
    "lastName": "Kempster",
    "Email": "ckempster10@desdev.cn",
    "HomePhonenumber": null,
    "WorkPhoneNumber": "54-(766)664-6800"
  }, {
    "id": "5b222b02-9b88-42ae-830b-57675892fff2",
    "firstName": "Jacqueline",
    "lastName": "Abramowsky",
    "Email": "jabramowsky11@cdbaby.com",
    "HomePhonenumber": null,
    "WorkPhoneNumber": "55-(533)607-1243"
  }, {
    "id": "7b929280-ffc6-4d77-8f8e-733c1682d725",
    "firstName": "Waly",
    "lastName": "Korous",
    "Email": "wkorous12@twitpic.com",
    "HomePhonenumber": null,
    "WorkPhoneNumber": "358-(803)517-1959"
  }, {
    "id": "a8440e79-7657-41be-93d1-c752fc7eb06d",
    "firstName": "Richard",
    "lastName": "Beaglehole",
    "Email": "rbeaglehole13@tripadvisor.com",
    "HomePhonenumber": "505-(963)757-2934",
    "WorkPhoneNumber": null
  }, {
    "id": "fba48592-06a2-4d08-b7fe-2281285ca806",
    "firstName": "Damara",
    "lastName": "Jorn",
    "Email": "djorn14@thetimes.co.uk",
    "HomePhonenumber": "506-(412)179-7695",
    "WorkPhoneNumber": "670-(105)737-4635"
  }, {
    "id": "1d0b88c9-bcaa-421d-9d7a-53503276cfb8",
    "firstName": "Lucho",
    "lastName": "Struys",
    "Email": "lstruys15@mashable.com",
    "HomePhonenumber": "373-(237)909-1174",
    "WorkPhoneNumber": "962-(361)168-4940"
  }, {
    "id": "a2f0ef3a-dece-44ea-acdb-9d43c2c5e640",
    "firstName": "Finley",
    "lastName": "Jannings",
    "Email": "fjannings16@ustream.tv",
    "HomePhonenumber": null,
    "WorkPhoneNumber": "380-(982)669-8981"
  }, {
    "id": "afe7623f-5640-4f04-963f-7478b780b9e9",
    "firstName": "Bowie",
    "lastName": "Stefanovic",
    "Email": "bstefanovic17@engadget.com",
    "HomePhonenumber": "86-(803)111-2187",
    "WorkPhoneNumber": "55-(519)889-4433"
  }, {
    "id": "52b457f8-0f57-42f9-bb55-9cd76a4c4b60",
    "firstName": "Dane",
    "lastName": "Pygott",
    "Email": "dpygott18@ucoz.com",
    "HomePhonenumber": "86-(756)709-1822",
    "WorkPhoneNumber": null
  }, {
    "id": "32981f1a-2587-4005-a32c-8bdd0094456a",
    "firstName": "Phaedra",
    "lastName": "Gatlin",
    "Email": "pgatlin19@wikimedia.org",
    "HomePhonenumber": "92-(774)838-2639",
    "WorkPhoneNumber": "7-(500)631-1576"
  }, {
    "id": "a4965f40-defb-4751-915f-17cba79fe14f",
    "firstName": "Corey",
    "lastName": "Bullman",
    "Email": "cbullman1a@ask.com",
    "HomePhonenumber": "7-(686)191-8501",
    "WorkPhoneNumber": "46-(811)554-7082"
  }, {
    "id": "d5b4cd28-6e30-40ff-8b21-b86f4219382e",
    "firstName": "Bryna",
    "lastName": "Maddigan",
    "Email": "bmaddigan1b@digg.com",
    "HomePhonenumber": "7-(339)803-8013",
    "WorkPhoneNumber": null
  }, {
    "id": "b23081c2-61b6-48e4-ace7-e31f4765c1b8",
    "firstName": "Elsey",
    "lastName": "Thewys",
    "Email": "ethewys1c@businesswire.com",
    "HomePhonenumber": "62-(816)758-8442",
    "WorkPhoneNumber": null
  }, {
    "id": "7698411c-c284-403b-994c-3b0b9d61d5a3",
    "firstName": "Cristen",
    "lastName": "Hynam",
    "Email": null,
    "HomePhonenumber": "63-(859)161-3193",
    "WorkPhoneNumber": null
  }
];
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (contact) => {
  return guid();
};

class ContactsApi {
  static getAllContacts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        function compare(a,b) {
          if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
            return -1;
          else 
            return 1;
          
        }
        resolve(Object.assign([], Contacts.sort(compare)));
      }, delay());
    });
  }

  static saveContact(contact) {
    contact= Object.assign({}, contact); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAuthorNameLength = 1;
        if (contact.firstName.length < minAuthorNameLength) {
          reject(`First Name must be at least ${minAuthorNameLength} characters.`);
        }
        if (contact.lastName.length < minAuthorNameLength) {
          reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
        }
        if(contact.Email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contact.Email)){
          reject('Email Must Be Valid Email');
        }
        if(contact.WorkPhoneNumber && !/^[0-9()-]+$/.test(contact.WorkPhoneNumber)){
          reject('Work Phone must be a valid phone number');
        }
        if(contact.HomePhonenumber && !/^[0-9()-]+$/.test(contact.HomePhonenumber)){
          reject('Home Phone must be a valid phone number');
        }

        if (contact.id) {
          const existingAuthorIndex = Contacts.findIndex(a => a.id == contact.id);
          Contacts.splice(existingAuthorIndex, 1, contact);
        } else {
          //Simulating creation here.
          //Cloning so copy returned is passed by value rather than by reference.
          contact.id = generateId(contact);
          Contacts.push(contact);
        }

        resolve(contact);
      }, delay());
    });
  }

  static deleteAuthor(authorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAuthorToDelete = Contacts.findIndex(contact=> {
          contact.authorId == authorId;
        });
        Contacts.splice(indexOfAuthorToDelete, 1);
        resolve();
      }, delay());
    });
  }
}

export default ContactsApi;