//
function script12543(int0: int): void {
    var int1 = enum_getvalue(0, 0, 7710 as cs2enum, int0);
    if ((int1 == 15)) {
        int1 = script16635(int1, 0);
    };
    if ((script8699(int1) == 0)) {
        script1296("That layout doesn't have any data saved to it yet. Pick another one.");
    } else if ((script15532(0) == 1)) {
        script1296("Switching presets is disabled within the tutorial.");
    } else if ((varbitplayer_38842 == 1)) {
        script1296("That feature is disabled on Mobile.");
    } else if ((varbitplayer_27169 == 1)) {
        script1296("That feature is disabled in Classic Mode.");
    } else {
        varclient_8266 = int1;
        varplayer_12049 = -1;
        script8741(int1);
        script19723(int1);
        script20526(1002, struct_getparam(38884, 3503));
        script8144();
    };
    return;
}