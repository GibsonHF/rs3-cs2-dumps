//
function script10351(): void {
    var int0 = IF_GETSCROLLWIDTH(comp(517, 168));
    var int1 = IF_GETWIDTH(comp(517, 158));
    if (((int0 + 48) < int1)) {
        IF_SETHIDE(true, comp(517, 159));
        IF_SETHIDE(true, comp(517, 162));
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 165));
        IF_SETPOSITION(48, 0, 0, 0, comp(517, 168));
        IF_SETSIZE(48, 38, 1, 0, comp(517, 168));
        IF_SETPOSITION((48 - 4), 0, 0, 0, comp(517, 171));
        IF_SETSIZE(48, (38 + 12), 1, 0, comp(517, 171));
        IF_SETSCROLLPOS(0, 0, comp(517, 168));
        IF_SETSCROLLPOS(0, 0, comp(517, 171));
        IF_SETONSCROLLWHEEL(callback(), comp(517, 158));
    } else {
        IF_SETHIDE(false, comp(517, 159));
        IF_SETHIDE(false, comp(517, 162));
        IF_SETPOSITION(24, 0, 0, 0, comp(517, 165));
        IF_SETPOSITION((48 + 24), 0, 0, 0, comp(517, 168));
        IF_SETSIZE((48 * 2), 38, 1, 0, comp(517, 168));
        IF_SETPOSITION(((48 + 24) - 4), 0, 0, 0, comp(517, 171));
        IF_SETSIZE(((48 + 24) + 12), 38, 1, 0, comp(517, 171));
        IF_SETONSCROLLWHEEL(callback(script10471, -2147483646), comp(517, 158));
    };
    IF_SETSIZE(0, 36, 1, 1, comp(517, 157));
    IF_SETSIZE(8, 38, 1, 0, comp(517, 158));
    IF_SETPOSITION(0, 0, 1, 0, comp(517, 158));
    IF_SETPOSITION(5, 2, 0, 0, comp(517, 167));
    IF_SETSIZE((24 - 1), 1, 0, 1, comp(517, 159));
    IF_SETSIZE((24 - 1), 1, 0, 1, comp(517, 162));
    IF_SETPOSITION(0, 0, 2, 0, comp(517, 162));
    IF_SETOP(1, "Scroll Left", comp(517, 159));
    IF_SETOP(1, "Scroll Right", comp(517, 162));
    IF_SETSIZE(11, 18, 0, 0, comp(517, 161));
    IF_SETSIZE(11, 18, 0, 0, comp(517, 164));
    stack(21244);
    stack(33882273);
    IF_SETGRAPHIC();
    stack(21244);
    stack(33882276);
    IF_SETGRAPHIC();
    IF_SETVFLIP(0, 33882276);
    stack(1);
    stack(33882276);
    IF_SETGRAPHIC();
    IF_SETSIZE(48, 38, 0, 0, 33882277);
    return;
}