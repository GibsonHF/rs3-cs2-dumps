//
function script18257(): void {
    var int0 = varplayer_4770;
    if ((int0 == 0)) {
        return;
    };
    var int1 = script16500(int0);
    var int2 = script16319(int0);
    IF_SETTEXT(script17039(int2), comp(1343, 88));
    IF_SETTEXT(script17230(int2, int1), comp(1343, 89));
    stack(struct_getparam(int2, 1271));
    stack(88014935);
    IF_SETGRAPHIC();
    if ((int1 == 1)) {
        IF_SETTEXT("You've extended your current challenge.", comp(1343, 86));
        IF_SETTEXT("<col=ff0000>Your new challenge will not be extended.</col>", comp(1343, 196));
    } else {
        IF_SETTEXT("This is your current challenge.", comp(1343, 86));
        IF_SETTEXT(`This is the new challenge you rolled for ${inttostring(10, 10)} vis wax.`, comp(1343, 196));
    };
    if (((varbitplayer_49310 == 1) && (varbitplayer_52723 == 0))) {
        IF_SETTEXT("<col=00ff00>Due to a current event, re-rolling this challenge will also extend it.</col>", comp(1343, 196));
    };
    return;
}