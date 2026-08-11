//
function script6860(): void {
    if ((IF_GETHIDE(comp(176, 30)) == true)) {  // dino_base_camp:worker_layer
        IF_SETHIDE(false, comp(176, 30));  // dino_base_camp:worker_layer
        IF_SETHIDE(false, comp(176, 29));  // dino_base_camp:prevent_clickthrough_layer
        script13959(11534344, 28692, 0);
    } else {
        IF_SETHIDE(true, comp(176, 30));  // dino_base_camp:worker_layer
        IF_SETHIDE(true, comp(176, 29));  // dino_base_camp:prevent_clickthrough_layer
        script13959(11534344, 28691, 0);
    };
    return;
}