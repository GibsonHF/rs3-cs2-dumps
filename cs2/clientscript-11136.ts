//
function script11136(string0: string): void {
    var int0 = comp(1600, 13);
    IF_SETTEXT(string0, int0);
    IF_SETONTIMER(callback(script11137, int0, 100), int0);
    return;
}