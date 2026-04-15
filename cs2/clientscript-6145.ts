//
function script6145(int0: component, int1: int, int2: int, int3: int, int4: int): void {
    if ((++int3 < 100)) {
        IF_SETONTIMER(callback(script6145, -2147483645, int1, int2, int3, int4), int0);
    };
    if ((int3 < 0)) {
        return;
    };
    var int5 = 25;
    var int6 = SCALE(int4, 6, int5);
    int6 = SCALE(int3, 100, int6);
    var int7 = RANDOM(int6);
    var int8 = RANDOM(int6);
    if ((RANDOM(2) == 0)) {
        int7 = (0 - int7);
    };
    if ((RANDOM(2) == 0)) {
        int8 = (0 - int8);
    };
    if ((CC_FIND(int0, 0) == 1)) {
        CC_SETPOSITION((int1 + int7), (int2 + int8), 0, 0);
    };
    return;
}