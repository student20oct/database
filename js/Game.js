class Game{
    constructor(){

    }
    getState(){
    var GameStateref=database.ref('gameState')
    GameStateref.on("value",function(data) {
    gameState=data.val()
    })
}
Update(state){
database.ref('/').update({
    gameState:state
})
}
start(){
    if(gameState===0){
        player=new Player();
        form=new Form();
        form.display();
        player.getCount();
    }
}
}