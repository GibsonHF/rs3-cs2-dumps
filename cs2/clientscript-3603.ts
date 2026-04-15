//
function script3603(int0: int): int {
    var int1 = script3602(int0);
    if (((int1 != -1 as dbrow) && (dbrow_getfield(int1, 303360, 0) == true))) {
        return BITCOUNT(script3604(int0));
    };
    return script3604(int0);
}