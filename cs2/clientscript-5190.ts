//
function script5190(int0: number, int1: number): void {
    var int2 = 25;
    var int3 = (IF_GETWIDTH(73531433) * int0);
    if ((int1 == 0)) {
        IF_SETSCROLLPOS(int3, 0, 73531452);
        IF_SETHIDE(1, 73531453);
        return;
    };
    IF_SETHIDE(0, 73531453);
    if ((int3 < IF_GETSCROLLX(73531452))) {
        int2 = (0 - int2);
    };
    IF_SETONTIMER(callback(script5191, int3, int2), 73531452);
    return;
}