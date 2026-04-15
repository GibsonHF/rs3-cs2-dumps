//
function script17419(): void {
    IF_SETSIZE(600, 500, 0, 0, comp(1253, 30));
    IF_SETSIZE(220, 190, 0, 0, comp(1253, 32));
    IF_SETPOSITION(20, 30, 0, 0, comp(1253, 31));
    IF_SETPOSITION(90, 0, 0, 0, comp(1253, 32));
    var int0 = 0;
    if ((varbitplayer_53022 == 0)) {
        IF_SETMODELANIM(22646 as seq, comp(1253, 31));
        IF_SETONTIMER(callback(), comp(1253, 31));
        IF_SETONMOUSEOVER(callback(), 82116641);
        IF_SETONMOUSELEAVE(callback(), 82116641);
        IF_SETOPCURSOR(1, 49, 82116641);
    } else {
        IF_SETOPCURSOR(1, 201 as cursor, comp(1253, 33));
        IF_SETMODELANIM(22645 as seq, comp(1253, 31));
        int0 = (22 + RANDOM(72));
        IF_SETONTIMER(callback(script9683, 82116639, int0), comp(1253, 31));
        IF_SETONTIMER(callback(), 82116641);
        IF_SETONMOUSEOVER(callback(script9685, 82116639), 82116641);
        IF_SETONMOUSELEAVE(callback(script9686, 82116639), 82116641);
    };
    return;
}