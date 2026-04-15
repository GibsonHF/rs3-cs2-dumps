//
function script3771(int0: unknown_int, int1: unknown_int): void {
    var string0 = "";
    switch (int0) {
        case 1: {
            string0 = "You can only share this on a members' world.";
            break;
        }
        case 2: {
            string0 = "You must have completed the quest<br>'The Temple at Senntisten' to use curses.";
            break;
        }
        case 3: {
            string0 = "You must have completed the quest<br>'Lunar Diplomacy' to use Lunar Magic.";
            break;
        }
        case 4: {
            string0 = "You must have completed the quest<br>'Desert Treasure' to use Ancient Magic.";
            break;
        }
        case 5: {
            string0 = "You must have completed the quest<br>'The World Wakes' to use this ability.";
            break;
        }
        case 6: {
            string0 = "You can get this ability by defeating General<br>Graardor or Kree'arra in the God Wars Dungeon.";
            break;
        }
        case 7: {
            string0 = "You must have read the Codex Ultimatus<br>before you can use this ability.";
            break;
        }
        case 8: {
            string0 = "You must get this ability from the Tuska event<br>before you can use it.";
            break;
        }
        case 9: {
            string0 = "You must have unlocked this via a Mazcab ability codex<br>before you can use it.";
            break;
        }
        case 10: {
            string0 = "You must have unlocked this ability at Shattered Worlds<br>before you can use it.";
            break;
        }
        case 11: {
            string0 = "You must have unlocked this ability via a Reprisal ability codex<br>before you can use it.";
            break;
        }
        case 12: {
            string0 = "You must have read the Scare Tactics book before you can use it.";
            break;
        }
        case 13: {
            string0 = "You must have unlocked the corresponding lodestone<br>before you can use this button.";
            break;
        }
        case 14: {
            string0 = "You must have unlocked this ability<br>by using invention to craft its codex<br>before you can use it.";
            break;
        }
        case 15: {
            string0 = "You must have unlocked this ability<br>by crafting its codex from vital sparks<br>before you can use it.";
            break;
        }
        case 16: {
            string0 = "You must have unlocked this ability before you can use it.";
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int1);
    IF_SETSIZE(167, 300, 1, 0, 37617668);
    return;
}