const sharp = require("sharp");

exports.certificateGenerate = () => {
  const fullname = "Nazar Jumayew Wepayewic";
  const width = 2200;
  const height = 500;

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  const currentDate = `${day}-${month}-${year}`;

  const svgText = `
        <svg width="${width}" height="${height}">
          <style>
            .title { fill: #003399; font-size: 105px; font-family: Helvetica, sans-serif; font-weight: 700}
          </style>
          <text x="45%" y="40%" text-anchor="middle" class="title">${fullname}</text>
        </svg>`;

  const dateText = `<svg width="${width}" height="${height}">
        <style>
          .title { fill: #000000; font-size: 40px; font-family: Helvetica, sans-serif; font-weight: 400; font-style: italic}
        </style>
        <text x="45%" y="40%" text-anchor="middle" class="title">${currentDate}</text>
      </svg>`;

  const svgBuffer = Buffer.from(svgText);
  const dateBuffer = Buffer.from(dateText);

  const date = new Date().getTime();
  sharp("./images/certificate.png")
    .composite([
      { input: svgBuffer, left: 130, top: 695 },
      { input: dateBuffer, left: 120, top: 1085 },
    ])
    // .composite([{ input: dateBuffer, left: 20, top: 450 }])
    .toFile(__dirname + `/processed_images/${date}.png`);
};
