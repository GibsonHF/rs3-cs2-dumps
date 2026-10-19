//
function script14225(): void {
    CC_DELETEALL(comp(1322, 16));  // minimenu:submenu_build_layer ?
    CC_DELETEALL(comp(1322, 12));  // minimenu:submenu_background_layer ?
    IF_SETHIDE(true, comp(1322, 2));  // minimenu:submenu_blocking_layer ?
    return;
}