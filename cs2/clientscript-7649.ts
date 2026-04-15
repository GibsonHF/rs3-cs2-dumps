//
function script7649(int0: component): void {
    if (((varbitplayer_207 == 1) || (varbitplayer_3028 == 1))) {
        return;
    };
    if ((varclient_2746 == 0)) {
        script8800("Shuffle on", int0, -1);
        stack(16928);
        stack(int0);
        IF_SETGRAPHIC();
    } else {
        script8800("Shuffle off", int0, -1);
        stack(16926);
        stack(int0);
        IF_SETGRAPHIC();
    };
    return;
}