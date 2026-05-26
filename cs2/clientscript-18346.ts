//
function script18346(): void {
    varbitplayer_54764 = MAX(1, varbitplayer_54764);
    var int0 = -1;
    if ((varbitplayer_54764 < 2)) {
        IF_SETHIDE(1, 83296279);
        IF_SETHIDE(1, 83296288);
        IF_SETHIDE(1, 83296297);
    } else {
        int0 = script10980(varbitplayer_54764);
        stack(int0);
        stack(83296279);
        IF_SETGRAPHIC();
        stack(int0);
        stack(83296288);
        IF_SETGRAPHIC();
        stack(int0);
        stack(83296297);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, 83296279);
        IF_SETHIDE(0, 83296288);
        IF_SETHIDE(0, 83296297);
    };
    return;
}