//[clientscript,stats_mouseover]
function script545(int0: component, int1: int, int2: stat, int3: component, int4: unknown_int): void {
    script8808();
    if ((int4 == 1)) {
        varclient_80 = script11864(int2);
    } else {
        varclient_80 = script11860(int2);
    };
    script547(int0, int1, int2, int4);
    var int5 = (CLIENTCLOCK() + 2);
    IF_SETONTIMER(callback(script1652, int3, int5), int3);
    return;
}