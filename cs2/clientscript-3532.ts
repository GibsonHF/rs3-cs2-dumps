//
function script3532(int0: number): void {
    if ((int0 == -1)) {
        return;
    };
    var int1 = -1;
    var int2 = -1;
    [int1, int2] = script3526(int0);
    if ((int1 == -1)) {
        return;
    };
    NOTIFICATIONS_CANCELLOCAL(int1);
    script3527(int0, -1, -1);
    return;
}