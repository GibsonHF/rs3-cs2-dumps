//
function script6878(): void {
    var int0 = 13783;
    var int1 = 13782;
    if ((varbitplayer_688 == 0)) {
        IF_SETTRANS(160, 85918206);
        IF_SETONMOUSEOVER(callback(), 85918202);
        IF_SETONMOUSELEAVE(callback(), 85918202);
    } else {
        IF_SETTRANS(0, 85918206);
        IF_SETONMOUSEOVER(callback(script44, -2147483645, int0), 85918202);
        IF_SETONMOUSELEAVE(callback(script44, -2147483645, int1), 85918202);
    };
    return;
}