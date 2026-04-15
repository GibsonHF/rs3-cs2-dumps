//
function script13066(): void {
    var int0 = 1;
    while ((int0 <= ENUM_GETOUTPUTCOUNT(12141 as cs2enum))) {
        IF_SETHIDE(false, enum_getvalue(0, 9, 12142 as cs2enum, int0));
        script13068(int0);
        int0 = (int0 + 1);
    };
    if ((script13049() != 3)) {
        script13075(true);
    } else {
        script13075(false);
    };
    if ((ENUM_GETOUTPUTCOUNT(12141 as cs2enum) == 6)) {
        IF_SETPOSITION(62, 122, 0, 0, enum_getvalue(0, 9, 12142 as cs2enum, 4));
    } else {
        IF_SETPOSITION(2, 182, 0, 0, enum_getvalue(0, 9, 12142 as cs2enum, 4));
    };
    return;
}