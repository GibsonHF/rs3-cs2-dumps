//
function script17924(int0: int): int {
    if ((script17853() == -1 as dbrow)) {
        return 0;
    };
    if ((script17853() == 8172 as dbrow)) {
        return 0;
    };
    switch (int0) {
        case 1: {
            return varbitplayer_54233;
        }
        case 2: {
            return varbitplayer_54234;
        }
        case 3: {
            return varbitplayer_54235;
        }
        case 4: {
            return varbitplayer_54236;
        }
        case 5: {
            return varbitplayer_54237;
        }
    };
    script12478(`Invalid slot requested expected 1 - ${inttostring(script17921(), 10)} got : ${inttostring(int0, 10)}`);
    return -1;
}