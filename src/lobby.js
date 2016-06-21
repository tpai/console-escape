import { sys } from "./lib";
import stage1 from "./stage1";
import stage2 from "./stage2";
import stage3 from "./stage3";
import stage4 from "./stage4";
import $ from "jquery";

export var checkStage = () => {
	var nowStage = localStorage.nowStage || 0;
	switch(parseInt(nowStage, 10)) {
		case 0:
			sys("Type 'start()' to start the game.");
			break;
		case 4: stage4(); break;
		case 3: stage3(); break;
		case 2: stage2(); break;
		case 1: stage1(); break;
	}
	$("div[id^='stage']").hide();
	$("#stage" + nowStage).show();
};

window.start = () => {
	localStorage.nowStage = 1;
	checkStage();
};

window.home = () => {
	localStorage.nowStage = 0;
	checkStage();
};

window.reset = () => {
	checkStage();
};

window.onload = () => checkStage();
