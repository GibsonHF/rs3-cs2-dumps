//
function script15621(): void {
    var int0 = MIN(0, (IF_GETX(59375770) + 10));
    var int1 = MAX(180, (IF_GETTRANS(59375769) - 8));
    IF_SETPOSITION(int0, 0, 0, 2, 59375770);
    IF_SETTRANS(int1, 59375769);
    if ((int0 >= 0)) {
        IF_SETONTIMER(callback(), 59375621);
        IF_SETTRANS(180, 59375769);
    };
    return;
}