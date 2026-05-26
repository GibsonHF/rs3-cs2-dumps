//
function script13735(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var string0 = "";
    if ((GENDER() == 0)) {
        IF_SETHIDE(1, int5);
        IF_SETHIDE(0, int4);
    } else {
        IF_SETHIDE(1, int4);
        IF_SETHIDE(0, int5);
    };
    if ((int0 == 1)) {
        IF_SETCOLOUR(65280, int2);
        IF_SETTEXT("Owned", int2);
    } else {
        IF_SETTEXT(`Cost: ${TOSTRING_LOCALISED(struct_getparam(int1, 5546), 1)}`, int2);
    };
    IF_SETONOP(callback(script13736, int0, int1), int3);
    return;
}