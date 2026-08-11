//
function script5683(int0: number): void {
    CC_DELETEALL(comp(1218, 246));  // skillguide:content_layer
    CC_DELETEALL(comp(1218, 247));  // skillguide:image_layer
    CC_DELETEALL(comp(1218, 245));  // skillguide:background_layer
    varclient_1753 = int0;
    varclient_1754 = script12842(int0);
    var int1 = 0;
    var int2 = -1;
    var int3 = 0;
    var int4 = 0;
    var int5 = 30;
    var int6 = 0;
    IF_SETHIDE(true, comp(1218, 243));  // skillguide:members_filter_text
    IF_SETHIDE(false, comp(1218, 242));  // skillguide:loading_text
    IF_SETHIDE(true, comp(1218, 248));  // skillguide:tooltip_layer
    if ((int0 > 0)) {
        IF_SETHIDE(false, comp(1218, 256));  // skillguide:sort_by_dropdown
        IF_SETHIDE(false, comp(1218, 259));  // skillguide:filter_by_dropdown
        IF_SETTEXT(enum_getvalue(0, 36, 108 as cs2enum, int0), comp(1218, 4));  // skillguide:skill_name
        if ((varbitplayer_19007 == 1)) {
            IF_SETTEXT(`${inttostring(script11862(enum_getvalue(0, 17, 681, int0)), 10)}</col>`, comp(1218, 5));  // skillguide:player_level
        } else {
            IF_SETTEXT(inttostring(STAT_BASE(enum_getvalue(0, 17, 681, int0)), 10), comp(1218, 5));  // skillguide:player_level
        };
        int2 = enum_getvalue(0, 26, 5421, int0);
        script10428(79823108, 79823109, int2, -1, "", varclient_1754, 0);
        script10428(79823105, 79823106, 14116, -1, "", varclient_1755, 0);
    };
    IF_SETHIDE(true, comp(1218, 20));  // skillguide:1x1_button_selected_layer
    IF_SETHIDE(true, comp(1218, 36));  // skillguide:1x1_button_selected_layer_1
    IF_SETHIDE(true, comp(1218, 44));  // skillguide:1x1_button_selected_layer_2
    IF_SETHIDE(true, comp(1218, 165));  // skillguide:1x1_button_selected_layer_3
    IF_SETHIDE(true, comp(1218, 221));  // skillguide:1x1_button_selected_layer_4
    IF_SETHIDE(true, comp(1218, 213));  // skillguide:1x1_button_selected_layer_5
    IF_SETHIDE(true, comp(1218, 76));  // skillguide:1x1_button_selected_layer_6
    IF_SETHIDE(true, comp(1218, 52));  // skillguide:1x1_button_selected_layer_7
    IF_SETHIDE(true, comp(1218, 60));  // skillguide:1x1_button_selected_layer_8
    IF_SETHIDE(true, comp(1218, 69));  // skillguide:1x1_button_selected_layer_9
    IF_SETHIDE(true, comp(1218, 84));  // skillguide:1x1_button_selected_layer_10
    IF_SETHIDE(true, comp(1218, 132));  // skillguide:1x1_button_selected_layer_11
    IF_SETHIDE(true, comp(1218, 116));  // skillguide:1x1_button_selected_layer_12
    IF_SETHIDE(true, comp(1218, 189));  // skillguide:1x1_button_selected_layer_13
    IF_SETHIDE(true, comp(1218, 237));  // skillguide:1x1_button_selected_layer_14
    IF_SETHIDE(true, comp(1218, 181));  // skillguide:1x1_button_selected_layer_15
    IF_SETHIDE(true, comp(1218, 108));  // skillguide:1x1_button_selected_layer_16
    IF_SETHIDE(true, comp(1218, 157));  // skillguide:1x1_button_selected_layer_17
    IF_SETHIDE(true, comp(1218, 124));  // skillguide:1x1_button_selected_layer_18
    IF_SETHIDE(true, comp(1218, 12));  // skillguide:1x1_button_selected_layer_19
    IF_SETHIDE(true, comp(1218, 197));  // skillguide:1x1_button_selected_layer_20
    IF_SETHIDE(true, comp(1218, 205));  // skillguide:1x1_button_selected_layer_21
    IF_SETHIDE(true, comp(1218, 100));  // skillguide:1x1_button_selected_layer_22
    IF_SETHIDE(true, comp(1218, 140));  // skillguide:1x1_button_selected_layer_23
    IF_SETHIDE(true, comp(1218, 229));  // skillguide:1x1_button_selected_layer_24
    IF_SETHIDE(true, comp(1218, 92));  // skillguide:1x1_button_selected_layer_25
    IF_SETHIDE(true, comp(1218, 148));  // skillguide:1x1_button_selected_layer_26
    IF_SETHIDE(true, comp(1218, 28));  // skillguide:1x1_button_selected_layer_27
    IF_SETHIDE(true, comp(1218, 173));  // skillguide:1x1_button_selected_layer_28
    IF_SETHIDE(true, comp(1218, 16));  // skillguide:button_highlight
    IF_SETHIDE(true, comp(1218, 32));  // skillguide:button_highlight_1
    IF_SETHIDE(true, comp(1218, 40));  // skillguide:button_highlight_2
    IF_SETHIDE(true, comp(1218, 161));  // skillguide:button_highlight_3
    IF_SETHIDE(true, comp(1218, 217));  // skillguide:button_highlight_4
    IF_SETHIDE(true, comp(1218, 209));  // skillguide:button_highlight_5
    IF_SETHIDE(true, comp(1218, 72));  // skillguide:button_highlight_6
    IF_SETHIDE(true, comp(1218, 48));  // skillguide:button_highlight_7
    IF_SETHIDE(true, comp(1218, 56));  // skillguide:button_highlight_8
    IF_SETHIDE(true, comp(1218, 64));  // skillguide:button_highlight_9
    IF_SETHIDE(true, comp(1218, 80));  // skillguide:button_highlight_10
    IF_SETHIDE(true, comp(1218, 128));  // skillguide:button_highlight_11
    IF_SETHIDE(true, comp(1218, 112));  // skillguide:button_highlight_12
    IF_SETHIDE(true, comp(1218, 185));  // skillguide:button_highlight_13
    IF_SETHIDE(true, comp(1218, 233));  // skillguide:button_highlight_14
    IF_SETHIDE(true, comp(1218, 177));  // skillguide:button_highlight_15
    IF_SETHIDE(true, comp(1218, 104));  // skillguide:button_highlight_16
    IF_SETHIDE(true, comp(1218, 153));  // skillguide:button_highlight_17
    IF_SETHIDE(true, comp(1218, 120));  // skillguide:button_highlight_18
    IF_SETHIDE(true, comp(1218, 8));  // skillguide:button_highlight_19
    IF_SETHIDE(true, comp(1218, 193));  // skillguide:button_highlight_20
    IF_SETHIDE(true, comp(1218, 201));  // skillguide:button_highlight_21
    IF_SETHIDE(true, comp(1218, 96));  // skillguide:button_highlight_22
    IF_SETHIDE(true, comp(1218, 136));  // skillguide:button_highlight_23
    IF_SETHIDE(true, comp(1218, 225));  // skillguide:button_highlight_24
    IF_SETHIDE(true, comp(1218, 88));  // skillguide:button_highlight_25
    IF_SETHIDE(true, comp(1218, 144));  // skillguide:button_highlight_26
    IF_SETHIDE(true, comp(1218, 24));  // skillguide:button_highlight_27
    IF_SETHIDE(true, comp(1218, 169));  // skillguide:button_highlight_28
    switch (int0) {
        case 8: {
            IF_SETHIDE(false, comp(1218, 20));  // skillguide:1x1_button_selected_layer
            IF_SETHIDE(false, comp(1218, 16));  // skillguide:button_highlight
            break;
        }
        case 28: {
            IF_SETHIDE(false, comp(1218, 28));  // skillguide:1x1_button_selected_layer_27
            IF_SETHIDE(false, comp(1218, 24));  // skillguide:button_highlight_27
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1218, 36));  // skillguide:1x1_button_selected_layer_1
            IF_SETHIDE(false, comp(1218, 32));  // skillguide:button_highlight_1
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(1218, 44));  // skillguide:1x1_button_selected_layer_2
            IF_SETHIDE(false, comp(1218, 40));  // skillguide:button_highlight_2
            break;
        }
        case 22: {
            IF_SETHIDE(false, comp(1218, 52));  // skillguide:1x1_button_selected_layer_7
            IF_SETHIDE(false, comp(1218, 48));  // skillguide:button_highlight_7
            break;
        }
        case 16: {
            IF_SETHIDE(false, comp(1218, 60));  // skillguide:1x1_button_selected_layer_8
            IF_SETHIDE(false, comp(1218, 56));  // skillguide:button_highlight_8
            break;
        }
        case 11: {
            IF_SETHIDE(false, comp(1218, 69));  // skillguide:1x1_button_selected_layer_9
            IF_SETHIDE(false, comp(1218, 64));  // skillguide:button_highlight_9
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1218, 76));  // skillguide:1x1_button_selected_layer_6
            IF_SETHIDE(false, comp(1218, 72));  // skillguide:button_highlight_6
            break;
        }
        case 26: {
            IF_SETHIDE(false, comp(1218, 84));  // skillguide:1x1_button_selected_layer_10
            IF_SETHIDE(false, comp(1218, 80));  // skillguide:button_highlight_10
            break;
        }
        case 25: {
            IF_SETHIDE(false, comp(1218, 92));  // skillguide:1x1_button_selected_layer_25
            IF_SETHIDE(false, comp(1218, 88));  // skillguide:button_highlight_25
            break;
        }
        case 21: {
            IF_SETHIDE(false, comp(1218, 100));  // skillguide:1x1_button_selected_layer_22
            IF_SETHIDE(false, comp(1218, 96));  // skillguide:button_highlight_22
            break;
        }
        case 17: {
            IF_SETHIDE(false, comp(1218, 108));  // skillguide:1x1_button_selected_layer_16
            IF_SETHIDE(false, comp(1218, 104));  // skillguide:button_highlight_16
            break;
        }
        case 15: {
            IF_SETHIDE(false, comp(1218, 116));  // skillguide:1x1_button_selected_layer_12
            IF_SETHIDE(false, comp(1218, 112));  // skillguide:button_highlight_12
            break;
        }
        case 19: {
            IF_SETHIDE(false, comp(1218, 124));  // skillguide:1x1_button_selected_layer_18
            IF_SETHIDE(false, comp(1218, 120));  // skillguide:button_highlight_18
            break;
        }
        case 9: {
            IF_SETHIDE(false, comp(1218, 132));  // skillguide:1x1_button_selected_layer_11
            IF_SETHIDE(false, comp(1218, 128));  // skillguide:button_highlight_11
            break;
        }
        case 23: {
            IF_SETHIDE(false, comp(1218, 140));  // skillguide:1x1_button_selected_layer_23
            IF_SETHIDE(false, comp(1218, 136));  // skillguide:button_highlight_23
            break;
        }
        case 27: {
            IF_SETHIDE(false, comp(1218, 148));  // skillguide:1x1_button_selected_layer_26
            IF_SETHIDE(false, comp(1218, 144));  // skillguide:button_highlight_26
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1218, 157));  // skillguide:1x1_button_selected_layer_17
            IF_SETHIDE(false, comp(1218, 153));  // skillguide:button_highlight_17
            break;
        }
        case 13: {
            IF_SETHIDE(false, comp(1218, 165));  // skillguide:1x1_button_selected_layer_3
            IF_SETHIDE(false, comp(1218, 161));  // skillguide:button_highlight_3
            break;
        }
        case 29: {
            IF_SETHIDE(false, comp(1218, 173));  // skillguide:1x1_button_selected_layer_28
            IF_SETHIDE(false, comp(1218, 169));  // skillguide:button_highlight_28
            break;
        }
        case 7: {
            IF_SETHIDE(false, comp(1218, 181));  // skillguide:1x1_button_selected_layer_15
            IF_SETHIDE(false, comp(1218, 177));  // skillguide:button_highlight_15
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1218, 189));  // skillguide:1x1_button_selected_layer_13
            IF_SETHIDE(false, comp(1218, 185));  // skillguide:button_highlight_13
            break;
        }
        case 12: {
            IF_SETHIDE(false, comp(1218, 197));  // skillguide:1x1_button_selected_layer_20
            IF_SETHIDE(false, comp(1218, 193));  // skillguide:button_highlight_20
            break;
        }
        case 20: {
            IF_SETHIDE(false, comp(1218, 205));  // skillguide:1x1_button_selected_layer_21
            IF_SETHIDE(false, comp(1218, 201));  // skillguide:button_highlight_21
            break;
        }
        case 14: {
            IF_SETHIDE(false, comp(1218, 213));  // skillguide:1x1_button_selected_layer_5
            IF_SETHIDE(false, comp(1218, 209));  // skillguide:button_highlight_5
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1218, 221));  // skillguide:1x1_button_selected_layer_4
            IF_SETHIDE(false, comp(1218, 217));  // skillguide:button_highlight_4
            break;
        }
        case 24: {
            IF_SETHIDE(false, comp(1218, 229));  // skillguide:1x1_button_selected_layer_24
            IF_SETHIDE(false, comp(1218, 225));  // skillguide:button_highlight_24
            break;
        }
        case 10: {
            IF_SETHIDE(false, comp(1218, 237));  // skillguide:1x1_button_selected_layer_14
            IF_SETHIDE(false, comp(1218, 233));  // skillguide:button_highlight_14
            break;
        }
        case 18: {
            IF_SETHIDE(false, comp(1218, 12));  // skillguide:1x1_button_selected_layer_19
            IF_SETHIDE(false, comp(1218, 8));  // skillguide:button_highlight_19
            break;
        }
    };
    return;
}