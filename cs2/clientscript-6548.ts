//
function script6548(): void {
    script9554(11010049, 11010086, 11010050, dbrow_getfield(varplayer_8551, 192512, 0), 21218);
    if ((script6545(varplayer_8551) == 1)) {
        IF_SETHIDE(0, 11010070);
    };
    var string0 = "";
    switch (varplayer_8551) {
        case 2629: {
            IF_SETTEXT("Deposit all", 11010078);
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
                IF_SETTEXT("Pet Chance", 11010095);
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
        IF_SETHIDE(0, 11010079);
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
        IF_SETHIDE(0, 11010080);
    };
    if ((int0 == 1)) {
        IF_SETSIZE(IF_GETWIDTH(11010048), 0, 0, 1, 11010048);
    };
    return;
}