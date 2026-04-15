//
function script12881(int0: struct): void {
    var int1 = -1 as cs2enum;
    var int2 = struct_getparam(34906 as struct, 4842);
    if ((int2 != -1 as cs2enum)) {
        int1 = enum_getvalue(0, 26, int2, struct_getparam(int0, 6145));
    };
    var int3 = 7;
    var int4 = 0;
    if ((int1 != -1 as cs2enum)) {
        int4 = ENUM_GETOUTPUTCOUNT(int1);
    };
    var int5 = -1;
    var int6 = comp(1802, 158);
    var int7 = comp(1802, 161);
    var int8 = comp(1802, 162);
    var int9 = comp(1802, 160);
    var int10 = 118096042;
    var int11 = 118096039;
    var int12 = comp(1802, 163);
    CC_DELETEALL(int6);
    if (((int0 == 9802 as struct) || (int0 == 40974 as struct))) {
        int6 = comp(1930, 67);
        int7 = comp(1930, 226);
        int8 = comp(1930, 227);
        int9 = comp(1930, 228);
        int10 = 126484716;
        int11 = 126484713;
        int12 = comp(1930, 229);
    };
    IF_SETONVARTRANSMIT(callback(script12880, int0, 9782, 9781, 2), int12);
    IF_SETONVARCTRANSMIT(callback(script12880, int0, 4659, 1), int12);
    var int13 = script11434();
    var int14 = varclient_4659;
    IF_SETTEXT(TOSTRING_LOCALISED(int13, 1), int10);
    IF_SETTEXT(TOSTRING_LOCALISED(int14, 1), int11);
    CC_DELETEALL(int7);
    CC_DELETEALL(int9);
    if ((int4 == 0)) {
        CC_CREATE(int6, 4, IF_GETNEXTSUBID(int6));
        CC_SETTEXTFONT(58 as fontmetrics);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETTEXT("There are no purchaseable items for this event.");
        return;
    };
    var int15 = -1 as struct;
    var int16 = -1;
    int5 = -1;
    while ((++int5 < int4)) {
        int15 = enum_getvalue(0, 73, int1, int5);
        script3412(34906 as struct, int15, int7, int8, int9, 5, int5);
    };
    return;
}