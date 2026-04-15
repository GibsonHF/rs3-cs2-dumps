//
function script13717(): void {
    var string0 = "null";
    if ((varbitplayer_38416 == 0)) {
        string0 = `<col=00FF00>${inttostring(varbitplayer_38505, 10)} Dismissed`;
    } else {
        string0 = `<col=FF0000>${inttostring(varbitplayer_38505, 10)} Slain`;
    };
    IF_SETTEXT(`Current Streak<br>${string0}`, comp(1910, 4));
    return;
}