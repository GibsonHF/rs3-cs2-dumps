//
function script17840(int0: int): int {
    var int1 = script12(DATE_RUNEDAY());
    if ((int1 < int0)) {
        int1 = (int1 + 7);
    };
    script17927();
    return ((int0 - int1) + 7);
}