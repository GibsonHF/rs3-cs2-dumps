//
function script16487(): void {
    var int0 = -1;
    var int1 = -1 as graphic;
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    var int4 = -1;
    var int5 = 0;
    script16485();
    switch (varbitplayer_51126) {
        case 44: {
            int1 = 18295 as graphic;
            int3 = 18298 as graphic;
            int2 = 18299 as graphic;
            int4 = 5909;
            int5 = 65280;
            break;
        }
        case 45: {
            int1 = 18296 as graphic;
            int3 = 18300 as graphic;
            int2 = 18301 as graphic;
            int4 = 5910;
            int5 = 16711680;
            break;
        }
        case 46: {
            int1 = 18297 as graphic;
            int3 = 18302 as graphic;
            int2 = 18303 as graphic;
            int4 = 5911;
            int5 = 16777215;
            break;
        }
        case 78: {
            int1 = 18295 as graphic;
            int3 = 34865 as graphic;
            int2 = 34866 as graphic;
            int4 = 15119;
            int5 = 65280;
            break;
        }
        case 79: {
            int1 = 18296 as graphic;
            int3 = 34867 as graphic;
            int2 = 34868 as graphic;
            int4 = 15120;
            int5 = 16711680;
            break;
        }
        case 80: {
            int1 = 18297 as graphic;
            int3 = 34869 as graphic;
            int2 = 34870 as graphic;
            int4 = 15121;
            int5 = 16777215;
            break;
        }
        default: {
            return;
        }
    };
    var string0 = dbrow_getfield(script438(varbitplayer_51126), 503824, 0);
    script16498(int4, 62849038);
    IF_SETGRAPHIC(int1, comp(959, 9));
    IF_SETTEXT(`You open your ${string0} and receive`, comp(959, 31));
    IF_SETCOLOUR(int5, comp(959, 21));
    IF_SETCOLOUR(int5, comp(959, 20));
    if ((varbitplayer_51127 == 0)) {
        IF_SETGRAPHIC(int2, comp(959, 12));
    } else {
        IF_SETGRAPHIC(int3, comp(959, 12));
    };
    script16502();
    return;
}