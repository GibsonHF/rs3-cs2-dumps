//
function script6304(int0: int, int1: int): void {
    var int1 = (int1 + 1);
    var int2 = script7978(1430, int0);
    IF_SETONTIMER(callback(script6304, int0, int1), int2);
    var int3 = 0;
    if ((int1 < 25)) {
        int3 = 150;
    } else if ((int1 < 50)) {
        int3 = 255;
    } else if ((int1 < 75)) {
        int3 = 150;
    } else if ((int1 < 100)) {
        int3 = 255;
    } else if ((int1 < 125)) {
        int3 = 150;
    } else {
        int3 = 255;
        IF_SETONTIMER(callback(), int2);
    };
    IF_SETTRANS(int3, int2);
    if ((script6354(comp(1436, 0)) == 1)) {
        IF_SETTRANS(int3, script7978(1436, int0));
    };
    if ((script6354(comp(1945, 215)) == 1)) {
        IF_SETTRANS(int3, script7978(1945, int0));
    };
    if ((script6354(comp(1946, 3)) == 1)) {
        IF_SETTRANS(int3, script7978(1946, int0));
    };
    return;
}