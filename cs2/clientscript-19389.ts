//
function script19389(int0: number, int1: number): [number, string] {
    if ((int0 >= int1)) {
        return [34563, "Vacant Slot"];
    };
    if ((script19412(int0) == 1)) {
        if ((ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT() == int0)) {
            return [34565, "Group Leader<br>Founding Member"];
        };
        return [34564, "Founding Member"];
    };
    if ((ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT() == int0)) {
        return [34562, "Group Leader"];
    };
    return [34561, "Group Member"];
}