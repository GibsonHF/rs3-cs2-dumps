//
function script8982(int0: int, int1: int): int {
    var int2 = 0;
    var int3 = 0;
    while (((int3 <= int0) && (int2 < int1))) {
        int3 = (int3 + script8981(int2));
        if ((int3 <= int0)) {
            int2 = (int2 + 1);
        };
    };
    return int2;
}