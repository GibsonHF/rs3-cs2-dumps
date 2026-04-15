//
function script12483(): void {
    var int0 = 27300;
    var string0 = "";
    var string1 = "RuneMetrics now available!";
    switch (script12477()) {
        case 5181:
        case 5182:
        case 5183:
        case 5184:
        case 5185: {
            string0 = "Treasure Hunter";
            string1 = "New outfit available now!";
            switch (MAP_LANG()) {
                case 0: {
                    int0 = 27296;
                    break;
                }
                case 2: {
                    int0 = 27298;
                    break;
                }
                case 1: {
                    int0 = 27297;
                    break;
                }
                case 3: {
                    int0 = 27299;
                    break;
                }
            };
            break;
        }
        case 5188:
        case 5189:
        case 5190:
        case 5191:
        case 5192: {
            switch (MAP_LANG()) {
                case 0: {
                    int0 = 9046;
                    break;
                }
                case 2: {
                    int0 = 9048;
                    break;
                }
                case 1: {
                    int0 = 9047;
                    break;
                }
                case 3: {
                    int0 = 9131;
                    break;
                }
            };
            string1 = "Gain Divination XP with Protean Memories, available now!";
            break;
        }
        case 5195:
        case 5196:
        case 5197:
        case 5198:
        case 5199: {
            switch (MAP_LANG()) {
                case 0: {
                    int0 = 27234;
                    break;
                }
                case 2: {
                    int0 = 27236;
                    break;
                }
                case 1: {
                    int0 = 27235;
                    break;
                }
                case 3: {
                    int0 = 27237;
                    break;
                }
            };
            string1 = "Open the bonus chest for double or triple the normal rewards!";
            break;
        }
        case 5202:
        case 5203:
        case 5204:
        case 5205:
        case 5206: {
            switch (MAP_LANG()) {
                case 0: {
                    int0 = 9224;
                    break;
                }
                case 2: {
                    int0 = 9226;
                    break;
                }
                case 1: {
                    int0 = 9225;
                    break;
                }
                case 3: {
                    int0 = 9227;
                    break;
                }
            };
            string1 = "Claim all-new Lava Lanterns which award both XP and bonus XP!";
            break;
        }
        case 5209:
        case 5210:
        case 5211:
        case 5212:
        case 5213: {
            switch (MAP_LANG()) {
                case 0: {
                    int0 = 27476;
                    break;
                }
                case 2: {
                    int0 = 27478;
                    break;
                }
                case 1: {
                    int0 = 27477;
                    break;
                }
                case 3: {
                    int0 = 27479;
                    break;
                }
            };
            string1 = "Line up 5 gem colours and win an extra prize!";
            break;
        }
        case 5216:
        case 5217:
        case 5218:
        case 5219:
        case 5220: {
            string0 = "Treasure Hunter";
            string1 = "Complete your elite skill outfits now!";
            switch (MAP_LANG()) {
                case 0: {
                    int0 = 27488;
                    break;
                }
                case 2: {
                    int0 = 27490;
                    break;
                }
                case 1: {
                    int0 = 27489;
                    break;
                }
                case 3: {
                    int0 = 27491;
                    break;
                }
            };
            break;
        }
    };
    stack(int0);
    stack(115212307);
    IF_SETGRAPHIC();
    IF_SETTEXT(string1, 115212309);
    IF_SETTEXT(string0, 115212308);
    return;
}