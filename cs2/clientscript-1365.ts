//
function script1365(int0: number): void {
    var int1 = comp(1594, 95);
    var int2 = 104464480;
    var string0 = script17844(varplayer_5148, 3);
    var string1 = script17844(varplayer_5148, 4);
    IF_SETHIDE(false, comp(1594, 33));
    IF_SETTEXT(script13337(int0), comp(1594, 79));
    IF_SETTEXT(struct_getparam(int0, 4858), int1);
    IF_SETTEXT(`Cost: ${script12658(varplayer_5148, int0, script9095(int0, script13501(int0)), struct_getparam(int0, 5878), 1, 0)}`, int2);
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script19888(int0, int0);
    script19890(varplayer_5148, -1, int0, -1, -1, int3, int4, 0, 0, 1);
    var int5 = 104464456;
    var int6 = 104464474;
    var int7 = 104464473;
    var int8 = 104464465;
    var int9 = 104464472;
    var int10 = 104464471;
    var int11 = 104464470;
    var int12 = 104464478;
    var int13 = 104464477;
    var int14 = 104464476;
    var int15 = 104464475;
    var int16 = 104464464;
    var int17 = 104464481;
    var int18 = -1;
    var int19 = -1;
    var int20 = -1;
    var int21 = struct_getparam(int0, 4851);
    var int22 = 0;
    [int18, int19, int22] = script326(int0);
    var int23 = -1;
    if ((int21 != -1)) {
        int23 = item_getparam(int21, 9254);
    };
    if ((int18 != -1)) {
        int23 = struct_getparam(int18, 9254);
    };
    if ((script6431() == 1)) {
        IF_SETSIZE(300, 208, 0, 0, int5);
    } else {
        IF_SETSIZE(300, 400, 0, 0, int5);
    };
    IF_SETSIZE(280, 234, 0, 0, int8);
    IF_SETHIDE(false, int8);
    IF_SETHIDE(true, int9);
    IF_SETHIDE(true, int10);
    IF_SETHIDE(true, int11);
    IF_SETHIDE(true, int12);
    IF_SETHIDE(true, int13);
    IF_SETHIDE(true, int14);
    IF_SETHIDE(true, int15);
    IF_SETMODEL(-1 as model, int9);
    IF_SETMODEL(-1 as model, int10);
    CC_DELETEALL(int11);
    var int24 = IF_GETHEIGHT(int8);
    var int25 = struct_getparam(int0, 9252);
    if ((struct_getparam(int0, 9346) == 1)) {
        int25 = enum_getvalue(0, 26, int25, GENDER());
    };
    script9525(int6, 3, -1);
    switch (int22) {
        case 2: {
            script17960(int18, int21, int25, int6, int7, int9, int8, int6, int23);
            break;
        }
        case 5: {
            int20 = script17962(int19);
            script17958(int18, int20, script17961(int20, int18), int6, int7, int10, int8, int6, 50, int23);
            break;
        }
        case 4: {
            script17956(int18, int6, int7, int11, int8, int6, 50, int23);
            break;
        }
        default: {
            IF_SETHIDE(true, int8);
            IF_SETSIZE(0, 0, 0, 0, int8);
            IF_SETSIZE(300, 208, 0, 0, int5);
            IF_SETHIDE(false, int15);
            if ((int22 == 3)) {
                IF_SETHIDE(false, int12);
                IF_SETSIZE(32, 40, 1, 0, int15);
                IF_SETTEXT(script4693(struct_getparam(int18, 2543), GENDER()), int12);
            } else if ((struct_getparam(int0, 4852) != -1)) {
                IF_SETHIDE(false, int13);
                IF_SETSIZE(40, 40, 0, 0, int15);
                IF_SETGRAPHIC(struct_getparam(int0, 4852), int13);
            } else {
                IF_SETHIDE(false, int14);
                IF_SETSIZE(40, 40, 0, 0, int15);
                IF_SETOBJECT(script14453(int0, int21), struct_getparam(int0, 4448), int14);
            };
            int24 = IF_GETHEIGHT(int15);
            break;
        }
    };
    var int26 = script7593(IF_GETTEXT(int1), IF_GETWIDTH(int1), IF_GETFONTMETRICS(int1), 0);
    var int27 = 28;
    if ((int26 > int27)) {
        int27 = int26;
    };
    IF_SETSIZE(0, int27, 1, 0, int1);
    var int28 = script7593(IF_GETTEXT(int2), IF_GETWIDTH(int2), IF_GETFONTMETRICS(int2), 0);
    var int29 = 16;
    if ((int28 > int29)) {
        int29 = int28;
    };
    IF_SETSIZE(0, int29, 1, 0, int2);
    IF_SETPOSITION(0, (IF_GETHEIGHT(int2) + 2), 2, 2, int1);
    var int30 = (((int24 + int26) + int28) + (8 * 2));
    CC_DELETEALL(int17);
    IF_SETSCROLLSIZE(0, 0, int16);
    IF_SETSCROLLPOS(0, 0, int16);
    if ((int30 > IF_GETHEIGHT(int16))) {
        IF_SETSCROLLSIZE(0, int30, int16);
        script7791(int17, int16);
    };
    return;
}