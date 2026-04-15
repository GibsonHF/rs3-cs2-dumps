//
function script4712(): void {
    var int0 = 134;
    var int1 = 70;
    var int2 = 6;
    var int3 = 0;
    var int4 = RANDOM(6);
    while ((int3 < int4)) {
        if ((MODULO(++int3, 2) == 1)) {
            int0 = (int0 + int1);
            int1 = (int0 - int1);
            int0 = (int0 - int1);
        } else {
            int1 = (int1 + int2);
            int2 = (int1 - int2);
            int1 = (int1 - int2);
        };
    };
    IF_SETPOSITION(0, int0, 1, 2, comp(1775, 57));
    IF_SETPOSITION(0, int1, 1, 2, comp(1775, 66));
    IF_SETPOSITION(0, int2, 1, 2, comp(1775, 75));
    return;
}