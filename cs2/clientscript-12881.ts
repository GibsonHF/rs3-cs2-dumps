//
function script12881(int0: number): void {
    var int1 = -1 as cs2enum;
    var int2 = struct_getparam(34906, 4842);
    if ((int2 != -1 as cs2enum)) {
        int1 = enum_getvalue(0, 26, int2, struct_getparam(int0, 6145));
    };
    var int3 = 7;
    var int4 = 0;
    if ((int1 != -1 as cs2enum)) {
        int4 = ENUM_GETOUTPUTCOUNT(int1);
    };
    var int5 = -1;
    var int6 = comp(1802, 158);  // timed_event:shop_layer
    var int7 = comp(1802, 161);  // timed_event:item_build_layer
    var int8 = 118096034;
    var int9 = comp(1802, 160);  // timed_event:item_control_layer
    var int10 = comp(1802, 170);  // timed_event:currency_bond_text
    var int11 = comp(1802, 167);  // timed_event:currency_runecoin_text
    var int12 = comp(1802, 163);  // timed_event:currency_layer
    CC_DELETEALL(int6);
    if (((int0 == 9802) || (int0 == 40974))) {
        int6 = comp(1930, 67);  // timed_event_tasks:shop_layer
        int7 = comp(1930, 226);  // timed_event_tasks:item_build_layer
        int8 = 126484707;
        int9 = comp(1930, 228);  // timed_event_tasks:item_control_layer
        int10 = comp(1930, 236);  // timed_event_tasks:currency_bond_text
        int11 = comp(1930, 233);  // timed_event_tasks:currency_runecoin_text
        int12 = comp(1930, 229);  // timed_event_tasks:currency_layer
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
    int5 = (int5 + 1);
    while ((int5 < int4)) {
        int15 = enum_getvalue(0, 73, int1, int5);
        script3412(34906, int15, int7, int8, int9, 5, int5);
    };
    return;
}