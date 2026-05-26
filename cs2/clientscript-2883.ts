//
function script2883(int0: number): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    if (((IF_GETGRAPHIC(int0) != 16947) && (IF_GETGRAPHIC(int0) != 16946))) {
        IF_SETGRAPHIC(16947, int0);
    };
    script8800("Clear playlist", int0, -1);
    return;
}