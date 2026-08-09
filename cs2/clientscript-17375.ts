//
function script17375(long0: bigint, long1: bigint): bigint {
    var long2 = 0n;
    if (LONG_BRANCH_GREATER_THAN(long1, 0n)) {
        long2 = SUB_LONG(SUB_LONG(9223372036854775807n, long1), long0);
        if (LONG_BRANCH_LESS_THAN(long2, 0n)) {
            return 9223372036854775807n;
        };
        return ADD_LONG(long0, long1);
    };
    if (LONG_BRANCH_LESS_THAN(long1, 0n)) {
        long2 = SUB_LONG(-9223372036854775808n, long1);
        if (LONG_BRANCH_GREATER_THAN_OR_EQUALS(long0, long2)) {
            return ADD_LONG(long0, long1);
        };
        return -9223372036854775808n;
    };
    return long0;
}