﻿
import { createApp } from 'vue'
import { createStore } from 'vuex'
import mediaManager from './components/MediaManager.vue'
import {state,getters,mutations,actions} from "./store/store";
import 'es6-promise/auto'

window.MediaManager = (function () {

    class MediaManager {
        constructor(dataSetup) {
            this.root = document.createElement("div");
            this.body = document.body;
            this.dataSetup = dataSetup;
            this.events = {};
            this.app = null;
            this.emit = null;
            this.init()
        }
        init(){
            this.root.setAttribute("id","root-media-upload")
            this.root.style.display = "none";
            this.body.appendChild(this.root)
            this.emit = (type,data)=>{
                let emitEvent = this.events[type];
                if (emitEvent){
                    emitEvent(data)
                }
            }
            this.app = createApp(mediaManager , {emitEvent : this.emit });

            let dataSetup = this.dataSetup

            let store  = createStore({
                state () {
                    return state(dataSetup)
                },
                getters: {
                    ...getters
                },
                mutations: {
                   ...mutations
                },
                actions: {
                    ...actions
                }
            })

            this.app.use(store);
            this.app.mount('#root-media-upload');
        }
        on(type, callback) {
            this.events[type] = callback;
        }
        open() {
            this.root.style.display = "block";
        }
        close() {
            this.root.style.display = "none";
        }
    }
    return MediaManager;
}());


