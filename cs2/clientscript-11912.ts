//
function script11912(): void {
    var int0 = script9094();
    IF_SETHIDE(true, struct_getparam(int0, 8268));
    IF_SETTEXT("Power Name", struct_getparam(int0, 8231));
    IF_SETTEXT("Drag a power onto this information box to view relevant information about it.", struct_getparam(int0, 8232));
    IF_SETTEXT("", struct_getparam(int0, 8932));
    stack(-1);
    stack(struct_getparam(int0, 8237));
    IF_SETGRAPHIC();
    stack(1);
    stack(int0);
    stack(8934);
    struct_getparam();
    IF_SETHIDE(stack());
    stack(1);
    stack(int0);
    stack(8935);
    struct_getparam();
    IF_SETHIDE(stack());
    stack(0);
    stack(int0);
    stack(8240);
    struct_getparam();
    IF_SETHIDE(stack());
    script7474(0);
    stack(int0);
    stack(8234);
    struct_getparam();
    if ((IF_FIND(stack()) == 1)) {
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETSCROLLPOS(0, 0);
        CC_SETSCROLLSIZE(0, 0);
    };
    CC_DELETEALL(struct_getparam(int0, 8235));
    return;
}