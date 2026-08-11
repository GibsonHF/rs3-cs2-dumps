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
        int9 = 5767;
        int10 = 2188;
    };
    var int11 = script2356(int5, int8, varbitplayer_17219, varbitplayer_17217);
    string0 = strconcat(enum_getvalue(0, 36, int9, int6), strconcat("<br>", enum_getvalue(0, 36, 5768 as cs2enum, int7)));
    [int0, int1, int2, int3] = script7334();
    if ((int0 > 0)) {
        IF_SETHIDE(false, comp(905, 17));  // pop_hud:adventurer_1_layer
        IF_SETPOSITION(0, int4, 0, 0, comp(905, 17));  // pop_hud:adventurer_1_layer
        IF_SETTEXT(enum_getvalue(0, 36, 1626, int0), 59310122);
        IF_SETMODEL(enum_getvalue(0, 31, 1669, int0), comp(905, 41));  // pop_hud:adventurer_1_model
        IF_SETMODELANIM(9806 as seq, comp(905, 41));  // pop_hud:adventurer_1_model
        if ((int1 == 2)) {
            IF_SETTEXT("In Port", comp(905, 43));  // pop_hud:adventurer_1_status
        } else if ((int1 == 3)) {
            IF_SETTEXT("Under Way", comp(905, 43));  // pop_hud:adventurer_1_status
        };
        int4 = (int4 + IF_GETHEIGHT(comp(905, 17)));  // pop_hud:adventurer_1_layer
    } else {
        IF_SETHIDE(true, comp(905, 17));  // pop_hud:adventurer_1_layer
    };
    if ((int2 > 0)) {
        IF_SETHIDE(false, comp(905, 18));  // pop_hud:adventurer_2_layer
        IF_SETPOSITION(0, int4, 0, 0, comp(905, 18));  // pop_hud:adventurer_2_layer
        IF_SETTEXT(enum_getvalue(0, 36, 1626, int2), 59310149);
        IF_SETMODEL(enum_getvalue(0, 31, 1669, int2), comp(905, 68));  // pop_hud:adventurer_2_model
        IF_SETMODELANIM(9806 as seq, comp(905, 68));  // pop_hud:adventurer_2_model
        if ((int3 == 2)) {
            IF_SETTEXT("In Port", comp(905, 70));  // pop_hud:adventurer_2_status
        } else if ((int3 == 3)) {
            IF_SETTEXT("Under Way", comp(905, 70));  // pop_hud:adventurer_2_status
        };
        int4 = (int4 + IF_GETHEIGHT(comp(905, 18)));  // pop_hud:adventurer_2_layer
    } else {
        IF_SETHIDE(true, comp(905, 18));  // pop_hud:adventurer_2_layer
    };
    if ((varbitplayer_17224 > 0)) {
        IF_SETHIDE(false, comp(905, 20));  // pop_hud:captain_layer
        IF_SETPOSITION(0, int4, 0, 0, comp(905, 20));  // pop_hud:captain_layer
        IF_SETTEXT(string0, comp(905, 40));  // pop_hud:captain_name
        IF_SETNPCHEAD(int11, comp(905, 38));  // pop_hud:captain_model
        IF_SETMODELANIM(9806 as seq, comp(905, 38));  // pop_hud:captain_model
        int4 = (int4 + IF_GETHEIGHT(comp(905, 20)));  // pop_hud:captain_layer
    } else {
        IF_SETHIDE(true, comp(905, 20));  // pop_hud:captain_layer
    };
    if ((varbitplayer_17463 > 0)) {
        IF_SETHIDE(false, comp(905, 22));  // pop_hud:smuggler_layer
        IF_SETPOSITION(0, int4, 0, 0, comp(905, 22));  // pop_hud:smuggler_layer
        IF_SETMODEL(81333 as model, comp(905, 33));  // pop_hud:smuggler_model
        IF_SETMODELANIM(9806 as seq, comp(905, 33));  // pop_hud:smuggler_model
        IF_SETGRAPHIC(enum_getvalue(0, 23, 7153, varbitplayer_17462), comp(905, 36));  // pop_hud:smuggler_goods_icon
        IF_SETSIZE(17, 17, 0, 0, comp(905, 36));  // pop_hud:smuggler_goods_icon
        IF_SETTEXT(enum_getvalue(0, 36, 2164, varbitplayer_17462), 59310115);
        IF_SETTEXT(`x ${inttostring(varbitplayer_17463, 10)}`, comp(905, 37));  // pop_hud:smuggler_quantity
        int4 = (int4 + IF_GETHEIGHT(comp(905, 22)));  // pop_hud:smuggler_layer
    } else {
        IF_SETHIDE(true, comp(905, 22));  // pop_hud:smuggler_layer
    };
    if ((varbitplayer_21323 > 0)) {
        string1 = enum_getvalue(0, 36, 2164, varbitplayer_21322);
        string2 = enum_getvalue(0, 36, 2164, varbitplayer_21324);
        IF_SETHIDE(false, comp(905, 24));  // pop_hud:trader_layer
        IF_SETPOSITION(0, int4, 0, 0, comp(905, 24));  // pop_hud:trader_layer
        IF_SETMODEL(93056 as model, comp(905, 104));  // pop_hud:trader_model
        IF_SETMODELANIM(9836 as seq, comp(905, 104));  // pop_hud:trader_model
        IF_SETGRAPHIC(enum_getvalue(0, 23, 7155, varbitplayer_21322), comp(905, 107));  // pop_hud:trader_goods_icon
        IF_SETSIZE(17, 17, 0, 0, comp(905, 107));  // pop_hud:trader_goods_icon
        IF_SETGRAPHIC(enum_getvalue(0, 23, 7153, varbitplayer_21324), comp(905, 109));  // pop_hud:trader_wants_icon
        IF_SETSIZE(17, 17, 0, 0, comp(905, 109));  // pop_hud:trader_wants_icon
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), comp(905, 107));  // pop_hud:trader_goods_icon
        IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), comp(905, 109));  // pop_hud:trader_wants_icon
        int4 = (int4 + IF_GETHEIGHT(comp(905, 24)));  // pop_hud:trader_layer
    } else {
        IF_SETHIDE(true, comp(905, 24));  // pop_hud:trader_layer
    };
    int4 = (int4 + 43);
    IF_SETSIZE(176, int4, 0, 0, comp(905, 13));  // pop_hud:people_layer
    if ((varbitplayer_17495 < 63)) {
        IF_SETHIDE(true, comp(905, 26));  // pop_hud:rerolls_layer
        return;
    };
    IF_SETHIDE(false, comp(905, 26));  // pop_hud:rerolls_layer
    IF_SETTEXT(`x${inttostring(varbitplayer_17423, 10)}`, comp(905, 1));  // pop_hud:adventurer_reroll_count
    if ((varbitplayer_17423 < 1)) {
        IF_SETHIDE(false, comp(905, 2));  // pop_hud:adventurer_reroll_gone
    } else {
        IF_SETHIDE(true, comp(905, 2));  // pop_hud:adventurer_reroll_gone
    };
    IF_SETTEXT(`x${inttostring(varbitplayer_17422, 10)}`, comp(905, 4));  // pop_hud:captain_reroll_count
    if ((varbitplayer_17422 < 1)) {
        IF_SETHIDE(false, comp(905, 5));  // pop_hud:captain_reroll_gone
    } else {
        IF_SETHIDE(true, comp(905, 5));  // pop_hud:captain_reroll_gone
    };
    var int12 = IF_GETY(comp(905, 13));  // pop_hud:people_layer
    var int13 = IF_GETHEIGHT(comp(905, 13));  // pop_hud:people_layer
    var int14 = IF_GETHEIGHT(comp(905, 100));  // pop_hud:container
    return;
}