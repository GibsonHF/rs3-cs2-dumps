//
function script6567(): void {
    if (((varclient_1781 <= 0) || (varclient_1781 > 5))) {
        return;
    };
    IF_SETONMOUSEOVER(callback(), comp(1253, 33));
    IF_SETONMOUSELEAVE(callback(), comp(1253, 33));
    IF_SETONMOUSEOVER(callback(), comp(1253, 23));
    IF_SETONMOUSELEAVE(callback(), comp(1253, 23));
    IF_SETONMOUSEOVER(callback(), comp(1253, 28));
    IF_SETONMOUSELEAVE(callback(), comp(1253, 28));
    IF_SETONMOUSEOVER(callback(), comp(1253, 18));
    IF_SETONMOUSELEAVE(callback(), comp(1253, 18));
    IF_SETONMOUSEOVER(callback(), comp(1253, 13));
    IF_SETONMOUSELEAVE(callback(), comp(1253, 13));
    IF_SETMODELANIM(22652 as seq, comp(1253, 31));
    IF_SETMODELANIM(22652 as seq, comp(1253, 21));
    IF_SETMODELANIM(22652 as seq, comp(1253, 26));
    IF_SETMODELANIM(22652 as seq, comp(1253, 16));
    IF_SETMODELANIM(22652 as seq, comp(1253, 11));
    IF_SETONTIMER(callback(), comp(1253, 31));
    IF_SETONTIMER(callback(), comp(1253, 21));
    IF_SETONTIMER(callback(), comp(1253, 26));
    IF_SETONTIMER(callback(), comp(1253, 16));
    IF_SETONTIMER(callback(), comp(1253, 11));
    var int0 = script16161();
    if ((varbitplayer_25803 == 1)) {
        script6976();
    } else if ((varclient_4083 == 2)) {
        varclient_4083 = 3;
        if ((int0 != -1)) {
            if ((struct_getparam(int0, 8676) == true)) {
                script16776(script16774(int0));
            } else {
                switch (varclient_1928) {
                    case 34: {
                        IF_SETONTIMER(callback(script5898, -2147483645, 300), comp(1253, 0));
                        break;
                    }
                    case 54: {
                        if ((varbitplayer_47441 == 1)) {
                            IF_SETMODELANIM(33402 as seq, comp(696, 5));
                            IF_SETONTIMER(callback(script5898, -2147483645, 60), comp(1253, 0));
                        } else {
                            IF_SETONTIMER(callback(script5898, -2147483645, 300), comp(1253, 0));
                        };
                        break;
                    }
                    case 56:
                    case 60: {
                        IF_SETONTIMER(callback(script5898, -2147483645, 300), comp(1253, 0));
                        break;
                    }
                    default: {
                        IF_SETONTIMER(callback(script5898, -2147483645, 0), comp(1253, 0));
                        break;
                    }
                };
            };
        } else {
            switch (varclient_1928) {
                case 34: {
                    IF_SETONTIMER(callback(script5898, -2147483645, 300), comp(1253, 0));
                    break;
                }
                case 54: {
                    if ((varbitplayer_47441 == 1)) {
                        IF_SETMODELANIM(33402 as seq, comp(696, 5));
                        IF_SETONTIMER(callback(script5898, -2147483645, 60), comp(1253, 0));
                    } else {
                        IF_SETONTIMER(callback(script5898, -2147483645, 300), comp(1253, 0));
                    };
                    break;
                }
                case 56:
                case 60: {
                    IF_SETONTIMER(callback(script5898, -2147483645, 300), comp(1253, 0));
                    break;
                }
                default: {
                    IF_SETONTIMER(callback(script5898, -2147483645, 0), comp(1253, 0));
                    break;
                }
            };
        };
    };
    script9123();
    script1545();
    script16198(0, 82116873);
    return;
}