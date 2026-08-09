//
function script20801(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    CC_DELETEALL(int0);
    var int9 = 0;
    var int10 = (63 + 1);
    var int11 = 0;
    var int12 = (40 - 4);
    var int13 = (36 - 4);
    var int14 = (4 / 2);
    var string0 = "";
    var int15 = 1;
    if ((STRING_LENGTH(varclient_8426) >= 2)) {
        int15 = 0;
    };
    if ((((int1 == 63) || (int1 == 62)) || (int2 == 126))) {
        if ((int0 == 99090443)) {
            script7853(int0, 62, 0, int11, 0, 0, 40, 36, 0, 0, callback(script4476), int15, 1, 1, script6428(62, int1));
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script20805, -2147483645, -2147483643, int3, int4, int5, int6, int7, int8));
            string0 = "Room shapes";
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            script2994(int0, int10, int14, (int11 + int14), 0, 0, int12, int13, 0, 0, 36117);
            int11 = (int11 + 36);
            int11 = (int11 + 4);
            int10 = (int10 + 1);
            script7223(int0, int10, int14, (int11 + int14), 0, 0, int12, 0, 0, 0, script10495(8));
            int10 = (int10 + 1);
            script7223(int0, int10, int14, ((int11 + int14) + 1), 0, 0, int12, 0, 0, 0, script10495(7));
            int10 = (int10 + 1);
            int11 = (int11 + (4 * 3));
        };
        script7853(int0, 63, 0, int11, 0, 0, 40, 36, 0, 0, callback(script4476), int15, 1, 1, script6428(63, int1));
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script20805, -2147483645, -2147483643, int3, int4, int5, int6, int7, int8));
        string0 = "All Furniture";
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        script2994(int0, int10, int14, (int11 + int14), 0, 0, int12, int13, 0, 0, 36151);
        int11 = (int11 + 36);
        int11 = (int11 + 4);
        int10 = (int10 + 1);
        while ((int9 <= 7)) {
            script7853(int0, int9, 0, int11, 0, 0, 40, 36, 0, 0, callback(script4476), int15, 1, 1, script6428(int9, int1));
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script20805, -2147483645, -2147483643, int3, int4, int5, int6, int7, int8));
            string0 = enum_getvalue(0, 36, 12859, int9);
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            script2994(int0, int10, int14, (int11 + int14), 0, 0, int12, int13, 0, 0, enum_getvalue(0, 23, 12873, int9));
            int11 = (int11 + 36);
            int11 = (int11 + 4);
            int9 = (int9 + 1);
            int10 = (int10 + 1);
        };
        return;
    };
    script7853(int0, int1, 0, int11, 0, 0, 40, 36, 0, 0, callback(script4476), int15, 1, 1, 1);
    CC_SETOP(1, "Select");
    CC_SETONOP(callback(script20805, -2147483645, -2147483643, int3, int4, int5, int6, int7, int8));
    if ((int2 == 127)) {
        string0 = "Back";
    } else {
        string0 = `All ${enum_getvalue(0, 36, 12859, int1)}`;
    };
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    script2994(int0, int10, int14, (int11 + int14), 0, 0, int12, int13, 0, 0, 9886);
    int11 = (int11 + 36);
    int11 = (int11 + 4);
    var int16 = enum_getvalue(0, 26, 12894, int1);
    if ((int16 == -1)) {
        return;
    };
    var int17 = ENUM_GETOUTPUTCOUNT(int16);
    var int18 = (IF_GETHEIGHT(int0) - int11);
    var int19 = 0;
    var int20 = 20;
    if ((script6431() == 1)) {
        int20 = (int20 * 2);
    };
    if ((int17 > (int18 / (40 + 4)))) {
        int18 = ((int18 - (int20 * 2)) - (4 * 2));
        script7662(int0, 2, 1, 0, int11, 1, 0, 40, int20, 0, 0, callback(script4476), int15, 1, 0, 0);
        CC_SETONBUTTONCLICK(callback(script20803, int0, 1, 0));
        CC_SETONHOLD(callback(script20803, int0, 1, 1));
        script8023(int0, 2, 2, 0, (int11 + 4), 1, 0, 18, 11, 0, 0, 8085);
        script7662(int0, 2, 3, 0, 0, 1, 2, 40, int20, 0, 0, callback(script4476), int15, 1, 0, 0);
        CC_SETONBUTTONCLICK(callback(script20803, int0, 0, 0));
        CC_SETONHOLD(callback(script20803, int0, 0, 1));
        script8023(int0, 2, 4, 0, 4, 1, 2, 18, 11, 0, 0, 8085);
        CC_SETVFLIP(true);
        int19 = 1;
        int11 = ((int11 + int20) + 4);
    };
    script15938(int0, 2, 0, 0, int11, 1, 0, 0, int18, 1, 0);
    int11 = 0;
    int13 = SCALE(int12, 36, 32);
    int14 = (int14 + ((int12 - int13) / 2));
    var int21 = 0;
    var int22 = -1;
    while ((int9 < int17)) {
        int21 = enum_getvalue(0, 0, int16, int9);
        script7862(1, int21, 0, int11, 0, 0, 40, 36, 0, 0, callback(script4476), int15, 1, 1, script6428(int21, int2));
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script20805, -2147483645, -2147483643, int3, int4, int5, int6, int7, int8));
        string0 = enum_getvalue(0, 36, 12973, int21);
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        int22 = script20802(int16, int21);
        script9817(3, int9, int14, (int11 + int14), 0, 0, int12, int13, 0, 0, int22, 1);
        int11 = (int11 + 36);
        int11 = (int11 + 4);
        int9 = (int9 + 1);
    };
    if ((int19 == 1)) {
        script15937(2, 5, 0, 0, 0, 0, 0, 0, 1, 1);
        CC_SETONSCROLLWHEEL(callback(script20804, int0, -2147483646));
        script19632(20, 10, 8, 12);
        unk11119(callback(script20804, int0, -2147483646));
        if ((CC_FINDBYCATEGORY(int0, 2, 0) == 1)) {
            CC_SETSCROLLSIZE(0, int11);
        };
    };
    return;
}