//
function script3681(int0: int, int1: component): void {
    var string0 = "Add to playlist";
    var string1 = "Remove from playlist";
    CC_SETOP(1, "Play");
    if (((varbitplayer_38906 == int0) && (varbitplayer_38905 == 1))) {
        CC_SETCOLOUR(65535);
        CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 65535));
        CC_SETOP(5, "Unloop");
    } else {
        CC_SETCOLOUR(65280);
        CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 65280));
        CC_SETOP(5, "Loop");
    };
    CC_SETHIDE[1](false);
    if ((script3078(int0) == 1)) {
        CC_SETGRAPHIC[1](2430 as graphic);
        CC_SETOP[1](4, string1);
        CC_SETOP(4, string1);
        CC_SETONMOUSEREPEAT[1](callback(script8799, string1, int1, -1));
        CC_SETONMOUSELEAVE[1](callback(script8805));
    } else {
        CC_SETOP(3, string0);
        CC_SETOP[1](3, string0);
        CC_SETGRAPHIC[1](2429 as graphic);
        CC_SETONMOUSEREPEAT[1](callback(script8799, string0, int1, -1));
        CC_SETONMOUSELEAVE[1](callback(script8805));
    };
    return;
}