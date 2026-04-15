//
function script17387(long0: long): void {
    var long1 = 0n;
    var long2 = 0n;
    if ((branch_eq_long[11](long0, 95n) || branch_eq_long[11](long0, 105n))) {
        long1 = DIVIDE_LONG(varclient_85, 20n);
    } else if ((branch_eq_long[23](long0, 80n) || branch_eq_long[23](long0, 120n))) {
        long1 = DIVIDE_LONG(varclient_85, 5n);
    } else {
        return;
    };
    if (branch_gteq_long[33](long0, 100n)) {
        long1 = MIN_LONG(SUB_LONG(2147483649147483647n, varclient_85), long1);
        script17389(long1);
    } else {
        long2 = SUB_LONG(varclient_85, long1);
        if (branch_lt_long[50](long2, 0n)) {
            long1 = varclient_85;
        };
        script17390(long1);
    };
    return;
}