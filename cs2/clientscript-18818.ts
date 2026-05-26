//
function script18818(): void {
    var int0 = script11882(varplayer_10448, 40);
    var string0 = TOSTRING_LOCALISED(int0, 1);
    if ((int0 >= 500)) {
        string0 = `<col=FF00>${TOSTRING_LOCALISED(int0, 1)}</col>`;
    };
    stack(19536);
    stack(82116921);
    IF_SETGRAPHIC();
    IF_SETPOSITION(0, 15, 1, 2, 82116922);
    IF_SETTEXT(`${inttostring(40, 10)}x ${OC_NAME(53206)}<br><br><br>Total: ${string0}`, 82116922);
    IF_SETPOSITION(0, 25, 1, 0, 82116921);
    IF_SETSIZE(75, 75, 0, 0, 82116921);
    IF_SETHIDE(1, 82116920);
    return;
}