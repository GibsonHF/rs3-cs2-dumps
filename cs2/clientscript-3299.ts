//[clientscript,rand_inspect_examine]
function script3299(int0: inv, int1: int): void {
    if ((INVOTHER_GETOBJ(int0, int1) != -1 as obj)) {
        printmessage(OC_NAME(INVOTHER_GETOBJ(int0, int1)));
    };
    return;
}