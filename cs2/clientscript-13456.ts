//
function script13456(int0: int): void {
    var int1 = comp(-1, 65535);
    var int2 = -1 as graphic;
    var int3 = 0;
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
        int3 = 1;
        int2 = 30872 as graphic;
    } else {
        int2 = 30868 as graphic;
    };
    if ((CC_FIND(int1, 0) == 1)) {
        CC_SETGRAPHIC(int2);
    };
    var int4 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int4 = comp(1875, 7);
            break;
        }
        case 2: {
            int4 = comp(1875, 6);
            break;
        }
        case 3: {
            int4 = comp(1875, 9);
            break;
        }
        case 4: {
            int4 = comp(1875, 10);
            break;
        }
    };
    script13489(int4, 0, int0, 0);
    return;
}