//
function script15802(int0: number): void {
    IF_SETHIDE(0, 55443459);
    if ((int0 > 0)) {
        IF_SETCOLOUR(script10495(21), 55443459);
        IF_SETTEXT(`+${inttostring(int0, 10)}%`, 55443459);
        IF_SETPOSITION((10 + 2), IF_GETY(55443459), 0, 0, 55443459);
        IF_SETONTIMER(callback(script15803), 55443459);
    } else if ((int0 < 0)) {
        IF_SETCOLOUR(script10495(6), 55443459);
        IF_SETCOLOUR(15413039, 55443459);
        IF_SETTEXT(`-${inttostring(int0, 10)}%`, 55443459);
        IF_SETPOSITION((10 + 2), IF_GETY(55443459), 0, 0, 55443459);
        IF_SETONTIMER(callback(script15804), 55443459);
    };
    return;
}