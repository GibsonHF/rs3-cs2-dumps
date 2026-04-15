//
function script6049(int0: component, int1: component): void {
    var int2 = 425;
    var int3 = SCALE(varplayer_679, 1000, 100);
    var int4 = SCALE(IF_GETWIDTH(int0), int2, 100);
    var int5 = SCALE(IF_GETWIDTH(int1), int2, 100);
    var int6 = (int4 + int5);
    if ((int6 != int3)) {
        IF_SETONTIMER(callback(script6050, int0, int1, 1, 1), int0);
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}