//
function script1539(int0: int): void {
    var int1 = IF_GETHEIGHT(comp(18, 22));
    var int2 = 1;
    if ((int1 == int0)) {
        IF_SETONTIMER(callback(), comp(18, 14));
    } else if ((int1 > int0)) {
        if (((int1 - int0) > 10)) {
            int2 = 5;
        };
        IF_SETSIZE(350, (int1 - int2), 0, 0, comp(18, 22));
    } else {
        if (((int0 - int1) > 10)) {
            int2 = 5;
        };
        IF_SETSIZE(350, (int1 + int2), 0, 0, comp(18, 22));
    };
    return;
}