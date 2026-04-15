//
function script11276(int0: component, int1: int): void {
    if (((varclient_4777 > 0) && (varclient_4777 <= ENUM_GETOUTPUTCOUNT(9458 as cs2enum)))) {
        script11275(int0, (varclient_4777 * 10), 21363 as struct);
    };
    varclient_4777 = int1;
    script11275(int0, (int1 * 10), 28303 as struct);
    if (((varclient_4777 > 0) && (varclient_4777 <= ENUM_GETOUTPUTCOUNT(9458 as cs2enum)))) {
        IF_SETHIDE(true, comp(1611, 16));
    } else {
        IF_SETHIDE(false, comp(1611, 16));
    };
    return;
}