//
function script432(int0: component): void {
    var int1 = -1 as struct;
    switch (int0) {
        case 67108872: {
            if ((varclient_1388 == 1)) {
                int1 = 293 as struct;
            } else {
                int1 = script488(varbitplayer_5415);
            };
            break;
        }
        case 67108874: {
            if ((varclient_1388 == 1)) {
                int1 = 300 as struct;
            } else {
                int1 = script488(varbitplayer_5416);
            };
            break;
        }
        case 67108876: {
            if ((varclient_1388 == 1)) {
                int1 = 305 as struct;
            } else {
                int1 = script488(varbitplayer_5417);
            };
            break;
        }
        case 67108878: {
            if ((varclient_1388 == 1)) {
                int1 = 1044 as struct;
            } else {
                int1 = script488(varbitplayer_5418);
            };
            break;
        }
        default: {
            return;
        }
    };
    if ((int1 != -1 as struct)) {
        script3877(`${struct_getparam(int1, 1150)}<br>${struct_getparam(int1, 1151)}<br>Cost: ${inttostring(struct_getparam(int1, 1154), 10)}<br>Cooldown: ${inttostring(struct_getparam(int1, 1155), 10)}`, int0, -1);
    } else {
        script8808();
    };
    return;
}