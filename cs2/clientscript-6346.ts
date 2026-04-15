//
function script6346(int0: int, int1: int, int2: int): int {
    var string0 = "";
    var int3 = -1 as graphic;
    switch (int0) {
        case 27: {
            if (((((varbitplayer_30223 < 105) && (STAT_BASE(12 as stat) >= 80)) && (STAT_BASE(25 as stat) >= 80)) && (STAT_BASE(13 as stat) >= 80))) {
                int3 = 26544 as graphic;
                string0 = "Visit the <col=FFFFFF>Invention Guild</col> north-east of the <col=FFFFFF>Falador lodestone</col> to get started.";
                return script8790(int2, string0, int3);
            };
            break;
        }
        case 17: {
            if ((int1 == 4)) {
                string0 = "Potency of an incense affects how powerful its effect is. Potency starts at 1 when incense is lit and will increase every 10 minutes, capping at 4, as long as the incense doesn't run out. Overloading incense means it starts at full potency, but uses 6 incense sticks in the process.";
                return script8790(int2, string0, int3);
            };
            break;
        }
        case 28: {
            if ((varbitplayer_46463 < 100)) {
                int3 = 10785 as graphic;
                string0 = "Visit the <col=FFFFFF>Archaeology campus</col> east of the <col=FFFFFF>Varrock lodestone</col> to get started.";
                return script8790(int2, string0, int3);
            };
            switch (int1) {
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9: {
                    break;
                }
                case 10: {
                    break;
                }
                case 11: {
                    string0 = "Relics are objects of immense power which can be found on your archaeological journey.<br>The power that is contained within these relics can be harnessed by offering them to the <col=FFFFFF>Monolith</col> at the <col=FFFFFF>Archaeology campus</col>.";
                    return script8790(int2, string0, int3);
                }
            };
            break;
        }
    };
    return int2;
}