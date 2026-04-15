//
function script4866(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int): void {
    var int6 = script4867(int0);
    var int7 = script4868(int0);
    var int8 = script4869(int0);
    var int9 = script4870(int0);
    var int10 = IF_GETPARENTLAYER(int7);
    var int11 = IF_GETPARENTLAYER(int10);
    var int12 = IF_GETPARENTLAYER(int11);
    var int13 = 1;
    if ((CLANPROFILE_FIND() == 1)) {
        int13 = varbitclan_6508;
    };
    var int14 = script5215(int0);
    var int15 = IF_GETWIDTH(IF_GETPARENTLAYER(int7));
    var int1 = (int1 / 100);
    var int5 = MAX(int5, int14);
    var int16 = ((int1 * int15) / int5);
    var int17 = ((int14 * int15) / int5);
    var int18 = ((int2 * int15) / int5);
    var int19 = ((int3 * int15) / int5);
    var int20 = (int1 - (int2 + int3));
    var int21 = ((int20 * int15) / int5);
    IF_SETTEXT(inttostring(int1, 10), int6);
    var int22 = 0;
    IF_SETSIZE(MIN((int18 - 2), int16), 9, 0, 0, int7);
    IF_SETPOSITION(1, 0, 0, 0, int7);
    IF_SETSIZE(MIN(int19, (int16 - int18)), 9, 0, 0, int8);
    IF_SETPOSITION(int18, 0, 0, 0, int8);
    IF_SETSIZE(MIN((int21 - 2), (int16 - (int18 + int19))), 9, 0, 0, int9);
    IF_SETPOSITION(((int18 + int19) + 1), 0, 0, 0, int9);
    var int23 = comp(-1, 65535);
    var int24 = comp(-1, 65535);
    var int25 = 7317;
    var int26 = 7314;
    [int23, int24] = script5223(int0);
    if (((int23 != comp(-1, 65535)) && (int24 != comp(-1, 65535)))) {
        int17 = (++int17 - (IF_GETWIDTH(int24) / 2));
        if ((varclan_2744 == int0)) {
            int25 = 7316;
            int26 = 7315;
        };
        IF_SETHIDE(true, int23);
        IF_SETHIDE(true, int24);
        if ((int14 > 0)) {
            stack(int25);
            stack(int23);
            IF_SETGRAPHIC();
            stack(int26);
            stack(int24);
            IF_SETGRAPHIC();
            IF_SETHIDE(0, int23);
            IF_SETHIDE(0, int24);
            IF_SETPOSITION(int17, 0, 0, 1, int24);
        };
    };
    if (((script5956(int0) == 3) || (script5956(int0) == 2))) {
        IF_SETHIDE(false, script5967(int0));
        stack(9996);
        stack(script5967(int0));
        IF_SETGRAPHIC();
    } else if ((script5956(int0) == 1)) {
        IF_SETHIDE(false, script5967(int0));
        stack(9997);
        stack(script5967(int0));
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(true, script5967(int0));
    };
    var string0 = enum_getvalue(0, 36, 4285 as cs2enum, int0);
    var string1 = `${string0}<br>Total : ${inttostring(int1, 10)}<br>Upkeep : ${inttostring(int2, 10)}<br>Upgrades : ${inttostring(int3, 10)}<br>(Upgrades part-paid : ${inttostring(int4, 10)})<br>Surplus : ${inttostring(int20, 10)}`;
    if ((int14 > 0)) {
        string1 = strconcat(string1, `<br>Goal: ${inttostring(int14, 10)}`);
    };
    if ((varclan_2744 == int0)) {
        string1 = strconcat(string1, " (Primary)");
    };
    var int27 = 2;
    if ((IF_GETY(int12) > ((IF_GETHEIGHT(IF_GETPARENTLAYER(int12)) / 2) - 10))) {
        int27 = 0;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), int12);
    return;
}