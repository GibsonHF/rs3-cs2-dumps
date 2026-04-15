//
function script7705(): void {
    var string0 = "Select a task on the left for more information";
    var int0 = 0;
    var int1 = 0;
    switch (varbitplayer_22401) {
        case 0: {
            string0 = "Select a task on the left for more information.";
            break;
        }
        case 1: {
            string0 = "Complete a Dungeoneering floor (Complexity 6).";
            break;
        }
        case 2: {
            string0 = "Complete a Slayer assignment.";
            break;
        }
        case 3: {
            string0 = "Complete a Treasure Trail (any difficulty).";
            break;
        }
        case 4: {
            string0 = "Equip a full outfit that has no stats.";
            break;
        }
        case 5: {
            string0 = "Do a dance on every bridge over the River Lum.";
            break;
        }
        case 6: {
            string0 = "Fletch 100 unfinished bows.";
            break;
        }
        case 7: {
            string0 = "Smith 100 bars into items.";
            break;
        }
        case 8: {
            string0 = "Turn 100 pieces of rune essence into runes.";
            break;
        }
        case 9: {
            string0 = "Complete a quest<br>(or Tears of Guthix)";
            break;
        }
        case 10: {
            string0 = "Take a minute out to rest.";
            break;
        }
        case 11: {
            string0 = "Complete a full round of Heist!";
            break;
        }
        case 12: {
            string0 = "Complete a full game of Castle Wars.";
            break;
        }
        case 13: {
            string0 = "Burn 100 logs<br>(any type).";
            break;
        }
        case 14: {
            string0 = "Run from Shantay Pass to Sophanem Gate with no water source.";
            break;
        }
        case 15: {
            string0 = "Bury 100 bones in the Salve Temple graveyard.";
            break;
        }
        case 16: {
            string0 = "Kill a demon or goblin flash mob (or goblin raid boss).";
            break;
        }
        case 17: {
            string0 = "Survive the Wilderness for 10 minutes without leaving.";
            break;
        }
        case 18: {
            string0 = "Complete a round of the Cabbage Facepunch Bonanza.";
            break;
        }
        case 19: {
            string0 = "Feed 10 breadcrumbs to a duck in less than 20 seconds.";
            break;
        }
        case 20: {
            string0 = "Gather your daily limit from divine locations.";
            break;
        }
    };
    if ((script7719(varbitplayer_22401) > 0)) {
        IF_SETHIDE(false, comp(1047, 14));
        IF_SETHIDE(true, comp(1047, 15));
    } else if ((varbitplayer_22401 == 0)) {
        IF_SETHIDE(true, comp(1047, 14));
        IF_SETHIDE(true, comp(1047, 15));
    } else {
        IF_SETHIDE(true, comp(1047, 14));
        IF_SETHIDE(false, comp(1047, 15));
        if ((varbitplayer_22387 > 0)) {
            if ((varbitplayer_22387 == varbitplayer_22401)) {
                IF_SETHIDE(true, comp(1047, 70));
                string0 = strconcat(string0, "<br><col=00C800>This is your active task.");
            } else {
                IF_SETHIDE(false, comp(1047, 70));
            };
        };
        if ((varbitplayer_22388 > 0)) {
            if ((varbitplayer_22388 == varbitplayer_22401)) {
                IF_SETHIDE(true, comp(1047, 69));
                string0 = strconcat(string0, "<br><col=00C800>A JMod can help with this task.");
            } else {
                IF_SETHIDE(false, comp(1047, 69));
            };
        };
    };
    IF_SETTEXT(string0, comp(1047, 13));
    return;
}