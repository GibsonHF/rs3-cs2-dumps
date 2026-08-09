//
function script16502(): void {
    var int0 = 0;
    if ((varbitplayer_51127 == 0)) {
        IF_SETMODELANIM(22646 as seq, comp(1253, 31));
        IF_SETONTIMER(callback(), comp(1253, 31));
        IF_SETONMOUSEOVER(callback(), comp(1253, 33));
        IF_SETONMOUSELEAVE(callback(), comp(1253, 33));
        IF_SETOPCURSOR(1, 49, comp(1253, 33));
    } else {
        IF_SETOPCURSOR(1, 201, comp(1253, 33));
        IF_SETMODELANIM(22645 as seq, comp(1253, 31));
        int0 = (22 + RANDOM(72));
        IF_SETONTIMER(callback(script9683, 82116639, int0), comp(1253, 31));
        IF_SETONTIMER(callback(), comp(1253, 33));
        IF_SETONMOUSEOVER(callback(script9685, 82116639), comp(1253, 33));
        IF_SETONMOUSELEAVE(callback(script9686, 82116639), comp(1253, 33));
    };
    return;
}