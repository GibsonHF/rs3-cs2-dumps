//
function script2928(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    IF_SETHIDE(true, comp(1477, 54));
    if ((script6431() == true)) {
        IF_SETPOSITION(5, 5, 0, 0, comp(1477, 60));
        IF_SETSIZE(10, 10, 1, 1, comp(1477, 60));
        IF_SETPOSITION(5, 5, 0, 0, comp(1477, 565));
        IF_SETSIZE(10, 10, 1, 1, comp(1477, 565));
        IF_SETPOSITION(5, 5, 0, 0, comp(276, 8));
        IF_SETSIZE(10, 10, 1, 1, comp(276, 8));
        IF_SETPOSITION(5, 5, 0, 0, comp(1477, 697));
        IF_SETSIZE(10, 10, 1, 1, comp(1477, 697));
        IF_SETHIDE(false, comp(1477, 54));
        [int0, int1, int2, int3] = script2956();
        IF_SETSIZE(int0, 0, 0, 1, comp(1477, 55));
        IF_SETSIZE(int2, 0, 0, 1, comp(1477, 57));
        IF_SETSIZE(0, int1, 1, 0, comp(1477, 58));
        IF_SETSIZE(0, int3, 1, 0, comp(1477, 59));
        script9538();
        script15547(int0, int1, int2, int3);
    };
    return;
}