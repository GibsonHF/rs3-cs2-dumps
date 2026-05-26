//
function script16093(): string {
    var string0 = "";
    if (((varbitplayer_36140 >= 45) && (STAT(18) >= 99))) {
        switch (varplayer_185) {
            case 152: {
                string0 = script16094(13751);
                break;
            }
            case 153: {
                string0 = script16094(13752);
                break;
            }
            case 139: {
                string0 = script16094(13753);
                break;
            }
            case 154: {
                string0 = script16094(13754);
                break;
            }
            case 160: {
                string0 = script16094(13755);
                break;
            }
            case 171: {
                string0 = script16094(15342);
                break;
            }
            case 172: {
                string0 = script16094(15343);
                break;
            }
            case 180: {
                string0 = script16094(9698);
                break;
            }
            default: {
                if (((script13488((varplayer_185 - 1)) == 0) && (enum_getvalue(0, 32, 12737 as cs2enum, varplayer_185) != -1 as npc))) {
                    string0 = "You have not yet claimed this creature's soul";
                };
                break;
            }
        };
    };
    return string0;
}