Tinytest.add('isDefined', function (test) {
    var isDefined = false;
    try {
        xpath;
        isDefined = true;
    }
    catch (e) {
    }
    test.isTrue(isDefined, "xpath  is not defined");
});

Tinytest.add('xmlDomParserisDefined', function (test) {
    var isDefined = false;
    try {
        dom;
        isDefined = true;
    }
    catch (e) {
    }
    test.isTrue(isDefined, "xml dom  is not defined");
});

Tinytest.add('canParseXmlDom', function (test) {
    var DOMParser = dom;
    var doc = new DOMParser().parseFromString(
                                              '<xml xmlns="a" xmlns:c="./lite">\n'+
                                              '\t<child>test</child>\n'+
                                              '\t<child></child>\n'+
                                              '\t<child/>\n'+
                                              '</xml>'
                                              ,'text/xml');
    test.isTrue(doc, "xml doc  is not defined");
});

Tinytest.add('canParseXpath', function (test) {
  var xml = "<book><title>Harry Potter</title></book>"
  var doc = new dom().parseFromString(xml)
  var nodes = xpath.select("//title", doc)
  // console.log(nodes[0].localName + ": " + nodes[0].firstChild.data)
  // console.log("node: " + nodes[0].toString())
  test.isTrue(nodes[0].firstChild.data==="Harry Potter", "xml doc  is not defined");
});
