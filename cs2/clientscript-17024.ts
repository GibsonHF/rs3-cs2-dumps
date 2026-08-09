//
function script17024(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = -1;
    var int5 = 0;
    var int6 = script17025(int2, int0);
    if (((int2 == -1) || (int3 == -1))) {
        script12478("Null dbrows given when previewing reward.");
        return;
    };
    [int4, int5] = script16481(int0, int1, int2);
    if ((int4 == -1)) {
        script12478("Received null prize when displaying reward previews.");
        return;
    };
    if ((item_getparam(int4, 5405) != -1 as struct)) {
        if ((int6 != -1)) {
            script16368(int6, int1);
        } else {
            script16663(int3, int4, int5);
        };
    } else {
        script16663(int3, int4, int5);
    };
    return;
}