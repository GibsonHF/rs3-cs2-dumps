//[clientscript,worldmap_op]
function script2053(int0: unknown_int, int1: unknown_int, int2: unknown_int): void {
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script2054, (CLIENTCLOCK() + 3), int1, int2), int1);
    } else if ((int0 == 2)) {
        script11281((33 + 1), -1 as coordgrid);
    };
    return;
}