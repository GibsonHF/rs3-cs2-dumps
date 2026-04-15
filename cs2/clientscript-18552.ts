//
function script18552(int0: int): string {
    var string0 = "";
    var int1 = 94;
    var int2 = INV_GETOBJ(94 as inv, int0);
    if ((int2 != -1 as obj)) {
        switch (int0) {
            case 0: {
                string0 = "<sprite=24920>";
                break;
            }
            case 1: {
                string0 = "<sprite=24921>";
                break;
            }
            case 2: {
                string0 = "<sprite=24922>";
                break;
            }
            case 3: {
                string0 = "<sprite=24923>";
                break;
            }
            case 4: {
                string0 = "<sprite=25170>";
                break;
            }
            case 5: {
                string0 = "<sprite=25171>";
                break;
            }
            case 7: {
                string0 = "<sprite=25172>";
                break;
            }
            case 9: {
                string0 = "<sprite=25173>";
                break;
            }
            case 10: {
                string0 = "<sprite=25383>";
                break;
            }
            case 12: {
                string0 = "<sprite=25169>";
                break;
            }
            case 13: {
                string0 = "<sprite=25384>";
                break;
            }
            case 14: {
                string0 = "<sprite=25385>";
                break;
            }
            case 17: {
                string0 = "<sprite=25386>";
                break;
            }
        };
        string0 = `${string0}<nbsp><col=ffffff>${script11669(int1, int0)}:</col> ${OC_NAME(int2)}`;
    };
    return string0;
}