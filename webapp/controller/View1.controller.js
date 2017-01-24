sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.bootcampWebapp.controller.View1", {
		onLoginPress: function() {
			sap.m.MessageToast.show("Hello World!");
		}
	});
});