//
function script17925(int0: int): int {
    if ((script17853() == -1 as dbrow)) {
        return 0;
    };
    if ((script17853() == 8172 as dbrow)) {
        return 0;
    };
    switch (int0) {
        case 1: {
            return varbitplayer_54228;
        }
        case 2: {
            return varbitplayer_54229;
        }
        case 3: {
            return varbitplayer_54230;
        }
        case 4: {
            return varbitplayer_54231;
        }
        case 5: {
            return varbitplayer_54232;
        }
    };
    script12478(`Invalid slot requested expected 1 - ${inttostring(script17921(), 10)} got : ${inttostring(int0, 10)}`);
    return -1;
}