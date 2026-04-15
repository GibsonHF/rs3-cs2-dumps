//
function script13455(int0: int): void {
    var int1 = comp(-1, 65535);
    var int2 = -1 as graphic;
    var string0 = "Change selected faction";
    switch (int0) {
        case 1: {
            int1 = comp(1875, 18);
            break;
        }
        case 2: {
            int1 = comp(1875, 13);
            break;
        }
        case 3: {
            int1 = comp(1875, 21);
            break;
        }
        case 4: {
            int1 = comp(1875, 16);
            break;
        }
    };
    if ((int0 == varbitplayer_35973)) {
        int2 = 30871 as graphic;
    } else {
        int2 = 30868 as graphic;
    };
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    CC_CREATE(int1, 5, 0);
    CC_SETSIZE(24, 24, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(int2);
    CC_SETONVARTRANSMIT(callback(script13453, 6991, 1));
    script8800(string0, int1, 0);
    return;
}