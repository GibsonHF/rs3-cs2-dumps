//
function script3852(int0: obj, int1: obj): [unknown_int, string] {
    switch (int0) {
        case 4041:
        case 4042: {
            return [1, "You can't remove your team's colours."];
        }
        case 4704:
        case 25433: {
            return [1, "You can't collect any tears if you put the bowl in your pack."];
        }
        case 6746:
        case 6745:
        case 2402: {
            if ((varbitplayer_10495 == 124)) {
                return [2, ""];
            };
            break;
        }
        case 10024:
        case 10023: {
            return [1, "You should speak to Matthias to get this removed safely."];
        }
        case 15445:
        case 15455:
        case 15450:
        case 15460:
        case 15446:
        case 15456:
        case 15451:
        case 15461:
        case 15447:
        case 15457:
        case 15452:
        case 15462:
        case 15448:
        case 15458:
        case 15453:
        case 15463:
        case 15449:
        case 15459:
        case 15454:
        case 15464: {
            return [1, "You don't really want to remove that down here."];
        }
        case 10595:
        case 10596: {
            if ((INV_FREESPACE(93 as inv) < 1)) {
                return [2, ""];
            };
            break;
        }
        case 13643: {
            if ((varbitplayer_5616 == 0)) {
                return [1, "The wand vanishes."];
            };
            if ((int1 != 13644 as obj)) {
                return [1, "You cannot remove the attractor wand, except by replacing it with the repeller wand."];
            };
            break;
        }
        case 13645: {
            if ((varbitplayer_5616 == 0)) {
                return [1, "The wand vanishes."];
            };
            if ((int1 != 13646 as obj)) {
                return [1, "You cannot remove the attractor wand, except by replacing it with the repeller wand."];
            };
            break;
        }
        case 13644: {
            if ((varbitplayer_5616 == 0)) {
                return [1, "The wand vanishes."];
            };
            if ((int1 != 13643 as obj)) {
                return [1, "You cannot remove the attractor wand, except by replacing it with the repeller wand."];
            };
            break;
        }
        case 13646: {
            if ((varbitplayer_5616 == 0)) {
                return [1, "The wand vanishes."];
            };
            if ((int1 != 13645 as obj)) {
                return [1, "You cannot remove the attractor wand, except by replacing it with the repeller wand."];
            };
            break;
        }
        case 13613:
        case 13612: {
            if ((varbitplayer_5616 != 0)) {
                return [1, "The wand vanishes."];
            };
            return [1, "You cannot remove the attractor wand, except by replacing it with the repeller wand."];
        }
        case 14387:
        case 14389: {
            if ((varbitplayer_5035 != 0)) {
                return [1, "You can't remove the cape during the game."];
            };
            break;
        }
        case 22315:
        case 22316:
        case 22317:
        case 22318:
        case 22319: {
            return [2, ""];
        }
    };
    if ((INV_TOTALCAT(94 as inv, 496) != 0)) {
        return [1, "You can't remove equipment while trying to balance kegs."];
    };
    if ((varbitplayer_9644 == 1)) {
        return [1, "There's not enough room inside the Barrelchest disguise to mess around with your equipment!"];
    };
    if ((varbitplayer_21785 == 1)) {
        return [2, "You should step away from the controls before removing anything."];
    };
    return [0, ""];
}