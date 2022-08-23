export function getDate(date) {
  var hour = date.getHours() % 12;
  var mins = date.getMinutes();

  if (!hour) { hour += 12; }

  var strHour = `${hour}`;
  var strMins = `${mins}`;

  return `${strHour.length > 1 ? hour : `0${hour}`} : ${strMins.length > 1 ? mins : `0${mins}`}`;
}

export const cacheImages = async (srcArray) => {
  const promises = await srcArray.map((src) => {
    return new Promise(function (resolve, reject) {
      const img = new Image();

      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  await Promise.all(promises);
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
      0: "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-01.png",
      1: "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-02.png",
      2: "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-03.png",
      3: "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-04.png",
      4: "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-05.png",
    }
  }
]
