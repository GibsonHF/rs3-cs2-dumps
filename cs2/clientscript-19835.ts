//
function script19835(int0: unknown_int): void {
    switch (int0) {
        case 58412: {
            printmessage("Quick access to the central Sarcophagus during the Barrows encounter.<br>");
            printmessage(script19838(5));
            printmessage(script19839(1));
            printmessage(script19840(5));
            break;
        }
        case 58413: {
            printmessage("You no longer require kill count for all God Wars Dungeon encounters (excludes Nex).<br>");
            printmessage(`Your kill count requirement for all God Wars Dungeon 2 encounters is reduced by ${inttostring(50, 10)}%. This stacks additively with any reputation rewards from the Heart of Gielinor.<br>`);
            printmessage("Your Sign of Life cooldown is reduced by 50%.<br>");
            printmessage(script19838(10));
            printmessage(script19839(2));
            printmessage(script19840(10));
            break;
        }
        case 58414: {
            printmessage(script19837("Barrows: Rise of the Six"));
            printmessage(script19837("Araxxor"));
            printmessage("War's Grimoire will now allow you to change your prayer book.<br>");
            printmessage(script19838(25));
            printmessage(script19840(25));
            printmessage(script19841(500));
            break;
        }
        case 58415: {
            printmessage(script19837("Vorago"));
            printmessage("Adrenaline gain from Adrenaline Crystals is increased to 100% per action.<br>");
            printmessage(script19836(1, 58424 as obj));
            printmessage(script19836(1, 58425 as obj));
            printmessage(script19838(100));
            printmessage(script19840(50));
            printmessage(script19841(1000));
            break;
        }
    };
    return;
}