//
function script12147(int0: component, int1: int): void {
    var int2 = (IF_GETY(int0) - 5);
    if ((int2 <= int1)) {
        int2 = int1;
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(0, 111935509);
    };
    IF_SETPOSITION(IF_GETX(int0), int2, 0, 0, int0);
    return;
}