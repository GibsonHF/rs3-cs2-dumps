//
function script16078(int0: number): void {
    if ((script13749() == 0)) {
        return;
    };
    if (((script20055() == 1) || (script10946() == 1))) {
        IF_SETHIDE(1, int0);
        return;
    };
    var int1 = (IF_GETX(53346309) + IF_GETWIDTH(53346309));
    var int2 = IF_GETX(int0);
    if ((int1 >= int2)) {
        IF_SETSIZE(51, 51, 0, 0, 53346322);
        IF_SETPOSITION(0, 0, 1, 1, 53346323);
        IF_SETPOSITION(71, 0, 2, 1, int0);
    };
    return;
}