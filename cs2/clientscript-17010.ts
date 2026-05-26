//
function script17010(int0: number): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int1 = -1 as graphic;
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    var int4 = -1 as graphic;
    [int1, int2, int3, int4] = dbrow_getfield(int0, 851968, 0);
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(int1, comp(1253, 7));
            break;
        }
        case 1: {
            IF_SETGRAPHIC(int2, comp(1253, 7));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(int3, comp(1253, 7));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(int4, comp(1253, 7));
            break;
        }
    };
    IF_SETHIDE(false, comp(1253, 459));
    IF_SETHIDE(false, comp(1253, 7));
    IF_SETHIDE(true, comp(1253, 68));
    IF_SETHIDE(true, comp(1253, 8));
    IF_SETHIDE(true, comp(1253, 35));
    script16198(0, 82117067);
    if ((struct_getparam(script16161(), 8712) == false)) {
        IF_SETHIDE(true, comp(1253, 171));
    };
    return;
}