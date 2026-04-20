//
function script11088(int0: struct): string {
    var string0 = "";
    var int1 = 0;
    switch (int0) {
        case 28638: {
            string0 = `${OC_NAME(INV_GETOBJ(94 as inv, 17))} : ${OC_DESC(INV_GETOBJ(94 as inv, 17))}`;
            break;
        }
        case 43723: {
            string0 = `${struct_getparam(int0, 2794)}<br>Your masterwork armour has stalled ${inttostring(varbitplayer_43240, 10)} damage. You'll take ${inttostring(script2544(), 10)} or more damage every <col=ffffff>1.2</col> seconds until the pool is empty.`;
            break;
        }
        case 40797: {
            int1 = ((10080 - (DATE_MINUTES() - varplayer_2008)) + 1);
            if ((int1 > 0)) {
                string0 = `<br>This boost will expire in ${script11479((int1 / 1440), (MODULO(int1, 1440) / 60), MODULO(int1, 60))}.`;
            };
            string0 = strconcat(`Attuning to the Avatar Habitat has granted you a <col=33cc33>${inttostring(varbitplayer_41298, 10)}%</col> XP boost.`, string0);
            break;
        }
        case 1304: {
            string0 = `<col=FFFFFF>Cloud of destiny</col> - complete your fortune to get a reward from fate. <col=5A5AFF>${enum_getvalue(0, 36, 12413 as cs2enum, varbitplayer_35528)}</col>`;
            break;
        }
        case 44226: {
            if ((varplayer_1029 >= 0)) {
                string0 = `Melee Attack Rating Boosted (+${inttostring(varplayer_1029, 10)} Melee Accuracy)`;
            } else {
                string0 = `Melee Attack Rating Drained (${inttostring(varplayer_1029, 10)}  Melee Accuracy)`;
            };
            break;
        }
        case 44229: {
            if ((varplayer_1031 >= 0)) {
                string0 = `Ranged Attack Rating Boosted (+${inttostring(varplayer_1031, 10)} Ranged Accuracy)`;
            } else {
                string0 = `Ranged Attack Rating Drained (${inttostring(varplayer_1031, 10)} Ranged Accuracy)`;
            };
            break;
        }
        case 44231: {
            if ((varplayer_1033 >= 0)) {
                string0 = `Magic Attack Rating Boosted (+${inttostring(varplayer_1033, 10)} Magic Accuracy)`;
            } else {
                string0 = `Magic Attack Rating Drained (${inttostring(varplayer_1033, 10)} Magic Accuracy)`;
            };
            break;
        }
        case 48286: {
            if ((varplayer_11306 >= 0)) {
                string0 = `Necromancy Attack Rating Boosted (+${inttostring(varplayer_11306, 10)} Necromancy Accuracy)`;
            } else {
                string0 = `Necromancy Attack Rating Drained (${inttostring(varplayer_11306, 10)} Necromancy Accuracy)`;
            };
            break;
        }
        case 44228: {
            if ((varplayer_1035 >= 0)) {
                string0 = `Defence Rating Boosted (${inttostring(varplayer_1035, 10)})`;
            } else {
                string0 = `Defence Rating Drained (${inttostring(varplayer_1035, 10)})`;
            };
            break;
        }
        case 44227: {
            if ((varplayer_1030 >= 0)) {
                string0 = `Melee Strength Rating Boosted (+${inttostring(varplayer_1030, 10)}%)`;
            } else {
                string0 = `Melee Strength Rating Drained (${inttostring(varplayer_1030, 10)}%)`;
            };
            break;
        }
        case 44230: {
            if ((varplayer_1032 >= 0)) {
                string0 = `Ranged Strength Rating Boosted (+${inttostring(varplayer_1032, 10)}%)`;
            } else {
                string0 = `Ranged Strength Rating Drained (${inttostring(varplayer_1032, 10)}%)`;
            };
            break;
        }
        case 44232: {
            if ((varplayer_1034 >= 0)) {
                string0 = `Magic Strength Rating Boosted (+${inttostring(varplayer_1034, 10)}%)`;
            } else {
                string0 = `Magic Strength Rating Drained (${inttostring(varplayer_1034, 10)}%)`;
            };
            break;
        }
        case 48287: {
            if ((varplayer_11307 >= 0)) {
                string0 = `Necromancy Strength Rating Boosted (+${inttostring(varplayer_11307, 10)}%)`;
            } else {
                string0 = `Necromancy Strength Rating Drained (${inttostring(varplayer_11307, 10)}%)`;
            };
            break;
        }
        case 33047: {
            if ((varbitplayer_30395 == 4)) {
                string0 = "Valentine's Slam - 4% XP Boost";
            } else if ((varbitplayer_30395 == 2)) {
                string0 = "Valentine's Slam - 2% XP Boost";
            };
            break;
        }
        case 39803: {
            string0 = `Valentine's Flip - ${inttostring(varbitplayer_51034, 10)}% XP boost`;
            break;
        }
        case 30925: {
            string0 = `Pulse Core - ${inttostring((varbitplayer_27395 * 2), 10)}% XP Boost`;
            break;
        }
        case 6938:
        case 6939:
        case 6940:
        case 6941:
        case 6943:
        case 6944:
        case 6945:
        case 6946:
        case 6947:
        case 6948:
        case 6949:
        case 6950:
        case 6951:
        case 6953:
        case 6954:
        case 6955: {
            string0 = `${struct_getparam(int0, 2794)} <col=ffffff>${script7247((script11077(int0) * struct_getparam(int0, 5196)))}%</col> ${struct_getparam(int0, 2795)}`;
            break;
        }
        case 6942: {
            string0 = `${struct_getparam(int0, 2794)} <col=ffffff>+${inttostring((script11077(int0) * struct_getparam(int0, 5196)), 10)}</col> ${struct_getparam(int0, 2795)}`;
            break;
        }
        case 6952: {
            string0 = `${struct_getparam(int0, 2794)} <col=ffffff>${inttostring(((script11077(int0) * struct_getparam(int0, 5196)) * 15), 10)}</col> ${struct_getparam(int0, 2795)}`;
            break;
        }
        case 44879: {
            string0 = `Crafting and Construction experience is increased by <col=ffffff>${script7247((script11077(int0) * struct_getparam(int0, 5196)))}%</col>.`;
            break;
        }
        case 14709: {
            string0 = "<col=ffffff>Pulverised</col> - Damage dealt reduced by <col=ffffff>25%</col>";
            break;
        }
        case 31984: {
            string0 = "Onslaught Active";
            break;
        }
        case 34338: {
            string0 = `Cinder Core - ${inttostring((varbitplayer_45289 * 2), 10)}% Bonus XP Burn Boost`;
            break;
        }
        case 35990: {
            string0 = `Ruthless - grants a ${inttostring((varbitplayer_47357 / 2), 10)}.${inttostring((MODULO(varbitplayer_47357, 2) * 5), 10)}% damage boost per stack. Each kill will add a stack for 20 seconds, up to a maximum of 5.`;
            break;
        }
        case 35991: {
            string0 = script14791();
            break;
        }
        case 44698: {
            switch (varbitplayer_47856) {
                case 1: {
                    string0 = "Tune bane ore - You have currently tuned bane rocks to abyssalbanite.";
                    break;
                }
                case 2: {
                    string0 = "Tune bane ore - You have currently tuned bane rocks to basiliskbanite.";
                    break;
                }
                case 3: {
                    string0 = "Tune bane ore - You have currently tuned bane rocks to dragonbanite.";
                    break;
                }
                case 4: {
                    string0 = "Tune bane ore - You have currently tuned bane rocks to wallasalkibanite.";
                    break;
                }
            };
            break;
        }
        case 44914: {
            string0 = script13402();
            break;
        }
        case 45033: {
            if ((script15408(varplayer_9666) > 0)) {
                string0 = `Shadow infused hide - Damage taken is increased by ${script7653(script15408(varplayer_9666), 1, 1, 0, 0)}%.`;
            } else {
                string0 = `Shadow infused hide - Damage taken is reduced by ${script7653((-1 * script15408(varplayer_9666)), 1, 1, 0, 0)}%.`;
            };
            break;
        }
        case 45034: {
            if ((script15409(varplayer_9666) >= 0)) {
                string0 = `Shadow infused power - Damage dealt is increased by ${script7653(script15409(varplayer_9666), 1, 1, 0, 0)}%.`;
            } else {
                string0 = `Shadow infused power - Damage dealt is reduced by ${script7653((-1 * script15409(varplayer_9666)), 1, 1, 0, 0)}%.`;
            };
            break;
        }
        case 39632: {
            string0 = `You are earning ${inttostring(varclient_6897, 10)}% more XP in this area while the Spring Festival is active.`;
            break;
        }
        case 4574: {
            string0 = `Rock of Resilience - ${inttostring(varbitplayer_29061, 10)}% XP boost`;
            break;
        }
        case 45449: {
            string0 = `You have ${inttostring(INV_TOTAL(93 as inv, 51839 as obj), 10)} siege engine parts left.`;
            break;
        }
        case 45536: {
            string0 = `Yak Track - ${inttostring(varbitplayer_48835, 10)}% XP Boost.`;
            if ((script12476() == 1)) {
                string0 = `${string0} This buff is disabled while your DXP is active.`;
            };
            break;
        }
        case 33227: {
            string0 = `Spider minions will back up their leader: ${inttostring(varclient_4276, 10)} left.`;
            break;
        }
        case 34499: {
            string0 = `${inttostring(varclient_4277, 10)} acid is in the pool and should be dealt with via absorption.`;
            break;
        }
        case 41645: {
            string0 = `Spider minons on the roof can still heal Araxxor for ${inttostring(varclient_4278, 10)} health points.`;
            break;
        }
        case 46027: {
            string0 = `Stack-catch up to ${inttostring(script2659(), 10)} extra scarabs whilst your crocodile is in the middle of a catch.`;
            break;
        }
        case 6196: {
            if ((varplayer_10264 != -1 as obj)) {
                string0 = `Quiver ammo: ${OC_NAME(varplayer_10264)}`;
                if (((item_getparam(varplayer_10264, 6186) != -1 as struct) && (STRING_LENGTH(struct_getparam(item_getparam(varplayer_10264, 6186), 2795)) > 0))) {
                    string0 = `${string0}<br><br>${struct_getparam(item_getparam(varplayer_10264, 6186), 2795)}`;
                };
            } else {
                string0 = "Your quiver is empty.";
            };
            break;
        }
        case 46197: {
            string0 = `You have access to the Anima Flow Edict<br><br>With ${inttostring(varplayer_10539, 10)} ${script4583(varplayer_10539, "stack", "stacks")}, your basic abilities will gain ${inttostring((varplayer_10539 * (20 / 10)), 10)}% more adrenaline.`;
            break;
        }
        case 46194: {
            string0 = `You have access to the Balance of Power Edict<br><br>With ${inttostring(varplayer_10537, 10)} ${script4583(varplayer_10537, "stack", "stacks")}, while below ${inttostring(60, 10)}% of your maximum life points, outgoing damage is increased by ${inttostring((varplayer_10537 * 6), 10)}%.`;
            break;
        }
        case 46195: {
            string0 = `You have access to the Guardian's Triumph Edict<br><br>With ${inttostring(varplayer_10538, 10)} ${script4583(varplayer_10538, "stack", "stacks")}, after casting an ultimate ability, your next basic ability consumes Guardian's Triumph, increasing it's damage by ${inttostring((varplayer_10538 * 20), 10)}% and heals you for ${inttostring((varplayer_10538 * 8), 10)}%.`;
            break;
        }
        case 46193: {
            string0 = `You have access to the Haste Edict<br><br>With ${inttostring(varplayer_10534, 10)} ${script4583(varplayer_10534, "stack", "stacks")}, your ability cooldowns are reduced by ${inttostring((varplayer_10534 * 8), 10)}%.`;
            break;
        }
        case 46199: {
            string0 = `Zamorak has access to the Smite Hex<br><br>With ${inttostring(varplayer_10541, 10)} ${script4583(varplayer_10541, "stack", "stacks")}, if Zamorak's targets are hit below  ${inttostring((varplayer_10541 * 5), 10)}% of their total maximum life points, they'll be killed instantly.`;
            break;
        }
        case 46203: {
            string0 = `Zamorak has access to the Affliction Hex<br><br>With ${inttostring(varplayer_10545, 10)} ${script4583(varplayer_10545, "stack", "stacks")}, when Zamorak's targets heal, the amount will be reduced by  ${inttostring((varplayer_10545 * 10), 10)}%.`;
            break;
        }
        case 46200: {
            string0 = "Zamorak has access to his Coven generals<br><br>Upon activation of this Hex, Zamorak will call forth a Lifeweaver and a Protector to aid him in battle.";
            break;
        }
        case 46201: {
            string0 = `Zamorak has access to the Disintegrate Hex<br><br>With ${inttostring(varplayer_10543, 10)} ${script4583(varplayer_10543, "stack", "stacks")}, Zamorak's attacks will push ${inttostring((varplayer_10543 * 7), 10)}% damage through any shielding effects.`;
            break;
        }
        case 46202: {
            string0 = "Zamorak has access to Chaos traps<br><br>Upon activation of this Hex, Zamorak will spawn in traps across the arena that will spike magic damage if a target walks over.<br><br>For each subsequent Edict that is restored, Zamorak will send out a new set of traps.";
            break;
        }
        case 46198: {
            string0 = `Zamorak has access to the Twinshot Hex<br><br>With ${inttostring(varplayer_10540, 10)} ${script4583(varplayer_10540, "stack", "stacks")}, Zamorak's attacks deal a second delayed hit at ${inttostring((varplayer_10540 * 10), 10)}% total damage of the original hit.`;
            break;
        }
        case 46204: {
            string0 = `<col=FF0000>Hex: Twinshot - Zamorak's attacks deal a second hit at ${inttostring(10, 10)}% total damage of the original hit, per stack.<br><br><col=FF00>Edict: Anima Flow - All basic abilities generate ${inttostring((20 / 10), 10)}% more adrenaline per stack.`;
            break;
        }
        case 46205: {
            string0 = `<col=FF0000>Hex: Smite - If Zamorak's targets are hit below ${inttostring(5, 10)}% of their Constitution level, per stack, they'll be executed instantly.<br><br><col=FF00>Edict: Haste - Your ability cooldowns are reduced by ${inttostring(8, 10)}% of their original cooldown per stack.`;
            break;
        }
        case 46206: {
            string0 = "<col=FF0000>Hex: Coven - Zamorak calls forth some of his coven to support him.<br><br><col=FF00>Edict: Inner Chaos - While standing near a Hexed Rune, you deal and take 5% more damage.";
            break;
        }
        case 46207: {
            string0 = `<col=FF0000>Hex: Disintegrate - Zamorak's attacks will push ${inttostring(7, 10)}% of damage through any shielding effects, per stack.<br><br><col=FF00>Edict: Guardian's Triumph - After casting an ultimate ability, your next basic ability consumes Guardian's Triumph, increasing the damage it deals by ${inttostring(20, 10)}% extra damage, and heals you for ${inttostring(8, 10)}% of your missing life points per stack.`;
            break;
        }
        case 46208: {
            string0 = "<col=FF0000>Hex: Chaos Traps - Upon activation of this hex, Zamorak will spawn in traps across the arena that will spike magic damage if a target walks over them.<br><br><col=FF00>Edict: Sword of Edicts - Temporarily siphon the dwindling defensive power from the Sword of Edicts, dealing and taking 5% less damage when standing near it.";
            break;
        }
        case 46209: {
            string0 = `<col=FF0000>Hex: Affliction - When Zamorak's targets heal, the amount will be reduced by ${inttostring(varplayer_10545, 10)}% per stack.<br><br><col=FF00>Edict: Balance of Power - While below ${inttostring(60, 10)}% of your maximum life points, outgoing damage is increased by ${inttostring(6, 10)}% per stack.`;
            break;
        }
        case 35070: {
            string0 = `During this week of Fresh Start Worlds, you are earning <col=FF00>+${inttostring((varbitplayer_51872 / 10), 10)}% XP</col>`;
            if ((varbitplayer_51873 > 0)) {
                string0 = `${string0} in skills level 70 and above; and <col=FF00>+${inttostring(((varbitplayer_51872 + varbitplayer_51873) / 10), 10)}% XP</col> in skills below level 70`;
            };
            string0 = `${string0}.`;
            break;
        }
        case 47182: {
            string0 = `Ring of Death - Revive effect last dealt ${inttostring(varclient_7112, 10)} damage.<br><br>The effect will stop when you die, or return to a safe area such as a bank.`;
            break;
        }
        case 48339: {
            string0 = script3111(varplayer_11059, struct_getparam(varplayer_11059, 2795), 1, 0);
            break;
        }
        case 48335: {
            string0 = script17727(int0, 1, 1);
            break;
        }
        case 48336: {
            string0 = script17727(int0, 1, 1);
            break;
        }
        case 48337: {
            string0 = script17727(int0, 1, 1);
            break;
        }
        case 32349: {
            string0 = script17727(int0, 1, 1);
            break;
        }
        case 48341: {
            string0 = `${struct_getparam(int0, 2794)}<br>${script3111(48329 as struct, struct_getparam(48329 as struct, 2795), 1, 0)}`;
            break;
        }
        case 48342: {
            string0 = `${struct_getparam(int0, 2794)}<br>${script3111(48330 as struct, struct_getparam(48330 as struct, 2795), 1, 0)}`;
            break;
        }
        case 48347: {
            string0 = `${struct_getparam(int0, 2794)}<br>${script3111(48332 as struct, struct_getparam(48332 as struct, 2795), 1, 0)}`;
            break;
        }
        case 49073: {
            string0 = `${struct_getparam(int0, 2794)}<br>${script3111(49072 as struct, struct_getparam(49072 as struct, 2795), 1, 0)}`;
            break;
        }
        case 48878: {
            string0 = `${script18429(varbitplayer_54950)}<br>${script18431(varbitplayer_54950)}`;
            break;
        }
        case 4549: {
            string0 = `${struct_getparam(int0, 2794)}${script18710(49543, string0, 1)}`;
            break;
        }
        case 34985: {
            string0 = `${struct_getparam(int0, 2794)}${script18713(49543, string0, 1)}`;
            break;
        }
        case 50212: {
            string0 = `Absorbed energy: <col=00ff00>${TOSTRING_LOCALISED(varbitplayer_55992, 1)}<br>Current attunement: <col=00ff00>${script19131(varbitplayer_55991)}`;
            break;
        }
        case 29054: {
            string0 = `Lumberjack's Intuition<br>${script19675()}`;
            break;
        }
        case 51129: {
            string0 = `Love Letter - ${inttostring(varbitplayer_57161, 10)}% XP Boost`;
            break;
        }
        case 51130: {
            string0 = `Love Letter - ${inttostring(varbitplayer_57163, 10)}% Bonus XP Burn Boost`;
            break;
        }
        case 51665: {
            string0 = script19979(int0, string0);
            break;
        }
        case 53000: {
            string0 = script20701();
            break;
        }
        case 1869: {
            string0 = script3721();
            break;
        }
    };
    return string0;
}