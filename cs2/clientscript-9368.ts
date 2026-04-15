//
function script9368(int0: int, int1: unknown_int, int2: component, int3: component, int4: component, int5: component): void {
    IF_SETHIDE(true, int2);
    IF_SETHIDE(true, int3);
    IF_SETHIDE(true, int4);
    IF_SETHIDE(true, int5);
    if ((int1 == 1)) {
        IF_CLEAROPS(IF_GETLAYER(int4));
        if ((int0 == 1)) {
            IF_SETHIDE(false, int4);
        } else {
            IF_SETHIDE(false, int5);
        };
    } else {
        IF_SETOP(1, "Toggle", IF_GETLAYER(int4));
        if ((int0 == 1)) {
            IF_SETHIDE(false, int2);
        } else {
            IF_SETHIDE(false, int3);
        };
    };
    return;
}