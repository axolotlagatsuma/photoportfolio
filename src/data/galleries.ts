// ────────────────────────────────────────────────────────────────────────────
//  Digital & Analog galleries — one optional description per photo.
//
//  Mirrors src/data/calendar.ts. Each entry attaches a caption to a photo in
//  src/assets/digital/ or src/assets/analog/, rendered as "Month Year, Location"
//  — the same format as the Calendar — under the photo and in the lightbox.
//
//  To describe a photo, fill in its year, month (1–12) and location below. A
//  caption stays hidden until you add a location, so a blank entry simply shows
//  the photo on its own.
//
//  These dates also control the gallery order: newest month/year first, and
//  within the same month, locations sort Z→A. Photos without a date yet sink
//  to the bottom — no filename renumbering needed when adding older photos.
//
//  Every photo currently in src/assets/digital/ has an entry below, captioned
//  from its filename. Add a real year/month/location to an entry to turn its
//  caption into "Month Year, Location" and sort it by date; leave them at 0 to
//  keep the filename order.
// ────────────────────────────────────────────────────────────────────────────

export interface GalleryPhoto {
  year: number; // e.g. 2025  (0 = not set yet)
  month: number; // 1–12       (0 = not set yet)
  location: string; // e.g. "Lisbon, Portugal"
  file: string; // filename in src/assets/digital/ or src/assets/analog/
}

export const digital: GalleryPhoto[] = [
  { year: 0, month: 0, location: "Oyun", file: "01-oyun.JPG" },
  { year: 0, month: 0, location: "Balık", file: "02-balik.JPG" },
  { year: 0, month: 0, location: "İlk makro", file: "03-ilk-makro.JPG" },
  { year: 0, month: 0, location: "Cemal Süreya", file: "04-cemalsureya.JPG" },
  { year: 0, month: 0, location: "Artistik", file: "05-artistik.JPG" },
  { year: 0, month: 0, location: "Libya CD", file: "06-libyacd.JPG" },
  { year: 0, month: 0, location: "Ahankara", file: "07-ahankara.jpg" },
  { year: 0, month: 0, location: "Karanfil", file: "08-karanfil.jpg" },
  { year: 0, month: 0, location: "Ve Hezo", file: "09-ve-hezo.jpg" },
  { year: 0, month: 0, location: "Opet", file: "10-opet.jpg" },
  { year: 0, month: 0, location: "Küllükler çok estetik", file: "11-kulluklercokestetik.JPG" },
  { year: 0, month: 0, location: "Kelebek", file: "12-kebelek.JPG" },
  { year: 0, month: 0, location: "Crow", file: "13-crow.jpg" },
  { year: 0, month: 0, location: "Autumn", file: "14-autumn.jpg" },
  { year: 0, month: 0, location: "Red and blue", file: "15-redandblue.jpg" },
  { year: 0, month: 0, location: "Şahin güvesi", file: "16-sahinguvesi.jpg" },
  { year: 0, month: 0, location: "Flowers of my heart", file: "17-flowers-of-my-heart.jpg" },
  { year: 0, month: 0, location: "Hotel Kroos walk", file: "18-hotelkrooswalk.jpg" },
  { year: 0, month: 0, location: "Dehazemaxxin", file: "19-dehazemaxxin.jpg" },
  { year: 0, month: 0, location: "Yürüyorum sensiz", file: "20-yuruyorumsensiz.jpg" },
  { year: 0, month: 0, location: "Shoot", file: "21-shoot.jpg" },
  { year: 0, month: 0, location: "Goal", file: "22-goal.jpg" },
  { year: 0, month: 0, location: "Goal kick", file: "23-goalkick.jpg" },
  { year: 0, month: 0, location: "İzindeyiz", file: "24-izindeyiz.jpg" },
  { year: 0, month: 0, location: "Matem", file: "25-matem.jpg" },
];

export const analog: GalleryPhoto[] = [
  { year: 2024, month: 5, location: "Quiet street", file: "analog-01.jpg" },
  { year: 2024, month: 5, location: "River bend", file: "analog-02.jpg" },
  { year: 0, month: 0, location: "", file: "analog-03.jpg" },
  { year: 0, month: 0, location: "", file: "analog-04.jpg" },
];
