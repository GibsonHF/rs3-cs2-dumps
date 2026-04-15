//
function script15081(int0: int): void {
    var int1 = 0;
    while ((++int1 <= 12)) {
        if ((script14444(int1) == int0)) {
            IF_SETHIDE(false, enum_getvalue(0, 9, 6492 as cs2enum, int1));
        } else {
            IF_SETHIDE(true, enum_getvalue(0, 9, 6492 as cs2enum, int1));
        };
    };
    return;
}