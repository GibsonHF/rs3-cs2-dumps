//[proc,clanwars_updateside]
function script1784(): void {
    var int0 = 0;
    var int1 = (IF_GETWIDTH(comp(792, 3)) - 16);
    var int2 = 0;
    [int0, int2] = script1785("~ Eligibility ~", int0, int2, int1, 1);
    if ((varclient_6260 == false)) {
        [int0, int2] = script1785("This Clan war is opened to all people in the challengers' friend chats.", int0, int2, int1, 0);
    } else {
        [int0, int2] = script1785("This Clan war is opened only to members of the challengers' clans.", int0, int2, int1, 0);
    };
    int0 = (int0 + 7);
    [int0, int2] = script1785("~ Winning ~", int0, int2, int1, 1);
    [int0, int2] = script1785("Victory is awarded...", int0, int2, int1, 0);
    if ((varclient_248 == false)) {
        [int0, int2] = script1785("...to the team that defeats all its enemies.", int0, int2, int1, 0);
    } else {
        [int0, int2] = script1785("...to the team that defeats all its enemies, excluding the last five.", int0, int2, int1, 0);
    };
    if (((varclient_246 > 0) && (varclient_246 < 15))) {
        [int0, int2] = script1785(`OR<br>...to the team that first achieves ${inttostring(enum_getvalue(0, 0, 1605 as cs2enum, varclient_246), 10)} kills.`, int0, int2, int1, 0);
    };
    if ((varclient_247 > 0)) {
        if ((varclient_246 > 0)) {
            [int0, int2] = script1785(`OR<br>...to the team that scores the most kills ${script1751(enum_getvalue(0, 0, 1800 as cs2enum, varclient_247))}.`, int0, int2, int1, 0);
        } else {
            [int0, int2] = script1785(`OR<br>...to the team with the most survivors ${script1751(enum_getvalue(0, 0, 1800 as cs2enum, varclient_247))}.`, int0, int2, int1, 0);
        };
    };
    int0 = (int0 + 7);
    if ((varclient_246 == 0)) {
        [int0, int2] = script1785("<col=ff981f>Knock-out mode:</col><br>Once war has begun, players may no longer join/rejoin the fight.", int0, int2, int1, 0);
    } else {
        [int0, int2] = script1785("<col=ff981f>Run-in mode:</col><br>Players may join/rejoin the fight at any time during the war.", int0, int2, int1, 0);
        if (((varclient_246 == 15) && (varclient_247 == 0))) {
            int0 = (int0 + 7);
            [int0, int2] = script1785("This war has no time limit or kill target, so it might go on for ages!", int0, int2, int1, 0);
        };
    };
    int0 = (int0 + 7);
    [int0, int2] = script1785("~ Item loss ~", int0, int2, int1, 1);
    if ((varclient_249 == false)) {
        [int0, int2] = script1785("On death, players keep their items.", int0, int2, int1, 0);
    } else {
        [int0, int2] = script1785("<col=ff0000>On death, players DROP their items.</col><br>Players may not teleport.", int0, int2, int1, 0);
    };
    int0 = (int0 + 7);
    [int0, int2] = script1785("~ Combat rules ~", int0, int2, int1, 1);
    if ((varclient_250 == false)) {
        [int0, int2] = script1785("Melee combat is allowed.", int0, int2, int1, 0);
    } else {
        [int0, int2] = script1785("<col=ff0000>Melee combat</col> is forbidden.", int0, int2, int1, 0);
    };
    switch (varclient_252) {
        case 0: {
            if (((varclient_6259 == true) || (varbitclient_37000 == 1))) {
                [int0, int2] = script1785("Magical combat is allowed, however the <col=ff0000>Intercept</col> spell is not.", int0, int2, int1, 0);
            } else {
                [int0, int2] = script1785("Magical combat is allowed.", int0, int2, int1, 0);
            };
            break;
        }
        case 1: {
            [int0, int2] = script1785("Spells from the <col=ff0000>standard spellbook</col> are allowed.", int0, int2, int1, 0);
            break;
        }
        case 2: {
            if ((MAP_MEMBERS() == 1)) {
                [int0, int2] = script1785("The <col=ff0000>Bind</col>, <col=ff0000>Snare</col> and <col=ff0000>Entangle</col> spells are allowed.", int0, int2, int1, 0);
            } else {
                [int0, int2] = script1785("The <col=ff0000>Bind</col> spell is allowed.", int0, int2, int1, 0);
            };
            break;
        }
        case 3: {
            [int0, int2] = script1785("<col=ff0000>Magical combat</col> is forbidden.", int0, int2, int1, 0);
            break;
        }
    };
    if ((varclient_251 == false)) {
        [int0, int2] = script1785("Ranged combat is allowed.", int0, int2, int1, 0);
    } else {
        [int0, int2] = script1785("<col=ff0000>Ranged combat</col> is forbidden.", int0, int2, int1, 0);
    };
    if ((varclient_256 == false)) {
        [int0, int2] = script1785("Prayer is allowed.", int0, int2, int1, 0);
    } else {
        [int0, int2] = script1785("<col=ff0000>Prayer</col> is forbidden.", int0, int2, int1, 0);
    };
    if ((MAP_MEMBERS() == 1)) {
        if ((varclient_253 == false)) {
            [int0, int2] = script1785("Summoning is allowed.", int0, int2, int1, 0);
        } else {
            [int0, int2] = script1785("<col=ff0000>Summoning</col> is forbidden.<br>Familiars will be dismissed.", int0, int2, int1, 0);
        };
    };
    if ((varclient_254 == false)) {
        [int0, int2] = script1785("Food is allowed.", int0, int2, int1, 0);
    } else {
        [int0, int2] = script1785("<col=ff0000>Food</col> is forbidden.", int0, int2, int1, 0);
    };
    if ((varclient_255 == false)) {
        [int0, int2] = script1785("Potions are allowed.", int0, int2, int1, 0);
    } else {
        [int0, int2] = script1785("<col=ff0000>Potions</col> are forbidden.<br>Boosted stats will be reset (excluding Prayer boosts).", int0, int2, int1, 0);
    };
    int0 = (int0 + 7);
    [int0, int2] = script1785("~ Aid effects ~", int0, int2, int1, 1);
    if ((varbitclient_36998 == 0)) {
        [int0, int2] = script1785("Aid effects affect all those with Effects Accept aid turned on.", int0, int2, int1, 0);
    } else {
        [int0, int2] = script1785("<col=ff0000>Aid effects</col> do not affect other players.", int0, int2, int1, 0);
    };
    if ((varclient_252 > 0)) {
        [int0, int2] = script1785("<col=ff0000>Lunar spells</col> are not allowed.", int0, int2, int1, 0);
    } else if ((varbitclient_36999 == 0)) {
        [int0, int2] = script1785("Aid Lunar spells affect all those with Lunar Accept aid turned on.", int0, int2, int1, 0);
    } else {
        [int0, int2] = script1785("<col=ff0000>Aid Lunar spells</col> do not affect other players.", int0, int2, int1, 0);
    };
    if ((varclient_252 > 0)) {
        [int0, int2] = script1785("<col=ff0000>Seren spells</col> are not allowed.", int0, int2, int1, 0);
    } else if ((varbitclient_37000 == 0)) {
        [int0, int2] = script1785("Aid Seren spells affect all those with Seren Accept aid turned on.", int0, int2, int1, 0);
    } else {
        [int0, int2] = script1785("<col=ff0000>Aid Seren spells</col> do not affect other players.", int0, int2, int1, 0);
    };
    int0 = (int0 + 7);
    [int0, int2] = script1785("~ Arena ~", int0, int2, int1, 1);
    [int0, int2] = script1785(struct_getparam(enum_getvalue(0, 73, 1604 as cs2enum, varclient_257), 555), int0, int2, int1, 0);
    if ((int0 > IF_GETHEIGHT(comp(792, 3)))) {
        IF_SETHIDE(false, comp(792, 4));
        IF_SETPOSITION(7, 46, 0, 0, comp(792, 3));
        IF_SETSCROLLSIZE(0, int0, comp(792, 3));
        script31(comp(792, 4), comp(792, 3), 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
        if ((CC_FIND(comp(792, 4), 1) == 1)) {
            script37(comp(792, 4), comp(792, 3), IF_GETSCROLLY(comp(792, 3)), 1);
        };
    } else {
        CC_DELETEALL(comp(792, 4));
        IF_SETHIDE(true, comp(792, 4));
        IF_SETPOSITION(15, 46, 0, 0, comp(792, 3));
        IF_SETSCROLLSIZE(0, 0, comp(792, 3));
        IF_SETSCROLLPOS(0, 0, comp(792, 3));
    };
    return;
}