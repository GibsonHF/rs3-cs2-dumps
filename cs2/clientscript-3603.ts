//
function script3603(int0: number): number {
    var int1 = script3602(int0);
    if (((int1 != -1) && (dbrow_getfield(int1, 303360, 0) == 1))) {
        return BITCOUNT(script3604(int0));
    };
    return script3604(int0);
}