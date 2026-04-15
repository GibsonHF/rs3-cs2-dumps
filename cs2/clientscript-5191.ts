//
function script5191(int0: int, int1: int): void {
    IF_SETSCROLLPOS((IF_GETSCROLLX(comp(1122, 60)) + int1), 0, comp(1122, 60));
    if ((((int1 < 0) && (IF_GETSCROLLX(comp(1122, 60)) <= int0)) || ((int1 > 0) && (IF_GETSCROLLX(comp(1122, 60)) >= int0)))) {
        IF_SETSCROLLPOS(int0, 0, comp(1122, 60));
        IF_SETONTIMER(callback(), comp(1122, 60));
        IF_SETHIDE(1, 73531453);
    };
    return;
}