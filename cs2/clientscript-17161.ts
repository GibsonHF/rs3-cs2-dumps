//
function script17161(int0: number): void {
    IF_SETHIDE(int0, 70909995);
    script19920(int0, 70909995);
    if ((IF_GETHIDE(70909987) == 0)) {
        return;
    };
    if ((int0 == 0)) {
        IF_SETHIDE(1, 70909998);
        IF_SETHIDE(1, 70909996);
        IF_SETHIDE(1, 70909997);
    } else {
        IF_SETHIDE(0, 70909998);
        if ((script20104() == 1)) {
            IF_SETHIDE(0, 70909996);
        } else {
            IF_SETHIDE(0, 70909997);
        };
    };
    return;
}