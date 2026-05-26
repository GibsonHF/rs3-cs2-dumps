//
function script3118(int0: number, int1: number, int2: number): void {
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
    var int10 = -1;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    stack(WORLDLIST_SPECIFIC(int0));
    [int4, string0, int5, string1, int6, int9, string2] = stack();
    IF_SETHIDE(0, int1);
    var int14 = -1;
    var string3 = "";
    var string4 = "";
    var int15 = -1;
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
    var int24 = 26;
    if ((script13749() == 1)) {
        int17 = 42;
        int18 = 4;
        int19 = (int19 + 10);
        int20 = (int20 + 4);
        int24 = 28;
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
        int10 = 23793;
        script20333(int1, 0, int17, 0, int16);
        script10066(int1, 1, 0, 21, 0, 0, 15777401, 1, 0);
        CC_SETSIZE(0, int17, 1, 0);
        CC_SETFILL(0);
        if ((MAP_WORLD() == int0)) {
            CC_SETHIDE(0);
        } else {
            CC_SETHIDE(1);
        };
        script7924(int1, 2, int22, int22, (IF_GETX(59637826) + ((IF_GETWIDTH(59637826) - int22) / 2)), int21, int10, 0, 0, 0, 0);
        script10629(int1, 3, (IF_GETWIDTH(int1) - (IF_GETX(59637827) + 2)), int17, (IF_GETX(59637827) + 2), 0, `World ${inttostring(int0, 10)} is running in a different language or is unavailable.`, int11, int24, 0, 1, 0, 1);
        script10629(int1, 4, IF_GETWIDTH(59637836), int17, IF_GETX(59637836), 0, "", 0, int24, 0, 1, 0, 1);
        script10629(int1, 5, IF_GETWIDTH(59637837), int17, IF_GETX(59637837), 0, "", 0, int24, 0, 1, 0, 1);
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
        CC_SETHIDE(0);
    } else {
        CC_SETHIDE(1);
    };
    script7924(int1, 2, int22, int22, (IF_GETX(59637826) + ((IF_GETWIDTH(59637826) - int22) / 2)), int21, int10, 0, 0, 0, 0);
    script7924(int1, 3, 0, 0, (IF_GETX(59637828) + 2), 1, -1, 0, 0, 0, 0);
    script10629(int1, 4, (IF_GETWIDTH(59637827) - 6), int17, (IF_GETX(59637827) + 3), 0, inttostring(int0, 10), int11, int24, 0, 1, 0, 1);
    script10629(int1, 5, (IF_GETWIDTH(59637829) - 6), int17, (IF_GETX(59637829) + 3), 0, string6, int11, int24, 0, 1, 0, 1);
    script10629(int1, 6, (IF_GETWIDTH(59637830) - 6), int17, (IF_GETX(59637830) + 3), 0, string4, int11, int24, 0, 1, 0, 1);
    script7924(int1, 7, 24, 12, (IF_GETX(59637832) + 4), int19, int14, 0, 0, 0, 0);
    script10629(int1, 8, (IF_GETWIDTH(59637831) - 30), int17, (IF_GETX(59637831) + 30), 0, string3, int11, int24, 0, 1, 0, 1);
    script10629(int1, 9, (IF_GETWIDTH(59637833) - 10), int17, (IF_GETX(59637833) + 5), 0, string5, int12, int24, 0, 1, 0, 1);
    script7924(int1, 10, int23, int23, (IF_GETX(59637834) + ((IF_GETWIDTH(59637834) - int23) / 2)), int20, int15, 0, 0, 0, 0);
    script10629(int1, 11, (IF_GETWIDTH(59637834) - 10), int17, (IF_GETX(59637835) + 5), 0, inttostring(int9, 10), int11, int24, 0, 1, 0, 1);
    script10629(int1, 12, IF_GETWIDTH(59637836), int17, IF_GETX(59637836), 0, "", 0, int24, 0, 1, 0, 1);
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