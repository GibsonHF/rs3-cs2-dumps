//
function script14838(): void {
    IF_SETONTIMER(callback(), comp(685, 74));  // arch_journal:restoration_filter_search_layer
    if ((strcmp(varclient_2250, "") == 0)) {
        script14839();
    } else {
        IF_SETTEXT(ESCAPE(varclient_2250), comp(685, 100));  // arch_journal:restoration_filter_search_input_display
        IF_SETHIDE(false, comp(685, 103));  // arch_journal:restoration_filter_search_input_clickout
        IF_SETHIDE(false, comp(685, 102));  // arch_journal:restoration_filter_search_cancel
        IF_SETONCLICK(callback(script14837), comp(685, 103));  // arch_journal:restoration_filter_search_input_clickout
        script14829(varclient_2250);
        script13965(44892256, -1, 28549);
    };
    return;
}