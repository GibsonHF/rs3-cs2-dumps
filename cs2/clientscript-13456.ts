//
function script13456(int0: number): void {
    var int1 = -1;
    var int2 = -1;
    var int3 = 0;
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
        int3 = 1;
        int2 = 30872;
    } else {
        int2 = 30868;
    };
    if ((CC_FIND(int1, 0) == 1)) {
        CC_SETGRAPHIC(int2);
    };
    var int4 = -1;
    switch (int0) {
        case 1: {
            int4 = 122880007;
            break;
        }
        case 2: {
            int4 = 122880006;
            break;
        }
        case 3: {
            int4 = 122880009;
            break;
        }
        case 4: {
            int4 = 122880010;
            break;
        }
    };
    script13489(int4, 0, int0, 0);
    return;
}