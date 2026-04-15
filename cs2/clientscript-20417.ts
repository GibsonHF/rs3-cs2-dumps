//
function script20417(): void {
    var int0 = comp(191, 77);
    var int1 = comp(191, 78);
    var int2 = comp(191, 79);
    var int3 = comp(191, 80);
    var int4 = 0;
    var int5 = 4;
    var int6 = 4;
    var int7 = IF_GETWIDTH(int3);
    var int8 = 9941 as graphic;
    var int9 = 19249 as struct;
    CC_DELETEALL(int3);
    switch (varbitplayer_60340) {
        case 1: {
            IF_SETTEXT("Week 2 - Bossing", int0);
            IF_SETTEXT("8th December - 14th December", int1);
            IF_SETTEXT(script20418(7435 as dbrow, 8685), int2);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "Choice of Soul Reaper task.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "Receive double reaper points when completing Soul Reaper tasks.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "Elder overload cauldrons are active at War's Retreat.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "All deaths are safe for members, and free for non-members.", int9);
            break;
        }
        case 2: {
            IF_SETTEXT("Week 3 - Skilling", int0);
            IF_SETTEXT("15th December - 21st December", int1);
            IF_SETTEXT(script20418(15492 as dbrow, 8692), int2);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "10% chance to receive an additional resource when training Gathering skills.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "10% chance to save resources or produce double items when training Artisan skills.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "Receive 50% more XP when completing Agility courses.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "Pickpocketing has a 20% increased chance of success.<col=941212>*</col>", int9);
            break;
        }
        case 3: {
            IF_SETTEXT("Week 4 - Combat", int0);
            IF_SETTEXT("22nd December - 28th December", int1);
            IF_SETTEXT(script20418(17162 as dbrow, 8699), int2);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "Choice between 2 Slayer tasks when assigned a new task.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "Receive double slayer points when completing Slayer tasks.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "Tier 4 luck is always active.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "Charm drops give one more charm than normal.<col=941212>*</col>", int9);
            break;
        }
        case 4: {
            IF_SETTEXT("Week 5 - Activities", int0);
            IF_SETTEXT("29th December - 4th January", int1);
            IF_SETTEXT(script20418(17268 as dbrow, 8706), int2);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "The Dominion Tower grants 50% more dominion factor, and killing bosses count as two for the purpose of reward unlocks.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "Shattered Worlds grants 50% more shattered anima.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "Receive double dungeoneering tokens from Dungeoneering and Elite Dungeons.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "Player-owned ports voyages return 30% extra resources and trade goods.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "Receive double thaler from minigames.<col=941212>*</col>", int9);
            break;
        }
        default: {
            IF_SETTEXT("Week 1 - Clue Scrolls", int0);
            IF_SETTEXT("1st December - 7th December", int1);
            IF_SETTEXT(script20418(7433 as dbrow, 8678), int2);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "1 free reroll for clue scroll rewards per day.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "10% increased chance to get clue scrolls as drops and from pickpocketing.<col=941212>*</col>", int9);
            [int4, int6] = script176(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, int8, 16, 16, "Receive 50% more treasure trail points when completing clue scrolls.<col=941212>*</col>", int9);
            break;
        }
    };
    [int4, int6] = script12086(int3, IF_GETNEXTSUBID(int3), int5, int6, int7, "<br><col=941212>* Not available for Ironmen.</col>", int9);
    return;
}