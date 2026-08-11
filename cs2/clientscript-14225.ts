//
function script14225(): void {
    CC_DELETEALL(comp(1322, 17));  // minimenu:submenu_build_layer ?
    CC_DELETEALL(comp(1322, 13));  // minimenu:submenu_background_layer ?
    IF_SETHIDE(true, comp(1322, 3));  // minimenu:submenu_blocking_layer ?
    return;
}