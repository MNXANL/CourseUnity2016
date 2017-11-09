#pragma strict

import UnityEngine.UI;
import UnityEngine.SceneManagement;


private var i : int = 0;
private var playerStartX : int = 0;
public var scoreText : Text;
public var scoreMax : Text;

private var player : GameObject;


function Start () {
	player = GameObject.FindWithTag("Player");
	playerStartX = player.transform.position.x;

	if (PlayerPrefs.HasKey("Highscore")) {
		var hs : int = PlayerPrefs.GetInt("Highscore");
		scoreMax.text = "Max = [" + hs + "]";
	}
	else {
		scoreMax.text = "Max = [---]";
	}
}

function CoinGet() {
	++i;
}

function FixedUpdate() {
	scoreText.text = "[" + i + "]";
}

function OnPlayerDie() {
	if (!PlayerPrefs.HasKey("Highscore") || i>PlayerPrefs.GetInt("Highscore")) {
		PlayerPrefs.SetInt("Highscore", i);
	} 
}