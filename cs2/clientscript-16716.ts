//
function script16716(): void {
    IF_SETMODELANIM(22646 as seq, comp(1014, 79));  // trh183_overlay:chest_1_model
    IF_SETMODELANIM(22646 as seq, comp(1014, 80));  // trh183_overlay:chest_2_model
    IF_SETMODELANIM(22646 as seq, comp(1014, 81));  // trh183_overlay:chest_3_model
    IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), 1, 66453583, 250), comp(1014, 79));  // trh183_overlay:chest_1_model
    IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), 2, 66453584, 250), comp(1014, 80));  // trh183_overlay:chest_2_model
    IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), 3, 66453585, 250), comp(1014, 81));  // trh183_overlay:chest_3_model
    return;
}