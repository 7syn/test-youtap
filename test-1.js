var Solution = /** @class */ (function () {
    function Solution() {
    }
    Solution.prototype.solve = function (s) {
        var result = false;
        var length = s.length;
        var sisa_bagi = length % 2;
        var habis_dibagi_2 = sisa_bagi > 0 ? false : true;
        if (habis_dibagi_2 == true) {
            var ada_yg_tidak_sama = false;
            var i = 1;
            while (ada_yg_tidak_sama == false && i <= length) {
                /**
                 *
                 * Script ini digunakan untuk print huruf 1 dan huruf 2, hanya untuk pengecekan.
                 * console.log("Huruf 1 : " + s[(i - 1)]);
                 * console.log("Huruf 2 : " + s[(i)]);
                 *
                 * */
                var huruf_1 = s[(i - 1)];
                var huruf_2 = s[(i)];
                if (huruf_1 != "(" && huruf_2 != ")") {
                    ada_yg_tidak_sama = true;
                    /**
                     *
                     * Script ini digunakan untuk print jika huruf 1 dan huruf 2 bukan "(" dan ")", hanya untuk pengecekan.
                     * console.log("Ups tidak sama");
                     *
                     * */
                }
                i += 2;
            }
            if (ada_yg_tidak_sama == false) {
                result = true;
            }
        }
        else {
            result = false;
        }
        return result;
    };
    Solution.prototype.check = function (s) {
        var result = "";
        var solve = this.solve(s);
        result = "Input\ns=\"".concat(s, "\"\nOutput\n").concat(solve, "\n");
        return result;
    };
    return Solution;
}());
var data = new Solution();
var check_1 = data.check("()");
console.log(check_1);
var check_2 = data.check("()()");
console.log(check_2);
var check_3 = data.check(")(");
console.log(check_3);
var check_4 = data.check("");
console.log(check_4);
var check_5 = data.check("((()))");
console.log(check_5);
var check_6 = data.check("(()");
console.log(check_6);
