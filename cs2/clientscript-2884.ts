//
function script2884(int0: component): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    if ((varbitplayer_188 == 0)) {
        if ((IF_GETGRAPHIC(int0) != 16928 as graphic)) {
            stack(16928);
            stack(int0);
            IF_SETGRAPHIC();
        };
        script8800("Shuffle on", int0, -1);
    } else {
        if ((IF_GETGRAPHIC(int0) != 16926 as graphic)) {
            stack(16926);
            stack(int0);
            IF_SETGRAPHIC();
        };
        script8800("Shuffle off", int0, -1);
    };
    return;
}