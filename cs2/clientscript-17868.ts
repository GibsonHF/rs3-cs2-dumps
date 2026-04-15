//
function script17868(int0: dbrow, int1: int): boolean {
    if ((int1 <= 0)) {
        return true;
    };
    if ((int0 == -1 as dbrow)) {
        return false;
    };
    if ((int1 > script17890(int0))) {
        return script17871(int0);
    };
    var int2 = (int1 / 32);
    var int3 = MODULO(int1, 32);
    if ((int0 == 7906 as dbrow)) {
        switch (int2) {
            case 0: {
                return script734(TESTBIT(varplayer_11342, int3));
            }
            case 1: {
                return script734(TESTBIT(varplayer_11343, int3));
            }
            case 2: {
                return script734(TESTBIT(varplayer_11344, int3));
            }
            case 3: {
                return script734(TESTBIT(varplayer_11345, int3));
            }
        };
        script12478(`Invalid index of ${inttostring(int2, 10)}`);
        return false;
    };
    return script734(TESTBIT(script17869(int0, int2), int3));
}