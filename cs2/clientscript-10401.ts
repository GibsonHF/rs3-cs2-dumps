//
function script10401(int0: component, int1: component, int2: component, int3: component, int4: struct, int5: int, int6: struct, string0: string): void {
    var int7 = 20;
    if ((int4 != -1 as struct)) {
        int7 = struct_getparam(int4, 3547);
    };
    if (((int1 != comp(-1, 65535)) && (struct_getparam(int4, 3545) == true))) {
        IF_SETNOCLICKTHROUGH(1, IF_GETLAYER(int1));
        CC_DELETEALL(int1);
        CC_CREATE(int1, 3, 0);
        script12591(0, int6);
        CC_SETSIZE(0, int7, 1, 0);
        CC_SETCOLOUR(3414565);
        CC_SETFILL(1);
        if ((int5 != -1)) {
            script3927(int5);
        };
        CC_CREATE(int1, 5, 1);
        script12591(0, int6);
        CC_SETSIZE(0, int7, 1, 0);
        CC_SETGRAPHIC(2750 as graphic);
        CC_SETCOLOUR(3874090);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETHFLIP(true);
        CC_CREATE(int1, 5, 2);
        script12591(0, int6);
        CC_SETSIZE(73, 32, 0, 0);
        CC_SETGRAPHIC(2753 as graphic);
        CC_SETPOSITION(150, 0, 0, 0);
        CC_CREATE(int1, 5, 3);
        CC_SETSIZE(0, int7, 1, 0);
        CC_SETGRAPHIC(2755 as graphic);
        CC_SETPOSITION(0, 0, 0, 0);
        if ((struct_getparam(int4, 3495) != -1 as graphic)) {
            CC_CREATE(int1, 5, 4);
            CC_SETSIZE(51, int7, 0, 0);
            CC_SETGRAPHIC(2754 as graphic);
            CC_SETPOSITION(0, 0, 0, 0);
        } else {
            CC_CREATE(int1, 5, 4);
            CC_SETSIZE(0, 0, 0, 0);
        };
        CC_CREATE(int1, 5, 5);
        script12591(0, int6);
        CC_SETSIZE(0, 1, 1, 0);
        CC_SETGRAPHIC(2749 as graphic);
        CC_SETCOLOUR(4155768);
        CC_SETHFLIP(true);
        CC_SETPOSITION(0, (int7 - 1), 0, 0);
        CC_CREATE(int1, 4, 6);
        script12591(0, int6);
        CC_SETCOLOUR(script10495(0));
        CC_SETTEXTFONT(57 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETSIZE(0, (int7 - 1), 1, 0);
        CC_SETTEXTALIGN(1, 1, enum_getvalue(25, 0, 8549 as cs2enum, 57 as fontmetrics));
        script10404(int1, string0);
    };
    if ((int0 != comp(-1, 65535))) {
        CC_DELETEALL(int0);
        CC_CREATE(int0, 3, 0);
        CC_SETTRANS(26);
        script12591(0, int6);
        CC_SETSIZE(0, int7, 1, 1);
        CC_SETCOLOUR(199695);
        CC_SETFILL(1);
        CC_SETPOSITION(0, 0, 2, 2);
        CC_CREATE(int0, 5, 1);
        CC_SETTRANS(0);
        script12591(0, int6);
        CC_SETSIZE(0, int7, 1, 1);
        CC_SETGRAPHIC(2749 as graphic);
        CC_SETCOLOUR(863806);
        CC_SETHFLIP(false);
        CC_SETPOSITION(0, 0, 0, 2);
        IF_SETSIZE(0, 0, 1, 1, int0);
        IF_SETPOSITION(0, 0, 0, 0, int0);
    };
    if ((int3 != comp(-1, 65535))) {
        CC_DELETEALL(int3);
        if ((int7 == 0)) {
            int7 = 30;
        };
        IF_SETHIDE(false, int3);
        IF_SETNOCLICKTHROUGH(1, int3);
        IF_SETSIZE(70, int7, 0, 0, int3);
        IF_SETPOSITION(0, 0, 2, 0, int3);
        CC_CREATE(int3, 5, 0);
        CC_SETGRAPHIC(2210 as graphic);
        CC_SETSIZE(20, 20, 0, 0);
        CC_SETPOSITION(0, 0, 1, 1);
    };
    var int8 = 0;
    var int9 = struct_getparam(int4, 3572);
    if ((int9 < 0)) {
        int8 = (0 - int9);
    };
    var int10 = struct_getparam(int4, 3550);
    var int11 = ((struct_getparam(int4, 3547) + struct_getparam(int4, 3586)) + int8);
    var int12 = int11;
    var int13 = (int10 + struct_getparam(int4, 3551));
    var int14 = (int11 + struct_getparam(int4, 3549));
    if ((CC_FIND(int1, 14) == 1)) {
        int12 = MAX(int12, (CC_GETY() + CC_GETHEIGHT()));
    };
    var int15 = (int12 + struct_getparam(int4, 3549));
    if ((int2 != comp(-1, 65535))) {
        IF_SETPOSITION(int10, int12, 0, 0, int2);
        IF_SETSIZE(int13, int15, 1, 1, int2);
    };
    return;
}