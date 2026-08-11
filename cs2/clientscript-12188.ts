//
function script12188(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    if ((int0 < varclient_5116)) {
        return;
    };
    var int9 = 0;
    var int10 = 0;
    while ((int10 < 9)) {
        if (((CC_FIND(comp(1712, 3), int10) == 1) && (cc_getparam(5529) != -1 as dbrow))) {  // invent_gizmo:work_layer
            int9 = (int9 + 1);
        };
        int10 = (int10 + 1);
    };
    if ((int9 == 0)) {
        return;
    };
    var int11 = comp(1712, 19);  // invent_gizmo:predict_layer
    CC_DELETEALL(int11);
    var int12 = 0;
    var int13 = 5;
    var int14 = 5;
    var int15 = (IF_GETWIDTH(int11) - 10);
    [int12, int13] = script12086(int11, 0, 5, 5, (IF_GETWIDTH(int11) - 10), "Possible perks include:", 32855);
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
        [int12, int13] = script176(int11, int12, int14, int13, int15, 21341, 16, 16, "None", 29166);
    };
    return;
}