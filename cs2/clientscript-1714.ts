//
function script1714(int0: int): void {
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int3] = script3614(int0);
    if ((int1 == -1 as obj)) {
        script1296("You have already claimed this prize.");
        return;
    };
    if (((script2289(int0) == 0) && (varbitplayer_45659 >= 5))) {
        script1296("You can only freeze up to five prizes at a time.");
        return;
    };
    script1718(int0);
    return;
}