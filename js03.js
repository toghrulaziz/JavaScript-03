class MyButton{
    constructor(text, btnClass){
        this.text = text;
        this.btnClass = btnClass;
    }

    show(){
        document.write(`<button class="${this.btnClass}">${this.text}</button>`);
    }


    get buttonText(){
        return this.text;
    }


    set buttonText(value){
        this.text = value;
    }

}



class ColorButton extends MyButton{
    constructor(text, btnClass, colorClass){
        super(text, btnClass);
        this.colorClass = colorClass;
    }

    show() {
        document.write(`<button class="${this.btnClass} ${this.colorClass}">${this.text}</button>`);
    }
}




const btn1 = new ColorButton("Save Progress", "btn" ,"btn btn-success");
const btn2 = new ColorButton("Click Me", "btn" ,"btn btn-light");
const btn3 = new ColorButton("Download", "btn" ,"btn btn-light");
const btn4 = new ColorButton("See More", "btn", "btn-danger");



btn1.show();
btn2.show();
btn3.show();
btn4.show();


