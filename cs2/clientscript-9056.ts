//
function script9056(): void {
    IF_SETHIDE(true, comp(1851, 30));
    IF_SETTEXT("", comp(1851, 83));
    CC_DELETEALL(comp(1851, 84));
    if ((IF_FIND(comp(1851, 83)) == 1)) {
        CC_SETSIZE(10, 30, 1, 1);
        CC_SETSCROLLSIZE(0, 0);
        CC_SETSCROLLPOS(0, 0);
    };
    return;
}