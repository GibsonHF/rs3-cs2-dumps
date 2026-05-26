//
function script14427(): void {
    var int0 = -1;
    var int1 = -1 as graphic;
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    var int4 = -1;
    var int5 = 0;
    script13003();
    switch (varbitplayer_53019) {
        case 71: {
            int1 = 28709 as graphic;
            int3 = 28738 as graphic;
            int2 = 28739 as graphic;
            int4 = 7486;
            int5 = 65280;
            break;
        }
        case 72: {
            int1 = 28736 as graphic;
            int3 = 28743 as graphic;
            int2 = 28744 as graphic;
            int4 = 7487;
            int5 = 16711680;
            break;
        }
        case 73: {
            int1 = 28737 as graphic;
            int3 = 28745 as graphic;
            int2 = 28788 as graphic;
            int4 = 7488;
            int5 = 16777215;
            break;
        }
        case 67: {
            int1 = 28709 as graphic;
            int3 = 28738 as graphic;
            int2 = 28739 as graphic;
            int4 = 7486;
            int5 = 65280;
            break;
        }
        case 68: {
            int1 = 28736 as graphic;
            int3 = 28743 as graphic;
            int2 = 28744 as graphic;
            int4 = 7487;
            int5 = 16711680;
            break;
        }
        case 69: {
            int1 = 28737 as graphic;
            int3 = 28745 as graphic;
            int2 = 28788 as graphic;
            int4 = 7488;
            int5 = 16777215;
            break;
        }
        default: {
            return;
        }
    };
    var string0 = dbrow_getfield(script438(varbitplayer_53019), 503824, 0);
    script17417(int4, 75628557);
    IF_SETGRAPHIC(int1, comp(1154, 8));
    IF_SETTEXT(`You open your ${string0} and receive`, comp(1154, 30));
    IF_SETCOLOUR(int5, comp(1154, 20));
    IF_SETCOLOUR(int5, comp(1154, 19));
    if ((varbitplayer_53022 == 0)) {
        IF_SETGRAPHIC(int2, comp(1154, 11));
    } else {
        IF_SETGRAPHIC(int3, comp(1154, 11));
    };
    script17419();
    return;
}