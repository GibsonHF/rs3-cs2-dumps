//
function script17190(int0: int): void {
    var int1 = enum_getvalue(0, 74, 16852 as cs2enum, int0);
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var int2 = script2170(int0);
    var int3 = script1882(int0);
    switch (int3) {
        case 0: {
            stack(-1);
            stack(int2);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(dbrow_getfield(int1, 884769, 0));
            stack(int2);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(dbrow_getfield(int1, 884770, 0));
            stack(int2);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(dbrow_getfield(int1, 884771, 0));
            stack(int2);
            IF_SETGRAPHIC();
            break;
        }
        case 4: {
            stack(dbrow_getfield(int1, 884772, 0));
            stack(int2);
            IF_SETGRAPHIC();
            break;
        }
        case 5: {
            stack(dbrow_getfield(int1, 884773, 0));
            stack(int2);
            IF_SETGRAPHIC();
            break;
        }
    };
    if ((int3 < script626(int0))) {
        IF_SETOPCURSOR(1, 172 as cursor, int2);
    } else {
        IF_SETOPCURSOR(1, 49 as cursor, int2);
    };
    return;
}