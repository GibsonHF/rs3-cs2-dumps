//
function script14427(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1 as dbrow;
    var int5 = 0;
    script13003();
    switch (varbitplayer_53019) {
        case 71: {
            int1 = 28709;
            int3 = 28738;
            int2 = 28739;
            int4 = 7486 as dbrow;
            int5 = 65280;
            break;
        }
        case 72: {
            int1 = 28736;
            int3 = 28743;
            int2 = 28744;
            int4 = 7487 as dbrow;
            int5 = 16711680;
            break;
        }
        case 73: {
            int1 = 28737;
            int3 = 28745;
            int2 = 28788;
            int4 = 7488 as dbrow;
            int5 = 16777215;
            break;
        }
        case 67: {
            int1 = 28709;
            int3 = 28738;
            int2 = 28739;
            int4 = 7486 as dbrow;
            int5 = 65280;
            break;
        }
        case 68: {
            int1 = 28736;
            int3 = 28743;
            int2 = 28744;
            int4 = 7487 as dbrow;
            int5 = 16711680;
            break;
        }
        case 69: {
            int1 = 28737;
            int3 = 28745;
            int2 = 28788;
            int4 = 7488 as dbrow;
            int5 = 16777215;
            break;
        }
        default: {
            return;
        }
    };
    var string0 = dbrow_getfield(script438(varbitplayer_53019), 503824, 0);
    script17417(int4, comp(1154, 13));
    stack(int1);
    stack(75628552);
    IF_SETGRAPHIC();
    IF_SETTEXT(`You open your ${string0} and receive`, 75628574);
    IF_SETCOLOUR(int5, 75628564);
    IF_SETCOLOUR(int5, 75628563);
    if ((varbitplayer_53022 == 0)) {
        stack(int2);
        stack(75628555);
        IF_SETGRAPHIC();
    } else {
        stack(int3);
        stack(75628555);
        IF_SETGRAPHIC();
    };
    script17419();
    return;
}