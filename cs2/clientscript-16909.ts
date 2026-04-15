//
function script16909(int0: unknown_int, int1: int): void {
    if ((int1 >= 375)) {
        script16908(false);
        IF_SETONTIMER(callback(), comp(907, 2));
        IF_SETONTIMER(callback(script16910, 0, int0, script16913(int0)), 59441156);
        return;
    };
    IF_SETONTIMER(callback(script16909, int0, (int1 + 1)), comp(907, 2));
    return;
}