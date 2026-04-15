//
function script3141(int0: int, string0: string): void {
    if (((varplayer_1747 > 0) && (varplayer_1747 != int0))) {
        script3686(`Sorry, you cannot switch to world ${inttostring(int0, 10)} at this time.<br>Please continue on world ${inttostring(varplayer_1747, 10)}.`);
        var int0 = varplayer_1747;
    };
    if ((unk11027(int0, string0) == 1)) {
        varclient_547 = 0;
    } else {
        script3686(`Sorry, we couldn't contact world ${inttostring(int0, 10)}.<br>Please choose a different world.`);
    };
    script3116();
    return;
}