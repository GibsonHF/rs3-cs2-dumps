//
function script9613(int0: int): [int, string, string, model] {
    var int1 = 0;
    var string0 = "";
    var string1 = "";
    var int2 = -1 as model;
    switch (int0) {
        case 1: {
            int1 = 65;
            string0 = "Pond";
            string1 = "Ponds attract creatures with an affinity for water. They are essentially very small, man-made lakes...or glorified puddles, depending on your view.";
            int2 = 62128 as model;
            break;
        }
        case 2: {
            int1 = 62;
            string0 = "Tall grass";
            string1 = "Tall grass is favoured by creatures who sneak and hide. It's also a favourite with people too lazy to trim their lawn. Essentially, it's a patch of land allowed to grow wild.";
            int2 = 62134 as model;
            break;
        }
        case 3: {
            int1 = 57;
            string0 = "Abandoned house";
            string1 = "Something approximating an abandoned house: popular amongst creatures that think they're domesticated.";
            int2 = 62132 as model;
            break;
        }
        case 4: {
            int1 = 59;
            string0 = "Thermal vent";
            string1 = "A home-made volcano, or, at least, something that looks like one. These are popular among earthy creatures.";
            int2 = 62133 as model;
            break;
        }
        case 5: {
            int1 = 70;
            string0 = "Standing stones";
            string1 = "A circle of home-made mystical stones, popular among creatures that are more magically inclined.";
            int2 = 62136 as model;
            break;
        }
        case 6: {
            int1 = 80;
            string0 = "Dark pit";
            string1 = "A deep, dark, endless pit, popular among the more sinister creatures. Don't look too closely: you might fall in.";
            int2 = 62131 as model;
            break;
        }
        case 7: {
            int1 = 56;
            string0 = "Boneyard";
            string1 = "An animal graveyard, or a collection of well-made bone mockeries. Popular among scavengers and sinister creatures.";
            int2 = 62135 as model;
            break;
        }
        default: {
            int1 = 0;
            string0 = "Nothing";
            string1 = "This feature is an abscence of anything. Oddly, some creatures prefer the minimalist approach.";
            int2 = 62129 as model;
            break;
        }
    };
    return [int1, string0, string1, int2];
}