//
function script5669(): void {
    IF_SETTEXT(struct_getparam(varplayer_8242, 7691), comp(556, 3));  // investigate:info_text
    CC_DELETEALL(comp(556, 10));  // investigate:information
    CC_CREATE(comp(556, 10), 4, 0);  // investigate:information
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETTEXT(struct_getparam(varplayer_8242, 7690));
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTALIGN(0, 0, 0);
    IF_SETTEXT(struct_getparam(varplayer_8242, 7695), 36438025);
    return;
}