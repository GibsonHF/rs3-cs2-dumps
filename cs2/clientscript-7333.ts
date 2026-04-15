//
function script7333(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 2;
    var int5 = varbitplayer_17220;
    var int6 = varbitplayer_17224;
    var int7 = varbitplayer_17225;
    var int8 = varbitplayer_17218;
    var int9 = 2195 as cs2enum;
    var int10 = 2187;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    if ((int5 == 1)) {
        int9 = 5767 as cs2enum;
        int10 = 2188;
    };
    var int11 = script2356(int5, int8, varbitplayer_17219, varbitplayer_17217);
    string0 = strconcat(enum_getvalue(0, 36, int9, int6), strconcat("<br>", enum_getvalue(0, 36, 5768 as cs2enum, int7)));
    [int0, int1, int2, int3] = script7334();
    if ((int0 > 0)) {
        IF_SETHIDE(false, comp(905, 17));
        IF_SETPOSITION(0, int4, 0, 0, comp(905, 17));
        IF_SETTEXT(enum_getvalue(0, 36, 1626 as cs2enum, int0), comp(905, 42));
        IF_SETMODEL(enum_getvalue(0, 31, 1669 as cs2enum, int0), comp(905, 41));
        IF_SETMODELANIM(9806 as seq, comp(905, 41));
        if ((int1 == 2)) {
            IF_SETTEXT("In Port", comp(905, 43));
        } else if ((int1 == 3)) {
            IF_SETTEXT("Under Way", comp(905, 43));
        };
        int4 = (int4 + IF_GETHEIGHT(comp(905, 17)));
    } else {
        IF_SETHIDE(true, comp(905, 17));
    };
    if ((int2 > 0)) {
        IF_SETHIDE(false, comp(905, 18));
        IF_SETPOSITION(0, int4, 0, 0, comp(905, 18));
        IF_SETTEXT(enum_getvalue(0, 36, 1626 as cs2enum, int2), comp(905, 69));
        IF_SETMODEL(enum_getvalue(0, 31, 1669 as cs2enum, int2), comp(905, 68));
        IF_SETMODELANIM(9806 as seq, comp(905, 68));
        if ((int3 == 2)) {
            IF_SETTEXT("In Port", comp(905, 70));
        } else if ((int3 == 3)) {
            IF_SETTEXT("Under Way", comp(905, 70));
        };
        int4 = (int4 + IF_GETHEIGHT(comp(905, 18)));
    } else {
        IF_SETHIDE(true, comp(905, 18));
    };
    if ((varbitplayer_17224 > 0)) {
        IF_SETHIDE(false, comp(905, 20));
        IF_SETPOSITION(0, int4, 0, 0, comp(905, 20));
        IF_SETTEXT(string0, comp(905, 40));
        IF_SETNPCHEAD(int11, comp(905, 38));
        IF_SETMODELANIM(9806 as seq, comp(905, 38));
        int4 = (int4 + IF_GETHEIGHT(comp(905, 20)));
    } else {
        IF_SETHIDE(true, comp(905, 20));
    };
    if ((varbitplayer_17463 > 0)) {
        IF_SETHIDE(false, comp(905, 22));
        IF_SETPOSITION(0, int4, 0, 0, comp(905, 22));
        IF_SETMODEL(81333 as model, comp(905, 33));
        IF_SETMODELANIM(9806 as seq, comp(905, 33));
        stack(enum_getvalue(0, 23, 7153 as cs2enum, varbitplayer_17462));
        stack(59310116);
        IF_SETGRAPHIC();
        IF_SETSIZE(17, 17, 0, 0, 59310116);
        stack(0);
        stack(36);
        stack(2164);
        stack(varbitplayer_17462);
        enum_getvalue();
        IF_SETTEXT(stack(), 59310115);
        IF_SETTEXT(`x ${inttostring(varbitplayer_17463, 10)}`, 59310117);
        int4 = (int4 + IF_GETHEIGHT(59310102));
    } else {
        IF_SETHIDE(true, comp(905, 22));
    };
    if ((varbitplayer_21323 > 0)) {
        string1 = enum_getvalue(0, 36, 2164 as cs2enum, varbitplayer_21322);
        string2 = enum_getvalue(0, 36, 2164 as cs2enum, varbitplayer_21324);
        IF_SETHIDE(false, comp(905, 24));
        IF_SETPOSITION(0, int4, 0, 0, comp(905, 24));
        IF_SETMODEL(93056 as model, comp(905, 104));
        IF_SETMODELANIM(9836 as seq, comp(905, 104));
        stack(enum_getvalue(0, 23, 7155 as cs2enum, varbitplayer_21322));
        stack(59310187);
        IF_SETGRAPHIC();
        IF_SETSIZE(17, 17, 0, 0, 59310187);
        stack(0);
        stack(23);
        stack(7153);
        stack(varbitplayer_21324);
        enum_getvalue();
        stack(59310189);
        IF_SETGRAPHIC();
        IF_SETSIZE(17, 17, 0, 0, 59310189);
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), 59310187);
        IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), 59310189);
        int4 = (int4 + IF_GETHEIGHT(59310104));
    } else {
        IF_SETHIDE(true, comp(905, 24));
    };
    int4 = (int4 + 43);
    IF_SETSIZE(176, int4, 0, 0, comp(905, 13));
    if ((varbitplayer_17495 < 63)) {
        IF_SETHIDE(true, comp(905, 26));
        return;
    };
    IF_SETHIDE(false, comp(905, 26));
    IF_SETTEXT(`x${inttostring(varbitplayer_17423, 10)}`, comp(905, 1));
    if ((varbitplayer_17423 < 1)) {
        IF_SETHIDE(false, comp(905, 2));
    } else {
        IF_SETHIDE(true, comp(905, 2));
    };
    IF_SETTEXT(`x${inttostring(varbitplayer_17422, 10)}`, comp(905, 4));
    if ((varbitplayer_17422 < 1)) {
        IF_SETHIDE(false, comp(905, 5));
    } else {
        IF_SETHIDE(true, comp(905, 5));
    };
    var int12 = IF_GETY(comp(905, 13));
    var int13 = IF_GETHEIGHT(comp(905, 13));
    var int14 = IF_GETHEIGHT(comp(905, 100));
    return;
}