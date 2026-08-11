//
function script10386(int0: number): void {
    IF_SETHIDE(script9464(1, int0), comp(1922, 18));  // mobile_beta_popup:tab_basic_info
    IF_SETHIDE(script9464(2, int0), comp(1922, 19));  // mobile_beta_popup:tab_camera_info
    IF_SETHIDE(script9464(3, int0), comp(1922, 22));  // mobile_beta_popup:tab_interface_info
    IF_SETHIDE(script9464(4, int0), comp(1922, 23));  // mobile_beta_popup:tab_social_info
    CC_DELETEALL(comp(1922, 25));  // mobile_beta_popup:tab_1
    CC_DELETEALL(comp(1922, 26));  // mobile_beta_popup:tab_2
    CC_DELETEALL(comp(1922, 27));  // mobile_beta_popup:tab_3
    CC_DELETEALL(comp(1922, 28));  // mobile_beta_popup:tab_4
    script13972(125960217, -1, 28595, "Controls", script9670(1, int0));
    script13972(125960218, -1, 28595, "Camera", script9670(2, int0));
    script13972(125960219, -1, 28595, "Interfaces", script9670(3, int0));
    script13972(125960220, -1, 28595, "Social", script9670(4, int0));
    return;
}