//
function script6358(): number {
    if ((IF_HASSUB(comp(1477, 728)) == 1)) {  // toplevel_v2:moveable_modal_overlay
        if ((IF_HASSUBOVERLAY(comp(1477, 728), 656 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
            if ((CC_FIND(comp(656, 27), 0) == 1)) {  // collection_log:mainmodal_window_close_button
                CC_TRIGGEROP(1);
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1890 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((CC_FIND(comp(1890, 21), 0) == 1)) {  // prayer_quick_preset_interface:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1405 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((CC_FIND(comp(1405, 20), 0) == 1)) {  // bugreport_interface:bugreport_interface_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 593 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((CC_FIND(comp(593, 13), 0) == 1)) {  // report_choices_v2:window_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                        CC_TRIGGEROP(1);
                                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                            script14923();
                                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                            CC_TRIGGEROP(1);
                                        };
                                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                            script14959();
                                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                            CC_TRIGGEROP(1);
                                        };
                                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                            CC_TRIGGEROP(1);
                                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                                CC_TRIGGEROP(1);
                                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                                CC_TRIGGEROP(1);
                                            };
                                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                            CC_TRIGGEROP(1);
                                        };
                                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                            CC_TRIGGEROP(1);
                                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                            CC_TRIGGEROP(1);
                                        };
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                        script14923();
                                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                        script14959();
                                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                        CC_TRIGGEROP(1);
                                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                            CC_TRIGGEROP(1);
                                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                            CC_TRIGGEROP(1);
                                        };
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                        script14923();
                                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                        script14959();
                                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                        CC_TRIGGEROP(1);
                                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                            CC_TRIGGEROP(1);
                                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                            CC_TRIGGEROP(1);
                                        };
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                        script14923();
                                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                        script14959();
                                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                        CC_TRIGGEROP(1);
                                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                            CC_TRIGGEROP(1);
                                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                            CC_TRIGGEROP(1);
                                        };
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                        script14923();
                                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                        script14959();
                                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                        CC_TRIGGEROP(1);
                                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                            CC_TRIGGEROP(1);
                                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                            CC_TRIGGEROP(1);
                                        };
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 593 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((CC_FIND(comp(593, 13), 0) == 1)) {  // report_choices_v2:window_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                        script14923();
                                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                        script14959();
                                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                        CC_TRIGGEROP(1);
                                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                            CC_TRIGGEROP(1);
                                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                            CC_TRIGGEROP(1);
                                        };
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1405 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((CC_FIND(comp(1405, 20), 0) == 1)) {  // bugreport_interface:bugreport_interface_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 593 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((CC_FIND(comp(593, 13), 0) == 1)) {  // report_choices_v2:window_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                        script14923();
                                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                        script14959();
                                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                        CC_TRIGGEROP(1);
                                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                            CC_TRIGGEROP(1);
                                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                            CC_TRIGGEROP(1);
                                        };
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 593 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((CC_FIND(comp(593, 13), 0) == 1)) {  // report_choices_v2:window_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                    script14923();
                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                    script14959();
                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                CC_TRIGGEROP(1);
            };
        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1890 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
            if ((CC_FIND(comp(1890, 21), 0) == 1)) {  // prayer_quick_preset_interface:mainmodal_window_close_button
                CC_TRIGGEROP(1);
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1405 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((CC_FIND(comp(1405, 20), 0) == 1)) {  // bugreport_interface:bugreport_interface_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 593 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((CC_FIND(comp(593, 13), 0) == 1)) {  // report_choices_v2:window_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                        script14923();
                                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                        script14959();
                                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                        CC_TRIGGEROP(1);
                                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                            CC_TRIGGEROP(1);
                                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                            CC_TRIGGEROP(1);
                                        };
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 593 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((CC_FIND(comp(593, 13), 0) == 1)) {  // report_choices_v2:window_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                    script14923();
                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                    script14959();
                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                CC_TRIGGEROP(1);
            };
        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1405 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
            if ((CC_FIND(comp(1405, 20), 0) == 1)) {  // bugreport_interface:bugreport_interface_close_button
                CC_TRIGGEROP(1);
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 593 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((CC_FIND(comp(593, 13), 0) == 1)) {  // report_choices_v2:window_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                    script14923();
                                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                    script14959();
                                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                    CC_TRIGGEROP(1);
                                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                        CC_TRIGGEROP(1);
                                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                        CC_TRIGGEROP(1);
                                    };
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                    script14923();
                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                    script14959();
                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                CC_TRIGGEROP(1);
            };
        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 593 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
            if ((CC_FIND(comp(593, 13), 0) == 1)) {  // report_choices_v2:window_close_button
                CC_TRIGGEROP(1);
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                                script14923();
                            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                                script14959();
                            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                                CC_TRIGGEROP(1);
                            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                    CC_TRIGGEROP(1);
                                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                    CC_TRIGGEROP(1);
                                };
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                    script14923();
                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                    script14959();
                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                CC_TRIGGEROP(1);
            };
        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
            if ((CC_FIND(comp(583, 42), 0) == 1)) {  // report_choices_category_v2:window_close_button
                CC_TRIGGEROP(1);
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                            script14923();
                        } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                            script14959();
                        } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                            CC_TRIGGEROP(1);
                        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                                CC_TRIGGEROP(1);
                            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                                CC_TRIGGEROP(1);
                            };
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                    script14923();
                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                    script14959();
                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                CC_TRIGGEROP(1);
            };
        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
            if ((((IF_FIND(comp(594, 69) /*snapshot_main_v2:offence_window_close_button_layer*/) == 1) || (IF_FIND(comp(594, 27) /*snapshot_main_v2:name_list_window_close_button_layer*/) == 1)) || (IF_FIND(comp(594, 79) /*snapshot_main_v2:ignore_window_close_button_layer*/) == 1))) {
                CC_TRIGGEROP(1);
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                        script14923();
                    } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                        script14959();
                    } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                        CC_TRIGGEROP(1);
                    } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                        if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                            CC_TRIGGEROP(1);
                        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                            CC_TRIGGEROP(1);
                        };
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                    script14923();
                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                    script14959();
                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                CC_TRIGGEROP(1);
            };
        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
            if ((IF_FIND(comp(1098, 61)) == 1)) {  // clan_noticeboard_event_edit:clan_notice_edit_close_button
                CC_TRIGGEROP(1);
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                    script14923();
                } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                    script14959();
                } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                    CC_TRIGGEROP(1);
                } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                    if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                        CC_TRIGGEROP(1);
                    } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                        CC_TRIGGEROP(1);
                    };
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                CC_TRIGGEROP(1);
            };
        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
            if ((IF_GETHIDE(comp(694, 6)) == false)) {  // arch_restoration_inspect:popup_window
                script14923();
            } else if ((IF_FIND(comp(694, 43)) == 1)) {  // arch_restoration_inspect:mainmodal_window_close_button
                CC_TRIGGEROP(1);
            };
        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
            if ((IF_GETHIDE(comp(477, 4)) == false)) {  // arch_material_storage_info:popup_window
                script14959();
            } else if ((IF_FIND(comp(477, 11)) == 1)) {  // arch_material_storage_info:mainmodal_window_close_button
                CC_TRIGGEROP(1);
            };
        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
            if ((IF_FIND(comp(1899, 37)) == 1)) {  // invent_auto_siphon:auto_siphon_close_button
                CC_TRIGGEROP(1);
            } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
                if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                    CC_TRIGGEROP(1);
                } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                    CC_TRIGGEROP(1);
                };
            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                CC_TRIGGEROP(1);
            };
        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1)) {  // toplevel_v2:moveable_modal_overlay
            if ((IF_FIND(comp(25, 18)) == 1)) {  // barrows_puzzle:mainmodal_window_close_button
                CC_TRIGGEROP(1);
            } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
                CC_TRIGGEROP(1);
            };
        } else if (((IF_HASSUBOVERLAY(comp(1477, 728) /*toplevel_v2:moveable_modal_overlay*/, 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5) /*clan_resource_data:modal_dialog_window_close_button*/) == 1))) {
            CC_TRIGGEROP(1);
        };
        return 1;
    };
    return 0;
}