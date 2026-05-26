//
function script2882(int0: number): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    if ((varbitplayer_187 == 0)) {
        script8800("Playlist on", int0, -1);
        IF_SETGRAPHIC(16944 as graphic, int0);
    } else {
        script8800("Playlist off", int0, -1);
        IF_SETGRAPHIC(16942 as graphic, int0);
    };
    return;
}