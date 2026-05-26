//
function script11912(): void {
    var int0 = script9094();
    IF_SETHIDE(true, struct_getparam(int0, 8268));
    IF_SETTEXT("Power Name", struct_getparam(int0, 8231));
    IF_SETTEXT("Drag a power onto this information box to view relevant information about it.", struct_getparam(int0, 8232));
    IF_SETTEXT("", struct_getparam(int0, 8932));
    IF_SETGRAPHIC(-1 as graphic, struct_getparam(int0, 8237));
    IF_SETHIDE(true, struct_getparam(int0, 8934));
    IF_SETHIDE(true, struct_getparam(int0, 8935));
    IF_SETHIDE(false, struct_getparam(int0, 8240));
    script7474(0);
    if ((IF_FIND(struct_getparam(int0, 8234)) == 1)) {
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETSCROLLPOS(0, 0);
        CC_SETSCROLLSIZE(0, 0);
    };
    CC_DELETEALL(struct_getparam(int0, 8235));
    return;
}