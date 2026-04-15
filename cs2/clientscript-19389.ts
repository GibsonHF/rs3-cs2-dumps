//
function script19389(int0: int, int1: int): [graphic, string] {
    if ((int0 >= int1)) {
        return [34563 as graphic, "Vacant Slot"];
    };
    if ((script19412(int0) == 1)) {
        if ((ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT() == int0)) {
            return [34565 as graphic, "Group Leader<br>Founding Member"];
        };
        return [34564 as graphic, "Founding Member"];
    };
    if ((ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT() == int0)) {
        return [34562 as graphic, "Group Leader"];
    };
    return [34561 as graphic, "Group Member"];
}