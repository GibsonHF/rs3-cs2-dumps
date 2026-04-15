//
function script13673(int0: component, int1: unknown_int, int2: unknown_int, int3: int, int4: unknown_int): void {
    if ((varbitplayer_37614 == 0)) {
        return;
    };
    var int5 = 0;
    var int6 = 0;
    [int5, int6] = script13641(varbitplayer_37615);
    stack(90112);
    stack(varbitplayer_37614);
    DB_FIND(0);
    dbrow_findnext();
    var int7 = stack();
    stack(int7);
    stack(90288);
    stack(0);
    dbrow_getfield();
    var int8 = stack();
    var int9 = -1;
    var int10 = 0;
    stack(int7);
    stack(90416);
    stack((int2 - 1));
    dbrow_getfield();
    [int9, int10] = stack();
    switch (int1) {
        case 29: {
            script13313(int0, int3, script12422(int5, (int8 * int10), 65536));
            if ((int4 == 1)) {
                IF_SETONVARTRANSMIT(callback(script13312, -2147483645, int1, 7268, 1), int0);
            };
            break;
        }
        case 30: {
            script13313(int0, int3, script12422(int6, (int8 * int10), 65536));
            if ((int4 == 1)) {
                IF_SETONVARTRANSMIT(callback(script13312, -2147483645, int1, 7268, 1), int0);
            };
            break;
        }
    };
    return;
}