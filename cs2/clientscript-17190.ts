//
function script17190(int0: number): void {
    var int1 = enum_getvalue(0, 74, 16852 as cs2enum, int0);
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var int2 = script2170(int0);
    var int3 = script1882(int0);
    switch (int3) {
        case 0: {
            IF_SETGRAPHIC(-1 as graphic, int2);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(dbrow_getfield(int1, 884769, 0), int2);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(dbrow_getfield(int1, 884770, 0), int2);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(dbrow_getfield(int1, 884771, 0), int2);
            break;
        }
        case 4: {
            IF_SETGRAPHIC(dbrow_getfield(int1, 884772, 0), int2);
            break;
        }
        case 5: {
            IF_SETGRAPHIC(dbrow_getfield(int1, 884773, 0), int2);
            break;
        }
    };
    if ((int3 < script626(int0))) {
        IF_SETOPCURSOR(1, 172, int2);
    } else {
        IF_SETOPCURSOR(1, 49, int2);
    };
    return;
}