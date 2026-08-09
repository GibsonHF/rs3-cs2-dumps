//
function script3567(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    [int4, int5, int6] = script7295(varplayer_3390);
    var int7 = 1;
    if ((int0 >= int4)) {
        if ((int0 <= int5)) {
            if (((TESTBIT(int6, (int0 - int4)) == 0) && (int3 == 1))) {
                int7 = 0;
            };
        } else {
            int7 = 1;
        };
    } else {
        int7 = 1;
    };
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var int8 = -1;
    IF_SETHIDE(false, comp(916, 165));
    IF_SETHIDE(true, comp(916, 163));
    var int9 = INV_GETOBJ(677 as inv, int0);
    var int10 = 0;
    var int11 = 0;
    if (((int9 == -1 as obj) || (int7 == 0))) {
        IF_SETGRAPHIC(-1 as graphic, comp(916, 166));
        IF_SETTEXT("Empty slot", comp(916, 167));
        IF_SETTEXT("", comp(916, 168));
        IF_SETTEXT("", comp(916, 176));
        IF_SETTEXT("", comp(916, 173));
        IF_SETTEXT("", comp(916, 174));
        IF_SETTEXT("", comp(916, 175));
        IF_SETTEXT("", comp(916, 177));
        return;
    };
    int11 = enum_hasoutput(33, 2173 as cs2enum, int9);
    if ((varclient_2626 != -1 as obj)) {
        int10 = enum_hasoutput(33, 2173 as cs2enum, varclient_2626);
    };
    [string0, string1, string2, string3, string4, string5, string6, int8] = script7318(677, int0);
    if ((int2 == 1)) {
        IF_SETGRAPHIC(item_getparam(varclient_2626, 3080), comp(916, 166));
        IF_SETTEXT(varclient_2627, comp(916, 167));
        IF_SETTEXT(inttostring(varclient_2632, 10), comp(916, 176));
        IF_SETTEXT(inttostring(varclient_2638, 10), comp(916, 173));
        IF_SETTEXT(inttostring(varclient_2634, 10), comp(916, 174));
        IF_SETTEXT(inttostring(varclient_2640, 10), comp(916, 175));
        IF_SETTEXT(`Level ${inttostring(varclient_2642, 10)}`, comp(916, 168));
        IF_SETTEXT(varclient_2629, 60031153);
        return;
    };
    if ((int10 == 1)) {
        if ((int11 == 0)) {
            var int1 = 0;
        } else if (((int10 == 0) && (int11 == 1))) {
            int1 = 0;
        };
    } else if (((int10 == 0) && (int11 == 1))) {
        int1 = 0;
    };
    IF_SETGRAPHIC(int8, comp(916, 166));
    IF_SETTEXT(string0, comp(916, 167));
    IF_SETTEXT(string1, comp(916, 176));
    IF_SETTEXT(string2, comp(916, 173));
    IF_SETTEXT(string3, comp(916, 174));
    IF_SETTEXT(string4, comp(916, 175));
    IF_SETTEXT(string5, comp(916, 168));
    IF_SETTEXT(string6, comp(916, 177));
    return;
}