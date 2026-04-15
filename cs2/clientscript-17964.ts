//
function script17964(int0: int): unknown_int {
    if ((enum_hasoutput(0, 17024 as cs2enum, int0) == 0)) {
        script12478(`Unexpected value for Billing Category in the mobile shop. Got ${inttostring(int0, 10)}.`);
        return -1;
    };
    return enum_getreverseindex(0, 0, 17024 as cs2enum, int0, 0);
}