//
function script5273(int0: number, string0: string): void {
    IF_SETHIDE(false, comp(1137, 15));  // cmtool_if:mesbox
    IF_SETTEXT(string0, comp(1137, 18));  // cmtool_if:mesboxtext
    if ((IF_FIND(comp(1137, 15)) == 1)) {  // cmtool_if:mesbox
        CC_SETPARAM_INT(1103, int0);
    };
    return;
}