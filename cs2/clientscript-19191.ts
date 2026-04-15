//
function script19191(int0: struct, int1: component): void {
    switch (int0) {
        case 32986: {
            IF_SETNPCMODEL(script16765(varbitplayer_51594), int1);
            break;
        }
        case 50263: {
            script19162(int1);
            break;
        }
        case 2951: {
            script19873(int1);
            break;
        }
        default: {
            script12478(`Missed plugin point for promo ID ${inttostring(struct_getparam(int0, 8202), 10)}`);
            break;
        }
    };
    return;
}