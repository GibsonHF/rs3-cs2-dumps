//
function script3567(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    [int4, int5, int6] = script7295(varplayer_3390);
    var int7 = 1;
    if (((int0 >= int4) && (int0 <= int5))) {
        if (((TESTBIT(int6, (int0 - int4)) == 0) && (int3 == 1))) {
            int7 = 0;
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
    var int8 = -1 as graphic;
    IF_SETHIDE(0, 60031141);
    IF_SETHIDE(1, 60031139);
    var int9 = INV_GETOBJ(677, int0);
    var int10 = 0;
    var int11 = 0;
    if (((int9 == -1) || (int7 == 0))) {
        IF_SETGRAPHIC(-1 as graphic, 60031142);
        IF_SETTEXT("Empty slot", 60031143);
        IF_SETTEXT("", 60031144);
        IF_SETTEXT("", 60031152);
        IF_SETTEXT("", 60031149);
        IF_SETTEXT("", 60031150);
        IF_SETTEXT("", 60031151);
        IF_SETTEXT("", 60031153);
        return;
    };
    int11 = enum_hasoutput(33, 2173, int9);
    if ((varclient_2626 != -1 as obj)) {
        int10 = enum_hasoutput(33, 2173, varclient_2626);
    };
    [string0, string1, string2, string3, string4, string5, string6, int8] = script7318(677, int0);
    if ((int2 == 1)) {
        IF_SETGRAPHIC(item_getparam(varclient_2626, 3080), 60031142);
        IF_SETTEXT(varclient_2627, 60031143);
        IF_SETTEXT(inttostring(varclient_2632, 10), 60031152);
        IF_SETTEXT(inttostring(varclient_2638, 10), 60031149);
        IF_SETTEXT(inttostring(varclient_2634, 10), 60031150);
        IF_SETTEXT(inttostring(varclient_2640, 10), 60031151);
        IF_SETTEXT(`Level ${inttostring(varclient_2642, 10)}`, 60031144);
        IF_SETTEXT(varclient_2629, 60031153);
        return;
    };
    if ((((int10 == 1) && (int11 == 0)) || ((int10 == 0) && (int11 == 1)))) {
        var int1 = 0;
    };
    IF_SETGRAPHIC(int8, 60031142);
    IF_SETTEXT(string0, 60031143);
    IF_SETTEXT(string1, 60031152);
    IF_SETTEXT(string2, 60031149);
    IF_SETTEXT(string3, 60031150);
    IF_SETTEXT(string4, 60031151);
    IF_SETTEXT(string5, 60031144);
    IF_SETTEXT(string6, 60031153);
    return;
}