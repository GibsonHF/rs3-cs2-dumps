//
function script15415(int0: component, int1: int, int2: obj): void {
    var string0 = "";
    var int3 = 0;
    switch (int0) {
        case 49807382:
        case 49807447: {
            string0 = `These bonuses <col=FF00>increase any multipliers on the trail to a minimum multiplier</col>, up to <col=FF00>x${inttostring(int1, 10)}</col>!`;
            break;
        }
        case 49807383:
        case 49807435: {
            string0 = `These bonuses <col=FF00>increase any multipliers on the trail by up to ${inttostring(int1, 10)}</col>! (max multiplier: x${inttostring(8, 10)}).`;
            break;
        }
        case 49807407: {
            string0 = `<col=FFFF00>Curios</col> are obtained with each key.<br>You can buy a <col=FF00>Curio Bonus</col> every <col=FFFF00>${inttostring(400, 10)} Curios</col>.`;
            break;
        }
        case 49807368: {
            switch (int2) {
                case 59956: {
                    string0 = "Various quantities of Christmas Wrapping Paper.";
                    break;
                }
                default: {
                    string0 = OC_NAME(int2);
                    break;
                }
            };
            int3 = 1;
            break;
        }
    };
    if ((script6431() == false)) {
        if (((int3 == 1) && (item_getparam(int2, 4414) != -1 as struct))) {
            if ((IF_FIND(int0) == 1)) {
                script14994(-1 as obj, -1 as inv, -1, int2, 819 as inv, 1);
            };
        } else {
            IF_SETONMOUSEREPEAT(callback(script8801, string0, -2147483645, -2147483643, 0, 1, 12), int0);
            IF_SETONMOUSELEAVE(callback(script8805), int0);
        };
    } else {
        IF_SETOP(1, "Info", int0);
        IF_SETONOP(callback(script7774, string0, -2147483645, -2147483643, 0), int0);
    };
    return;
}