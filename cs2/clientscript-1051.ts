//[proc,quickchat_open_context]
function script1051(int0: int, int1: int, string0: string): void {
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
    script1062(script8599(int1), 0, script1036(), -1 as chatcat, 0, int1);
    return;
}