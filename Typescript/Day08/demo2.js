var Myclass = /** @class */ (function () {
    // constructor(){
    //     console.log("Const is called ");
    // }
    function Myclass(id, f, l) {
        this.id = id;
        this.fname = f;
        this.lname = l;
    }
    Myclass.prototype.display = function () {
        console.log("\n            ID          :: ".concat(this.id, "\n            First Name  :: ").concat(this.fname, "\n            Last name   :: ").concat(this.lname, "\n        "));
    };
    return Myclass;
}());
var obj = new Myclass(9, 'Sumit', 'Raokhande');
obj.display();
