//
function script3930(int0: int, int1: int, int2: fontmetrics, string0: string): string {
    if ((int1 < 1)) {
        return string0;
    };
    var int3 = STRING_LENGTH(string0);
    if ((int3 == 0)) {
        return string0;
    };
    var int4 = 1;
    var int5 = PARAHEIGHT(string0, int0, int2);
    var int6 = PARAWIDTH(string0, int0, int2);
    if (((int6 <= int0) && (int5 <= int1))) {
        return string0;
    };
    var int7 = -1;
    var string1 = "";
    while ((int4 < int3)) {
        int7 = ((int4 + int3) / 2);
        string1 = `${SUBSTRING(string0, 0, int7)}...`;
        int5 = PARAHEIGHT(string1, int0, int2);
        int6 = PARAWIDTH(string1, int0, int2);
        if (((int6 <= int0) && (int5 <= int1))) {
            int4 = (int7 + 1);
        } else {
            int3 = int7;
        };
    };
    if ((int4 > 1)) {
        return `${SUBSTRING(string0, 0, (int4 - 1))}...`;
    };
    return "...";
}