//
function script9554(int0: component, int1: component, int2: component, int3: struct, string0: string): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = -1 as fontmetrics;
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    var int3 = script9952(int3);
    if ((struct_getparam(int3, 8094) == 1)) {
        script10404(int1, string0);
        return;
    };
    var int13 = struct_getparam(int3, 3547);
    var int14 = struct_getparam(int3, 3548);
    var int15 = struct_getparam(int3, 3552);
    var int16 = struct_getparam(int3, 3554);
    var int17 = struct_getparam(int3, 3557);
    var int18 = struct_getparam(int3, 3558);
    var int19 = struct_getparam(int3, 3556);
    var int20 = 0;
    var int21 = struct_getparam(int3, 3572);
    if ((int21 < 0)) {
        int20 = (0 - int21);
    };
    int4 = struct_getparam(int3, 3550);
    int5 = ((int13 + struct_getparam(int3, 3586)) + int20);
    int6 = int5;
    int10 = struct_getparam(int3, 3796);
    int11 = (struct_getparam(int3, 3652) + int20);
    int12 = struct_getparam(int3, 3823);
    var int22 = MAX(STRINGWIDTH(string0, int12), struct_getparam(int3, 3585));
    if ((CC_FIND(int1, 0) == 1)) {
        IF_SETONTIMER(callback(), int1);
        if ((int10 == 1)) {
            CC_SETPOSITION((int15 + int17), int14, 0, 0);
            CC_SETSIZE((((int15 + int16) + int17) + int18), (int13 - int14), 1, 0);
        } else if ((int10 == 0)) {
            CC_SETPOSITION(int15, int14, 0, 0);
            CC_SETSIZE(int22, (int13 - int14), 0, 0);
        } else if ((int10 == 2)) {
            CC_SETPOSITION(int16, int14, 2, 0);
            CC_SETSIZE(int22, (int13 - int14), 0, 0);
        };
    } else {
        IF_SETONTIMER(callback(script9553, int0, int1, int2, string0, int3), int1);
        return;
    };
    if ((CC_FIND(int1, 3) == 1)) {
        if ((int10 == 1)) {
            CC_SETPOSITION(int15, int19, 0, 0);
        } else if ((int10 == 0)) {
            CC_SETPOSITION((int15 + int22), int19, 0, 0);
        } else if ((int10 == 2)) {
            CC_SETPOSITION((int16 + int22), int19, 2, 0);
        };
        CC_SETSIZE(int17, (int13 - int19), 0, 0);
    };
    if ((CC_FIND(int1, 4) == 1)) {
        if ((int10 == 1)) {
            CC_SETPOSITION(int16, int19, 2, 0);
            CC_SETSIZE(int18, (int13 - int19), 0, 0);
        } else if ((int10 == 0)) {
            CC_SETPOSITION(int16, int19, 2, 0);
            CC_SETSIZE((((int17 + int22) + int15) + int16), (int13 - int19), 1, 0);
        } else if ((int10 == 2)) {
            CC_SETPOSITION(int16, int19, 2, 0);
            CC_SETSIZE((((int17 + int22) + int15) + int16), (int13 - int19), 1, 0);
        };
    };
    if ((CC_FIND(int1, 14) == 1)) {
        if ((strcmp(string0, "") == 0)) {
            CC_SETHIDE(true);
            if ((int20 > 0)) {
                int6 = int11;
            };
        } else {
            if ((int10 == 1)) {
                CC_SETPOSITION(0, int11, 0, 0);
                CC_SETTEXTALIGN(1, 1, enum_getvalue(25, 0, 8549 as cs2enum, CC_GETFONTMETRICS()));
            } else if ((int10 == 0)) {
                CC_SETPOSITION(int15, int11, 0, 0);
                CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8549 as cs2enum, CC_GETFONTMETRICS()));
            } else if ((int10 == 2)) {
                CC_SETPOSITION(int16, int11, 2, 0);
                CC_SETTEXTALIGN(2, 1, enum_getvalue(25, 0, 8549 as cs2enum, CC_GETFONTMETRICS()));
            };
            if ((struct_getparam(int3, 9397) != -1)) {
                CC_SETSIZE(struct_getparam(int3, 9397), CC_GETHEIGHT(), 1, 0);
            };
            CC_SETTEXT(string0);
            CC_SETHIDE(false);
            int6 = MAX(int6, (CC_GETY() + CC_GETHEIGHT()));
        };
    };
    int7 = (int4 + struct_getparam(int3, 3551));
    int8 = (int5 + struct_getparam(int3, 3549));
    int9 = (int6 + struct_getparam(int3, 3549));
    if ((int0 != comp(-1, 65535))) {
        IF_SETPOSITION(int4, int5, 0, 0, int0);
        IF_SETSIZE(int7, int8, 1, 1, int0);
    };
    if ((int2 != comp(-1, 65535))) {
        IF_SETPOSITION(int4, int6, 0, 0, int2);
        IF_SETSIZE(int7, int9, 1, 1, int2);
    };
    return;
}