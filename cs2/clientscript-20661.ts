//
function script20661(int0: dbrow): string {
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
            return "Become a RuneScape member and you'll get access to loads of members-only content, including extra quests, new skills, awesome minigames and more places to explore!<br><br>PLUS the following Rewards and Benefits:<br>- Sclerite Outfit<br>- Rolly the Dung Beetle Pet<br>- Sclerite Cape<br>- 100 Bank Spaces";
        }
    };
    return dbrow_getfield(int0, 499856, 0);
}