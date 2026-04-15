//
function script8336(int0: component): [int, int] {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = IF_GETWIDTH(int0);
    var int6 = IF_GETHEIGHT(int0);
    [int2, int1] = script8338(int0);
    if ((int2 == 1)) {
        int4 = 10;
    };
    if ((int1 == 1)) {
        int3 = 10;
    };
    int5 = (int5 + int3);
    int6 = (int6 + int4);
    return [int5, int6];
}