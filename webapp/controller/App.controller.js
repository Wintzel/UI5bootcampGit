sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("sap.ui.bootcampWebapp.controller.App", {

		onInit: function() {
			// set data model on view
			var oData = {
				field: {
					username: "User"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);

			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "sap.ui.bootcampWebapp.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");

		},

		onLoginPress: function() {
			var oTextField1 = this.getView().byId("username").getValue();
			var oTextField2 = this.getView().byId("password").getValue();
			var oLength1 = this.getView().byId("username").getValue().length;
			var oLength2 = this.getView().byId("password").getValue().length;
			// alert("Hello world" + oTextField.getValue());
			// MessageToast.show("Hello World");

			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/field/username");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			if (oTextField1 === "" || oTextField2 === "") {
				MessageToast.show("Username and Password is Null");
			} else if (oLength1 < 6 || oLength1.length > 8) {
				MessageToast.show("Username must be 6 to 8 characters ONLY");
			} else if (oLength2 < 7 || oLength2 > 10) {
				MessageToast.show("Password must be 7 to 10 characters ONLY");
			} else {
				if (oTextField1 === "Wintzel" && oTextField2 === "Wintzel") {
					// show message
					MessageToast.show(sMsg);
				} else {
					MessageToast.show("Incorrect Username and Password.");
				}
			}

		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.bootcampWebapp.view.App
		 */
		// 	onInit: function() {
		// console.log("Hello");
		// 	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.bootcampWebapp.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.bootcampWebapp.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.bootcampWebapp.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});