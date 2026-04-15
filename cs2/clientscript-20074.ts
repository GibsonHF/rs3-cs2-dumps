//
function script20074(int0: int, int1: int, int2: component, int3: component): void {
    var int4 = MAX(1, IF_GETWIDTH(int2));
    var int5 = MAX(1, IF_GETHEIGHT(int2));
    var int0 = MAX(1, int0);
    var int1 = MAX(1, int1);
    int0 = MIN(int0, (int4 - IF_GETWIDTH(int3)));
    int1 = MIN(int1, (int5 - IF_GETHEIGHT(int3)));
    varclient_8314 = int0;
    varclient_8315 = int1;
    IF_SETPOSITION(SCALE(int0, int4, 16384), SCALE(int1, int5, 16384), 3, 3, int3);
    return;
}