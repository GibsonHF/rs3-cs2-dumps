//
function script14225(): void {
    CC_DELETEALL(comp(1322, 17));  // minimenu:mobile_tooltip_window_size ?
    CC_DELETEALL(comp(1322, 13));  // minimenu:menu_scroll_bar_layer ?
    IF_SETHIDE(true, comp(1322, 3));  // minimenu:menu_blocking_layer ?
    return;
}