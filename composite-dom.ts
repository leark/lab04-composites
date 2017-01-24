interface IDomElement {
  print(space:string);
}

class DomElement implements IDomElement {
  
  private children : IDomElement[];
  private htmlType : string;

  constructor(htmlType:string) {
    this.htmlType = htmlType;
    this.children = new Array<IDomElement>();
  }

  add(element:IDomElement) : void {
    this.children.push(element);
  }
  
  print(space:string) : void {
    console.log(space + "<" + this.htmlType + ">");
    for (let i = 0; i < this.children.length; i++) {
        this.children[i].print("  " + space);
    }
    console.log(space + "</" + this.htmlType + ">")
  }
}

class TextNode implements IDomElement {
    private text : string;
  constructor(text:string) {
    this.text = text;
  }

  print(space:string) : void {
    console.log(space + this.text);
  }
}

let html = new DomElement("html");
let div = new DomElement("div");
let p1 = new DomElement("p");
let p2 = new DomElement("p");
let txtnode = new TextNode("Hi, I am a TextNode being printed!");
let txtnode2 = new TextNode("TextNode == leaf");

html.add(div);
div.add(p1);
div.add(p2);
p1.add(txtnode);
p2.add(txtnode2);

html.print("");