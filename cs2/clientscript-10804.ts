//
function script10804(): void {
    var int0 = 102367238;
    var int1 = 102367239;
    var int2 = 102367256;
    var int3 = 102367257;
    IF_SETHIDE(1, int0);
    IF_SETHIDE(1, int1);
    IF_SETHIDE(1, int2);
    IF_SETHIDE(1, int3);
    switch (varclient_4661) {
        case 0: {
            IF_SETHIDE(0, int0);
            break;
        }
        case 1: {
            IF_SETHIDE(0, int1);
            break;
        }
        case 2: {
            IF_SETHIDE(0, int2);
            break;
        }
        case 3: {
            script10805();
            IF_SETHIDE(0, int3);
            break;
        }
    };
    return;
}