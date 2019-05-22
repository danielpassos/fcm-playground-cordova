const app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener("deviceready", this.onDeviceReady.bind(this),
            false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent("deviceready");

        const push = PushNotification.init({
            android: {},
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            }
        });

        push.on('registration', (registration) => {
            console.log('Device registered', registration);
        });

        push.on('notification', (notification) => {
            console.log('Received a notification', notification);
        });

        push.on('error', (e) => {
            console.error('Error with Push plugin', e);
        });
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        const parentElement = document.getElementById(id);
        const listeningElement = parentElement.querySelector(".listening");
        const receivedElement = parentElement.querySelector(".received");

        listeningElement.setAttribute("style", "display:none;");
        receivedElement.setAttribute("style", "display:block;");

        console.log("Received Event: " + id);
    }
};

app.initialize();
