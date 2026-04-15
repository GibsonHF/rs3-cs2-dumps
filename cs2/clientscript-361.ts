//
function script361(int0: int, int1: int): string {
    if ((int0 == 0)) {
        return "0";
    };
    if ((int0 == -2147483648)) {
        var int0 = (int0 + 1);
    };
    if ((int1 < 0)) {
        return "ERROR";
    };
    var int2 = 0;
    var string0 = "";
    if ((int0 < 0)) {
        string0 = "-";
    };
    var string1 = "";
    var int3 = 0;
    var int4 = ABS(int0);
    if ((int1 > 0)) {
        [int4, int2] = script362((int4 / POW(10, (int1 - 1))), 1);
    };
    if (((int4 + int2) == 0)) {
        return "0";
    };
    while ((int3 < 4)) {
        if ((int4 < 1000)) {
            if (((int4 > 9) || (int2 == 0))) {
                return strconcat(string0, `${inttostring(int4, 10)}${string1}`);
            };
            return strconcat(string0, `${inttostring(int4, 10)}${script8002()}${inttostring(int2, 10)}${string1}`);
        };
        int3 = (int3 + 1);
        [int4, int2] = script362((int4 / 100), 1);
        switch (int3) {
            case 1: {
                string1 = "K";
                break;
            }
            case 2: {
                string1 = "M";
                break;
            }
            case 3: {
                string1 = "B";
                break;
            }
        };
    };
    return "ERROR";
}