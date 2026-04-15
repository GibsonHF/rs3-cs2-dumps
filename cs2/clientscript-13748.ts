//
function script13748(int0: int): void {
    if (((IF_GETHIDE(comp(517, 91)) == false) && (IF_GETHIDE(comp(517, 116)) == false))) {
        script13972(comp(517, 152), comp(-1, 65535), 28595 as struct, "Transfer", 1);
        script13972(comp(517, 153), comp(-1, 65535), 28595 as struct, "Presets", 1);
    } else {
        script13972(comp(517, 152), comp(-1, 65535), 28595 as struct, "Transfer", script9670(int0, 0));
        script13972(comp(517, 153), comp(-1, 65535), 28595 as struct, "Presets", script9670(int0, 1));
    };
    return;
}