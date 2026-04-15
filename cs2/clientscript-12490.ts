//
function script12490(int0: unknown_int, int1: component): void {
    var string0 = "";
    switch (int1) {
        case 115146866: {
            IF_SETOBJECT_NONUM(37328 as obj, 1, int1);
            string0 = "You will receive:<br>A sock puppet. When worn, this has a random chance to replace your chathead in dialogue boxes.";
            break;
        }
        case 115146869: {
            IF_SETOBJECT_NONUM(37322 as obj, 1, int1);
            string0 = "You will receive:<br>1 x Player Owned Ports resource pack<br>2 x Captain reroll token<br>2 x Voyage reroll token<br>2 x Crew reroll token";
            break;
        }
        case 115146872: {
            IF_SETOBJECT_NONUM(37325 as obj, 1, int1);
            string0 = "You will receive:<br>An investigator outfit, complete with fedora and trenchcoat.";
            break;
        }
        case 115146875: {
            IF_SETOBJECT_NONUM(37317 as obj, 1, int1);
            string0 = "You will receive:<br>A turoth pet - wearing socks. It can be activated from your pets window.";
            break;
        }
        case 115146878: {
            IF_SETOBJECT_NONUM(36075 as obj, 1, int1);
            string0 = "You will receive:<br>1 x Large XP lamp<br>1 x Large XP star";
            break;
        }
        case 115146881: {
            IF_SETOBJECT_NONUM(36076 as obj, 1, int1);
            string0 = "You will receive:<br>1 x Huge XP lamp<br>1 x Huge XP star";
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int0);
    return;
}