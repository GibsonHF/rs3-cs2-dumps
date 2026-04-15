//
function script20143(int0: dbrow, int1: int): boolean {
    var int2 = 0;
    while ((int2 < int1)) {
        if ((script20144(dbrow_getfield(int0, 1343504, int2)) == true)) {
            return true;
        };
        int2 = (int2 + 1);
    };
    return false;
}