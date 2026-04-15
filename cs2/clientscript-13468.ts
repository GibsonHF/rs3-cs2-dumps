//
function script13468(int0: int): [string, string, graphic] {
    switch (int0) {
        case 0: {
            return ["Medium Reputation", "All methods of skilling within the walls of Menaphos will earn you reputation (after completing Jack of Spades). For methods existing prior to the update, this will only be a token amount of reputation.", 30974 as graphic];
        }
        case 1: {
            return ["High Reputation", "The new skilling options added with Menaphos reward a higher amount of reputation, those being acadia trees; concentrated sandstone; catching desert sole, catfish and beltfish; thieving in Menaphos market; catching plovers in Sophanem; and below Sophanem in the new Slayer dungeon to fight corrupted and devourer creatures.", 30975 as graphic];
        }
        case 2: {
            return ["Very High Reputation", "To earn the highest rates of reputation, however, you're going to want to descend beneath Menaphos into the shifting tombs.", 30976 as graphic];
        }
    };
    return ["", "", -1 as graphic];
}