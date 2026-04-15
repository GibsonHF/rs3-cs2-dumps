//
function script9687(int0: component, int1: component, int2: int, int3: unknown_int): void {
    var int4 = (int2 + 1);
    if ((int3 == 1)) {
        IF_SETMODELANIM(22643 as seq, int1);
    };
    if ((int2 == 25)) {
        switch (int1) {
            case 82116639: {
                IF_SETMODELANIM(22653 as seq, int1);
                break;
            }
            case 82116629: {
                IF_SETMODELANIM(22653 as seq, int1);
                break;
            }
            case 82116634: {
                IF_SETMODELANIM(22653 as seq, int1);
                break;
            }
            case 82116624: {
                IF_SETMODELANIM(22653 as seq, int1);
                break;
            }
            case 82116619: {
                IF_SETMODELANIM(22653 as seq, int1);
                break;
            }
            case 103874580: {
                IF_SETMODELANIM(22653 as seq, int1);
                break;
            }
            case 103874589: {
                IF_SETMODELANIM(22653 as seq, int1);
                break;
            }
            case 103874584: {
                IF_SETMODELANIM(22653 as seq, int1);
                break;
            }
            case 103874574: {
                IF_SETMODELANIM(22653 as seq, int1);
                break;
            }
            case 103874570: {
                IF_SETMODELANIM(22653 as seq, int1);
                break;
            }
            case 103874566: {
                IF_SETMODELANIM(22653 as seq, int1);
                break;
            }
        };
    };
    var int5 = 0;
    if ((int2 == (25 + SEQLENGTH(22653 as seq)))) {
        IF_SETMODELANIM(-1 as seq, int1);
        IF_SETONTIMER(callback(), int0);
        int5 = RANDOM(100);
        IF_SETONTIMER(callback(script9683, int1, int5), int1);
        IF_SETONMOUSEOVER(callback(script9685, int1), int0);
        IF_SETONMOUSELEAVE(callback(script9686, int1), int0);
        return;
    };
    IF_SETONTIMER(callback(script9687, int0, int1, int4, 0), int0);
    return;
}