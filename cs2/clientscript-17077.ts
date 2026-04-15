//
function script17077(int0: dbrow, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    [int2, int3] = script3526(int0);
    if ((int2 == -1)) {
        return;
    };
    CC_LIST_GETENABLED(int2);
    stack(int2);
    if ((NOTIFICATIONS_ISLOCALSCHEDULED() == 1)) {
        switch (int0) {
            case 7011:
            case 7012: {
                if ((int0 == 7012 as dbrow)) {
                    int4 = 2;
                };
                if (((int1 - varclient_7099) > int4)) {
                    script3532(int0);
                };
                break;
            }
            case 7014: {
                if ((int1 == 1)) {
                    script3532(int0);
                };
                break;
            }
            default: {
                return;
            }
        };
    } else {
        script3532(int0);
    };
    return;
}