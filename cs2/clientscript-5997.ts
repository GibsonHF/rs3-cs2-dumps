//
function script5997(): void {
    var string0 = "";
    var int0 = -1;
    string0 = `You have gained <col=F3B13F>${TOSTRING_LOCALISED(varbitplayer_25925, 1)}</col>/<col=F3B13F>${TOSTRING_LOCALISED(20000, 1)}</col> Agility XP from this activity today.`;
    int0 = 101646342;
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int0);
    var int1 = 0;
    if (((IF_FIND(101646347) == 1) && (IF_FIND[1](CC_GETPARENTLAYER()) == 1))) {
        int1 = script669(varbitplayer_25925, 20000, CC_GETWIDTH[1]());
        CC_SETSIZE(int1, CC_GETHEIGHT(), 0, 0);
    };
    return;
}