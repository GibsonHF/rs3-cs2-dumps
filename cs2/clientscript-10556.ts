//
function script10556(int0: obj): int {
    var int1 = INV_TOTAL(93 as inv, int0);
    var int2 = INV_TOTAL(95 as inv, int0);
    if (((int1 == 2147483647) || (int2 == 2147483647))) {
        return 2147483647;
    };
    if ((((2147483647 - int1) - int2) < 0)) {
        return 2147483647;
    };
    return (int1 + int2);
}