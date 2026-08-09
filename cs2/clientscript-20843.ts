//
function script20843(int0: number): number {
    var int1 = dbrow_getfield(int0, 1417440, 0);
    var int2 = dbrow_getfield(int0, 1417424, 0);
    var int3 = dbrow_getfield(int0, 1417392, 0);
    var int4 = dbrow_getfield(int0, 1417408, 0);
    if ((int1 == 0)) {
        if ((int2 == 0)) {
            if (((DATE_RUNEDAY() >= int3) && (DATE_RUNEDAY() <= int4))) {
                return 1;
            };
        } else if (((((int2 == 1) && (PLAYERMEMBER() == true)) && (DATE_RUNEDAY() >= int3)) && (DATE_RUNEDAY() <= int4))) {
            return 1;
        };
    } else if (((int1 == 1) && (PLAYERMEMBER() == false))) {
        if ((int2 == 0)) {
            if (((DATE_RUNEDAY() >= int3) && (DATE_RUNEDAY() <= int4))) {
                return 1;
            };
        } else if (((((int2 == 1) && (PLAYERMEMBER() == true)) && (DATE_RUNEDAY() >= int3)) && (DATE_RUNEDAY() <= int4))) {
            return 1;
        };
    };
    return 0;
}