//
function script16760(int0: unknown_int, int1: int): string {
    var int2 = 0;
    var string0 = "";
    var int3 = 0;
    var string1 = "";
    switch (int0) {
        case 0: {
            int3 = 275;
            string1 = "";
            break;
        }
        case 1: {
            int3 = 225;
            string1 = "£";
            break;
        }
        case 2: {
            int3 = 300;
            string1 = "$";
            break;
        }
    };
    int2 = (int1 * int3);
    string0 = `(${string1}${script7653(int2, 4, 2, 2, 0)})`;
    return string0;
}