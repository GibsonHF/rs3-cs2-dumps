//
function script9498(): void {
    if ((varclient_3892 == 1)) {
        IF_SETTEXT(`War map teleport enabled in ${inttostring(((varclient_3891 + 49) / 50), 10)}s`, comp(749, 70));
    } else if ((varbitplayer_21127 == 1)) {
        IF_SETTEXT(`PvP will be enabled in ${inttostring(((varclient_3891 + 49) / 50), 10)}s`, comp(749, 70));
    } else {
        IF_SETTEXT(`You have entered a PvP area and have your PvP toggle turned on.<br><br>PvP will be enabled in ${inttostring(((varclient_3891 + 49) / 50), 10)}s.`, comp(749, 70));
    };
    return;
}