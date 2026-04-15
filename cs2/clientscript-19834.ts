//
function script19834(int0: obj): string {
    var string0 = "";
    switch (int0) {
        case 58412: {
            string0 = `${string0}Quick access to the central Sarcophagus during the Barrows encounter.<br>`;
            string0 = `${string0}${script19838(5)}`;
            string0 = `${string0}${script19839(1)}`;
            string0 = `${string0}${script19840(5)}`;
            break;
        }
        case 58413: {
            string0 = `${string0}You no longer require kill count for all God Wars Dungeon encounters (excludes Nex).<br>`;
            string0 = `${string0}Your kill count requirement for all God Wars Dungeon 2 encounters is reduced by ${inttostring(50, 10)}%. This stacks additively with any reputation rewards from the Heart of Gielinor.<br>`;
            string0 = `${string0}Your Sign of Life cooldown is reduced by 50%.<br>`;
            string0 = `${string0}${script19838(10)}`;
            string0 = `${string0}${script19839(2)}`;
            string0 = `${string0}${script19840(10)}`;
            break;
        }
        case 58414: {
            string0 = `${string0}${script19837("Barrows: Rise of the Six")}`;
            string0 = `${string0}${script19837("Araxxor")}`;
            string0 = `${string0}War's Grimoire will now allow you to change your prayer book.<br>`;
            string0 = `${string0}${script19838(25)}`;
            string0 = `${string0}${script19840(25)}`;
            string0 = `${string0}${script19841(500)}`;
            break;
        }
        case 58415: {
            string0 = `${string0}${script19837("Vorago")}`;
            string0 = `${string0}Adrenaline gain from Adrenaline Crystals is increased to 100% per action.<br>`;
            string0 = `${string0}${script19836(1, 58424 as obj)}`;
            string0 = `${string0}${script19836(1, 58425 as obj)}`;
            string0 = `${string0}${script19838(100)}`;
            string0 = `${string0}${script19840(50)}`;
            string0 = `${string0}${script19841(1000)}`;
            break;
        }
    };
    return string0;
}