//
function script10243(): void {
    var int0 = IF_GETSCROLLHEIGHT(comp(517, 168));
    var int1 = IF_GETHEIGHT(comp(517, 158));
    if (((int0 + 48) < int1)) {
        IF_SETHIDE(true, comp(517, 159));
        IF_SETHIDE(true, comp(517, 162));
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 165));
        IF_SETPOSITION(0, 48, 0, 0, comp(517, 168));
        IF_SETSIZE(38, 48, 0, 1, comp(517, 168));
        IF_SETPOSITION(0, (48 - 4), 0, 0, comp(517, 171));
        IF_SETSIZE(38, (48 + 12), 0, 1, comp(517, 171));
        IF_SETSCROLLPOS(0, 0, comp(517, 168));
        IF_SETSCROLLPOS(0, 0, comp(517, 171));
        IF_SETONSCROLLWHEEL(callback(), comp(517, 158));
        IF_SETONVERTICALSWIPE(callback(), 33882270);
        IF_SETONHORIZONTALSWIPE(callback(), 33882270);
    } else {
        IF_SETHIDE(false, comp(517, 159));
        IF_SETHIDE(false, comp(517, 162));
        IF_SETPOSITION(0, 24, 0, 0, comp(517, 165));
        IF_SETPOSITION(0, (48 + 24), 0, 0, comp(517, 168));
        IF_SETSIZE(38, (48 * 2), 0, 1, comp(517, 168));
        IF_SETPOSITION(0, ((48 + 24) - 4), 0, 0, comp(517, 171));
        IF_SETSIZE(38, ((48 + 24) + 12), 0, 1, comp(517, 171));
        IF_SETONSCROLLWHEEL(callback(script10471, -2147483646), comp(517, 158));
        IF_SETONVERTICALSWIPE(callback(script10471, -2147483646), 33882270);
        IF_SETONHORIZONTALSWIPE(callback(), 33882270);
    };
    IF_SETSIZE(36, 0, 1, 1, comp(517, 157));
    IF_SETSIZE(38, 8, 0, 1, comp(517, 158));
    IF_SETPOSITION(0, 0, 0, 1, comp(517, 158));
    IF_SETPOSITION(0, 7, 0, 0, comp(517, 167));
    IF_SETSIZE(1, (24 - 1), 1, 0, comp(517, 159));
    IF_SETSIZE(1, (24 - 1), 1, 0, comp(517, 162));
    IF_SETPOSITION(0, 0, 0, 2, comp(517, 162));
    IF_SETOP(1, "Scroll Up", comp(517, 159));
    IF_SETOP(1, "Scroll Down", comp(517, 162));
    IF_SETSIZE(18, 11, 0, 0, comp(517, 161));
    IF_SETSIZE(18, 11, 0, 0, comp(517, 164));
    stack(8085);
    stack(33882273);
    IF_SETGRAPHIC();
    stack(8085);
    stack(33882276);
    IF_SETGRAPHIC();
    IF_SETVFLIP(1, 33882276);
    stack(0);
    stack(33882276);
    IF_SETGRAPHIC();
    IF_SETSIZE(38, 48, 0, 0, 33882277);
    return;
}