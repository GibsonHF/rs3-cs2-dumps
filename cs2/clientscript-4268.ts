//
function script4268(int0: number): void {
    switch (int0) {
        case 1: {
            IF_SETTEXT("Teleport to South Falador", 70975624);
            break;
        }
        case 2: {
            IF_SETTEXT("Repair Rune Pouch", 70975624);
            break;
        }
        case 3: {
            IF_SETTEXT("Teleport to North Ardougne", 70975624);
            break;
        }
        case 4: {
            IF_SETTEXT("Remote Farming", 70975624);
            break;
        }
        case 5: {
            IF_SETTEXT("Spiritual Healing", 70975624);
            break;
        }
        case 6: {
            IF_SETTEXT("Make Leather", 70975624);
            break;
        }
        case 7: {
            IF_SETTEXT("Disruption Shield", 70975624);
            break;
        }
        case 8: {
            IF_SETTEXT("Vengeance Group", 70975624);
            break;
        }
        case 9: {
            IF_SETTEXT("Let it Rain Seeds!", 70975624);
            break;
        }
        case 10: {
            IF_SETTEXT("Gimme Herbs!", 70975624);
            break;
        }
        case 11: {
            IF_SETTEXT("Vial My Herbs!", 70975624);
            break;
        }
        case 12: {
            IF_SETTEXT("Turn Lunar Lumber into Runes!", 70975624);
            break;
        }
        case 13: {
            IF_SETTEXT("Reduce the Fish I Burn!", 70975624);
            break;
        }
        case 14: {
            IF_SETTEXT("More Planks, Please!", 70975624);
            break;
        }
        case 15: {
            IF_SETTEXT("Teleport to Trollheim", 70975624);
            break;
        }
        case 16: {
            IF_SETTEXT("Teleport Group to Trollheim", 70975624);
            break;
        }
        case 17: {
            IF_SETTEXT("Borrowed Power", 70975624);
            break;
        }
        case 18: {
            IF_SETTEXT("Let it Rain Awesome Seeds!", 70975624);
            break;
        }
        case 19: {
            IF_SETTEXT("I'd Like a New Patch!", 70975624);
            break;
        }
        case 20: {
            IF_SETTEXT("Unset Borrowed Power!", 70975624);
            break;
        }
        case 21: {
            IF_SETTEXT("Set Borrowed Power!", 70975624);
            break;
        }
        case 22: {
            IF_SETTEXT("Protect A Patch For Me!", 70975624);
            break;
        }
    };
    switch (int0) {
        case 1: {
            IF_SETTEXT("Teleports you to the south of Falador.", 70975626);
            break;
        }
        case 2: {
            IF_SETTEXT("Use on a degraded pouch to repair it and improve its strength, so it takes longer to degrade.", 70975626);
            break;
        }
        case 3: {
            IF_SETTEXT("Teleports you to the north of Ardougne.", 70975626);
            break;
        }
        case 4: {
            IF_SETTEXT("View the status of farming patches and cure any disease from a distance.", 70975626);
            break;
        }
        case 5: {
            IF_SETTEXT("Heal your familiar, boost its combat stats and extends its lifetime by 20% of its starting value. Can only be used once per familiar, and once every two minutes.", 70975626);
            break;
        }
        case 6: {
            IF_SETTEXT("Magically tans all hides of targeted type in your backpack.", 70975626);
            break;
        }
        case 7: {
            IF_SETTEXT("Nullifies the next hit you receive from a player or NPC.", 70975626);
            break;
        }
        case 8: {
            IF_SETTEXT("When cast, those nearby get to rebound damage.", 70975626);
            break;
        }
        case 9: {
            IF_SETTEXT("Seeds will appear on the floor. Be quick to pick up the ones you want.", 70975626);
            break;
        }
        case 10: {
            IF_SETTEXT("Puts a load of grimy herbs in your backpack.", 70975626);
            break;
        }
        case 11: {
            IF_SETTEXT("Takes all the clean herbs in your backpack and turns them into unfinished potions of that herb type. This will work on noted herbs of up to 50 at a time.", 70975626);
            break;
        }
        case 12: {
            IF_SETTEXT("Turns all lunar lumber in your backpack into runes. You'll need a full backpack of logs.", 70975626);
            break;
        }
        case 13: {
            IF_SETTEXT("For the next thirty minutes, you'll find that you burn fewer fish.", 70975626);
            break;
        }
        case 14: {
            IF_SETTEXT("This will be active for the next twenty minutes: when casting Plank Make, you will have a chance of receiving additional planks.", 70975626);
            break;
        }
        case 15: {
            IF_SETTEXT("Teleports you to the farming patch in Trollheim.", 70975626);
            break;
        }
        case 16: {
            IF_SETTEXT("Teleports you and those nearby to the farming patch in Trollheim.", 70975626);
            break;
        }
        case 17: {
            IF_SETTEXT(`Allows you to store and cast certain spells from the standard spellbook.<br>After learning this last spell, your current produce will be reduced by ${script46((enum_getvalue(0, 0, 3674 as cs2enum, 10) * 10), ",")} and the remainder can be spent on wishes.`, 70975626);
            break;
        }
        case 18: {
            IF_SETTEXT("High value seeds will appear on the floor. Be quick to pick up the ones you want.", 70975626);
            break;
        }
        case 19: {
            IF_SETTEXT("A new allotment patch will become available nearby. It will vanish if the patch is cleared.", 70975626);
            break;
        }
        case 20: {
            IF_SETTEXT("Pauline will unset the Borrowed Power spell. Any unused charges will be refunded, but points spent to set the spell will not.", 70975626);
            break;
        }
        case 21: {
            IF_SETTEXT("Pauline will set the Borrowed Power spell to a spell of your choice at the cost (in runes) of 1,000 casts of that spell. You will then be able to cast that spell through Borrowed Power 1,000 times.", 70975626);
            break;
        }
        case 22: {
            if ((varbitplayer_16374 < 11)) {
                IF_SETTEXT("Gives you a scroll which, when used on a fruit tree or tree patch, will protect that patch for the next 10 growths in that patch. ", 70975626);
            } else {
                IF_SETTEXT("Gives you a scroll which, when used on a fruit tree or tree patch, will protect that patch for the next 10 growths in that patch. You will need to use the scroll on a patch that is currently growing something and you must have the produce in your backpack that would cover the cost of protecting that patch normally.", 70975626);
            };
            break;
        }
    };
    switch (int0) {
        case 1: {
            if ((varbitplayer_16374 < 1)) {
                IF_SETTEXT("Requires level 72 Magic to cast. You must unlock the spells in order.", 70975628);
            } else {
                IF_SETTEXT("Learned!", 70975628);
            };
            break;
        }
        case 2: {
            if ((varbitplayer_16374 < 2)) {
                IF_SETTEXT("Requires level 75 Magic to cast. You must unlock the spells in order.", 70975628);
            } else {
                IF_SETTEXT("Learned!", 70975628);
            };
            break;
        }
        case 3: {
            if ((varbitplayer_16374 < 3)) {
                IF_SETTEXT("Requires level 76 Magic to cast. You must unlock the spells in order.", 70975628);
            } else {
                IF_SETTEXT("Learned!", 70975628);
            };
            break;
        }
        case 4: {
            if ((varbitplayer_16374 < 4)) {
                IF_SETTEXT("Requires level 78 Magic to cast. You must unlock the spells in order.", 70975628);
            } else {
                IF_SETTEXT("Learned!", 70975628);
            };
            break;
        }
        case 5: {
            if ((varbitplayer_16374 < 5)) {
                IF_SETTEXT("Requires level 80 Magic to cast. You must unlock the spells in order.", 70975628);
            } else {
                IF_SETTEXT("Learned!", 70975628);
            };
            break;
        }
        case 6: {
            if ((varbitplayer_16374 < 6)) {
                IF_SETTEXT("Requires level 83 Magic to cast. You must unlock the spells in order.", 70975628);
            } else {
                IF_SETTEXT("Learned!", 70975628);
            };
            break;
        }
        case 7: {
            if ((varbitplayer_16374 < 7)) {
                IF_SETTEXT("Requires level 90 Magic to cast. You must unlock the spells in order.", 70975628);
            } else {
                IF_SETTEXT("Learned!", 70975628);
            };
            break;
        }
        case 8: {
            if ((varbitplayer_16374 < 8)) {
                IF_SETTEXT("Requires level 95 Magic to cast. You must unlock the spells in order.", 70975628);
            } else {
                IF_SETTEXT("Learned!", 70975628);
            };
            break;
        }
        case 15: {
            if ((varbitplayer_16374 < 9)) {
                IF_SETTEXT("Requires level 92 Magic to cast. You must unlock the spells in order.", 70975628);
            } else {
                IF_SETTEXT("Learned!", 70975628);
            };
            break;
        }
        case 16: {
            if ((varbitplayer_16374 < 10)) {
                IF_SETTEXT("Requires level 93 Magic to cast. You must unlock the spells in order.", 70975628);
            } else {
                IF_SETTEXT("Learned!", 70975628);
            };
            break;
        }
        case 17: {
            if ((varbitplayer_16374 < 11)) {
                IF_SETTEXT("Requires level 99 Magic to cast. You must unlock the spells in order.", 70975628);
            } else {
                IF_SETTEXT("Learned!", 70975628);
            };
            break;
        }
        default: {
            if ((varbitplayer_16374 < 11)) {
                IF_SETTEXT("You must unlock all the spells before you can use wishes.", 70975628);
            };
            break;
        }
    };
    if (((int0 < 9) || ((int0 > 14) && (int0 < 18)))) {
        IF_SETHIDE(0, 70975629);
        script13741(0);
    } else {
        IF_SETHIDE(1, 70975629);
        script13741(1);
    };
    switch (int0) {
        case 1: {
            IF_SETGRAPHIC(14444, 70975632);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(14445, 70975632);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(14446, 70975632);
            break;
        }
        case 4: {
            IF_SETGRAPHIC(14447, 70975632);
            break;
        }
        case 5: {
            IF_SETGRAPHIC(14449, 70975632);
            break;
        }
        case 6: {
            IF_SETGRAPHIC(14448, 70975632);
            break;
        }
        case 7: {
            IF_SETGRAPHIC(14450, 70975632);
            break;
        }
        case 8: {
            IF_SETGRAPHIC(14451, 70975632);
            break;
        }
        case 15: {
            IF_SETGRAPHIC(14453, 70975632);
            break;
        }
        case 16: {
            IF_SETGRAPHIC(14454, 70975632);
            break;
        }
        case 17: {
            IF_SETGRAPHIC(14455, 70975632);
            break;
        }
    };
    script2699();
    switch (int0) {
        case 1: {
            if ((varbitplayer_16374 < 1)) {
                IF_SETHIDE(0, 70975633);
            };
            break;
        }
        case 2: {
            if ((varbitplayer_16374 < 2)) {
                IF_SETHIDE(0, 70975634);
            };
            break;
        }
        case 3: {
            if ((varbitplayer_16374 < 3)) {
                IF_SETHIDE(0, 70975636);
            };
            break;
        }
        case 4: {
            if ((varbitplayer_16374 < 4)) {
                IF_SETHIDE(0, 70975638);
            };
            break;
        }
        case 5: {
            if ((varbitplayer_16374 < 5)) {
                IF_SETHIDE(0, 70975640);
            };
            break;
        }
        case 6: {
            if ((varbitplayer_16374 < 6)) {
                IF_SETHIDE(0, 70975642);
            };
            break;
        }
        case 7: {
            if ((varbitplayer_16374 < 7)) {
                IF_SETHIDE(0, 70975644);
            };
            break;
        }
        case 8: {
            if ((varbitplayer_16374 < 8)) {
                IF_SETHIDE(0, 70975646);
            };
            break;
        }
        case 9: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(0, 70975654);
            };
            break;
        }
        case 10: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(0, 70975656);
            };
            break;
        }
        case 11: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(0, 70975658);
            };
            break;
        }
        case 12: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(0, 70975660);
            };
            break;
        }
        case 13: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(0, 70975662);
            };
            break;
        }
        case 14: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(0, 70975664);
            };
            break;
        }
        case 15: {
            if ((varbitplayer_16374 < 9)) {
                IF_SETHIDE(0, 70975648);
            };
            break;
        }
        case 16: {
            if ((varbitplayer_16374 < 10)) {
                IF_SETHIDE(0, 70975650);
            };
            break;
        }
        case 17: {
            if ((varbitplayer_16374 < 11)) {
                IF_SETHIDE(0, 70975652);
            };
            break;
        }
        case 18: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(0, 70975689);
            };
            break;
        }
        case 19: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(0, 70975691);
            };
            break;
        }
        case 20: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(0, 70975693);
            };
            break;
        }
        case 21: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(0, 70975695);
            };
            break;
        }
        case 22: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(0, 70975698);
            };
            break;
        }
    };
    return;
}