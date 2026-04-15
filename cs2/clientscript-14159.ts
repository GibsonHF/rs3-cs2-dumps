//
function script14159(): void {
    var int0 = false;
    if ((varbitplayer_40200 == 1)) {
        int0 = true;
    };
    IF_SETHIDE(int0, comp(1923, 5));
    var int1 = script10405(1043);
    var int2 = struct_getparam(int1, 3503);
    var int3 = 0;
    if ((CLIENTTYPE() == 8)) {
        int3 = 5;
    };
    var int4 = (5 + int3);
    if (((script5918() == 1) && (varplayer_7879 == 1))) {
        int4 = (50 + int3);
    };
    IF_SETPOSITION(-6, int4, 1, 2, comp(1923, 5));
    IF_SETPOSITION(0, int3, 1, 2, int2);
    var int5 = int3;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    if ((int0 == true)) {
        if ((IF_GETHIDE(int2) == false)) {
            int5 = script8408(comp(1925, 13));
        } else {
            int9 = 2;
            int6 = (int5 + (IF_GETHEIGHT(comp(1477, 615)) + 4));
            int7 = (int5 + (IF_GETHEIGHT(comp(1477, 615)) + 4));
            int8 = (int8 - (IF_GETWIDTH(comp(1477, 566)) + 4));
        };
    } else {
        int5 = script8408(comp(1923, 5));
    };
    if ((int9 == 0)) {
        int5 = (int5 - (IF_GETHEIGHT(comp(1477, 615)) + 4));
        int6 = ((int5 - struct_getparam(49465 as struct, 3485)) - 4);
        int7 = ((int5 - struct_getparam(40142 as struct, 3485)) - 4);
        int8 = (int8 - (IF_GETWIDTH(comp(1477, 566)) + 4));
    };
    IF_SETPOSITION(IF_GETX(comp(1477, 615)), int5, 0, int9, comp(1477, 615));
    IF_SETPOSITION(IF_GETX(comp(1477, 611)), int5, 0, int9, comp(1477, 611));
    IF_SETPOSITION(0, int6, 1, int9, comp(1477, 566));
    IF_SETPOSITION(int8, int7, 1, int9, comp(1477, 582));
    return;
}