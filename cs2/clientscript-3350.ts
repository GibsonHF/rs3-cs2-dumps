//
function script3350(): void {
    CC_DELETEALL(comp(1322, 6));  // minimenu:mobile_tooltip ?
    CC_DELETEALL(comp(1322, 7));  // minimenu:mobile_tooltip_text ?
    CC_DELETEALL(comp(1477, 909));  // toplevel_v2:tooltips_layer
    script8808();
    IF_SETSIZE(0, 0, 0, 0, comp(1322, 6));  // minimenu:mobile_tooltip ?
    return;
}