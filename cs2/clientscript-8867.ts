//
function script8867(int0: number): void {
    var int1 = struct_getparam(21300, 3503);
    var int2 = struct_getparam(21300, 3505);
    var int3 = comp(1477, 739);
    if ((int0 == 1)) {
        if ((IF_HASSUB(int2) == 0)) {
            return;
        };
        IF_SETHIDE(0, int1);
        IF_SETHIDE(0, int2);
        IF_SETHIDE(1, int3);
    } else if ((int0 == 2)) {
        if ((IF_HASSUB(int3) == 0)) {
            return;
        };
        IF_SETHIDE(0, int1);
        IF_SETHIDE(1, int2);
        IF_SETHIDE(0, int3);
    };
    return;
}