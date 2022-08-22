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
    "slug": "oshify",
    "name": "OshiFy",
    "description": "This is a visual identity to act as a foundation for future asset development and give Oshify the solid, hazard inspired aesthetic needed.",
    "category": "Brand Visual Identity",
    "year": "2021",
    "content": {
      0: {
        "title": "Challenge and Role",
        "description": "Oshify is a SAAS Tech company developing simple safety software for high-hazard industries. My role in this project was to create different variations of the base design. I took this as a challange to explore 3D computer software and thier capacity to create realistic materials."
      },
      1: {
        "title": "Production technology in detail",
        "description": "We proceeded with the app design used brands colors, making it utilitarian, sleek, and elegant. In terms of development, we made the design using Adobe Illustrator and After Effects which is the primary software for 3D design today.",
      },
    },
    "assets" : {
      0: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/beff18144613521.628f5bdea0de1.png",
      1: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/d6b1c2144613521.62920fff73310.png",
      2: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/95ce5c144613521.6291309ab451b.png",
      3: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/74fd43144613521.628f5797dcd98.png",
      4: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/105087144613521.62921700231c2.png",
    }
  }
]
