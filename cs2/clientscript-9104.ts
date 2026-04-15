//
function script9104(int0: unknown_int, int1: component, int2: component, int3: component, int4: component, int5: unknown_int, int6: component, int7: component, int8: component, int9: component): void {
    if ((IF_GETHIDE(int1) == true)) {
        IF_SETVFLIP(1, int0);
        IF_SETHIDE(false, int1);
        IF_SETHIDE(false, int2);
        IF_SETHIDE(false, int3);
        IF_SETHIDE(false, int4);
    } else {
        IF_SETVFLIP(0, int0);
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int2);
        IF_SETHIDE(true, int3);
        IF_SETHIDE(true, int4);
    };
    IF_SETVFLIP(0, int5);
    IF_SETHIDE(true, int6);
    IF_SETHIDE(true, int7);
    IF_SETHIDE(true, int8);
    IF_SETHIDE(true, int9);
    return;
}