//
function script15844(int0: number): void {
    if ((script6431() == 1)) {
        IF_SETHIDE(0, 8978433);
        IF_SETPOSITION(0, 0, 0, 0, 8978499);
        IF_SETSIZE(0, 40, 1, 0, 8978499);
        IF_SETPOSITION(0, 40, 0, 0, 8978516);
        IF_SETSIZE(0, 40, 1, 1, 8978516);
        IF_SETPOSITION(0, 0, 0, 2, 8978501);
        IF_SETHIDE(0, 8978500);
        IF_SETHIDE(0, 8978517);
        IF_SETHIDE(1, 8978506);
        IF_SETONOP(callback(script8513, 18), 8978499);
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
        IF_SETHIDE(1, 8978433);
        IF_SETHIDE(1, 8978500);
        IF_SETHIDE(1, 8978517);
        IF_SETHIDE(1, 8978502);
        IF_SETONTIMER(callback(), 8978433);
    };
    return;
}