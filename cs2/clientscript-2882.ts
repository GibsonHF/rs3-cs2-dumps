//
function script2882(int0: component): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    if ((varbitplayer_187 == 0)) {
        script8800("Playlist on", int0, -1);
        stack(16944);
        stack(int0);
        IF_SETGRAPHIC();
    } else {
        script8800("Playlist off", int0, -1);
        stack(16942);
        stack(int0);
        IF_SETGRAPHIC();
    };
    return;
}