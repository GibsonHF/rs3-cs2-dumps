//
function script19261(): void {
    var int0 = 0;
    IF_SETMODELANIM(22645 as seq, comp(1253, 31));
    int0 = (22 + RANDOM(72));
    IF_SETONTIMER(callback(script9683, 82116639, int0), comp(1253, 31));
    IF_SETONTIMER(callback(), 82116641);
    IF_SETONMOUSEOVER(callback(script19262, 82116639), 82116641);
    IF_SETONMOUSELEAVE(callback(script9686, 82116639), 82116641);
    IF_SETMODELANIM(22645, 82116629);
    int0 = (22 + RANDOM(72));
    IF_SETONTIMER(callback(script9683, 82116629, int0), 82116629);
    IF_SETONTIMER(callback(), 82116631);
    IF_SETONMOUSEOVER(callback(script19262, 82116629), 82116631);
    IF_SETONMOUSELEAVE(callback(script9686, 82116629), 82116631);
    IF_SETMODELANIM(22645, 82116634);
    int0 = (22 + RANDOM(72));
    IF_SETONTIMER(callback(script9683, 82116634, int0), 82116634);
    IF_SETONTIMER(callback(), 82116636);
    IF_SETONMOUSEOVER(callback(script19262, 82116634), 82116636);
    IF_SETONMOUSELEAVE(callback(script9686, 82116634), 82116636);
    return;
}