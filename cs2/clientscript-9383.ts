//
function script9383(int0: int, int1: int): string {
    if (((int0 == 0) || (int1 == 0))) {
        return "n/a";
    };
    var int2 = SCALE(int0, int1, 1000);
    var int3 = MODULO(int2, 1000);
    var string0 = "";
    if ((int3 < 10)) {
        string0 = "00";
    } else if ((int3 < 100)) {
        string0 = "0";
    };
    return `${inttostring((int2 / 1000), 10)}${script8002()}${string0}${inttostring(int3, 10)}`;
}