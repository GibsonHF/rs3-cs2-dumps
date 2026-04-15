//
function script17427(int0: obj): string {
    var string0 = item_getparam(int0, 4085);
    var string1 = "";
    if (((varbitplayer_42233 > 1) && (script6831(int0) == 3))) {
        string1 = "This prize isn't affected by multipliers. You will receive Oddments to account for any extra prizes you would have won.";
    };
    if ((STRING_LENGTH(string0) > 0)) {
        if ((STRING_LENGTH(string1) > 0)) {
            string0 = `${string0} ${string1}`;
        };
        return string0;
    };
    switch (int0) {
        case 27616: {
            return "Provides bonuses while fighting crawling hands.";
        }
        case 27618: {
            return "Provides bonuses while fighting cockatrices.";
        }
        case 27620: {
            return "Provides bonuses while fighting basilisks.";
        }
        case 27622: {
            return "Provides bonuses while fighting kurasks.";
        }
        case 27624: {
            return "Provides bonuses while fighting abyssal demons.";
        }
        case 28686: {
            return "Provides bonuses while fighting banshees.";
        }
        case 28688: {
            return "Provides bonuses while fighting jellies.";
        }
        case 28690: {
            return "Provides bonuses while fighting dust devils.";
        }
        case 28692: {
            return "Provides bonuses while fighting gargoyles.";
        }
        case 28694: {
            return "Provides bonuses while fighting mutated jadinkos.";
        }
        case 31089: {
            return "Provides bonuses while fighting bloodvelds.";
        }
        case 31091: {
            return "Provides bonuses while fighting aberrant spectres.";
        }
        case 31093: {
            return "Provides bonuses while fighting jungle strykewyrms.";
        }
        case 31095: {
            return "Provides bonuses while fighting desert strykewyrms.";
        }
        case 31097: {
            return "Provides bonuses while fighting ice strykewyrms.";
        }
        case 31099: {
            return "Provides bonuses while fighting dark beasts.";
        }
        case 28148: {
            return "A plain wrap plus a random topping. Different toppings boost different stats.";
        }
        case 28551: {
            return "Combine this with a Marid handle and spout to build a Marid lamp.";
        }
        case 28552: {
            return "Combine this with a Marid pot and spout to build a Marid lamp.";
        }
        case 28553: {
            return "Combine this with a Marid pot and handle to build a Marid lamp.";
        }
        case 28554: {
            return "Combine this with a Ghul handle and spout to build a Ghul lamp.";
        }
        case 28555: {
            return "Combine this with a Ghul pot and spout to build a Ghul lamp.";
        }
        case 28556: {
            return "Combine this with a Ghul pot and handle to build a Ghul lamp.";
        }
        case 28563: {
            return "Combine this with a Sila handle and spout to build a Sila lamp.";
        }
        case 28564: {
            return "Combine this with a Sila pot and spout to build a Sila lamp.";
        }
        case 28565: {
            return "Combine this with a Sila pot and handle to build a Sila lamp.";
        }
        case 28557: {
            return "Combine this with an Ifrit handle and spout to build an Ifrit lamp.";
        }
        case 28558: {
            return "Combine this with an Ifrit pot and spout to build an Ifrit lamp.";
        }
        case 28559: {
            return "Combine this with an Ifrit pot and handle to build an Ifrit lamp.";
        }
        case 28560: {
            return "Combine this with a Vetal handle and spout to build a Vetal lamp.";
        }
        case 28561: {
            return "Combine this with a Vetal pot and spout to build a Vetal lamp.";
        }
        case 28562: {
            return "Combine this with a Vetal pot and handle to build a Vetal lamp.";
        }
        case 28566: {
            return "Combine this with a Ghul, Ifrit, Marid, Sila and Vetal lamp to build the Lamp of the Djinn!";
        }
        case 28589: {
            return "Combine 500 of these to create the Coronet of Spring.";
        }
        case 28590: {
            return "Combine 500 of these to create the Coronet of Summer.";
        }
        case 28591: {
            return "Combine 500 of these to create the Coronet of Autumn.";
        }
        case 28592: {
            return "Combine 500 of these to create the Coronet of Winter.";
        }
    };
    if (((OC_MEMBERS(int0) == 1) && (MAP_MEMBERS() == 0))) {
        switch (int0) {
            case 23665:
            case 23666:
            case 23667:
            case 23668:
            case 23669:
            case 23670: {
                string0 = "Prestigious markings worn on the head.";
                break;
            }
            case 23671: {
                string0 = "A high-ranking officer's marching cane.";
                break;
            }
            case 23672: {
                string0 = "To hold an intrepid thief's loot.";
                break;
            }
            case 23673: {
                string0 = "Featuring Yelps, of the Squeal of Fortune.";
                break;
            }
            case 23674: {
                string0 = "A fine blade from the Eastern Lands.";
                break;
            }
            case 23675:
            case 23676:
            case 23677:
            case 23678: {
                string0 = "Menacing and awe-inspiring head decoration.";
                break;
            }
            case 23679:
            case 23680:
            case 23681:
            case 23682: {
                string0 = "A high-level sword from the God Wars dungeon.";
                break;
            }
            case 23691: {
                string0 = "A powerful, high-level weapon from the Abyss.";
                break;
            }
            case 23692: {
                string0 = "Resilient, high-level armour.";
                break;
            }
            case 23693: {
                string0 = "Resilient, high-level armour.";
                break;
            }
            case 23694: {
                string0 = "Resilient, high-level armour.";
                break;
            }
            case 23695:
            case 25952:
            case 28083: {
                string0 = "Lightning-fast, high-level weapons.";
                break;
            }
            case 23696: {
                string0 = "A strong, high-level weapon.";
                break;
            }
            case 23687: {
                string0 = "Fine warrior's armour from the God Wars dungeon.";
                break;
            }
            case 23688: {
                string0 = "Fine warrior's armour from the God Wars dungeon.";
                break;
            }
            case 23689: {
                string0 = "Fine warrior's armour from the God Wars dungeon.";
                break;
            }
            case 23684: {
                string0 = "Fine ranger's armour from the God Wars dungeon.";
                break;
            }
            case 23685: {
                string0 = "Fine ranger's armour from the God Wars dungeon.";
                break;
            }
            case 23686: {
                string0 = "Fine ranger's armour from the God Wars dungeon.";
                break;
            }
            case 23690: {
                string0 = "A high-level weapon, excellent for training Strength.";
                break;
            }
            case 23697: {
                string0 = "A highly magical shield, from the Corporeal Beast.";
                break;
            }
            case 23700: {
                string0 = "A highly magical shield, from the Corporeal Beast.";
                break;
            }
            case 23699: {
                string0 = "A highly magical shield, from the Corporeal Beast.";
                break;
            }
            case 23698: {
                string0 = "A highly magical shield, from the Corporeal Beast.";
                break;
            }
            case 23683: {
                string0 = "A superb, high-level defensive weapon.";
                break;
            }
            case 24296:
            case 24297:
            case 24298: {
                string0 = "A most unusual piece of headwear.";
                break;
            }
            case 24711: {
                string0 = "It has been drained of all its power.";
                break;
            }
            case 24712: {
                string0 = "It has been drained of all its power.";
                break;
            }
            case 24713:
            case 24714:
            case 24715:
            case 24716:
            case 24717:
            case 24718:
            case 24719:
            case 24720:
            case 24721:
            case 24722:
            case 24723:
            case 24724:
            case 24725:
            case 24726:
            case 24727:
            case 24728:
            case 24729:
            case 24730:
            case 24731:
            case 24732:
            case 24733:
            case 24734:
            case 24735:
            case 24736:
            case 24737:
            case 24738:
            case 24739:
            case 24740:
            case 24741:
            case 24742:
            case 24743:
            case 24744:
            case 24745:
            case 24746:
            case 24747:
            case 24748:
            case 24749:
            case 24750:
            case 24751:
            case 24752:
            case 24753:
            case 24754:
            case 24755:
            case 24756:
            case 24757:
            case 24758:
            case 24759:
            case 24760:
            case 24761:
            case 24762: {
                string0 = "While worn, this boosts the XP that you earn.";
                break;
            }
            case 24844: {
                string0 = "Soft, pink and edible.";
                break;
            }
            case 24847: {
                string0 = "Unlocks the sunbathe emote.";
                break;
            }
            case 24848: {
                string0 = "Hours of fun for the whole family.";
                break;
            }
            case 24849: {
                string0 = "A set of intimidating fighting sharks.";
                break;
            }
            case 24850: {
                string0 = "A set of menacing fighting sharks.";
                break;
            }
            case 24851: {
                string0 = "A set of lethal fighting sharks.";
                break;
            }
            case 24852: {
                string0 = "A set of deadly fighting sharks.";
                break;
            }
            case 24924:
            case 24925: {
                string0 = "Deployable at a moment's notice, for all your culinary emergencies.";
                break;
            }
            case 24926:
            case 24927: {
                string0 = "Doubles up as a magical tanning device.";
                break;
            }
            case 24928:
            case 24929: {
                string0 = "Bad weather on demand.";
                break;
            }
            case 24930:
            case 24931: {
                string0 = "Ice cream, you scream, everyone screams for ice cream!";
                break;
            }
            case 25045:
            case 25046:
            case 25047:
            case 25048:
            case 25049:
            case 25050:
            case 25051:
            case 25052:
            case 25053:
            case 25054: {
                string0 = "A fragment of an alchemist's amulet.";
                break;
            }
            case 25055: {
                string0 = "An uncharged alchemist's amulet.";
                break;
            }
            case 25056: {
                string0 = "A charged alchemist's amulet.";
                break;
            }
            case 25180:
            case 25181:
            case 25182:
            case 25183:
            case 25184: {
                string0 = "An outfit that increases Cooking experience gained by 1% when worn.";
                break;
            }
            case 25185:
            case 25186:
            case 25187:
            case 25188:
            case 25189: {
                string0 = "An outfit that increases Crafting experience gained by 1% when worn.";
                break;
            }
            case 25190:
            case 25191:
            case 25192:
            case 25193:
            case 25194: {
                string0 = "An outfit that increases Herblore experience gained by 1% when worn.";
                break;
            }
            case 25195:
            case 25196:
            case 25197:
            case 25198:
            case 25199: {
                string0 = "An outfit that increases Smithing experience gained by 1% when worn.";
                break;
            }
            case 27589:
            case 27591:
            case 27588:
            case 27590:
            case 27587: {
                string0 = "An outfit that increases Prayer experience gained by 1% when worn.";
                break;
            }
            case 28996:
            case 28999:
            case 28998:
            case 28995:
            case 28997: {
                string0 = "Increases Summoning experience gained by 1% when worn.";
                break;
            }
            case 29868:
            case 29869:
            case 29865:
            case 29867:
            case 29866: {
                string0 = "Increases Divination experience gained by 1% when worn.";
                break;
            }
            case 32277:
            case 32275:
            case 32276:
            case 32274:
            case 34920:
            case 34922:
            case 34919:
            case 34921: {
                string0 = "Grants extra abilities to the matching skilling outfit.";
                break;
            }
            case 25200: {
                string0 = "Use this on a skill set item to add an extra bonus day.";
                break;
            }
            case 25201: {
                string0 = "Use this on a skill set item to add extra bonus days.";
                break;
            }
            case 25299: {
                string0 = "Contains a small amount of construction resources.";
                break;
            }
            case 25300: {
                string0 = "Contains a large amount of construction resources.";
                break;
            }
            case 25301: {
                string0 = "Contains a small amount of crafting resources.";
                break;
            }
            case 25302: {
                string0 = "Contains a large amount of crafting resources.";
                break;
            }
            case 25303: {
                string0 = "Contains a small amount of farming resources.";
                break;
            }
            case 25304: {
                string0 = "Contains a large amount of farming resources.";
                break;
            }
            case 25305: {
                string0 = "Contains a small amount of herblore resources.";
                break;
            }
            case 25306: {
                string0 = "Contains a large amount of herblore resources.";
                break;
            }
            case 25307: {
                string0 = "Contains a small amount of smithing resources.";
                break;
            }
            case 25308: {
                string0 = "Contains a large amount of smithing resources.";
                break;
            }
            case 25309: {
                string0 = "Contains a small amount of summoning resources.";
                break;
            }
            case 25310: {
                string0 = "Contains a large amount of summoning resources.";
                break;
            }
            case 28513: {
                string0 = "Contains a small amount of fletching resources.";
                break;
            }
            case 28514: {
                string0 = "Contains a large amount of fletching resources.";
                break;
            }
            case 28023: {
                string0 = "Provides piercing ideas.";
                break;
            }
            case 28022: {
                string0 = "Comes free with a headache.";
                break;
            }
            case 28021: {
                string0 = "The visibility this helmet offers is lacking.";
                break;
            }
            case 28027: {
                string0 = "A maul styled after the Dominion Tower.";
                break;
            }
            case 28025: {
                string0 = "A helm dedicated to the deadliest king.";
                break;
            }
            case 28020: {
                string0 = "They don't get bigger than this.";
                break;
            }
            case 28024: {
                string0 = "A helm of the most fearsome dragon.";
                break;
            }
            case 28028: {
                string0 = "A shortbow styled after the Slayer Tower.";
                break;
            }
            case 28026: {
                string0 = "A staff styled after the Wizards' Tower.";
                break;
            }
            case 28018: {
                string0 = "Who's a pretty boy? (Non-combat pet)";
                break;
            }
            case 28019: {
                string0 = "Could do with gaining a few more pounds. (Non-combat pet)";
                break;
            }
            case 28017: {
                string0 = "Always appreciates your jokes, even if others don't. (Non-combat pet)";
                break;
            }
            case 27624: {
                string0 = "A mask that displays your affinity with abyssal demons. Requires Defence (50).";
                break;
            }
            case 27620: {
                string0 = "A mask that displays your affinity with basilisks. Requires Defence (30).";
                break;
            }
            case 27618: {
                string0 = "A mask that displays your affinity with cockatrices. Requires Defence (20).";
                break;
            }
            case 27616: {
                string0 = "A mask that displays your affinity with crawling hands. Requires Defence (1).";
                break;
            }
            case 27622: {
                string0 = "A mask that displays your affinity with kurasks. Requires Defence (45).";
                break;
            }
            case 28186: {
                string0 = "A resplendent amulet that provides its owner with gold.";
                break;
            }
            case 28498:
            case 28503:
            case 28483:
            case 28493:
            case 28488: {
                string0 = "Ranger's armour that can change its power to suit the wearer.";
                break;
            }
            case 28508: {
                string0 = "A bow, crafted from the antlers of a white stag, that can change its power to suit its wielder.";
                break;
            }
            case 28686: {
                string0 = "A mask that displays your affinity with banshees. Requires Defence (15).";
                break;
            }
            case 28690: {
                string0 = "A mask that displays your affinity with dust devils. Requires Defence (40).";
                break;
            }
            case 28692: {
                string0 = "A mask that displays your affinity with gargoyles. Requires Defence (45).";
                break;
            }
            case 28694: {
                string0 = "A mask that displays your affinity with mutated jadinkos. Requires Defence (50).";
                break;
            }
            case 28688: {
                string0 = "A mask that displays your affinity with jellies. Requires Defence (35).";
                break;
            }
            case 31089: {
                string0 = "A mask that displays your affinity with bloodvelds. Requires Defence (35).";
                break;
            }
            case 31091: {
                string0 = "A mask that displays your affinity with aberrant spectres. Requires Defence (40).";
                break;
            }
            case 31093: {
                string0 = "A mask that displays your affinity with jungle strykewyrms. Requires Defence (45).";
                break;
            }
            case 31095: {
                string0 = "A mask that displays your affinity with desert strykewyrms. Requires Defence (45).";
                break;
            }
            case 31097: {
                string0 = "A mask that displays your affinity with ice strykewyrms. Requires Defence (55).";
                break;
            }
            case 31099: {
                string0 = "A mask that displays your affinity with dark beasts. Requires Defence (55).";
                break;
            }
            case 31101: {
                string0 = "Allows you to reset a slayer mask of your choice.";
                break;
            }
            case 30750: {
                string0 = "A rare wand that can change its power to suit its wielder.";
                break;
            }
            case 30755: {
                string0 = "A rare crossbow that can change its power to suit its wielder.";
                break;
            }
            case 30823: {
                string0 = "A crossbow which was once the figurehead of Armadyl's army. Requires Ranged (75).";
                break;
            }
            case 34859: {
                string0 = "A crossbow which was once the figurehead of Armadyl's army. Requires Ranged (75).";
                break;
            }
            case 30822: {
                string0 = "A full-face helmet of Bandos. Requires Defence (70).";
                break;
            }
            case 30820: {
                string0 = "A garb worn by magic-using followers of Zamorak. Requires Defence (70), Magic (70).";
                break;
            }
            case 30819: {
                string0 = "A hood worn by magic-using followers of Zamorak. Requires Defence (70), Magic (70).";
                break;
            }
            case 30821: {
                string0 = "A gown worn by magic-using followers of Zamorak. Requires Defence (70), Magic (70).";
                break;
            }
            case 23760:
            case 23759:
            case 23758:
            case 23757: {
                string0 = "Rub this lamp to get some Agility XP.";
                break;
            }
            case 23720:
            case 23719: {
                string0 = "Rub this lamp to get some Attack XP.";
                break;
            }
            case 23756:
            case 23755: {
                string0 = "Rub this lamp to get some Constitution XP.";
                break;
            }
            case 23748:
            case 23747:
            case 23746:
            case 23745: {
                string0 = "Rub this lamp to get some Construction XP.";
                break;
            }
            case 23801:
            case 23800: {
                string0 = "Rub this lamp to get some Cooking XP.";
                break;
            }
            case 23773:
            case 23771: {
                string0 = "Rub this lamp to get some Crafting XP.";
                break;
            }
            case 23728:
            case 23727: {
                string0 = "Rub this lamp to get some Defence XP.";
                break;
            }
            case 29548:
            case 29547:
            case 29546:
            case 29545: {
                string0 = "Rub this lamp to get some Divination XP.";
                break;
            }
            case 23752:
            case 23751: {
                string0 = "Rub this lamp to get some Dungeoneering XP.";
                break;
            }
            case 23813:
            case 23812:
            case 23811:
            case 23810: {
                string0 = "Rub this lamp to get some Farming XP.";
                break;
            }
            case 23805:
            case 23804: {
                string0 = "Rub this lamp to get some Firemaking XP.";
                break;
            }
            case 23797:
            case 23796: {
                string0 = "Rub this lamp to get some Fishing XP.";
                break;
            }
            case 23777:
            case 23776:
            case 23775:
            case 23774: {
                string0 = "Rub this lamp to get some Fletching XP.";
                break;
            }
            case 23764:
            case 23763:
            case 23762:
            case 23761: {
                string0 = "Rub this lamp to get some Herblore XP.";
                break;
            }
            case 23785:
            case 23784:
            case 23783:
            case 23782: {
                string0 = "Rub this lamp to get some Hunter XP.";
                break;
            }
            case 39427:
            case 39426:
            case 39425:
            case 39424: {
                string0 = "Rub this lamp to get some Invention XP.";
                break;
            }
            case 23736:
            case 23735: {
                string0 = "Rub this lamp to get some Magic XP.";
                break;
            }
            case 23789:
            case 23788: {
                string0 = "Rub this lamp to get some Mining XP.";
                break;
            }
            case 23740:
            case 23739: {
                string0 = "Rub this lamp to get some Prayer XP.";
                break;
            }
            case 23732:
            case 23731: {
                string0 = "Rub this lamp to get some Ranged XP.";
                break;
            }
            case 23744:
            case 23743: {
                string0 = "Rub this lamp to get some Runecrafting XP.";
                break;
            }
            case 23781:
            case 23780:
            case 23779:
            case 23778: {
                string0 = "Rub this lamp to get some Slayer XP.";
                break;
            }
            case 23793:
            case 23792: {
                string0 = "Rub this lamp to get some Smithing XP.";
                break;
            }
            case 23724:
            case 23723: {
                string0 = "Rub this lamp to get some Strength XP.";
                break;
            }
            case 23817:
            case 23816:
            case 23815:
            case 23814: {
                string0 = "Rub this lamp to get some Summoning XP.";
                break;
            }
            case 23768:
            case 23767:
            case 23766:
            case 23765: {
                string0 = "Rub this lamp to get some Thieving XP.";
                break;
            }
            case 23809:
            case 23808: {
                string0 = "Rub this lamp to get some Woodcutting XP.";
                break;
            }
            case 6322: {
                string0 = "Made from 100% real snakeskin.";
                break;
            }
            case 4091: {
                string0 = "The upper half of a magical robe.";
                break;
            }
            case 8778: {
                string0 = "A plank of sturdy oak.";
                break;
            }
            case 8780: {
                string0 = "A plank of fine teak.";
                break;
            }
            case 8782: {
                string0 = "A plank of fine mahogany.";
                break;
            }
            case 401: {
                string0 = "Slightly damp seaweed.";
                break;
            }
            case 243: {
                string0 = "A large shiny scale.";
                break;
            }
            case 534:
            case 532: {
                string0 = "Ew, it's a pile of bones. Bury for Prayer XP.";
                break;
            }
            case 2: {
                string0 = "Ammo for the dwarf cannon.";
                break;
            }
            case 5287: {
                string0 = "Plant in a plantpot of soil to grow a sapling.";
                break;
            }
            case 405: {
                string0 = "I hope there's treasure in it.";
                break;
            }
            case 413: {
                string0 = "I could work wonders with a chisel on these pearls.";
                break;
            }
            case 15263: {
                string0 = "These minerals appear to be alive.";
                break;
            }
            case 7186: {
                string0 = "Raw fish is risky. Better cook it.";
                break;
            }
            case 6671: {
                string0 = "A fish bowl with a tiny greenfish in it.";
                break;
            }
            case 6670: {
                string0 = "A fish bowl with a tiny bluefish in it.";
                break;
            }
            case 6672: {
                string0 = "A fish bowl with a tiny spinefish in it.";
                break;
            }
            case 20322: {
                string0 = "This will collect guppies when I catch fish at or below Fishing level 10.";
                break;
            }
            case 11326: {
                string0 = "Caviar, or expensive fishy eggs.";
                break;
            }
            case 9174: {
                string0 = "A bronze crossbow.";
                break;
            }
            case 9177: {
                string0 = "An iron crossbow.";
                break;
            }
            case 9179: {
                string0 = "A steel crossbow.";
                break;
            }
            case 9181: {
                string0 = "A mithril crossbow.";
                break;
            }
            case 9183: {
                string0 = "An adamant crossbow.";
                break;
            }
            case 6034: {
                string0 = "Super-good for the smallest or largest of plants.";
                break;
            }
            case 5102: {
                string0 = "A cadavaberry bush seed - plant in a bush patch. Used in Farming (22).";
                break;
            }
            case 5294: {
                string0 = "A harralander seed - plant in a herb patch. Used in Farming (26).";
                break;
            }
            case 5292: {
                string0 = "A marrentill seed - plant in a herb patch. Used in Farming (14).";
                break;
            }
            case 5312: {
                string0 = "Plant this in a plantpot of soil to grow a sapling. Used in Farming (15).";
                break;
            }
            case 5283: {
                string0 = "Plant in a plantpot of soil to grow a sapling. Used in Farming (27).";
                break;
            }
            case 5286:
            case 5285:
            case 5289:
            case 5288:
            case 5316:
            case 5313: {
                string0 = "Plant this in a plantpot of soil to grow a sapling.";
                break;
            }
            case 28258: {
                string0 = "A potato cactus seed - plant in a cactus patch.";
                break;
            }
            case 5097: {
                string0 = "A rosemary seed - plant in a flower patch. Used in Farming (11).";
                break;
            }
            case 5322: {
                string0 = "A tomato seed - plant in an allotment. Used in Farming (12).";
                break;
            }
            case 5321: {
                string0 = "A watermelon seed - plant in an allotment.";
                break;
            }
            case 536: {
                string0 = "These would feed a dog for months.";
                break;
            }
            case 339: {
                string0 = "Some nicely cooked cod. Eat it to restore health.";
                break;
            }
            case 365: {
                string0 = "Wow, this is a big fish.";
                break;
            }
            case 385: {
                string0 = "I'd better be careful eating this.";
                break;
            }
            case 7946: {
                string0 = "A tasty fish.";
                break;
            }
            case 363:
            case 341:
            case 353:
            case 389:
            case 7944:
            case 15264:
            case 15270:
            case 383: {
                string0 = "I should try cooking this.";
                break;
            }
            case 5972: {
                string0 = "Looks delicious.";
                break;
            }
            case 5974: {
                string0 = "It's a coconut.";
                break;
            }
            case 2970: {
                string0 = "A mushroom from the swamps of Mort Myre.";
                break;
            }
            case 1539: {
                string0 = "Keeps things in place fairly permanently. Used in Construction (1).";
                break;
            }
            case 4823:
            case 4822:
            case 4824: {
                string0 = "Keeps things in place fairly permanently.";
                break;
            }
            case 1747: {
                string0 = "The scaly rough hide from a black dragon.";
                break;
            }
            case 1751: {
                string0 = "The scaly rough hide from a blue dragon.";
                break;
            }
            case 1753: {
                string0 = "The scaly rough hide from a green dragon.";
                break;
            }
            case 1749: {
                string0 = "The scaly rough hide from a red dragon.";
                break;
            }
            case 24372: {
                string0 = "Scaly, rough hide from the Queen Black Dragon.";
                break;
            }
            case 3095: {
                string0 = "A right-hand fighting claw. Melee weapon, requires Attack (1).";
                break;
            }
            case 3138: {
                string0 = "How am I supposed to eat that? Used in Herblore(76), Summoning(25).";
                break;
            }
            case 6693: {
                string0 = "A crushed bird's nest.";
                break;
            }
            case 6981: {
                string0 = "A small chunk of granite.";
                break;
            }
            case 10095: {
                string0 = "It's a perfect-looking larupia fur.";
                break;
            }
            case 20268: {
                string0 = "A heap of ashes from an arch demon.";
                break;
            }
            case 247: {
                string0 = "They don't look very ripe.";
                break;
            }
            case 12153: {
                string0 = "Utterly terrifying!";
                break;
            }
            case 12156: {
                string0 = "This is what bees craft.";
                break;
            }
            case 12159:
            case 12160:
            case 12163: {
                string0 = "A charm used to summon familiars.";
                break;
            }
            case 14616: {
                string0 = "A feather from a phoenix. Used in Summoning (72).";
                break;
            }
            case 12176: {
                string0 = "A seed for spirit weed.";
                break;
            }
            case 12109: {
                string0 = "A stripy brown egg.";
                break;
            }
            case 15266: {
                string0 = "Some nicely cooked cavefish.";
                break;
            }
            case 15272: {
                string0 = "Some nicely cooked rocktail.";
                break;
            }
            case 1513: {
                string0 = "Logs cut from a magic tree.";
                break;
            }
            case 8431: {
                string0 = "You can plant this in your garden.";
                break;
            }
            case 6810: {
                string0 = "A pot of crushed wyvern bones.";
                break;
            }
            case 3363: {
                string0 = "The thin, slimy corpse of a deceased giant snail. Used in Cooking (12), Summoning (13).";
                break;
            }
            case 231: {
                string0 = "Strange spiky grass.";
                break;
            }
            case 2150: {
                string0 = "A slippery little blighter.";
                break;
            }
            case 2152: {
                string0 = "They're a gnome delicacy apparently.";
                break;
            }
            case 3325: {
                string0 = "That used to be a vampyre!";
                break;
            }
            case 239: {
                string0 = "Sour berries, used in potions.";
                break;
            }
            case 9143: {
                string0 = "Adamant crossbow bolts.";
                break;
            }
            case 9380: {
                string0 = "Unfeathered adamant crossbow bolts.";
                break;
            }
            case 877: {
                string0 = "Bronze ammunition for crossbows. Used with the Ranged skill (1).";
                break;
            }
            case 9375: {
                string0 = "Unfeathered bronze crossbow bolts. Used in Fletching (9).";
                break;
            }
            case 9140: {
                string0 = "Iron ammunition for crossbows. Used with the Ranged skill (10).";
                break;
            }
            case 9377: {
                string0 = "Unfeathered iron crossbow bolts.";
                break;
            }
            case 9142: {
                string0 = "Mithril crossbow bolts.";
                break;
            }
            case 9379: {
                string0 = "Unfeathered mithril crossbow bolts.";
                break;
            }
            case 9144: {
                string0 = "Rune crossbow bolts.";
                break;
            }
            case 9381: {
                string0 = "Unfeathered rune crossbow bolts.";
                break;
            }
            case 9141: {
                string0 = "Steel ammunition for crossbows. Used with the Ranged skill (20).";
                break;
            }
            case 9378: {
                string0 = "Unfeathered steel crossbow bolts.";
                break;
            }
            case 117: {
                string0 = "2 doses of strength potion.";
                break;
            }
            case 113: {
                string0 = "4 doses of strength potion.";
                break;
            }
            case 135: {
                string0 = "2 doses of defence potion.";
                break;
            }
            case 2432: {
                string0 = "4 doses of defence potion.";
                break;
            }
            case 3036: {
                string0 = "2 doses of agility potion.";
                break;
            }
            case 3032: {
                string0 = "4 doses of agility potion.";
                break;
            }
            case 123: {
                string0 = "2 doses of attack potion.";
                break;
            }
            case 2428: {
                string0 = "4 doses of attack potion.";
                break;
            }
            case 3008: {
                string0 = "4 doses of energy potion.";
                break;
            }
            case 3044: {
                string0 = "2 doses of super magic potion.";
                break;
            }
            case 3040: {
                string0 = "4 doses of super magic potion.";
                break;
            }
            case 147: {
                string0 = "2 doses of super attack potion.";
                break;
            }
            case 2436: {
                string0 = "4 doses of super attack potion.";
                break;
            }
            case 159: {
                string0 = "2 doses of super strength potion.";
                break;
            }
            case 2440: {
                string0 = "4 doses of super strength potion.";
                break;
            }
            case 165: {
                string0 = "2 doses of super defence potion.";
                break;
            }
            case 2442: {
                string0 = "4 doses of super defence potion.";
                break;
            }
            case 3020: {
                string0 = "2 doses of super energy potion.";
                break;
            }
            case 3016: {
                string0 = "4 doses of super energy potion.";
                break;
            }
            case 15323: {
                string0 = "1 dose of extreme magic potion.";
                break;
            }
            case 15322: {
                string0 = "2 doses of extreme magic potion.";
                break;
            }
            case 15321: {
                string0 = "3 doses of extreme magic potion.";
                break;
            }
            case 15320: {
                string0 = "4 doses of extreme magic potion.";
                break;
            }
            case 15311: {
                string0 = "1 dose of extreme attack potion.";
                break;
            }
            case 15310: {
                string0 = "2 doses of extreme attack potion.";
                break;
            }
            case 15309: {
                string0 = "3 doses of extreme attack potion.";
                break;
            }
            case 15308: {
                string0 = "4 doses of extreme attack potion.";
                break;
            }
            case 15319: {
                string0 = "1 dose of extreme defence potion.";
                break;
            }
            case 15318: {
                string0 = "2 doses of extreme defence potion.";
                break;
            }
            case 15317: {
                string0 = "3 doses of extreme defence potion.";
                break;
            }
            case 15316: {
                string0 = "4 doses of extreme defence potion.";
                break;
            }
            case 15315: {
                string0 = "1 dose of extreme strength potion.";
                break;
            }
            case 15314: {
                string0 = "2 doses of extreme strength potion.";
                break;
            }
            case 15313: {
                string0 = "3 doses of extreme strength potion.";
                break;
            }
            case 15312: {
                string0 = "4 doses of extreme strength potion.";
                break;
            }
            case 20011: {
                string0 = "4 doses of juju farming potion.";
                break;
            }
            case 155: {
                string0 = "1 dose of fishing potion.";
                break;
            }
            case 153: {
                string0 = "2 doses of fishing potion.";
                break;
            }
            case 151: {
                string0 = "3 doses of fishing potion.";
                break;
            }
            case 2438: {
                string0 = "4 doses of fishing potion.";
                break;
            }
            case 20005: {
                string0 = "2 doses of juju mining potion.";
                break;
            }
            case 7198: {
                string0 = "Much tastier than a normal fish pie.";
                break;
            }
            case 7188: {
                string0 = "Bounty of the sea.";
                break;
            }
            case 7218: {
                string0 = "All the fruits of a very small forest.";
                break;
            }
            case 7208: {
                string0 = "A triumph of man over nature.";
                break;
            }
            case 23191: {
                string0 = "A large, robust flask.";
                break;
            }
            case 29322: {
                string0 = "A chunk of tier 10 harvested divine energy. It can be manipulated to create or transmute objects.";
                break;
            }
            case 29323: {
                string0 = "A chunk of tier 11 harvested divine energy. It can be manipulated to create or transmute objects.";
                break;
            }
            case 29324: {
                string0 = "A chunk of tier 12 harvested divine energy. It can be manipulated to create or transmute objects.";
                break;
            }
            case 29314: {
                string0 = "A chunk of tier 2 harvested divine energy. It can be manipulated to create or transmute objects.";
                break;
            }
            case 29315: {
                string0 = "A chunk of tier 3 harvested divine energy. It can be manipulated to create or transmute objects.";
                break;
            }
            case 29316: {
                string0 = "A chunk of tier 4 harvested divine energy. It can be manipulated to create or transmute objects.";
                break;
            }
            case 29317: {
                string0 = "A chunk of tier 5 harvested divine energy. It can be manipulated to create or transmute objects.";
                break;
            }
            case 29318: {
                string0 = "A chunk of tier 6 harvested divine energy. It can be manipulated to create or transmute objects.";
                break;
            }
            case 29319: {
                string0 = "A chunk of tier 7 harvested divine energy. It can be manipulated to create or transmute objects.";
                break;
            }
            case 29320: {
                string0 = "A chunk of tier 8 harvested divine energy. It can be manipulated to create or transmute objects.";
                break;
            }
            case 29321: {
                string0 = "A chunk of tier 9 harvested divine energy. It can be manipulated to create or transmute objects.";
                break;
            }
            case 11159: {
                string0 = "A box of equipment for a hunter.";
                break;
            }
            case 5751: {
                string0 = "This might help me chop harder.";
                break;
            }
            case 4627: {
                string0 = "A cheeky little lager from the Bandit Camp.";
                break;
            }
            case 1913: {
                string0 = "A pint of thick dark beer.";
                break;
            }
            case 5759: {
                string0 = "Ale with bite.";
                break;
            }
            case 5753: {
                string0 = "This looks a good deal stronger than normal Axeman's Folly.";
                break;
            }
            case 5747: {
                string0 = "This looks a good deal stronger than normal Dwarven Stout.";
                break;
            }
            case 5761: {
                string0 = "This looks a good deal stronger than normal Slayer's Respite.";
                break;
            }
            case 5374:
            case 5372:
            case 5370:
            case 5371:
            case 5373: {
                string0 = "This sapling is ready to be replanted in a tree patch.";
                break;
            }
            case 15243: {
                string0 = "The bag contains shot and powder for the hand cannon.";
                break;
            }
            case 10145: {
                string0 = "A dark, thick, foul-smelling, tar-like substance.";
                break;
            }
            case 10142: {
                string0 = "A thick, foul-smelling, tar-like substance with a green tinge.";
                break;
            }
            case 10143: {
                string0 = "A thick, foul-smelling, tar-like substance with an orange tinge.";
                break;
            }
            case 10144: {
                string0 = "A thick, foul-smelling, tar-like substance with a red tinge.";
                break;
            }
            case 97:
            case 3002:
            case 103:
            case 12181:
            case 3004:
            case 93:
            case 107: {
                string0 = "Used to make potions with Herblore.";
                break;
            }
            case 44842:
            case 44838:
            case 44840:
            case 44844:
            case 57435: {
                string0 = "Used to make armour and weapons with Smithing.";
                break;
            }
            case 32821: {
                string0 = "Boost your XP gain in Summoning.";
                break;
            }
            case 34199: {
                string0 = "Adds 3 teleport charges to the Wicked Hood.";
                break;
            }
            case 44822:
            case 44826:
            case 21778: {
                string0 = "Can be smelted into bars using Smithing.";
                break;
            }
            case 44824:
            case 44828:
            case 44830:
            case 44832: {
                string0 = "Can be used to smelt bars using Smithing.";
                break;
            }
            case 5324:
            case 5302:
            case 5303: {
                string0 = "Can be planted in certain patches using Farming.";
                break;
            }
            default: {
                string0 = OC_DESC(int0);
                script12478(`TRH - object oc_debugname was rolled on a F2P world with no entry in trh_obj_to_desc F2P switch!`);
                break;
            }
        };
    } else if ((int0 != -1 as obj)) {
        string0 = OC_DESC(int0);
    };
    if ((STRING_LENGTH(string1) > 0)) {
        string0 = `${string0} ${string1}`;
    };
    return string0;
}