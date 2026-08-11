//
function script7556(int0: number): void {
    var int1 = IF_GETWIDTH(comp(378, 3));  // tsd_juna_health:zilyana_fill
    if ((int1 < int0)) {
        IF_SETSIZE((int1 + 1), IF_GETHEIGHT(comp(378, 3)), 0, 0, comp(378, 3));  // tsd_juna_health:zilyana_fill
    } else {
        IF_SETONTIMER(callback(), comp(378, 1));  // tsd_juna_health:zilyana
    };
    return;
}