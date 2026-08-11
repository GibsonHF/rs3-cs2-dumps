//
function script12695(): void {
    var int0 = 1;
    var int1 = -1;
    var int2 = -1;
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var string0 = "";
    var int5 = 0;
    while ((int0 <= 5)) {
        switch (int0) {
            case 1: {
                int1 = varbitplayer_33662;
                int2 = varbitplayer_33663;
                int3 = comp(1785, 78);  // lampforge:slot_gfx_1
                int4 = comp(1785, 79);  // lampforge:slot_text_1
                script7794(116981819, 28689);
                break;
            }
            case 2: {
                int1 = varbitplayer_33664;
                int2 = varbitplayer_33665;
                int3 = comp(1785, 89);  // lampforge:slot_gfx_2
                int4 = comp(1785, 90);  // lampforge:slot_text_2
                script7794(116981840, 28689);
                break;
            }
            case 3: {
                int1 = varbitplayer_33666;
                int2 = varbitplayer_33667;
                int3 = comp(1785, 100);  // lampforge:slot_gfx_3
                int4 = comp(1785, 101);  // lampforge:slot_text_3
                script7794(116981851, 28689);
                break;
            }
            case 4: {
                int1 = varbitplayer_33668;
                int2 = varbitplayer_33669;
                int3 = comp(1785, 111);  // lampforge:slot_gfx_4
                int4 = comp(1785, 112);  // lampforge:slot_text_4
                script7794(116981862, 28689);
                break;
            }
            case 5: {
                int1 = varbitplayer_33670;
                int2 = varbitplayer_33671;
                int3 = comp(1785, 122);  // lampforge:slot_gfx_5
                int4 = comp(1785, 123);  // lampforge:slot_text_5
                script7794(116981873, 28689);
                break;
            }
        };
        switch (int1) {
            case 1: {
                IF_SETGRAPHIC(enum_getvalue(0, 23, 745 as cs2enum, int2), int3);
                IF_SETTEXT(enum_getvalue(0, 36, 108 as cs2enum, int2), int4);
                break;
            }
            case 2: {
                IF_SETGRAPHIC(enum_getvalue(0, 23, 11546, int2), int3);
                IF_SETTEXT(enum_getvalue(0, 36, 11547, int2), int4);
                string0 = enum_getvalue(0, 36, 11548, int2);
                IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int3);
                break;
            }
            case 3: {
                IF_SETGRAPHIC(enum_getvalue(0, 23, 11560, int2), int3);
                IF_SETTEXT(enum_getvalue(0, 36, 11558, int2), int4);
                string0 = enum_getvalue(0, 36, 11559, int2);
                IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int3);
                break;
            }
        };
        int0 = (int0 + 1);
    };
    IF_SETTEXT(`+${inttostring((script12690() - 100), 10)}%`, comp(1785, 62));  // lampforge:boost_text
    switch (varbitplayer_33673) {
        case 2: {
            IF_SETGRAPHIC(27993 as graphic, comp(1785, 41));  // lampforge:day_2
            break;
        }
        case 3: {
            IF_SETGRAPHIC(27993 as graphic, comp(1785, 41));  // lampforge:day_2
            IF_SETGRAPHIC(27993 as graphic, comp(1785, 40));  // lampforge:day_3
            break;
        }
        case 4: {
            IF_SETGRAPHIC(27993 as graphic, comp(1785, 41));  // lampforge:day_2
            IF_SETGRAPHIC(27993 as graphic, comp(1785, 40));  // lampforge:day_3
            IF_SETGRAPHIC(27993 as graphic, comp(1785, 39));  // lampforge:day_4
            break;
        }
        case 5: {
            IF_SETGRAPHIC(27993 as graphic, comp(1785, 41));  // lampforge:day_2
            IF_SETGRAPHIC(27993 as graphic, comp(1785, 40));  // lampforge:day_3
            IF_SETGRAPHIC(27993 as graphic, comp(1785, 39));  // lampforge:day_4
            IF_SETGRAPHIC(27993 as graphic, comp(1785, 38));  // lampforge:day_5
            break;
        }
    };
    if ((varbitplayer_33673 <= 1)) {
        string0 = "This is the first day you have logged in. Log in tomorrow to build up your boost!";
    } else {
        string0 = `You have logged in ${inttostring(varbitplayer_33673, 10)} days in a row! Current chain bonus: ${inttostring((varbitplayer_33673 * 5), 10)}%`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1785, 37));  // lampforge:chain_tracker_container
    if ((varbitplayer_33675 == 1)) {
        IF_SETHIDE(false, comp(1785, 53));  // lampforge:disable_slots_layer
        IF_SETHIDE(false, comp(1785, 129));  // lampforge:forge_button_disabled_layer
        IF_SETTEXT("Caught!", comp(1785, 131));  // lampforge:forge_button_text
    } else {
        IF_SETHIDE(script12585(PLAYERMEMBER()), comp(1785, 53));  // lampforge:disable_slots_layer
        IF_SETHIDE(true, comp(1785, 129));  // lampforge:forge_button_disabled_layer
        IF_SETTEXT("Catch!", comp(1785, 131));  // lampforge:forge_button_text
    };
    if ((PLAYERMEMBER() == false)) {
        IF_SETTEXT(strconcat(IF_GETTEXT(comp(1785, 1)), "<br><br><col=FFCB05>You need to be a member to play. You'll still build up your login bonus though!"), comp(1785, 1));  // lampforge:landing_text
        IF_SETTEXT("Upgrade", comp(1785, 182));  // lampforge:start_button_text
        IF_SETHIDE(false, comp(1785, 129));  // lampforge:forge_button_disabled_layer
        IF_SETHIDE(false, comp(1785, 36));  // lampforge:lampforge_upsell_gfx
        IF_SETHIDE(false, comp(1785, 76));  // lampforge:slot_disabled_layer_1
        IF_SETHIDE(false, comp(1785, 87));  // lampforge:slot_disabled_layer_2
        IF_SETHIDE(false, comp(1785, 98));  // lampforge:slot_disabled_layer_3
        IF_SETHIDE(false, comp(1785, 109));  // lampforge:slot_disabled_layer_4
        IF_SETHIDE(false, comp(1785, 120));  // lampforge:slot_disabled_layer_5
    };
    script12700();
    return;
}