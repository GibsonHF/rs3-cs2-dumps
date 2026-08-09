//
function script3531(int0: number, int1: number): void {
    if ((int0 == -1)) {
        return;
    };
    if ((dbrow_getfield(int0, 274560, 0) == 1)) {
        return;
    };
    if ((script11748(int0) == 0)) {
        return;
    };
    if (((int0 == 7013) && ((script12477() - 30) > varclient_7099))) {
        return;
    };
    var int2 = -1;
    var int3 = -1;
    [int2, int3] = script3526(int0);
    if ((int2 != -1)) {
        CC_LIST_GETENABLED(int2);
        stack(int2);
        if ((NOTIFICATIONS_ISLOCALSCHEDULED() == 1)) {
            return;
        };
    };
    var int4 = script3533(int0, int1);
    if ((int4 == -1)) {
        var int1 = -1;
    };
    script3527(int0, int4, int1);
    return;
}