//
function script17540(): [unknown_int, string] {
    var int0 = 1;
    var string0 = "";
    var int1 = script17527(varplayer_11131);
    if ((varbitplayer_53849 < int1)) {
        string0 = `You have ${inttostring(varbitplayer_53849, 10)} / ${inttostring(int1, 10)} light sources required to start this ritual.`;
        int0 = 0;
    };
    return [int0, string0];
}