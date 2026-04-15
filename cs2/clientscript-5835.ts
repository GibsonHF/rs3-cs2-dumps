//
function script5835(int0: int): void {
    if ((IF_GETHIDE(comp(1043, 27)) == false)) {
        return;
    };
    IF_SETHIDE(true, comp(1043, 22));
    IF_SETHIDE(true, comp(1043, 43));
    IF_SETHIDE(true, comp(1043, 25));
    IF_SETHIDE(true, comp(1043, 50));
    IF_SETHIDE(false, comp(1043, 19));
    if ((int0 == 0)) {
        IF_SETHIDE(false, comp(1043, 22));
        IF_SETHIDE(false, comp(1043, 43));
        IF_SETHIDE(true, comp(1043, 19));
    } else if (((int0 == 1) || (int0 == 2))) {
        IF_SETHIDE(false, comp(1043, 25));
        IF_SETHIDE(false, comp(1043, 50));
    };
    return;
}