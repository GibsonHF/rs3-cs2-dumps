//
function script4470(int0: component, int1: component): void {
    if ((script4468() == 1)) {
        IF_SETHIDE(false, int0);
        IF_SETHIDE(true, int1);
        return;
    };
    IF_SETHIDE(false, int1);
    return;
}