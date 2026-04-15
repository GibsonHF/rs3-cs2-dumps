//
function script6548(): void {
    script9554(comp(168, 1), comp(168, 38), comp(168, 2), dbrow_getfield(varplayer_8551, 192512, 0), 21218 as struct);
    if ((script6545(varplayer_8551) == 1)) {
        IF_SETHIDE(false, comp(168, 22));
    };
    var string0 = "";
    switch (varplayer_8551) {
        case 2629: {
            IF_SETTEXT("Deposit all", comp(168, 30));
            string0 = "Deposit all materials into your material storage.";
            IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), 11010070);
            break;
        }
    };
    var int0 = 0;
    if ((script6546(varplayer_8551) == 1)) {
        switch (varplayer_8551) {
            case 1668: {
                if ((varbitplayer_23063 == 1)) {
                    return;
                };
                IF_SETTEXT("Pet Chance", comp(168, 47));
                break;
            }
            case 1578: {
                if ((varbitplayer_28712 != 1)) {
                    return;
                };
                break;
            }
            case 6362: {
                if ((varbitplayer_51510 != 1)) {
                    return;
                };
                break;
            }
            case 1669: {
                string0 = `Number of rolls left: ${inttostring(varbitplayer_17792, 10)}`;
                IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), 11010079);
                break;
            }
        };
        int0 = 1;
        IF_SETHIDE(false, comp(168, 31));
    };
    if ((script6547(varplayer_8551) == 1)) {
        switch (varplayer_8551) {
            case 1669: {
                string0 = "Using this button will convert all Dominion Tower items into more Factor points that will be added to the XP book reward.";
                IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), 11010080);
                break;
            }
        };
        int0 = 1;
        IF_SETHIDE(false, comp(168, 32));
    };
    if ((int0 == 1)) {
        IF_SETSIZE(IF_GETWIDTH(comp(168, 0)), 0, 0, 1, comp(168, 0));
    };
    return;
}