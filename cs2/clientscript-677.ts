//[clientscript,letter_lj_setscrollpos]
function script677(int0: number): void {
    if ((int0 <= 9)) {
        IF_SETSCROLLSIZE(358, 225, comp(156, 2));  // letter_lj:lj_layer1
        IF_SETHIDE(true, comp(156, 1));  // letter_lj:lj_scroll_bar
    } else {
        IF_SETHIDE(false, comp(156, 1));  // letter_lj:lj_scroll_bar
        IF_SETSCROLLSIZE(358, ((int0 * 20) + 30), comp(156, 2));  // letter_lj:lj_layer1
        script72(10223617, 10223618, 0);
    };
    return;
}