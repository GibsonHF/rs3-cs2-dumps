//[proc,prayer_refresh_scrollbar]
function script1704(int0: component, int1: component): void {
    if ((IF_GETSCROLLHEIGHT(int1) <= IF_GETHEIGHT(int1))) {
        CC_DELETEALL(int0);
    } else {
        script7791(int0, int1);
    };
    return;
}