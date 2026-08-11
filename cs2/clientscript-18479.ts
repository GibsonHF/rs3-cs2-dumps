//
function script18479(): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 180);
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(35446 as graphic, comp(1082, 14));  // trh189_overlay:title
            break;
        }
        case 1: {
            IF_SETGRAPHIC(35449 as graphic, comp(1082, 14));  // trh189_overlay:title
            break;
        }
        case 2: {
            IF_SETGRAPHIC(35447 as graphic, comp(1082, 14));  // trh189_overlay:title
            break;
        }
        case 3: {
            IF_SETGRAPHIC(35448 as graphic, comp(1082, 14));  // trh189_overlay:title
            break;
        }
    };
    var int0 = script1626(1, 0);
    var int1 = script1626(2, 0);
    var int2 = dbrow_getfield(int0, 983136, 0);
    var int3 = dbrow_getfield(int1, 983136, 0);
    var int4 = dbrow_getfield(int0, 983168, 0);
    var int5 = dbrow_getfield(int1, 983168, 0);
    var string0 = dbrow_getfield(int0, 983040, 0);
    var string1 = dbrow_getfield(int1, 983040, 0);
    var int6 = script1626(1, 1);
    var int7 = script1626(2, 1);
    var int8 = dbrow_getfield(int6, 983136, 0);
    var int9 = dbrow_getfield(int7, 983136, 0);
    var int10 = dbrow_getfield(int6, 983168, 0);
    var int11 = dbrow_getfield(int7, 983168, 0);
    var string2 = dbrow_getfield(int6, 983040, 0);
    var string3 = dbrow_getfield(int7, 983040, 0);
    var int12 = -1;
    var int13 = -1;
    var int14 = -1;
    var int15 = -1;
    var int16 = script20102();
    var int17 = script20103();
    [int12, int13, int14, int15] = script10516();
    IF_SETNPCMODEL(-1 as npc, comp(1082, 144));  // trh189_overlay:npc_left_fighter
    IF_SETNPCMODEL(-1 as npc, comp(1082, 26));  // trh189_overlay:npc_right_fighter
    IF_SETNPCMODEL(-1 as npc, comp(1082, 137));  // trh189_overlay:npc_left_2
    IF_SETNPCMODEL(-1 as npc, comp(1082, 135));  // trh189_overlay:npc_right_2
    IF_SETNPCMODEL(int2, comp(1082, 144));  // trh189_overlay:npc_left_fighter
    IF_SETNPCMODEL(int3, comp(1082, 26));  // trh189_overlay:npc_right_fighter
    IF_SETMODELANGLE(0, -37, 0, 1800, 0, 550, comp(1082, 144));  // trh189_overlay:npc_left_fighter
    IF_SETMODELANGLE(0, -37, 0, -1800, 0, 550, comp(1082, 26));  // trh189_overlay:npc_right_fighter
    IF_SETMODELANIM(int4, comp(1082, 144));  // trh189_overlay:npc_left_fighter
    IF_SETMODELANIM(int5, comp(1082, 26));  // trh189_overlay:npc_right_fighter
    IF_SETMODELANIM(int14, comp(1082, 136));  // trh189_overlay:npc_left_1
    IF_SETMODELANIM(int15, comp(1082, 134));  // trh189_overlay:npc_right_1
    IF_SETNPCMODEL(int2, comp(1082, 137));  // trh189_overlay:npc_left_2
    IF_SETNPCMODEL(int3, comp(1082, 135));  // trh189_overlay:npc_right_2
    IF_SETMODELANIM(int4, comp(1082, 137));  // trh189_overlay:npc_left_2
    IF_SETMODELANIM(int5, comp(1082, 135));  // trh189_overlay:npc_right_2
    IF_SETMODELANGLE(0, -37, 0, 1800, 0, 575, comp(1082, 137));  // trh189_overlay:npc_left_2
    IF_SETMODELANGLE(0, -37, 0, -1800, 0, 575, comp(1082, 135));  // trh189_overlay:npc_right_2
    IF_SETNPCMODEL(int8, comp(1082, 17));  // trh189_overlay:npc_left_boss
    IF_SETNPCMODEL(int9, comp(1082, 18));  // trh189_overlay:npc_right_boss
    IF_SETMODELANGLE(0, 0, 0, -450, 0, int16, comp(1082, 17));  // trh189_overlay:npc_left_boss
    IF_SETMODELANGLE(0, 0, 0, 500, 0, int17, comp(1082, 18));  // trh189_overlay:npc_right_boss
    IF_SETMODELANIM(int10, comp(1082, 17));  // trh189_overlay:npc_left_boss
    IF_SETMODELANIM(int11, comp(1082, 18));  // trh189_overlay:npc_right_boss
    IF_SETNPCMODEL(28986 as npc, comp(1082, 174));  // trh189_overlay:npc_1
    IF_SETMODELANIM(35252 as seq, comp(1082, 174));  // trh189_overlay:npc_1
    IF_SETNPCMODEL(32240 as npc, comp(1082, 176));  // trh189_overlay:npc_2
    IF_SETMODELANIM(36132 as seq, comp(1082, 176));  // trh189_overlay:npc_2
    IF_SETNPCMODEL(31116 as npc, comp(1082, 178));  // trh189_overlay:npc_3
    IF_SETMODELANIM(18015 as seq, comp(1082, 178));  // trh189_overlay:npc_3
    IF_SETNPCMODEL(28983 as npc, comp(1082, 180));  // trh189_overlay:npc_4
    IF_SETMODELANIM(17970 as seq, comp(1082, 180));  // trh189_overlay:npc_4
    IF_SETNPCMODEL(29661 as npc, comp(1082, 182));  // trh189_overlay:npc_5
    IF_SETMODELANIM(17970 as seq, comp(1082, 182));  // trh189_overlay:npc_5
    IF_SETNPCMODEL(31119 as npc, comp(1082, 184));  // trh189_overlay:npc_6
    IF_SETMODELANIM(36061 as seq, comp(1082, 184));  // trh189_overlay:npc_6
    IF_SETMODEL(137989 as model, comp(1082, 186));  // trh189_overlay:npc_7
    IF_SETMODEL(137991 as model, comp(1082, 187));  // trh189_overlay:npc_8
    IF_SETTEXT(`Attack the <col=FFFF00>${string0}</col> for a <col=FFFF00>Rarity Bonus!</col>`, comp(1082, 146));  // trh189_overlay:splash_1_text
    IF_SETTEXT(`Attack the <col=FFFF00>${string1}</col> for a <col=FF00>Multiplier Bonus!</col>`, comp(1082, 31));  // trh189_overlay:splash_2_text
    IF_SETTEXT("Defeat the fighters to get <col=FFFF00>Sigils</col> which can be exchanged for <col=FFFF00>pirate themed cosmetics</col>!", comp(1082, 138));  // trh189_overlay:splash_3_text_1
    if ((script6953() == 13837)) {
        IF_SETTEXT("Unlock all Solite or Lunite pieces to unlock a <col=FFFF00>bonus weapon or shield for FREE!</col> Inquisitor armour is not required for bonus rewards.", comp(1082, 139));  // trh189_overlay:splash_3_text_2
    } else {
        IF_SETTEXT("Unlock all outfit pieces and weapons in a set to unlock a <col=FFFF00>bonus reward for FREE!</col>", comp(1082, 139));  // trh189_overlay:splash_3_text_2
    };
    IF_SETTEXT(`<col=FFFF00>${string2}</col> and <col=FFFF00>${string3}</col> have a chance to spawn which will provide <col=FFFF00>greater prize modifiers</col> while they are active!<br>Bosses give <col=FFFF00>2x Sigils</col> when defeated.`, comp(1082, 140));  // trh189_overlay:splash_4_text
    IF_SETTEXT("During Final Showdown, <col=FFFF00>all previous showdown cosmetics are available</col> via the Showdown Store!", comp(1082, 188));  // trh189_overlay:splash_5_text
    script11163(5);
    return;
}