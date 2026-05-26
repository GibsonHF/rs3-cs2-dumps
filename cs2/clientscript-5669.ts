//
function script5669(): void {
    IF_SETTEXT(struct_getparam(varplayer_8242, 7691), 36438019);
    CC_DELETEALL(36438026);
    CC_CREATE(36438026, 4, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETTEXT(struct_getparam(varplayer_8242, 7690));
    CC_SETTEXTFONT(27);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTALIGN(0, 0, 0);
    IF_SETTEXT(struct_getparam(varplayer_8242, 7695), 36438025);
    return;
}