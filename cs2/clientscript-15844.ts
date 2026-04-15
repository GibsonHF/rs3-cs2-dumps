//
function script15844(int0: unknown_int): void {
    if ((script6431() == true)) {
        IF_SETHIDE(false, comp(137, 1));
        IF_SETPOSITION(0, 0, 0, 0, comp(137, 67));
        IF_SETSIZE(0, 40, 1, 0, comp(137, 67));
        IF_SETPOSITION(0, 40, 0, 0, comp(137, 84));
        IF_SETSIZE(0, 40, 1, 1, comp(137, 84));
        IF_SETPOSITION(0, 0, 0, 2, comp(137, 69));
        IF_SETHIDE(false, comp(137, 68));
        IF_SETHIDE(false, comp(137, 85));
        IF_SETHIDE(true, comp(137, 74));
        IF_SETONOP(callback(script8513, 18), comp(137, 67));
        IF_SETOP(1, "Enter Message", 8978499);
        IF_CLEAROPS(8978514);
        IF_SETONOP(callback(), 8978514);
        IF_SETNOCLICKTHROUGH(0, 8978508);
        IF_SETNOCLICKTHROUGH(1, 8978499);
        script15881();
        IF_SETONTIMER(callback(script2704), 8978433);
        IF_SETTRANS(255, 8978434);
        IF_SETPARAM_INT(6839, varclient_2835, 8978487);
        if ((int0 == 1)) {
            script9292();
        };
    } else {
        IF_SETHIDE(true, comp(137, 1));
        IF_SETHIDE(true, comp(137, 68));
        IF_SETHIDE(true, comp(137, 85));
        IF_SETHIDE(true, comp(137, 70));
        IF_SETONTIMER(callback(), comp(137, 1));
    };
    return;
}