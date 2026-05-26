//
function script9368(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    IF_SETHIDE(1, int2);
    IF_SETHIDE(1, int3);
    IF_SETHIDE(1, int4);
    IF_SETHIDE(1, int5);
    if ((int1 == 1)) {
        IF_CLEAROPS(IF_GETLAYER(int4));
        if ((int0 == 1)) {
            IF_SETHIDE(0, int4);
        } else {
            IF_SETHIDE(0, int5);
        };
    } else {
        IF_SETOP(1, "Toggle", IF_GETLAYER(int4));
        if ((int0 == 1)) {
            IF_SETHIDE(0, int2);
        } else {
            IF_SETHIDE(0, int3);
        };
    };
    return;
}