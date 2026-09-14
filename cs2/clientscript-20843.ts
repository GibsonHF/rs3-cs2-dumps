//
function script20843(int0: number): number {
    var int1 = dbrow_getfield(int0, 1417392, 0);
    var int2 = dbrow_getfield(int0, 1417408, 0);
    if ((((script3554(int0) == 1) && (DATE_RUNEDAY() >= int1)) && (DATE_RUNEDAY() <= int2))) {
        return 1;
    };
    return 0;
}