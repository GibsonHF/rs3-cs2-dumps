//
function script21257(): void {
    var int1 = 0;
    var int2 = 0;
    if ((IF_GETHIDE(int0) == true)) {
        stack(0);
        return;
    };
    int1 = script8403(int0);
    int2 = script8404(int0);
    if (((((int1 >= 0) && (int1 <= IF_GETWIDTH(int0))) && (int2 >= 0)) && (int2 <= IF_GETHEIGHT(int0)))) {
        stack(1);
        return;
    };
    stack(0);
    return;
}