//
function script13253(): void {
    define_array(400);
    define_array[65536](400);
    var int0 = 0;
    var int1 = FRIEND_COUNT();
    if ((int1 <= 0)) {
        return;
    };
    var int2 = 0;
    while ((int2 < 400)) {
        pop_array(int2, int2);
        if ((FRIEND_GETWORLD(int2) > 0)) {
            pop_array[1](int2, 1);
            int0 = (int0 + 1);
        } else {
            pop_array[1](int2, 0);
        };
        int2 = (int2 + 1);
    };
    var string0 = "";
    var string1 = "";
    if ((int0 > 0)) {
        int1 = int0;
        ARRAY_SORT(400, 1, 0);
        [string0, string1] = FRIEND_GETNAME(push_array(((400 - RANDOM(int1)) - 1)));
    } else {
        [string0, string1] = FRIEND_GETNAME(RANDOM(int1));
    };
    var string2 = "";
    switch (RANDOM(19)) {
        case 0: {
            string2 = "Dojo Mojo, the Agility pet";
            break;
        }
        case 1: {
            string2 = "Baby Yaga's house, the Construction pet";
            break;
        }
        case 2: {
            string2 = "Ramsay, the Cooking pet";
            break;
        }
        case 3: {
            string2 = "Gemi, the Crafting pet";
            break;
        }
        case 4: {
            string2 = "Willow, the Divination pet";
            break;
        }
        case 5: {
            string2 = "Gordie, the Dungeoneering pet";
            break;
        }
        case 6: {
            string2 = "Brains, the Farming pet";
            break;
        }
        case 7: {
            string2 = "Bernie, the Firemaking pet";
            break;
        }
        case 8: {
            string2 = "Bubbles, the Fishing pet";
            break;
        }
        case 9: {
            string2 = "Flo, the Fletching pet";
            break;
        }
        case 10: {
            string2 = "Herbert, the Herblore pet";
            break;
        }
        case 11: {
            string2 = "Ace, the Hunter pet";
            break;
        }
        case 12: {
            string2 = "Malcolm, the Invention pet";
            break;
        }
        case 13: {
            string2 = "Rocky, the Mining pet";
            break;
        }
        case 14: {
            string2 = "Rue, the Runecrafting pet";
            break;
        }
        case 15: {
            string2 = "Crabbe, the Slayer pet";
            break;
        }
        case 16: {
            string2 = "Smithy, the Smithing pet";
            break;
        }
        case 17: {
            string2 = "Ralph, the Thieving pet";
            break;
        }
        case 18: {
            string2 = "Woody, the Woodcutting pet";
            break;
        }
    };
    printmessage(`<img=5><col=45B247>News: ${string0} has received ${string2} drop!`);
    return;
}