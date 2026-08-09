//
function script4268(int0: number): void {
    switch (int0) {
        case 1: {
            IF_SETTEXT("Teleport to South Falador", comp(1083, 136));
            break;
        }
        case 2: {
            IF_SETTEXT("Repair Rune Pouch", comp(1083, 136));
            break;
        }
        case 3: {
            IF_SETTEXT("Teleport to North Ardougne", comp(1083, 136));
            break;
        }
        case 4: {
            IF_SETTEXT("Remote Farming", comp(1083, 136));
            break;
        }
        case 5: {
            IF_SETTEXT("Spiritual Healing", comp(1083, 136));
            break;
        }
        case 6: {
            IF_SETTEXT("Make Leather", comp(1083, 136));
            break;
        }
        case 7: {
            IF_SETTEXT("Disruption Shield", comp(1083, 136));
            break;
        }
        case 8: {
            IF_SETTEXT("Vengeance Group", comp(1083, 136));
            break;
        }
        case 9: {
            IF_SETTEXT("Let it Rain Seeds!", comp(1083, 136));
            break;
        }
        case 10: {
            IF_SETTEXT("Gimme Herbs!", comp(1083, 136));
            break;
        }
        case 11: {
            IF_SETTEXT("Vial My Herbs!", comp(1083, 136));
            break;
        }
        case 12: {
            IF_SETTEXT("Turn Lunar Lumber into Runes!", comp(1083, 136));
            break;
        }
        case 13: {
            IF_SETTEXT("Reduce the Fish I Burn!", comp(1083, 136));
            break;
        }
        case 14: {
            IF_SETTEXT("More Planks, Please!", comp(1083, 136));
            break;
        }
        case 15: {
            IF_SETTEXT("Teleport to Trollheim", comp(1083, 136));
            break;
        }
        case 16: {
            IF_SETTEXT("Teleport Group to Trollheim", comp(1083, 136));
            break;
        }
        case 17: {
            IF_SETTEXT("Borrowed Power", comp(1083, 136));
            break;
        }
        case 18: {
            IF_SETTEXT("Let it Rain Awesome Seeds!", comp(1083, 136));
            break;
        }
        case 19: {
            IF_SETTEXT("I'd Like a New Patch!", comp(1083, 136));
            break;
        }
        case 20: {
            IF_SETTEXT("Unset Borrowed Power!", comp(1083, 136));
            break;
        }
        case 21: {
            IF_SETTEXT("Set Borrowed Power!", comp(1083, 136));
            break;
        }
        case 22: {
            IF_SETTEXT("Protect A Patch For Me!", comp(1083, 136));
            break;
        }
    };
    switch (int0) {
        case 1: {
            IF_SETTEXT("Teleports you to the south of Falador.", comp(1083, 138));
            break;
        }
        case 2: {
            IF_SETTEXT("Use on a degraded pouch to repair it and improve its strength, so it takes longer to degrade.", comp(1083, 138));
            break;
        }
        case 3: {
            IF_SETTEXT("Teleports you to the north of Ardougne.", comp(1083, 138));
            break;
        }
        case 4: {
            IF_SETTEXT("View the status of farming patches and cure any disease from a distance.", comp(1083, 138));
            break;
        }
        case 5: {
            IF_SETTEXT("Heal your familiar, boost its combat stats and extends its lifetime by 20% of its starting value. Can only be used once per familiar, and once every two minutes.", comp(1083, 138));
            break;
        }
        case 6: {
            IF_SETTEXT("Magically tans all hides of targeted type in your backpack.", comp(1083, 138));
            break;
        }
        case 7: {
            IF_SETTEXT("Nullifies the next hit you receive from a player or NPC.", comp(1083, 138));
            break;
        }
        case 8: {
            IF_SETTEXT("When cast, those nearby get to rebound damage.", comp(1083, 138));
            break;
        }
        case 9: {
            IF_SETTEXT("Seeds will appear on the floor. Be quick to pick up the ones you want.", comp(1083, 138));
            break;
        }
        case 10: {
            IF_SETTEXT("Puts a load of grimy herbs in your backpack.", comp(1083, 138));
            break;
        }
        case 11: {
            IF_SETTEXT("Takes all the clean herbs in your backpack and turns them into unfinished potions of that herb type. This will work on noted herbs of up to 50 at a time.", comp(1083, 138));
            break;
        }
        case 12: {
            IF_SETTEXT("Turns all lunar lumber in your backpack into runes. You'll need a full backpack of logs.", comp(1083, 138));
            break;
        }
        case 13: {
            IF_SETTEXT("For the next thirty minutes, you'll find that you burn fewer fish.", comp(1083, 138));
            break;
        }
        case 14: {
            IF_SETTEXT("This will be active for the next twenty minutes: when casting Plank Make, you will have a chance of receiving additional planks.", comp(1083, 138));
            break;
        }
        case 15: {
            IF_SETTEXT("Teleports you to the farming patch in Trollheim.", comp(1083, 138));
            break;
        }
        case 16: {
            IF_SETTEXT("Teleports you and those nearby to the farming patch in Trollheim.", comp(1083, 138));
            break;
        }
        case 17: {
            IF_SETTEXT(`Allows you to store and cast certain spells from the standard spellbook.<br>After learning this last spell, your current produce will be reduced by ${script46((enum_getvalue(0, 0, 3674 as cs2enum, 10) * 10), ",")} and the remainder can be spent on wishes.`, comp(1083, 138));
            break;
        }
        case 18: {
            IF_SETTEXT("High value seeds will appear on the floor. Be quick to pick up the ones you want.", comp(1083, 138));
            break;
        }
        case 19: {
            IF_SETTEXT("A new allotment patch will become available nearby. It will vanish if the patch is cleared.", comp(1083, 138));
            break;
        }
        case 20: {
            IF_SETTEXT("Pauline will unset the Borrowed Power spell. Any unused charges will be refunded, but points spent to set the spell will not.", comp(1083, 138));
            break;
        }
        case 21: {
            IF_SETTEXT("Pauline will set the Borrowed Power spell to a spell of your choice at the cost (in runes) of 1,000 casts of that spell. You will then be able to cast that spell through Borrowed Power 1,000 times.", comp(1083, 138));
            break;
        }
        case 22: {
            if ((varbitplayer_16374 < 11)) {
                IF_SETTEXT("Gives you a scroll which, when used on a fruit tree or tree patch, will protect that patch for the next 10 growths in that patch. ", comp(1083, 138));
            } else {
                IF_SETTEXT("Gives you a scroll which, when used on a fruit tree or tree patch, will protect that patch for the next 10 growths in that patch. You will need to use the scroll on a patch that is currently growing something and you must have the produce in your backpack that would cover the cost of protecting that patch normally.", comp(1083, 138));
            };
            break;
        }
    };
    switch (int0) {
        case 1: {
            if ((varbitplayer_16374 < 1)) {
                IF_SETTEXT("Requires level 72 Magic to cast. You must unlock the spells in order.", comp(1083, 140));
            } else {
                IF_SETTEXT("Learned!", comp(1083, 140));
            };
            break;
        }
        case 2: {
            if ((varbitplayer_16374 < 2)) {
                IF_SETTEXT("Requires level 75 Magic to cast. You must unlock the spells in order.", comp(1083, 140));
            } else {
                IF_SETTEXT("Learned!", comp(1083, 140));
            };
            break;
        }
        case 3: {
            if ((varbitplayer_16374 < 3)) {
                IF_SETTEXT("Requires level 76 Magic to cast. You must unlock the spells in order.", comp(1083, 140));
            } else {
                IF_SETTEXT("Learned!", comp(1083, 140));
            };
            break;
        }
        case 4: {
            if ((varbitplayer_16374 < 4)) {
                IF_SETTEXT("Requires level 78 Magic to cast. You must unlock the spells in order.", comp(1083, 140));
            } else {
                IF_SETTEXT("Learned!", comp(1083, 140));
            };
            break;
        }
        case 5: {
            if ((varbitplayer_16374 < 5)) {
                IF_SETTEXT("Requires level 80 Magic to cast. You must unlock the spells in order.", comp(1083, 140));
            } else {
                IF_SETTEXT("Learned!", comp(1083, 140));
            };
            break;
        }
        case 6: {
            if ((varbitplayer_16374 < 6)) {
                IF_SETTEXT("Requires level 83 Magic to cast. You must unlock the spells in order.", comp(1083, 140));
            } else {
                IF_SETTEXT("Learned!", comp(1083, 140));
            };
            break;
        }
        case 7: {
            if ((varbitplayer_16374 < 7)) {
                IF_SETTEXT("Requires level 90 Magic to cast. You must unlock the spells in order.", comp(1083, 140));
            } else {
                IF_SETTEXT("Learned!", comp(1083, 140));
            };
            break;
        }
        case 8: {
            if ((varbitplayer_16374 < 8)) {
                IF_SETTEXT("Requires level 95 Magic to cast. You must unlock the spells in order.", comp(1083, 140));
            } else {
                IF_SETTEXT("Learned!", comp(1083, 140));
            };
            break;
        }
        case 15: {
            if ((varbitplayer_16374 < 9)) {
                IF_SETTEXT("Requires level 92 Magic to cast. You must unlock the spells in order.", comp(1083, 140));
            } else {
                IF_SETTEXT("Learned!", comp(1083, 140));
            };
            break;
        }
        case 16: {
            if ((varbitplayer_16374 < 10)) {
                IF_SETTEXT("Requires level 93 Magic to cast. You must unlock the spells in order.", comp(1083, 140));
            } else {
                IF_SETTEXT("Learned!", comp(1083, 140));
            };
            break;
        }
        case 17: {
            if ((varbitplayer_16374 < 11)) {
                IF_SETTEXT("Requires level 99 Magic to cast. You must unlock the spells in order.", comp(1083, 140));
            } else {
                IF_SETTEXT("Learned!", comp(1083, 140));
            };
            break;
        }
        default: {
            if ((varbitplayer_16374 < 11)) {
                IF_SETTEXT("You must unlock all the spells before you can use wishes.", comp(1083, 140));
            };
            break;
        }
    };
    if ((int0 < 9)) {
        IF_SETHIDE(false, comp(1083, 141));
        script13741(0);
    } else if ((int0 > 14)) {
        if ((int0 < 18)) {
            IF_SETHIDE(false, comp(1083, 141));
            script13741(0);
        } else {
            IF_SETHIDE(true, comp(1083, 141));
            script13741(1);
        };
    } else {
        IF_SETHIDE(true, comp(1083, 141));
        script13741(1);
    };
    switch (int0) {
        case 1: {
            IF_SETGRAPHIC(14444 as graphic, comp(1083, 144));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(14445 as graphic, comp(1083, 144));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(14446 as graphic, comp(1083, 144));
            break;
        }
        case 4: {
            IF_SETGRAPHIC(14447 as graphic, comp(1083, 144));
            break;
        }
        case 5: {
            IF_SETGRAPHIC(14449 as graphic, comp(1083, 144));
            break;
        }
        case 6: {
            IF_SETGRAPHIC(14448 as graphic, comp(1083, 144));
            break;
        }
        case 7: {
            IF_SETGRAPHIC(14450 as graphic, comp(1083, 144));
            break;
        }
        case 8: {
            IF_SETGRAPHIC(14451 as graphic, comp(1083, 144));
            break;
        }
        case 15: {
            IF_SETGRAPHIC(14453 as graphic, comp(1083, 144));
            break;
        }
        case 16: {
            IF_SETGRAPHIC(14454 as graphic, comp(1083, 144));
            break;
        }
        case 17: {
            IF_SETGRAPHIC(14455 as graphic, comp(1083, 144));
            break;
        }
    };
    script2699();
    switch (int0) {
        case 1: {
            if ((varbitplayer_16374 < 1)) {
                IF_SETHIDE(false, comp(1083, 145));
            };
            break;
        }
        case 2: {
            if ((varbitplayer_16374 < 2)) {
                IF_SETHIDE(false, comp(1083, 146));
            };
            break;
        }
        case 3: {
            if ((varbitplayer_16374 < 3)) {
                IF_SETHIDE(false, comp(1083, 148));
            };
            break;
        }
        case 4: {
            if ((varbitplayer_16374 < 4)) {
                IF_SETHIDE(false, comp(1083, 150));
            };
            break;
        }
        case 5: {
            if ((varbitplayer_16374 < 5)) {
                IF_SETHIDE(false, comp(1083, 152));
            };
            break;
        }
        case 6: {
            if ((varbitplayer_16374 < 6)) {
                IF_SETHIDE(false, comp(1083, 154));
            };
            break;
        }
        case 7: {
            if ((varbitplayer_16374 < 7)) {
                IF_SETHIDE(false, comp(1083, 156));
            };
            break;
        }
        case 8: {
            if ((varbitplayer_16374 < 8)) {
                IF_SETHIDE(false, comp(1083, 158));
            };
            break;
        }
        case 9: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(false, comp(1083, 166));
            };
            break;
        }
        case 10: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(false, comp(1083, 168));
            };
            break;
        }
        case 11: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(false, comp(1083, 170));
            };
            break;
        }
        case 12: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(false, comp(1083, 172));
            };
            break;
        }
        case 13: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(false, comp(1083, 174));
            };
            break;
        }
        case 14: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(false, comp(1083, 176));
            };
            break;
        }
        case 15: {
            if ((varbitplayer_16374 < 9)) {
                IF_SETHIDE(false, comp(1083, 160));
            };
            break;
        }
        case 16: {
            if ((varbitplayer_16374 < 10)) {
                IF_SETHIDE(false, comp(1083, 162));
            };
            break;
        }
        case 17: {
            if ((varbitplayer_16374 < 11)) {
                IF_SETHIDE(false, comp(1083, 164));
            };
            break;
        }
        case 18: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(false, comp(1083, 201));
            };
            break;
        }
        case 19: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(false, comp(1083, 203));
            };
            break;
        }
        case 20: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(false, comp(1083, 205));
            };
            break;
        }
        case 21: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(false, comp(1083, 207));
            };
            break;
        }
        case 22: {
            if ((varbitplayer_16374 > 10)) {
                IF_SETHIDE(false, comp(1083, 210));
            };
            break;
        }
    };
    return;
}