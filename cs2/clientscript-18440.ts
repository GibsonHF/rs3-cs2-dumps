//
function script18440(int0: number): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETHIDE(false, comp(1280, 3));  // buff_select_event:event_title_text_1
            IF_SETHIDE(false, comp(1280, 4));  // buff_select_event:event_title_text_2
            IF_SETHIDE(true, comp(1280, 5));  // buff_select_event:event_title_text
            IF_SETTEXT("Birthday Buff", comp(1280, 3));  // buff_select_event:event_title_text_1
            IF_SETTEXT("Bonanza", comp(1280, 4));  // buff_select_event:event_title_text_2
            break;
        }
        default: {
            IF_SETHIDE(true, comp(1280, 3));  // buff_select_event:event_title_text_1
            IF_SETHIDE(true, comp(1280, 4));  // buff_select_event:event_title_text_2
            IF_SETHIDE(false, comp(1280, 5));  // buff_select_event:event_title_text
            IF_SETTEXT(struct_getparam(int0, 6135), comp(1280, 5));  // buff_select_event:event_title_text
            if ((MAP_LANG() == 1)) {
                IF_SETTEXTFONT(58 as fontmetrics, comp(1280, 5));  // buff_select_event:event_title_text
            } else {
                script16925(83886085, 16355, 3, 28, 14);
            };
            break;
        }
    };
    return;
}