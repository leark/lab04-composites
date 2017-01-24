var DomElement = (function () {
    function DomElement(htmlType) {
        this.htmlType = htmlType;
        this.children = new Array();
    }
    DomElement.prototype.add = function (element) {
        this.children.push(element);
    };
    DomElement.prototype.print = function (space) {
        console.log(space + "<" + this.htmlType + ">");
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].print("  " + space);
        }
        console.log(space + "</" + this.htmlType + ">");
    };
    return DomElement;
}());
var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.print = function (space) {
        console.log(space + this.text);
    };
    return TextNode;
}());
var html = new DomElement("html");
var div = new DomElement("div");
var p1 = new DomElement("p");
var p2 = new DomElement("p");
var txtnode = new TextNode("Hi, I am a TextNode being printed!");
var txtnode2 = new TextNode("TextNode == leaf");
html.add(div);
div.add(p1);
div.add(p2);
p1.add(txtnode);
p2.add(txtnode2);
html.print("");
