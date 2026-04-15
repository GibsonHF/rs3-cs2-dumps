//[proc,quickchat_respond]
function script1052(int0: int, int1: chatphrase, int2: int, string0: string): void {
    if (((int2 == 19) || (int2 == 1019))) {
        var int2 = script7026(int2);
    };
    if (((int1 == -1 as chatphrase) || (CHATPHRASE_GETAUTORESPONSECOUNT(int1) == 0))) {
        return;
    };
    if ((script174(int0, string0, true, int2) == 0)) {
        return;
    };
    script1063(script8599(int2), int1, int2);
    return;
}