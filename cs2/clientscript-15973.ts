//
function script15973(int0: int, int1: unknown_int): string {
    var int2 = script12422(6, 10, int0);
    var int3 = script16472(int0);
    var int4 = (int2 / 60);
    if ((int4 > 0)) {
        int2 = MODULO(int2, 60);
        if (((int2 > 0) || (int3 > 0))) {
            if (((int1 == 1) && (int3 > 0))) {
                return `${inttostring(int4, 10)}m ${inttostring(int2, 10)}.${inttostring(int3, 10)}s`;
            };
            if ((int2 > 0)) {
                return `${inttostring(int4, 10)}m ${inttostring(int2, 10)}s`;
            };
        };
        return `${inttostring(int4, 10)}m`;
    };
    if (((int1 == 1) && (int3 > 0))) {
        return `${inttostring(int2, 10)}.${inttostring(int3, 10)}s`;
    };
    return `${inttostring(int2, 10)}s`;
}