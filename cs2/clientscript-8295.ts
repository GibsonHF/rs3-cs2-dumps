//
function script8295(int0: number, int1: number, long0: BigInt, long1: BigInt): string {
    var long2 = SUB_LONG(long1, long0);
    if (branch_gt_long[8](long0, long1)) {
        long2 = SUB_LONG(long0, long1);
    };
    var int2 = script17138(MODULO_LONG(long2, 60n));
    long2 = DIVIDE_LONG(long2, 60n);
    var int3 = script17138(DIVIDE_LONG(long2, 1440n));
    var int4 = script17138(DIVIDE_LONG(MODULO_LONG(long2, 1440n), 60n));
    var int5 = script17138(MODULO_LONG(long2, 60n));
    return script3382(int3, int4, int5, int2, int0, int1);
}