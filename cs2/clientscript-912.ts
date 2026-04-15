//
function script912(int0: obj): string {
    var string0 = enum_getvalue(33, 36, 1440 as cs2enum, int0);
    if ((strcmp(string0, "") != 0)) {
        return `<br>${string0}`;
    };
    switch (varclient_746) {
        case 0: {
            if ((item_getparam(int0, 1047) != 1)) {
                return `<br>${enum_getvalue(0, 36, 1437 as cs2enum, item_getparam(int0, 23))}`;
            };
            break;
        }
        case 1: {
            return `<br>${enum_getvalue(0, 36, 1439 as cs2enum, item_getparam(int0, 23))}`;
        }
        case 2:
        case 5: {
            return `<br>${enum_getvalue(0, 36, 1436 as cs2enum, item_getparam(int0, 23))}`;
        }
        case 3: {
            return `<br>${enum_getvalue(0, 36, 1438 as cs2enum, item_getparam(int0, 23))}`;
        }
        case 4: {
            return "<br>Requires an ogre composite bow.";
        }
    };
    return "";
}