//
function script5783(int0: component, int1: unknown_int): void {
    var int2 = 0;
    var string0 = "";
    switch (int0) {
        case 101974019: {
            if ((varbitplayer_26063 == 1)) {
                int2 = 1;
            };
            string0 = "Woodcutting";
            break;
        }
        case 101974022: {
            if ((varbitplayer_26041 == 1)) {
                int2 = 1;
            };
            string0 = "Mining";
            break;
        }
        case 101974031: {
            if ((varbitplayer_26039 == 1)) {
                int2 = 1;
            };
            string0 = "Hunter";
            break;
        }
        case 101974016: {
            if ((varbitplayer_26040 == 1)) {
                int2 = 1;
            };
            string0 = "Fishing";
            break;
        }
        case 101974028: {
            if ((varbitplayer_26038 == 1)) {
                int2 = 1;
            };
            string0 = "Divination";
            break;
        }
        case 101974025: {
            if ((varbitplayer_26042 == 1)) {
                int2 = 1;
            };
            string0 = "Farming";
            break;
        }
        case 101974046: {
            if ((varbitplayer_26043 == 1)) {
                int2 = 1;
            };
            string0 = "Attack";
            break;
        }
        case 101974049: {
            if ((varbitplayer_26044 == 1)) {
                int2 = 1;
            };
            string0 = "Strength";
            break;
        }
        case 101974052: {
            if ((varbitplayer_26045 == 1)) {
                int2 = 1;
            };
            string0 = "Defence";
            break;
        }
        case 101974055: {
            if ((varbitplayer_26046 == 1)) {
                int2 = 1;
            };
            string0 = "Magic";
            break;
        }
        case 101974058: {
            if ((varbitplayer_26047 == 1)) {
                int2 = 1;
            };
            string0 = "Ranged";
            break;
        }
        case 101974064: {
            if ((varbitplayer_26049 == 1)) {
                int2 = 1;
            };
            string0 = "Prayer";
            break;
        }
        case 101974061: {
            if ((varbitplayer_26050 == 1)) {
                int2 = 1;
            };
            string0 = "Constitution";
            break;
        }
        case 101974067: {
            if ((varbitplayer_26048 == 1)) {
                int2 = 1;
            };
            string0 = "Summoning";
            break;
        }
        case 101974091: {
            if ((varbitplayer_26051 == 1)) {
                int2 = 1;
            };
            string0 = "Cooking";
            break;
        }
        case 101974085: {
            if ((varbitplayer_26052 == 1)) {
                int2 = 1;
            };
            string0 = "Fletching";
            break;
        }
        case 101974094: {
            if ((varbitplayer_26054 == 1)) {
                int2 = 1;
            };
            string0 = "Firemaking";
            break;
        }
        case 101974082: {
            if ((varbitplayer_26055 == 1)) {
                int2 = 1;
            };
            string0 = "Crafting";
            break;
        }
        case 101974079: {
            if ((varbitplayer_26053 == 1)) {
                int2 = 1;
            };
            string0 = "Herblore";
            break;
        }
        case 101974076: {
            if ((varbitplayer_26057 == 1)) {
                int2 = 1;
            };
            string0 = "Smithing";
            break;
        }
        case 101974073: {
            if ((varbitplayer_26058 == 1)) {
                int2 = 1;
            };
            string0 = "Construction";
            break;
        }
        case 101974088: {
            if ((varbitplayer_26056 == 1)) {
                int2 = 1;
            };
            string0 = "Runecrafting";
            break;
        }
        case 101974117: {
            if ((varbitplayer_26059 == 1)) {
                int2 = 1;
            };
            string0 = "Agility";
            break;
        }
        case 101974102: {
            if ((varbitplayer_26061 == 1)) {
                int2 = 1;
            };
            string0 = "Thieving";
            break;
        }
        case 101974111: {
            if ((varbitplayer_26062 == 1)) {
                int2 = 1;
            };
            string0 = "Slayer";
            break;
        }
        case 101974114: {
            if ((varbitplayer_26060 == 1)) {
                int2 = 1;
            };
            string0 = "Dungeoneering";
            break;
        }
        case 101974043: {
            if ((varbitplayer_46461 == 1)) {
                int2 = 1;
            };
            string0 = "Archaeology";
            break;
        }
        case 101974070: {
            if ((varbitplayer_53461 == 1)) {
                int2 = 1;
            };
            string0 = "Necromancy";
            break;
        }
    };
    if ((int1 == 0)) {
        if ((int2 == 0)) {
            script8800(`You have not yet collected the shard for: ${string0}.`, int0, -1);
        } else {
            script8800(`You have collected the shard for: ${string0}.`, int0, -1);
        };
    } else {
        IF_SETHIDE(false, comp(1556, 93));
        IF_SETTEXT(`${string0} shard`, comp(1556, 112));
        if ((int2 == 0)) {
            IF_SETTEXT("You have not yet collected the shard", comp(1556, 114));
        } else {
            IF_SETTEXT("You have collected the shard", comp(1556, 114));
        };
    };
    return;
}