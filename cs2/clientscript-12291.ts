//
function script12291(int0: int): string {
    if ((int0 < 0)) {
        return "";
    };
    var int1 = (int0 / 10);
    var int0 = MODULO(int0, 10);
    var int2 = (int1 / 86400);
    int1 = MODULO(int1, 86400);
    var int3 = (int1 / 3600);
    int1 = MODULO(int1, 3600);
    var int4 = (int1 / 60);
    int1 = MODULO(int1, 60);
    if ((int2 > 0)) {
        if ((int3 > 0)) {
            return `${inttostring(int2, 10)}d ${inttostring(int3, 10)}h`;
        };
        return `${inttostring(int2, 10)}d`;
    };
    if ((int3 > 0)) {
        if ((int4 > 0)) {
            return `${inttostring(int3, 10)}h ${inttostring(int4, 10)}m`;
        };
        return `${inttostring(int3, 10)}h`;
    };
    if ((int4 >= 5)) {
        return `${inttostring(int4, 10)}m`;
    };
    if ((int4 > 0)) {
        if ((int1 > 0)) {
            return `${inttostring(int4, 10)}m ${inttostring(int1, 10)}s`;
        };
        return `${inttostring(int4, 10)}m`;
    };
    if ((int0 > 0)) {
        return `${inttostring(int1, 10)}.${inttostring(int0, 10)}s`;
    };
    if ((int1 > 0)) {
        return `${inttostring(int1, 10)}s`;
    };
    return "";
}