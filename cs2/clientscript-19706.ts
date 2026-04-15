//
function script19706(): int {
    CC_DELETEALL(comp(1475, 39));
    CC_DELETEALL(comp(1475, 40));
    CC_DELETEALL(comp(1475, 27));
    if ((script19705() == 0)) {
        IF_SETHIDE(true, comp(1475, 24));
        IF_SETTEXT("", comp(1475, 33));
        return 0;
    };
    IF_SETHIDE(false, comp(1475, 24));
    IF_SETTEXT(varclient_8264, comp(1475, 33));
    var int0 = -1;
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(10781 as cs2enum);
    var int3 = 18;
    var int4 = 0;
    var int5 = 0;
    var int6 = 32;
    var int7 = 19;
    var string0 = "";
    var string1 = "";
    var int8 = false;
    IF_SETTEXT(`Load ${varclient_8264} Layouts:`, comp(1475, 25));
    while ((int0 < int2)) {
        if ((script19689(int3) == 1)) {
            int4 = script19690(int3);
            int5 = script19691(int3);
            if (((int4 <= 0) || (int5 <= 0))) {
                string0 = script453(int3, 0, 0, 0);
                string1 = `Resolution unavailable. ${varclient_8264} may not be sharing resolution or the preset was saved before resolution information was tracked.`;
                int6 = 24;
            } else {
                string0 = `${script453(int3, 0, 0, 0)}<br>${TOSTRING_LOCALISED(int4, 1)} x ${TOSTRING_LOCALISED(int5, 1)}`;
                string1 = `${string0} resolution (width x height) when preset was saved.`;
                int6 = 32;
            };
            if (((int3 == varplayer_12049) || ((int3 == 18) && (varplayer_12049 == 8)))) {
                int8 = true;
            } else {
                int8 = false;
            };
            script7853(comp(1475, 40), int3, 0, int1, 1, 0, 0, int6, 1, 0, 4476 as dbrow, string0, true, 1, true, int8);
            CC_SETOP(1, "Load");
            CC_SETONOP(callback(script19708, -2147483645, -2147483643));
            CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
            int1 = (int1 + (int6 + 4));
        };
        int0 = (int0 + 1);
        int3 = enum_getvalue(0, 0, 10781 as cs2enum, int0);
    };
    IF_SETSIZE(0, MIN(150, (int1 + int7)), 1, 0, comp(1475, 24));
    script19620(comp(1475, 27), comp(1475, 26), int1, comp(-1, 65535), -1, 0, 0, int7);
    return (int1 + int7);
}