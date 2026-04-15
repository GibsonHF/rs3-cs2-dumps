//
function script3118(int0: int, int1: component, int2: int): void {
    var int3 = 1;
    if ((int2 == -1)) {
        int3 = 0;
    };
    CC_DELETEALL(int1);
    var int4 = 0;
    var string0 = "";
    var int5 = 0;
    var string1 = "";
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var string2 = "";
    var int10 = -1 as graphic;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    stack(WORLDLIST_SPECIFIC(int0));
    [int4, string0, int5, string1, int6, int9, string2] = stack();
    IF_SETHIDE(false, int1);
    var int14 = -1 as graphic;
    var string3 = "";
    var string4 = "";
    var int15 = -1 as graphic;
    var string5 = "";
    var string6 = "";
    [int14, string3, string4, int11, int15, int13, int10, string5, string6] = script3117(int0, int4, -1, string0, string1, int6, int5);
    var int16 = 0;
    var int17 = 21;
    var int18 = 0;
    var int19 = 4;
    var int20 = 2;
    var int21 = 0;
    var int22 = 21;
    var int23 = 16;
    var int24 = 26 as fontmetrics;
    if ((script13749() == true)) {
        int17 = 42;
        int18 = 4;
        int19 = (int19 + 10);
        int20 = (int20 + 4);
        int24 = 28 as fontmetrics;
        int22 = 42;
        int23 = 32;
        if ((int11 == 16777215)) {
            int12 = 7705248;
        } else {
            int12 = int11;
        };
        int11 = 7705248;
    } else {
        int11 = 15777401;
        int12 = int11;
    };
    if ((int3 == 0)) {
        if ((int0 == varclient_999)) {
            int16 = 1;
        };
        int10 = 23793 as graphic;
        script20333(int1, 0, int17, 0, int16);
        script10066(int1, 1, 0, 21, 0, 0, 15777401, 1, 0);
        CC_SETSIZE(0, int17, 1, 0);
        CC_SETFILL(0);
        if ((MAP_WORLD() == int0)) {
            CC_SETHIDE(false);
        } else {
            CC_SETHIDE(true);
        };
        script7924(int1, 2, int22, int22, (IF_GETX(comp(910, 66)) + ((IF_GETWIDTH(comp(910, 66)) - int22) / 2)), int21, int10, false, false, false, 0);
        script10629(int1, 3, (IF_GETWIDTH(int1) - (IF_GETX(comp(910, 67)) + 2)), int17, (IF_GETX(comp(910, 67)) + 2), 0, `World ${inttostring(int0, 10)} is running in a different language or is unavailable.`, int11, int24, 0, 1, 0, true);
        script10629(int1, 4, IF_GETWIDTH(comp(910, 76)), int17, IF_GETX(comp(910, 76)), 0, "", 0, int24, 0, 1, 0, true);
        script10629(int1, 5, IF_GETWIDTH(comp(910, 77)), int17, IF_GETX(comp(910, 77)), 0, "", 0, int24, 0, 1, 0, true);
        CC_SETONMOUSEOVER(callback(script3120, int1));
        CC_SETONMOUSELEAVE(callback(script3122, int1));
        CC_SETOP(1, "Remove");
        CC_SETOPBASE("Favourite");
        CC_SETONOP(callback(script3134, -2147483645, -2147483643, int0));
        CC_SETONCLICK(callback(script10036));
        return;
    };
    if ((int0 == varclient_999)) {
        int16 = 1;
    };
    script20333(int1, 0, int17, 0, int16);
    script10066(int1, 1, 0, 21, 0, 0, 15777401, 1, 0);
    CC_SETSIZE(0, int17, 1, 0);
    CC_SETFILL(0);
    if ((MAP_WORLD() == int0)) {
        CC_SETHIDE(false);
    } else {
        CC_SETHIDE(true);
    };
    script7924(int1, 2, int22, int22, (IF_GETX(comp(910, 66)) + ((IF_GETWIDTH(comp(910, 66)) - int22) / 2)), int21, int10, false, false, false, 0);
    script7924(int1, 3, 0, 0, (IF_GETX(comp(910, 68)) + 2), 1, -1 as graphic, false, false, false, 0);
    script10629(int1, 4, (IF_GETWIDTH(comp(910, 67)) - 6), int17, (IF_GETX(comp(910, 67)) + 3), 0, inttostring(int0, 10), int11, int24, 0, 1, 0, true);
    script10629(int1, 5, (IF_GETWIDTH(comp(910, 69)) - 6), int17, (IF_GETX(comp(910, 69)) + 3), 0, string6, int11, int24, 0, 1, 0, true);
    script10629(int1, 6, (IF_GETWIDTH(comp(910, 70)) - 6), int17, (IF_GETX(comp(910, 70)) + 3), 0, string4, int11, int24, 0, 1, 0, true);
    script7924(int1, 7, 24, 12, (IF_GETX(comp(910, 72)) + 4), int19, int14, false, false, false, 0);
    script10629(int1, 8, (IF_GETWIDTH(comp(910, 71)) - 30), int17, (IF_GETX(comp(910, 71)) + 30), 0, string3, int11, int24, 0, 1, 0, true);
    script10629(int1, 9, (IF_GETWIDTH(comp(910, 73)) - 10), int17, (IF_GETX(comp(910, 73)) + 5), 0, string5, int12, int24, 0, 1, 0, true);
    script7924(int1, 10, int23, int23, (IF_GETX(comp(910, 74)) + ((IF_GETWIDTH(comp(910, 74)) - int23) / 2)), int20, int15, false, false, false, 0);
    script10629(int1, 11, (IF_GETWIDTH(comp(910, 74)) - 10), int17, (IF_GETX(comp(910, 75)) + 5), 0, inttostring(int9, 10), int11, int24, 0, 1, 0, true);
    script10629(int1, 12, IF_GETWIDTH(comp(910, 76)), int17, IF_GETX(comp(910, 76)), 0, "", 0, int24, 0, 1, 0, true);
    CC_SETOP(1, "Select");
    CC_SETOPBASE(`World ${inttostring(int0, 10)}`);
    CC_SETONOP(callback(script3129, -2147483644, int2, int0, string2));
    script10629(int1, 13, IF_GETWIDTH(59637837), int17, IF_GETX(59637837), 0, "", 0, int24, 0, 1, 0, 1);
    CC_SETONMOUSEOVER(callback(script3120, int1));
    CC_SETONMOUSELEAVE(callback(script3122, int1));
    CC_SETOP(1, "Remove");
    CC_SETOPBASE("Favourite");
    CC_SETONOP(callback(script3134, -2147483645, -2147483643, int0));
    CC_SETONCLICK(callback(script10036));
    return;
}