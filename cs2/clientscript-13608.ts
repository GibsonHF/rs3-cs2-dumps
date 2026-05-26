//
function script13608(): void {
    script13602();
    IF_SETHIDE(true, comp(1896, 5));
    CC_DELETEALL(comp(1896, 4));
    CC_CREATE(comp(1896, 4), 4, 0);
    CC_SETPOSITION(0, 25, 0, 0);
    CC_SETSIZE(0, 25, 1, 1);
    CC_SETTEXT("The person you were inspecting can no longer be found");
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(55 as fontmetrics);
    CC_SETCOLOUR(script10495(0));
    return;
}