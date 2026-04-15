//
function script17024(int0: int, int1: int, int2: dbrow, int3: dbrow): void {
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = script17025(int2, int0);
    if (((int2 == -1 as dbrow) || (int3 == -1 as dbrow))) {
        script12478("Null dbrows given when previewing reward.");
        return;
    };
    [int4, int5] = script16481(int0, int1, int2);
    if ((int4 == -1 as obj)) {
        script12478("Received null prize when displaying reward previews.");
        return;
    };
    if (((item_getparam(int4, 5405) != -1 as struct) && (int6 != -1))) {
        script16368(int6, int1);
    } else {
        script16663(int3, int4, int5);
    };
    return;
}