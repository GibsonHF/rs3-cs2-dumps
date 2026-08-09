//[proc,firstrun]
function script3385(): void {
    IF_OPENSUBCLIENT(comp(744, 359), 976);
    script3384(3);
    IF_SETONTIMER(callback(script15838, -1, -1, 0), comp(976, 5));
    IF_SETONRESIZE(callback(script11693), comp(976, 5));
    script15836();
    return;
}