//
function script15623(): void {
    var int0 = (0 - IF_GETWIDTH(53411840));
    var int1 = MAX(int0, (IF_GETX(59375770) - 10));
    var int2 = MIN(255, (IF_GETTRANS(59375769) + 8));
    IF_SETPOSITION(int1, 0, 0, 2, 59375770);
    IF_SETTRANS(int2, 59375769);
    if ((int1 <= int0)) {
        IF_SETONTIMER(callback(), 59375621);
        IF_SETHIDE(1, 59375768);
        IF_SETTRANS(255, 59375769);
    };
    return;
}