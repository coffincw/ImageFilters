let bioshock = lib220.loadImageFromURL('https://amp.businessinsider.com/images/57754b6fdd0895ce458b4c8f-750-563.png');
let bioshock2 = lib220.loadImageFromURL('https://www.geforce.com/sites/default/files-world/screenshots/bioshock/screenshot1.jpg');
let city = lib220.loadImageFromURL('https://www.worldatlas.com/r/w728-h425-c728x425/upload/4c/2f/e5/shutterstock-417457723.jpg');


city.show();

function darken(img) {
  let imgCopy = img.copy();
  for (let i = 0; i < imgCopy.width; ++i) {
    for (let j = 0; j < imgCopy.height; ++j) {
      const a = imgCopy.getPixel(i, j);
      let r = a[0];
      let g = a[1];
      let b = a[2];
      imgCopy.setPixel(i, j,[r /5, g /5, b/5]);
    }
  }
  return imgCopy;
}

//darken(bioshock).show();

function increaseExposure(img) {
  let imgCopy = img.copy();
  for (let i = 0; i < imgCopy.width; ++i) {
    for (let j = 0; j < imgCopy.height; ++j) {
      const a = imgCopy.getPixel(i, j);
      let r = a[0];
      let g = a[1];
      let b = a[2];
      imgCopy.setPixel(i, j,[Math.min(1, r *2), Math.min(1, g *2), Math.min(1, b*2)]);
    }
  }
  return imgCopy;
}

//increaseExposure(bioshock).show();

function greenFilter(img) {
  let imgCopy = img.copy();
  for (let i = 0; i < imgCopy.width; ++i) {
    for (let j = 0; j < imgCopy.height; ++j) {
      const a = imgCopy.getPixel(i, j);
      let r = a[0];
      let g = a[1];
      let b = a[2];
      imgCopy.setPixel(i, j,[0.0, g, 0.0]);
    }
  }
  return imgCopy;
}

//greenFilter(bioshock).show();

function removeRed(img) {
  let imgCopy = img.copy();
  for (let i = 0; i < imgCopy.width; ++i) {
    for (let j = 0; j < imgCopy.height; ++j) {
      const a = imgCopy.getPixel(i, j);
      let r = a[0];
      let g = a[1];
      let b = a[2];
      imgCopy.setPixel(i, j,[0.0, g, b]);
    }
  }
  return imgCopy;
}

//removeRed(bioshock).show();

function makeDusk(img) {
  let imgCopy = img.copy();
  for (let i = 0; i < imgCopy.width; ++i) {
    for (let j = 0; j < imgCopy.height; ++j) {
      const a = imgCopy.getPixel(i, j);
      let r = a[0];
      let g = a[1];
      let b = a[2];
      imgCopy.setPixel(i, j,[r /3, 0.0, (b * (7/8))/2]);
    }
  }
  return imgCopy;
}

makeDusk(bioshock).show();



function veryBlur (img) {
  let imgCopy = img.copy();
  for (let i = 0; i < imgCopy.width; ++i) {
   for (let j = 0; j < imgCopy.height; ++j) {
     if( i >9 && i < imgCopy.width - 10) {
      let totalr = 0
      let totalg = 0;
      let totalb = 0;
      for (let k = i-10; k <=i+10; ++k) {
       let a = imgCopy.getPixel(k,j);
       totalr += a[0];
       totalg += a[1];
       totalb += a[2];
      }
      const r = totalr /21;
      const g = totalg /21;
      const b = totalb /21;
      imgCopy.setPixel(i, j, [r, g, b]);
     } else if (i <=9) {
       let totalr = 0;
       let totalg = 0;
       let totalb =0;
       let count =0;
       for (let k = 0; k <=i+10; ++k) {
        let a = imgCopy.getPixel(k, j);
        totalr += a[0];
        totalg += a[1];
        totalb += a[2];
        count +=1;
       }
       const r = totalr /count;
       const g = totalg /count;
       const b = totalb /count;
       imgCopy.setPixel(i, j, [r, g, b]);
      } else if (i >= imgCopy.width - 10) {
        let totalr = 0;
        let totalg = 0;
        let totalb = 0;
        let count = 0;
        for (let k = i-10; k <imgCopy.width; ++k) {
          let a = imgCopy.getPixel(k, j);
          totalr += a[0];
          totalg += a[1];
          totalb += a[2];
          count += 1;
        }
        const r = totalr /count;
        const g = totalg /count;
        const b = totalb /count;
        imgCopy.setPixel(i, j, [r, g, b]);
      }
     }
  }
  return imgCopy;
}

//veryBlur(bioshock).show();