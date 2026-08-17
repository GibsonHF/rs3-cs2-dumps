//
function script20801(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    CC_DELETEALL(int0);
    var int10 = 0;
    var int11 = (63 + 1);
    var int12 = 0;
    var int13 = (40 - 4);
    var int14 = (36 - 4);
    var int15 = (4 / 2);
    var string0 = "";
    var int16 = 1;
    if (((varbitclient_61875 == 1) && (int0 == comp(1512, 12)))) {  // house_furniture_catalogue:items
        script7853(int0, 63, 0, int12, 0, 0, 40, 36, 0, 0, callback(script4476), int16, 1, 1, 1);
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script20805, -2147483645, -2147483643, int3, int4, int5, int6, int7, int8, int9));
        string0 = "Back";
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        script2994(int0, int11, int15, (int12 + int15), 0, 0, int13, int14, 0, 0, 9886);
        return;
    };
    if ((STRING_LENGTH(varclient_8426) >= 2)) {
        int16 = 0;
    };
    if ((((int1 == 63) || (int1 == 62)) || (int2 == 126))) {
        if ((int0 == 99090444)) {
            script7853(int0, 62, 0, int12, 0, 0, 40, 36, 0, 0, callback(script4476), int16, 1, 1, script6428(62, int1));
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script20805, -2147483645, -2147483643, int3, int4, int5, int6, int7, int8, int9));
            string0 = "Room shapes";
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            script2994(int0, int11, int15, (int12 + int15), 0, 0, int13, int14, 0, 0, 36117);
            int12 = (int12 + 36);
            int12 = (int12 + 4);
            int11 = (int11 + 1);
            script7223(int0, int11, int15, (int12 + int15), 0, 0, int13, 0, 0, 0, script10495(8));
            int11 = (int11 + 1);
            script7223(int0, int11, int15, ((int12 + int15) + 1), 0, 0, int13, 0, 0, 0, script10495(7));
            int11 = (int11 + 1);
            int12 = (int12 + (4 * 3));
        };
        script7853(int0, 63, 0, int12, 0, 0, 40, 36, 0, 0, callback(script4476), int16, 1, 1, script6428(63, int1));
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script20805, -2147483645, -2147483643, int3, int4, int5, int6, int7, int8, int9));
        string0 = "All Furniture";
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        script2994(int0, int11, int15, (int12 + int15), 0, 0, int13, int14, 0, 0, 36151);
        int12 = (int12 + 36);
        int12 = (int12 + 4);
        int11 = (int11 + 1);
        while ((int10 <= 7)) {
            script7853(int0, int10, 0, int12, 0, 0, 40, 36, 0, 0, callback(script4476), int16, 1, 1, script6428(int10, int1));
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script20805, -2147483645, -2147483643, int3, int4, int5, int6, int7, int8, int9));
            string0 = enum_getvalue(0, 36, 12859, int10);
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            script2994(int0, int11, int15, (int12 + int15), 0, 0, int13, int14, 0, 0, enum_getvalue(0, 23, 12873, int10));
            int12 = (int12 + 36);
            int12 = (int12 + 4);
            int10 = (int10 + 1);
            int11 = (int11 + 1);
        };
        return;
    };
    script7853(int0, int1, 0, int12, 0, 0, 40, 36, 0, 0, callback(script4476), int16, 1, 1, 1);
    CC_SETOP(1, "Select");
    CC_SETONOP(callback(script20805, -2147483645, -2147483643, int3, int4, int5, int6, int7, int8, int9));
    if ((int2 == 127)) {
        string0 = "Back";
    } else {
        string0 = `All ${enum_getvalue(0, 36, 12859, int1)}`;
    };
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    script2994(int0, int11, int15, (int12 + int15), 0, 0, int13, int14, 0, 0, 9886);
    int12 = (int12 + 36);
    int12 = (int12 + 4);
    var int17 = enum_getvalue(0, 26, 12894, int1);
    if ((int17 == -1)) {
        return;
    };
    var int18 = ENUM_GETOUTPUTCOUNT(int17);
    var int19 = (IF_GETHEIGHT(int0) - int12);
    var int20 = 0;
    var int21 = 20;
    if ((script6431() == 1)) {
        int21 = (int21 * 2);
    };
    if ((int18 > (int19 / (40 + 4)))) {
        int19 = ((int19 - (int21 * 2)) - (4 * 2));
        script7662(int0, 2, 1, 0, int12, 1, 0, 40, int21, 0, 0, callback(script4476), int16, 1, 0, 0);
        CC_SETONBUTTONCLICK(callback(script20803, int0, 1, 0));
        CC_SETONHOLD(callback(script20803, int0, 1, 1));
        script8023(int0, 2, 2, 0, (int12 + 4), 1, 0, 18, 11, 0, 0, 8085);
        script7662(int0, 2, 3, 0, 0, 1, 2, 40, int21, 0, 0, callback(script4476), int16, 1, 0, 0);
        CC_SETONBUTTONCLICK(callback(script20803, int0, 0, 0));
        CC_SETONHOLD(callback(script20803, int0, 0, 1));
        script8023(int0, 2, 4, 0, 4, 1, 2, 18, 11, 0, 0, 8085);
        CC_SETVFLIP(true);
        int20 = 1;
        int12 = ((int12 + int21) + 4);
    };
    script15938(int0, 2, 0, 0, int12, 1, 0, 0, int19, 1, 0);
    int12 = 0;
    int14 = SCALE(int13, 36, 32);
    int15 = (int15 + ((int13 - int14) / 2));
    var int22 = 0;
    var int23 = -1;
    while ((int10 < int18)) {
        int22 = enum_getvalue(0, 0, int17, int10);
        script7862(1, int22, 0, int12, 0, 0, 40, 36, 0, 0, callback(script4476), int16, 1, 1, script6428(int22, int2));
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script20805, -2147483645, -2147483643, int3, int4, int5, int6, int7, int8, int9));
        string0 = enum_getvalue(0, 36, 12973, int22);
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        int23 = script20802(int17, int22);
        script9817(3, int10, int15, (int12 + int15), 0, 0, int13, int14, 0, 0, int23, 1);
        int12 = (int12 + 36);
        int12 = (int12 + 4);
        int10 = (int10 + 1);
    };
    if ((int20 == 1)) {
        script15937(2, 5, 0, 0, 0, 0, 0, 0, 1, 1);
        CC_SETONSCROLLWHEEL(callback(script20804, int0, -2147483646));
        script19632(20, 10, 8, 12);
        unk11119(callback(script20804, int0, -2147483646));
        if ((CC_FINDBYCATEGORY(int0, 2, 0) == 1)) {
            CC_SETSCROLLSIZE(0, int12);
        };
    };
    return;
}