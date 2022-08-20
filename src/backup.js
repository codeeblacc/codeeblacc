export function getDate(date) {
  var hour = date.getHours() % 12;
  var mins = date.getMinutes();

  if (!hour) { hour += 12; }

  var strHour = `${hour}`;
  var strMins = `${mins}`;

  return `${strHour.length > 1 ? hour : `0${hour}`} : ${strMins.length > 1 ? mins : `0${mins}`}`;
}

export const studies = [
  {
    "id": "1",
    "slug": "noir-app",
    "name": "Noir App",
    "description": "A crypto wallet & gateway to blockchain apps. Noir is a communicative tool for Web 3 applications by enabling wallets and apps to connect and interact securely.",
    "category": "UI Design",
    "year": "2021",
    "content": {
      0: {
        "title": "Buy, Store, Send and Swap Tokens",
        "description": "Noir equips you with a key vault, secure login, token wallet, and token exchange — everything you need to manage your digital assets. Noir provides the simplest yet most secure way to connect to blockchain-based applications. You are always in control when interacting on the new decentralized web. Noir generates password and keys on your device, so only you have access to your accounts and data. You always choose what to share and what to keep private.",
      },
      1: {
        "title": "Production technology in detail",
        "description": "Thanks to 3D and customer's schemes, we were able to reproduce the production technology of these frames. It is based on a folded seam and this technology does not require welding, which distinguishes Ferrumpipe from other manufacturers.",
      },
    },
    "assets" : {
      0: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/af7f37149352325.62f5f1f87cdbd.png",
      1: "",
      2: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7e325e131043209.618ce9e2e3df2.png",
      3: "cstud-01-04.jpg",
      4: "cstud-01-05.jpg",
      5: "cstud-01-06.jpg",
      6: "cstud-01-07.jpg",
      7: "cstud-01-08.jpg",
    }
  },
  {
    "id": "2",
    "slug": "coffee-co",
    "name": "Coffee Co.",
    "description": "A leading player in the sleep tech space, Snooze is reimagining the importance of sleep in the 21st century.",
    "category": "Brand Design",
    "year": "2021",
    "content": {
      0: {
        "title": "Create Something out of Nothing",
        "description": "Ferrumpipe is a partner of the largest metallurgical plant “Severstal”, that supplies galvanized metal for its needs. The production occupies 5000 square meters and owns the most modern equipment for the manufacture of all types of fences. Their old website has not been updated since 2014 and our task was to make a good-looking website with a demonstration of the entire production line. Also, at that time the company was launched on the foreign market and the site had to   correspond to the international level in terms of the visual concept.",
      },
      1: {
        "title": "Production technology in detail",
        "description": "Thanks to 3D and customer's schemes, we were able to reproduce the production technology of these frames. It is based on a folded seam and this technology does not require welding, which distinguishes Ferrumpipe from other manufacturers.",
      },
    },
    "assets" : {
      0: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/1526fb148129547.62ea4b7146605.jpg",
      1: "cstud-01-02.jpg",
      2: "cstud-01-03.jpg",
      3: "cstud-01-04.jpg",
      4: "cstud-01-05.jpg",
      5: "cstud-01-06.jpg",
      6: "cstud-01-07.jpg",
      7: "cstud-01-08.jpg",
    }
  },
  {
    "id": "3",
    "slug": "bike-app",
    "name": "Bike App.",
    "description": "A leading player in the sleep tech space, Snooze is reimagining the importance of sleep in the 21st century.",
    "category": "Brand Design",
    "year": "2021",
    "content": {
      0: {
        "title": "Create Something out of Nothing",
        "description": "Ferrumpipe is a partner of the largest metallurgical plant “Severstal”, that supplies galvanized metal for its needs. The production occupies 5000 square meters and owns the most modern equipment for the manufacture of all types of fences. Their old website has not been updated since 2014 and our task was to make a good-looking website with a demonstration of the entire production line. Also, at that time the company was launched on the foreign market and the site had to   correspond to the international level in terms of the visual concept.",
      },
      1: {
        "title": "Production technology in detail",
        "description": "Thanks to 3D and customer's schemes, we were able to reproduce the production technology of these frames. It is based on a folded seam and this technology does not require welding, which distinguishes Ferrumpipe from other manufacturers.",
      },
    },
    "assets" : {
      0: "cstud-01-01.jpg",
      1: "cstud-01-02.jpg",
      2: "cstud-01-03.jpg",
      3: "cstud-01-04.jpg",
      4: "cstud-01-05.jpg",
      5: "cstud-01-06.jpg",
      6: "cstud-01-07.jpg",
    }
  },
]
