"use strict";

require("6to5/polyfill");
var Promise = require("bluebird");
var $ = require("./R.$");
var _ = require("lodash-next");
var Animate = require("./R.Animate");
var App = require("./R.App");
var Async = require("./R.Async");
var Client = require("./R.Client");
var Component = require("./R.Component");
var Cordova = require("./R.Cordova");
var Dispatcher = require("./R.Dispatcher");
var EventEmitter = require("./R.EventEmitter");
var Flux = require("./R.Flux");
var Fullscreen = require("./R.Fullscreen");
var History = require("./R.History");
var instantiateReactComponent = require("react/lib/instantiateReactComponent");
var Localize = require("./R.Localize");
var Lock = require("./R.Lock");
var Pure = require("./R.Pure");
var React = require("react");
var ReactChildren = require("./R.ReactChildren");
var ReactCreateClass = require("./R.ReactCreateClass");
var Root = require("./R.Root");
var Router = require("nexus-router");
var should = _.should;
var Store = require("./R.Store");
var Window = require("./R.Window");
var XWindow = require("./R.XWindow");


// Top level dependencies
var R = { _: _, should: should, React: React, instantiateReactComponent: instantiateReactComponent, Lock: Lock, Router: Router };

// React monkey patches
R.ReactChildren = ReactChildren(R);
R.ReactCreateClass = ReactCreateClass(R);

// React Nexus Core
R.Pure = Pure(R);
R.Async = Async(R);
R.Animate = Animate(R);
R.Flux = Flux(R);
R.$ = $(R);
R.App = App(R);
R.Client = Client(R);
R.Dispatcher = Dispatcher(R);
R.EventEmitter = EventEmitter(R);
R.Store = Store(R);

// React Nexus components
R.Component = Component(R);
R.Root = Root(R);

// React Nexus App plugins
R.Plugins = {};
R.Plugins.Cordova = Cordova(R);
R.Plugins.Fullscreen = Fullscreen(R);
R.Plugins.History = History(R);
R.Plugins.Localize = Localize(R);
R.Plugins.Window = Window(R);
R.Plugins.XWindow = XWindow(R);

module.exports = R;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImc6L3JlYWN0LW5leHVzL3JlYWN0LXJhaWxzL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6QixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEMsSUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNqQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuQyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDckMsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzNDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN2QyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM3QyxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNqRCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakMsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDN0MsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZDLElBQU0seUJBQXlCLEdBQUcsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFDakYsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxV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bGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJzZ0bzUvcG9seWZpbGwnKTtcbmNvbnN0IFByb21pc2UgPSByZXF1aXJlKCdibHVlYmlyZCcpO1xuY29uc3QgJCA9IHJlcXVpcmUoJy4vUi4kJyk7XG5jb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoLW5leHQnKTtcbmNvbnN0IEFuaW1hdGUgPSByZXF1aXJlKCcuL1IuQW5pbWF0ZScpO1xuY29uc3QgQXBwID0gcmVxdWlyZSgnLi9SLkFwcCcpO1xuY29uc3QgQXN5bmMgPSByZXF1aXJlKCcuL1IuQXN5bmMnKTtcbmNvbnN0IENsaWVudCA9IHJlcXVpcmUoJy4vUi5DbGllbnQnKTtcbmNvbnN0IENvbXBvbmVudCA9IHJlcXVpcmUoJy4vUi5Db21wb25lbnQnKTtcbmNvbnN0IENvcmRvdmEgPSByZXF1aXJlKCcuL1IuQ29yZG92YScpO1xuY29uc3QgRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4vUi5EaXNwYXRjaGVyJyk7XG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCcuL1IuRXZlbnRFbWl0dGVyJyk7XG5jb25zdCBGbHV4ID0gcmVxdWlyZSgnLi9SLkZsdXgnKTtcbmNvbnN0IEZ1bGxzY3JlZW4gPSByZXF1aXJlKCcuL1IuRnVsbHNjcmVlbicpO1xuY29uc3QgSGlzdG9yeSA9IHJlcXVpcmUoJy4vUi5IaXN0b3J5Jyk7XG5jb25zdCBpbnN0YW50aWF0ZVJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2luc3RhbnRpYXRlUmVhY3RDb21wb25lbnQnKTtcbmNvbnN0IExvY2FsaXplID0gcmVxdWlyZSgnLi9SLkxvY2FsaXplJyk7XG5jb25zdCBMb2NrID0gcmVxdWlyZSgnLi9SLkxvY2snKTtcbmNvbnN0IFB1cmUgPSByZXF1aXJlKCcuL1IuUHVyZScpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RDaGlsZHJlbiA9IHJlcXVpcmUoJy4vUi5SZWFjdENoaWxkcmVuJyk7XG5jb25zdCBSZWFjdENyZWF0ZUNsYXNzID0gcmVxdWlyZSgnLi9SLlJlYWN0Q3JlYXRlQ2xhc3MnKTtcbmNvbnN0IFJvb3QgPSByZXF1aXJlKCcuL1IuUm9vdCcpO1xuY29uc3QgUm91dGVyID0gcmVxdWlyZSgnbmV4dXMtcm91dGVyJyk7XG5jb25zdCBzaG91bGQgPSBfLnNob3VsZDtcbmNvbnN0IFN0b3JlID0gcmVxdWlyZSgnLi9SLlN0b3JlJyk7XG5jb25zdCBXaW5kb3cgPSByZXF1aXJlKCcuL1IuV2luZG93Jyk7XG5jb25zdCBYV2luZG93ID0gcmVxdWlyZSgnLi9SLlhXaW5kb3cnKTtcblxuXG4vLyBUb3AgbGV2ZWwgZGVwZW5kZW5jaWVzXG5jb25zdCBSID0geyBfLCBzaG91bGQsIFJlYWN0LCBpbnN0YW50aWF0ZVJlYWN0Q29tcG9uZW50LCBMb2NrLCBSb3V0ZXIgfTtcblxuLy8gUmVhY3QgbW9ua2V5IHBhdGNoZXNcblIuUmVhY3RDaGlsZHJlbiA9IFJlYWN0Q2hpbGRyZW4oUik7XG5SLlJlYWN0Q3JlYXRlQ2xhc3MgPSBSZWFjdENyZWF0ZUNsYXNzKFIpO1xuXG4vLyBSZWFjdCBOZXh1cyBDb3JlXG5SLlB1cmUgPSBQdXJlKFIpO1xuUi5Bc3luYyA9IEFzeW5jKFIpO1xuUi5BbmltYXRlID0gQW5pbWF0ZShSKTtcblIuRmx1eCA9IEZsdXgoUik7XG5SLiQgPSAkKFIpO1xuUi5BcHAgPSBBcHAoUik7XG5SLkNsaWVudCA9IENsaWVudChSKTtcblIuRGlzcGF0Y2hlciA9IERpc3BhdGNoZXIoUik7XG5SLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcihSKTtcblIuU3RvcmUgPSBTdG9yZShSKTtcblxuLy8gUmVhY3QgTmV4dXMgY29tcG9uZW50c1xuUi5Db21wb25lbnQgPSBDb21wb25lbnQoUik7XG5SLlJvb3QgPSBSb290KFIpO1xuXG4vLyBSZWFjdCBOZXh1cyBBcHAgcGx1Z2luc1xuUi5QbHVnaW5zID0ge307XG5SLlBsdWdpbnMuQ29yZG92YSA9IENvcmRvdmEoUik7XG5SLlBsdWdpbnMuRnVsbHNjcmVlbiA9IEZ1bGxzY3JlZW4oUik7XG5SLlBsdWdpbnMuSGlzdG9yeSA9IEhpc3RvcnkoUik7XG5SLlBsdWdpbnMuTG9jYWxpemUgPSBMb2NhbGl6ZShSKTtcblIuUGx1Z2lucy5XaW5kb3cgPSBXaW5kb3coUik7XG5SLlBsdWdpbnMuWFdpbmRvdyA9IFhXaW5kb3coUik7XG5cbm1vZHVsZS5leHBvcnRzID0gUjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==