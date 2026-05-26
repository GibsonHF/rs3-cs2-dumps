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
        IF_SETHIDE(0, 59310097);
        IF_SETPOSITION(0, int4, 0, 0, 59310097);
        IF_SETTEXT(enum_getvalue(0, 36, 1626 as cs2enum, int0), 59310122);
        IF_SETMODEL(enum_getvalue(0, 31, 1669 as cs2enum, int0), 59310121);
        IF_SETMODELANIM(9806, 59310121);
        if ((int1 == 2)) {
            IF_SETTEXT("In Port", 59310123);
        } else if ((int1 == 3)) {
            IF_SETTEXT("Under Way", 59310123);
        };
        int4 = (int4 + IF_GETHEIGHT(59310097));
    } else {
        IF_SETHIDE(1, 59310097);
    };
    if ((int2 > 0)) {
        IF_SETHIDE(0, 59310098);
        IF_SETPOSITION(0, int4, 0, 0, 59310098);
        IF_SETTEXT(enum_getvalue(0, 36, 1626 as cs2enum, int2), 59310149);
        IF_SETMODEL(enum_getvalue(0, 31, 1669 as cs2enum, int2), 59310148);
        IF_SETMODELANIM(9806, 59310148);
        if ((int3 == 2)) {
            IF_SETTEXT("In Port", 59310150);
        } else if ((int3 == 3)) {
            IF_SETTEXT("Under Way", 59310150);
        };
        int4 = (int4 + IF_GETHEIGHT(59310098));
    } else {
        IF_SETHIDE(1, 59310098);
    };
    if ((varbitplayer_17224 > 0)) {
        IF_SETHIDE(0, 59310100);
        IF_SETPOSITION(0, int4, 0, 0, 59310100);
        IF_SETTEXT(string0, 59310120);
        IF_SETNPCHEAD(int11, 59310118);
        IF_SETMODELANIM(9806, 59310118);
        int4 = (int4 + IF_GETHEIGHT(59310100));
    } else {
        IF_SETHIDE(1, 59310100);
    };
    if ((varbitplayer_17463 > 0)) {
        IF_SETHIDE(0, 59310102);
        IF_SETPOSITION(0, int4, 0, 0, 59310102);
        IF_SETMODEL(81333 as model, 59310113);
        IF_SETMODELANIM(9806, 59310113);
        IF_SETGRAPHIC(enum_getvalue(0, 23, 7153 as cs2enum, varbitplayer_17462), 59310116);
        IF_SETSIZE(17, 17, 0, 0, 59310116);
        IF_SETTEXT(enum_getvalue(0, 36, 2164 as cs2enum, varbitplayer_17462), 59310115);
        IF_SETTEXT(`x ${inttostring(varbitplayer_17463, 10)}`, 59310117);
        int4 = (int4 + IF_GETHEIGHT(59310102));
    } else {
        IF_SETHIDE(1, 59310102);
    };
    if ((varbitplayer_21323 > 0)) {
        string1 = enum_getvalue(0, 36, 2164 as cs2enum, varbitplayer_21322);
        string2 = enum_getvalue(0, 36, 2164 as cs2enum, varbitplayer_21324);
        IF_SETHIDE(0, 59310104);
        IF_SETPOSITION(0, int4, 0, 0, 59310104);
        IF_SETMODEL(93056 as model, 59310184);
        IF_SETMODELANIM(9836, 59310184);
        IF_SETGRAPHIC(enum_getvalue(0, 23, 7155 as cs2enum, varbitplayer_21322), 59310187);
        IF_SETSIZE(17, 17, 0, 0, 59310187);
        IF_SETGRAPHIC(enum_getvalue(0, 23, 7153 as cs2enum, varbitplayer_21324), 59310189);
        IF_SETSIZE(17, 17, 0, 0, 59310189);
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), 59310187);
        IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), 59310189);
        int4 = (int4 + IF_GETHEIGHT(59310104));
    } else {
        IF_SETHIDE(1, 59310104);
    };
    int4 = (int4 + 43);
    IF_SETSIZE(176, int4, 0, 0, 59310093);
    if ((varbitplayer_17495 < 63)) {
        IF_SETHIDE(1, 59310106);
        return;
    };
    IF_SETHIDE(0, 59310106);
    IF_SETTEXT(`x${inttostring(varbitplayer_17423, 10)}`, 59310081);
    if ((varbitplayer_17423 < 1)) {
        IF_SETHIDE(0, 59310082);
    } else {
        IF_SETHIDE(1, 59310082);
    };
    IF_SETTEXT(`x${inttostring(varbitplayer_17422, 10)}`, 59310084);
    if ((varbitplayer_17422 < 1)) {
        IF_SETHIDE(0, 59310085);
    } else {
        IF_SETHIDE(1, 59310085);
    };
    var int12 = IF_GETY(59310093);
    var int13 = IF_GETHEIGHT(59310093);
    var int14 = IF_GETHEIGHT(59310180);
    return;
}