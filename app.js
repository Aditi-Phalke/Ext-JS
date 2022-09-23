/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.loader.setConfig({ enabled: true });
Ext.application({
  name: "MyApp",
  //appfolder: "MyApp",
  requires: ["Ext.MessageBox"],
  // requires: ["Ext.container.Viewport"],
  // name: "AM",
  controllers: ["StudentController"],
  views: ["main", "StudentListView", "StudentDetailView"],
  models: ["student"],
  stores: ["studentStore"],

  //   launch: function () {
  //     Ext.create("Ext.container.Viewport", {
  //       layout: "fit",
  //       items: [
  //         {
  //           xtype: "studentlist"
  //         }
  //       ]
  //     });
  //   }
  // });
  launch: function () {
    Ext.Viewport.add(Ext.create("MyApp.view.main", { fullscreen: true }));
  }
});
