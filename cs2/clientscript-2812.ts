//
function script2812(int0: int, int1: component): void {
    var int2 = IF_GETTRANS(int1);
    var int3 = MIN(MAX((int2 + (int0 * 1)), 225), 255);
    if (((int3 == 225) || (int3 == 255))) {
        IF_SETONTIMER(callback(script2812, (0 - int0), int1), int1);
    };
    IF_SETTRANS(int3, int1);
    return;
}