//
function script18489(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = dbrow_getfield(int0, 806928, 0);
    var int2 = dbrow_getfield(int0, 807024, 0);
    int1 = (int1 + int2);
    return int1;
}