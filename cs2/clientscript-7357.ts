//
function script7357(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = varbitplayer_17220;
    var int5 = varbitplayer_17224;
    var int6 = varbitplayer_17225;
    var int7 = 2195 as cs2enum;
    var string0 = "";
    var int8 = varbitplayer_17218;
    if ((int4 == 1)) {
        int7 = 5767 as cs2enum;
    };
    string0 = strconcat(enum_getvalue(0, 36, int7, int5), strconcat(" ", enum_getvalue(0, 36, 5768 as cs2enum, int6)));
    var int9 = script2356(int4, varbitplayer_17218, varbitplayer_17219, varbitplayer_17217);
    [int0, int1, int2, int3] = script7334();
    if ((int0 > 0)) {
        IF_SETHIDE(0, 61866063);
        IF_SETTEXT(enum_getvalue(0, 36, 1626 as cs2enum, int0), 61866066);
        IF_SETMODEL(enum_getvalue(0, 31, 1669 as cs2enum, int0), 61866065);
        IF_SETMODELANIM(9806, 61866065);
        if ((int1 == 2)) {
            IF_SETTEXT("In Port", 61866067);
        } else if ((int1 == 3)) {
            IF_SETTEXT("Under Way", 61866067);
        };
    } else {
        IF_SETHIDE(1, 61866063);
    };
    if ((int2 > 0)) {
        IF_SETHIDE(0, 61866069);
        IF_SETTEXT(enum_getvalue(0, 36, 1626 as cs2enum, int2), 61866072);
        IF_SETMODEL(enum_getvalue(0, 31, 1669 as cs2enum, int2), 61866071);
        IF_SETMODELANIM(9806, 61866071);
        if ((int3 == 2)) {
            IF_SETTEXT("In Port", 61866073);
        } else if ((int3 == 3)) {
            IF_SETTEXT("Under Way", 61866073);
        };
    } else {
        IF_SETHIDE(1, 61866069);
    };
    if ((varbitplayer_17224 > 0)) {
        IF_SETHIDE(0, 61866075);
        IF_SETNPCHEAD(int9, 61866077);
        IF_SETMODELANIM(9806, 61866077);
        IF_SETTEXT(string0, 61866079);
    } else {
        IF_SETHIDE(1, 61866075);
    };
    if ((varbitplayer_17463 > 0)) {
        IF_SETHIDE(0, 61866081);
        IF_SETMODEL(81333 as model, 61866083);
        IF_SETMODELANIM(9806, 61866083);
        stack(enum_getvalue(0, 23, 7153 as cs2enum, varbitplayer_17462));
        stack(61866086);
        IF_SETGRAPHIC();
        IF_SETSIZE(17, 17, 0, 0, 61866086);
        stack(0);
        stack(36);
        stack(2164);
        stack(varbitplayer_17462);
        enum_getvalue();
        IF_SETTEXT(stack(), 61866085);
        IF_SETTEXT(`x ${inttostring(varbitplayer_17463, 10)}`, 61866087);
    } else {
        IF_SETHIDE(1, 61866081);
    };
    return;
}