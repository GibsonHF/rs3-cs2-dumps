//
function script14446(int0: boolean): void {
    if ((script4157() != 5)) {
        return;
    };
    if ((int0 == true)) {
        IF_SETHIDE(false, comp(662, 65));
        IF_SETHIDE(true, comp(662, 67));
        IF_SETHIDE(true, comp(662, 68));
        IF_SETSIZE(16, 26, 1, 0, comp(662, 66));
        if ((varbitplayer_6048 == 101)) {
            IF_SETPOSITION(0, 58, 0, 2, comp(662, 65));
        } else {
            IF_SETPOSITION(0, 92, 0, 2, comp(662, 65));
        };
        script11683(comp(662, 66));
    } else {
        IF_SETHIDE(true, comp(662, 65));
    };
    return;
}