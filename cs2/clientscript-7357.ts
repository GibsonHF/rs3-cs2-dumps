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
        int7 = 5767;
    };
    string0 = strconcat(enum_getvalue(0, 36, int7, int5), strconcat(" ", enum_getvalue(0, 36, 5768 as cs2enum, int6)));
    var int9 = script2356(int4, varbitplayer_17218, varbitplayer_17219, varbitplayer_17217);
    [int0, int1, int2, int3] = script7334();
    if ((int0 > 0)) {
        IF_SETHIDE(false, comp(944, 79));
        IF_SETTEXT(enum_getvalue(0, 36, 1626, int0), 61866066);
        IF_SETMODEL(enum_getvalue(0, 31, 1669, int0), comp(944, 81));
        IF_SETMODELANIM(9806 as seq, comp(944, 81));
        if ((int1 == 2)) {
            IF_SETTEXT("In Port", comp(944, 83));
        } else if ((int1 == 3)) {
            IF_SETTEXT("Under Way", comp(944, 83));
        };
    } else {
        IF_SETHIDE(true, comp(944, 79));
    };
    if ((int2 > 0)) {
        IF_SETHIDE(false, comp(944, 85));
        IF_SETTEXT(enum_getvalue(0, 36, 1626, int2), 61866072);
        IF_SETMODEL(enum_getvalue(0, 31, 1669, int2), comp(944, 87));
        IF_SETMODELANIM(9806 as seq, comp(944, 87));
        if ((int3 == 2)) {
            IF_SETTEXT("In Port", comp(944, 89));
        } else if ((int3 == 3)) {
            IF_SETTEXT("Under Way", comp(944, 89));
        };
    } else {
        IF_SETHIDE(true, comp(944, 85));
    };
    if ((varbitplayer_17224 > 0)) {
        IF_SETHIDE(false, comp(944, 91));
        IF_SETNPCHEAD(int9, comp(944, 93));
        IF_SETMODELANIM(9806 as seq, comp(944, 93));
        IF_SETTEXT(string0, comp(944, 95));
    } else {
        IF_SETHIDE(true, comp(944, 91));
    };
    if ((varbitplayer_17463 > 0)) {
        IF_SETHIDE(false, comp(944, 97));
        IF_SETMODEL(81333 as model, comp(944, 99));
        IF_SETMODELANIM(9806 as seq, comp(944, 99));
        IF_SETGRAPHIC(enum_getvalue(0, 23, 7153, varbitplayer_17462), comp(944, 102));
        IF_SETSIZE(17, 17, 0, 0, comp(944, 102));
        IF_SETTEXT(enum_getvalue(0, 36, 2164, varbitplayer_17462), 61866085);
        IF_SETTEXT(`x ${inttostring(varbitplayer_17463, 10)}`, comp(944, 103));
    } else {
        IF_SETHIDE(true, comp(944, 97));
    };
    return;
}