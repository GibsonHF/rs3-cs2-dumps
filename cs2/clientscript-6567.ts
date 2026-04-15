//
function script6567(): void {
    if (((varclient_1781 <= 0) || (varclient_1781 > 5))) {
        return;
    };
    IF_SETONMOUSEOVER(callback(), comp(1253, 33));
    IF_SETONMOUSELEAVE(callback(), 82116641);
    IF_SETONMOUSEOVER(callback(), 82116631);
    IF_SETONMOUSELEAVE(callback(), 82116631);
    IF_SETONMOUSEOVER(callback(), 82116636);
    IF_SETONMOUSELEAVE(callback(), 82116636);
    IF_SETONMOUSEOVER(callback(), 82116626);
    IF_SETONMOUSELEAVE(callback(), 82116626);
    IF_SETONMOUSEOVER(callback(), 82116621);
    IF_SETONMOUSELEAVE(callback(), 82116621);
    IF_SETMODELANIM(22652, 82116639);
    IF_SETMODELANIM(22652, 82116629);
    IF_SETMODELANIM(22652, 82116634);
    IF_SETMODELANIM(22652, 82116624);
    IF_SETMODELANIM(22652, 82116619);
    IF_SETONTIMER(callback(), 82116639);
    IF_SETONTIMER(callback(), 82116629);
    IF_SETONTIMER(callback(), 82116634);
    IF_SETONTIMER(callback(), 82116624);
    IF_SETONTIMER(callback(), 82116619);
    var int0 = script16161();
    if ((varbitplayer_25803 == 1)) {
        script6976();
    } else if ((varclient_4083 == 2)) {
        varclient_4083 = 3;
        if (((int0 != -1 as struct) && (struct_getparam(int0, 8676) == true))) {
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
    };
    script9123();
    script1545();
    script16198(false, 82116873);
    return;
}