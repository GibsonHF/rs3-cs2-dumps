//
function script2879(int0: component, int1: int, int2: int, int3: int): int {
    var string0 = "Remove from Playlist";
    if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](int0, (int1 + 100)) == 1))) {
        if ((int2 == 32767)) {
            CC_SETHIDE(true);
            CC_SETHIDE[1](true);
            return int3;
        };
        CC_SETPOSITION(15, int3, 0, 0);
        CC_SETTEXTALIGN(0, 1, 0);
        if (((varbitplayer_202 == int2) && (varbitplayer_187 == 1))) {
            CC_SETCOLOUR(16777062);
            CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 16777062));
        } else {
            CC_SETCOLOUR(65535);
            CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 65535));
        };
        CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
        CC_SETTEXT(enum_getstring(1345, int2));
        CC_SETSIZE(150, 15, 0, 0);
        CC_SETOP(1, "Play");
        CC_SETOP(2, "Remove");
        script1480(int0, int1, int2);
        CC_SETONVARTRANSMIT(callback(script1462, int0, int1, int2, 33, 33, 2));
        CC_SETOPBASE(enum_getstring(1345, int2));
        CC_SETOPBASE[1](enum_getstring(1345, int2));
        CC_SETTEXTSHADOW(0);
        CC_SETTEXTFONT(66);
        CC_SETDRAGGABLE(int0, -1);
        CC_SETDRAGGABLE[1](-1, -1);
        CC_SETDRAGRENDERBEHAVIOUR(2);
        CC_SETSIZE[1](12, 12, 0, 0);
        CC_SETPOSITION[1](2, (int3 + 1), 0, 0);
        CC_SETOP[1](2, "Remove");
        CC_SETGRAPHIC[1](2430);
        CC_SETONMOUSEREPEAT[1](callback(script8799, string0, int0, -2147483643));
        CC_SETONMOUSELEAVE[1](callback(script8805));
        CC_SETONCLICK[1](callback(script8805));
    };
    return (int3 + 15);
}