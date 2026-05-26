//
function script1539(int0: number): void {
    var int1 = IF_GETHEIGHT(1179670);
    var int2 = 1;
    if ((int1 == int0)) {
        IF_SETONTIMER(callback(), 1179662);
    } else if ((int1 > int0)) {
        if (((int1 - int0) > 10)) {
            int2 = 5;
        };
        IF_SETSIZE(350, (int1 - int2), 0, 0, 1179670);
    } else {
        if (((int0 - int1) > 10)) {
            int2 = 5;
        };
        IF_SETSIZE(350, (int1 + int2), 0, 0, 1179670);
    };
    return;
}