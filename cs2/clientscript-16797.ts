//
function script16797(int0: obj): unknown_int {
    var string0 = "Withdrawing this item will opt you into PvP immediately, until you leave the Wilderness.<br><br>If you opt into PvP, you can be attacked by other players!<br><br>If you are killed, your belongings will drop to the ground for others to take.<br><br>Are you sure you want to withdraw this item and opt into PvP?";
    if ((((script14288() == 1) && (script16792() == 0)) && (script16796(int0) == 1))) {
        if ((int0 == 35268 as obj)) {
            string0 = "Withdrawing this item will skull you immediately, until you leave the Wilderness.<br><br>If you are skulled you can attack and be attacked by other players!<br><br>If you are killed, your belongings will drop to the ground for others to take.<br><br>Are you sure you want to withdraw this item?";
        };
        if ((script16802(string0) == 0)) {
            return 0;
        };
        script16806(int0);
    };
    return 1;
}