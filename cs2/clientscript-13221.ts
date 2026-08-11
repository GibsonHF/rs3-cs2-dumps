//
function script13221(): void {
    IF_SETONTIMER(callback(), comp(1843, 238));  // mtxmgt_store:aif_text_input
    if ((IF_FIND(comp(1843, 183)) == 1)) {  // mtxmgt_store:items_layer
        if ((strcmp(varclient_2250, "") == 0)) {
            IF_SETTEXT("Search...", comp(1843, 244));  // mtxmgt_store:text_input_display
            IF_SETCOLOUR(script10495(3), comp(1843, 244));  // mtxmgt_store:text_input_display
            IF_SETHIDE(true, comp(1843, 246));  // mtxmgt_store:filter_cancel
        } else {
            IF_SETTEXT(ESCAPE(varclient_2250), comp(1843, 244));  // mtxmgt_store:text_input_display
            IF_SETHIDE(false, comp(1843, 247));  // mtxmgt_store:text_input_clickout
            IF_SETHIDE(false, comp(1843, 246));  // mtxmgt_store:filter_cancel
            IF_SETONCLICK(callback(script13218), comp(1843, 247));  // mtxmgt_store:text_input_clickout
        };
        script13170(varclient_2250, cc_getparam(6362), cc_getparam(6364), cc_getparam(6365), cc_getparam(6366), cc_getparam(6367), cc_getparam(6368), cc_getparam(6369), cc_getparam(6370), cc_getparam(6371), cc_getparam(6372));
        script7796(120783088, script9984(28549, 1));
    };
    return;
}