//
function script1401(int0: int, int1: fontmetrics, int2: int, string0: string): int {
    var string0 = script1602(string0);
    var int3 = STRING_LENGTH(string0);
    var int0 = (int0 - int2);
    if ((int0 <= 0)) {
        return 0;
    };
    if ((int0 >= STRINGWIDTH(string0, int1))) {
        return int3;
    };
    var int4 = 0;
    var int5 = STRING_LENGTH(string0);
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    while ((int4 != int5)) {
        int6 = (((int5 - int4) / 2) + int4);
        if ((int6 == int4)) {
            int7 = STRINGWIDTH(SUBSTRING(string0, 0, int5), int1);
            if ((int5 > 1)) {
                int8 = STRINGWIDTH(SUBSTRING(string0, 0, (int5 - 1)), int1);
            };
            if (((int7 - int0) < (int0 - int8))) {
                return int5;
            };
            return (int5 - 1);
        };
        if ((int0 <= STRINGWIDTH(SUBSTRING(string0, 0, int6), int1))) {
            [int4, int5] = [int4, int6];
        } else {
            [int4, int5] = [int6, int5];
        };
    };
    int7 = STRINGWIDTH(SUBSTRING(string0, 0, int5), int1);
    if ((int5 > 1)) {
        int8 = STRINGWIDTH(SUBSTRING(string0, 0, (int5 - 1)), int1);
    };
    if (((int7 - int0) < (int0 - int8))) {
        return int5;
    };
    return (int5 - 1);
}