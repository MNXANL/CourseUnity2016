#pragma strict

import UnityEngine.SceneManagement;


function Start () {

}

function Update () {

}

function StartGame() {
	SceneManager.LoadScene("Scene1");
}

function GoToMenu() {
	SceneManager.LoadScene("Menu");
}


function ExitGame() {
	Application.Quit();
}