//
function script17775(int0: int): int {
    var int1 = comp(1223, 14);
    var int2 = comp(1223, 26);
    var int3 = comp(1223, 27);
    var int4 = comp(1223, 25);
    var int5 = 18;
    var int6 = (((IF_GETWIDTH(int1) - IF_GETWIDTH(int4)) - 16) - (8 * 2));
    var int7 = 0;
    var int8 = 0;
    var int9 = (int5 * 4);
    var int10 = 3;
    var int11 = 3;
    if ((IF_GETWIDTH(int1) < (201 + (8 * 2)))) {
        int6 = (((IF_GETWIDTH(int1) - (8 * 2)) - 16) - 2);
        IF_SETPOSITION(8, (int5 + (8 * 2)), 0, 0, int2);
        IF_SETPOSITION(2, (int5 + (8 * 2)), 2, 0, int3);
        int7 = (int7 + int5);
        int10 = (int10 + 2);
        int9 = (int5 * 3);
    } else {
        IF_SETPOSITION((IF_GETWIDTH(int4) + (8 * 2)), 8, 0, 0, int2);
        IF_SETPOSITION(0, 8, 2, 0, int3);
    };
    IF_SETSIZE(int6, int5, 0, 0, int2);
    int8 = (int8 + script17776(int8, int5, int6, int2));
    int8 = (int8 + script17777(int8, int5, int6, int2));
    int8 = (int8 + script17778(int8, int5, int6, int2));
    int8 = (int8 + script17779(int8, int5, int6, int2));
    int8 = (int8 + script17780(int8, int5, int6, int2));
    if ((int8 > int9)) {
        IF_SETHIDE(false, int3);
        IF_SETSIZE(16, int9, 0, 0, int3);
        IF_SETSCROLLPOS(0, 0, int2);
        IF_SETSCROLLSIZE(0, int8, int2);
        script7791(int3, int2);
    } else {
        IF_SETHIDE(true, int3);
        IF_SETSCROLLSIZE(0, 0, int2);
    };
    IF_SETPOSITION(0, int0, 1, 0, int1);
    IF_SETSIZE((IF_GETWIDTH(comp(1223, 2)) - IF_GETWIDTH(int1)), (MIN(int8, int9) + (8 * int10)), 1, 0, int1);
    IF_SETSIZE(int6, MIN(int8, int9), 0, 0, int2);
    return ((int7 + MIN(int8, int9)) + (8 * int11));
}