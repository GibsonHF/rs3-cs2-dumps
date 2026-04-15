//
function script6333(int0: component): void {
    var int1 = MAX((IF_GETTRANS(int0) - 40), 50);
    IF_SETTRANS(int1, int0);
    if ((int1 <= 50)) {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}