//
function script10848(int0: int): string {
    if ((int0 < 0)) {
        return "00:00";
    };
    var int1 = SCALE(3, 5, int0);
    var int2 = (int1 / 60);
    var int3 = 0;
    if ((int2 >= 60)) {
        int3 = (int2 / 60);
        int2 = MODULO(int2, 60);
    };
    int1 = MODULO(int1, 60);
    if ((int3 > 0)) {
        if ((int2 >= 10)) {
            if ((int1 >= 10)) {
                return `${inttostring(int3, 10)}:${inttostring(int2, 10)}:${inttostring(int1, 10)}`;
            };
            return `${inttostring(int3, 10)}:${inttostring(int2, 10)}:0${inttostring(int1, 10)}`;
        };
        if ((int1 >= 10)) {
            return `${inttostring(int3, 10)}:0${inttostring(int2, 10)}:${inttostring(int1, 10)}`;
        };
        return `${inttostring(int3, 10)}:0${inttostring(int2, 10)}:0${inttostring(int1, 10)}`;
    };
    if ((int2 >= 10)) {
        if ((int1 >= 10)) {
            return `${inttostring(int2, 10)}:${inttostring(int1, 10)}`;
        };
        return `${inttostring(int2, 10)}:0${inttostring(int1, 10)}`;
    };
    if ((int1 >= 10)) {
        return `0${inttostring(int2, 10)}:${inttostring(int1, 10)}`;
    };
    return `0${inttostring(int2, 10)}:0${inttostring(int1, 10)}`;
}