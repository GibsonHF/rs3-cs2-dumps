//[clientscript,worldmap_op]
function script2053(int0: number, int1: number, int2: number): void {
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script2054, (CLIENTCLOCK() + 3), int1, int2), int1);
    } else if ((int0 == 2)) {
        script11281((33 + 1), -1);
    };
    return;
}