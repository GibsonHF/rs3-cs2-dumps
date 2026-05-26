//
function script11540(int0: number, int1: number): void {
    var int2 = item_getparam(int1, 5407);
    var int3 = -1;
    if ((int2 != -1 as dbrow)) {
        script16490(int2, 100, 58392610, 0);
        IF_SETONTIMER(callback(script11621, int0, 0, 50, -1, 58392594, 58392610, 58392612, int3), 58392594);
    } else {
        IF_SETOBJECT(int1, 100, 58392609);
        IF_SETONTIMER(callback(script11621, int0, 0, 50, -1, 58392594, 58392609, 58392612, int3), 58392594);
    };
    script11620(58392611);
    return;
}