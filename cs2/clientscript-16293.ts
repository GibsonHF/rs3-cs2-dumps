//
function script16293(): void {
    var int0 = script734(varbitplayer_61265);
    IF_SETENABLED(int0, comp(1499, 21));
    IF_SETENABLED(int0, comp(1499, 22));
    switch (varbitplayer_61266) {
        case 4: {
            IF_SETOBJECT_HIGHRES(62475 as obj, 98238477);
            break;
        }
        case 3: {
            IF_SETOBJECT_HIGHRES(62473 as obj, 98238477);
            break;
        }
        case 2: {
            IF_SETOBJECT_HIGHRES(62471 as obj, 98238477);
            break;
        }
        default: {
            IF_SETOBJECT_HIGHRES(62469 as obj, 98238477);
            break;
        }
    };
    if ((varbitplayer_61266 > 0)) {
        CC_DELETEALL(comp(1499, 36));
        script17837();
    };
    return;
}