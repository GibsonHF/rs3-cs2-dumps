//
function script15081(int0: number): void {
    var int1 = 0;
    while ((++int1 <= 12)) {
        if ((script14444(int1) == int0)) {
            IF_SETHIDE(0, enum_getvalue(0, 9, 6492 as cs2enum, int1));
        } else {
            IF_SETHIDE(1, enum_getvalue(0, 9, 6492 as cs2enum, int1));
        };
    };
    return;
}