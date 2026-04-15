//
function script17716(int0: dbrow): int {
    if ((DB_GETFIELDCOUNT(int0, 1077344) <= 0)) {
        return 0;
    };
    var int1 = dbrow_getfield(int0, 1077344, 0);
    return ENUM_GETOUTPUTCOUNT(int1);
}