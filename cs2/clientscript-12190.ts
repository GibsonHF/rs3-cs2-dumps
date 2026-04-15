//
function script12190(): void {
    var int0 = 0;
    var int1 = 0;
    while ((int1 < 9)) {
        if (((CC_FIND(comp(1712, 3), int1) == 1) && (CC_GETGRAPHIC() != -1 as graphic))) {
            int0 = (int0 + 1);
        };
        int1 = (int1 + 1);
    };
    var string0 = "null";
    var int2 = script14705(varclient_6775);
    if ((int0 > int2)) {
        switch (int2) {
            case 5: {
                string0 = "You can only fit up to five materials into the gizmo.";
                break;
            }
            case 9: {
                string0 = "You can only fit up to nine materials into the gizmo.";
                break;
            }
            default: {
                string0 = "You can only fit so many materials into the gizmo.";
                break;
            }
        };
        IF_SETHIDE(false, comp(1712, 25));
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 112197657);
    } else if ((int0 == 0)) {
        IF_SETHIDE(false, comp(1712, 25));
        string0 = "You must have at least one material in the gizmo.";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 112197657);
    } else if ((script12191(varclient_6775) == 0)) {
        IF_SETHIDE(false, comp(1712, 25));
        string0 = "You do not have enough materials in stock to make this gizmo.";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 112197657);
    } else {
        IF_SETHIDE(true, comp(1712, 25));
    };
    var int3 = 0;
    var int4 = comp(1712, 19);
    if ((int0 == 0)) {
        CC_DELETEALL(int4);
        [int3, int3] = script12086(int4, 0, 5, 5, (IF_GETWIDTH(int4) - 10), `Drag or click on a material from the list to add it to the gizmo above.<br><br>You can put up to ${inttostring(int2, 10)} materials into a gizmo, and you can put the same material in several times.<br><br>Common materials are used in stacks of five per slot.<br><br>Higher Invention skill will help you get higher rank positive perks.`, 29166 as struct);
        return;
    };
    int1 = 0;
    while ((CC_FIND(comp(1712, 19), int1) == 1)) {
        CC_SETCOLOUR(8421504);
        int1 = (int1 + 1);
    };
    return;
}