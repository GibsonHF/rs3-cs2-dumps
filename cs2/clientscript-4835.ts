//
function script4835(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    switch (varbitplayer_6981) {
        case 1: {
            int0 = script4817(varbitplayer_6986, 1);
            int1 = script4817(varbitplayer_6986, 2);
            int2 = script4817(varbitplayer_6986, 3);
            break;
        }
        case 2: {
            int0 = script4817(varbitplayer_6995, 1);
            int1 = script4817(varbitplayer_6995, 2);
            int2 = script4817(varbitplayer_6995, 3);
            break;
        }
        case 3: {
            int0 = script4817(varbitplayer_7004, 1);
            int1 = script4817(varbitplayer_7004, 2);
            int2 = script4817(varbitplayer_7004, 3);
            break;
        }
    };
    var int3 = (IF_GETNEXTSUBID(int0) - 1);
    while ((int3 >= 0)) {
        if ((CC_FIND(int0, int3) == 1)) {
            CC_SETGRAPHIC(6009);
        };
        int3 = (int3 - 1);
    };
    return;
}