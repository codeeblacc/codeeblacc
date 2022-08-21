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
    "slug": "guitar-tuner-plus",
    "name": "Guitar tuner+",
    "description": "A leading app in guitar tuning technology. Guitar tuner+ is an app that gives you fast sonic responses, clear and visible tuning instruction for your guitar.",
    "category": "Brand Design",
    "year": "2021",
    "content": {
      0: {
        "title": "Create Something out of Nothing",
        "description": "In the beginning, it was crucial for us to understand what musicians expect from a tuner app. For an outsider, it might seem like a somewhat serious guitarist would not use a conventional app but a hardware tuner of some sort. In reality, professionals use apps they can find on the App Store(and you'd be suprised by some of their choices, Honeyhoney on JRE), or tune by ear from the notes they can get from GarangeBand(whadup, Ola Engulnd).",
      },
      1: {
        "title": "Production technology in detail",
        "description": "We proceeded with the app design used brands colors, making it utilitarian, sleek, and elegant. In terms of development, we built the app using Swift Programming language which is the primary language for iOS app development today.",
      },
    },
    "assets" : {
      0: "/images/cstud-01-01.jpg",
      1: "/images/cstud-01-02.jpg",
      2: "/images/cstud-01-03.jpg",
      3: "/images/cstud-01-04.jpg",
      4: "/images/cstud-01-05.jpg",
      5: "/images/cstud-01-06.jpg",
      6: "/images/cstud-01-07.jpg",
      7: "/images/cstud-01-08.jpg",
    }
  }
]
