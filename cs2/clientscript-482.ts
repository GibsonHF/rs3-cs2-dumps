//
function script482(int0: component, int1: component): void {
    if ((IF_GETHIDE(int0) == true)) {
        IF_SETHIDE(false, int0);
        IF_SETHIDE(true, int1);
    } else {
        IF_SETHIDE(true, int0);
        IF_SETHIDE(false, int1);
    };
    return;
}