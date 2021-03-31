import './main.scss';
import m from "mithril"



window.MediaManager = (function () {
    
    class MediaManager {
        constructor(dataSetup) {
            this.dataSetup = dataSetup;
            this.events = {};
            this.url = "";
        }
        on(type, callback) {
            this.events[type] = this.events[type] || [];
            this.events[type].push(callback);
        }
        open() {
            m.render(root, <MyComponent/>)
        }
    }
    return MediaManager;
}());

var root = document.body;

function MyComponent() {
    return {
        view: () => (
            <main>
                <h1>Hello world</h1>
            </main>
        )
    }
}