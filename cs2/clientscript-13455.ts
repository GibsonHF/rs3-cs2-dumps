//
function script13455(int0: number): void {
    var int1 = -1;
    var int2 = -1;
    var string0 = "Change selected faction";
    switch (int0) {
        case 1: {
            int1 = 122880018;
            break;
        }
        case 2: {
            int1 = 122880013;
            break;
        }
        case 3: {
            int1 = 122880021;
            break;
        }
        case 4: {
            int1 = 122880016;
            break;
        }
    };
    if ((int0 == varbitplayer_35973)) {
        int2 = 30871;
    } else {
        int2 = 30868;
    };
    if ((int1 == -1)) {
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