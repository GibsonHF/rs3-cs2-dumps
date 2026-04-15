//
function script2883(int0: component): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    if (((IF_GETGRAPHIC(int0) != 16947 as graphic) && (IF_GETGRAPHIC(int0) != 16946 as graphic))) {
        stack(16947);
        stack(int0);
        IF_SETGRAPHIC();
    };
    script8800("Clear playlist", int0, -1);
    return;
}