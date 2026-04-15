//
function script4004(int0: obj): void {
    if ((OC_CATEGORY(int0) == 4463 as category)) {
        IF_SETHIDE(true, comp(1263, 3));
        IF_SETHIDE(false, comp(1263, 5));
        IF_SETTEXT(`(+${inttostring(item_getparam(int0, 4810), 10)}%)`, comp(1263, 12));
    } else {
        IF_SETHIDE(false, comp(1263, 3));
        IF_SETHIDE(true, comp(1263, 5));
    };
    return;
}