//
function script10351(): void {
    var int0 = IF_GETSCROLLWIDTH(33882280);
    var int1 = IF_GETWIDTH(33882270);
    if (((int0 + 48) < int1)) {
        IF_SETHIDE(1, 33882271);
        IF_SETHIDE(1, 33882274);
        IF_SETPOSITION(0, 0, 0, 0, 33882277);
        IF_SETPOSITION(48, 0, 0, 0, 33882280);
        IF_SETSIZE(48, 38, 1, 0, 33882280);
        IF_SETPOSITION((48 - 4), 0, 0, 0, 33882283);
        IF_SETSIZE(48, (38 + 12), 1, 0, 33882283);
        IF_SETSCROLLPOS(0, 0, 33882280);
        IF_SETSCROLLPOS(0, 0, 33882283);
        IF_SETONSCROLLWHEEL(callback(), 33882270);
    } else {
        IF_SETHIDE(0, 33882271);
        IF_SETHIDE(0, 33882274);
        IF_SETPOSITION(24, 0, 0, 0, 33882277);
        IF_SETPOSITION((48 + 24), 0, 0, 0, 33882280);
        IF_SETSIZE((48 * 2), 38, 1, 0, 33882280);
        IF_SETPOSITION(((48 + 24) - 4), 0, 0, 0, 33882283);
        IF_SETSIZE(((48 + 24) + 12), 38, 1, 0, 33882283);
        IF_SETONSCROLLWHEEL(callback(script10471, -2147483646), 33882270);
    };
    IF_SETSIZE(0, 36, 1, 1, 33882269);
    IF_SETSIZE(8, 38, 1, 0, 33882270);
    IF_SETPOSITION(0, 0, 1, 0, 33882270);
    IF_SETPOSITION(5, 2, 0, 0, 33882279);
    IF_SETSIZE((24 - 1), 1, 0, 1, 33882271);
    IF_SETSIZE((24 - 1), 1, 0, 1, 33882274);
    IF_SETPOSITION(0, 0, 2, 0, 33882274);
    IF_SETOP(1, "Scroll Left", 33882271);
    IF_SETOP(1, "Scroll Right", 33882274);
    IF_SETSIZE(11, 18, 0, 0, 33882273);
    IF_SETSIZE(11, 18, 0, 0, 33882276);
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