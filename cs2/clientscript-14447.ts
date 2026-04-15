//
function script14447(int0: int): int {
    var int1 = MODULO(int0, 32);
    switch ((int0 / 32)) {
        case 0: {
            return TESTBIT(varplayer_4369, int1);
        }
        case 1: {
            return TESTBIT(varplayer_4370, int1);
        }
        case 2: {
            return TESTBIT(varplayer_4371, int1);
        }
        case 3: {
            return TESTBIT(varplayer_12229, int1);
        }
    };
    script12478(`Seedicide get state. Number ${inttostring(int0, 10)} is not supported.`);
    return -1;
}