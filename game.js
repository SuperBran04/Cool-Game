
//references
const healthReference = document.getElementById('enemyHealth');
const enemyReference = document.getElementById('enemy');
const attackButtonReference = document.getElementById('attackButton');
const enemyHealthTextReference = document.getElementById('healthText');
const playerHealthTextReference = document.getElementById('playerHealth');
const playerManaTextReference = document.getElementById('playerMana');
const enemyAttackReference = document.getElementById('enemyAttackButton');
const graphicsContainerReference = document.getElementById('graphicsContainer');
//const restartButtonReference = document.getElementById('restartButton');
const spellsMenuReference = document.getElementById('spellMenu');
const spellButtonReference = document.getElementById('spellButton');
const messageBoxReference = document.getElementById('textContainer');
const enemyMessageBoxReference = document.getElementById('enemyTextContainer');
const enemyFightingReference = document.getElementById('enemyType');
const enemyDefeatedButton = document.getElementById('enemyDefeatedButton');

//defining basic variables
let enemyHealth = 100;
let playerHealth = 100;
let playerMana = 100;
healthReference.style.width = '100%';
let attackPower = 0;
let enemyAttackPower = 0;
let recoveredMana = 0;
let recoveredHealth = 0;
let wordRandomizer = 0;
let enemyType;
let attackWordArray;
/*for timed turns
let enemyAttacking = false;*/
let enemyDead = false;
let playerDead = false;

//functions
function decideEnemy(){
    let enemyChoiceNumber = Math.ceil(Math.random()*7)
    if(enemyChoiceNumber==1){
        enemyType = 'The shape';
    }else if((enemyChoiceNumber==2) || (enemyChoiceNumber==7)){
        enemyType = 'Siegward';
    }else if(enemyChoiceNumber==3){
        enemyType = 'Broom Man';
    }else if(enemyChoiceNumber==4){
        enemyType = 'Man Broom';
    }else if((enemyChoiceNumber==5) || (enemyChoiceNumber==6)){
        enemyType = 'Demoman';
    }
    console.log(enemyType);
}

function restart(){
    decideEnemy();
    graphicsContainerReference.style.opacity = '100%';
    playerHealthTextReference.innerText = "100";
    playerHealth = 100;
    playerManaTextReference.innerText = "100";
    playerMana = 100;
    enemyHealthTextReference.innerText = "100";
    enemyHealth = 100;
    healthReference.style.width = enemyHealth + '%';
    enemyDead = false;
    if(enemyType=='The shape'){
        messageBoxReference.innerText = "While walking along during your great adventures, you stmble across a shape.";
        enemyReference.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png';
        enemyFightingReference.innerText = "You're fighting a shape";
    }else if(enemyType=='Siegward'){
        messageBoxReference.innerText = "While walking along during your great adventures, you find Siegward of Catarina.";
        enemyReference.src = 'data:image/jpeg;base64,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';
        enemyFightingReference.innerText = "You're fighting Siegward of Catarina";
    }else if(enemyType=='Broom Man'){
        messageBoxReference.innerText = "While you were walking, Broom Man zooms overhead";
        enemyReference.src = 'https://previews.123rf.com/images/leenadamle/leenadamle0907/leenadamle090700013/5277721-a-cute-character-broom-man-teaching-you-the-importance-of-cleanliness-.jpg';
        enemyFightingReference.innerText = "You're fighting Broom Man";
    }else if(enemyType=='Man Broom'){
        messageBoxReference.innerText = "While walking along, Man Broom sweeps your feet.";
        enemyReference.src = 'https://previews.123rf.com/images/leenadamle/leenadamle0907/leenadamle090700015/5277723-a-cute-character-broom-man-teaching-you-the-importance-of-cleanliness-.jpg';
        enemyFightingReference.innerText = "You're fighting Man Broom";
    }else if(enemyType=='Demoman'){
        messageBoxReference.innerText = "While minding your own buisness, Demoman stumbles into you.";
        enemyReference.src = 'https://wiki.teamfortress.com/w/images/thumb/a/af/Demoman_taunt_laugh.png/350px-Demoman_taunt_laugh.png';
        enemyFightingReference.innerText = "You're fighting Demoman"
    }
    enemyMessageBoxReference.innerText = "";
    enemyDefeatedButton.style.visibility = "hidden";
}

restart();

function reset(){
    decideEnemy();
    enemyHealthTextReference.innerText = "100";
    enemyHealth = 100;
    healthReference.style.width = enemyHealth + '%';
    enemyDead = false;
    if(enemyType=='The shape'){
        messageBoxReference.innerText = "While walking along during your great adventures, you stmble across a shape.";
        enemyReference.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png';
        enemyFightingReference.innerText = "You're fighting a shape";
    }else if(enemyType=='Siegward'){
        messageBoxReference.innerText = "While walking along during your great adventures, you find Siegward of Catarina.";
        enemyReference.src = 'data:image/jpeg;base64,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';
        enemyFightingReference.innerText = "You're fighting Siegward of Catarina";
    }else if(enemyType=='Broom Man'){
        messageBoxReference.innerText = "While you were walking, Broom Man zooms overhead";
        enemyReference.src = 'https://previews.123rf.com/images/leenadamle/leenadamle0907/leenadamle090700013/5277721-a-cute-character-broom-man-teaching-you-the-importance-of-cleanliness-.jpg';
        enemyFightingReference.innerText = "You're fighting Broom Man";
    }else if(enemyType=='Man Broom'){
        messageBoxReference.innerText = "While walking along, Man Broom sweeps your feet.";
        enemyReference.src = 'https://previews.123rf.com/images/leenadamle/leenadamle0907/leenadamle090700015/5277723-a-cute-character-broom-man-teaching-you-the-importance-of-cleanliness-.jpg';
        enemyFightingReference.innerText = "You're fighting Man Broom";
    }else if(enemyType=='Demoman'){
        messageBoxReference.innerText = "While minding your own buisness, Demoman stumbles into you.";
        enemyReference.src = 'https://wiki.teamfortress.com/w/images/thumb/a/af/Demoman_taunt_laugh.png/350px-Demoman_taunt_laugh.png';
        enemyFightingReference.innerText = "You're fighting Demoman"
    }
    enemyMessageBoxReference.innerText = "";
    enemyDefeatedButton.style.visibility = "hidden";
}

function isEnemyDead(){
    if(enemyHealth<=0){
        enemyHealthTextReference.innerText = "0";
        healthReference.style.width = '0%';
        enemyDead = true;
        if(enemyType=='The shape'){
            messageBoxReference.innerText = "You deleted the shape.";
        }else if(enemyType=='Siegward'){
            messageBoxReference.innerText = "You defeat Siegward in a duel, and you have a nice toast together.";
        }else if(enemyType=='Broom Man'){
            messageBoxReference.innerText = "You knock Broom Man off his broom and he dies.";
        }else if(enemyType=='Man Broom'){
            messageBoxReference.innerText = "You break Man Broom in half.";
        }else if(enemyType=='Demoman'){
            messageBoxReference.innerText = "You hit demoman and he sticky jumps away.";
        }
        enemyMessageBoxReference.innerText = "";
        enemyDefeatedButton.style.visibility = "visible";
    }
}

/* ths is if it was a real time turn based combat
function attackDelay(){
    if(enemyDead===false){
        setTimeout(() => {enemyAttack();}, 500);
        enemyAttacking = true;
    }
}
*/

function enemyMessage(){
    if(enemyDead===false){
        switch(enemyType){

            case 'The shape':
                attackWordArray = ["pokes you with one of its suprisingly sharp corners", "spews a collection of geometric objects at you"];
            break;
            case 'Siegward':
                attackWordArray = ["stabs you", "slices you", "throws Siegbrau at you"];
            break;
            case 'Broom Man':
                attackWordArray = ["sweeps your face", "bonks you with his broom", "throws lightning at you"];
            break;
            case 'Man Broom':
                attackWordArray = ["sweeps your face with his feet?", "hits you with... himself(?)"];
            break;
            case 'Demoman':
                attackWordArray = ["shoots you with his grenade launcher", "explodes you with sticky bombs", "hits you with his bottle", "stabs you with the eyelander"];
            break;
            default:
                attackWordArray = 'you broke it';
            break;
        }
        let wordChoice = attackWordArray[Math.ceil(Math.random() * attackWordArray.length) - 1];
        enemyMessageBoxReference.innerText = enemyType + " " + wordChoice + " for " + enemyAttackPower + " damage.";
    }else{
        enemyMessageBoxReference.innerText = "";
    }
}

function message(action){
    if(enemyDead==false){
        switch(action){
            case 'attack':
                let attackWordArray = ["slap", "punch", "poke", "kick", "pummel"];
                let wordChoice = attackWordArray[Math.ceil(Math.random() * (attackWordArray.length - 1))];
                messageBoxReference.innerText = "You " + wordChoice + " " + enemyType + " for " + attackPower + " damage.";
            break;
            case 'playerDead':
                messageBoxReference.innerText = "You died. You're fighting " + enemyType + " and you died.";
            break;
            case 'recover':
                messageBoxReference.innerText = "You recovered " + recoveredHealth + " health and " + recoveredMana + " mana."
            break;
            case 'tazer':
                wordRandomizer = Math.ceil(Math.random() * 2);
                if(wordRandomizer==1){
                    messageBoxReference.innerText = "You call down an airstrike from Zeus for " + attackPower + " damage."
                    enemyMessageBoxReference.innerText = "The enemy is paralyzed for this turn.";
                }else if(wordRandomizer==2){
                    messageBoxReference.innerText = "God hath smitten your enemy on your behalf for a holy " + attackPower + " damage."
                    enemyMessageBoxReference.innerText = "The enemy is paralyzed for this turn.";
                }
            break;
            case 'fireball':
                wordRandomizer = Math.ceil(Math.random() * 2);
                if(wordRandomizer==1){
                    messageBoxReference.innerText = "You hurl a ball of fire at your enemy for " + attackPower + " damage."
                }else if(wordRandomizer==2){
                    messageBoxReference.innerText = "You conjure up a flaming baseball and hit it at your enemy with a likewise flaming baseball bat for " + attackPower + " damage."
                }
            break;
            default:
                messageBoxReference.innerText = "This isnt supposed to be here. What did you do?";
            break;
        }
    }else{
        isEnemyDead();
    }
}

function attack(){
    if((enemyDead===false) && (playerDead===false)){
        attackPower = ((Math.floor(Math.random() * 5)) + 5);
        console.log('Attack power: ' + attackPower)
        enemyHealth = enemyHealth - attackPower;
        enemyHealthTextReference.innerText = enemyHealth;
        healthReference.style.width = enemyHealth + '%';
        message('attack');
        isEnemyDead();
        //attackDelay();
        enemyAttack();
    }
}

function recover(){
    recoveredHealth = Math.ceil((Math.random()*5)+5);
    recoveredMana = (Math.ceil((Math.random()*5)+5));
    playerHealth = playerHealth + recoveredHealth;
    playerHealthTextReference.innerText = playerHealth;
    playerMana = playerMana + recoveredMana;
    playerManaTextReference.innerText = playerMana;
    if(playerMana>=100){
        playerMana = 100;
        playerManaTextReference.innerText = playerMana;
    }
    if(playerHealth>=100){
        playerHealth = 100;
        playerHealthTextReference.innerText = playerHealth;
        message('recover');
    }
}

function chooseSpell(){

    if((enemyDead===false) && (playerDead===false)){
        switch(spellsMenuReference.options[spellsMenuReference.selectedIndex].value){

            case 'recover':
            recover();
            let enemyAttackChance = (Math.ceil(Math.random() * 9)) + 1;
            if(enemyAttackChance==2){
                enemyAttack();
            }else{
                enemyMessageBoxReference.innerText = "";
            }
            break;
            case 'zap':
            if(playerMana>=25){
                attackPower = Math.ceil((Math.random()*20)+10);
                enemyHealth = enemyHealth - attackPower;
                enemyHealthTextReference.innerText = enemyHealth;
                healthReference.style.width = enemyHealth + '%';
                playerMana = playerMana - 25;
                playerManaTextReference.innerText = playerMana;
                isEnemyDead();
                //attackDelay();
                message('tazer');
            }
            break;
            case 'fire':
            if(playerMana>=10){
                attackPower = Math.ceil((Math.random()*5)+10);
                enemyHealth = enemyHealth - attackPower;
                enemyHealthTextReference.innerText = enemyHealth;
                healthReference.style.width = enemyHealth + '%';
                playerMana = playerMana - 10;
                playerManaTextReference.innerText = playerMana;
                isEnemyDead();
                //attackDelay();
                message('fireball');
                enemyAttack();
            }
            break;
            default:
            messageBoxReference.innerText = 'Pick A Spell Dummy';
            break;
        }
    }
}


function enemyAttack(){
    enemyAttackPower = ((Math.floor(Math.random() * 4)) + 4);
    console.log('Enemy attack power: ' + enemyAttackPower);
    playerHealth = playerHealth - enemyAttackPower;
    playerHealthTextReference.innerText = playerHealth;
    if(playerHealth<=0){
        die();
    }else{
        enemyMessage();
    }
    //for timed turns
    //enemyAttacking = false;
}

function die(){
    playerDead = true;
    playerHealthTextReference.innerText = "0";
    enemyMessageBoxReference.innerText = "";
    message('playerDead');
}