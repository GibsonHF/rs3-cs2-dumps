//
function script3961(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: int, int4: int, int5: unknown_int, int6: int, string0: string, string1: string, string2: string, string3: string, string4: string): void {
    var int7 = comp(847, 0);
    var int8 = comp(847, 27);
    var int9 = comp(847, 30);
    var int10 = comp(847, 28);
    var int11 = comp(847, 8);
    var int12 = comp(847, 34);
    var int13 = comp(847, 7);
    var int14 = comp(847, 6);
    var int15 = comp(847, 29);
    var int16 = comp(847, 2);
    var int17 = comp(847, 26);
    var int18 = comp(847, 17);
    var int19 = comp(847, 37);
    var int20 = comp(847, 35);
    var int21 = comp(847, 1);
    var int22 = comp(847, 32);
    var int23 = comp(847, 31);
    var int24 = comp(847, 23);
    var int25 = comp(847, 14);
    if ((int0 == 55574530)) {
        int7 = comp(848, 2);
        int8 = comp(848, 26);
        int9 = comp(848, 29);
        int10 = comp(848, 27);
        int11 = comp(848, 37);
        int12 = comp(848, 33);
        int13 = comp(848, 34);
        int14 = comp(848, 7);
        int15 = comp(848, 28);
        int16 = comp(848, 4);
        int17 = comp(848, 25);
        int18 = comp(848, 16);
        int19 = comp(848, 36);
        int20 = comp(848, 35);
        int21 = comp(848, 3);
        int23 = comp(848, 30);
        int24 = comp(848, 22);
        int25 = comp(848, 13);
        var int6 = 0;
    };
    if ((int1 != -1)) {
        stack(int1);
        stack(int21);
        IF_SETGRAPHIC();
        IF_SETPOSITION(IF_GETX(int21), 0, 1, int5, int21);
        if ((int2 != -1)) {
            stack(int2);
            stack(int22);
            IF_SETGRAPHIC();
            IF_SETPOSITION(IF_GETX(int22), 0, 1, int5, int22);
        };
        if (((int3 == 0) && (int4 == 0))) {
            var [int3, int4] = IF_GETGRAPHICDIMENSIONS(int21);
        };
        IF_SETSIZE(((IF_GETWIDTH(int10) - int3) - 30), IF_GETHEIGHT(int12), 0, 0, int12);
        IF_SETSIZE(int3, int4, 0, 0, int23);
        IF_SETSIZE(int3, int4, 0, 0, int21);
        if ((int2 != -1)) {
            IF_SETSIZE(int3, int4, 0, 0, int22);
        };
    } else {
        IF_SETSIZE((IF_GETWIDTH(int10) - 20), IF_GETHEIGHT(int12), 0, 0, int12);
    };
    var int26 = IF_GETWIDTH(int11);
    var int27 = MIN(200, (PARAHEIGHT(string1, int26, 27 as fontmetrics) * 13));
    IF_SETSIZE(IF_GETWIDTH(int14), int27, 0, 0, int14);
    IF_SETTEXT(string1, int11);
    if ((++int27 < int4)) {
        int27 = int4;
    };
    IF_SETSIZE(IF_GETWIDTH(int12), int27, 0, 0, int12);
    IF_SETSIZE(IF_GETWIDTH(int23), int27, 0, 0, int23);
    int27 = (int27 + 20);
    if ((STRING_LENGTH(string4) > 0)) {
        IF_SETHIDE(false, int15);
        int27 = (int27 + 24);
        IF_SETTEXT(string4, int16);
    } else {
        IF_SETHIDE(true, int15);
    };
    IF_SETHIDE(true, int24);
    IF_SETHIDE(true, int25);
    script1191(int15, 0, false);
    IF_SETTEXT(string2, int17);
    IF_SETTEXT(string3, int18);
    if ((STRING_LENGTH(string3) == 0)) {
        IF_SETHIDE(true, int20);
        IF_SETPOSITION(0, 10, 1, 2, int19);
    } else if ((STRING_LENGTH(string2) == 0)) {
        IF_SETHIDE(true, int19);
        IF_SETPOSITION(0, 10, 1, 2, int20);
    };
    int27 = (int27 + 37);
    script9554(int8, int9, int10, string0, 21218 as struct);
    IF_SETSIZE(IF_GETWIDTH(int7), (int27 + 45), 0, 0, int7);
    if ((IF_GETHEIGHT(int14) < 200)) {
        IF_SETSCROLLSIZE(0, 0, int14);
        IF_SETSCROLLPOS(0, 0, int14);
        IF_SETHIDE(true, int13);
    } else {
        IF_SETSIZE(28, 8, 1, 1, int14);
        IF_SETHIDE(false, int13);
        IF_SETSCROLLSIZE(0, ((PARAHEIGHT(string1, IF_GETWIDTH(int11), 27 as fontmetrics) * 13) + 10), int14);
        script7791(int13, int14);
    };
    if ((int6 != 0)) {
        script8841(int6, 1);
    };
    return;
}