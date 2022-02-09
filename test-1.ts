class Solution {
    solve(s: string): boolean {
        let result: boolean = false;
        let length: number = s.length;

        let sisa_bagi: number = length % 2;
        let habis_dibagi_2: boolean = sisa_bagi > 0 ? false : true;

        if (habis_dibagi_2 == true) {
            let ada_yg_tidak_sama: boolean = false;

            let i: number = 1;

            while (ada_yg_tidak_sama == false && i <= length) {
                /** 
                 * 
                 * Script ini digunakan untuk print huruf 1 dan huruf 2, hanya untuk pengecekan. 
                 * console.log("Huruf 1 : " + s[(i - 1)]);
                 * console.log("Huruf 2 : " + s[(i)]);
                 * 
                 * */

                let huruf_1: string = s[(i - 1)];
                let huruf_2: string = s[(i)];

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
        } else {
            result = false;
        }

        return result;
    }

    check(s: string): string {
        let result: string = "";
        let solve: boolean = this.solve(s);

        result = `Input\ns="${s}"\nOutput\n${solve}\n`

        return result;
    }
}

let data = new Solution();

let check_1: string = data.check("()");
console.log(check_1);

let check_2: string = data.check("()()");
console.log(check_2);

let check_3: string = data.check(")(");
console.log(check_3);

let check_4: string = data.check("");
console.log(check_4);

let check_5: string = data.check("((()))");
console.log(check_5);

let check_6: string = data.check("(()");
console.log(check_6);