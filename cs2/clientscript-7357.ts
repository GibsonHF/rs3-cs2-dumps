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
        IF_SETHIDE(false, comp(944, 79));  // pop_log:adventurer_1_layer
        IF_SETTEXT(enum_getvalue(0, 36, 1626, int0), 61866066);
        IF_SETMODEL(enum_getvalue(0, 31, 1669, int0), comp(944, 81));  // pop_log:adventurer_1_model
        IF_SETMODELANIM(9806 as seq, comp(944, 81));  // pop_log:adventurer_1_model
        if ((int1 == 2)) {
            IF_SETTEXT("In Port", comp(944, 83));  // pop_log:adventurer_1_status
        } else if ((int1 == 3)) {
            IF_SETTEXT("Under Way", comp(944, 83));  // pop_log:adventurer_1_status
        };
    } else {
        IF_SETHIDE(true, comp(944, 79));  // pop_log:adventurer_1_layer
    };
    if ((int2 > 0)) {
        IF_SETHIDE(false, comp(944, 85));  // pop_log:adventurer_2_layer
        IF_SETTEXT(enum_getvalue(0, 36, 1626, int2), 61866072);
        IF_SETMODEL(enum_getvalue(0, 31, 1669, int2), comp(944, 87));  // pop_log:adventurer_2_model
        IF_SETMODELANIM(9806 as seq, comp(944, 87));  // pop_log:adventurer_2_model
        if ((int3 == 2)) {
            IF_SETTEXT("In Port", comp(944, 89));  // pop_log:adventurer_2_status
        } else if ((int3 == 3)) {
            IF_SETTEXT("Under Way", comp(944, 89));  // pop_log:adventurer_2_status
        };
    } else {
        IF_SETHIDE(true, comp(944, 85));  // pop_log:adventurer_2_layer
    };
    if ((varbitplayer_17224 > 0)) {
        IF_SETHIDE(false, comp(944, 91));  // pop_log:captain_layer
        IF_SETNPCHEAD(int9, comp(944, 93));  // pop_log:captain_model
        IF_SETMODELANIM(9806 as seq, comp(944, 93));  // pop_log:captain_model
        IF_SETTEXT(string0, comp(944, 95));  // pop_log:captain_name
    } else {
        IF_SETHIDE(true, comp(944, 91));  // pop_log:captain_layer
    };
    if ((varbitplayer_17463 > 0)) {
        IF_SETHIDE(false, comp(944, 97));  // pop_log:smuggler_layer
        IF_SETMODEL(81333 as model, comp(944, 99));  // pop_log:smuggler_model
        IF_SETMODELANIM(9806 as seq, comp(944, 99));  // pop_log:smuggler_model
        IF_SETGRAPHIC(enum_getvalue(0, 23, 7153, varbitplayer_17462), comp(944, 102));  // pop_log:smuggler_goods_icon
        IF_SETSIZE(17, 17, 0, 0, comp(944, 102));  // pop_log:smuggler_goods_icon
        IF_SETTEXT(enum_getvalue(0, 36, 2164, varbitplayer_17462), 61866085);
        IF_SETTEXT(`x ${inttostring(varbitplayer_17463, 10)}`, comp(944, 103));  // pop_log:smuggler_quantity
    } else {
        IF_SETHIDE(true, comp(944, 97));  // pop_log:smuggler_layer
    };
    return;
}