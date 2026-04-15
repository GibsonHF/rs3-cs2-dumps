//
function script8236(int0: unknown_int, int1: component, int2: component, int3: component, int4: component): void {
    if ((int0 == 1)) {
        IF_SETHIDE(false, int1);
        IF_SETHIDE(true, int2);
        IF_SETHIDE(true, int3);
        IF_SETHIDE(false, int4);
    } else {
        IF_SETHIDE(true, int1);
        IF_SETHIDE(false, int2);
        IF_SETHIDE(false, int3);
        IF_SETHIDE(true, int4);
    };
    return;
}