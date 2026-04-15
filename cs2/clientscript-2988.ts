//
function script2988(int0: unknown_int): void {
    var string0 = "null";
    var string1 = "null";
    var string2 = "null";
    var int1 = -1 as model;
    switch (int0) {
        case 19951: {
            string0 = "Common jadinko";
            string1 = "The most abundant form of jadinko. The common jadinkos lack the magical properties of their counterparts; however, they are the easiest of all the jadinkos to attract.<br><br>These jadinkos are caught with marasamaw plants.";
            string2 = "To attract common jadinkos:<br><br>grow any of the vine flowers.";
            int1 = 62244 as model;
            break;
        }
        case 19954: {
            string0 = "Shadow jadinko";
            string1 = "This species of jadinko is particularly sinister, tied as it is with darkness. Shadow jadinkos produce shadow vines which are useful for those who want to be more stealthy when hunting.<br><br>These jadinkos are caught by tracking.";
            string2 = "To attract shadow jadinkos:<br><br>grow red vine flowers and build an abandoned house.";
            int1 = 62253 as model;
            break;
        }
        case 19958: {
            string0 = "Diseased jadinko";
            string1 = "The diseased jadinko is a sorry sort of creature, corrupted by some unknown illness that it can never shake. That's unfortunate for the jadinko, but fortunate for the hunter, because the corrupt vines these creatures produce can be made into juju hunter potions that are invaluable for hunting in the habitat.<br><br>These jadinkos are caught by tracking.";
            string2 = "To attract diseased jadinkos:<br><br>grow a banana tree and build a boneyard.";
            int1 = 62251 as model;
            break;
        }
        case 19957: {
            string0 = "Igneous jadinko";
            string1 = "The igneous jadinko have a great affinity with the earth. They dwell beneath the stones, unless attracted by the sweet scent of lergberry and oranges. Their vines are particularly useful for those who wish to gather herbs more efficiently.<br><br>These jadinkos are caught with marasamaw plants.";
            string2 = "To attract igneous jadinkos:<br><br>grow a lergberry bush, an orange tree, a blue vine plant and construct a thermal vent.";
            int1 = 62249 as model;
            break;
        }
        case 19960: {
            string0 = "Cannibal jadinko";
            string1 = "These jadinko prey on other jadinkos. They roam the habitat looking for other creatures to snack on. Unlike other jadinkos, the cannibal jadinko's magic is located not in the vine, but in its teeth. The plant teeth can be used to make a deliciously tasty gumbo, if mixed with the right herbs.<br><br>These jadinkos are caught with marasamaw plants.";
            string2 = "To attract cannibal jadinkos:<br><br>grow a kalferberry bush, a green vine flower, construct tall grass and be sure to have used the juju hunter potion on the flower.";
            int1 = 62241 as model;
            break;
        }
        case 19953: {
            string0 = "Aquatic jadinko";
            string1 = "The aquatic jadinko rarely comes out on land, but, when it does, it's highly sought after by the discerning hunter. The vines that grow from this creature's back can be used to create a juju fishing potion that allows you to catch the elusive baron shark.<br><br>These jadinkos are caught with marasamaw plants.";
            string2 = "To attract aquatic jadinkos:<br><br>grow a kalferberry bush, an apple tree, a red vine flower and construct a pond. You must also be under the effects of a juju hunter potion.";
            int1 = 62250 as model;
            break;
        }
        case 19952: {
            string0 = "Amphibious jadinko";
            string1 = "The amphibious jadinko is as at home on land as it is in water. These creatures may be slimy and froggish, but their oily vines can be extremely useful. When combined with the appropriate herb, their vines can be used to create potions that attract wood spirits when you are woodcutting, making a lumberjack's life significantly easier.<br><br>These jadinkos are caught with marasamaw plants.";
            string2 = "To attract amphibian jadinkos:<br><br>grow a lergberry bush, a blue flower and construct a pond.";
            int1 = 62243 as model;
            break;
        }
        case 19959: {
            string0 = "Carrion jadinko";
            string1 = "The carrion jadinko is probably the least pleasant of the jadinko species. They scavenge on the leftovers of other creatures and feast cannibalistically on the remains of other hunted jadinkos. The vines that these creatures produce are particularly pungent and rot rather nicely to create supercompost.";
            string2 = "To attract carrion jadinkos:<br><br>grow a kalferberry bush, a green vine flower and build a boneyard.";
            int1 = 62248 as model;
            break;
        }
        case 19955: {
            string0 = "Camouflaged jadinko";
            string1 = "The camouflaged jadinko is a stealthy critter that takes great delight in hiding itself in foliage. The magic of its striped vines is particularly odd and cannot be turned into a potion; however, Papa Mambo has mentioned that he has uses for these vines.<br><br>These jadinkos are caught by tracking.";
            string2 = "To attract camouflaged jadinkos:<br><br>grow a lergberry bush and build standing stones. In addition, you must be under the effects of the juju hunter potion.";
            int1 = 62245 as model;
            break;
        }
        case 19956: {
            string0 = "Draconic jadinko";
            string1 = "While not dragons, these rare and elusive creatures certainly resemble them. They are powerful beasts with a deep connection to the earth: so deep that their vines can be used to create powerful potions that attracts the mining spirits of stone.<br><br>These jadinkos are caught with marasamaw plants.";
            string2 = "To attract draconic jadinkos:<br><br>grow a lergberry bush, a red vine flower and build a dark pit. In addition you will need to be under the influence of the juju hunter potion.";
            int1 = 62238 as model;
            break;
        }
        default: {
            return;
        }
    };
    IF_SETHIDE(true, comp(72, 9));
    IF_SETHIDE(false, comp(72, 10));
    IF_SETTEXT(string0, comp(72, 3));
    IF_SETTEXT(string1, comp(72, 4));
    IF_SETTEXT(string2, comp(72, 5));
    IF_SETMODEL(int1, comp(72, 2));
    return;
}