//
function script8794(int0: number, int1: number, int2: number, int3: number): void {
    if ((int2 == -1)) {
        return;
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    if ((int3 == -1)) {
        int4 = script8407(int2);
        int5 = script8408(int2);
        int6 = IF_GETWIDTH(int2);
        int7 = IF_GETHEIGHT(int2);
    } else if ((CC_FIND(int2, int3) == 1)) {
        int4 = script6355();
        int5 = script6356();
        int6 = CC_GETWIDTH();
        int7 = CC_GETHEIGHT();
    } else {
        return;
    };
    IF_SETSIZE((int0 + int6), int1, 0, 0, 96797457);
    IF_SETSIZE(int6, int1, 1, 0, 96797458);
    if ((((int4 + int0) + int6) <= IF_GETWIDTH(96796699))) {
        IF_SETPOSITION(0, 0, 2, 0, 96797458);
        int8 = int4;
    } else {
        IF_SETPOSITION(0, 0, 0, 0, 96797458);
        int8 = (int4 - int0);
    };
    if (((int5 + int1) <= IF_GETHEIGHT(96796699))) {
        int9 = int5;
    } else {
        int9 = (int5 - int1);
    };
    IF_SETPOSITION(int8, int9, 0, 0, 96797457);
    IF_SETHIDE(0, 96797457);
    IF_SETONMOUSELEAVE(callback(script8795), 96797457);
    return;
}