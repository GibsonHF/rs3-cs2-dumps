//
function script3961(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, string0: string, string1: string, string2: string, string3: string, string4: string): void {
    var int7 = 55508992;
    var int8 = 55509019;
    var int9 = 55509022;
    var int10 = 55509020;
    var int11 = 55509000;
    var int12 = 55509026;
    var int13 = 55508999;
    var int14 = 55508998;
    var int15 = 55509021;
    var int16 = 55508994;
    var int17 = 55509018;
    var int18 = 55509009;
    var int19 = 55509029;
    var int20 = 55509027;
    var int21 = 55508993;
    var int22 = 55509024;
    var int23 = 55509023;
    var int24 = 55509015;
    var int25 = 55509006;
    if ((int0 == 55574530)) {
        int7 = 55574530;
        int8 = 55574554;
        int9 = 55574557;
        int10 = 55574555;
        int11 = 55574565;
        int12 = 55574561;
        int13 = 55574562;
        int14 = 55574535;
        int15 = 55574556;
        int16 = 55574532;
        int17 = 55574553;
        int18 = 55574544;
        int19 = 55574564;
        int20 = 55574563;
        int21 = 55574531;
        int23 = 55574558;
        int24 = 55574550;
        int25 = 55574541;
        var int6 = 0;
    };
    if ((int1 != -1)) {
        IF_SETGRAPHIC(int1, int21);
        IF_SETPOSITION(IF_GETX(int21), 0, 1, int5, int21);
        if ((int2 != -1)) {
            IF_SETGRAPHIC(int2, int22);
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
    var int27 = MIN(200, (PARAHEIGHT(string1, int26, 27) * 13));
    IF_SETSIZE(IF_GETWIDTH(int14), int27, 0, 0, int14);
    IF_SETTEXT(string1, int11);
    if ((++int27 < int4)) {
        int27 = int4;
    };
    IF_SETSIZE(IF_GETWIDTH(int12), int27, 0, 0, int12);
    IF_SETSIZE(IF_GETWIDTH(int23), int27, 0, 0, int23);
    int27 = (int27 + 20);
    if ((STRING_LENGTH(string4) > 0)) {
        IF_SETHIDE(0, int15);
        int27 = (int27 + 24);
        IF_SETTEXT(string4, int16);
    } else {
        IF_SETHIDE(1, int15);
    };
    IF_SETHIDE(1, int24);
    IF_SETHIDE(1, int25);
    script1191(int15, 0, 0);
    IF_SETTEXT(string2, int17);
    IF_SETTEXT(string3, int18);
    if ((STRING_LENGTH(string3) == 0)) {
        IF_SETHIDE(1, int20);
        IF_SETPOSITION(0, 10, 1, 2, int19);
    } else if ((STRING_LENGTH(string2) == 0)) {
        IF_SETHIDE(1, int19);
        IF_SETPOSITION(0, 10, 1, 2, int20);
    };
    int27 = (int27 + 37);
    script9554(int8, int9, int10, string0, 21218);
    IF_SETSIZE(IF_GETWIDTH(int7), (int27 + 45), 0, 0, int7);
    if ((IF_GETHEIGHT(int14) < 200)) {
        IF_SETSCROLLSIZE(0, 0, int14);
        IF_SETSCROLLPOS(0, 0, int14);
        IF_SETHIDE(1, int13);
    } else {
        IF_SETSIZE(28, 8, 1, 1, int14);
        IF_SETHIDE(0, int13);
        IF_SETSCROLLSIZE(0, ((PARAHEIGHT(string1, IF_GETWIDTH(int11), 27) * 13) + 10), int14);
        script7791(int13, int14);
    };
    if ((int6 != 0)) {
        script8841(int6, 1);
    };
    return;
}