//
function script2864(int0: number): void {
    var int1 = 0;
    if ((int0 == comp(1566, 33))) {  // egq_tracking:wheel_tl
        int1 = varbitplayer_26277;
    };
    if ((int0 == comp(1566, 34))) {  // egq_tracking:wheel_tr
        int1 = varbitplayer_26276;
    };
    if ((int0 == comp(1566, 35))) {  // egq_tracking:wheel_b
        int1 = varbitplayer_26278;
    };
    var int2 = (65535 - (int1 * 10923));
    if ((int2 == 65535)) {
        int2 = 0;
    };
    IF_SET2DANGLE(int2, int0);
    return;
}