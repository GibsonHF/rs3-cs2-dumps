//
function script10804(): void {
    var int0 = comp(1562, 6);
    var int1 = comp(1562, 7);
    var int2 = comp(1562, 24);
    var int3 = comp(1562, 25);
    IF_SETHIDE(true, int0);
    IF_SETHIDE(true, int1);
    IF_SETHIDE(true, int2);
    IF_SETHIDE(true, int3);
    switch (varclient_4661) {
        case 0: {
            IF_SETHIDE(false, int0);
            break;
        }
        case 1: {
            IF_SETHIDE(false, int1);
            break;
        }
        case 2: {
            IF_SETHIDE(false, int2);
            break;
        }
        case 3: {
            script10805();
            IF_SETHIDE(false, int3);
            break;
        }
    };
    return;
}