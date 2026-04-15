//
function script6792(int0: int): unknown_int {
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script5787(int0);
    while ((int1 < int2)) {
        if ((script14344(int1) != -1 as obj)) {
            return 0;
        };
        int1 = (int1 + 1);
    };
    return 1;
}