//
function script19587(int0: number): number {
    if ((CC_FIND[1](comp(1313, 75), int0) == 1)) {  // group_ironman_storage:clan_inv
        return CC_GETINVCOUNT[1]();
    };
    return INV_GETNUM(963 as inv, int0);
}