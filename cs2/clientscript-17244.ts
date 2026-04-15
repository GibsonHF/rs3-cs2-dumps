//
function script17244(int0: dbrow): [int, string] {
    var int1 = dbrow_getfield(int0, 905312, 0);
    if ((varplayer_1297 < int1)) {
        return [1, `Quest points: ${inttostring(varplayer_1297, 10)} / ${inttostring(int1, 10)}`];
    };
    return [0, `<str=FFFFFE>Quest points: ${inttostring(varplayer_1297, 10)} / ${inttostring(int1, 10)}`];
}