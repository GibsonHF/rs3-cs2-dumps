//
function script17010(int0: dbrow): void {
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
            stack(int1);
            stack(82116615);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(int2);
            stack(82116615);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(int3);
            stack(82116615);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(int4);
            stack(82116615);
            IF_SETGRAPHIC();
            break;
        }
    };
    IF_SETHIDE(false, comp(1253, 459));
    IF_SETHIDE(false, comp(1253, 7));
    IF_SETHIDE(true, comp(1253, 68));
    IF_SETHIDE(true, comp(1253, 8));
    IF_SETHIDE(true, comp(1253, 35));
    script16198(false, 82117067);
    if ((struct_getparam(script16161(), 8712) == false)) {
        IF_SETHIDE(true, comp(1253, 171));
    };
    return;
}