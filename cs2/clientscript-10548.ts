//
function script10548(int0: int): void {
    var int1 = script13911();
    var int2 = 0;
    if ((int0 == int1)) {
        return;
    };
    if (((int0 < 0) || (int0 > 24))) {
        return;
    };
    if ((int0 > int1)) {
        int2 = 1;
    } else {
        int2 = -1;
    };
    if (((int0 / 5) == (int1 / 5))) {
        while ((int1 != int0)) {
            script10549(int1, (int1 + int2));
            int1 = (int1 + int2);
        };
    } else if ((MODULO(int0, 5) == MODULO(int1, 5))) {
        while ((int1 != int0)) {
            script10549(int1, (int1 + (int2 * 5)));
            int1 = (int1 + (int2 * 5));
        };
    };
    return;
}