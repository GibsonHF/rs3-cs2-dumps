//
function script14378(int0: number): void {
    if (((int0 > 0) && (script5799(script14372(int0)) == 0))) {
        CANCEL_INTERFACE_DRAG();
        return;
    };
    script14379();
    if (((varclient_6678 + 10) > CLIENTCLOCK())) {
        return;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int3] = script14382();
    if (((int1 < 2) || (int1 == int0))) {
        script14385();
        return;
    };
    if ((varbitplayer_45192 == 1)) {
        IF_SETHIDE(false, comp(517, 172));  // bank:bank_tab_move_highlight_vertical
        IF_SETHIDE(true, comp(517, 183));  // bank:bank_tab_move_highlight_horizontal
        IF_SETPOSITION(0, int2, 0, 0, comp(517, 172));  // bank:bank_tab_move_highlight_vertical
        varclient_6678 = CLIENTCLOCK();
        if ((int3 == 1)) {
            IF_SETHIDE(false, comp(517, 181));  // bank:bank_tab_move_highlight_on_tab_vertical
            IF_SETHIDE(true, comp(517, 177));  // bank:bank_tab_move_highlight_between_tabs_shift_up
            IF_SETHIDE(true, comp(517, 173));  // bank:bank_tab_move_highlight_between_tabs_shift_down
        } else {
            IF_SETHIDE(true, comp(517, 181));  // bank:bank_tab_move_highlight_on_tab_vertical
            if ((int1 >= script5796())) {
                IF_SETHIDE(true, comp(517, 177));  // bank:bank_tab_move_highlight_between_tabs_shift_up
                IF_SETHIDE(false, comp(517, 173));  // bank:bank_tab_move_highlight_between_tabs_shift_down
            } else {
                IF_SETHIDE(false, comp(517, 177));  // bank:bank_tab_move_highlight_between_tabs_shift_up
                IF_SETHIDE(true, comp(517, 173));  // bank:bank_tab_move_highlight_between_tabs_shift_down
            };
        };
    } else {
        IF_SETHIDE(true, comp(517, 172));  // bank:bank_tab_move_highlight_vertical
        IF_SETHIDE(false, comp(517, 183));  // bank:bank_tab_move_highlight_horizontal
        IF_SETPOSITION(int2, 0, 0, 0, comp(517, 183));  // bank:bank_tab_move_highlight_horizontal
        varclient_6678 = CLIENTCLOCK();
        IF_SETHIDE(false, comp(517, 183));  // bank:bank_tab_move_highlight_horizontal
        if ((int3 == 1)) {
            IF_SETHIDE(false, comp(517, 192));  // bank:bank_tab_move_highlight_on_tab_horizontal
            IF_SETHIDE(true, comp(517, 184));  // bank:bank_tab_move_highlight_between_tabs_shift_right
            IF_SETHIDE(true, comp(517, 188));  // bank:bank_tab_move_highlight_between_tabs_shift_left
        } else {
            IF_SETHIDE(true, comp(517, 192));  // bank:bank_tab_move_highlight_on_tab_horizontal
            if ((int1 >= script5796())) {
                IF_SETHIDE(true, comp(517, 184));  // bank:bank_tab_move_highlight_between_tabs_shift_right
                IF_SETHIDE(false, comp(517, 188));  // bank:bank_tab_move_highlight_between_tabs_shift_left
            } else {
                IF_SETHIDE(false, comp(517, 184));  // bank:bank_tab_move_highlight_between_tabs_shift_right
                IF_SETHIDE(true, comp(517, 188));  // bank:bank_tab_move_highlight_between_tabs_shift_left
            };
        };
    };
    return;
}