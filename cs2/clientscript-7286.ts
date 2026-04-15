//
function script7286(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    [int0, int1, int2] = script7295(varplayer_3390);
    var int3 = 0;
    if ((((varplayer_3393 >= int0) && (varplayer_3393 <= int1)) && (TESTBIT(int2, (varplayer_3393 - int0)) == 1))) {
        int3 = 1;
    };
    if (((varclient_2626 == -1 as obj) || (int3 == 0))) {
        stack(-1);
        stack(60031127);
        IF_SETGRAPHIC();
        if ((varplayer_3393 == int0)) {
            IF_SETTEXT("No Captain", comp(916, 150));
        } else {
            IF_SETTEXT("Empty Crew slot", comp(916, 150));
        };
        IF_SETTEXT("", comp(916, 152));
        IF_SETTEXT("", comp(916, 160));
        IF_SETTEXT("", comp(916, 157));
        IF_SETTEXT("", comp(916, 158));
        IF_SETTEXT("", comp(916, 159));
        IF_SETTEXT("", comp(916, 161));
        return;
    };
    IF_SETTEXT(varclient_2627, comp(916, 150));
    IF_SETTEXT(inttostring(varclient_2632, 10), comp(916, 160));
    IF_SETTEXT(inttostring(varclient_2638, 10), comp(916, 157));
    IF_SETTEXT(inttostring(varclient_2634, 10), comp(916, 158));
    IF_SETTEXT(inttostring(varclient_2640, 10), comp(916, 159));
    IF_SETTEXT(`Level ${inttostring(varclient_2642, 10)}`, comp(916, 152));
    stack(item_getparam(varclient_2626, 3080));
    stack(60031127);
    IF_SETGRAPHIC();
    IF_SETTEXT(varclient_2629, 60031137);
    if ((strcmp(varclient_2630, "") != 0)) {
        IF_SETONMOUSEREPEAT(callback(script8799, varclient_2630, -2147483645, -1), 60031137);
        IF_SETONMOUSEOVER(callback(script45, -2147483645, 16686339), 60031137);
    } else {
        IF_SETONMOUSEREPEAT(callback(), comp(916, 161));
        IF_SETONMOUSEOVER(callback(), 60031137);
    };
    IF_SETONMOUSELEAVE(callback(script7287), comp(916, 161));
    return;
}