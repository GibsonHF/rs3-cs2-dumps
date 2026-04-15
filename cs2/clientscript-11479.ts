//
function script11479(int0: int, int1: int, int2: int): string {
    if ((int0 > 0)) {
        if ((int1 > 0)) {
            return `${inttostring(int0, 10)}d ${inttostring(int1, 10)}h`;
        };
        return `${inttostring(int0, 10)}d`;
    };
    if ((int1 > 0)) {
        if ((int2 > 0)) {
            return `${inttostring(int1, 10)}h ${inttostring(int2, 10)}m`;
        };
        return `${inttostring(int1, 10)}h`;
    };
    if ((int2 > 0)) {
        return `${inttostring(int2, 10)}m`;
    };
    return "";
}