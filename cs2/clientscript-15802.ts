//
function script15802(int0: int): void {
    IF_SETHIDE(false, comp(846, 3));
    if ((int0 > 0)) {
        IF_SETCOLOUR(script10495(21), comp(846, 3));
        IF_SETTEXT(`+${inttostring(int0, 10)}%`, comp(846, 3));
        IF_SETPOSITION((10 + 2), IF_GETY(comp(846, 3)), 0, 0, comp(846, 3));
        IF_SETONTIMER(callback(script15803), comp(846, 3));
    } else if ((int0 < 0)) {
        IF_SETCOLOUR(script10495(6), comp(846, 3));
        IF_SETCOLOUR(15413039, comp(846, 3));
        IF_SETTEXT(`-${inttostring(int0, 10)}%`, comp(846, 3));
        IF_SETPOSITION((10 + 2), IF_GETY(comp(846, 3)), 0, 0, comp(846, 3));
        IF_SETONTIMER(callback(script15804), comp(846, 3));
    };
    return;
}