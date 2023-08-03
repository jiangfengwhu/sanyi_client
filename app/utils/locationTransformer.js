const earthR = 6378137.0;

function outOfChina(lat, lng) {
  if (lng < 72.004 || lng > 137.8347) {
    return true;
  }
  return lat < 0.8293 || lat > 55.8271;
}

function transform(x, y) {
  const xy = x * y;
  const absX = Math.sqrt(Math.abs(x));
  const xPi = x * Math.PI;
  const yPi = y * Math.PI;
  const d = 20.0 * Math.sin(6.0 * xPi) + 20.0 * Math.sin(2.0 * xPi);

  let lat = d;
  let lng = d;

  lat += 20.0 * Math.sin(yPi) + 40.0 * Math.sin(yPi / 3.0);
  lng += 20.0 * Math.sin(xPi) + 40.0 * Math.sin(xPi / 3.0);

  lat += 160.0 * Math.sin(yPi / 12.0) + 320 * Math.sin(yPi / 30.0);
  lng += 150.0 * Math.sin(xPi / 12.0) + 300.0 * Math.sin(xPi / 30.0);

  lat *= 2.0 / 3.0;
  lng *= 2.0 / 3.0;

  lat += -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * xy + 0.2 * absX;
  lng += 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * xy + 0.1 * absX;

  return {lat: lat, lng: lng};
}

function delta(lat, lng) {
  const ee = 0.00669342162296594323;
  const d = transform(lng - 105.0, lat - 35.0);
  const radLat = (lat / 180.0) * Math.PI;
  let magic = Math.sin(radLat);
  magic = 1 - ee * magic * magic;
  const sqrtMagic = Math.sqrt(magic);
  d.lat =
    (d.lat * 180.0) / (((earthR * (1 - ee)) / (magic * sqrtMagic)) * Math.PI);
  d.lng = (d.lng * 180.0) / ((earthR / sqrtMagic) * Math.cos(radLat) * Math.PI);
  return d;
}

function wgs2gcj(wgsLat, wgsLng) {
  if (outOfChina(wgsLat, wgsLng)) {
    return {lat: wgsLat, lng: wgsLng};
  }
  const d = delta(wgsLat, wgsLng);
  return {lat: wgsLat + d.lat, lng: wgsLng + d.lng};
}

function gcj2wgs(gcjLat, gcjLng) {
  if (outOfChina(gcjLat, gcjLng)) {
    return {lat: gcjLat, lng: gcjLng};
  }
  const d = delta(gcjLat, gcjLng);
  return {lat: gcjLat - d.lat, lng: gcjLng - d.lng};
}

function gcj2wgs_exact(gcjLat, gcjLng) {
  // newCoord = oldCoord = gcjCoord
  let newLat = gcjLat,
    newLng = gcjLng;
  let oldLat = newLat,
    oldLng = newLng;
  const threshold = 1e-6; // ~0.55 m equator & latitude

  for (let i = 0; i < 30; i++) {
    // oldCoord = newCoord
    oldLat = newLat;
    oldLng = newLng;
    // newCoord = gcjCoord - wgs_to_gcj_delta(newCoord)
    const tmp = wgs2gcj(newLat, newLng);
    // approx difference using gcj-space difference
    newLat -= gcjLat - tmp.lat;
    newLng -= gcjLng - tmp.lng;
    // diffchk
    if (
      Math.max(Math.abs(oldLat - newLat), Math.abs(oldLng - newLng)) < threshold
    ) {
      break;
    }
  }
  return {lat: newLat, lng: newLng};
}

function distance(latA, lngA, latB, lngB) {
  const pi180 = Math.PI / 180;
  const arcLatA = latA * pi180;
  const arcLatB = latB * pi180;
  const x =
    Math.cos(arcLatA) * Math.cos(arcLatB) * Math.cos((lngA - lngB) * pi180);
  const y = Math.sin(arcLatA) * Math.sin(arcLatB);
  let s = x + y;
  if (s > 1) {
    s = 1;
  }
  if (s < -1) {
    s = -1;
  }
  const alpha = Math.acos(s);
  return alpha * earthR;
}

function gcj2bd(gcjLat, gcjLng) {
  if (outOfChina(gcjLat, gcjLng)) {
    return {lat: gcjLat, lng: gcjLng};
  }

  const x = gcjLng,
    y = gcjLat;
  const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * Math.PI);
  const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * Math.PI);
  const bdLng = z * Math.cos(theta) + 0.0065;
  const bdLat = z * Math.sin(theta) + 0.006;
  return {lat: bdLat, lng: bdLng};
}

function bd2gcj(bdLat, bdLng) {
  if (outOfChina(bdLat, bdLng)) {
    return {lat: bdLat, lng: bdLng};
  }

  const x = bdLng - 0.0065,
    y = bdLat - 0.006;
  const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * Math.PI);
  const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * Math.PI);
  const gcjLng = z * Math.cos(theta);
  const gcjLat = z * Math.sin(theta);
  return {lat: gcjLat, lng: gcjLng};
}

function wgs2bd(wgsLat, wgsLng) {
  const gcj = wgs2gcj(wgsLat, wgsLng);
  return gcj2bd(gcj.lat, gcj.lng);
}

function bd2wgs(bdLat, bdLng) {
  const gcj = bd2gcj(bdLat, bdLng);
  return gcj2wgs(gcj.lat, gcj.lng);
}
export {wgs2bd, wgs2gcj, gcj2wgs_exact, bd2gcj, bd2wgs, gcj2bd, distance};
