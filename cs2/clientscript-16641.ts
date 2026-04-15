//
function script16641(int0: component): void {
    IF_SETHIDE(false, int0);
    var string0 = "";
    switch (varbitplayer_47024) {
        case 1: {
            break;
        }
        case 2: {
            string0 = "You can excavate at this location.";
            if ((IF_FIND(comp(996, 8)) == 1)) {
                CC_SETMODEL(104784 as model);
                CC_SETMODELANGLE(-85, -200, 1340, 1872, 1596, 450);
                CC_SETONMOUSEREPEAT(callback(script8799, string0, 65273864, -1));
            };
            IF_SETOP(1, "Excavate", comp(996, 0));
            break;
        }
        case 3: {
            IF_SETHIDE(true, comp(996, 0));
            break;
        }
    };
    return;
}