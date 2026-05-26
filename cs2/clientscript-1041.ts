//[proc,quickchat_objdialog_refreshsearch]
function script1041(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    CC_DELETEALL(int1);
    if ((STRING_LENGTH(script8611(int4)) > 0)) {
        script1039(int0, int1, int2, int3, int4);
    } else {
        IF_SETSCROLLSIZE(0, 0, int1);
        script1042(int1, int2);
    };
    return;
}