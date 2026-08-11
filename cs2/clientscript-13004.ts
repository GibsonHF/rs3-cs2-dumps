//
function script13004(): void {
    var int0 = 0;
    IF_SETHIDE(true, comp(1098, 67));  // clan_noticeboard_event_edit:event_button_disabled_layer_1
    IF_SETHIDE(true, comp(1098, 75));  // clan_noticeboard_event_edit:event_button_disabled_layer_2
    IF_SETHIDE(true, comp(1098, 83));  // clan_noticeboard_event_edit:event_button_disabled_layer_3
    IF_SETHIDE(true, comp(1098, 91));  // clan_noticeboard_event_edit:event_button_disabled_layer_4
    IF_SETHIDE(true, comp(1098, 99));  // clan_noticeboard_event_edit:event_button_disabled_layer_5
    IF_SETHIDE(true, comp(1098, 107));  // clan_noticeboard_event_edit:event_button_disabled_layer_6
    IF_SETHIDE(true, comp(1098, 115));  // clan_noticeboard_event_edit:event_button_disabled_layer_7
    IF_SETHIDE(true, comp(1098, 123));  // clan_noticeboard_event_edit:event_button_disabled_layer_8
    switch (varplayer_2047) {
        case 1: {
            IF_SETHIDE(false, comp(1098, 67));  // clan_noticeboard_event_edit:event_button_disabled_layer_1
            int0 = varbitplayer_8946;
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1098, 75));  // clan_noticeboard_event_edit:event_button_disabled_layer_2
            int0 = varbitplayer_8947;
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1098, 83));  // clan_noticeboard_event_edit:event_button_disabled_layer_3
            int0 = varbitplayer_8948;
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1098, 91));  // clan_noticeboard_event_edit:event_button_disabled_layer_4
            int0 = varbitplayer_8949;
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1098, 99));  // clan_noticeboard_event_edit:event_button_disabled_layer_5
            int0 = varbitplayer_8950;
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(1098, 107));  // clan_noticeboard_event_edit:event_button_disabled_layer_6
            int0 = varbitplayer_8951;
            break;
        }
        case 7: {
            IF_SETHIDE(false, comp(1098, 115));  // clan_noticeboard_event_edit:event_button_disabled_layer_7
            int0 = varbitplayer_8952;
            break;
        }
        case 8: {
            IF_SETHIDE(false, comp(1098, 123));  // clan_noticeboard_event_edit:event_button_disabled_layer_8
            int0 = varbitplayer_8953;
            break;
        }
    };
    IF_SETHIDE(script734(int0), comp(1098, 170));  // clan_noticeboard_event_edit:mandatory_checkbox_deselected_layer
    IF_SETTEXT("All events relative to game time", comp(1098, 54));  // clan_noticeboard_event_edit:time_text
    return;
}