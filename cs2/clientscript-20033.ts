//
function script20033(): void {
    var int0 = script11882(varplayer_12241, 25);
    var string0 = TOSTRING_LOCALISED(int0, 1);
    if ((int0 >= 400)) {
        string0 = `<col=FF00>${TOSTRING_LOCALISED(int0, 1)}</col>`;
    };
    stack(17090);
    stack(82116921);
    IF_SETGRAPHIC();
    IF_SETPOSITION(0, 15, 1, 2, 82116922);
    IF_SETTEXT(`${inttostring(25, 10)}x ${OC_NAME(59267)}<br><br><br>Total: ${string0}`, 82116922);
    IF_SETPOSITION(0, 25, 1, 0, 82116921);
    IF_SETSIZE(68, 68, 0, 0, 82116921);
    IF_SETHIDE(1, 82116920);
    return;
}