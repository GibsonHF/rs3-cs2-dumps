//
function script11478(int0: int): string {
    if ((int0 == -2147483648)) {
        var int0 = (int0 + 1);
    };
    var int1 = int0;
    if ((int0 < 0)) {
        int1 = (int0 * -1);
    };
    if ((int1 < 1000)) {
        return inttostring(int0, 10);
    };
    var int2 = 0;
    var int3 = 0;
    var string0 = "";
    if ((int1 < 1000000)) {
        int2 = (int0 / 1000);
        string0 = "K";
        if ((int1 < 100000)) {
            int3 = (MODULO(int1, 1000) / 100);
        };
    } else if ((int1 < 1000000000)) {
        int2 = (int0 / 1000000);
        string0 = "M";
        if ((int1 < 10000000)) {
            int3 = (MODULO(int1, 1000000) / 100000);
        };
    } else {
        int2 = (int0 / 1000000000);
        string0 = "B";
        int3 = (MODULO(int1, 1000000000) / 100000000);
    };
    var string1 = script8002();
    var string2 = inttostring(int2, 10);
    if ((int3 > 0)) {
        string2 = `${string2}${string1}${inttostring(int3, 10)}`;
    };
    return `${string2}${string0}`;
}