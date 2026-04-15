//
function script4838(): void {
    var int0 = comp(-1, 65535);
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 1;
    switch (varbitplayer_6981) {
        case 1: {
            int1 = varbitplayer_6990;
            int2 = varbitplayer_6991;
            int3 = varbitplayer_6992;
            int4 = varbitplayer_6986;
            break;
        }
        case 2: {
            int1 = varbitplayer_6999;
            int2 = varbitplayer_7000;
            int3 = varbitplayer_7001;
            int4 = varbitplayer_6995;
            break;
        }
        case 3: {
            int1 = varbitplayer_7008;
            int2 = varbitplayer_7009;
            int3 = varbitplayer_7010;
            int4 = varbitplayer_7004;
            break;
        }
    };
    int0 = script4815(int4, 1);
    if ((int0 != comp(-1, 65535))) {
        script4839(int0, ((int1 - 1) * 27));
    };
    int0 = script4815(int4, 2);
    if ((int0 != comp(-1, 65535))) {
        script4839(int0, ((int2 - 1) * 27));
    };
    int0 = script4815(int4, 3);
    if ((int0 != comp(-1, 65535))) {
        script4839(int0, ((int3 - 1) * 27));
    };
    return;
}