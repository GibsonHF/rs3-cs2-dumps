//[proc,quickchat_open]
function script1050(int0: int, int1: int, string0: string): void {
    if ((script6431() == true)) {
        printmessage("Quick Chat is currently disabled on mobile.");
        return;
    };
    if (((int1 == 19) || (int1 == 1019))) {
        var int1 = script7026(int1);
    };
    if ((script174(int0, string0, true, int1) == 0)) {
        return;
    };
    script1062(script8599(int1), 0, 85 as chatcat, script1036(), 1, int1);
    if ((IF_FIND(script8586(int1)) == 1)) {
        cc_setparam(3651, 0);
    };
    return;
}