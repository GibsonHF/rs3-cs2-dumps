//
function script17161(int0: boolean): void {
    IF_SETHIDE(int0, comp(1082, 43));
    script19920(int0, 70909995);
    if ((IF_GETHIDE(comp(1082, 35)) == false)) {
        return;
    };
    if ((int0 == false)) {
        IF_SETHIDE(true, comp(1082, 46));
        IF_SETHIDE(true, comp(1082, 44));
        IF_SETHIDE(true, comp(1082, 45));
    } else {
        IF_SETHIDE(false, comp(1082, 46));
        if ((script20104() == 1)) {
            IF_SETHIDE(false, comp(1082, 44));
        } else {
            IF_SETHIDE(false, comp(1082, 45));
        };
    };
    return;
}