//
function script13744(int0: number): void {
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var int2 = 1;
    var int3 = 0;
    var int4 = IF_GETWIDTH(125435905);
    var int5 = ((int4 - 20) / 2);
    var int6 = 10;
    var string0 = "null";
    var int7 = 20;
    if ((script6431() == 1)) {
        int7 = 30;
    };
    while ((int2 <= int1)) {
        string0 = enum_getvalue(0, 36, int0, int2);
        script12501(125435905, 125435904, 28556, (8 + ((int4 / 2) * MODULO((int2 - 1), 2))), int6, int5, int7, (int2 - 1), int3, string0);
        if ((MODULO(int2, 2) == 0)) {
            int6 = (int6 + (int7 + 3));
        };
        int2 = (int2 + 1);
    };
    int6 = (int6 + (int7 + 3));
    if ((IF_GETHEIGHT(125435909) < int6)) {
        IF_SETSCROLLSIZE(0, int6, 125435909);
        script7791(125435910, 125435909);
    };
    return;
}