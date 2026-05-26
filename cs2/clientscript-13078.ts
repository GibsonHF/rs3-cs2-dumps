//
function script13078(int0: number): void {
    if ((varbitplayer_35026 >= 80)) {
        return;
    };
    if (((int0 / 4) != varbitplayer_35053)) {
        if ((varbitplayer_35053 >= 10)) {
            printmessage("You should reset the puzzle.");
        } else {
            printmessage(`You must make your guess on row ${inttostring((varbitplayer_35053 + 1), 10)}.`);
        };
        return;
    };
    var int1 = -1;
    if ((CC_FIND(119865351, int0) == 1)) {
        int1 = script13081(varclient_5923);
        if ((int1 == -1)) {
            return;
        };
        CC_SETOBJECT(int1, -1);
        CC_SETONMOUSEREPEAT(callback(script3876, OC_NAME(int1), 119865350, -2147483643));
    };
    switch (RANDOM(2)) {
        case 0: {
            SOUND_VORBIS_VOLUME(22039, 1, 0, 225);
            break;
        }
        case 1: {
            SOUND_VORBIS_VOLUME(22040, 1, 0, 225);
            break;
        }
    };
    return;
}