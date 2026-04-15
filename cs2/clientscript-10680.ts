//
function script10680(int0: int, int1: struct, int2: component, int3: component, int4: component, int5: component): void {
    var string0 = "";
    if ((GENDER() == 0)) {
        IF_SETHIDE(true, int5);
        IF_SETHIDE(false, int4);
    } else {
        IF_SETHIDE(true, int4);
        IF_SETHIDE(false, int5);
    };
    if ((int0 == 1)) {
        IF_SETTEXT("Owned", int2);
    } else {
        IF_SETTEXT(`Cost: ${TOSTRING_LOCALISED(struct_getparam(int1, 4600), 1)}`, int2);
    };
    IF_SETONOP(callback(script10681, int0, int1), int3);
    return;
}