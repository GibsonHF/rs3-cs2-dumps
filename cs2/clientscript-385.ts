//
function script385(int0: component, int1: unknown_int, int2: unknown_int): void {
    var string0 = "";
    switch (int0) {
        case 8585229: {
            if ((((varbitplayer_20117 > 0) && (MAP_MEMBERS() == 0)) && (STAT_BASE(25 as stat) >= 5))) {
                string0 = "You need to be on a members' world to gain Divination experience.";
            } else if ((varclient_3710 == 1)) {
                string0 = "Convert all your memories into Divination experience.<br><br>Keybind: 2";
            } else {
                string0 = "To use a crater, you will need some memories. These can be gathered from nearby wisps.";
            };
            break;
        }
        case 8585226: {
            if ((varclient_3710 == 1)) {
                string0 = "Convert all your memories into divine energy. Divine energy can be traded or weaved to create beneficial objects.<br><br>Keybind: 1";
            } else {
                string0 = "To use a crater, you will need some memories. These can be gathered from nearby wisps.";
            };
            break;
        }
        case 8585232: {
            if ((((varbitplayer_20119 > 0) && (MAP_MEMBERS() == 0)) && (STAT_BASE(25 as stat) >= 5))) {
                string0 = "You need to be on a members' world to gain Divination experience.";
            } else if ((varclient_3710 == 1)) {
                if ((varclient_3712 == 1)) {
                    string0 = "Convert memories and energy of the same tier into higher Divination experience. This is beneficial if you wish to use up spare energy. You will convert as many memories as you can with the level of energy you are carrying.<br><br>Keybind: 3";
                } else {
                    string0 = "You do not have enough materials. To convert one memory you need 5 energy of the same tier, and converting one enriched memory requires 10 energy of the same tier.";
                };
            } else {
                string0 = "To use a crater, you will need some memories. These can be gathered from nearby wisps.";
            };
            break;
        }
    };
    script8800(string0, int0, -1);
    return;
}