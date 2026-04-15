//
function script3736(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component): void {
    var int7 = IF_GETWIDTH(comp(573, 62));
    var int8 = IF_GETHEIGHT(comp(573, 62));
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as struct;
    var int12 = 0;
    var int13 = 0;
    var string0 = "";
    var int14 = struct_getparam(21332 as struct, 1379);
    var int15 = struct_getparam(21332 as struct, 1380);
    var int16 = struct_getparam(21332 as struct, 1381);
    var int17 = 0;
    var int18 = -1;
    IF_SETHIDE(true, comp(573, 21));
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var string1 = "";
    var int19 = ENUM_GETOUTPUTCOUNT(8661 as cs2enum);
    while ((int9 < int19)) {
        int12 = PARAHEIGHT(enum_getvalue(0, 36, 8662 as cs2enum, int9), IF_GETWIDTH(int1), 29 as fontmetrics);
        int12 = ((15 * int12) + 10);
        CC_CREATE(int1, 4, int9);
        CC_SETSIZE(0, 20, 1, 0);
        CC_SETTEXT(enum_getvalue(0, 36, 8662 as cs2enum, int9));
        CC_SETTEXTFONT(28 as fontmetrics);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETCOLOUR(15777401);
        CC_CREATE[1](int6, 5, int9);
        if ((script3751(int9) == 1)) {
            string1 = "Click here to deselect all messages in this section.";
            int18 = 18542;
            CC_SETGRAPHIC[1](18543 as graphic);
            CC_SETONOP[1](callback(script5336, -2147483645, -2147483643, int18));
            CC_SETOP[1](1, "Deselect All");
        } else {
            string1 = "Click here to select all messages in this section.";
            int18 = 18543;
            CC_SETGRAPHIC[1](18542 as graphic);
            CC_SETONOP[1](callback(script5336, -2147483645, -2147483643, int18));
            CC_SETOP[1](1, "Select All");
        };
        CC_SETONMOUSEREPEAT[1](callback(script8799, string1, int6, int9));
        CC_SETSIZE[1](18, 18, 0, 0);
        int9 = (int9 + 1);
    };
    var int20 = 0;
    int19 = ENUM_GETOUTPUTCOUNT(8659 as cs2enum);
    while ((int10 < int19)) {
        int20 = enum_getvalue(0, 0, 8659 as cs2enum, int10);
        int11 = enum_getvalue(0, 73, 8660 as cs2enum, int20);
        string0 = struct_getparam(int11, 4188);
        int12 = PARAHEIGHT(string0, IF_GETWIDTH(int2), 27 as fontmetrics);
        CC_CREATE(comp(573, 62), 4, int10);
        CC_SETHIDE(true);
        CC_CREATE(int5, 3, int10);
        CC_SETSIZE(0, MAX(24, ((12 * int12) + 4)), 1, 0);
        CC_SETFILL(1);
        CC_SETTRANS(255);
        CC_CREATE(int3, 5, int10);
        if ((script3749(int20) == 1)) {
            int18 = 18542;
            CC_SETGRAPHIC(18543 as graphic);
            CC_SETONOP(callback(script5336, -2147483645, -2147483643, int18));
        } else {
            int18 = 18543;
            CC_SETGRAPHIC(18542 as graphic);
            CC_SETONOP(callback(script5336, -2147483645, -2147483643, int18));
        };
        CC_SETSIZE(18, 18, 0, 0);
        CC_SETOP(1, "Select");
        CC_SETHIDE(true);
        CC_CREATE(int2, 4, int10);
        CC_SETTEXT(string0);
        CC_SETSIZE(0, (12 * int12), 1, 0);
        CC_SETTEXTFONT(27 as fontmetrics);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETCOLOUR(script10495(3));
        CC_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int11, 4189), int2, int10));
        int10 = (int10 + 1);
    };
    var int21 = 0;
    int17 = 0;
    int13 = 0;
    int9 = 0;
    int10 = 0;
    int19 = ENUM_GETOUTPUTCOUNT(8661 as cs2enum);
    while ((int9 < int19)) {
        if ((CC_FIND(int1, int9) == 1)) {
            CC_SETPOSITION(0, int13, 0, 0);
            if ((CC_FIND[1](int6, int9) == 1)) {
                CC_SETPOSITION[1](0, int13, 0, 0);
            };
            int13 = (int13 + CC_GETHEIGHT());
            while ((enum_getvalue(0, 0, 8659 as cs2enum, int10) != -1)) {
                int20 = enum_getvalue(0, 0, 8659 as cs2enum, int10);
                int11 = enum_getvalue(0, 73, 8660 as cs2enum, int20);
                if (((int11 != -1 as struct) && (struct_getparam(int11, 4187) == int9))) {
                    if ((CC_FIND(int5, int10) == 1)) {
                        CC_SETPOSITION(0, int13, 0, 0);
                        if ((MODULO(int21, 2) == 0)) {
                            CC_SETCOLOUR(script10495(9));
                        } else {
                            CC_SETCOLOUR(script10495(12));
                        };
                        CC_SETTRANS(0);
                        int21 = (int21 + 1);
                        int17 = CC_GETHEIGHT();
                    };
                    int13 = (int13 + 2);
                    if ((CC_FIND(int3, int10) == 1)) {
                        CC_SETPOSITION(0, int13, 0, 0);
                        int17 = MAX(CC_GETHEIGHT(), int17);
                        CC_SETHIDE(false);
                    };
                    script10430(comp(573, 61), comp(573, 62), 0, int13, int7, int10, 3716 as cs2enum, -1, 126, "", script3750(int20), 0);
                    if ((CC_FIND(int2, int10) == 1)) {
                        CC_SETPOSITION(0, int13, 0, 0);
                        int17 = MAX(CC_GETHEIGHT(), int17);
                    };
                    int13 = ((int13 + int17) + 2);
                };
                int10 = (int10 + 1);
            };
        };
        int9 = (int9 + 1);
        int10 = 0;
        int21 = 0;
        int13 = (int13 + 15);
    };
    IF_SETSCROLLSIZE(0, int13, int0);
    script7791(int4, int0);
    IF_SETONVARTRANSMIT(callback(script3747, -2147483645, int6, 4276, 4276, 4276, 4276, 4277, 4277, 4277, 4277, 4278, 4278, 4278, 4278, 4279, 4279, 4279, 4279, 4280, 4280, 4280, 4280, 4281, 4281, 4281, 4281, 4282, 4282, 4282, 4282, 4283, 4283, 4283, 4283, 4284, 4284, 4284, 4284, 36), int3);
    return;
}