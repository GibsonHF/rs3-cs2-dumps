//
function script12834(int0: number, int1: number, int2: number, int3: number): void {
    if ((IF_GETHIDE(comp(1322, 1)) == false)) {  // minimenu:clickout_and_blocking_layer ?
        return;
    };
    IF_SETHIDE(false, comp(1322, 1));  // minimenu:clickout_and_blocking_layer ?
    if (((script6431() == 1) && (IF_GETHIDE(comp(276, 18)) == false))) {  // toplevel_v2_mobile:inv_drag_options_window
        IF_SETHIDE(true, comp(276, 18));  // toplevel_v2_mobile:inv_drag_options_window
    };
    script13392(int0, int1, int2, int3);
    varclient_6539 = false;
    if ((script6431() == 1)) {
        ACTIVECLANCHANNEL_FIND_AFFINED(1);
    };
    return;
}