//
function script10386(int0: number): void {
    IF_SETHIDE(script9464(1, int0), 125960210);
    IF_SETHIDE(script9464(2, int0), 125960211);
    IF_SETHIDE(script9464(3, int0), 125960214);
    IF_SETHIDE(script9464(4, int0), 125960215);
    CC_DELETEALL(125960217);
    CC_DELETEALL(125960218);
    CC_DELETEALL(125960219);
    CC_DELETEALL(125960220);
    script13972(125960217, -1, 28595, "Controls", script9670(1, int0));
    script13972(125960218, -1, 28595, "Camera", script9670(2, int0));
    script13972(125960219, -1, 28595, "Interfaces", script9670(3, int0));
    script13972(125960220, -1, 28595, "Social", script9670(4, int0));
    return;
}