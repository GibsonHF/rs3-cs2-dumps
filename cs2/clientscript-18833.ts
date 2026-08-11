//
function script18833(): void {
    IF_SETMODELANIM(22646 as seq, comp(1282, 21));  // trh197_overlay:chest_1_model
    IF_SETMODELANIM(22646 as seq, comp(1282, 22));  // trh197_overlay:chest_2_model
    IF_SETMODELANIM(22646 as seq, comp(1282, 23));  // trh197_overlay:chest_3_model
    IF_SETONTIMER(callback(script18832, CLIENTCLOCK(), 84017173), comp(1282, 21));  // trh197_overlay:chest_1_model
    IF_SETONTIMER(callback(script18832, CLIENTCLOCK(), 84017174), comp(1282, 22));  // trh197_overlay:chest_2_model
    IF_SETONTIMER(callback(script18832, CLIENTCLOCK(), 84017175), comp(1282, 23));  // trh197_overlay:chest_3_model
    return;
}