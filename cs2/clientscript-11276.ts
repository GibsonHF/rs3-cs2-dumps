//
function script11276(int0: number, int1: number): void {
    if (((varclient_4777 > 0) && (varclient_4777 <= ENUM_GETOUTPUTCOUNT(9458 as cs2enum)))) {
        script11275(int0, (varclient_4777 * 10), 21363);
    };
    varclient_4777 = int1;
    script11275(int0, (int1 * 10), 28303);
    if ((varclient_4777 > 0)) {
        if ((varclient_4777 <= ENUM_GETOUTPUTCOUNT(9458 as cs2enum))) {
            IF_SETHIDE(true, comp(1611, 16));
        } else {
            IF_SETHIDE(false, comp(1611, 16));
        };
    } else {
        IF_SETHIDE(false, comp(1611, 16));
    };
    return;
}