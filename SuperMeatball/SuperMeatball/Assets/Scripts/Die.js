#pragma strict

import UnityEngine.SceneManagement;

function Update () 
{

}

function Die(){
	SceneManager.LoadScene(SceneManager.GetActiveScene().name);
}