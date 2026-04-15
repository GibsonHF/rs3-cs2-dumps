//
function script6052(int0: component): void {
    var int1 = 425;
    var int2 = SCALE(varplayer_679, 1000, 100);
    var int3 = SCALE(IF_GETWIDTH(int0), int1, 100);
    if ((int3 != int2)) {
        IF_SETONTIMER(callback(script6053, int0, 1, 1), int0);
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}