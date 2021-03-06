https://www.npmjs.com/package/xpath

## xpath
DOM 3 Xpath implemention and helper for node.js.

Originally written by Cameron McCormack ([blog](http://mcc.id.au/xpathjs)).

Thanks to Yaron Naveh ([blog](http://webservices20.blogspot.com/)).



## Your first xpath:
`````javascript
    var xml = "<book><title>Harry Potter</title></book>"
    var doc = new dom().parseFromString(xml)
    var nodes = xpath.select("//title", doc)
    console.log(nodes[0].localName + ": " + nodes[0].firstChild.data)
    console.log("node: " + nodes[0].toString())
`````
-->

    title: Harry Potter
    Node: <title>Harry Potter</title>

## Get text values directly
`````javascript
    var xml = "<book><title>Harry Potter</title></book>"
    var doc = new dom().parseFromString(xml)
    var title = xpath.select("//title/text()", doc).toString()
    console.log(title)
`````
-->

    Harry Potter

## Namespaces
`````javascript
    var xml = "<book><title xmlns='myns'>Harry Potter</title></book>"
    var doc = new dom().parseFromString(xml)
    var node = xpath.select("//*[local-name(.)='title' and namespace-uri(.)='myns']", doc)[0]
    console.log(node.namespaceURI)
`````
-->

    myns

## Namespaces with easy mappings
`````javascript
    var xml = "<book xmlns:bookml='http://example.com/book'><bookml:title>Harry Potter</bookml:title></book>"
    var select = xpath.useNamespaces({"bookml": "http://example.com/book"});
    console.log(select('//bookml:title/text()', doc)[0].nodeValue);
`````
-->

    Harry Potter

## Default namespace with mapping
`````javascript
    var xml = "<book xmlns='http://example.com/book'><title>Harry Potter</title></book>"
    var select = xpath.useNamespaces({"bookml": "http://example.com/book"});
    console.log(select('//bookml:title/text()', doc)[0].nodeValue);
`````
-->

    Harry Potter

## Attributes
`````javascript
    var xml = "<book author='J. K. Rowling'><title>Harry Potter</title></book>"
    var doc = new dom().parseFromString(xml)
    var author = xpath.select1("/book/@author", doc).value
    console.log(author)
`````
-->

    J. K. Rowling
