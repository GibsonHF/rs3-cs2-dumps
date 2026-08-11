//
function script2420(): void {
    IF_SETHIDE(true, comp(674, 16));  // peng_rak_engine_overlay:lever_down
    IF_SETHIDE(false, comp(674, 17));  // peng_rak_engine_overlay:lever_up
    IF_SETMODELANIM(-1 as seq, comp(674, 17));  // peng_rak_engine_overlay:lever_up
    IF_SETMODELANIM(-1 as seq, comp(674, 7));  // peng_rak_engine_overlay:gauge
    IF_SETHIDE(false, comp(674, 8));  // peng_rak_engine_overlay:wirebox_cover
    IF_SETMODEL(46967 as model, comp(674, 4));  // peng_rak_engine_overlay:wirebox
    IF_SETHIDE(true, comp(674, 3));  // peng_rak_engine_overlay:bellows_demo
    IF_SETMODELANIM(11762 as seq, comp(674, 7));  // peng_rak_engine_overlay:gauge
    varclient_737 = 0;
    return;
}