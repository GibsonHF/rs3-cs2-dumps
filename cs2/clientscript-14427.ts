//
function script14427(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = 0;
    script13003();
    switch (varbitplayer_53019) {
        case 71: {
            int1 = 28709;
            int3 = 28738;
            int2 = 28739;
            int4 = 7486;
            int5 = 65280;
            break;
        }
        case 72: {
            int1 = 28736;
            int3 = 28743;
            int2 = 28744;
            int4 = 7487;
            int5 = 16711680;
            break;
        }
        case 73: {
            int1 = 28737;
            int3 = 28745;
            int2 = 28788;
            int4 = 7488;
            int5 = 16777215;
            break;
        }
        case 67: {
            int1 = 28709;
            int3 = 28738;
            int2 = 28739;
            int4 = 7486;
            int5 = 65280;
            break;
        }
        case 68: {
            int1 = 28736;
            int3 = 28743;
            int2 = 28744;
            int4 = 7487;
            int5 = 16711680;
            break;
        }
        case 69: {
            int1 = 28737;
            int3 = 28745;
            int2 = 28788;
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
    IF_SETGRAPHIC(int1, comp(1154, 8));  // trh194_overlay:progress_bar_graphic
    IF_SETTEXT(`You open your ${string0} and receive`, comp(1154, 30));  // trh194_overlay:prize_claim_title
    IF_SETCOLOUR(int5, comp(1154, 20));  // trh194_overlay:light_flare
    IF_SETCOLOUR(int5, comp(1154, 19));  // trh194_overlay:glow
    if ((varbitplayer_53022 == 0)) {
        IF_SETGRAPHIC(int2, comp(1154, 11));  // trh194_overlay:progress_lock
    } else {
        IF_SETGRAPHIC(int3, comp(1154, 11));  // trh194_overlay:progress_lock
    };
    script17419();
    return;
}