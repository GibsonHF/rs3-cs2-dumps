//
function script1713(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 0;
    var int5 = ENUM_GETOUTPUTCOUNT(int3);
    var int6 = 0;
    var int7 = 0;
    var string0 = "";
    while ((int4 < int5)) {
        string0 = enum_getvalue(0, 36, int3, int4);
        int6 = MAX(int6, STRINGWIDTH(string0, 26));
        script7852(int1, int4, 0, int7, 1, 0, 10, 24, 1, 0, 4476, string0);
        script10631("Select");
        int4 = (int4 + 1);
        int7 = ((int7 + 24) + 4);
    };
    IF_SETSIZE(MIN(512, (int6 + 80)), 334, 0, 0, int0);
    script19620(int2, int1, int7, -1, -1, 0, -1, -1);
    return;
}