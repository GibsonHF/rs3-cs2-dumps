//
function script13363(int0: unknown_int): void {
    var int1 = script13364(IF_GET2DANGLE(comp(1858, 85)));
    var int2 = script13365(int0);
    var int3 = -1;
    if ((int1 == -1)) {
        return;
    };
    if ((int2 == -1)) {
        return;
    };
    if ((int2 == int1)) {
        return;
    };
    script13358();
    if ((int1 == 0)) {
        if (((int2 >= 1) && (int2 <= 13))) {
            IF_SET2DANGLE(31494, comp(1858, 85));
            int1 = 13;
        } else {
            IF_SET2DANGLE(34042, comp(1858, 85));
            int1 = 14;
        };
    };
    if ((int2 > int1)) {
        if (((int2 - int1) <= 12)) {
            int3 = 0;
        } else {
            int3 = 1;
        };
    } else if ((int2 < int1)) {
        if (((int1 - int2) <= 12)) {
            int3 = 1;
        } else {
            int3 = 0;
        };
    } else if ((int2 == int1)) {
        script13368(int2);
        return;
    };
    IF_SETONTIMER(callback(script13366, CLIENTCLOCK(), int1, int2, int3), 121765973);
    return;
}