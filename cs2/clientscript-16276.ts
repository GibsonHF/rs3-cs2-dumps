//
function script16276(): unknown_int {
    var int0 = 0;
    var int1 = 0;
    if (((DATE_RUNEDAY() < 8570) || (DATE_RUNEDAY() > 8580))) {
        return 0;
    };
    if ((DATE_RUNEDAY() == 8570)) {
        [int0, int1] = script20089();
        if ((int0 < 12)) {
            return 0;
        };
    } else if ((DATE_RUNEDAY() == 8580)) {
        [int0, int1] = script20089();
        if ((int0 >= 12)) {
            return 0;
        };
    };
    return 1;
}