//
function script10386(int0: int): void {
    IF_SETHIDE(script9464(1, int0), comp(1922, 18));
    IF_SETHIDE(script9464(2, int0), comp(1922, 19));
    IF_SETHIDE(script9464(3, int0), comp(1922, 22));
    IF_SETHIDE(script9464(4, int0), comp(1922, 23));
    CC_DELETEALL(comp(1922, 25));
    CC_DELETEALL(comp(1922, 26));
    CC_DELETEALL(comp(1922, 27));
    CC_DELETEALL(comp(1922, 28));
    script13972(comp(1922, 25), comp(-1, 65535), 28595 as struct, "Controls", script9670(1, int0));
    script13972(comp(1922, 26), comp(-1, 65535), 28595 as struct, "Camera", script9670(2, int0));
    script13972(comp(1922, 27), comp(-1, 65535), 28595 as struct, "Interfaces", script9670(3, int0));
    script13972(comp(1922, 28), comp(-1, 65535), 28595 as struct, "Social", script9670(4, int0));
    return;
}