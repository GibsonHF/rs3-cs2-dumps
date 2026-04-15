//
function script19132(): string {
    var string0 = "";
    if ((varbitplayer_55993 == 1)) {
        string0 = "Teleport: <col=00ff00>Charged";
    } else {
        string0 = "Teleport: <col=969696>Not yet charged";
    };
    return `Absorbed energy: <col=00ff00>${TOSTRING_LOCALISED(varbitplayer_55992, 1)}<br>${string0}<br>Current attunement: <col=00ff00>${script19131(varbitplayer_55991)}`;
}