//
function script13673(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((varbitplayer_37614 == 0)) {
        return;
    };
    var int5 = 0;
    var int6 = 0;
    [int5, int6] = script13641(varbitplayer_37615);
    stack(90112);
    stack(varbitplayer_37614);
    DB_FIND(0);
    var int7 = dbrow_findnext();
    stack(int7);
    script21030();
    var int8 = [];
    var int9 = -1;
    var int10 = 0;
    [int9, int10] = dbrow_getfield(int7, 90416, (int2 - 1));
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