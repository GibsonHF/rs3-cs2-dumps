//
function script17234(int0: dbrow): string {
    var int1 = dbrow_getfield(int0, 905312, 0);
    if ((varplayer_1297 < int1)) {
        return `Quest points: ${inttostring(varplayer_1297, 10)} / ${inttostring(int1, 10)}`;
    };
    return "";
}