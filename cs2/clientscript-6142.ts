//
function script6142(int0: int, int1: int): void {
    var int2 = IF_GETWIDTH(comp(1270, 13));
    var int3 = IF_GETHEIGHT(comp(1270, 13));
    var int4 = comp(-1, 65535);
    var int5 = 0;
    var int6 = 14;
    var int7 = (int2 / 2);
    var int8 = (int3 / 2);
    var int9 = ((-100 * (int0 - int7)) / int7);
    var int10 = ((-100 * (int1 - int8)) / int8);
    var int11 = 0;
    var int12 = 0;
    while ((int5 <= int6)) {
        int4 = script6139(int5);
        int11 = ((IF_GETWIDTH(int4) - int2) / 2);
        int12 = ((IF_GETHEIGHT(int4) - int3) / 2);
        int11 = ((int9 * int11) / 100);
        int12 = ((int10 * int12) / 100);
        IF_SETPOSITION(int11, int12, 1, 1, int4);
        int5 = (int5 + 1);
    };
    return;
}