//
function script2388(int0: int): int {
    var int1 = MODULO(int0, 32);
    if (((int0 >= 0) && (int0 <= 31))) {
        return TESTBIT(varplayer_2673, int1);
    };
    return 0;
}