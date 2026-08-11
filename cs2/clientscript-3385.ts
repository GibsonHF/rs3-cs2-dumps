//[proc,firstrun]
function script3385(): void {
    IF_OPENSUBCLIENT(comp(744, 359), 976);  // loginscreen:tooltips_layer
    script3384(3);
    IF_SETONTIMER(callback(script15838, -1, -1, 0), comp(976, 5));  // options_firstrun:inner
    IF_SETONRESIZE(callback(script11693), comp(976, 5));  // options_firstrun:inner
    script15836();
    return;
}