//[clientscript,fairyrings_clockwise]
function script962(int0: unknown_int): void {
    varclient_157 = true;
    var int1 = 0;
    var int2 = 0;
    if ((int0 == 51380233)) {
        varclient_6873 = MODULO(((varclient_6873 - 90) + 360), 360);
        if (((varclient_6876 == 1) && (IF_FIND(comp(784, 61)) == 1))) {
            [int1, int2] = script15524(varclient_6873);
            if ((int2 <= int1)) {
                varclient_6876 = -1;
            };
        } else {
            varclient_6876 = -1;
        };
    } else if ((int0 == 51380242)) {
        varclient_6874 = MODULO(((varclient_6874 - 90) + 360), 360);
        if (((varclient_6877 == 1) && (IF_FIND(comp(784, 64)) == 1))) {
            [int1, int2] = script15524(varclient_6874);
            if ((int2 <= int1)) {
                varclient_6877 = -1;
            };
        } else {
            varclient_6877 = -1;
        };
    } else if ((int0 == 51380251)) {
        varclient_6875 = MODULO(((varclient_6875 - 90) + 360), 360);
        if (((varclient_6878 == 1) && (IF_FIND(comp(784, 67)) == 1))) {
            [int1, int2] = script15524(varclient_6875);
            if ((int2 <= int1)) {
                varclient_6878 = -1;
            };
        } else {
            varclient_6878 = -1;
        };
    };
    return;
}