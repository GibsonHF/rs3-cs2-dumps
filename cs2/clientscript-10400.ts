//
function script10400(int0: int, int1: component, int2: component): void {
    script8411(int0, 0);
    if ((script6431() == true)) {
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int2);
    } else {
        IF_SETHIDE(false, int1);
        IF_SETHIDE(false, int2);
    };
    return;
}