//
function script20790(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number): void {
    var int10 = IF_GETWIDTH(int0);
    var int11 = 3;
    var int12 = 4;
    if ((int9 > 0)) {
        int10 = (((int10 - int9) - 3) - (4 * 2));
        int11 = 1;
    };
    IF_SETSIZE((int10 + (3 * 2)), (IF_GETHEIGHT(int0) + 3), 0, 0, int1);
    IF_SETPOSITION((IF_GETX(int0) - 3), IF_GETY(int0), 0, 0, int1);
    IF_SETPOSITION(4, int12, 0, 0, int3);
    IF_SETSIZE((int10 - (4 * 2)), 24, 0, 0, int3);
    int12 = ((int12 + 24) + 4);
    IF_SETPOSITION(0, int12, 0, 0, int4);
    IF_SETSIZE(((int10 + 3) + int11), 3, 0, 0, int4);
    int12 = ((int12 + 4) + 3);
    IF_SETPOSITION(4, int12, 0, 0, int5);
    IF_SETSIZE(40, (int12 + 4), 0, 1, int5);
    IF_SETPOSITION((((4 * 2) + 40) + 3), 0, 0, 2, int6);
    IF_SETSIZE(3, (((int12 - 3) - 1) - 1), 0, 1, int6);
    IF_SETPOSITION((((4 * 3) + 40) + 3), int12, 0, 0, int2);
    IF_SETSIZE((((int10 - (4 * 4)) - 40) - 3), (int12 + 4), 0, 1, int2);
    if ((int8 != comp(-1, 65535))) {
        IF_SETPOSITION((int10 + 3), 0, 0, 2, int8);
        IF_SETSIZE(3, 0, 0, 1, int8);
    };
    if ((int7 != comp(-1, 65535))) {
        IF_SETPOSITION(((int10 + 3) + 4), 4, 0, 0, int7);
        IF_SETSIZE(int9, (4 * 2), 0, 1, int7);
    };
    return;
}