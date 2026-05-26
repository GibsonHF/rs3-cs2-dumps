//
function script5191(int0: number, int1: number): void {
    IF_SETSCROLLPOS((IF_GETSCROLLX(73531452) + int1), 0, 73531452);
    if ((((int1 < 0) && (IF_GETSCROLLX(73531452) <= int0)) || ((int1 > 0) && (IF_GETSCROLLX(73531452) >= int0)))) {
        IF_SETSCROLLPOS(int0, 0, 73531452);
        IF_SETONTIMER(callback(), 73531452);
        IF_SETHIDE(1, 73531453);
    };
    return;
}