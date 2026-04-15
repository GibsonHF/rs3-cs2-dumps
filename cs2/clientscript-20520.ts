//
function script20520(int0: int): [string, string, string, string] {
    var string0 = `Save changes to ${script453(varclient_8373, 1, 0, 1)}?`;
    if ((varclient_8374 != script19718(int0))) {
        string0 = `${string0}<br><br>Renaming to: ${enum_getvalue(0, 36, 6629 as cs2enum, varclient_8374)}`;
    };
    string0 = `${string0}<br><br>Layout changes can not be reverted once saved.`;
    return ["Confirm Save", string0, "Save", "Cancel"];
}