//
function script14945(int0: int, int1: unknown_int): string {
    var int2 = script12422(6, 10, int0);
    var int3 = script16472(int0);
    if (((int1 == 1) && (int3 > 0))) {
        return `${inttostring(int2, 10)}.${inttostring(int3, 10)}s`;
    };
    return `${inttostring(int2, 10)}s`;
}