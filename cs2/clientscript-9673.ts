//
function script9673(int0: component, int1: int, int2: obj, int3: int, int4: int, int5: int, int6: unknown_int, string0: string): void {
    if ((int2 == -1 as obj)) {
        return;
    };
    var int7 = comp(1253, 519);
    var int8 = comp(1253, 541);
    IF_SETHIDE(false, int7);
    IF_SETOBJECT(int2, int3, comp(1253, 538));
    IF_SETTEXT(OC_NAME(int2), comp(1253, 534));
    IF_SETTEXT(string0, comp(1253, 535));
    var int9 = (PARAHEIGHT(string0, IF_GETWIDTH(comp(1253, 535)), 26 as fontmetrics) * script11432(26 as fontmetrics));
    if ((int9 > 56)) {
        IF_SETSIZE(IF_GETWIDTH(comp(1253, 519)), (220 + (int9 - 56)), 0, 0, comp(1253, 519));
    } else {
        IF_SETSIZE(IF_GETWIDTH(comp(1253, 519)), 220, 0, 0, comp(1253, 519));
    };
    switch (int4) {
        case 1: {
            IF_SETTEXT("Common", comp(1253, 536));
            break;
        }
        case 2: {
            IF_SETTEXT("Fairly Common", comp(1253, 536));
            break;
        }
        case 3: {
            IF_SETTEXT("Uncommon", comp(1253, 536));
            break;
        }
        case 4: {
            IF_SETTEXT("Rare", comp(1253, 536));
            break;
        }
        case 5: {
            IF_SETTEXT("Very Rare", comp(1253, 536));
            break;
        }
        case 6: {
            IF_SETTEXT("Super Rare", comp(1253, 536));
            break;
        }
        case 7: {
            IF_SETTEXT("Ultra Rare", comp(1253, 536));
            break;
        }
    };
    if (((int5 == 8) || (int5 == 10))) {
        stack(script8948(int4));
        stack(82117147);
        IF_SETGRAPHIC();
    } else {
        stack(script8948(int4));
        stack(82117147);
        IF_SETGRAPHIC();
    };
    IF_SETTEXT(enum_getvalue(0, 36, 16539 as cs2enum, int5), comp(1253, 537));
    stack(enum_getvalue(0, 23, 16540 as cs2enum, int5));
    stack(82117148);
    IF_SETGRAPHIC();
    IF_SETSIZE(1, 1, 0, 0, int8);
    if ((script5828("", int2, -1, 27827, int8, 82117161, -1, -1) > 0)) {
        IF_SETHIDE(false, int8);
        IF_SETHIDE(false, comp(1253, 553));
        IF_SETHIDE(false, comp(1253, 552));
        IF_SETSIZE((IF_GETWIDTH(int8) + 16), (25 + IF_GETHEIGHT(int8)), 0, 0, int8);
        IF_SETPOSITION((16 / 2), ((16 / 2) + 25), 0, 0, comp(1253, 553));
    } else {
        IF_SETHIDE(true, comp(1253, 541));
    };
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = IF_GETLAYER(int7);
    if ((int14 != comp(-1, 65535))) {
        int10 = script3365(int14);
        int12 = script3366(int14);
        int11 = (int10 + IF_GETWIDTH(int14));
        int13 = (int12 + IF_GETHEIGHT(int14));
    } else if ((int14 != comp(-1, 65535))) {
        [int11, int13] = [IF_GETWIDTH(int14), IF_GETHEIGHT(int14)];
    } else {
        [int11, int13] = [765, 503];
    };
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = IF_GETHEIGHT(int7);
    var int23 = IF_GETWIDTH(int7);
    if (((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1)))) {
        [int15, int16, int17, int18] = [script1743(), script1744(), CC_GETWIDTH(), CC_GETHEIGHT()];
        int19 = ((int15 + (int17 / 2)) - (int23 / 2));
        int20 = ((int16 - int22) + 10);
        if ((int19 < int10)) {
            int21 = (int19 - int10);
            int19 = (int19 - int21);
            int21 = MAX(int21, (0 - ((int23 - 35) / 2)));
        } else if (((int19 + int23) > int11)) {
            int21 = ((int19 + int23) - int11);
            int19 = (int19 - int21);
            int21 = MIN(int21, ((int23 - 35) / 2));
        };
        int21 = ((int21 + (int23 / 2)) - 9);
        IF_SETPOSITION(int21, 0, 0, 2, comp(1253, 531));
        IF_SETSIZE((int21 - 17), 18, 0, 0, comp(1253, 528));
        IF_SETSIZE(((int23 - int21) - 34), 18, 0, 0, comp(1253, 529));
    } else {
        IF_SETHIDE(true, int7);
    };
    var int24 = IF_GETWIDTH(IF_GETPARENTLAYER(int7));
    var int25 = (int19 - int10);
    var int26 = (int20 - int12);
    int25 = MIN(MAX(0, int25), (int24 - int23));
    int26 = MIN(MAX(0, int26), (IF_GETHEIGHT(IF_GETPARENTLAYER(int7)) - int22));
    IF_SETPOSITION(int25, int26, 0, 0, int7);
    var int27 = ((int25 + int23) - 3);
    if ((int27 > (int24 - IF_GETWIDTH(int8)))) {
        int27 = ((int25 - IF_GETWIDTH(int8)) + 3);
    };
    IF_SETPOSITION(int27, (int26 + 40), 0, 0, int8);
    return;
}