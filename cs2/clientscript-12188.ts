//
function script12188(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int): void {
    if ((int0 < varclient_5116)) {
        return;
    };
    var int9 = 0;
    var int10 = 0;
    while ((int10 < 9)) {
        if (((CC_FIND(comp(1712, 3), int10) == 1) && (cc_getparam(5529) != -1 as dbrow))) {
            int9 = (int9 + 1);
        };
        int10 = (int10 + 1);
    };
    if ((int9 == 0)) {
        return;
    };
    var int11 = comp(1712, 19);
    CC_DELETEALL(int11);
    var int12 = 0;
    var int13 = 5;
    var int14 = 5;
    var int15 = (IF_GETWIDTH(int11) - 10);
    [int12, int13] = script12086(int11, 0, 5, 5, (IF_GETWIDTH(int11) - 10), "Possible perks include:", 32855 as struct);
    int13 = (int13 + 10);
    var int16 = int12;
    [int12, int13] = script12189(int11, int12, int14, int13, int15, int1);
    [int12, int13] = script12189(int11, int12, int14, int13, int15, int2);
    [int12, int13] = script12189(int11, int12, int14, int13, int15, int3);
    [int12, int13] = script12189(int11, int12, int14, int13, int15, int4);
    [int12, int13] = script12189(int11, int12, int14, int13, int15, int5);
    [int12, int13] = script12189(int11, int12, int14, int13, int15, int6);
    [int12, int13] = script12189(int11, int12, int14, int13, int15, int7);
    [int12, int13] = script12189(int11, int12, int14, int13, int15, int8);
    if ((int12 == int16)) {
        [int12, int13] = script176(int11, int12, int14, int13, int15, 21341 as graphic, 16, 16, "None", 29166 as struct);
    };
    return;
}