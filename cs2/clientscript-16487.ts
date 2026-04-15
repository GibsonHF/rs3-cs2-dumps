//
function script16487(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1 as dbrow;
    var int5 = 0;
    script16485();
    switch (varbitplayer_51126) {
        case 44: {
            int1 = 18295;
            int3 = 18298;
            int2 = 18299;
            int4 = 5909 as dbrow;
            int5 = 65280;
            break;
        }
        case 45: {
            int1 = 18296;
            int3 = 18300;
            int2 = 18301;
            int4 = 5910 as dbrow;
            int5 = 16711680;
            break;
        }
        case 46: {
            int1 = 18297;
            int3 = 18302;
            int2 = 18303;
            int4 = 5911 as dbrow;
            int5 = 16777215;
            break;
        }
        case 78: {
            int1 = 18295;
            int3 = 34865;
            int2 = 34866;
            int4 = 15119 as dbrow;
            int5 = 65280;
            break;
        }
        case 79: {
            int1 = 18296;
            int3 = 34867;
            int2 = 34868;
            int4 = 15120 as dbrow;
            int5 = 16711680;
            break;
        }
        case 80: {
            int1 = 18297;
            int3 = 34869;
            int2 = 34870;
            int4 = 15121 as dbrow;
            int5 = 16777215;
            break;
        }
        default: {
            return;
        }
    };
    var string0 = dbrow_getfield(script438(varbitplayer_51126), 503824, 0);
    script16498(int4, comp(959, 14));
    stack(int1);
    stack(62849033);
    IF_SETGRAPHIC();
    IF_SETTEXT(`You open your ${string0} and receive`, 62849055);
    IF_SETCOLOUR(int5, 62849045);
    IF_SETCOLOUR(int5, 62849044);
    if ((varbitplayer_51127 == 0)) {
        stack(int2);
        stack(62849036);
        IF_SETGRAPHIC();
    } else {
        stack(int3);
        stack(62849036);
        IF_SETGRAPHIC();
    };
    script16502();
    return;
}