//
function script13084(int0: int, int1: int): string {
    var int2 = 10;
    var int3 = 2;
    var int4 = 0;
    if ((int0 < 0)) {
        var int0 = (int0 * -1);
        var int1 = (int1 - 1);
        int4 = 1;
    };
    var string0 = inttostring(int0, 10);
    while ((int3 <= int1)) {
        if ((int0 < int2)) {
            string0 = `0${string0}`;
        };
        int2 = (int2 * 10);
        int3 = (int3 + 1);
    };
    if ((int4 == 1)) {
        string0 = `-${string0}`;
    };
    return string0;
}