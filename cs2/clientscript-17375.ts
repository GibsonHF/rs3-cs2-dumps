//
function script17375(long0: long, long1: long): long {
    var long2 = 0n;
    if (branch_gt_long[6](long1, 0n)) {
        long2 = SUB_LONG(SUB_LONG(9223372036854775807n, long1), long0);
        if (branch_lt_long[16](long2, 0n)) {
            return 9223372036854775807n;
        };
        return ADD_LONG(long0, long1);
    };
    if (branch_lt_long[27](long1, 0n)) {
        long2 = SUB_LONG(-9223372036854775808n, long1);
        if (branch_gteq_long[35](long0, long2)) {
            return ADD_LONG(long0, long1);
        };
        return -9223372036854775808n;
    };
    return long0;
}