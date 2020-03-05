import operate from "./operate";

class calculator {
    constructor() {
        this.total = 0
        this.next = 0
        this.operation = ""
    }

    operate (operation) {
        this.total = operate(this.total,this.next,operation)
    }

    set tap(text) {
        let condition = ['+/-', '%', '÷', "X", "-", "+"].indexOf(text)
        if (condition != -1) {
            this.operation = text;
        } else {
            this.next = text;
        }
    }
}

export default calculator