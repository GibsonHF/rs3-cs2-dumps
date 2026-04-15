//
function script13405(int0: int, int1: int, int2: int): string {
    var int3 = (int0 / 7);
    var int4 = MODULO(int0, 7);
    var int5 = (int3 / 52);
    if ((int5 > 0)) {
        int3 = MODULO(int3, 52);
        return `${inttostring(int5, 10)}y ${inttostring(int3, 10)}w`;
    };
    if ((int3 > 0)) {
        return `${inttostring(int3, 10)}w ${inttostring(int4, 10)}d`;
    };
    if ((int0 > 0)) {
        if ((int1 > 0)) {
            return `${inttostring(int0, 10)}d ${inttostring(int1, 10)}h`;
        };
        return `${inttostring(int0, 10)}d`;
    };
    if ((int1 > 9)) {
        return `${inttostring(int1, 10)}h`;
    };
    if ((int1 > 0)) {
        if ((int2 > 0)) {
            return `${inttostring(int1, 10)}h ${inttostring(int2, 10)}m`;
        };
        return `${inttostring(int1, 10)}h`;
    };
    return `${inttostring(int2, 10)}m`;
}