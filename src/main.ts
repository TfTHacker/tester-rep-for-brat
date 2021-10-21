import {  Plugin } from 'obsidian';

const version = "1.0.4";

export default class MyPlugin extends Plugin {

	async onload() {
		console.log('Loading Tester for brat ' + version);
	}

	async onunload() {
		console.log('Unload Tester ' + version);
	}
}
