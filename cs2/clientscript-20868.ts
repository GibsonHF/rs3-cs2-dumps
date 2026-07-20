//
function script20868(int0: number, int1: number, int2: number): string {
    var int3 = 0;
    var string0 = "";
    var int4 = 0;
    var string1 = "";
    switch (int0) {
        case 0: {
            int4 = 275;
            string1 = "";
            break;
        }
        case 1: {
            int4 = 225;
            string1 = "£";
            break;
        }
        case 2: {
            int4 = 300;
            string1 = "$";
            break;
        }
    };
    int3 = (int1 * int4);
    if ((int2 == 1)) {
        string0 = `(${string1}${script7653(int3, 4, 2, 2, 0)})`;
    } else {
        string0 = `${string1}${script7653(int3, 4, 2, 2, 0)}`;
    };
    return string0;
}