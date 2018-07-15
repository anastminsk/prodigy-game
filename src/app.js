import Loading from './screens/home';
import Battle from 'screens/battle';
import Hero from './components/hero';
import Enemy from './components/enemy';
import Score from './components/score';
import Game from './components/game';
import Configuration from './components/configuration';
import { simpleMathTask } from './components/tasks/simpleMath';
import { engToRuTask } from './components/tasks/engToRu';
import { listeningTask } from './components/tasks/listening';
import { citiesTask } from './components/tasks/cities';
import { animalsTask } from './components/tasks/animals';
import { APPEARANCE } from './assets/data/heroAppearance.js';
import { ENEMY_NAMES } from './assets/data/enemyNames.js';

const hero = new Hero();
const enemy = new Enemy(ENEMY_NAMES);
const score = new Score();
const battle = new Battle(score);
const TASKS = {simpleMathTask, engToRuTask, listeningTask, citiesTask, animalsTask};
const game = new Game(battle, enemy, TASKS);
const configuration = new Configuration(hero, APPEARANCE, game);

function ready() {
  let loading = new Loading();
  loading.init(score);
}

configuration.init();

document.addEventListener("DOMContentLoaded", ready);