//
function script20661(int0: number): string {
    switch (int0) {
        case 6020:
        case 7723:
        case 7724:
        case 14710: {
            return "Stock up on Bonds to trade with fellow adventurers, sell them on the Grand Exchange for in game gold or gift them to your friends to exchange for Membership or RuneCoins.";
        }
        case 17569: {
            return "Become a RuneScape member and you'll get access to loads of members-only content, including extra quests, new skills, awesome minigames and more places to explore!";
        }
        case 17694: {
            return "Become a RuneScape member and you'll get access to loads of members-only content, including extra quests, new skills, awesome minigames and more places to explore!<br><br> - Dragon Slayer Armour & Cape<br> - Dottie the Baby Dragon Pet<br> - Bonus Cosmetics + content: Three-Part Story Arc Diorama for your Player Owned House<br> - 100 Bank Spaces, One-time permanent unlock";
        }
    };
    return dbrow_getfield(int0, 499872, 0);
}