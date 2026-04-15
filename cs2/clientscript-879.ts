//
function script879(): void {
    IF_SETTEXT("You can unlock the <col=FFCB05>Cloak of Talent</col> by handing in <col=FFCB05>Tokens of Talent</col> which can be gained through skilling all over Gielinor!<br><br>Similarly you will be able to unlock the <col=FFCB05>Cloak of Might</col> by gaining <col=FFCB05>Tokens of Might</col> through combat!<br><br>That's not all! Once you've unlocked both of the capes you will unlock a final <col=FFCB05>Cloak of Proficiency</col> which combines the best of both worlds!", comp(1930, 177));
    var int0 = -1 as obj;
    var int1 = -1 as obj;
    var int2 = -1 as inv;
    var int3 = comp(-1, 65535);
    var int4 = 40974;
    var int5 = 5000;
    var int6 = 0;
    var int7 = 0;
    while ((int7 < 4)) {
        [int3, int0, int5] = script880(int7);
        switch (int7) {
            case 0: {
                int6 = varbitplayer_41532;
                break;
            }
            case 1: {
                int6 = varbitplayer_41531;
                break;
            }
            case 2: {
                int6 = varbitplayer_41533;
                break;
            }
        };
        CC_CREATE(int3, 5, 0);
        CC_SETSIZE(40, 40, 0, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        [int0, int1, int2] = script13265(int0);
        if ((int7 < 3)) {
            CC_SETONMOUSEREPEAT(callback(script12893, int4, int5, int6, int0, int1, int3, (IF_GETNEXTSUBID(int3) - 1)));
        };
        int7 = (int7 + 1);
    };
    return;
}