//
function script17194(int0: int, int1: unknown_int): void {
    if (((script17205(int0) == script1882(int0)) && (int1 == 0))) {
        return;
    };
    if ((int1 == 0)) {
        script17207(int0, script1882(int0));
    };
    var int2 = script17204(int0);
    IF_SETONTIMER(callback(script17195, int2, 1), int2);
    return;
}