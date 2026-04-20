//
function script11087(int0: struct): string {
    var string0 = "";
    var int1 = -1 as obj;
    var int2 = 0;
    switch (int0) {
        case 45326: {
            string0 = ` - ${inttostring(10, 10)}% Support XP Boost`;
            break;
        }
        case 45325: {
            string0 = ` - ${inttostring(10, 10)}% Gatherer XP Boost`;
            break;
        }
        case 45323: {
            string0 = ` - ${inttostring(10, 10)}% Combat XP Boost`;
            break;
        }
        case 45324: {
            string0 = ` - ${inttostring(10, 10)}% Artisan XP Boost`;
            break;
        }
        case 21215: {
            int1 = INV_GETOBJ(94 as inv, 17);
            if ((int1 != -1 as obj)) {
                string0 = `${OC_NAME(int1)} Active`;
            };
            break;
        }
        case 33383: {
            int1 = INV_GETOBJ(94 as inv, 17);
            if ((int1 == 37225 as obj)) {
                string0 = `${OC_NAME(int1)} is boosting your combat skills`;
            } else {
                string0 = `${OC_NAME(int1)} will activate on your next attack`;
            };
            break;
        }
        case 33384: {
            int1 = INV_GETOBJ(94 as inv, 17);
            if ((int1 != -1 as obj)) {
                string0 = `${OC_NAME(int1)} is reflecting ${inttostring((100 / 20), 10)}% of incoming damage`;
            };
            break;
        }
        case 34189: {
            string0 = `Crystal Shield Defence Active - You have <col=00ff00>${TOSTRING_LOCALISED(varbitplayer_33710, 1)}</col> temporary life points, thanks to your Crystal Shield's absorption.`;
            break;
        }
        case 1626: {
            string0 = `The residual energy from the Stone of Jas is empowering you, increasing your damage by <col=33cc33>${inttostring(varbitplayer_36378, 10)}%</col>.`;
            break;
        }
        case 39037: {
            if ((varplayer_2735 == 1)) {
                string0 = "You have 1 cannonball remaining in your cannon.";
            } else {
                string0 = `You have ${inttostring(varplayer_2735, 10)} cannonballs remaining in your cannon.`;
            };
            string0 = strconcat(string0, "<br>Damage: <col=FF00>100%</col>");
            break;
        }
        case 52342: {
            if ((varplayer_2735 == 1)) {
                string0 = "You have 1 meteorite cannonball remaining in your cannon.";
            } else {
                string0 = `You have ${inttostring(varplayer_2735, 10)} meteorite cannonballs remaining in your cannon.`;
            };
            string0 = strconcat(string0, `<br>Damage: <col=FF00>${inttostring(150, 10)}%</col>`);
            break;
        }
        case 40798: {
            int2 = ((10080 - (DATE_MINUTES() - varplayer_2008)) + 1);
            if ((int2 > 0)) {
                string0 = `<br>This boost will expire in ${script11479((int2 / 1440), (MODULO(int2, 1440) / 60), MODULO(int2, 60))}.`;
            };
            string0 = strconcat(`Attuning to the Avatar Habitat has granted you a <col=33cc33>${inttostring(varbitplayer_41299, 10)}%</col> boost in resources gathered at Citadel skill plots.`, string0);
            break;
        }
        case 44996: {
            string0 = ` - You are taking an additional <col=33cc33>${inttostring((varbitplayer_49291 * 20), 10)}%</col> damage.`;
            break;
        }
        case 45275: {
            string0 = `Fungal Shield Active - You are shielded for <col=00ff00>${TOSTRING_LOCALISED(varbitplayer_21565, 1)}</col> life points, by your Fungal Shield`;
            break;
        }
        case 1624:
        case 6850: {
            if ((INV_GETOBJ(94 as inv, 2) == 44550 as obj)) {
                string0 = ` Remaining charges: ${inttostring(INV_GETVAR(94 as inv, 2, 30214), 10)}`;
            };
            break;
        }
        case 1489: {
            string0 = `<br>- <col=ffffff>${inttostring(((((50 + 20) + 15) + 10) + 5), 10)}%</col> of the total damage applied over <col=ffffff>${script14945((3 * 5), 1)}</col>.`;
            string0 = `${string0}<br>- <col=ffffff>${inttostring(5, 10)}</col> hits.`;
            string0 = `${string0}<br>- <col=ffffff>Damage over time</col>.`;
            break;
        }
        case 48338: {
            string0 = `<br>- <col=ffffff>${inttostring(25, 10)}%</col> of initial damage per hit every <col=ffffff>${script14945(3, 1)}</col>.`;
            string0 = `${string0}<br>- <col=ffffff>Damage over time</col>.`;
            string0 = `${string0}<br>- <col=ffffff>On-death:</col> Applies <sprite=30098><nbsp><col=ffffff>${struct_getparam(48338, 2794)}</col> to up to ${script18560(9)} within <col=ffffff>${inttostring(1, 10)} ${script4583(1, "tile", "tiles")}</col> for <col=ffffff>4</col> hits.`;
            break;
        }
        case 48333: {
            string0 = `<br><br>Maximum stacks: <col=ffffff>${inttostring(script17458(), 10)}</col>.`;
            break;
        }
        case 48334: {
            string0 = `<br><br>Maximum stacks: <col=ffffff>${inttostring(script17459(), 10)}</col>.`;
            break;
        }
        case 48335: {
            string0 = `<br><br>Maximum stacks: <col=ffffff>${inttostring(script17457(), 10)}</col>.`;
            break;
        }
        case 32349: {
            string0 = `<br><br>Maximum stacks: <col=ffffff>${inttostring(script6438(), 10)}</col>.`;
            break;
        }
        case 48345: {
            string0 = `<br>- <col=A788DD>Necromancy attacks</col> will execute the mark for fatal damage if life points drop below <col=ffffff>${TOSTRING_LOCALISED(20, 1)}%</col>.`;
            break;
        }
        case 48343: {
            string0 = `<br>- <col=ffffff>${inttostring((200 / 10), 10)}%</col> chance to dodge incoming attacks.`;
            break;
        }
        case 49074: {
            string0 = "<br>- Reduces <col=ffffff>armour rating</col> for each stack.";
            break;
        }
        case 48350: {
            if ((varplayer_11085 == script17464())) {
                string0 = `<br>- Your <sprite=30015><nbsp><col=ffffff>${struct_getparam(48293, 2794)} is empowered and will deal ${script17717(200)}.`;
            } else {
                string0 = `<br>- At <col=ffffff>${inttostring(script17464(), 10)}</col> stacks your <sprite=30015><nbsp><col=ffffff>${struct_getparam(48293, 2794)} is empowered and deals ${script17717(200)}</col>.`;
            };
            break;
        }
        case 52064: {
            if ((varplayer_12291 == script20086())) {
                string0 = `<br>- Your <sprite=30015><nbsp><col=ffffff>${struct_getparam(48293, 2794)} is empowered and will generate <col=ffffff>${inttostring(1, 10)} <sprite=30123><nbsp>${struct_getparam(48334, 2794)}</col>.`;
            } else {
                string0 = `<br>- At <col=ffffff>${inttostring(script20086(), 10)}</col> stacks your <sprite=30015><nbsp><col=ffffff>${struct_getparam(48293, 2794)} is empowered and generates <col=ffffff>${inttostring(1, 10)} <sprite=30123><nbsp><col=ffffff>${struct_getparam(48334, 2794)}</col>.`;
            };
            break;
        }
        case 48351: {
            string0 = `<br><br>- <sprite=30076><nbsp><col=ffffff>${struct_getparam(48296, 2794)}</col>, <sprite=30077><nbsp><col=ffffff>${struct_getparam(48297, 2794)}</col>, <sprite=30074><nbsp><col=ffffff>${struct_getparam(48314, 2794)}:</col> Immediately readies <sprite=30127><nbsp><col=ffffff>${struct_getparam(48350, 2794)}</col>.`;
            break;
        }
        case 52065: {
            string0 = `<br><br>- <sprite=30080><nbsp><col=ffffff>${struct_getparam(48298, 2794)}</col>, <sprite=30082><nbsp><col=ffffff>${struct_getparam(48299, 2794)}</col>, <sprite=30088><nbsp><col=ffffff>${struct_getparam(48301, 2794)}, <sprite=30084><nbsp><col=ffffff>${struct_getparam(48311, 2794)}:</col> Immediately readies <sprite=35068><nbsp><col=ffffff>${struct_getparam(52064, 2794)}</col>.`;
            break;
        }
        case 47801: {
            if ((varplayer_10936 == 6)) {
                string0 = `<br>- Rasial's basic attack is empowered and will deal ${script17717(200)}</col>.`;
            } else {
                string0 = `<br>- At ${inttostring(6, 10)} stacks Rasial's basic attack is empowered and deals ${script17717(200)}</col>.`;
            };
            break;
        }
        case 52802: {
            string0 = `<br>- <col=25AD37>Ranged attacks</col> generate ${script11570(50)} with each hit.`;
            break;
        }
        case 52801: {
            string0 = `<br>- <col=25AD37>Ranged attacks</col> deal an additional ${script17719(49543 as struct, -1, 20, 1, 1)} with each hit.`;
            break;
        }
        case 46308:
        case 46309: {
            string0 = script18624(int0, string0);
            break;
        }
        case 52778: {
            string0 = script12618(int0, string0);
            break;
        }
        case 52779: {
            string0 = script13038(int0, string0);
            break;
        }
        case 44820: {
            string0 = script13086(int0, string0);
            break;
        }
        case 44066: {
            string0 = script13790(int0, string0);
            break;
        }
        case 49555: {
            string0 = `<br>- After <col=ffffff>${inttostring(15, 10)}</col> attacks launch an additional attack that deals <col=ffffff>${script7653(100, 1, 1, 0, 1)}%</col> of the total damage stored.`;
            break;
        }
        case 49563: {
            string0 = `<br>- <col=FFA11A>Melee abilities</col> deal ${script17719(49532 as struct, -1, 24, 1, 1)}.`;
            break;
        }
        case 49562: {
            string0 = `<br><br>Maximum stacks: <col=ffffff>${inttostring(10, 10)}</col>.`;
            break;
        }
        case 50065: {
            string0 = `<br>- Damage is reduced by <col=ffffff>${inttostring(75, 10)}%</col>.`;
            break;
        }
        case 50083: {
            string0 = `<br>- ${inttostring(1, 10)}+ <sprite=33967><nbsp>${struct_getparam(50083, 2794)} stack: Damage over time abilities have a ${inttostring(30, 10)}% chance to become empowered, dealing all of their damage immediately and refreshing their cooldown.`;
            string0 = `${string0}<br>- ${inttostring(10, 10)}+ <sprite=33967><nbsp>${struct_getparam(50083, 2794)} stacks: ${script17722(3, 1)} deals ${inttostring(300, 10)}% of <sprite=33967><nbsp>${struct_getparam(50083, 2794)} stacks + ${inttostring(100, 10)}% of your ${script18576(6, 1, 1)} as bonus damage.`;
            string0 = `${string0}<br>- ${inttostring(25, 10)}+ <sprite=33967><nbsp>${struct_getparam(50083, 2794)} stacks: Basic abilities generate an additional ${script11570((10 * 6))} over ${script15973(6, 1)}.`;
            break;
        }
        case 50070: {
            string0 = `<br>- Your next <sprite=23401><nbsp><col=ffffff>${struct_getparam(14729, 2794)}</col> within <col=ffffff>${script15973(25, 1)}</col> deals <col=ffffff>${inttostring(40, 10)}%</col> increased damage.`;
            break;
        }
        case 51272: {
            string0 = script19867(string0);
            break;
        }
        case 53077: {
            string0 = script16254(string0);
            break;
        }
        case 53078: {
            string0 = script16256(string0);
            break;
        }
        case 44040: {
            string0 = script3939(string0);
            break;
        }
        case 51665: {
            string0 = script19979(int0, string0);
            break;
        }
        case 51848: {
            string0 = `<br>- Deals damage every <col=ffffff>${script14945(3, 1)}</col> and generates a stack.`;
            string0 = `${string0}<br>- Can be transferred to friendly targets.`;
            string0 = `${string0}<br>- Damage is increased with each hit, dealing fatal damage at maximum stacks.`;
            string0 = `${string0}<br><br>Maximum stacks: <col=ffffff>${inttostring(8, 10)}</col>.`;
            break;
        }
        case 52061: {
            string0 = script20099(string0);
            break;
        }
        case 45563: {
            string0 = script7051(int0, string0);
            break;
        }
        case 45447: {
            string0 = `<br><col=ffffff>On critical strike:</col> Launch a <col=ffffff>Lightning Surge</col> at your target dealing ${script17720(int0, 70, (70 + 20), 0, 1)}.`;
            break;
        }
    };
    return string0;
}