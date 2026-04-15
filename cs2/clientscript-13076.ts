//
function script13076(): void {
    CC_DELETEALL(comp(1829, 6));
    CC_DELETEALL(comp(1829, 19));
    CC_DELETEALL(comp(1829, 7));
    CC_DELETEALL(comp(1829, 5));
    CC_CREATE(comp(1829, 6), 5, IF_GETNEXTSUBID(comp(1829, 6)));
    CC_SETSIZE(35, 35, 0, 0);
    CC_SETOBJECT(29314 as obj, -1);
    CC_SETPOSITION(10, 0, 0, 1);
    CC_SETOP(1, "Select");
    CC_SETONOP(callback(script13077, -2147483643));
    CC_SETONMOUSEREPEAT(callback(script3876, OC_NAME(29314), 119865350, -2147483643));
    CC_CREATE(119865350, 5, IF_GETNEXTSUBID(119865350));
    CC_SETSIZE(35, 35, 0, 0);
    CC_SETOBJECT(29315, -1);
    CC_SETPOSITION(35, 0, 0, 1);
    CC_SETOP(1, "Select");
    CC_SETONOP(callback(script13077, -2147483643));
    CC_SETONMOUSEREPEAT(callback(script3876, OC_NAME(29315), 119865350, -2147483643));
    CC_CREATE(119865350, 5, IF_GETNEXTSUBID(119865350));
    CC_SETSIZE(35, 35, 0, 0);
    CC_SETOBJECT(29317, -1);
    CC_SETPOSITION(60, 0, 0, 1);
    CC_SETOP(1, "Select");
    CC_SETONOP(callback(script13077, -2147483643));
    CC_SETONMOUSEREPEAT(callback(script3876, OC_NAME(29317), 119865350, -2147483643));
    CC_CREATE(119865350, 5, IF_GETNEXTSUBID(119865350));
    CC_SETSIZE(35, 35, 0, 0);
    CC_SETOBJECT(29318, -1);
    CC_SETPOSITION(85, 0, 0, 1);
    CC_SETOP(1, "Select");
    CC_SETONOP(callback(script13077, -2147483643));
    CC_SETONMOUSEREPEAT(callback(script3876, OC_NAME(29318), 119865350, -2147483643));
    var int0 = 0;
    var int1 = 0;
    while ((int0 < 10)) {
        while ((int1 < 4)) {
            CC_CREATE(comp(1829, 19), 5, IF_GETNEXTSUBID(comp(1829, 19)));
            CC_SETSIZE(20, 20, 0, 0);
            CC_SETGRAPHIC(13152 as graphic);
            CC_SETPOSITION(((int1 * 25) + 15), 0, 0, 1);
            CC_CREATE(comp(1829, 7), 5, IF_GETNEXTSUBID(comp(1829, 7)));
            CC_SETOBJECT(38612 as obj, -1);
            CC_SETSIZE(35, 35, 0, 0);
            CC_SETPOSITION(((int1 * 25) + 10), (int0 * 23), 0, 2);
            CC_SETOP(1, "Place Energy");
            CC_SETONOP(callback(script13078, -2147483643));
            int1 = (int1 + 1);
        };
        int1 = 0;
        int0 = (int0 + 1);
    };
    var string0 = "To configure the power supply, select from the divine energy shown at the bottom of the console. Place them in the numbered rows on the grid, starting in row one. Once you've filled a row, check your answer.<br><br>If you guess correctly, you're done! Otherwise, you'll be given hints on how accurate your guess was.<br><br>White square: Your guess included a correct type of divine energy, but it wasn't in the right place.<br><br>Grey square:Your guess included a correct type of divine energy, and it was in the right place.<br><br>Resetting the puzzle will generate a new answer.";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, 119865365, -1), 119865365);
    return;
}