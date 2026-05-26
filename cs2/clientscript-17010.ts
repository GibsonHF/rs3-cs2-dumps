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
    IF_SETHIDE(0, 82117067);
    IF_SETHIDE(0, 82116615);
    IF_SETHIDE(1, 82116676);
    IF_SETHIDE(1, 82116616);
    IF_SETHIDE(1, 82116643);
    script16198(0, 82117067);
    if ((struct_getparam(script16161(), 8712) == false)) {
        IF_SETHIDE(1, 82116779);
    };
    return;
}