//
function script16206(int0: number): void {
    if ((int0 != -1)) {
        if ((dbrow_getfield(int0, 499984, 0) == 1)) {
            IF_SETHIDE(false, comp(891, 14));
        } else {
            IF_SETHIDE(true, comp(891, 14));
        };
    } else {
        IF_SETHIDE(true, comp(891, 14));
    };
    return;
}