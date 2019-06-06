 // Changes XML to JSON
 export function xmlToJson(xml) {
  // Create the return object
  let obj: any = {};

  if (xml.nodeType === 1) { // element
    // do attributes
    const attrLength = xml.attributes.length;
    if (attrLength > 0) {
      for (let j = 0; j < attrLength; j++) {
        const attribute = xml.attributes.item(j);
        obj[attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3) { // text
    obj = xml.nodeValue;
  }

  // do children
  if (xml.hasChildNodes()) {
    const childLength = xml.childNodes.length;
    for (let i = 0; i < childLength; i++) {
      const item = xml.childNodes.item(i);
      const nodeName = item.nodeName;
      if (typeof(obj[nodeName]) === 'undefined') {
        obj[nodeName] = xmlToJson(item);
        if (nodeName !== 'Parameter' && nodeName !== 'Style' && nodeName !== '#text') {
          obj[nodeName]['index'] = i;
        }

        if (nodeName === 'USER_DEFINED_FUNCTION') {
          obj[nodeName]['Parameter'] = { scriptContent: item.childNodes[0].data };
        }
      } else if (nodeName !== '#text') {
        if (typeof(obj[nodeName].push) === 'undefined') {
          const old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        const itemToPush = xmlToJson(item);
        itemToPush['index'] = i;
        obj[nodeName].push(itemToPush);
      }
    }
  }
  return obj;
}
