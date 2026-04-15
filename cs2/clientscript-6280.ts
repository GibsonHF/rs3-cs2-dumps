//
function script6280(int0: unknown_int): void {
    IF_SETHIDE(true, comp(1297, 239));
    IF_SETHIDE(true, comp(1297, 238));
    IF_SETHIDE(true, comp(1297, 237));
    IF_SETHIDE(true, comp(1297, 241));
    IF_SETHIDE(true, comp(1297, 240));
    IF_SETHIDE(true, comp(1297, 270));
    IF_SETHIDE(true, comp(1297, 263));
    IF_SETHIDE(true, comp(1297, 256));
    if ((int0 == 1)) {
        IF_SETTEXT("Taunt", comp(1297, 124));
        IF_SETHIDE(false, comp(1297, 239));
        IF_SETHIDE(false, comp(1297, 240));
        IF_SETHIDE(false, comp(1297, 270));
    } else if ((int0 == 2)) {
        IF_SETTEXT("Title", comp(1297, 124));
        IF_SETHIDE(false, comp(1297, 238));
        IF_SETHIDE(false, comp(1297, 241));
        IF_SETHIDE(false, comp(1297, 263));
    } else {
        IF_SETTEXT("Reward", comp(1297, 124));
        IF_SETHIDE(false, comp(1297, 237));
        IF_SETHIDE(false, comp(1297, 256));
    };
    return;
}