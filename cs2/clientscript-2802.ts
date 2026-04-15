//[clientscript,fade2_timer]
function script2802(int0: int, int1: component): void {
    var int2 = IF_GETTRANS(int1);
    var int3 = MIN(MAX((int2 + int0), 0), 255);
    IF_SETTRANS(int3, int1);
    if (((int3 == 0) || (int3 == 255))) {
        IF_SETONTIMER(callback(), int1);
        varclient_3694 = 0;
    };
    return;
}