class Form {
    constructor() {
    }

    display() {
        var title = createElement('h2');
        title.html("car Racing Game")
        title.position(200, 200);
        var input = createInput("name");
        input.position(200, 250);
        var Button = createButton("start");
        Button.position(200, 350)
        Button.mousePressed(function () 
        {
            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name)
            player.updateCount(playerCount)
            input.hide();
            Button.hide();
            var greeting = createElement('h3')
            greeting.position(200, 250)
            greeting.html("hello " + name)
        })
    }
}