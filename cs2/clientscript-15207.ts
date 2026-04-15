//
function script15207(int0: int, int1: int): string {
    var string0 = "";
    var int2 = int0;
    while ((int2 != 0)) {
        var int1 = (int1 - 1);
        int2 = (int2 / 10);
    };
    if ((int0 == 0)) {
        int1 = (int1 - 1);
    };
    var int3 = 0;
    while ((int3 < int1)) {
        string0 = `${string0}0`;
        int3 = (int3 + 1);
    };
    return `${string0}${inttostring(int0, 10)}`;
}