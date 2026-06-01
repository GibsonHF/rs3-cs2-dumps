//
function script828(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, int14: number, int15: number): void {
    script2872(int0, int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, int14, int15);
    var int16 = 1621;
    if ((DATE_RUNEDAY() < 5038)) {
        int16 = (int16 - 1);
    };
    define_array((int16 + 1));
    var int17 = 0;
    if (((varclient_89 == false) || (varclient_89 == false))) {
        varclient_2249 = "";
        varclient_89 = true;
    };
    while ((int17 <= int16)) {
        pop_array(int17, int17);
        CC_CREATE(int1, 4, (int17 * 2));
        CC_CREATE(int1, 5, ((int17 * 2) + 1));
        int17 = (int17 + 1);
    };
    script520(0, 0, int16, 1347);
    IF_SETPARAM_INT(1133, -1, int10);
    IF_SETMAXLINES(1, int10);
    int17 = 0;
    var int18 = 0;
    var int19 = 0;
    while ((int18 <= int16)) {
        int17 = push_array(int18);
        if (((CC_FIND(int1, (int17 * 2)) == 1) && (CC_FIND[1](int1, ((int17 * 2) + 1)) == 1))) {
            if (((enum_getvalue(0, 11, 1351 as cs2enum, int17) != 2167 as midi) && (enum_getvalue(0, 0, 1350 as cs2enum, int17) == 0))) {
                CC_SETTEXTALIGN(0, 1, 0);
                CC_SETTEXT(enum_getstring(1345, int17));
                CC_SETSIZE(15, 15, 1, 0);
                CC_SETOPBASE(enum_getstring(1345, int17));
                CC_SETOPBASE[1](enum_getstring(1345, int17));
                CC_SETTEXTSHADOW(false);
                CC_SETTEXTFONT(66 as fontmetrics);
                CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
                CC_SETSIZE[1](12, 12, 0, 0);
                CC_SETMAXLINES(1);
                if ((int19 == 0)) {
                    IF_SETPARAM_INT(1133, int17, int10);
                    int19 = 1;
                };
            };
            if ((int18 < int16)) {
                CC_SETPARAM_INT(1133, push_array((int18 + 1)));
            };
        };
        int18 = (int18 + 1);
    };
    script7791(int2, int1);
    script3680(int3, int4, int10, int1, int2, int11, int12);
    return;
}