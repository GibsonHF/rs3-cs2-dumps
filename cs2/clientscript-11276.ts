//
function script11276(int0: number, int1: number): void {
    if (((varclient_4777 > 0) && (varclient_4777 <= ENUM_GETOUTPUTCOUNT(9458)))) {
        script11275(int0, (varclient_4777 * 10), 21363);
    };
    varclient_4777 = int1;
    script11275(int0, (int1 * 10), 28303);
    if (((varclient_4777 > 0) && (varclient_4777 <= ENUM_GETOUTPUTCOUNT(9458)))) {
        IF_SETHIDE(1, 105578512);
    } else {
        IF_SETHIDE(0, 105578512);
    };
    return;
}